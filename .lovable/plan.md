Plan:

1. Fix the Cloudflare build failure
   - Remove the binary `bun.lockb` from the repo so Cloudflare stops choosing Bun automatically.
   - Keep `package-lock.json` so Cloudflare uses npm instead, avoiding the Bun version mismatch shown in the screenshot: `failed to parse lockfile: 'bun.lockb'`.
   - Do not change app functionality.

2. Tell you the Cloudflare settings to use after the repo updates
   - Build command: `npm run build`
   - Install command: `npm ci` if Cloudflare asks; otherwise leave default after `bun.lockb` is removed.
   - Root directory: project root.

3. Clarify the hero image
   - The homepage hero image is currently `lena-faber-brave.jpg`.
   - It is referenced in `src/lib/images.ts` as `IMG.brave`.
   - The homepage uses it in `src/routes/index.tsx` inside the first full-screen hero section.
   - The file is not stored locally in this project; it loads from the GitHub image URL base `https://raw.githubusercontent.com/lena-faber/brave/main/assets/images`.