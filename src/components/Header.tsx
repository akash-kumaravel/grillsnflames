import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveSection } from '../types';

interface HeaderProps {
  activeSection: ActiveSection;
  onNavigate: (section: ActiveSection) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; value: ActiveSection }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About Us', value: 'about' },
    { label: 'Products', value: 'services' },
    { label: 'Our Works', value: 'portfolio' },
    { label: 'Blog', value: 'blog' },
    { label: 'Contact Us', value: 'contact' },
  ];

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111]/95 backdrop-blur-md border-b border-neutral-800/80 py-2.5 sm:py-3 shadow-xs'
          : 'bg-[#111]/80 backdrop-blur-xs py-3.5 sm:py-5 border-b border-neutral-800/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
        {/* Brand Logo */}
        <button
          id="logo-btn"
          onClick={() => {
            onNavigate('home');
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-2 group cursor-pointer z-10"
        >
          <img
            src="/assets/flames%20logo.svg"
            alt="Flames Fireplace logo"
            width={150}
            height={28}
            className="h-6 sm:h-7 w-auto object-contain"
          />
        </button>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => {
            const isActive = item.value === activeSection;

            return (
              <button
                key={item.value}
                id={`nav-${item.value}`}
                onClick={() => onNavigate(item.value)}
                className={`font-sans text-sm font-medium transition-all duration-300 relative py-1 cursor-pointer ${
                  isActive
                    ? 'text-orange-500'
                    : 'text-neutral-400 hover:text-neutral-100'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Control */}
        <button
          id="mobile-menu-toggle"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full text-neutral-400 hover:bg-neutral-800 transition-colors cursor-pointer z-10"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer with Backdrop and animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop behind mobile drawer */}
            <motion.div
              key="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-neutral-900/35 backdrop-blur-xs z-40"
            />

            {/* Mobile Drawer Panel */}
            <motion.div
              key="mobile-menu-panel"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              id="mobile-drawer"
              className="lg:hidden absolute top-full left-0 right-0 bg-[#161616] border-t border-neutral-800 border-b border-neutral-800 shadow-xl z-50 py-3.5 px-4 flex flex-col gap-1.5 max-h-[calc(100vh-120px)] overflow-y-auto"
            >
              <div className="space-y-1.5 p-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.value;
                  return (
                    <button
                      key={item.value}
                      id={`mobile-nav-${item.value}`}
                      onClick={() => {
                        onNavigate(item.value);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left font-sans text-xs font-medium py-2.5 px-3 rounded-lg flex items-center justify-between transition-all duration-150 cursor-pointer ${
                        isActive
                          ? 'bg-orange-500/10 text-orange-400 font-semibold border-l-2 border-orange-500 pl-2'
                          : 'text-neutral-400 hover:bg-neutral-800/50 hover:text-white active:bg-neutral-800'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className={`w-3 h-3 transition-transform duration-150 ${isActive ? 'text-orange-500 scale-105' : 'text-neutral-400'}`} />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
