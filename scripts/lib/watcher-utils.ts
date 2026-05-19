/* eslint-disable unicorn/no-process-exit */
import { unlink } from 'node:fs/promises';
import type { Server, Socket } from 'node:net';
import { createServer } from 'node:net';
import path from 'node:path';

import type { Subprocess } from 'bun';
import { watch } from 'chokidar';
import { parse } from 'shell-quote';

export type Success<T> = { readonly success: true; readonly data: T };
export type Failure<E = Error> = { readonly success: false; readonly error: E };
export type Result<T, E = Error> = Success<T> | Failure<E>;

export const createSuccess = <T>(data: T): Result<T> => ({ success: true, data });
const createError = <E = Error>(error: E): Result<never, E> => ({ success: false, error });

// Global Unix socket stream instance
let socketStream: UnixSocketStreamManager;

export const tryCatchAsync = async <T>(fn: () => Promise<T>): Promise<Result<T>> => {
  try {
    const data = await fn();
    return createSuccess(data);
  } catch (error) {
    return createError(error instanceof Error ? error : new Error(String(error)));
  }
};

export type BuildCommand = {
  command: string;
  stdout?: boolean; // default false
  keepAlive?: boolean; // NEW: Flag for long-running processes like dev servers
};

export interface Package {
  readonly name: string;
  readonly priority: number;
  readonly build: BuildCommand[];
  readonly cwd: string;
  readonly dependencies: readonly string[];
  readonly watchPaths: readonly string[];
  readonly buildOnLaunch?: boolean;
}

// JSON Stream Types
export type ActionType =
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

export type StreamAction = {
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
};

// Unix Socket JSON Stream Manager
export class UnixSocketStreamManager {
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
      await unlink(this.socketPath).catch(() => {});

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
        unlink(this.socketPath).catch(() => {});
        resolve();
      });
    });
  }

  getClientCount(): number {
    return this.clients.size;
  }
}

export const color = {
  reset: '\u001B[0m',
  green: '\u001B[32m',
  cyan: '\u001B[36m',
  red: '\u001B[31m',
  yellow: '\u001B[33m',
  magenta: '\u001B[35m',
  dim: '\u001B[2m',
};

export const log = {
  info: (msg: string) => console.log(`${color.cyan}ℹ ${msg}${color.reset}`),
  success: (msg: string) => console.log(`${color.green}✔ ${msg}${color.reset}`),
  error: (msg: string) => console.error(`${color.red}✖ ${msg}${color.reset}`),
  warn: (msg: string) => console.warn(`${color.yellow}⚠ ${msg}${color.reset}`),
  build: (msg: string) => console.log(`\n${color.magenta}🚀 Building ${msg}...${color.reset}`),
  stderr: (msg: string) => console.error(`${color.dim}${msg}${color.reset}`),
};

export type Deps = { dependsOn: string[]; dependencies: string[] };

export function createDependentsMap(
  packages: Record<string, Package>,
): Readonly<Record<string, Deps>> {
  const dependentsMap: Record<string, Deps> = {};

  for (const name of Object.keys(packages)) {
    dependentsMap[name] = {
      dependsOn: [],
      dependencies: [],
    };
  }

  function collectDependencies(
    packageName: string,
    visited: Set<string> = new Set(),
    path: string[] = [],
  ): string[] {
    if (path.includes(packageName)) {
      const cycle = [...path.slice(path.indexOf(packageName)), packageName];
      throw new Error(`Circular dependency detected: ${cycle.join(' -> ')}`);
    }

    if (visited.has(packageName)) {
      return dependentsMap[packageName]?.dependencies || [];
    }

    visited.add(packageName);
    const pkg = packages[packageName];
    if (!pkg) return [];

    const allDeps = new Set<string>();
    const currentPath = [...path, packageName];

    for (const dep of pkg.dependencies) {
      if (packages[dep]) {
        allDeps.add(dep);
        const transitiveDeps = collectDependencies(dep, visited, currentPath);
        transitiveDeps.forEach((d) => allDeps.add(d));
      }
    }

    return [...allDeps];
  }

  function collectDependents(packageName: string, visited: Set<string> = new Set()): string[] {
    if (visited.has(packageName)) {
      return [];
    }

    visited.add(packageName);
    const allDependents = new Set<string>();

    for (const [name, pkg] of Object.entries(packages)) {
      if (pkg.dependencies.includes(packageName)) {
        allDependents.add(name);
        const transitiveDependents = collectDependents(name, new Set(visited));
        transitiveDependents.forEach((d) => allDependents.add(d));
      }
    }

    return [...allDependents];
  }

  for (const name of Object.keys(packages)) {
    dependentsMap[name].dependencies = collectDependencies(name);
    dependentsMap[name].dependsOn = collectDependents(name);
  }

  return dependentsMap;
}

export function getQueueUpdate(
  currentQueue: readonly string[],
  built: ReadonlySet<string>,
  packagesToAdd: readonly string[],
  packages: Record<string, Package>,
): { nextQueue: readonly string[]; newlyQueued: readonly string[] } {
  const newlyQueued = packagesToAdd.filter(
    (name) => packages[name] && !currentQueue.includes(name) && !built.has(name),
  );
  const nextQueue = [...currentQueue, ...newlyQueued].sort(
    (a, b) => packages[a].priority - packages[b].priority,
  );

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

export type BuildResult = {
  command: string;
  success: boolean;
  stderr: string;
  exitCode: number;
};

// NEW: State for managing long-running processes
export const runningProcesses: Map<string, Subprocess> = new Map();

// NEW: Helper to kill a running process by package name
export function killRunningProcess(packageName: string) {
  if (runningProcesses.has(packageName)) {
    log.info(`Stopping running process for package: ${packageName}`);
    const proc = runningProcesses.get(packageName)!;
    proc.kill(); // Sends SIGTERM, Bun handles platform differences
    runningProcesses.delete(packageName);
  }
}

// MODIFIED: This function now handles `keepAlive` commands
export async function executeSingleCommand(
  pkg: Package,
  buildCommand: BuildCommand,
): Promise<BuildResult> {
  const startTime = Date.now();
  const { command, stdout, keepAlive } = buildCommand;

  socketStream?.writeAction({
    timestamp: Date.now(),
    type: 'command_start',
    package: pkg.name,
    command,
    metadata: { cwd: pkg.cwd, stdout, keepAlive },
  });

  const splittedCommand: string[] = parse(command).filter(
    (token: unknown): token is string => typeof token === 'string',
  );

  // For keepAlive processes, we don't wait. We store the process and return.
  if (keepAlive) {
    log.info(`Starting keep-alive process for ${pkg.name}: ${command}`);
    const proc = Bun.spawn(splittedCommand, {
      cwd: pkg.cwd,
      stdin: 'inherit',
      stdout: 'inherit', // Always inherit for visibility of dev server output
      stderr: 'inherit',
    });
    runningProcesses.set(pkg.name, proc);
    // Assume success if spawn doesn't throw.
    return { command, success: true, stderr: '', exitCode: 0 };
  }

  // --- Original logic for normal, short-lived commands ---
  const proc = Bun.spawn(splittedCommand, {
    cwd: pkg.cwd,
    stdin: null,
    stdout: stdout ? 'inherit' : 'pipe',
    stderr: 'pipe',
  });

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

  socketStream?.writeAction({
    timestamp: Date.now(),
    type: success ? 'command_success' : 'command_failure',
    package: pkg.name,
    command,
    exitCode,
    stderr: stderr.trim(),
    duration,
    metadata: { cwd: pkg.cwd },
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
    // MODIFIED: Execute commands serially within a package to handle potential keepAlive commands correctly.
    // A package should generally have only one keepAlive command, and it should be last.
    const results: BuildResult[] = [];
    for (const buildCommand of pkg.build) {
      const singleResult = await executeSingleCommand(pkg, buildCommand);
      results.push(singleResult);
      if (!singleResult.success) {
        // If one command fails, stop processing the rest for this package.
        break;
      }
    }

    const successful = results.filter((r) => r.success);
    const failed = results.filter((r) => !r.success);

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

  if (result.success) {
    socketStream?.writeAction({
      timestamp: Date.now(),
      type: 'build_success',
      package: pkg.name,
      duration,
      metadata: { commandCount: pkg.build.length, priority: pkg.priority },
    });
  } else {
    socketStream?.writeAction({
      timestamp: Date.now(),
      type: 'build_failure',
      package: pkg.name,
      duration,
      message: result.error.message,
      metadata: { commandCount: pkg.build.length, priority: pkg.priority },
    });
  }

  return result;
}

// MODIFIED: Added logic to kill relevant running processes before build
export async function processQueue(
  queue: readonly string[],
  built: ReadonlySet<string>,
  failed: ReadonlySet<string>,
  dependentsMap: Readonly<Record<string, Deps>>,
  packages: Record<string, Package>,
): Promise<{ built: ReadonlySet<string>; failed: ReadonlySet<string> }> {
  if (queue.length === 0) {
    return { built, failed };
  }
  const [packageToBuild, ...remainingQueue] = queue;

  // NEW: Kill any running process for this package or its dependents before building
  killRunningProcess(packageToBuild);
  const dependents = dependentsMap[packageToBuild]?.dependencies ?? [];
  dependents.forEach(killRunningProcess);

  const pkg = packages[packageToBuild];
  const buildResult = await executeBuild(pkg);
  if (buildResult.success) {
    const newBuilt = new Set(built).add(packageToBuild);
    const { nextQueue, newlyQueued } = getQueueUpdate(
      remainingQueue,
      newBuilt,
      pkg.dependencies,
      packages,
    );
    newlyQueued.forEach((name) => log.info(`Queued ${name}`));
    return processQueue(nextQueue, newBuilt, failed, dependentsMap, packages);
  }
  log.error(`Build failed for ${packageToBuild}. Removing its dependencies from the queue.`);
  const newFailed = new Set(failed).add(packageToBuild);
  const dependenciesToPurge = new Set(dependentsMap[packageToBuild]?.dependencies ?? []);
  const cleanedQueue = remainingQueue.filter((name) => !dependenciesToPurge.has(name));
  const removedCount = remainingQueue.length - cleanedQueue.length;
  if (removedCount > 0) {
    log.warn(`Cleared ${removedCount} dependency package(s) from the queue.`);
  }
  return processQueue(cleanedQueue, built, newFailed, dependentsMap, packages);
}

// --- Entry Point ---

export const watchState = {
  queue: [] as string[],
  isBuilding: false,
};

// MODIFIED: Added logic to kill relevant running processes before build
export async function processWatchQueue(
  dependentsMap: Readonly<Record<string, Deps>>,
  packages: Record<string, Package>,
) {
  if (watchState.isBuilding || watchState.queue.length === 0) return;
  watchState.isBuilding = true;
  log.info('Change detected, starting new build run...');

  const builtInThisRun = new Set<string>();
  while (watchState.queue.length > 0) {
    watchState.queue.sort((a, b) => packages[a].priority - packages[b].priority);
    const packageToBuild = watchState.queue.shift()!;
    if (builtInThisRun.has(packageToBuild)) continue;

    // NEW: Kill any running process for this package or its dependents before building
    killRunningProcess(packageToBuild);
    const dependents = dependentsMap[packageToBuild]?.dependencies ?? [];
    dependents.forEach(killRunningProcess);

    const buildResult = await executeBuild(packages[packageToBuild]);
    if (buildResult.success) {
      builtInThisRun.add(packageToBuild);
      // NOTE: The original code re-queued dependencies. In a watch context, this should
      // queue *dependents*. The map has `dependencies` (packages that depend on me)
      // and `dependsOn` (packages I depend on). The naming is a bit confusing.
      // Let's stick with the original `dependencies` which correctly maps to dependents.
      const dependentsToRebuild = dependentsMap[packageToBuild]?.dependencies ?? [];
      for (const dependent of dependentsToRebuild) {
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
    process.nextTick(() => processWatchQueue(dependentsMap, packages));
  }
}

export async function startWatcher(packages: Record<string, Package>) {
  const socketPath = path.join('/tmp', 'onwo-watcher.sock');
  socketStream = new UnixSocketStreamManager(socketPath);

  try {
    await socketStream.start();
    log.info(`Unix socket stream started: ${socketPath}`);
  } catch (error) {
    log.error(`Failed to start Unix socket stream: ${error}`);
    process.exit(1);
  }

  // MODIFIED: Enhanced cleanup to kill child processes
  const cleanup = async () => {
    log.info('Shutting down...');

    // NEW: Kill all tracked running processes
    if (runningProcesses.size > 0) {
      log.info(`Stopping ${runningProcesses.size} running process(es)...`);
      for (const packageName of runningProcesses.keys()) {
        killRunningProcess(packageName);
      }
    }

    await socketStream?.close();
    process.exit(0);
  };

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);

  const dependentsMap = createDependentsMap(packages);

  log.info('Starting initial build...');
  socketStream.writeAction({
    timestamp: Date.now(),
    type: 'initial_build_start',
    metadata: {
      totalPackages: Object.keys(packages).length,
      packagesWithBuildOnLaunch: Object.values(packages).filter((p) => p.buildOnLaunch).length,
    },
  });

  const packagesToBuild = Object.values(packages)
    .filter((v) => v.buildOnLaunch === true)
    .map((p) => p.name);

  const { nextQueue: initialQueue, newlyQueued } = getQueueUpdate(
    [],
    new Set(),
    packagesToBuild,
    packages,
  );

  if (initialQueue.length === 0) {
    log.warn('Initial build queue is empty. Nothing to do.');
  } else {
    log.info(`Initial packages to build: ${newlyQueued.join(', ')}`);
    const { failed } = await processQueue(
      initialQueue,
      new Set(),
      new Set(),
      dependentsMap,
      packages,
    );

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
      totalPackages: Object.keys(packages).length,
      initialQueueSize: initialQueue.length,
    },
  });

  // --- 2. Unconditionally Enter Watch Mode ---
  log.info('Now watching for file changes...');
  socketStream.writeAction({
    timestamp: Date.now(),
    type: 'watch_start',
    metadata: {
      watchedPackages: Object.keys(packages),
      totalWatchPaths: Object.values(packages).reduce((sum, pkg) => sum + pkg.watchPaths.length, 0),
    },
  });

  Object.entries(packages).forEach(([name, pkg]) => {
    const watcher = watch(pkg.watchPaths as string[], {
      cwd: path.resolve(pkg.cwd),
      ignoreInitial: true,
    });

    const watcherFn = (filePath: string) => {
      // If a file changes in a package with a running process (like docs), we DON'T queue it.
      // The dev server (Vite, etc.) is expected to handle HMR itself.
      // We only want to trigger a rebuild if a *dependency* changes.
      if (runningProcesses.has(name)) {
        log.info(
          `Change detected in ${name} (${filePath}), but it has a keep-alive process. Letting HMR handle it.`,
        );
        return;
      }

      log.info(`Change detected in ${name}: ${filePath}`);
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

      if (!watchState.queue.includes(name)) {
        watchState.queue.push(name);
      }

      const dependents = dependentsMap[name]?.dependencies ?? [];
      for (const dependent of dependents) {
        if (!watchState.queue.includes(dependent)) {
          watchState.queue.push(dependent);
          log.info(`Queued dependent package: ${dependent}`);
        }
      }

      void processWatchQueue(dependentsMap, packages);
    };

    watcher.on('add', watcherFn);
    watcher.on('change', watcherFn);
  });

  await new Promise(() => {});
}
