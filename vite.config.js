import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // or '/' for local development
  plugins: [react()],
})