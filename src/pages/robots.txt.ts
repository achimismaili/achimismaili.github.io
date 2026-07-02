import type { APIRoute } from 'astro';
import { siteConfig } from '../config';

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = site ? new URL('sitemap-index.xml', site).href : '/sitemap-index.xml';

  const lines = siteConfig.noIndex
    ? ['User-agent: *', 'Disallow: /', 'Disallow: /version.json']
    : ['User-agent: *', 'Allow: /', 'Disallow: /version.json', '', `Sitemap: ${sitemapUrl}`];

  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
