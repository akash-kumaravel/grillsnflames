/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { PageId } from './types';
import { PROJECTS, SERVICES_LIST } from './data';
import { getSeo, SITE_URL } from './seo';
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
      const path = window.location.pathname;
      const segments = path.split('/').filter(Boolean);
      const params = new URLSearchParams(window.location.search);

      let view: PageId = 'home';
      let project: string | null = null;
      let service: string | null = null;

      // Parse pathname segments
      if (segments.length === 1) {
        const seg = segments[0];
        if (['home', 'work', 'services', 'about', 'contact'].includes(seg)) {
          view = seg as PageId;
        }
      } else if (segments.length === 2) {
        const [type, id] = segments;
        if (type === 'project') {
          project = id;
        } else if (type === 'service') {
          service = id;
        }
      } else {
        // Fallback for backwards compatibility with query params (?view=..., ?project=..., ?service=...)
        const viewParam = params.get('view') as PageId | null;
        if (viewParam && ['home', 'work', 'services', 'about', 'contact'].includes(viewParam)) {
          view = viewParam;
        }
        project = params.get('project');
        service = params.get('service');
      }

      if (project && PROJECTS.some(p => p.id === project)) {
        setActiveProjectId(project);
      } else {
        setActiveProjectId(null);
      }

      if (service && SERVICES_LIST.some(s => s.id === service)) {
        setCurrentPage('services');
        setActiveServiceId(service);
      } else {
        setActiveServiceId(null);
        setCurrentPage(view);
      }
    };

    handleUrlChange();

    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  // Sync state changes to browser URL paths
  useEffect(() => {
    let targetPath = '/';
    if (activeProjectId) {
      targetPath = `/project/${activeProjectId}`;
    } else if (activeServiceId) {
      targetPath = `/service/${activeServiceId}`;
    } else if (currentPage !== 'home') {
      targetPath = `/${currentPage}`;
    }

    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
  }, [currentPage, activeProjectId, activeServiceId]);

  const seo = getSeo(currentPage, activeProjectId, activeServiceId);

  useEffect(() => {
    document.title = seo.title;

    const setMeta = (selector: string, content: string) => {
      document.querySelector(selector)?.setAttribute('content', content);
    };
    const canonicalUrl = seo.path === '/' ? SITE_URL : `${SITE_URL}${seo.path}`;

    setMeta('meta[name="description"]', seo.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
    setMeta('meta[property="og:title"]', seo.title);
    setMeta('meta[property="og:description"]', seo.description);
    setMeta('meta[property="og:image"]', seo.image);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[name="twitter:title"]', seo.title);
    setMeta('meta[name="twitter:description"]', seo.description);
    setMeta('meta[name="twitter:image"]', seo.image);
  }, [seo.title, seo.description, seo.path, seo.image]);

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
          {!(currentPage === 'contact' && !activeProjectId && !activeServiceId) && <h1 className="sr-only">{seo.h1}</h1>}
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
