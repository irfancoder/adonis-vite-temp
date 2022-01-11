import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~': 'resources',
    },
  },

  build: {
    outDir: 'public/build',
    emptyOutDir: true,
    manifest: true,
    reportCompressedSize: true,
    polyfillModulePreload: false,
    rollupOptions: {
      input: 'resources/scripts/main.ts',
      output: {
        sanitizeFileName: true,
      },
    },
  },
})
