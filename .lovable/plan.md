# Deploy to Cloudflare Workers

Good news: this project is **already configured for Cloudflare Workers** (`wrangler.jsonc` + `@lovable.dev/vite-tanstack-config` with the Cloudflare build target). No code changes needed — just deploy.

## Option A — Publish via Lovable (easiest, recommended)

Lovable's "Publish" button already deploys to Cloudflare under the hood.

1. Click **Publish** (top-right of editor, or the `…` menu → Publish on mobile)
2. You get a live URL at `your-project.lovable.app`
3. Add a custom domain in Project Settings → Domains

Done. No Cloudflare account needed.

## Option B — Deploy to your own Cloudflare account

If you want the Worker running under *your* Cloudflare account:

1. **Get the code on your machine**
   - Connect GitHub: chat `+` menu → GitHub → Connect project, then `git clone` the repo
   - Or: Code Editor → Download codebase (paid workspace)

2. **Install Wrangler & login**
   ```bash
   bun install
   bunx wrangler login
   ```

3. **Deploy**
   ```bash
   bun run build
   bunx wrangler deploy
   ```
   This uses the existing `wrangler.jsonc` and ships to `tanstack-start-app.<your-subdomain>.workers.dev`.

4. **Custom domain** — add a route in the Cloudflare dashboard under Workers & Pages → your worker → Settings → Domains & Routes.

5. **Env vars / secrets** (if you add any later):
   ```bash
   bunx wrangler secret put SECRET_NAME
   ```

## Which do you want?

- **A (Lovable Publish)** → I'll just point you at the Publish button, nothing to build.
- **B (Own Cloudflare account)** → I can verify the build works and confirm `wrangler.jsonc` is deploy-ready before you run the commands.
