## Fix Cloudflare build: regenerate package-lock.json

`package-lock.json` is out of sync with `package.json` (missing `@lovable.dev/vite-plugin-dev-server-bridge`, `@lovable.dev/vite-plugin-hmr-gate`; stale versions of `@lovable.dev/vite-tanstack-config`, `lovable-tagger`, `is-core-module`, `hasown`). Cloudflare runs `npm ci`, which refuses to install when the lockfile drifts.

### Steps

1. Run `npm install` in the project to refresh `package-lock.json` against the current `package.json`.
2. Verify the previously-missing/stale packages now appear at the expected versions in the lockfile.

No application source files are changed — only `package-lock.json`.

### After implementation

Push to GitHub (auto-syncs from Lovable) and retry the Cloudflare deployment. `npm ci` will then succeed.
