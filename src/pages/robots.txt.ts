import type { APIRoute } from 'astro';
export const GET: APIRoute = () => {
  const blocked = import.meta.env.PUBLIC_NOINDEX === 'true';
  const body = blocked
    ? 'User-agent: *\nDisallow: /\n'
    : 'User-agent: *\nAllow: /\n\nSitemap: https://davidmcmahon.com/sitemap-index.xml\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
