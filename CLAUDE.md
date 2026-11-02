# davidmcmahon.com: project context for Claude Code

Read this first, then ROADMAP.md (what is open) and CONTENT-ROADMAP.md (story notes and sources).

## What this is
Personal site for David (Dave) McMahon, Sarasota, FL. Butler University MBA, former Butler football captain, former VP of Client Services at NetReputation (2019 to 2026). Starting a full-time role at Seer Interactive in mid-November 2026; the site's "fractional consultant" positioning is scheduled to change on Nov 14 (see ROADMAP.md). Dave maintains the site only through Claude Code prompts.
Live at https://davidmcmahon.com. Repo: github.com/dmcmahonmba/davidmcmahon.com (branch main). Netlify builds on every push to main (about a minute). Netlify site id dddb0232-f6bc-4cb1-aa39-bee0ad047682.

## Stack
- Astro 5 static site, @astrojs/sitemap, `trailingSlash: 'always'`, `build.format: 'directory'`.
- Pages: index, about-david (renders src/content/pages/about.md), resume, blog-posts (list), [slug] (blog posts), uncle-ricos-corner (index + [slug]), leaders-read (index), gallery, contact (+ thanks, noindex), 404, robots.txt.ts.
- Content collections (src/content.config.ts): blog, rico, pages. Frontmatter: title, slug, date, description, author, featuredImage, keywords, sources, status (draft or published, used by rico only; the blog collection has no draft filter, so keep drafts outside src/content).
- Data files: src/data/site.ts (identity, socials, NAV, schema facts), src/data/gallery.ts (photos, hero, video tiles; generated), src/data/leaders-read.ts (book tiles by section).
- Design tokens in src/styles/global.css: --blue #13294B, --blue-deep #0B1B33, --blue-soft #2B4470, --gray #919295, --gray-light #D9DBDE, --paper #F5F6F7, --ink #121A26, --accent #C8A24A (gold), --accent-deep #A8832F. Fonts: Inter (body) and Source Serif 4 (headings). Navy and gold palette.
- Redirect: /portfolio to /resume/ in public/_redirects.

## Analytics and search
- Google Tag Manager GTM-KQRT5HZM in src/layouts/Base.astro (head script and body noscript), gated on PUBLIC_GTM_ID in netlify.toml. GA4 (G-CS0Z297CZP) loads only through GTM. Do not add gtag directly.
- Contact form: Netlify Forms (data-netlify, honeypot bot-field), works. The thanks page pushes `{event:'contact_form_submit', form_name:'contact'}` to dataLayer once per session; GTM fires GA4 event `generate_lead`, which is marked a key event.
- Search Console verified (meta tag in Base.astro). Site is indexable; sitemap submitted. JSON-LD @graph (Person #person, WebSite, ProfilePage, BlogPosting, BreadcrumbList).

## Working rules
- Run `git pull -q` before any edit; another thread may push.
- Batch changes. One build and one push per task, not per tweak. Netlify bills credits per build. Commits that touch only ROADMAP.md, CONTENT-ROADMAP.md, LEADERS-READ-BOOKS.md, or CLAUDE.md skip the build (see `ignore` in netlify.toml), so doc-only commits are free.
- Verify locally before pushing: `npm run build`, then `npx astro preview --port N`, and look with Playwright (/opt/node-tools/node_modules/playwright/index.mjs, executablePath '/opt/pw-browsers/chromium'). Headless Chromium lacks H.264, so videos show spinners locally. Check 390px width for horizontal overflow. Stop servers with `fuser -k PORT/tcp`, never `pkill -f` (it kills the shell).
- Commit messages end with the attribution lines the session provides.
- The shell's curl to davidmcmahon.com is blocked (403). Check the live site with a browser tool instead, and wait about 75 seconds after a push for the deploy.

## Voice and content rules (important)
- No em dashes anywhere. Restructure the sentence instead. Prefer brevity and directness.
- Dave's published writing is his own. Leaders Read reviews and intros are his words plus a Grammarly pass; Claude supplies outlines, page builds, schema, and SEO plumbing, and does not write or rewrite his sentences. The Byrider explainer and Go Go post were drafted by Claude only from Dave's stated facts and he approved each line.
- Use only facts Dave stated, his resume, or cited sources. Mark Dave's recollections as such ("as I remember it"). Never invent quotes, numbers, or stories.
- Do not publish allegations about real companies or people (tax shelters, "downfall" of Byrider company stores, etc.). Dave was told this and agreed to keep to first-hand experience.
- Do not host third-party logos or photos unless Dave supplies them for editorial use with a trademark line (the Byrider logo image has one). The AI-generated Go Go mascot image is not used.
- Resume rules: employment history uses years only; NetReputation (2019 to 2026), FYZICAL (2018 to 2019), JD Byrider Franchisee (2017 to 2018), JD Byrider Corporate (2009 to 2017). No client retention number on any tile. No Knowledge Panel or FINRA content. No PII suppression. NFF volunteer bullet removed. Team size is "30 person global team across five countries". Podium rollout year is 2015 on the resume.
- Key resume facts: $5M to $19M revenue; account growth from roughly 15% of revenue in 2021 to roughly 50% of 2025 revenue (about $9.5M); about $390K annual cost removed through one AI-driven redesign; NPS 4.7 / 5.0 over three years.

## Images and media
- Photos: PIL resize to 900px wide, JPEG quality 82, progressive, into public/images/gallery/ (hero images 800px wide in public/images/hero/). chmod 644 anything copied from a protected location.
- Videos: MP4 720p in public/video/ with a -poster.jpg, muted loop tiles, preload none, play/pause on scroll, tap for sound.
- Headshot: public/images/david-mcmahon.jpg (1000x1000), used as the first home-page rotator frame, schema image, and share image. Link previews use this one global image.

## Leaders Read
- Section at /leaders-read/ with five groups (Leadership, Management, Business and tech, Sports, Biographies and memoirs); tiles live in src/data/leaders-read.ts as "Review coming soon". Full reading list in LEADERS-READ-BOOKS.md.
- To publish a review: Dave writes it; add a page at /leaders-read/<slug>/ with Book review schema (book as item, Dave as reviewer; no star ratings, no covers), set the tile to status 'reviewed' with the slug.
- The intro and meta description are approved word for word (copy in CONTENT-ROADMAP.md). Jim DeVoe Sr. is "Big Jim"; spelling is DeVoe. "Leaders Read" was a recurring reminder at Byrider of his commitment to continuous improvement, self-discipline, and intellectual curiosity, often carried in the training department's monthly newsletter. It was not the newsletter's name.

## Known open items
See ROADMAP.md. Highlights: Nov 14 Seer positioning update (resume, titles, hero, About, schema job title), Search Console indexing requests for new pages, compact mobile menu (the nav wraps on phones), per-post share image, larger Uncle Rico image.
