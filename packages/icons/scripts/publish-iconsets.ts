import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { $ } from "bun";

const PACKAGES_DIR = "./packages";

// Command line flags
const DRY_RUN = process.argv.includes("--dry-run");
const ALL_FLAG = process.argv.includes("--all");

// Parse --otp=123456
const otpArg = process.argv.find((arg) => arg.startsWith("--otp="));
const OTP_CODE = otpArg ? otpArg.split("=")[1].trim() : null;

// Parse --delay=3000 (default: 2000ms)
const delayArg = process.argv.find((arg) => arg.startsWith("--delay="));
const DELAY_MS = delayArg ? Number.parseInt(delayArg.split("=")[1], 10) : 2000;

// Parse --sets=mdi,lucide
const setsArg = process.argv.find((arg) => arg.startsWith("--sets="));
const TARGET_SETS = setsArg
  ? setsArg
      .split("=")[1]
      .split(",")
      .map((s) => s.trim().toLowerCase().replace(/^iconset-/, ""))
  : [];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function checkNpmLogin() {
  try {
    const user = (await $`npm whoami`.quiet().text()).trim();
    console.log(`🔑 Logged in to npm as: ${user}\n`);
  } catch {
    console.error("❌ You are not logged in to npm. Please run `npm login` or set `NPM_TOKEN`.");
    process.exit(1);
  }
}

async function isPublished(name: string, version: string): Promise<boolean> {
  try {
    const result = await $`npm view ${name}@${version} version`.quiet().text();
    return result.trim() === version;
  } catch {
    return false;
  }
}

async function publishAll() {
  await checkNpmLogin();

  if (DRY_RUN) {
    console.log("🔍 Running in DRY-RUN mode. No packages will actually be published.\n");
  } else {
    console.log(`⏱️  Upload delay set to ${DELAY_MS / 1000}s between packages.\n`);
  }

  const entries = await readdir(PACKAGES_DIR, { withFileTypes: true });
  let packageDirs = entries
    .filter((e) => e.isDirectory() && e.name.startsWith("iconset-"))
    .map((e) => e.name);

  // Filter based on --sets or --all
  if (TARGET_SETS.length > 0 && !ALL_FLAG) {
    packageDirs = packageDirs.filter((dir) => {
      const cleanName = dir.replace(/^iconset-/, "").toLowerCase();
      return TARGET_SETS.includes(cleanName) || TARGET_SETS.includes(dir.toLowerCase());
    });
    console.log(`🎯 Targeting selected set(s): [${TARGET_SETS.join(", ")}]`);
  } else {
    console.log(`🌐 Targeting ALL iconsets`);
  }

  if (packageDirs.length === 0) {
    console.log("⚠️  No matching iconset directories found.");
    process.exit(0);
  }

  console.log(`📦 Found ${packageDirs.length} packages to process.\n`);

  let publishedCount = 0;
  let skippedCount = 0;
  let failedCount = 0;

  for (let i = 0; i < packageDirs.length; i++) {
    const dir = packageDirs[i];
    const pkgPath = join(PACKAGES_DIR, dir);
    const pkgJsonPath = join(pkgPath, "package.json");

    console.log(`[${i + 1}/${packageDirs.length}] Directory: ${dir}`);

    try {
      const pkgJsonFile = Bun.file(pkgJsonPath);
      if (!(await pkgJsonFile.exists())) {
        console.log(`  ⚠️  Skipping: package.json missing in ${dir}\n`);
        skippedCount++;
        continue;
      }

      const { name, version } = await pkgJsonFile.json();

      if (!name || !version) {
        console.log(`  ⚠️  Skipping: Missing 'name' or 'version' in ${dir}/package.json\n`);
        skippedCount++;
        continue;
      }

      // Check if already published
      const alreadyExists = await isPublished(name, version);
      if (alreadyExists) {
        console.log(`  ⏭️  Skipped: ${name}@${version} is already published.\n`);
        skippedCount++;
        continue;
      }

      if (DRY_RUN) {
        console.log(`  🔍 [Dry Run] Would publish: ${name}@${version}\n`);
      } else {
        console.log(`  🚀 Publishing ${name}@${version}...`);

        // Build command arguments
        const publishArgs = ["npm", "publish", "--access", "public", "--loglevel", "warn"];
        if (OTP_CODE) {
          publishArgs.push("--otp", OTP_CODE);
        }

        // Use .nothrow() to prevent Bun from dumping huge stdout logs on error
        const result = await $`${publishArgs}`.cwd(pkgPath).nothrow();

        if (result.exitCode === 0) {
          console.log(`  ✅ Successfully published ${name}@${version}`);
          publishedCount++;

          if (i < packageDirs.length - 1) {
            console.log(`  ⏳ Waiting ${DELAY_MS / 1000}s before next package...\n`);
            await sleep(DELAY_MS);
          } else {
            console.log("");
          }
        } else {
          console.error(`  ❌ Failed to publish ${name}@${version}`);
          
          const errOutput = result.stderr.toString() || result.stdout.toString();
          if (errOutput.includes("Two-factor authentication") || errOutput.includes("E403")) {
            console.error("  🔒 Error: 2FA is required by npm!");
            console.error("     Solution 1: Pass token -> NPM_TOKEN=your_token bun run ...");
            console.error("     Solution 2: Pass OTP   -> bun run ... --otp=123456\n");
          } else {
            console.error(`  Details:\n${errOutput.split("\n").slice(-5).join("\n")}\n`);
          }

          failedCount++;
        }
      }
    } catch (error) {
      console.error(`  ❌ Failed to process ${dir}:`, error);
      console.log("");
      failedCount++;
    }
  }

  console.log("========================================");
  console.log(`🎉 Finished processing!`);
  console.log(`   Published: ${publishedCount}`);
  console.log(`   Skipped:   ${skippedCount}`);
  console.log(`   Failed:    ${failedCount}`);
  console.log("========================================");
}

publishAll();
