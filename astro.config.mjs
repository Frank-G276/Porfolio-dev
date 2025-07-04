// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://frankdeveloper.netlify.app',
  integrations: [tailwind()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});