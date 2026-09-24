import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'configure-video-mime-headers',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.includes('.mp4')) {
            res.setHeader('Content-Type', 'video/mp4');
            res.setHeader('Content-Disposition', 'inline');
          }
          next();
        });
      },
    },
  ],
  server: {
    port: 5173,
    host: true,
    watch: {
      ignored: ['**/*.mp4', '**/*.webm', '**/*.log', '**/.git/**'],
    },
  },
  assetsInclude: ['**/*.mp4', '**/*.webm'],
});
