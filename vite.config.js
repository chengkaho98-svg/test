import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves project sites from /<repo>/, while local dev runs at /.
// Derive the base at build time in CI, keep `/` everywhere else.
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = process.env.GITHUB_ACTIONS && repoName ? `/${repoName}/` : '/';

export default defineConfig({
  base,
  plugins: [react()],
  server: { port: 5173, open: false },
});
