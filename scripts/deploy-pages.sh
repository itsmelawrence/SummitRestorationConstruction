#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

if [[ -n "$(git status --porcelain)" ]]; then
  echo 'Commit or stash working-tree changes before deploying.' >&2
  exit 1
fi

npm run build

deploy_dir="$(mktemp -d "${TMPDIR:-/tmp}/summit-pages.XXXXXX")"
cleanup() {
  git worktree remove --force "$deploy_dir" >/dev/null 2>&1 || true
}
trap cleanup EXIT

git worktree add "$deploy_dir" gh-pages
git -C "$deploy_dir" pull --ff-only origin gh-pages
git -C "$deploy_dir" rm -r -q --ignore-unmatch .
cp -R dist/. "$deploy_dir"/
touch "$deploy_dir/.nojekyll"
git -C "$deploy_dir" add --all

if git -C "$deploy_dir" diff --cached --quiet; then
  echo 'GitHub Pages is already up to date.'
else
  git -C "$deploy_dir" commit -m 'Publish compiled Summit preview'
  git -C "$deploy_dir" push origin gh-pages
fi
