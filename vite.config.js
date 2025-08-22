// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // or '@vitejs/plugin-react' if that's what you use

export default defineConfig({
  base: '/Portfolio/',   // <- EXACT repo name, with leading & trailing slashes
  plugins: [react()],
})