import { PROJECTS, SERVICES_LIST } from './data';
import type { PageId } from './types';

export const SITE_URL = 'https://www.grillsandflamesbbq.com';
export const DEFAULT_IMAGE = `${SITE_URL}/assets/logo.png`;

export interface SeoData {
  title: string;
  description: string;
  path: string;
  image: string;
  h1: string;
}

const clip = (text: string, max = 158) => {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  return clean.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';
};

const titleCase = (s: string) =>
  s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()).replace(/\bBbq/g, 'BBQ');

export const absoluteUrl = (p: string) =>
  encodeURI(p.startsWith('http') ? p : `${SITE_URL}${p}`);

const PAGES: Record<PageId, Omit<SeoData, 'image'>> = {
  home: {
    title: 'Grills & Flames Dubai | Luxury Outdoor Kitchens, BBQs & Fire Features',
    description:
      'Grills & Flames designs and builds luxury outdoor kitchens, BBQ stations, pergolas, and fire features in Dubai and across the UAE.',
    path: '/',
    h1: 'Luxury Outdoor Kitchens, BBQs, Pergolas & Fire Features in Dubai',
  },
  work: {
    title: 'Luxury Project Portfolio | Grills & Flames Dubai',
    description:
      'Explore our luxury outdoor kitchen, BBQ, pergola, and fire feature portfolio built for Dubai villas and commercial spaces.',
    path: '/work',
    h1: 'Our Luxury Outdoor Projects in Dubai & the UAE',
  },
  services: {
    title: 'Luxury Outdoor Design Services Dubai | Grills & Flames',
    description:
      'Discover our design and build services for custom BBQ stations, pergolas, fire pits, outdoor kitchens, and luxury masonry in Dubai.',
    path: '/services',
    h1: 'Outdoor Kitchen, BBQ, Pergola & Fire Feature Services in Dubai',
  },
  about: {
    title: 'About Grills & Flames | Master Outdoor Designers in Dubai',
    description:
      'Based in Dubai, Grills & Flames merges world-class structural craftsmanship with luxurious architectural designs for elegant al fresco living spaces.',
    path: '/about',
    h1: 'About Grills & Flames, Dubai Outdoor Living Specialists',
  },
  contact: {
    title: 'Contact Grills & Flames Dubai | Outdoor Kitchen & Fire Feature Experts',
    description:
      'Contact Grills & Flames for luxury outdoor kitchens, BBQ stations, pergolas, and fire features in Dubai and the UAE.',
    path: '/contact',
    h1: 'Contact Grills & Flames Dubai',
  },
};

export function getSeo(
  page: PageId,
  projectId?: string | null,
  serviceId?: string | null
): SeoData {
  if (projectId) {
    const p = PROJECTS.find((x) => x.id === projectId);
    if (p) {
      return {
        title: `${titleCase(p.title)} in ${p.location} | Grills & Flames`,
        description: clip(p.description),
        path: `/project/${p.id}`,
        image: absoluteUrl(p.heroImage || DEFAULT_IMAGE),
        h1: titleCase(p.title),
      };
    }
  }
  if (serviceId) {
    const s = SERVICES_LIST.find((x) => x.id === serviceId);
    if (s) {
      return {
        title: `${titleCase(s.title)} Dubai | Design & Installation | Grills & Flames`,
        description: clip(s.longDescription || s.description),
        path: `/service/${s.id}`,
        image: absoluteUrl(s.image || DEFAULT_IMAGE),
        h1: `${titleCase(s.title)} in Dubai`,
      };
    }
  }
  const base = PAGES[page] || PAGES.home;
  return { ...base, image: DEFAULT_IMAGE };
}
