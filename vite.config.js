// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  // set base only if deploying to GitHub Pages under a repo path:
  base: '/Portfolio/',
})