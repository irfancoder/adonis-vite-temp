import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
// import loader from 'postcss-loader'

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'edge',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.edge')) {
          server.ws.send({
            type: 'full-reload',
            path: '*',
          })
        }
      },
    },
  ],
  resolve: {
    alias: {
      '~': 'resources',
    },
  },
  css: {
    postcss: [tailwindcss, autoprefixer],
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
