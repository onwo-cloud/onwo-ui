#!/usr/bin/env bash

set -euo pipefail

# Configurable minimum percentage threshold (default: 10%)
MIN_PCT="${1:-10}"
SEARCH_DIR="${2:-.}"

# Terminal Colors
BOLD='\033[1m'
CYAN='\033[36m'
GREEN='\033[32m'
YELLOW='\033[33m'
MAGENTA='\033[35m'
DIM='\033[2m'
RESET='\033[0m'

# Style variant markers (ordered longest-first to prevent partial matches)
STYLE_VARIANTS=(
  "bold-duotone"
  "line-duotone"
  "duotone-line"
  "high-contrast"
  "filled"
  "fill"
  "solid"
  "outline"
  "outlined"
  "line"
  "regular"
  "bold"
  "duotone"
  "twotone"
  "light"
  "thin"
  "sharp"
  "rounded"
  "round"
  "stroke"
  "broken"
  "curved"
  "flat"
  "bulk"
  "mono"
  "color"
  "mini"
  "micro"
  "baseline"
)

# Standard icon grid sizes only (prevents angles 90/45 or timers 15/30/60)
VALID_CANVAS_SIZES="12|14|16|18|20|22|24|28|32|36|40|48|56|64|72|96|128"

SIZE_VARIANTS=(
  "12" "14" "16" "18" "20" "22" "24" "28" "32" "36" "40" "48" "56" "64" "72" "96" "128"
)

TOTALS_FILE=$(mktemp)
trap 'rm -f "$TOTALS_FILE"' EXIT

# Pre-calculate total file counts per package
find "$SEARCH_DIR" -type f 2>/dev/null | awk -F'/' '
  {
    pkg = "";
    for (i = 1; i <= NF; i++) {
      if ($i ~ /^iconset-/) { pkg = $i; break; }
    }
    if (!pkg && NF > 0) pkg = $1;
    tot[pkg]++;
  }
  END {
    for (p in tot) print p "\t" tot[p];
  }' > "$TOTALS_FILE"

find_style_files() {
  local marker="$1"
  if command -v fd &>/dev/null; then
    fd "\\-${marker}(\\.[^/]+)?$" "$SEARCH_DIR" 2>/dev/null
  else
    find "$SEARCH_DIR" -type f \( -name "*-$marker.*" -o -name "*-$marker" \) 2>/dev/null
  fi
}

find_size_files() {
  local size="$1"
  if command -v fd &>/dev/null; then
    fd "\\-${size}(\\-|\\.[^/]+|$)" "$SEARCH_DIR" 2>/dev/null
  else
    find "$SEARCH_DIR" -type f \( -name "*-$size-*" -o -name "*-$size.*" -o -name "*-$size" \) 2>/dev/null
  fi
}

echo -e "${BOLD}🔍 Scanning icon packages (threshold: >= ${MIN_PCT}% of total icons in package)...${RESET}\n"

# ==========================================
# 1. STYLE VARIANTS SCAN
# ==========================================
echo -e "${BOLD}${MAGENTA}===========================================${RESET}"
echo -e "${BOLD}${MAGENTA}       SECTION 1: STYLE VARIANTS           ${RESET}"
echo -e "${BOLD}${MAGENTA}===========================================${RESET}\n"

TOTAL_STYLES_FOUND=0

for variant in "${STYLE_VARIANTS[@]}"; do
  RESULTS=$(find_style_files "$variant" | awk -F'/' -v min_pct="$MIN_PCT" -v totals_file="$TOTALS_FILE" -v cur_variant="$variant" '
    BEGIN {
      while ((getline line < totals_file) > 0) {
        split(line, parts, "\t");
        totals[parts[1]] = parts[2];
      }
      close(totals_file);
    }
    {
      pkg = "";
      for (i = 1; i <= NF; i++) {
        if ($i ~ /^iconset-/) { pkg = $i; break; }
      }
      if (!pkg && NF > 0) pkg = $1;

      # Exclude emoji skin tone false positives for -light
      if (cur_variant == "light" && pkg ~ /emoji/) {
        next;
      }

      filename = $NF;
      sub(/\.(d\.ts|[a-zA-Z0-9]+)$/, "", filename);

      pkg_file_count[pkg]++;

      if (!seen[pkg, filename]) {
        seen[pkg, filename] = 1;
        example_count[pkg]++;
        if (example_count[pkg] <= 2) {
          examples[pkg] = (examples[pkg] == "" ? filename : examples[pkg] ", " filename);
        }
      }
    }
    END {
      for (p in pkg_file_count) {
        tot = (totals[p] > 0 ? totals[p] : pkg_file_count[p]);
        pct = (pkg_file_count[p] / tot) * 100;

        if (pct >= min_pct) {
          printf "%d\t%.1f\t%s\t(%s)\n", pkg_file_count[p], pct, p, examples[p];
        }
      }
    }' | sort -nr -k1,1 || true)

  if [[ -n "$RESULTS" ]]; then
    TOTAL_STYLES_FOUND=$((TOTAL_STYLES_FOUND + 1))
    TOTAL_PKGS=$(echo "$RESULTS" | wc -l | tr -d ' ')

    echo -e "${CYAN}${BOLD}=== Style Marker: -${variant} (${TOTAL_PKGS} packages >= ${MIN_PCT}%) ===${RESET}"
    echo "$RESULTS" | while IFS=$'\t' read -r count pct pkg ex; do
      printf "  ${GREEN}%7d files${RESET}  ${CYAN}(%5.1f%%)${RESET}  ${DIM}%-32s${RESET} ${YELLOW}%s${RESET}\n" "$count" "$pct" "$pkg" "$ex"
    done
    echo ""
  fi
done

# ==========================================
# 2. MULTI-SIZE VARIANTS SCAN
# ==========================================
echo -e "${BOLD}${MAGENTA}===========================================${RESET}"
echo -e "${BOLD}${MAGENTA}       SECTION 2: MULTI-SIZE ICONS         ${RESET}"
echo -e "${BOLD}${MAGENTA}===========================================${RESET}\n"

TOTAL_SIZES_FOUND=0

for size in "${SIZE_VARIANTS[@]}"; do
  RESULTS=$(find_size_files "$size" | awk -F'/' -v min_pct="$MIN_PCT" -v totals_file="$TOTALS_FILE" '
    BEGIN {
      while ((getline line < totals_file) > 0) {
        split(line, parts, "\t");
        totals[parts[1]] = parts[2];
      }
      close(totals_file);
    }
    {
      pkg = "";
      for (i = 1; i <= NF; i++) {
        if ($i ~ /^iconset-/) { pkg = $i; break; }
      }
      if (!pkg && NF > 0) pkg = $1;

      filename = $NF;
      sub(/\.(d\.ts|[a-zA-Z0-9]+)$/, "", filename);

      pkg_file_count[pkg]++;

      if (!seen[pkg, filename]) {
        seen[pkg, filename] = 1;
        example_count[pkg]++;
        if (example_count[pkg] <= 2) {
          examples[pkg] = (examples[pkg] == "" ? filename : examples[pkg] ", " filename);
        }
      }
    }
    END {
      for (p in pkg_file_count) {
        tot = (totals[p] > 0 ? totals[p] : pkg_file_count[p]);
        pct = (pkg_file_count[p] / tot) * 100;

        if (pct >= min_pct) {
          printf "%d\t%.1f\t%s\t(%s)\n", pkg_file_count[p], pct, p, examples[p];
        }
      }
    }' | sort -nr -k1,1 || true)

  if [[ -n "$RESULTS" ]]; then
    TOTAL_SIZES_FOUND=$((TOTAL_SIZES_FOUND + 1))
    TOTAL_PKGS=$(echo "$RESULTS" | wc -l | tr -d ' ')

    echo -e "${CYAN}${BOLD}=== Size Marker: -${size} (${TOTAL_PKGS} packages >= ${MIN_PCT}%) ===${RESET}"
    echo "$RESULTS" | while IFS=$'\t' read -r count pct pkg ex; do
      printf "  ${GREEN}%7d files${RESET}  ${CYAN}(%5.1f%%)${RESET}  ${DIM}%-32s${RESET} ${YELLOW}%s${RESET}\n" "$count" "$pct" "$pkg" "$ex"
    done
    echo ""
  fi
done

# ==========================================
# 3. MULTI-SIZE SUMMARY (ORDERED BY SIZE FREQUENCY)
# ==========================================
echo -e "${BOLD}${MAGENTA}===========================================${RESET}"
echo -e "${BOLD}${MAGENTA}  SUMMARY: MULTI-SIZE PACKAGES (BY COUNT)  ${RESET}"
echo -e "${BOLD}${MAGENTA}===========================================${RESET}\n"

ALL_SIZE_FILES=$(for s in "${SIZE_VARIANTS[@]}"; do find_size_files "$s"; done || true)

if [[ -n "$ALL_SIZE_FILES" ]]; then
  echo "$ALL_SIZE_FILES" | awk -F'/' -v min_pct="$MIN_PCT" -v totals_file="$TOTALS_FILE" -v valid_sizes="^(${VALID_CANVAS_SIZES})$" '
    BEGIN {
      while ((getline line < totals_file) > 0) {
        split(line, parts, "\t");
        totals[parts[1]] = parts[2];
      }
      close(totals_file);
    }
    {
      pkg = "";
      for (i = 1; i <= NF; i++) {
        if ($i ~ /^iconset-/) { pkg = $i; break; }
      }
      if (!pkg && NF > 0) pkg = $1;

      filename = $NF;
      if (match(filename, /-[0-9]{2}(-|\.|$)/)) {
        sz = substr(filename, RSTART+1, 2);
        
        # Strictly enforce valid grid canvas sizes
        if (sz ~ valid_sizes) {
          pkg_size_count[pkg, sz]++;
          pkg_total_size_files[pkg]++;
        }
      }
    }
    END {
      for (p in pkg_total_size_files) {
        tot = (totals[p] > 0 ? totals[p] : pkg_total_size_files[p]);
        pct = (pkg_total_size_files[p] / tot) * 100;

        if (pct >= min_pct) {
          n = 0;
          delete sizes;
          delete counts;

          for (combo in pkg_size_count) {
            split(combo, parts, SUBSEP);
            if (parts[1] == p) {
              n++;
              sizes[n] = parts[2];
              counts[n] = pkg_size_count[combo];
            }
          }

          for (i = 1; i <= n; i++) {
            for (j = i + 1; j <= n; j++) {
              if (counts[j] > counts[i] || (counts[j] == counts[i] && sizes[j]+0 < sizes[i]+0)) {
                tc = counts[i]; counts[i] = counts[j]; counts[j] = tc;
                ts = sizes[i]; sizes[i] = sizes[j]; sizes[j] = ts;
              }
            }
          }

          size_str = "";
          for (i = 1; i <= n; i++) {
            item = sizes[i] " (" counts[i] ")";
            size_str = (size_str == "" ? item : size_str ", " item);
          }

          printf "%d\t%.1f\t%s\t[%s]\n", pkg_total_size_files[p], pct, p, size_str;
        }
      }
    }' | sort -nr -k1,1 | while IFS=$'\t' read -r count pct pkg sizes; do
      printf "  ${GREEN}%7d files${RESET}  ${CYAN}(%5.1f%%)${RESET}  ${DIM}%-32s${RESET} ${CYAN}Sizes (most first): %s${RESET}\n" "$count" "$pct" "$pkg" "$sizes"
    done
fi

echo ""
echo -e "${BOLD}✨ Done scanning.${RESET}"
