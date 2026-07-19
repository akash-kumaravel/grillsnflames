/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { PageId } from './types';
import { PROJECTS, SERVICES_LIST } from './data';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ProjectDetail from './components/ProjectDetail';

// Views
import HomeView from './views/HomeView';
import WorkView from './views/WorkView';
import ServicesView from './views/ServicesView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  const activeProject = activeProjectId ? PROJECTS.find((p) => p.id === activeProjectId) : null;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle initial URL load and back/forward browser navigation
  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const viewParam = params.get('view') as PageId | null;
      const projectParam = params.get('project');
      const serviceParam = params.get('service');

      if (projectParam && PROJECTS.some(p => p.id === projectParam)) {
        setActiveProjectId(projectParam);
      } else {
        setActiveProjectId(null);
      }

      if (serviceParam && SERVICES_LIST.some(s => s.id === serviceParam)) {
        setCurrentPage('services');
        setActiveServiceId(serviceParam);
      } else {
        setActiveServiceId(null);
        if (viewParam && ['home', 'work', 'services', 'about', 'contact'].includes(viewParam)) {
          setCurrentPage(viewParam);
        } else if (!projectParam) {
          setCurrentPage('home');
        }
      }
    };

    handleUrlChange();

    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  // Sync state changes to browser URL query parameters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view');
    const projectParam = params.get('project');
    const serviceParam = params.get('service');

    let shouldUpdate = false;
    const newParams = new URLSearchParams();

    if (activeProjectId) {
      if (projectParam !== activeProjectId) {
        newParams.set('project', activeProjectId);
        shouldUpdate = true;
      } else {
        newParams.set('project', activeProjectId);
      }
    } else if (activeServiceId) {
      if (serviceParam !== activeServiceId) {
        newParams.set('service', activeServiceId);
        shouldUpdate = true;
      } else {
        newParams.set('service', activeServiceId);
      }
    } else {
      const targetView = currentPage === 'home' ? null : currentPage;
      if (viewParam !== targetView) {
        if (targetView) {
          newParams.set('view', targetView);
        }
        shouldUpdate = true;
      } else if (targetView) {
        newParams.set('view', targetView);
      }
    }

    if (shouldUpdate) {
      const searchStr = newParams.toString();
      const newUrl = searchStr ? `?${searchStr}` : window.location.pathname;
      window.history.pushState(null, '', newUrl);
    }
  }, [currentPage, activeProjectId, activeServiceId]);

  useEffect(() => {
    let title = "Grills & Flames | Luxury Outdoor Kitchens, Pergolas & Fire Features Dubai";
    let desc = "Discover Grills & Flames, Dubai's premier designer of custom luxury outdoor kitchens, high-end bioclimatic pergolas, and architectural fire features.";

    if (activeProjectId) {
      const proj = PROJECTS.find((p) => p.id === activeProjectId);
      if (proj) {
        title = `${proj.title} | Grills & Flames Luxury Outdoor Portfolios`;
        desc = proj.description;
      }
    } else if (activeServiceId) {
      const service = SERVICES_LIST.find((s) => s.id === activeServiceId);
      if (service) {
        title = `${service.title} Design & Installation | Grills & Flames Dubai`;
        desc = service.longDescription || service.description;
      }
    } else {
      switch (currentPage) {
        case 'home':
          title = "Grills & Flames | Luxury Outdoor Kitchens, Pergolas & Fire Features Dubai";
          desc = "Dubai's premier designer of custom luxury outdoor kitchens, bioclimatic pergolas, premium BBQ stations, and architectural fire features.";
          break;
        case 'work':
          title = "Architectural Portfolios | Grills & Flames Dubai";
          desc = "Explore our selected premium architectural masterpieces. Custom outdoor kitchens, bioclimatic luxury pergolas, and decorative fire features built in Dubai.";
          break;
        case 'services':
          title = "Luxury Outdoor Design Services | Grills & Flames Dubai";
          desc = "Discover our professional design services: custom bioclimatic pergolas, state-of-the-art linear fire pits, fully integrated BBQ stations, and luxury masonry.";
          break;
        case 'about':
          title = "About Grills & Flames | Master outdoor designers in Dubai";
          desc = "Based in Dubai, Grills & Flames merges world-class structural craftsmanship with luxurious architectural designs for elegant al fresco living spaces.";
          break;
        case 'contact':
          title = "Get In Touch | Grills & Flames Dubai";
          desc = "Inquire about our professional outdoor kitchen, luxury fireplace, or motorized pergolas. Connect with our expert landscape design consultants today.";
          break;
      }
    }

    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    }

    // Dynamic Canonical URL Update
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    let canonicalUrl = 'https://grillsandflames.ae';
    if (activeProjectId) {
      canonicalUrl += `/?project=${activeProjectId}`;
    } else if (activeServiceId) {
      canonicalUrl += `/?service=${activeServiceId}`;
    } else if (currentPage !== 'home') {
      canonicalUrl += `/?view=${currentPage}`;
    }

    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    // Dynamic Social Share Tags Update (OG & Twitter)
    const updateMetaTag = (property: string, content: string, isName = false) => {
      const attribute = isName ? 'name' : 'property';
      const element = document.querySelector(`meta[${attribute}="${property}"]`);
      if (element) {
        element.setAttribute('content', content);
      }
    };

    let ogImage = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80';
    if (activeProjectId) {
      const proj = PROJECTS.find((p) => p.id === activeProjectId);
      if (proj && proj.heroImage) {
        ogImage = proj.heroImage;
      }
    } else if (activeServiceId) {
      const service = SERVICES_LIST.find((s) => s.id === activeServiceId);
      if (service && service.image) {
        ogImage = service.image;
      }
    }

    updateMetaTag('og:title', title);
    updateMetaTag('og:description', desc);
    updateMetaTag('og:image', ogImage);
    updateMetaTag('og:url', canonicalUrl);

    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', desc, true);
    updateMetaTag('twitter:image', ogImage, true);
  }, [currentPage, activeProjectId, activeServiceId]);

  useEffect(() => {
    const element = footerRef.current;
    if (!element || currentPage === 'home' || isMobile) {
      setFooterHeight(0);
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const height = entry.borderBoxSize?.[0]?.blockSize ?? entry.contentRect.height;
        setFooterHeight(height);
      }
    });

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [currentPage, activeProjectId, activeServiceId]);

  const resetProjectAndService = () => {
    setActiveProjectId(null);
    setActiveServiceId(null);
  };

  return (
    <div id="app-root-shell" className="min-h-screen bg-neutral-100 text-neutral-900 flex flex-col justify-between selection:bg-[#B89A7A] selection:text-white relative">
      {/* Scrollable upper wrapper to cover the fixed/sticky footer behind it */}
      <div 
        className="relative z-10 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] min-h-screen flex flex-col"
        style={{ marginBottom: (currentPage !== 'home' && !isMobile) ? `${footerHeight}px` : 0 }}
      >
        {/* Absolute Sticky Header */}
        <Navbar
          currentPage={currentPage}
          activeProjectId={activeProjectId}
          setCurrentPage={setPageSmoothly}
          resetProject={resetProjectAndService}
        />

        {/* Main Dynamic View Area */}
        <main id="app-dynamic-content" className="flex-grow relative bg-white">
          {activeProject ? (
            <ProjectDetail
              project={activeProject}
              onBack={() => {
                setActiveProjectId(null);
                window.scrollTo(0, 0);
              }}
              onInquire={() => {
                setCurrentPage('contact');
                setActiveProjectId(null);
                window.scrollTo(0, 0);
              }}
            />
          ) : (
            renderActiveView()
          )}
        </main>
      </div>

      {/* Floating Interactive WhatsApp Widget */}
      <WhatsAppButton />

      {/* Exquisite Scroll Reveal Footer */}
      {currentPage !== 'home' && (
        <div 
          ref={footerRef}
          className={isMobile ? "relative z-20 bg-[#0c0c0c] w-full" : "fixed bottom-0 left-0 w-full z-0 bg-[#0c0c0c]"}
        >
          <Footer
            setCurrentPage={setPageSmoothly}
            resetProject={resetProjectAndService}
          />
        </div>
      )}
    </div>
  );

  function setPageSmoothly(page: PageId) {
    setCurrentPage(page);
    setActiveProjectId(null);
    setActiveServiceId(null);
    window.scrollTo(0, 0);
  }

  function renderActiveView() {
    switch (currentPage) {
      case 'home':
        return (
          <HomeView
            setCurrentPage={setPageSmoothly}
            onProjectSelect={() => {}}
          />
        );
      case 'work':
        return (
          <WorkView
            onProjectSelect={(id) => {
              setActiveProjectId(id);
              window.scrollTo(0, 0);
            }}
          />
        );
      case 'services':
        return (
          <ServicesView
            activeServiceId={activeServiceId}
            setActiveServiceId={setActiveServiceId}
            setCurrentPage={setPageSmoothly}
            onProjectSelect={(id) => {
              setActiveProjectId(id);
              window.scrollTo(0, 0);
            }}
          />
        );
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      default:
        return (
          <HomeView
            setCurrentPage={setPageSmoothly}
            onProjectSelect={() => {}}
          />
        );
    }
  }
}
