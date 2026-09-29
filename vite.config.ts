import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // The repository is published as the GitHub Pages project site at /home/.
  base: '/home/',
  plugins: [react(), tailwindcss()],
})
