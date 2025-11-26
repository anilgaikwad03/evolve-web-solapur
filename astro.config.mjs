import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://www.evolveweb.in',
  integrations: [tailwind(), react()],
  output: 'static',
  build: {
    format: 'directory'
  },
  // SEO Optimization
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom']
          }
        }
      }
    }
  }
});