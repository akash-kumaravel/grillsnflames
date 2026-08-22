import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { ActiveSection } from '../types';
import { TAGLINE } from '../data';

interface FooterProps {
  onNavigate: (section: ActiveSection) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer
      id="flames-global-footer"
      className="bg-neutral-900 text-neutral-400 font-sans border-t border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        
        {/* Top Segment: Brand logo to social columns split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pb-16 border-b border-neutral-800">
          
          {/* Brand/Slogan Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/assets/flames%20logo.svg"
                alt="Flames Fireplace logo"
                width={150}
                height={24}
                className="h-6 w-auto object-contain"
              />
            </div>
            
            <p className="text-sm font-normal text-neutral-300">
              {TAGLINE}
            </p>
            
            <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">
              Flames Fireplace is the leading supplier of clean, smokeless decorative fire features. Utilizing clean bio-ethanol combustion and eco-friendly designs, we make warmth and ambiance fully accessible.
            </p>
          </div>

          {/* Quick structural catalog links column */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Custom Spaces
            </p>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  id="footer-nav-services"
                  href="/services"
                  onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
                  className="hover:text-white transition cursor-pointer text-orange-400 font-medium"
                >
                  Our Products
                </a>
              </li>
              <li>
                <a
                  id="footer-nav-portfolio"
                  href="/portfolio"
                  onClick={(e) => { e.preventDefault(); onNavigate('portfolio'); }}
                  className="hover:text-white transition cursor-pointer text-orange-400 font-medium"
                >
                  Our Works
                </a>
              </li>
              <li>
                <a
                  id="footer-nav-contact"
                  href="/contact"
                  onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                  className="hover:text-white transition cursor-pointer text-orange-400 font-medium"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Editorial / Info column */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Our Organization
            </p>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  id="footer-nav-about"
                  href="/about"
                  onClick={(e) => { e.preventDefault(); onNavigate('about'); }}
                  className="hover:text-white transition cursor-pointer block"
                >
                  Our Story &amp; Values
                </a>
              </li>
              <li>
                <a
                  id="footer-nav-faq"
                  href="/faq"
                  onClick={(e) => { e.preventDefault(); onNavigate('faq'); }}
                  className="hover:text-white transition cursor-pointer block"
                >
                  FAQs &amp; Buyer Guides
                </a>
              </li>
              <li>
                <a
                  id="footer-nav-blog"
                  href="/blog"
                  onClick={(e) => { e.preventDefault(); onNavigate('blog'); }}
                  className="hover:text-white transition cursor-pointer block"
                >
                  Blog &amp; Articles
                </a>
              </li>
              <li>
                <a
                  id="footer-nav-best-fireplace"
                  href="/best-fireplace-dubai"
                  onClick={(e) => { e.preventDefault(); onNavigate('best-fireplace-dubai'); }}
                  className="hover:text-white transition cursor-pointer text-orange-400 font-semibold block"
                >
                  Best Fireplace in Dubai
                </a>
              </li>
            </ul>
          </div>

          {/* Local UAE NAP details column */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Flames Fireplace Office UAE
            </p>
            
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Office 1420, Primetime Tower, Business Bay, Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a href="tel:+971542112891" className="text-xs font-semibold text-neutral-200 hover:text-orange-400 block leading-tight">
                  +971 54 211 2891
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <span>info@flamesfireplace.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Segment: Corporate Rights and SEO notations */}
        <div className="pt-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-neutral-300">
          
          <div>
            <span>&copy; {new Date().getFullYear()} <a href="https://www.memoinfotech.com/" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white underline">Memo Infotech</a>. All rights reserved.</span>
          </div>

          {/* Schema designations removed from UI (kept in JSON-LD only) */}

        </div>

      </div>
    </footer>
  );
}
