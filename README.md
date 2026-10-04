# academic-light

React, TypeScript and Vite website.

## Local editing

On this computer, dependencies are already installed. Run `powershell -ExecutionPolicy Bypass -File .\start-local.ps1` to use installed Node or the Codex bundled runtime. If a preview is already running, use its browser tab or stop it before restarting.

Install Node.js LTS (includes npm), then open PowerShell in this folder:

```powershell
npm ci
npm run dev
```

Open http://127.0.0.1:5173. Keep the terminal running; saved changes appear automatically. Stop with Ctrl+C.

Edit page sections in src/components, routes in src/pages, blog content in src/data/blogPosts.ts, styling in src/index.css and tailwind.config.ts, and metadata in index.html.

## Development and production branches

Use `development` for all local and Codex changes. `main` is reserved for production.

```powershell
git switch development
```

Commit and push reviewed changes to `development`. On GitHub, open a pull request with base `main` and compare `development`, review the changes, and merge when ready for production. Pushing to development does not update main. Configure your production host to deploy only main; this repository does not define hosting deployment rules.

## Validate and push development changes

```powershell
npm run build
npm run lint
git diff
git add <files-you-reviewed>
git commit -m "Describe your changes"
git push origin development
```

Push only after reviewing the local result. GitHub receives the source; the live website updates only when its hosting provider deploys that commit. No automatic deployment configuration is included in this repository. Check the hosting dashboard for deployment settings. Production hosting must serve index.html for client-side routes such as /magazine.

## Preview the production build

```powershell
npm run build
npm run preview
```

Open the address printed in the terminal.
