import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss()],
  base: "priyadarshiyadav71-creator/chef_claude",
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
})
