# davidmcmahon.com launch checklist

## Before launch (content)
- [ ] Instagram: replace the emma_and_elsie link in src/data/site.ts with David's personal handle if he wants one in the schema (set inSchema: true). It is a footer link only for now.
- [ ] X: confirm https://x.com/researchcte4me is the right profile.
- [ ] Substack: confirm https://substack.com/@davidmcmahon55 (swap for the publication URL if there is one).
- [ ] Replace public/images/david-mcmahon.jpg with the final headshot (at least 800 x 800).
- [ ] Uncle Rico post: confirm facts, add the kick-block photo, set status: published, remove the sitemap exclusion in astro.config.mjs.
- [ ] About page: confirm 2005 captaincy against the printed Butler media guide (the resume PDF already says two-time captain).
- [ ] Resume: add job titles and dates if wanted.

## Analytics
- [ ] Create a GA4 property, copy the Measurement ID (G-XXXXXXXXXX).
- [ ] In Netlify, set environment variable PUBLIC_GA_ID, or uncomment it in netlify.toml.
- [ ] Link GA4 to Search Console (GA4 Admin, Product links).

## Contact form
- [ ] After the first deploy, submit a test message and confirm it appears in Netlify, Forms.
- [ ] Netlify, Forms, Notifications: add an email notification to Dave's address.

## Launch day
- [ ] Delete PUBLIC_NOINDEX from netlify.toml and redeploy (removes noindex, opens robots.txt, adds sitemap).
- [ ] Netlify, Domain management: add davidmcmahon.com and www.
- [ ] At GoDaddy, change nameservers to Netlify DNS (or add Netlify's records). Cloudflare is no longer used after this.
- [ ] Confirm https works on both names and /portfolio/ redirects to /resume/.
- [ ] Search Console: submit https://davidmcmahon.com/sitemap-index.xml. The verification meta tag is already in the site head.
- [ ] Validate schema at https://validator.schema.org and Google's Rich Results Test.
- [ ] Keep the old host running about 30 days if possible, then retire it.
