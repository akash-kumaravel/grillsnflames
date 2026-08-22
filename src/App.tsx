import { useState, useEffect } from 'react';
import { 
  Flame, Info, ShieldCheck, Check, Search, ArrowRight, MessageCircle, ArrowUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Shared types and rich database
import { ActiveSection, FAQItem, BreadcrumbStep } from './types';
import { 
  BRAND, PRODUCTS, TRUST_BAR, GENERAL_STATS, 
  COMMON_FAQS, META_SUMMARY, WHY_CHOOSE_EXTRA,
  BLOG_ARTICLES, OUTDOOR_GAS_VARIANTS
} from './data';
import { SERVICES } from './data';

// Modular Web Components
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage';
import BioEthanolFireplacePage from './components/BioEthanolFireplacePage';
import WaterVaporFireplacePage from './components/WaterVaporFireplacePage';
import OutdoorFireplacePage from './components/OutdoorFireplacePage';
import IndoorFireplacePage from './components/IndoorFireplacePage';
import FirePitPage from './components/FirePitPage';
import FireTablePage from './components/FireTablePage';
import OutdoorKitchenPage from './components/OutdoorKitchenPage';
import BuiltInBbqPage from './components/BuiltInBbqPage';
import FireplaceDubaiPage from './components/FireplaceDubaiPage';
import EthanolBurnerPage from './components/EthanolBurnerPage';
import OutdoorGasFireplacePage from './components/OutdoorGasFireplacePage';
import GasFireplaceVariantPage from './components/GasFireplaceVariantPage';
import OutdoorFireUnitDetailPage from './components/OutdoorFireUnitDetailPage';
import EthanolFireplaceHubPage from './components/EthanolFireplaceHubPage';
import WoodFireplaceHubPage from './components/WoodFireplaceHubPage';
import RocksMediaHubPage from './components/RocksMediaHubPage';
import FirePotTablesHubPage from './components/FirePotTablesHubPage';
import CustomFireTableWithUnitPage from './components/CustomFireTableWithUnitPage';
import BestFireplaceLanding from './components/BestFireplaceLanding';
import Artificial3DFireplacePage from './components/Artificial3DFireplacePage';

const sectionToPath: Record<ActiveSection, string> = {
  'home': '/',
  'about': '/about',
  'services': '/services',
  'portfolio': '/portfolio',
  'why-choose': '/why-choose',
  'faq': '/faq',
  'contact': '/contact',
  'blog': '/blog',
  'bio-ethanol-fireplace': '/services/bio-ethanol-fireplace',
  'water-vapor-fireplace': '/services/water-vapor-fireplace',
  'outdoor-gas-fireplace': '/services/outdoor-gas-fireplace',
  'home-automated-gas-fireplace': '/services/outdoor-gas-fireplace/home-automated',
  'high-low-flame-gas-fireplace': '/services/outdoor-gas-fireplace/high-low-flame',
  'remote-operated-gas-fireplace': '/services/outdoor-gas-fireplace/remote-operated',
  'push-and-turn-gas-fireplace': '/services/outdoor-gas-fireplace/push-and-turn',
  'key-valve-gas-fireplace': '/services/outdoor-gas-fireplace/key-valve',
  'ethanol-fireplace': '/services/ethanol-fireplace',
  'manual-ethanol-fireplace': '/services/ethanol-fireplace/manual-ethanol',
  'ethanol-fuel-fireplace': '/services/ethanol-fireplace/ethanol-fuel',
  'wood-fireplace': '/services/wood-fireplace',
  'outdoor-woodfire-place': '/services/wood-fireplace/outdoor-woodfire-place',
  'rocks-media': '/services/rocks-media',
  'lava-rock-media': '/services/rocks-media/lava-rock',
  'pebbles-media': '/services/rocks-media/pebbles',
  'artificial-stone-media': '/services/rocks-media/artificial-stone',
  'fire-pot-tables': '/services/fire-pot-tables',
  'concrete-fire-pot': '/services/fire-pot-tables/concrete-fire-pot',
  'metal-powder-coated-pot': '/services/fire-pot-tables/metal-powder-coated-pot',
  'grc-fire-bowls': '/services/fire-pot-tables/grc-fire-bowls',
  'customized-fire-tables-general': '/services/fire-pot-tables/customized-fire-tables',
  'custom-fire-tables': '/services/custom-fire-tables',
  'custom-fire-table': '/services/custom-fire-table',
  'custom-fire-table-with-fire-unit': '/services/custom-fire-table-with-fire-unit',
  'artificial-3d-fireplace': '/services/artificial-3d-fireplace',
  'outdoor-fireplace': '/services/outdoor-fireplace',
  'indoor-fireplace': '/services/indoor-fireplace',
  'fire-pit': '/services/fire-pit',
  'fire-table': '/services/fire-table',
  'outdoor-kitchen': '/services/outdoor-kitchen',
  'built-in-bbq': '/services/built-in-bbq',
  'fireplace-dubai': '/services/fireplace-dubai',
  'ethanol-burner': '/services/ethanol-burner',
  'best-fireplace-dubai': '/best-fireplace-dubai',
};

const getSectionFromPath = (): ActiveSection => {
  const path = window.location.pathname;
    // Check specific gas fireplace sub-routes first
    if (path.includes('/services/outdoor-gas-fireplace/home-automated') || path.includes('/services/home-automated-gas-fireplace')) return 'home-automated-gas-fireplace';
    if (path.includes('/services/outdoor-gas-fireplace/high-low-flame') || path.includes('/services/high-low-flame-gas-fireplace')) return 'high-low-flame-gas-fireplace';
    if (path.includes('/services/outdoor-gas-fireplace/remote-operated') || path.includes('/services/remote-operated-gas-fireplace')) return 'remote-operated-gas-fireplace';
    if (path.includes('/services/outdoor-gas-fireplace/push-and-turn') || path.includes('/services/push-and-turn-gas-fireplace')) return 'push-and-turn-gas-fireplace';
    if (path.includes('/services/outdoor-gas-fireplace/key-valve') || path.includes('/services/key-valve-gas-fireplace')) return 'key-valve-gas-fireplace';

    // Check ethanol fireplace sub-routes
    if (path.includes('/services/ethanol-fireplace/manual-ethanol') || path.includes('/services/manual-ethanol-fireplace')) return 'manual-ethanol-fireplace';
    if (path.includes('/services/ethanol-fireplace/ethanol-fuel') || path.includes('/services/ethanol-fuel-fireplace')) return 'ethanol-fuel-fireplace';

    // Check wood fireplace sub-routes
    if (path.includes('/services/wood-fireplace/outdoor-woodfire-place') || path.includes('/services/outdoor-woodfire-place')) return 'outdoor-woodfire-place';

    // Check rocks media sub-routes
    if (path.includes('/services/rocks-media/lava-rock') || path.includes('/services/lava-rock-media')) return 'lava-rock-media';
    if (path.includes('/services/rocks-media/pebbles') || path.includes('/services/pebbles-media')) return 'pebbles-media';
    if (path.includes('/services/rocks-media/artificial-stone') || path.includes('/services/artificial-stone-media')) return 'artificial-stone-media';

    // Check fire pot & tables sub-routes
    if (path.includes('/services/fire-pot-tables/concrete-fire-pot') || path.includes('/services/concrete-fire-pot')) return 'concrete-fire-pot';
    if (path.includes('/services/fire-pot-tables/metal-powder-coated-pot') || path.includes('/services/metal-powder-coated-pot')) return 'metal-powder-coated-pot';
    if (path.includes('/services/fire-pot-tables/grc-fire-bowls') || path.includes('/services/grc-fire-bowls')) return 'grc-fire-bowls';
    if (path.includes('/services/fire-pot-tables/customized-fire-tables') || path.includes('/services/customized-fire-tables-general')) return 'customized-fire-tables-general';

    // Check specific service detail routes first so they don't get captured
    // by the generic '/services' check below.
    if (path.includes('/services/bio-ethanol-fireplace')) return 'bio-ethanol-fireplace';
    if (path.includes('/services/water-vapor-fireplace')) return 'water-vapor-fireplace';
    if (path.includes('/services/outdoor-gas-fireplace')) return 'outdoor-gas-fireplace';
    if (path.includes('/services/ethanol-fireplace')) return 'ethanol-fireplace';
    if (path.includes('/services/wood-fireplace')) return 'wood-fireplace';
    if (path.includes('/services/rocks-media')) return 'rocks-media';
    if (path.includes('/services/fire-pot-tables')) return 'fire-pot-tables';
    if (path.includes('/services/custom-fire-tables')) return 'custom-fire-tables';
    if (path.includes('/services/custom-fire-table-with-fire-unit')) return 'custom-fire-table-with-fire-unit';
    if (path.includes('/services/custom-fire-table')) return 'custom-fire-table';
    if (path.includes('/services/artificial-3d-fireplace')) return 'artificial-3d-fireplace';
    if (path.includes('/services/outdoor-fireplace')) return 'outdoor-fireplace';
    if (path.includes('/services/indoor-fireplace')) return 'indoor-fireplace';
    if (path.includes('/services/fire-pit')) return 'fire-pit';
    if (path.includes('/services/fire-table')) return 'fire-table';
    if (path.includes('/services/outdoor-kitchen')) return 'outdoor-kitchen';
    if (path.includes('/services/built-in-bbq')) return 'built-in-bbq';
    if (path.includes('/services/fireplace-dubai')) return 'fireplace-dubai';
    if (path.includes('/services/ethanol-burner')) return 'ethanol-burner';
    if (path.includes('/best-fireplace-dubai')) return 'best-fireplace-dubai';
    if (path.includes('/about')) return 'about';
    if (path.includes('/services')) return 'services';
    if (path.includes('/portfolio')) return 'portfolio';
    if (path.includes('/why-choose')) return 'why-choose';
    if (path.includes('/faq')) return 'faq';
    if (path.includes('/contact')) return 'contact';
    if (path.includes('/blog')) return 'blog';

  return 'home';
};

// Helper component to handle scrolling to the top after page transitions complete (mount of new page)
function ScrollToTopTrigger() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>(() => getSectionFromPath());
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(() => {
    const matched = BLOG_ARTICLES.find(article => article.slug === window.location.pathname);
    return matched ? matched.id : null;
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [faqCategory, setFaqCategory] = useState<'all' | 'general' | 'safety' | 'fuel'>('all');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleWindowScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Sync state back to the URL Path on navigate, tracking history block
  const handleNavigation = (section: ActiveSection, updateHistory = true) => {
    console.log('[App] handleNavigation ->', section, { updateHistory });
    setActiveSection(section);
    if (section !== 'blog') {
      setSelectedArticleId(null);
    }
    if (updateHistory) {
      const path = sectionToPath[section] || '/';
      window.history.pushState({ section, articleId: null }, '', path);
    }
  };

  const handleSelectArticle = (articleId: string | null, updateHistory = true) => {
    setSelectedArticleId(articleId);
    setActiveSection('blog');
    if (updateHistory) {
      if (articleId) {
        const article = BLOG_ARTICLES.find(a => a.id === articleId);
        const path = article ? article.slug : '/blog';
        window.history.pushState({ section: 'blog', articleId }, '', path);
      } else {
        window.history.pushState({ section: 'blog', articleId: null }, '', '/blog');
      }
    }
  };

  const getBreadcrumbsSteps = (): BreadcrumbStep[] => {
    const steps: BreadcrumbStep[] = [];
    if (activeSection === 'about') {
      steps.push({ label: 'About Us', section: 'about' });
    } else if (activeSection === 'services') {
      steps.push({ label: 'Services', section: 'services' });
    } else if (activeSection === 'portfolio') {
      steps.push({ label: 'Our Works', section: 'portfolio' });
    } else if (activeSection === 'why-choose') {
      steps.push({ label: 'Why Choose Us', section: 'why-choose' });
    } else if (activeSection === 'faq') {
      steps.push({ label: 'FAQs', section: 'faq' });
    } else if (activeSection === 'contact') {
      steps.push({ label: 'Contact Us', section: 'contact' });
    } else if (activeSection === 'blog') {
      steps.push({ label: 'Blog', section: 'blog' });
      if (selectedArticleId) {
        const article = BLOG_ARTICLES.find(a => a.id === selectedArticleId);
        if (article) {
          steps.push({ label: article.title, section: 'blog', articleId: selectedArticleId });
        }
      }
    } else if (activeSection === 'bio-ethanol-fireplace') {
      steps.push({ label: 'Bio Ethanol Fireplaces', section: 'bio-ethanol-fireplace' });
    } else if (activeSection === 'water-vapor-fireplace') {
      steps.push({ label: '3D Water Vapor Fireplaces', section: 'water-vapor-fireplace' });
    } else if (activeSection === 'outdoor-fireplace') {
      steps.push({ label: 'Outdoor Fireplaces', section: 'outdoor-fireplace' });
    } else if (activeSection === 'indoor-fireplace') {
      steps.push({ label: 'Indoor Fireplaces', section: 'indoor-fireplace' });
    } else if (activeSection === 'fire-pit') {
      steps.push({ label: 'Fire Pits', section: 'fire-pit' });
    } else if (activeSection === 'fire-table') {
      steps.push({ label: 'Fire Tables & Coffee Tables', section: 'fire-table' });
    } else if (activeSection === 'outdoor-kitchen') {
      steps.push({ label: 'Custom Outdoor Kitchens', section: 'outdoor-kitchen' });
    } else if (activeSection === 'built-in-bbq') {
      steps.push({ label: 'Built-In BBQs', section: 'built-in-bbq' });
    } else if (activeSection === 'fireplace-dubai') {
      steps.push({ label: 'Fireplaces for Dubai', section: 'fireplace-dubai' });
    } else if (activeSection === 'best-fireplace-dubai') {
      steps.push({ label: 'Best Fireplaces in Dubai', section: 'best-fireplace-dubai' });
    } else if (activeSection === 'outdoor-gas-fireplace') {
      steps.push({ label: 'Outdoor Gas Fireplaces', section: 'outdoor-gas-fireplace' });
    } else if (activeSection === 'home-automated-gas-fireplace') {
      steps.push({ label: 'Outdoor Gas Fireplaces', section: 'outdoor-gas-fireplace' });
      steps.push({ label: 'Home Automated On & Off', section: 'home-automated-gas-fireplace' });
    } else if (activeSection === 'high-low-flame-gas-fireplace') {
      steps.push({ label: 'Outdoor Gas Fireplaces', section: 'outdoor-gas-fireplace' });
      steps.push({ label: 'High and Low Flame', section: 'high-low-flame-gas-fireplace' });
    } else if (activeSection === 'remote-operated-gas-fireplace') {
      steps.push({ label: 'Outdoor Gas Fireplaces', section: 'outdoor-gas-fireplace' });
      steps.push({ label: 'Remote Operated', section: 'remote-operated-gas-fireplace' });
    } else if (activeSection === 'push-and-turn-gas-fireplace') {
      steps.push({ label: 'Outdoor Gas Fireplaces', section: 'outdoor-gas-fireplace' });
      steps.push({ label: 'Push & Turn', section: 'push-and-turn-gas-fireplace' });
    } else if (activeSection === 'key-valve-gas-fireplace') {
      steps.push({ label: 'Outdoor Gas Fireplaces', section: 'outdoor-gas-fireplace' });
      steps.push({ label: 'Key Valve', section: 'key-valve-gas-fireplace' });
    } else if (activeSection === 'ethanol-burner') {
      steps.push({ label: 'Ethanol Burners', section: 'ethanol-burner' });
    }
    return steps;
  };

  // Listen to browser backwards/forwards popstate navigation
  useEffect(() => {
    const handleNavigationEvent = () => {
      const matched = getSectionFromPath();
      console.log('[App] popstate matched ->', matched, 'path=', window.location.pathname);
      setActiveSection(matched);
      const matchedArticle = BLOG_ARTICLES.find(article => article.slug === window.location.pathname);
      setSelectedArticleId(matchedArticle ? matchedArticle.id : null);
    };

    window.addEventListener('popstate', handleNavigationEvent);

    return () => {
      window.removeEventListener('popstate', handleNavigationEvent);
    };
  }, []);

  // Map active section to its relevant SEO meta summary inside data.ts
  const getActiveMetaKey = (): string => {
    if (activeSection === 'home') return 'home';
    if (activeSection === 'about') return 'about';
    if (activeSection === 'services') return 'services';
    if (activeSection === 'portfolio') return 'portfolio';
    if (activeSection === 'faq') return 'faq';
    if (activeSection === 'why-choose') return 'why-choose';
    if (activeSection === 'blog') return 'blog';
    if (activeSection === 'best-fireplace-dubai') return 'best-fireplace-dubai';
    if (
      activeSection === 'outdoor-gas-fireplace' ||
      activeSection === 'home-automated-gas-fireplace' ||
      activeSection === 'high-low-flame-gas-fireplace' ||
      activeSection === 'remote-operated-gas-fireplace' ||
      activeSection === 'push-and-turn-gas-fireplace' ||
      activeSection === 'key-valve-gas-fireplace'
    ) return activeSection;
    if (
      activeSection === 'bio-ethanol-fireplace' ||
      activeSection === 'water-vapor-fireplace' ||
      activeSection === 'outdoor-fireplace' ||
      activeSection === 'indoor-fireplace' ||
      activeSection === 'fire-pit' ||
      activeSection === 'fire-table' ||
      activeSection === 'outdoor-kitchen' ||
      activeSection === 'built-in-bbq' ||
      activeSection === 'fireplace-dubai' ||
      activeSection === 'ethanol-burner'
    ) return 'services';
    return 'contact';
  };

  // Construct dynamic SEO metadata based on whether a specific blog article is being read
  const activeArticleObj = BLOG_ARTICLES.find(a => a.id === selectedArticleId);
  const currentMeta = activeArticleObj ? {
    title: activeArticleObj.seoTitle || `${activeArticleObj.title} | Flames Fireplace Blog`,
    description: activeArticleObj.seoDescription || activeArticleObj.content.intro,
    primaryKW: activeArticleObj.targetKeyword,
    secondaryKW: activeArticleObj.content.category
  } : (() => {
    const gasVariant = OUTDOOR_GAS_VARIANTS.find(v => v.id === activeSection);
    if (gasVariant) {
      return {
        title: gasVariant.seoTitle,
        description: gasVariant.seoDescription,
        primaryKW: gasVariant.title,
        secondaryKW: gasVariant.badge
      };
    }
    const svc = SERVICES.find(s => s.id === activeSection);
    if (svc) {
      return {
        title: svc.seoTitle || `${svc.title} | Flames Fireplace`,
        description: svc.seoDescription || svc.description,
        primaryKW: svc.title,
        secondaryKW: svc.category
      };
    }
    const metaKey = getActiveMetaKey();
    return (META_SUMMARY[metaKey as keyof typeof META_SUMMARY] || META_SUMMARY.home);
  })();

  const currentKeywords = [currentMeta.primaryKW, currentMeta.secondaryKW].filter(Boolean).join(', ');

  // Dynamically update the browser tab title, description metadata, canonical links, Open Graph cards, and JSON-LD structured data on route changes
  useEffect(() => {
    document.title = currentMeta.title;

    const currentPath = window.location.pathname;
    const origin = "https://www.flamesfireplace.com";
    const path = currentPath.endsWith('/') && currentPath !== '/' ? currentPath.slice(0, -1) : currentPath;
    const pageUrl = `${origin}${path === '/' ? '/' : path}`;

    // 1. Manage Meta Description
    let descEl = document.querySelector('meta[name="description"]');
    if (!descEl) {
      descEl = document.createElement('meta');
      descEl.setAttribute('name', 'description');
      document.head.appendChild(descEl);
    }
    descEl.setAttribute('content', currentMeta.description);

    // 2. Manage Keywords and Canonical Link
    let keywordEl = document.querySelector('meta[name="keywords"]');
    if (!keywordEl) {
      keywordEl = document.createElement('meta');
      keywordEl.setAttribute('name', 'keywords');
      document.head.appendChild(keywordEl);
    }
    keywordEl.setAttribute('content', currentKeywords);

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', pageUrl);

    // 3. Manage Open Graph (OG) Cards — direct injection for major indexing crawlers (Gemini, ChatGPT, Perplexity)
    const svcForOg = SERVICES.find(s => s.id === activeSection);
    const ogImage = activeArticleObj
      ? 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200'
      : (svcForOg ? `${origin}${svcForOg.image}` : `${origin}/assets/Bio-Ethanol%20Fireplace%20_%20Product%20Close-up.png`);

    const ogProperties = {
      'og:title': currentMeta.title,
      'og:description': currentMeta.description,
      'og:type': activeArticleObj ? 'article' : 'website',
      'og:url': pageUrl,
      'og:image': ogImage,
      'twitter:card': 'summary_large_image',
      'twitter:title': currentMeta.title,
      'twitter:description': currentMeta.description,
      'twitter:image': ogImage
    };

    Object.entries(ogProperties).forEach(([property, value]) => {
      let el = document.querySelector(`meta[property="${property}"], meta[name="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        if (property.startsWith('og:')) {
          el.setAttribute('property', property);
        } else {
          el.setAttribute('name', property);
        }
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    });

    // 4. Inject Dynamic JSON-LD Structured Data Schema (Guarantees superb ranking & rich citations in search engines)
    let jsonLdEl = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLdEl) {
      jsonLdEl = document.createElement('script');
      jsonLdEl.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLdEl);
    }

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Flames Fireplace',
      alternateName: 'FlamesFireplace',
      url: origin,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${origin}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };


    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Flames Fireplace',
      alternateName: 'FlamesFireplace',
      image: `${origin}/assets/Bio-Ethanol%20Fireplace%20_%20Product%20Close-up.png`,
      '@id': `${origin}/#localbusiness`,
      url: origin,
      telephone: '+971542112891',
      priceRange: '$$$',
      openingHours: 'Mo-Su 08:00-20:00',
      paymentAccepted: 'Cash, Credit Card, Bank Transfer',
      serviceType: ['Outdoor Gas Fire Places', 'Manual Ethanol Fire Places', '3D Water Vapor Fire Places', 'Fire Pots', 'Fire Tables', 'Indoor Fire Places'],
      areaServed: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Umm Al Quwain', 'Ras Al Khaimah', 'Fujairah', 'UAE'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sheikh Zayed Road',
        addressLocality: 'Dubai',
        addressRegion: 'Dubai',
        postalCode: '00000',
        addressCountry: 'AE'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '25.2048',
        longitude: '55.2708'
      },
      description: currentMeta.description
    };


    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: origin
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: currentMeta.title,
          item: pageUrl
        }
      ]
    };

    let schemaObj: any = null;

    if (activeArticleObj) {
      schemaObj = [
        websiteSchema,
        localBusinessSchema,
        breadcrumbSchema,
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: activeArticleObj.title,
          description: activeArticleObj.content.intro,
          datePublished: activeArticleObj.content.date,
          keywords: currentKeywords,
          author: {
            '@type': 'Organization',
            name: 'Flames Fireplace',
            url: origin
          },
          publisher: {
            '@type': 'Organization',
            name: 'Flames Fireplace',
            logo: {
              '@type': 'ImageObject',
              url: `${origin}/assets/icon.svg`
            }
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': pageUrl
          }
        }
      ];

      if (activeArticleObj.content.faq) {
        schemaObj = [
          ...schemaObj,
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [{
              '@type': 'Question',
              name: activeArticleObj.content.faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: activeArticleObj.content.faq.answer
              }
            }]
          }
        ];
      }
    } else if (activeSection === 'faq') {
      schemaObj = [
        websiteSchema,
        localBusinessSchema,
        breadcrumbSchema,
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: COMMON_FAQS.slice(0, 6).map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer
            }
          }))
        }
      ];
    } else {
      schemaObj = [
        websiteSchema,
        localBusinessSchema,
        breadcrumbSchema,
        {
          '@context': 'https://schema.org',
          '@type': 'Store',
          name: 'Flames Fireplace',
          image: `${origin}/assets/Bio-Ethanol Fireplace _ Product Close-up.png`,
          '@id': `${origin}/#organization`,
          url: origin,
          telephone: '+971542112891',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Sheikh Zayed Road',
            addressLocality: 'Dubai',
            addressRegion: 'Dubai',
            addressCountry: 'AE'
          }
        }
      ];
    }

    // If viewing a specific service and it has FAQs, append FAQPage schema for rich results
    const svc = SERVICES.find(s => s.id === activeSection);
    if (svc && svc.faqs && svc.faqs.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: svc.faqs.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', 'text': f.answer }
        }))
      };

      // If schemaObj is array, append, otherwise wrap
      if (Array.isArray(schemaObj)) {
        schemaObj = [...schemaObj, faqSchema];
      } else {
        schemaObj = [schemaObj, faqSchema];
      }
    }

    jsonLdEl.textContent = JSON.stringify(schemaObj, null, 2);
  }, [currentMeta.title, currentMeta.description, currentMeta.primaryKW, currentMeta.secondaryKW, activeSection, activeArticleObj?.id]);

  const filteredFaqs = COMMON_FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (faqCategory === 'all') return matchesSearch;
    if (faqCategory === 'general') return matchesSearch && !faq.question.toLowerCase().includes('saf') && !faq.question.toLowerCase().includes('cost');
    if (faqCategory === 'safety') return matchesSearch && (faq.question.toLowerCase().includes('saf') || faq.question.toLowerCase().includes('child'));
    if (faqCategory === 'fuel') return matchesSearch && (faq.question.toLowerCase().includes('fuel') || faq.question.toLowerCase().includes('cost'));
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-neutral-100 selection:bg-orange-500/20 selection:text-orange-300 flex flex-col justify-between overflow-x-hidden antialiased">
      
      {/* 1. Global Navigation header bar */}
      <Header activeSection={activeSection} onNavigate={handleNavigation} />
      {/* debug banner removed */}

      {/* 2. Main content switchboard wrapper */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeSection}-${selectedArticleId || 'list'}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <ScrollToTopTrigger />
            
            {/* ──── ROUTE: HOME ──── */}
            {activeSection === 'home' && (
              <div id="section-home">
                {/* Visual Intro */}
                <Hero onNavigate={handleNavigation} />



                {/* Featured Q&A section */}
                <div className="py-20 px-6 md:px-12">
                  <div className="max-w-3xl mx-auto space-y-10">
                    <div className="text-center">
                      <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block mb-2">Quick Answers</span>
                      <h3 className="font-sans text-2xl md:text-3xl font-semibold text-white tracking-tight">Featured Q&amp;A</h3>
                    </div>
                    
                    <div className="space-y-6">
                      {COMMON_FAQS.slice(0, 4).map((faq, index) => (
                        <div key={`${faq.question}-${index}`} className="bg-[#121212] p-6 rounded-2xl border border-neutral-800 shadow-xs">
                          <strong className="text-sm font-bold text-white font-sans block mb-2">Q: {faq.question}</strong>
                          <p className="text-sm text-neutral-350 leading-relaxed font-sans">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Final Banner */}
                <div className="my-16 px-6 md:px-12">
                  <div className="max-w-7xl mx-auto bg-gradient-to-br from-neutral-900 to-neutral-950 text-white rounded-3xl p-10 md:p-16 text-center shadow-xl relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-radial from-orange-500/20 to-transparent blur-3xl pointer-events-none" />
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400">Ready to Transform Your Casing?</span>
                    <h2 className="font-sans font-light text-2xl md:text-4xl leading-tight max-w-2xl mx-auto mt-4 mb-6">
                      Redefine your living space with our fireplace solutions today.
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <button
                        onClick={() => handleNavigation('services')}
                        className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-orange-700 hover:bg-orange-800 text-white font-sans text-xs font-semibold cursor-pointer transition"
                      >
                        Explore Our Services
                      </button>
                      <button
                        onClick={() => handleNavigation('contact')}
                        className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-sans text-xs font-semibold border border-white/20 cursor-pointer transition"
                      >
                        Talk to an Advisor
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ──── ROUTE: ABOUT US ──── */}
            {activeSection === 'about' && (
              <div id="section-about" className="pt-28 sm:pt-36 pb-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
                    <div className="lg:col-span-6 space-y-6">
                      <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-semibold uppercase tracking-widest font-sans inline-block">
                        Who We Are
                      </span>
                      <h1 className="font-sans font-semibold text-3xl md:text-5xl text-white tracking-tight leading-none">
                        About Flames Fireplace — Our Story
                      </h1>
                      <div className="space-y-4 font-sans text-neutral-400 leading-relaxed text-base">
                        <p>{WHY_CHOOSE_EXTRA.paragraphs[0]}</p>
                        <p>{WHY_CHOOSE_EXTRA.paragraphs[1]}</p>
                        <p>{WHY_CHOOSE_EXTRA.paragraphs[2]}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 max-h-[440px]">
                      <img
                        src="/assets/about.png"
                        alt="Flames Fireplace showroom interior design with luxury bio ethanol fireplace in Dubai"
                        width={600}
                        height={400}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="w-full h-[400px] object-cover"
                      />
                    </div>
                  </div>

                  {/* Core Corporate Values */}
                  <div className="bg-[#121212] rounded-3xl p-8 md:p-14 border border-neutral-800 mb-20">
                    <div className="text-center mb-12">
                      <span className="text-xs font-bold uppercase tracking-widest text-orange-450 block mb-2">Our Mission</span>
                      <h2 className="font-sans text-2xl md:text-3xl font-semibold text-white tracking-tight leading-snug max-w-2xl mx-auto">
                        To make extraordinary fire experiences accessible to everyone—indoors and outdoors—through innovative products, honest pricing, and stellar personal aftercare.
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-neutral-800">
                      <div className="space-y-3">
                        <div className="w-9 h-9 rounded-full bg-orange-500/10 text-orange-450 flex items-center justify-center font-bold text-sm">1</div>
                        <h4 className="font-sans font-semibold text-white text-sm">Quality First</h4>
                        <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                          We only import and manufacture fireplace structures that fulfill our strict specifications for material safety and physical longevity.
                        </p>
                      </div>
                      <div className="space-y-3">
                        <div className="w-9 h-9 rounded-full bg-orange-500/10 text-orange-450 flex items-center justify-center font-bold text-sm">2</div>
                        <h4 className="font-sans font-semibold text-white text-sm">Client Transparency</h4>
                        <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                          Honest dimensional constraints guidance, fair pricing structures, and zero hidden local delivery surcharges.
                        </p>
                      </div>
                      <div className="space-y-3">
                        <div className="w-9 h-9 rounded-full bg-orange-500/10 text-orange-450 flex items-center justify-center font-bold text-sm">3</div>
                        <h4 className="font-sans font-semibold text-white text-sm">Aesthetic Innovation</h4>
                        <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                          Consistently exploring water atomizers and biofuel safety sensors to keep bringing our clients the highest tier flame models on the market.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Commitment banner */}
                  <div className="bg-[#121212] p-8 md:p-12 rounded-3xl border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="max-w-2xl">
                      <h3 className="font-sans text-xl font-semibold text-white">Our Commitment to You</h3>
                      <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                        We are not just a fireplace supplier—we are your long-term partner in shaping spaces. From your first enquiry to years after your purchase, our team is directly available for casing diagrams, remodeling consultations, or clean-out refills.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigation('contact')}
                      className="px-6 py-3.5 rounded-full bg-neutral-900 hover:bg-orange-500 text-white font-sans text-xs font-semibold cursor-pointer transition shrink-0"
                    >
                      Speak with our Founders
                    </button>
                  </div>
                </div>
              </div>
            )}



            {/* ──── ROUTE: DESIGN & INSTALLATION SERVICES ──── */}
            {activeSection === 'services' && (
              <ServicesPage onNavigate={handleNavigation} />
            )}

            {/* ──── ROUTE: OUTDOOR FIRE UNIT CATEGORIES & INSIDE DETAIL PAGES ──── */}
            {activeSection === 'outdoor-gas-fireplace' && (
              <OutdoorGasFireplacePage onNavigate={handleNavigation} />
            )}
            {(activeSection === 'home-automated-gas-fireplace' ||
              activeSection === 'high-low-flame-gas-fireplace' ||
              activeSection === 'remote-operated-gas-fireplace' ||
              activeSection === 'push-and-turn-gas-fireplace' ||
              activeSection === 'key-valve-gas-fireplace' ||
              activeSection === 'manual-ethanol-fireplace' ||
              activeSection === 'ethanol-fuel-fireplace' ||
              activeSection === 'outdoor-woodfire-place' ||
              activeSection === 'lava-rock-media' ||
              activeSection === 'pebbles-media' ||
              activeSection === 'artificial-stone-media' ||
              activeSection === 'concrete-fire-pot' ||
              activeSection === 'metal-powder-coated-pot' ||
              activeSection === 'grc-fire-bowls' ||
              activeSection === 'customized-fire-tables-general') && (
              <OutdoorFireUnitDetailPage variantId={activeSection} onNavigate={handleNavigation} />
            )}
            {activeSection === 'ethanol-fireplace' && (
              <EthanolFireplaceHubPage onNavigate={handleNavigation} />
            )}
            {activeSection === 'wood-fireplace' && (
              <WoodFireplaceHubPage onNavigate={handleNavigation} />
            )}
            {activeSection === 'rocks-media' && (
              <RocksMediaHubPage onNavigate={handleNavigation} />
            )}
            {activeSection === 'fire-pot-tables' && (
              <FirePotTablesHubPage onNavigate={handleNavigation} />
            )}
            {(activeSection === 'custom-fire-tables' || activeSection === 'custom-fire-table' || activeSection === 'custom-fire-table-with-fire-unit') && (
              <CustomFireTableWithUnitPage onNavigate={handleNavigation} />
            )}
            {activeSection === 'artificial-3d-fireplace' && (
              <Artificial3DFireplacePage onNavigate={handleNavigation} />
            )}

            {/* ──── ROUTE: PROJECT PORTFOLIO ──── */}
            {activeSection === 'portfolio' && (
              <PortfolioPage />
            )}

            {/* ──── ROUTE: GENERAL FAQ PAGE ──── */}
            {activeSection === 'faq' && (
              <div id="section-faq" className="min-h-screen bg-[#0b0b0b] text-neutral-350 pb-28 selection:bg-orange-500 selection:text-white">
                <div className="max-w-4xl mx-auto pt-28 sm:pt-36 px-6 md:px-12">
                  <div className="text-center mb-12">
                    <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-semibold uppercase tracking-widest font-sans inline-block">
                      Common Questions
                    </span>
                    <h1 className="font-sans font-semibold text-3xl md:text-5xl text-white tracking-tight mt-4 mb-3">
                      Flames Fireplace FAQs — Best Fireplace in Dubai Guide
                    </h1>
                    <p className="font-sans text-sm text-neutral-400 leading-relaxed max-w-2xl mx-auto">
                      Review direct answers to practical queries regarding safety rules, bio-ethanol liquid pure fuels, power draws, and custom architectural frame sizing.
                    </p>
                  </div>

                  {/* Search and Category Toggle controls */}
                  <div className="bg-[#121212] p-4 rounded-3xl border border-neutral-800 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
                    
                    {/* Live search input */}
                    <div className="relative w-full md:w-80">
                      <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                      <input
                        id="faq-search-input"
                        type="text"
                        placeholder="Search questions or terms..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-[#161616] pl-10 pr-4 py-3 rounded-2xl border border-neutral-800 text-xs font-sans focus:outline-none focus:border-orange-500 text-white"
                      />
                    </div>

                    {/* Filter categories tabs */}
                    <div className="flex gap-1.5 flex-wrap">
                      {(['all', 'general', 'safety', 'fuel'] as const).map((cat) => (
                        <button
                          key={cat}
                          id={`faq-cat-${cat}`}
                          onClick={() => setFaqCategory(cat)}
                          className={`px-4 py-2 rounded-xl text-[10px] font-semibold uppercase tracking-wider font-sans cursor-pointer transition-all ${
                            faqCategory === cat
                              ? 'bg-orange-600 text-white shadow-sm'
                              : 'bg-[#161616] hover:bg-neutral-800 hover:text-white text-neutral-400 border border-neutral-800'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Accordion FAQ Block */}
                  {filteredFaqs.length > 0 ? (
                    <div className="space-y-4">
                      {filteredFaqs.map((faq, idx) => (
                        <FAQAccordionItem
                          key={idx}
                          idx={idx}
                          faq={faq}
                          defaultOpen={idx === 0}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-neutral-450 text-sm font-sans italic p-8 bg-[#121212] rounded-xl border border-neutral-800">
                      No matching questions found around &ldquo;{searchQuery}&rdquo;. Try another generic phrase.
                    </div>
                  )}

                  {/* Standards disclosure section */}
                  <div className="mt-12 p-5 rounded-2xl bg-orange-950/20 border border-orange-900/40 text-[11px] text-neutral-450 font-sans leading-relaxed flex gap-3">
                    <Info className="w-5 h-5 text-orange-500 shrink-0" />
                    <p>
                      <strong>Certification &amp; Compliance Statement:</strong> Our fireplace cassettes and bio-ethanol burners are manufactured in compliance with strict international CE, UL, and AHD safety standards, ensuring optimal security and eco-friendly operations for luxury residential and commercial installations across the UAE.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ──── ROUTE: CONTACT Enquiries ──── */}
            {activeSection === 'contact' && <ContactPage />}

            {/* ──── ROUTE: BEST FIREPLACE LANDING (SEO) ──── */}
            {activeSection === 'best-fireplace-dubai' && (
              <BestFireplaceLanding onNavigate={handleNavigation} />
            )}

            {/* ──── ROUTE: BIO ETHANOL FIREPLACE ──── */}
            {activeSection === 'bio-ethanol-fireplace' && (
              <BioEthanolFireplacePage onNavigate={handleNavigation} />
            )}

            {/* ──── ROUTE: WATER VAPOR FIREPLACE ──── */}
            {activeSection === 'water-vapor-fireplace' && (
              <WaterVaporFireplacePage onNavigate={handleNavigation} />
            )}

            {/* ──── ROUTE: OUTDOOR FIREPLACE ──── */}
            {activeSection === 'outdoor-fireplace' && (
              <OutdoorFireplacePage onNavigate={handleNavigation} />
            )}

            {/* ──── ROUTE: INDOOR FIREPLACE ──── */}
            {activeSection === 'indoor-fireplace' && (
              <IndoorFireplacePage onNavigate={handleNavigation} />
            )}

            {/* ──── ROUTE: FIRE PIT ──── */}
            {activeSection === 'fire-pit' && (
              <FirePitPage onNavigate={handleNavigation} />
            )}

            {/* ──── ROUTE: FIRE TABLE ──── */}
            {activeSection === 'fire-table' && (
              <FireTablePage onNavigate={handleNavigation} />
            )}

            {/* ──── ROUTE: OUTDOOR KITCHEN ──── */}
            {activeSection === 'outdoor-kitchen' && (
              <OutdoorKitchenPage onNavigate={handleNavigation} />
            )}

            {/* ──── ROUTE: BUILT-IN BBQ ──── */}
            {activeSection === 'built-in-bbq' && (
              <BuiltInBbqPage onNavigate={handleNavigation} />
            )}

            {/* ──── ROUTE: FIREPLACE DUBAI ──── */}
            {activeSection === 'fireplace-dubai' && (
              <FireplaceDubaiPage onNavigate={handleNavigation} />
            )}

            {/* ──── ROUTE: ETHANOL BURNER ──── */}
            {activeSection === 'ethanol-burner' && (
              <EthanolBurnerPage onNavigate={handleNavigation} />
            )}

            {/* ──── ROUTE: BLOG / ARTICLES ──── */}
            {activeSection === 'blog' && (
              <BlogPage 
                onNavigateContact={() => handleNavigation('contact')} 
                onNavigate={handleNavigation}
                selectedArticleId={selectedArticleId}
                onSelectArticle={handleSelectArticle}
              />
            )}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Global structural brand footer */}
      <Footer onNavigate={handleNavigation} />

      {/* 4. Floating Action Group (Scroll to Top & Sticky WhatsApp) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              id="scroll-to-top-btn"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              title="Scroll to top"
              className="pointer-events-auto p-3.5 rounded-full bg-[#161616]/95 hover:bg-orange-500 text-neutral-300 hover:text-white border border-neutral-700/80 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center group"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Sticky WhatsApp Assistance Button */}
        <a
          id="floating-whatsapp-btn"
          href="https://wa.me/971542112891"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open WhatsApp chat"
          className="pointer-events-auto group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-[1.03] cursor-pointer font-sans"
          title="WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-5 h-5 shrink-0 select-none">
            <defs>
              <linearGradient id="b-wa" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#57d163"/>
                <stop offset="1" stopColor="#23b33a"/>
              </linearGradient>
              <filter id="a-wa" width="1.115" height="1.114" x="-.057" y="-.057" colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation="3.531"/>
              </filter>
            </defs>
            <path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a-wa)"/>
            <path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"/>
            <path fill="url(#b-wa)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"/>
            <path fill="url(#b-wa)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"/>
            <path fill="#fff" fillRule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"/>
          </svg>
          <span className="text-xs font-bold leading-none">WhatsApp</span>
        </a>
      </div>

    </div>
  );
}

interface FAQAccordionItemProps {
  key?: any;
  idx: number;
  faq: FAQItem;
  defaultOpen: boolean;
}

function FAQAccordionItem({ idx, faq, defaultOpen }: FAQAccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="bg-[#121212]/50 rounded-2xl border border-neutral-800 overflow-hidden"
    >
      <button
        id={`general-faq-toggle-${idx}`}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex justify-between items-center font-sans font-semibold text-white text-sm md:text-base hover:text-orange-400 transition-colors cursor-pointer"
      >
        <span>{faq.question}</span>
        <div className="w-5 h-5 rounded-full bg-[#161616] flex items-center justify-center border border-neutral-850 text-neutral-450 transform transition-transform">
          <span className="text-xs">{isOpen ? '−' : '+'}</span>
        </div>
      </button>

      {isOpen && (
        <div className="p-6 pt-0 border-t border-neutral-800 max-w-none prose font-sans text-xs md:text-sm text-neutral-350 leading-relaxed">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

