import net from "net";
import path from "path";
import fs from "fs";

const color = {
  reset: '\u001B[0m',
  green: '\u001B[32m',
  cyan: '\u001B[36m',
  red: '\u001B[31m',
  yellow: '\u001B[33m',
  magenta: '\u001B[35m',
  dim: '\u001B[2m',
};

const log = {
  info: (msg: string) => console.log(`${color.cyan}ℹ ${msg}${color.reset}`),
  success: (msg: string) => console.log(`${color.green}✔ ${msg}${color.reset}`),
  error: (msg: string) => console.error(`${color.red}✖ ${msg}${color.reset}`),
  warn: (msg: string) => console.warn(`${color.yellow}⚠ ${msg}${color.reset}`),
  build: (msg: string) => console.log(`\n${color.magenta}🚀 Building ${msg}...${color.reset}`),
  stderr: (msg: string) => console.error(`${color.dim}${msg}${color.reset}`),
};

const debounced = <CB extends () => unknown>(cb: CB, ms: number) => {
  let currentTimeout: undefined | NodeJS.Timeout;

  return () => {
    if (currentTimeout) clearTimeout(currentTimeout);
    currentTimeout = setTimeout(() => cb(), ms);
  };
};

let client: net.Socket | null = null;
let clientIdx = 0;
export const hackwatcher = (
  socketPath: string,
  projectEntryPath: string | string[],
  debouncedMs = 100,
  maxDelayMs = 5000,
) => {
  let currentIdx = ++clientIdx;
  let last = Date.now();
  const entries = Array.isArray(projectEntryPath) ? projectEntryPath : [projectEntryPath];
  const filePaths = entries.map((entry) => path.join(process.cwd(), entry));

  const watcherFn = debounced(() => {
    log.info('Change detected. restarting.');
    for (const fp of filePaths) {
      fs.utimes(fp, new Date(), new Date(), () => { });
    }
  }, debouncedMs);

  let retryDelay = 1000;

  const connect = () => {
    if (client) {
      client.destroy();
      client = null;
    }

    client = net.createConnection({ path: socketPath });
    let localClient = client;

    client.on("connect", () => {
      log.info("Connected to UNIX socket");
      retryDelay = 1000; // reset on success
    });

    client.on("data", (data) => {
      if (currentIdx !== clientIdx) {
        localClient.destroy();
        return;
      }
      const rows = data.toString().split('\n').map((d) => {
        try {
          return JSON.parse(d);
        } catch {
          return undefined;
        }
      })
        .filter(Boolean)
        .filter(d => d.timestamp > last);

      let rebuiltRow = rows.find((r) => r.type === 'build_success' && r.package === 'ui');

      if (rebuiltRow) {
        last = rebuiltRow.timestamp;
        log.info(JSON.stringify(rebuiltRow));
        watcherFn();
      }
    });

    client.on("end", () => {
      log.info("Socket connection ended. Waiting to reconnect...");
      scheduleReconnect();
    });

    client.on("error", (err) => {
      scheduleReconnect();
    });
  };

  const scheduleReconnect = () => {
    if (currentIdx !== clientIdx) return;
    setTimeout(() => {
      retryDelay = Math.min(retryDelay * 1.1, maxDelayMs);
      connect();
    }, retryDelay);
  };

  connect();
};
