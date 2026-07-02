#!/usr/bin/env bash
# Fetch the pinned Tailwind standalone binary. This is the ONLY build dependency.
# No Node, no npm, no node_modules. Verify the download before trusting it.
set -euo pipefail
cd "$(dirname "$0")"

VERSION="v3.4.17"

# Detect platform → Tailwind release asset name.
os="$(uname -s)"; arch="$(uname -m)"
case "$os" in
  Darwin) plat="macos" ;;
  Linux)  plat="linux" ;;
  *) echo "Unsupported OS: $os (grab the binary manually from the releases page)"; exit 1 ;;
esac
case "$arch" in
  arm64|aarch64) cpu="arm64" ;;
  x86_64|amd64)  cpu="x64" ;;
  *) echo "Unsupported arch: $arch"; exit 1 ;;
esac

asset="tailwindcss-${plat}-${cpu}"
url="https://github.com/tailwindlabs/tailwindcss/releases/download/${VERSION}/${asset}"

echo "Downloading ${asset} (${VERSION})..."
curl -fsSL -o tailwindcss "$url"
chmod +x tailwindcss
echo "Saved to tools/tailwindcss ($(du -h tailwindcss | cut -f1))"
echo "Pinned version: ${VERSION}"
