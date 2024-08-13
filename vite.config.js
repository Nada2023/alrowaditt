import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import terser from '@rollup/plugin-terser';
import compression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer(),
    terser(),
    compression({
      algorithm: 'gzip', // or 'brotliCompress'
      threshold: 10240, // compress files larger than 10KB
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      },
    },
  },
});
