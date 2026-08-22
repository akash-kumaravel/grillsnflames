const fs = require('fs');
const path = require('path');

const distPath = path.resolve('dist');
const indexPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('Error: dist/index.html not found! Run vite build first.');
  process.exit(1);
}

// Read site data to derive routes automatically (services and blog articles)
const dataPath = path.resolve('src', 'data.ts');
let dataRaw = '';
try {
  dataRaw = fs.readFileSync(dataPath, 'utf8');
} catch (err) {
  console.error('Failed to read src/data.ts:', err);
}

// Helper: extract SERVICES ids
function extractServiceIds(src) {
  const servicesMatch = src.match(/export const SERVICES[\s\S]*?=\s*\[([\s\S]*?)\];/m);
  if (!servicesMatch) return [];
  const block = servicesMatch[1];
  const ids = Array.from(block.matchAll(/id:\s*"([^"]+)"/g)).map(m => m[1]);
  return ids;
}

// Helper: extract BLOG_ARTICLES slugs
function extractBlogSlugs(src) {
  const blogsMatch = src.match(/export const BLOG_ARTICLES[\s\S]*?=\s*\[([\s\S]*?)\];/m);
  if (!blogsMatch) return [];
  const block = blogsMatch[1];
  const slugs = Array.from(block.matchAll(/slug:\s*"([^"]+)"/g)).map(m => m[1].replace(/^\//, ''));
  return slugs;
}

// Helper: extract OUTDOOR_GAS_VARIANTS ids
function extractGasVariantIds(src) {
  const match = src.match(/export const OUTDOOR_GAS_VARIANTS[\s\S]*?=\s*\[([\s\S]*?)\];/m);
  if (!match) return [];
  const block = match[1];
  const ids = Array.from(block.matchAll(/id:\s*"([^"]+)"/g)).map(m => m[1]);
  return ids;
}

const staticPages = ['','about','services','portfolio','faq','contact','blog','best-fireplace-dubai'];
const serviceIds = extractServiceIds(dataRaw).map(id => `services/${id}`);
const gasVariantIds = extractGasVariantIds(dataRaw).map(id => `services/outdoor-gas-fireplace/${id.replace('-gas-fireplace', '')}`);
const gasVariantAltIds = extractGasVariantIds(dataRaw).map(id => `services/${id}`);
const blogSlugs = extractBlogSlugs(dataRaw);

const routes = [...staticPages, ...blogSlugs, ...serviceIds, ...gasVariantIds, ...gasVariantAltIds];

// Generate fallback 404.html for static servers
try {
  fs.copyFileSync(indexPath, path.join(distPath, '404.html'));
  console.log('Successfully generated dist/404.html');
} catch (err) {
  console.error('Failed to create 404.html fallback:', err);
}

// Generate physical routes allowing safe refresh checks
routes.forEach((route) => {
  if (route === '') return; // Skip folder generation for empty route
  const targetDir = path.join(distPath, route);
  const targetIndex = path.join(targetDir, 'index.html');
  
  try {
    fs.mkdirSync(targetDir, { recursive: true });
    fs.copyFileSync(indexPath, targetIndex);
    console.log(`Successfully generated static route index for /${route}`);
  } catch (err) {
    console.error(`Failed to generate route for /${route}:`, err);
  }
});

console.log('Static route fallbacks generated successfully!');

// Regenerate sitemap.xml in public/ from derived routes
try {
  const origin = 'https://www.flamesfireplace.com';
  const today = new Date().toISOString().slice(0,10);
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  routes.forEach(r => {
    const loc = r === '' ? `${origin}/` : `${origin}/${r}`;
    const priority = r === '' ? '1.0' : r === 'best-fireplace-dubai' ? '1.0' : r.startsWith('services/') ? '0.9' : r.startsWith('blog') ? '0.8' : '0.7';
    sitemap += `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
  });

  sitemap += '</urlset>\n';
  fs.writeFileSync(path.resolve('public','sitemap.xml'), sitemap, 'utf8');
  console.log('Updated public/sitemap.xml from src/data.ts');
} catch (err) {
  console.error('Failed to write sitemap:', err);
}
