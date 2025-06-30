import fs from 'fs/promises';
import { execSync } from 'child_process';
import { readdir, rm, mkdir } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';
import { z } from 'zod';

type VersionJson = {
  readonly version?: string;
  readonly [key: string]: any;
}

type ValidationResult = {
  readonly isValid: boolean;
  readonly normalized: string;
}


type Success<T> = { readonly success: true; readonly data: T };
type Failure<E = Error> = { readonly success: false; readonly error: E };

// Functional Result type for error handling
type Result<T, E = Error> = Success<T> | Failure<E>;

// Utility functions
const createSuccess = <T>(data: T): Result<T> => ({ success: true, data });
const createError = <E = Error>(error: E): Result<never, E> => ({ success: false, error });

const tryCatch = <T>(fn: () => T): Result<T> => {
  try {
    return createSuccess(fn());
  } catch (error) {
    return createError(error instanceof Error ? error : new Error(String(error)));
  }
};

const tryCatchAsync = async <T>(fn: () => Promise<T>): Promise<Result<T>> => {
  try {
    const data = await fn();
    return createSuccess(data);
  } catch (error) {
    return createError(error instanceof Error ? error : new Error(String(error)));
  }
};

// Constants
const SEMVER_REGEX = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

// Pure functions
const removeVersionPrefix = (version: string): string =>
  version.startsWith('v') ? version.slice(1) : version;

const validateSemver = (version: string): ValidationResult => {
  const normalized = removeVersionPrefix(version);
  return {
    isValid: SEMVER_REGEX.test(normalized),
    normalized
  };
};

const parseSemverParts = (version: string): readonly number[] =>
  removeVersionPrefix(version)
    .split('.')
    .map(part => parseInt(part.split('-')[0], 10));

const compareSemver = (version1: string, version2: string): number => {
  const parts1 = parseSemverParts(version1);
  const parts2 = parseSemverParts(version2);

  for (let i = 0; i < 3; i++) {
    if (parts1[i] > parts2[i]) return 1;
    if (parts1[i] < parts2[i]) return -1;
  }
  return 0;
};

const mapComparisonToString = (comparison: number): Comparison =>
  comparison === 0 ? 'equal' : comparison > 0 ? 'newer' : 'older';

const extractVersion = (versionJson: VersionJson): Result<string> =>
  versionJson.version
    ? createSuccess(versionJson.version)
    : createError(new Error('No version field found in version file'));

const GitHubReleaseSchema = z.object({
  tag_name: z.string(),
  name: z.string(),
  published_at: z.string(),
});

type GitHubRelease = z.infer<typeof GitHubReleaseSchema>;

const fetchGitHubRelease = async (owner: string, repo: string): Promise<Result<GitHubRelease>> =>
  tryCatchAsync(async () => {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`);
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return GitHubReleaseSchema.parse(data);
  });

interface ReleaseInfo {
  readonly tagName: string;
  readonly name: string;
  readonly publishedAt: string;
}

const getLatestRelease = async (owner: string, repo: string): Promise<Result<ReleaseInfo>> => {
  const result = await fetchGitHubRelease(owner, repo);
  if (result.success === false) return result;
  const { data } = result;
  return createSuccess({
    tagName: data.tag_name,
    name: data.name,
    publishedAt: data.published_at
  });
};

const getCurrentVersion = async (versionPath: string = './version.json'): Promise<Result<string>> => {
  const versionResult = await tryCatchAsync(async () => {
    const content = await fs.readFile(versionPath, 'utf8');
    return JSON.parse(content);
  });

  if (!versionResult.success) {
    const errorMessage = versionResult.error.message.includes('ENOENT')
      ? `version not found at ${versionPath}`
      : `Failed to read version: ${versionResult.error.message}`;
    return createError(new Error(errorMessage));
  }

  return extractVersion(versionResult.data);
};

type Comparison = 'equal' | 'newer' | 'older'

type ComparisonResult = {
  readonly currentVersion: string;
  readonly latestVersion: string;
  readonly releaseName: string;
  readonly isCurrentValid: boolean;
  readonly isLatestValid: boolean;
  readonly comparison: Comparison;
}

const compareVersions = async (
  githubRepository: string,
  versionPath: string = './version.json'
): Promise<Result<ComparisonResult>> => {
  const [owner, repo] = githubRepository.split('/');
  // Get current version
  const currentResult = await getCurrentVersion(versionPath);
  if (!currentResult.success) {
    return currentResult;
  }

  // Get latest release
  const releaseResult = await getLatestRelease(owner, repo);
  if (!releaseResult.success) {
    return releaseResult;
  }

  const currentVersion = currentResult.data;
  const release = releaseResult.data;

  // Validate versions
  const currentValidation = validateSemver(currentVersion);
  const latestValidation = validateSemver(release.tagName);

  // Compare versions
  const comparison = compareSemver(currentVersion, release.tagName);

  const result: ComparisonResult = {
    currentVersion: currentValidation.normalized,
    latestVersion: latestValidation.normalized,
    releaseName: release.name,
    isCurrentValid: currentValidation.isValid,
    isLatestValid: latestValidation.isValid,
    comparison: mapComparisonToString(comparison)
  };

  return createSuccess(result);
};

const updateJsonVersion = async (
  newVersion: string,
  versionPath: string = './version.json'
): Promise<Result<void>> => {
  return tryCatchAsync(async () => {
    const content = await fs.readFile(versionPath, 'utf8');
    const versionJson = JSON.parse(content);

    // Update version
    versionJson.version = newVersion;

    // Write back to file with proper formatting
    const updatedContent = JSON.stringify(versionJson, null, 2) + '\n';
    await fs.writeFile(versionPath, updatedContent, 'utf8');
  });
};


const updateIndexFile = async (icons: ProcessedIconFile[]): Promise<Result<void>> => {
  const iconsSorted = icons.sort((a, b) => a.iconBaseName.localeCompare(b.iconBaseName));
  const iconNames = `export type IconName = ` + iconsSorted.map((a) => `'${a.iconBaseName}'`).join('|') + ';';
  const iconExports = iconsSorted.map((a) => `export { ${a.componentName} } from './icons/${a.iconBaseName}';`);

  const fileContent = [
    `// This file was autogenerated do not modify`,
    '',
    '// prettier-ignore',
    iconNames,
    '',
    ...iconExports
  ].join('\n');

  return tryCatchAsync(async () => {
    // Write back to file with proper formatting
    await fs.writeFile('./src/index.ts', fileContent, 'utf8');
  });
};

// Domain types
type GitTag = string;
type DirectoryPath = string;
type FileName = string;

// Configuration
interface CloneConfig {
  readonly repository: string;
  readonly tag: GitTag;
  readonly tempDir: DirectoryPath;
}

// Icon-related types
interface IconMetadata {
  readonly deprecated?: boolean;
  readonly deprecationReason?: string;
  readonly toBeRemovedInVersion?: string;
  readonly contributors?: string[];
  readonly tags?: string[];
  readonly categories?: string[];
}

interface IconNode {
  readonly tag: string;
  readonly attr: Record<string, string>;
  readonly children?: IconNode[];
}

// Pure functions for path manipulation
const createTempDirectory = (): DirectoryPath =>
  join(tmpdir(), `lucide-clone-${Date.now()}`);

const createIconsPath = (baseDir: DirectoryPath): DirectoryPath =>
  join(baseDir, 'lucide', 'icons');

const createGitCloneCommand = (repo: string, tag: GitTag, targetDir: DirectoryPath): string =>
  `git clone --depth 1 --branch ${tag} https://github.com/${repo}.git ${targetDir}/lucide`;

// Utility functions for icon processing
const toPascalCase = (str: string): string =>
  str.replace(/(^\w|-\w)/g, (match) => match.replace('-', '').toUpperCase());

const createSvgBase64 = (svgContent: string): string =>
  Buffer.from(svgContent).toString('base64');

const parseIconMetadata = async (jsonPath: string): Promise<Result<IconMetadata>> =>
  tryCatchAsync(async () => {
    const content = await fs.readFile(jsonPath, 'utf8');
    return JSON.parse(content) as IconMetadata;
  });

const parseSvgContent = (svgContent: string): IconNode[] => {
  // Simple SVG parser for extracting path elements
  const pathRegex = /<(path|circle|rect|line|polyline|polygon|ellipse)\s+([^>]*?)\/?>(?:<\/\1>)?/g;
  const children: IconNode[] = [];

  let match;
  while ((match = pathRegex.exec(svgContent)) !== null) {
    const [, tag, attributesStr] = match;
    const attr: Record<string, string> = {};

    // Parse attributes
    const attrRegex = /(\w+(?:-\w+)*)="([^"]*)"/g;
    let attrMatch;
    while ((attrMatch = attrRegex.exec(attributesStr)) !== null) {
      const [, key, value] = attrMatch;
      attr[key] = value;
    }

    children.push({ tag, attr });
  }

  return children;
};

const createIconTemplate = (
  iconName: string,
  componentName: string,
  children: IconNode[],
  svgBase64: string,
  deprecated?: boolean,
  deprecationReason?: string
): string => {
  const template = `import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = ${JSON.stringify(children, null, 2)};

/**
 * @preview ![img](data:image/svg+xml;base64,${svgBase64}) - https://lucide.dev/icons/${iconName}
 ${deprecated ? `* @deprecated ${deprecationReason || 'This icon is deprecated'}\n */` : '*/'}
export const ${componentName} = createIcon('${iconName}', __iconNode);
`;
  return template;
};

// Side-effect functions wrapped in Result
const executeCommand = (command: string): Result<string> =>
  tryCatch(() => execSync(command, { encoding: 'utf8' }));

const readDirectoryContents = async (path: DirectoryPath): Promise<Result<FileName[]>> =>
  tryCatchAsync(() => readdir(path));

const cleanupDirectory = async (path: DirectoryPath): Promise<Result<void>> =>
  tryCatchAsync(() => rm(path, { recursive: true, force: true }));

const ensureDirectoryExists = async (path: DirectoryPath): Promise<Result<void>> =>
  tryCatchAsync(async () => {
    await mkdir(path, { recursive: true });
  });

const writeFile = async (path: string, content: string): Promise<Result<void>> =>
  tryCatchAsync(() => fs.writeFile(path, content, 'utf8'));

const readFile = async (path: string): Promise<Result<string>> =>
  tryCatchAsync(() => fs.readFile(path, 'utf8'));

// Main business logic functions
const cloneRepository = (config: CloneConfig): Result<DirectoryPath> => {
  const command = createGitCloneCommand(config.repository, config.tag, config.tempDir);
  const res = executeCommand(command);
  if (res.success == false) return res;
  return createSuccess(config.tempDir);
};

const getIconFiles = async (baseDir: DirectoryPath): Promise<Result<FileName[]>> => {
  const iconsPath = createIconsPath(baseDir);
  return await readDirectoryContents(iconsPath);
};

// Predicate functions for filtering
const isIconFile = (filename: FileName): boolean =>
  filename.endsWith('.svg');

const getIconBaseName = (filename: FileName): string =>
  filename.replace('.svg', '');

// Main orchestration function
const cloneLucideOnTag = async (tag: GitTag): Promise<Result<DirectoryPath>> => {
  const tempDir = createTempDirectory();

  destroyQueue.push(() => cleanupDirectory(tempDir));

  const config: CloneConfig = {
    repository: 'lucide-icons/lucide',
    tag,
    tempDir
  };

  return cloneRepository(config);
};

type ProcessedIconFile = { iconBaseName: string; componentName: string }
const processIconFile = async (
  iconFileName: string,
  iconsDir: string,
  outputDir: string
): Promise<Result<ProcessedIconFile>> => tryCatchAsync(async () => {
  const iconBaseName = getIconBaseName(iconFileName);
  const componentName = toPascalCase(iconBaseName) + 'Icon';

  const svgPath = join(iconsDir, iconFileName);
  const jsonPath = join(iconsDir, `${iconBaseName}.json`);
  const outputPath = join(outputDir, `${iconBaseName}.tsx`);

  // Read SVG content
  const svgResult = await readFile(svgPath);
  if (!svgResult.success) throw svgResult.error;

  // Parse SVG to extract children
  const children = parseSvgContent(svgResult.data);
  const svgBase64 = createSvgBase64(svgResult.data);

  // Read metadata (optional)
  const metadataResult = await parseIconMetadata(jsonPath);
  const metadata = metadataResult.success ? metadataResult.data : {};

  // Generate TypeScript content
  const tsContent = createIconTemplate(
    iconBaseName,
    componentName,
    children,
    svgBase64,
    metadata.deprecated,
    metadata.deprecationReason
  );

  // Write TypeScript file
  const writeResult = await writeFile(outputPath, tsContent);
  if (!writeResult.success) throw writeResult.error;

  return { iconBaseName, componentName };
});

const logComparison = (current: string, latest: string, comparison: Comparison): void => {
  if (comparison === 'equal') {
    console.log(`✅ Versions are equal: ${current} = ${latest}`);
  } else if (comparison === 'newer') {
    console.log(`📈 Current version is newer: ${current} > ${latest}`);
  } else if (comparison === 'older') {
    console.log(`📉 Current version is older: ${current} < ${latest}`);
  } else {
    console.log(`Invalid comparison: ${comparison}`);
  }
};

const exitWith = (code: number, ...args: unknown[]) => {
  if (code !== 0) {
    console.error(...args);
  } else {
    console.log(...args);
  }
  process.exit(code);
}

const destroyQueue: (() => Promise<unknown>)[] = [];

const main = async () => {
  console.log(`🔍 Comparing versions for lucide-icons/lucide...`);
  const r = await compareVersions('lucide-icons/lucide');
  if (r.success === false) return exitWith(1, r.error);

  logComparison(r.data.currentVersion, r.data.latestVersion, r.data.comparison);
  if (r.data.comparison !== 'older') return exitWith(0, '✅ Nothing to do. Exiting...');

  const desiredTag = r.data.latestVersion
  console.log(`Cloning lucide-icons/lucide at tag: ${desiredTag}`);
  console.log('This may take a moment...\n');

  const tempDir = await cloneLucideOnTag(desiredTag);
  if (!tempDir.success) return exitWith(1, "Failed to clone lucide-icons/lucide repository:", tempDir.error);

  const filesResult = await getIconFiles(tempDir.data);
  if (!filesResult.success) return exitWith(1, 'Failed to list icon files:', filesResult.error)

  // Filter and sort files
  const iconFiles = filesResult.data
    .filter(isIconFile)
    .sort();

  console.log(`Found ${iconFiles.length} icon files`);

  // Ensure output directory exists
  const outputDir = './src/icons';
  const ensureDirResult = await ensureDirectoryExists(outputDir);
  if (!ensureDirResult.success) return exitWith(1, 'Failed to create output directory:', ensureDirResult.error);

  // Process each icon file
  const iconsDir = createIconsPath(tempDir.data);
  const results = await Promise.all(
    iconFiles.map(async (iconFile) => processIconFile(iconFile, iconsDir, outputDir))
  );

  // Check for any failures
  const failures = results.filter((result): result is Failure => result.success === false);
  if (failures.length > 0) {
    console.error(`❌ Failed to process ${failures.length} icons:`);
    failures.forEach(failure => console.error(failure.error));
    process.exit(1);
  }
  console.log(`\n✅ Successfully processed ${iconFiles.length} icons`);

  console.log(`📝 Updating index.ts...`);
  updateIndexFile((results as Success<ProcessedIconFile>[]).map((r) => r.data));

  console.log(`📝 Updating version.json from ${r.data.currentVersion} to ${r.data.latestVersion}...`);

  const updateResult = await updateJsonVersion(r.data.latestVersion);

  if (updateResult.success === false) {
    console.error(`❌ Failed to update version.json: ${updateResult.error.message}`);
    process.exit(1);
  }

  console.log(`✅ Successfully updated version.json to ${r.data.latestVersion}`);

  // Cleanup
  console.log('🧹 Cleaning up temporary files...');
  await Promise.allSettled(destroyQueue.map(cleanup => cleanup()));
}

await main();
