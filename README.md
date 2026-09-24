# Yash Verma — AI/ML Portfolio
React + Vite + TypeScript. No backend, no environment variables.

## Run
    npm install
    npm run dev          # http://localhost:5173
## Build
    npm run build        # output in dist/
    npm run preview
## Update content
- All text and links live in `src/data.ts` (set each project's `repo` URL there).
- Resume: replace `public/resume.pdf`.
## Deploy
- Vercel: import the repo, framework preset "Vite", deploy.
- Netlify: build command `npm run build`, publish directory `dist`.
