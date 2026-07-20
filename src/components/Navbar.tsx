/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Menu, X, Flame } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  activeProjectId: string | null;
  setCurrentPage: (page: PageId) => void;
  resetProject: () => void;
}

export default function Navbar({
  currentPage,
  activeProjectId,
  setCurrentPage,
  resetProject
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: PageId }[] = [
    { label: 'HOME', id: 'home' },
    { label: 'SERVICES', id: 'services' },
    { label: 'WORKS', id: 'work' },
    { label: 'ABOUT', id: 'about' },
  ];

  const handleNavClick = (id: PageId) => {
    setCurrentPage(id);
    resetProject();
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // If we are on one of our cinematic pages and not scrolled, keep header transparent with light text for cinematic overlay.
  // Otherwise, use white background with dark text.
  const isHomeOverlay = (currentPage === 'home' || currentPage === 'work' || currentPage === 'services' || currentPage === 'about' || activeProjectId) && !isScrolled && !mobileMenuOpen;

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomeOverlay
          ? 'bg-gradient-to-b from-black/60 to-transparent text-white py-6'
          : 'bg-white/95 backdrop-blur-md shadow-sm text-neutral-900 py-4 border-b border-neutral-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="navbar-brand-logo"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 sm:gap-3.5 group focus:outline-none text-left max-w-[75%] sm:max-w-none"
        >
          <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <svg
              className={`w-7 h-7 sm:w-9 h-9 transition-colors duration-300 ${
                isHomeOverlay ? 'text-[#e5c5a0]' : 'text-[#B89A7A]'
              }`}
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <rect x="25" y="25" width="50" height="50" transform="rotate(0 50 50)" />
              <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
              <rect x="32" y="32" width="36" height="36" transform="rotate(0 50 50)" strokeWidth="1.5" />
              <rect x="32" y="32" width="36" height="36" transform="rotate(45 50 50)" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="10" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="flex flex-col min-w-0">
            <div className={`font-sans font-medium tracking-[0.12em] sm:tracking-[0.18em] text-xs sm:text-base md:text-[17px] leading-tight truncate ${
              isHomeOverlay ? 'text-white' : 'text-neutral-900'
            }`}>
              GRILLS &amp; FLAMES
            </div>
            <div className={`text-[7px] sm:text-[8px] md:text-[9px] tracking-[0.2em] sm:tracking-[0.28em] font-bold mt-0.5 leading-none truncate ${
              isHomeOverlay ? 'text-neutral-300' : 'text-[#B89A7A]'
            }`}>
              OUTDOOR &amp; INDOOR LUXURY
            </div>
          </div>
        </button>

        {/* Desktop Nav List */}
        <div className="hidden lg:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => {
            const isActive = currentPage === item.id && !activeProjectId;
            return (
              <button
                id={`nav-item-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans text-xs tracking-[0.2em] font-semibold transition-all duration-200 relative py-1 focus:outline-none ${
                  isActive
                    ? isHomeOverlay
                      ? 'text-white'
                      : 'text-[#B89A7A] font-bold'
                    : isHomeOverlay
                      ? 'text-white/85 hover:text-white'
                      : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    id={`nav-active-line-${item.id}`}
                    className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                      isHomeOverlay ? 'bg-white' : 'bg-[#B89A7A]'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Desktop Phone / Consultation Quick CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            id="nav-consultation-cta"
            onClick={() => handleNavClick('contact')}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 border ${
              isHomeOverlay
                ? 'border-white/30 text-white hover:bg-white hover:text-neutral-900'
                : 'border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white'
            }`}
          >
            LET'S TALK
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-100 shadow-xl py-6 px-6 animate-fadeIn"
        >
          <div className="flex flex-col gap-5">
            {navItems.map((item) => {
              const isActive = currentPage === item.id && !activeProjectId;
              return (
                <button
                  id={`mobile-nav-item-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left font-sans text-xs tracking-[0.2em] font-semibold py-2 border-b border-neutral-50 ${
                    isActive ? 'text-[#B89A7A] pl-2 border-[#B89A7A]/30' : 'text-neutral-700'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              id="mobile-nav-consultation-cta"
              onClick={() => handleNavClick('contact')}
              className="mt-2 w-full text-center py-3 bg-neutral-900 text-white text-xs font-semibold tracking-widest rounded-full hover:bg-[#B89A7A] transition-colors"
            >
              LET'S TALK
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
