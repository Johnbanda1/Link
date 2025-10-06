import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Optimize for production
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  },
  esbuild: {
    // Remove console logs in production
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
  build: {
    target: 'es2015',
    cssTarget: 'chrome61',
    rollupOptions: {
      output: {
        manualChunks: {
          // Reduce chunk splitting for faster loading
          vendor: ['react', 'react-dom', 'framer-motion'],
          utils: ['lucide-react', 'react-hook-form', 'recharts']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production',
        drop_debugger: process.env.NODE_ENV === 'production',
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      }
    },
    // Optimize for mobile
    assetsInlineLimit: 4096,
    cssCodeSplit: false
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react', 'react-hook-form', 'recharts'],
    force: false
  },
  server: {
    port: 5173,
    hmr: {
      overlay: false
    },
    host: true,
    // Optimize for mobile development
    cors: true
  }
});
