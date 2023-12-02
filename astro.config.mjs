import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  server: {
    port: 6969,
  },
  integrations: [tailwind()],
});
