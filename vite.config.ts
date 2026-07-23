import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

const pages = [
  'work',
  'services',
  'about',
  'contact',
  'service/pergolas',
  'service/outdoor-fire-pits',
  'service/indoor-fire-pits',
  'service/fire-bowls',
  'service/bbqs',
  'service/outdoor-kitchens',
  'project/ohana-grill',
  'project/serene-hearth',
  'project/breeze-pavilion',
  'project/redwood-grill',
  'project/jumeirah-fire-dome',
  'project/golf-estate-pavilion'
];

function generateStaticPages() {
  const templatePath = path.resolve(__dirname, 'index.html');
  if (!fs.existsSync(templatePath)) return;
  const template = fs.readFileSync(templatePath, 'utf-8');

  pages.forEach(page => {
    const pageDir = path.resolve(__dirname, page);
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }
    fs.writeFileSync(path.resolve(pageDir, 'index.html'), template, 'utf-8');
  });
}

// Generate the physical HTML entry points in the source tree so Vite can resolve them
generateStaticPages();

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          work: path.resolve(__dirname, 'work/index.html'),
          services: path.resolve(__dirname, 'services/index.html'),
          about: path.resolve(__dirname, 'about/index.html'),
          contact: path.resolve(__dirname, 'contact/index.html'),
          'service-pergolas': path.resolve(__dirname, 'service/pergolas/index.html'),
          'service-outdoor-fire-pits': path.resolve(__dirname, 'service/outdoor-fire-pits/index.html'),
          'service-indoor-fire-pits': path.resolve(__dirname, 'service/indoor-fire-pits/index.html'),
          'service-fire-bowls': path.resolve(__dirname, 'service/fire-bowls/index.html'),
          'service-bbqs': path.resolve(__dirname, 'service/bbqs/index.html'),
          'service-outdoor-kitchens': path.resolve(__dirname, 'service/outdoor-kitchens/index.html'),
          'project-ohana-grill': path.resolve(__dirname, 'project/ohana-grill/index.html'),
          'project-serene-hearth': path.resolve(__dirname, 'project/serene-hearth/index.html'),
          'project-breeze-pavilion': path.resolve(__dirname, 'project/breeze-pavilion/index.html'),
          'project-redwood-grill': path.resolve(__dirname, 'project/redwood-grill/index.html'),
          'project-jumeirah-fire-dome': path.resolve(__dirname, 'project/jumeirah-fire-dome/index.html'),
          'project-golf-estate-pavilion': path.resolve(__dirname, 'project/golf-estate-pavilion/index.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
