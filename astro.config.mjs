import { defineConfig } from 'astro/config';

export default defineConfig({
  // 其他配置...
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    }
  }
});
