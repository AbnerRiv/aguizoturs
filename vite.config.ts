import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), tailwindcss()],
  define: { 'process.env': {} },
  resolve: {
      alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: [
          '.js',
          '.json',
          '.jsx',
          '.mjs',
          '.ts',
          '.tsx',
          '.vue',
      ],
  },
  server: {
      port: 3000,
      open: true,
      cors: true,
  }
})
