#!/usr/bin/env bash
# Compile Tailwind CSS with the vendored standalone binary. No Node, no npm.
set -euo pipefail
cd "$(dirname "$0")"

MODE="${1:-build}"   # "build" (default, minified once) or "watch"

if [ ! -x tools/tailwindcss ]; then
  echo "error: tools/tailwindcss not found or not executable." >&2
  echo "Download it from https://github.com/tailwindlabs/tailwindcss/releases (v3.4.17)," >&2
  echo "save as tools/tailwindcss, then: chmod +x tools/tailwindcss" >&2
  exit 1
fi

if [ "$MODE" = "watch" ]; then
  exec ./tools/tailwindcss -i src/input.css -o assets/css/output.css --watch
else
  ./tools/tailwindcss -i src/input.css -o assets/css/output.css --minify
  echo "Built assets/css/output.css ($(du -h assets/css/output.css | cut -f1))"
fi
