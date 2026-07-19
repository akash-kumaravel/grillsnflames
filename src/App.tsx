/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { PageId } from './types';
import { PROJECTS } from './data';
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

  useEffect(() => {
    let title = "Grills & Flames | Luxury Outdoor Kitchens, Pergolas & Fire Features Dubai";
    let desc = "Discover Grills & Flames, Dubai's premier designer of custom luxury outdoor kitchens, high-end bioclimatic pergolas, and architectural fire features.";

    if (activeProjectId) {
      const proj = PROJECTS.find((p) => p.id === activeProjectId);
      if (proj) {
        title = `${proj.title} | Grills & Flames Luxury Outdoor Portfolios`;
        desc = proj.description;
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
  }, [currentPage, activeProjectId]);

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
  }, [currentPage, activeProjectId]);

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
          resetProject={() => setActiveProjectId(null)}
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
            resetProject={() => setActiveProjectId(null)}
          />
        </div>
      )}
    </div>
  );

  function setPageSmoothly(page: PageId) {
    setCurrentPage(page);
    setActiveProjectId(null);
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
