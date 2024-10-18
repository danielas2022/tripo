import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://triposrai.com/',  // 替换为您的实际网站 URL
  // 其他配置...
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    }
  }
});
