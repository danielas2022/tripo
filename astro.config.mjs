import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://triposrai.com/',  // 替换为您的实际网站 URL
  // 其他配置...
  integrations: [
    react({
      include: ['**/react/*', '**/components/*'],
      ssr: true
    }),
    sitemap()
  ],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    },
    // 添加 ssr 配置
    ssr: {
      noExternal: ['react', 'react-dom']
    }
  },
});
