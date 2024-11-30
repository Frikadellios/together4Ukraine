import cloudflare from '@astrojs/cloudflare'
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
// https://astro.build/config
export default defineConfig({
  site: 'https://together4ukraine.pages.dev',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react(), mdx(), sitemap(), partytown()],
  output: 'hybrid',
  adapter: cloudflare()
})
