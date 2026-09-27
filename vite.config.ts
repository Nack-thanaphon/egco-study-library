import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { courseSessionsPlugin } from './build/course-sessions-plugin.ts'

export default defineConfig({
  plugins: [
    react(),
    courseSessionsPlugin(path.resolve(import.meta.dirname, 'research/sessions')),
  ],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
})
