/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PageId } from '../types';
import { Facebook, Instagram, Linkedin, ExternalLink, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
  resetProject: () => void;
}

export default function Footer({ setCurrentPage, resetProject }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page: PageId) => {
    setCurrentPage(page);
    resetProject();
    window.scrollTo(0, 0);
  };

  return (
    <footer
      id="main-app-footer"
      className="bg-[#0c0c0c] text-neutral-400 pt-28 md:pt-36 pb-12 font-sans border-t border-neutral-900 w-full"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Upper Brand Presentation Row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 pb-12 border-b border-neutral-900">
          <div>
            <h3 className="text-2xl font-light tracking-[0.25em] text-white uppercase font-sans">
              Grills <span className="text-[#B89A7A]">&amp;</span> Flames
            </h3>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#B89A7A] mt-2 font-medium">
              Outdoor &amp; Indoor Luxury
            </p>
          </div>
          <p className="max-w-md text-sm text-neutral-500 font-light leading-relaxed">
            Crafting architectural pergolas, customized professional-grade BBQ stations, immersive fire features, and magnificent custom outdoor kitchens across the United Arab Emirates.
          </p>
        </div>

        {/* Core Multi-Column Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-16 pb-16">
          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Navigation
            </h4>
            <div className="flex flex-col gap-3 text-sm font-light">
              <button
                onClick={() => handleNavClick('home')}
                className="text-left hover:text-[#B89A7A] transition-colors duration-300 w-fit flex items-center gap-1 group"
              >
                <span>Home</span>
                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </button>
              <button
                onClick={() => handleNavClick('work')}
                className="text-left hover:text-[#B89A7A] transition-colors duration-300 w-fit flex items-center gap-1 group"
              >
                <span>Featured Work</span>
                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className="text-left hover:text-[#B89A7A] transition-colors duration-300 w-fit flex items-center gap-1 group"
              >
                <span>Services</span>
                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-left hover:text-[#B89A7A] transition-colors duration-300 w-fit flex items-center gap-1 group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </button>
            </div>
          </div>

          {/* Specialties / Expertise */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Our Expertise
            </h4>
            <ul className="flex flex-col gap-3 text-sm font-light text-neutral-400">
              <li className="hover:text-white transition-colors duration-300">Custom Aluminum Pergolas</li>
              <li className="hover:text-white transition-colors duration-300">Custom Built BBQ Stations</li>
              <li className="hover:text-white transition-colors duration-300">Luxury Fire Features &amp; Pits</li>
              <li className="hover:text-white transition-colors duration-300">Premium Outdoor Kitchens</li>
              <li className="hover:text-white transition-colors duration-300">Premium Hardscaping Design</li>
            </ul>
          </div>

          {/* Reach Us (Location & Direct Contacts) */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Contact &amp; Location
            </h4>
            <div className="flex flex-col gap-4 text-sm font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B89A7A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Warehouse #7, 203 Umm Suqeim St<br />
                  Al Quoz Industrial Area 4, Dubai
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+971565532053"
                  className="flex items-center gap-2.5 hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 text-[#B89A7A]" />
                  <span>+971 56 553 2053</span>
                </a>
                <a
                  href="mailto:info@grillsandflames.ae"
                  className="flex items-center gap-2.5 hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 text-[#B89A7A]" />
                  <span>info@grillsandflames.ae</span>
                </a>
              </div>
            </div>
          </div>

          {/* Social Connect */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Follow Our Journey
            </h4>
            <p className="text-xs font-light text-neutral-500 leading-relaxed mb-1">
              Explore our latest masterpieces and behind-the-scenes transformations daily.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/secretgardenslandscaping"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com/SecretGardensLandscaping"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://linkedin.com/company/secret-gardens-llc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
            <a 
              href="https://maps.google.com/?q=Grills+and+Flames+Dubai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#B89A7A] hover:text-white transition-colors font-medium mt-1 w-fit"
            >
              <span>Locate on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Communities Banner */}
        <div className="border-t border-neutral-900 pt-8 pb-4">
          <p className="text-[10px] text-neutral-600 font-light leading-relaxed tracking-wider">
            <span className="font-semibold text-neutral-500 uppercase mr-1">PRESTIGIOUS COMMUNITIES WE SERVE:</span>
            Emirates Hills &bull; Dubai Hills &bull; Palm Jumeirah &bull; Jumeirah Golf Estates &bull; Jumeirah Bay &bull; Jumeirah Islands &bull; MBR City &bull; Downtown Dubai &bull; Al Barari &bull; Saadiyat Island &bull; Yas Island &bull; Nareel Island &bull; Jubail Island &bull; Dubai &bull; Abu Dhabi &bull; Sharjah
          </p>
        </div>

        {/* Copyright & Technical Fineprint */}
        <div className="border-t border-neutral-900/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-neutral-600 font-light">
          <div>
            &copy; {currentYear} Grills and Flames LLC All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => handleNavClick('home')} className="hover:text-[#B89A7A] transition-colors">Home</button>
            <span>&bull;</span>
            <button onClick={() => handleNavClick('work')} className="hover:text-[#B89A7A] transition-colors">Work</button>
            <span>&bull;</span>
            <button onClick={() => handleNavClick('services')} className="hover:text-[#B89A7A] transition-colors">Services</button>
            <span>&bull;</span>
            <button onClick={() => handleNavClick('contact')} className="hover:text-[#B89A7A] transition-colors">Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
