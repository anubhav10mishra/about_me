# Anubhav Resume - Vite React (GitHub Pages ready)

This is a lightweight Vite + React single-page app of **Anubhav's resume**. It includes a dark/light theme toggle, animated transitions, and a clean responsive layout.

## Quick start (recommended)

1. Rename `package.json` homepage field to your GitHub Pages URL. Example:

```json
  "homepage": "https://<GITHUB_USERNAME>.github.io/<REPO_NAME>"
```

2. Create a new GitHub repository (e.g. `anubhav-resume`) and push this project.

3. Install dependencies and deploy:

```bash
npm install
npm run build
npm run deploy
```

> The `deploy` script uses `gh-pages` to push the `dist/` folder to the `gh-pages` branch. If you prefer GitHub Pages from `main` branch, change deployment method.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Files
- `index.html` - entry
- `src/AnubhavResume.jsx` - main React component
- `src/styles.css` - styling

## Notes
- Replace the homepage field in `package.json` with your actual GitHub Pages URL before running `npm run deploy`.
- If you don't want to use `gh-pages`, you can build and manually publish the `dist/` folder.

Enjoy — let me know if you want a Netlify/Vercel deploy config or a plain HTML export for direct GitHub Pages without Node.js.
