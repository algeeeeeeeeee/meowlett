import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync, readFileSync } from 'fs'
import { resolve } from 'path'

// Plugin to auto-bump sw.js cache version on every build
function swVersionPlugin() {
  return {
    name: 'sw-version-bump',
    closeBundle() {
      const swPath = resolve(__dirname, 'dist/sw.js')
      const ts = Date.now()
      try {
        let sw = readFileSync(swPath, 'utf-8')
        sw = sw.replace(/meowlett-v\d+/, `meowlett-v${ts}`)
        writeFileSync(swPath, sw)
        console.log(`✓ sw.js cache bumped: meowlett-v${ts}`)
      } catch(e) {
        // sw.js might not be in dist, also patch the source
      }
      // Also patch source so dev matches
      const srcPath = resolve(__dirname, 'public/sw.js')
      let srcSw = readFileSync(srcPath, 'utf-8')
      srcSw = srcSw.replace(/meowlett-v\d+/, `meowlett-v${ts}`)
      writeFileSync(srcPath, srcSw)
    }
  }
}

export default defineConfig({
  plugins: [react(), swVersionPlugin()],
  build: {
    target: ['es2020', 'safari15'],
    cssTarget: 'safari15',
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          lucide: ['lucide-react'],
        }
      }
    }
  },
  esbuild: {
    target: 'esnext',
    jsx: 'automatic',
  },
  server: {
    port: 5173,
    open: true,
  }
})
