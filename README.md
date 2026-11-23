# Renniel Ramos — Developer Portfolio

Minimal, dependency-free portfolio for my full stack development work (C#, .NET, Blazor, Angular, SQL Server).

- React 19, Tailwind CSS 4 and Vite
- Sticky sidebar navigation on desktop, single column on mobile
- Downloadable résumé at `/assets/Renniel_Ramos_Resume.pdf`

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173. Build with `npm run build` (output in `dist/`).

## Deploy

Hosted on Vercel (Vite preset). Every push to `main` deploys automatically.

## Edit content

- Text, experience, projects and stack: `src/data/content.js`
- Layout: `src/App.jsx` and `src/components/`
- Theme colors: the `@theme` block in `src/index.css`
- Résumé and photo: `public/assets/`
