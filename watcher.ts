/* eslint-disable unicorn/no-process-exit */
import { unlink } from 'node:fs/promises';
import type { Server, Socket } from 'node:net';
import { createServer } from 'node:net';
import path from 'node:path';
import { watch } from 'chokidar';
import { parse } from 'shell-quote';

const PACKAGES: Record<string, Package> = {
  tailwindcss: {
    name: 'tailwindcss',
    priority: 1,
    build: [{ command: 'pnpm run build' }],
    cwd: './packages/tailwindcss/',
    dependencies: ['primitives', 'icons', 'ui'],
    watchPaths: ['./src/', './tailwind.config.ts', './package.json'],
    buildOnLaunch: true,
  },
  primitives: {
    name: 'primitives',
    priority: 2,
    build: [{ command: 'pnpm run build.lib' }, { command: 'pnpm run build.types', stdout: true }],
    cwd: './packages/primitives/',
    dependencies: ['icons', 'ui'],
    watchPaths: ['./src/', './vite.config.*', './package.json'],
  },
  icons: {
    name: 'icons',
    priority: 3,
    build: [{ command: 'pnpm run build.lib' }, { command: 'pnpm run build.types', stdout: true }],
    cwd: './packages/icons/',
    dependencies: ['ui'],
    watchPaths: ['./src/', './vite.config.*', './package.json'],
  },
  ui: {
    name: 'ui',
    priority: 4,
    build: [{ command: 'pnpm run build.lib' }, { command: 'pnpm run build.types', stdout: true }],
    cwd: './packages/ui/',
    dependencies: ['docs'],
    watchPaths: ['./src/', './vite.config.*', './package.json'],
  },
};

type Success<T> = { readonly success: true; readonly data: T };
type Failure<E = Error> = { readonly success: false; readonly error: E };
type Result<T, E = Error> = Success<T> | Failure<E>;

const createSuccess = <T>(data: T): Result<T> => ({ success: true, data });
const createError = <E = Error>(error: E): Result<never, E> => ({ success: false, error });

const tryCatchAsync = async <T>(fn: () => Promise<T>): Promise<Result<T>> => {
  try {
    const data = await fn();
    return createSuccess(data);
  } catch (error) {
    return createError(error instanceof Error ? error : new Error(String(error)));
  }
};

type BuildCommand = {
  command: string;
  stdout?: boolean; // default false
};

interface Package {
  readonly name: string;
  readonly priority: number;
  readonly build: BuildCommand[];
  readonly cwd: string;
  readonly dependencies: readonly string[];
  readonly watchPaths: readonly string[];
  readonly buildOnLaunch?: boolean;
}

// JSON Stream Types
type ActionType =
  | 'build_start'
  | 'build_success'
  | 'build_failure'
  | 'command_start'
  | 'command_success'
  | 'command_failure'
  | 'queue_update'
  | 'watch_start'
  | 'file_change'
  | 'initial_build_start'
  | 'initial_build_complete'
  | 'watch_mode_start';

interface StreamAction {
  timestamp: number;
  type: ActionType;
  package?: string;
  command?: string;
  exitCode?: number;
  stderr?: string;
  duration?: number;
  queue?: string[];
  filePath?: string;
  message?: string;
  metadata?: Record<string, unknown>;
}

// Unix Socket JSON Stream Manager
class UnixSocketStreamManager {
  private server: Server;
  private clients: Set<Socket> = new Set();
  private isRunning: boolean = false;
  private actionQueue: StreamAction[] = [];

  constructor(private socketPath: string) {
    this.server = createServer();
    this.setupServer();
  }

  private setupServer(): void {
    this.server.on('connection', (socket) => {
      log.info('[New client connected to build stream]');
      this.clients.add(socket);

      // Send welcome message
      this.sendToSocket(socket, {
        timestamp: Date.now(),
        type: 'watch_mode_start',
        message: 'Connected to build stream',
      });

      // Send recent actions to new client
      this.actionQueue.slice(-10).forEach((action) => {
        this.sendToSocket(socket, action);
      });

      socket.on('close', () => {
        log.info('[Client disconnected from build stream]');
        this.clients.delete(socket);
      });

      socket.on('error', (error) => {
        log.error('[Socket error]', error);
        this.clients.delete(socket);
      });
    });

    this.server.on('error', (error) => {
      log.error('[Unix socket server error]', error);
    });
  }

  private sendToSocket(socket: Socket, action: StreamAction): void {
    try {
      const jsonLine = JSON.stringify(action) + '\n';
      socket.write(jsonLine);
    } catch (error) {
      console.error('Failed to write to socket:', error);
    }
  }

  async start(): Promise<void> {
    try {
      // Clean up existing socket file
      await unlink(this.socketPath).catch(() => { });

      return new Promise((resolve, reject) => {
        this.server.listen(this.socketPath, () => {
          this.isRunning = true;
          console.log(`Unix socket server listening on ${this.socketPath}`);
          resolve();
        });

        this.server.on('error', reject);
      });
    } catch (error) {
      console.error(`Failed to start Unix socket server: ${error}`);
      throw error;
    }
  }

  writeAction(action: StreamAction): void {
    if (!this.isRunning) return;

    // Add to queue (keep last 100 actions for new clients)
    this.actionQueue.push(action);
    if (this.actionQueue.length > 100) {
      this.actionQueue.shift();
    }

    // Broadcast to all connected clients
    const disconnectedClients: Socket[] = [];

    this.clients.forEach((client) => {
      if (client.destroyed) {
        disconnectedClients.push(client);
      } else {
        this.sendToSocket(client, action);
      }
    });

    // Clean up disconnected clients
    disconnectedClients.forEach((client) => {
      this.clients.delete(client);
    });
  }

  async close(): Promise<void> {
    if (!this.isRunning) return;

    this.isRunning = false;

    // Close all client connections
    this.clients.forEach((client) => {
      if (!client.destroyed) {
        client.end();
      }
    });
    this.clients.clear();

    // Close server
    return new Promise((resolve) => {
      this.server.close(() => {
        // Clean up socket file
        unlink(this.socketPath).catch(() => { });
        resolve();
      });
    });
  }

  getClientCount(): number {
    return this.clients.size;
  }
}

// Global Unix socket stream instance
let socketStream: UnixSocketStreamManager;

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

type Deps = { dependsOn: string[]; dependencies: string[] };

function createDependentsMap(packages: Record<string, Package>): Readonly<Record<string, Deps>> {
  const dependentsMap: Record<string, Deps> = {};

  // Initialize all packages with empty arrays
  for (const name of Object.keys(packages)) {
    dependentsMap[name] = {
      dependsOn: [],
      dependencies: [],
    };
  }

  // Function to recursively collect all dependencies
  function collectDependencies(
    packageName: string,
    visited: Set<string> = new Set(),
    path: string[] = [],
  ): string[] {
    // Check for circular dependency
    if (path.includes(packageName)) {
      const cycle = [...path.slice(path.indexOf(packageName)), packageName];
      throw new Error(`Circular dependency detected: ${cycle.join(' -> ')}`);
    }

    // If already processed, return cached result
    if (visited.has(packageName)) {
      return dependentsMap[packageName]?.dependencies || [];
    }

    visited.add(packageName);
    const pkg = packages[packageName];
    if (!pkg) return [];

    const allDeps = new Set<string>();
    const currentPath = [...path, packageName];

    // Add direct dependencies
    for (const dep of pkg.dependencies) {
      if (packages[dep]) {
        allDeps.add(dep);
        // Recursively add transitive dependencies
        const transitiveDeps = collectDependencies(dep, visited, currentPath);
        transitiveDeps.forEach((d) => allDeps.add(d));
      }
    }

    return [...allDeps];
  }

  // Function to recursively collect all dependents
  function collectDependents(packageName: string, visited: Set<string> = new Set()): string[] {
    if (visited.has(packageName)) {
      return [];
    }

    visited.add(packageName);
    const allDependents = new Set<string>();

    // Find direct dependents
    for (const [name, pkg] of Object.entries(packages)) {
      if (pkg.dependencies.includes(packageName)) {
        allDependents.add(name);
        // Recursively add transitive dependents
        const transitiveDependents = collectDependents(name, new Set(visited));
        transitiveDependents.forEach((d) => allDependents.add(d));
      }
    }

    return [...allDependents];
  }

  // Populate dependencies and dependents recursively
  for (const name of Object.keys(packages)) {
    dependentsMap[name].dependencies = collectDependencies(name);
    dependentsMap[name].dependsOn = collectDependents(name);
  }

  return dependentsMap;
}

function getQueueUpdate(
  currentQueue: readonly string[],
  built: ReadonlySet<string>,
  packagesToAdd: readonly string[],
): { nextQueue: readonly string[]; newlyQueued: readonly string[] } {
  const newlyQueued = packagesToAdd.filter(
    (name) => PACKAGES[name] && !currentQueue.includes(name) && !built.has(name),
  );
  const nextQueue = [...currentQueue, ...newlyQueued].sort(
    (a, b) => PACKAGES[a].priority - PACKAGES[b].priority,
  );

  // Stream queue update
  socketStream?.writeAction({
    timestamp: Date.now(),
    type: 'queue_update',
    queue: [...nextQueue],
    metadata: {
      newlyQueued,
      currentQueueSize: currentQueue.length,
      nextQueueSize: nextQueue.length,
    },
  });

  return { nextQueue, newlyQueued };
}

type BuildResult = {
  command: string;
  success: boolean;
  stderr: string;
  exitCode: number;
};

async function executeSingleCommand(
  command: string,
  cwd: string,
  showStdout: boolean = false,
  packageName?: string,
): Promise<BuildResult> {
  const startTime = Date.now();

  // Stream command start
  socketStream?.writeAction({
    timestamp: Date.now(),
    type: 'command_start',
    package: packageName,
    command,
    metadata: { cwd, showStdout },
  });

  const splittedCommand: string[] = parse(command).filter(
    (token: unknown): token is string => typeof token === 'string',
  );

  const proc = Bun.spawn(splittedCommand, {
    cwd,
    stdin: null,
    stdout: showStdout ? 'inherit' : 'pipe',
    stderr: 'pipe',
  });

  // Capture stderr
  const stderrChunks: Uint8Array[] = [];
  if (proc.stderr) {
    const reader = proc.stderr.getReader();
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        stderrChunks.push(value);
      }
    } finally {
      reader.releaseLock();
    }
  }

  await proc.exited;

  // Combine stderr chunks
  const totalLength = stderrChunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const combinedStderr = new Uint8Array(totalLength);
  let offset = 0;
  for (const chunk of stderrChunks) {
    combinedStderr.set(chunk, offset);
    offset += chunk.length;
  }

  const stderr = new TextDecoder().decode(combinedStderr);
  const duration = Date.now() - startTime;
  const success = proc.exitCode === 0;
  const exitCode = proc.exitCode || 0;

  // Stream command result
  socketStream?.writeAction({
    timestamp: Date.now(),
    type: success ? 'command_success' : 'command_failure',
    package: packageName,
    command,
    exitCode,
    stderr: stderr.trim(),
    duration,
    metadata: { cwd },
  });

  return {
    command,
    success,
    stderr: stderr.trim(),
    exitCode,
  };
}

async function executeBuild(pkg: Package): Promise<Result<string, Error>> {
  const startTime = Date.now();

  log.build(`${pkg.name} (Priority: ${pkg.priority}) - ${pkg.build.length} command(s)`);

  // Stream build start
  socketStream?.writeAction({
    timestamp: Date.now(),
    type: 'build_start',
    package: pkg.name,
    metadata: {
      priority: pkg.priority,
      commandCount: pkg.build.length,
      cwd: pkg.cwd,
      dependencies: pkg.dependencies,
    },
  });

  const result = await tryCatchAsync(async () => {
    // Execute all commands concurrently
    const buildPromises = pkg.build.map(({ command, stdout }) =>
      executeSingleCommand(command, pkg.cwd, stdout, pkg.name),
    );

    const results = await Promise.all(buildPromises);

    // Separate successful and failed commands
    const successful = results.filter((r) => r.success);
    const failed = results.filter((r) => !r.success);

    // Log results
    if (successful.length > 0) {
      log.success(`${pkg.name}: ${successful.length}/${results.length} command(s) succeeded`);
      successful.forEach((r) => {
        log.info(`  ✔ ${r.command}`);
      });
    }

    if (failed.length > 0) {
      log.error(`${pkg.name}: ${failed.length}/${results.length} command(s) failed`);
      failed.forEach((r) => {
        log.error(`  ✖ ${r.command} (exit code: ${r.exitCode})`);
        if (r.stderr) {
          log.stderr(`    stderr: ${r.stderr}`);
        }
      });

      throw new Error(`${failed.length} command(s) failed for ${pkg.name}`);
    }

    return pkg.name;
  });

  const duration = Date.now() - startTime;

  // Stream build result
  if (result.success) {
    socketStream?.writeAction({
      timestamp: Date.now(),
      type: 'build_success',
      package: pkg.name,
      duration,
      metadata: {
        commandCount: pkg.build.length,
        priority: pkg.priority,
      },
    });
  } else {
    socketStream?.writeAction({
      timestamp: Date.now(),
      type: 'build_failure',
      package: pkg.name,
      duration,
      message: result.error.message,
      metadata: {
        commandCount: pkg.build.length,
        priority: pkg.priority,
      },
    });
  }

  return result;
}

async function processQueue(
  queue: readonly string[],
  built: ReadonlySet<string>,
  failed: ReadonlySet<string>,
  dependentsMap: Readonly<Record<string, Deps>>,
): Promise<{ built: ReadonlySet<string>; failed: ReadonlySet<string> }> {
  if (queue.length === 0) {
    return { built, failed };
  }
  const [packageToBuild, ...remainingQueue] = queue;
  const pkg = PACKAGES[packageToBuild];
  const buildResult = await executeBuild(pkg);
  if (buildResult.success) {
    const newBuilt = new Set(built).add(packageToBuild);
    const { nextQueue, newlyQueued } = getQueueUpdate(remainingQueue, newBuilt, pkg.dependencies);
    newlyQueued.forEach((name) => log.info(`Queued ${name}`));
    return processQueue(nextQueue, newBuilt, failed, dependentsMap);
  }
  log.error(`Build failed for ${packageToBuild}. Removing its dependencies from the queue.`);
  const newFailed = new Set(failed).add(packageToBuild);
  const dependenciesToPurge = new Set(dependentsMap[packageToBuild]?.dependencies ?? []);
  const cleanedQueue = remainingQueue.filter((name) => !dependenciesToPurge.has(name));
  const removedCount = remainingQueue.length - cleanedQueue.length;
  if (removedCount > 0) {
    log.warn(`Cleared ${removedCount} dependency package(s) from the queue.`);
  }
  return processQueue(cleanedQueue, built, newFailed, dependentsMap);
}

// --- Entry Point ---

const watchState = {
  queue: [] as string[],
  isBuilding: false,
};

async function processWatchQueue(dependentsMap: Readonly<Record<string, Deps>>) {
  if (watchState.isBuilding || watchState.queue.length === 0) return;
  watchState.isBuilding = true;
  log.info('Change detected, starting new build run...');

  const builtInThisRun = new Set<string>();
  while (watchState.queue.length > 0) {
    watchState.queue.sort((a, b) => PACKAGES[a].priority - PACKAGES[b].priority);
    const packageToBuild = watchState.queue.shift()!;
    if (builtInThisRun.has(packageToBuild)) continue;
    const buildResult = await executeBuild(PACKAGES[packageToBuild]);
    if (buildResult.success) {
      builtInThisRun.add(packageToBuild);
      const dependencies = dependentsMap[packageToBuild]?.dependencies ?? [];
      for (const dependent of dependencies) {
        if (!watchState.queue.includes(dependent)) {
          watchState.queue.push(dependent);
          log.info(`Queued dependent: ${dependent}`);
        }
      }
    } else {
      const dependentsToPurge = new Set(dependentsMap[packageToBuild].dependsOn);
      const originalQueueSize = watchState.queue.length;
      watchState.queue = watchState.queue.filter((name) => !dependentsToPurge.has(name));
      const removedCount = originalQueueSize - watchState.queue.length;
      if (removedCount > 0) {
        log.warn(`Cleared ${removedCount} dependent package(s) from this build run.`);
      }
    }
  }
  log.success('Build run finished. Watching for changes...');
  watchState.isBuilding = false;
  if (watchState.queue.length > 0) {
    process.nextTick(() => processWatchQueue(dependentsMap));
  }
}

async function main() {
  // Initialize Unix socket stream
  const socketPath = path.join('/tmp', 'onwo-watcher.sock');
  socketStream = new UnixSocketStreamManager(socketPath);

  try {
    await socketStream.start();
    log.info(`Unix socket stream started: ${socketPath}`);
  } catch (error) {
    log.error(`Failed to start Unix socket stream: ${error}`);
    process.exit(1);
  }

  // Handle cleanup on exit
  const cleanup = async () => {
    log.info('Shutting down...');
    await socketStream?.close();
    process.exit(0);
  };

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);

  const dependentsMap = createDependentsMap(PACKAGES);

  // --- 1. Perform Initial Build ---
  log.info('Starting initial build...');

  socketStream.writeAction({
    timestamp: Date.now(),
    type: 'initial_build_start',
    metadata: {
      totalPackages: Object.keys(PACKAGES).length,
      packagesWithBuildOnLaunch: Object.values(PACKAGES).filter((p) => p.buildOnLaunch).length,
    },
  });

  const packagesToBuild = Object.entries(PACKAGES)
    .filter(([_, v]) => v.buildOnLaunch === true)
    .map(([k]) => k);

  const { nextQueue: initialQueue, newlyQueued } = getQueueUpdate([], new Set(), packagesToBuild);

  if (initialQueue.length === 0) {
    log.warn('Initial build queue is empty. Nothing to do.');
  } else {
    log.info(`Initial packages to build: ${newlyQueued.join(', ')}`);
    const { failed } = await processQueue(initialQueue, new Set(), new Set(), dependentsMap);

    if (failed.size > 0) {
      log.error(
        `Initial build completed with ${failed.size} failure(s): ${[...failed].join(', ')}`,
      );
    } else {
      log.success('Initial build completed successfully!');
    }
  }

  socketStream.writeAction({
    timestamp: Date.now(),
    type: 'initial_build_complete',
    metadata: {
      totalPackages: Object.keys(PACKAGES).length,
      initialQueueSize: initialQueue.length,
    },
  });

  // --- 2. Unconditionally Enter Watch Mode ---
  log.info('Now watching for file changes...');

  socketStream.writeAction({
    timestamp: Date.now(),
    type: 'watch_start',
    metadata: {
      watchedPackages: Object.keys(PACKAGES),
      totalWatchPaths: Object.values(PACKAGES).reduce((sum, pkg) => sum + pkg.watchPaths.length, 0),
    },
  });

  Object.entries(PACKAGES).forEach(([name, pkg]) => {
    const watcher = watch(pkg.watchPaths as string[], {
      cwd: path.resolve(pkg.cwd),
      ignoreInitial: true,
    });

    const watcherFn = (filePath: string) => {
      log.info(`Change detected in ${name}: ${filePath}`);

      // Stream file change
      socketStream.writeAction({
        timestamp: Date.now(),
        type: 'file_change',
        package: name,
        filePath,
        metadata: {
          cwd: pkg.cwd,
          absolutePath: path.resolve(pkg.cwd, filePath),
          connectedClients: socketStream.getClientCount(),
        },
      });

      // Queue the changed package
      if (!watchState.queue.includes(name)) {
        watchState.queue.push(name);
      }

      // Queue all packages that depend on this one
      const dependents = dependentsMap[name]?.dependencies ?? [];

      for (const dependent of dependents) {
        if (!watchState.queue.includes(dependent)) {
          watchState.queue.push(dependent);
          log.info(`Queued dependent package: ${dependent}`);
        }
      }

      void processWatchQueue(dependentsMap);
    };

    watcher.on('add', watcherFn);
    watcher.on('change', watcherFn);
  });

  // Keep the process alive indefinitely for watchers.
  await new Promise(() => { });
}

await main();
