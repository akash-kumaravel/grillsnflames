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
    { label: 'CONTACT', id: 'contact' },
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
          ? 'bg-gradient-to-b from-black/50 to-transparent text-white py-6'
          : 'bg-neutral-950/60 backdrop-blur-md shadow-lg text-white py-4 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="navbar-brand-logo"
          onClick={() => handleNavClick('home')}
          className="flex items-center group focus:outline-none text-left cursor-pointer"
        >
          <img
            src="/assets/logo.png"
            alt="Grills & Flames Logo"
            className="h-9 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 shrink-0"
          />
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
                className={`font-sans text-xs tracking-[0.2em] font-semibold transition-all duration-200 relative py-1 focus:outline-none cursor-pointer ${
                  isActive
                    ? 'text-[#B89A7A] font-bold'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    id={`nav-active-line-${item.id}`}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B89A7A] transition-all duration-300"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 focus:outline-none text-white cursor-pointer"
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
          className="lg:hidden absolute top-full left-0 right-0 bg-neutral-950 border-b border-neutral-800 shadow-2xl py-6 px-6 animate-fadeIn"
        >
          <div className="flex flex-col gap-5">
            {navItems.map((item) => {
              const isActive = currentPage === item.id && !activeProjectId;
              return (
                <button
                  id={`mobile-nav-item-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left font-sans text-xs tracking-[0.2em] font-semibold py-2 border-b border-neutral-900 cursor-pointer ${
                    isActive ? 'text-[#B89A7A] pl-2 border-[#B89A7A]/30' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
