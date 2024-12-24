import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/notrichardren.github.io/',  // or '/' for local development
  plugins: [react()],
})