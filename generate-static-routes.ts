/**
 * Post-build step: writes one index.html per real route with its own
 * <title>, description, canonical, Open Graph / Twitter tags and crawlable
 * <noscript> content, plus a noindex 404.html. sitemap.xml is NOT generated:
 * it is the static file in public/sitemap.xml.
 * Run automatically by `npm run build` (via tsx).
 */
import fs from 'node:fs';
import path from 'node:path';
import { PROJECTS, SERVICES_LIST } from './src/data';
import { getSeo, SITE_URL } from './src/seo';
import type { PageId } from './src/types';

const dist = path.resolve('dist');
const indexPath = path.join(dist, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html not found. Run vite build first.');
  process.exit(1);
}
const template = fs.readFileSync(indexPath, 'utf8');

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const setTag = (html: string, re: RegExp, replacement: string) =>
  re.test(html) ? html.replace(re, replacement) : html;

interface Route { page: PageId; project?: string; service?: string; priority: string }

const routes: Route[] = [
  { page: 'home', priority: '1.0' },
  { page: 'services', priority: '0.9' },
  { page: 'work', priority: '0.8' },
  { page: 'about', priority: '0.7' },
  { page: 'contact', priority: '0.8' },
  ...SERVICES_LIST.map((s) => ({ page: 'services' as PageId, service: s.id, priority: '0.8' })),
  ...PROJECTS.map((p) => ({ page: 'work' as PageId, project: p.id, priority: '0.6' })),
];

const links = [
  ['/', 'Home'], ['/services', 'Services'], ['/work', 'Our Work'], ['/about', 'About'], ['/contact', 'Contact'],
  ...SERVICES_LIST.map((s) => [`/service/${s.id}`, s.title] as [string, string]),
];

function render(route: Route) {
  const seo = getSeo(route.page, route.project, route.service);
  const url = seo.path === '/' ? SITE_URL : `${SITE_URL}${seo.path}`;
  let html = template;
  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(seo.title)}</title>`);
  html = setTag(html, /<meta name="description"[^>]*>/, `<meta name="description" content="${esc(seo.description)}" />`);
  html = setTag(html, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`);
  html = setTag(html, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`);
  html = setTag(html, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(seo.title)}" />`);
  html = setTag(html, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(seo.description)}" />`);
  html = setTag(html, /<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${esc(seo.image)}" />`);
  html = setTag(html, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(seo.title)}" />`);
  html = setTag(html, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(seo.description)}" />`);
  html = setTag(html, /<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${esc(seo.image)}" />`);

  const noscript =
    `<noscript><h1>${esc(seo.h1)}</h1><p>${esc(seo.description)}</p><nav>` +
    links.map(([href, label]) => `<a href="${href}">${esc(label)}</a>`).join(' ') +
    `</nav></noscript>`;
  html = html.replace('<div id="root"></div>', `<div id="root"></div>\n    ${noscript}`);
  return { html, seo, url };
}

for (const route of routes) {
  const { html, seo, url } = render(route);
  if (seo.path === '/') {
    fs.writeFileSync(indexPath, html);
  } else {
    const dir = path.join(dist, seo.path);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
  }
  console.log(`generated ${seo.path}`);
}

// 404 fallback: must not be indexed or inherit the homepage canonical.
let notFound = template
  .replace(/<title>[\s\S]*?<\/title>/, '<title>Page not found | Grills &amp; Flames Dubai</title>')
  .replace(/<meta name="robots"[^>]*>/, '<meta name="robots" content="noindex, follow" />')
  .replace(/<link rel="canonical"[^>]*>\s*/, '');
fs.writeFileSync(path.join(dist, '404.html'), notFound);

console.log('Static SEO routes and 404.html written.');
