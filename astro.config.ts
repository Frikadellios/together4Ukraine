import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss()
    ],
  },
  integrations: [react(), mdx(), sitemap(), partytown()],
  output: 'hybrid',
  adapter: cloudflare()
});
