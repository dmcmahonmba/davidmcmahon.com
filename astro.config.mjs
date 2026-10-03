import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://davidmcmahon.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // Keep drafts and utility pages out of the sitemap.
      filter: (page) =>
        !page.includes('/contact/thanks/') && !page.includes('/uncle-ricos-corner/the-day-butler-finally-beat-dayton/'),
    }),
  ],
});
