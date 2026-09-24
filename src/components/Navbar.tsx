import React, { useState } from 'react';
import { Search, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenPlan: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPlan, onOpenSearch }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-rom-border transition-all">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            data-cursor="explore"
            data-cursor-text="HERITAGE"
          >
            <div className="flex flex-col">
              <span className="font-bebas text-4xl sm:text-5xl tracking-tighter text-black leading-none group-hover:text-rom-gold transition-colors">
                HERITAGE HUNT
              </span>
              <span className="text-[9px] font-mono tracking-[0.25em] font-semibold text-rom-gray uppercase -mt-1">
                MYSURU • KARNATAKA
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Without What's On & Dasara) */}
          <nav className="hidden xl:flex items-center gap-8 text-xs font-sans font-bold tracking-wider text-black uppercase">
            <a href="#plan-your-visit" className="hover:text-rom-gold transition-colors py-1">
              Visit
            </a>
            <a href="#featured-destinations" className="hover:text-rom-gold transition-colors py-1">
              Heritage Sites
            </a>
            <a href="#itinerary-builder" className="hover:text-rom-gold transition-colors py-1">
              Itinerary
            </a>
            <a href="#interactive-map" className="hover:text-rom-gold transition-colors py-1">
              Interactive Map
            </a>
            <a href="#traveler-utilities" className="hover:text-rom-gold transition-colors py-1">
              Converter & Translator
            </a>
          </nav>

          {/* Right Utilities */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 text-xs font-bold text-black uppercase tracking-wider hover:text-rom-gold transition-colors"
            >
              <Search className="w-4 h-4" />
              <span>SEARCH</span>
            </button>

            {/* Action Pill Button */}
            <button
              onClick={onOpenPlan}
              className="px-6 py-2.5 rounded-full bg-black hover:bg-rom-gold text-white font-sans font-bold text-xs tracking-wider uppercase transition-all shadow-sm flex items-center gap-1.5"
              data-cursor="explore"
            >
              <span>Plan Visit</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenPlan}
              className="px-4 py-2 rounded-full bg-black text-white font-sans font-bold text-[11px] tracking-wider uppercase"
            >
              Plan Visit
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg border border-rom-border text-black hover:bg-rom-lightGray"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="xl:hidden bg-white border-b border-rom-border px-6 py-6 shadow-xl space-y-4">
            <nav className="flex flex-col gap-3 font-sans font-bold text-sm uppercase tracking-wider text-black">
              <a href="#plan-your-visit" onClick={() => setMobileOpen(false)} className="py-1 border-b border-rom-lightGray">
                Visit
              </a>
              <a href="#featured-destinations" onClick={() => setMobileOpen(false)} className="py-1 border-b border-rom-lightGray">
                Heritage Sites
              </a>
              <a href="#itinerary-builder" onClick={() => setMobileOpen(false)} className="py-1 border-b border-rom-lightGray">
                Itinerary Planner
              </a>
              <a href="#interactive-map" onClick={() => setMobileOpen(false)} className="py-1 border-b border-rom-lightGray">
                City Map
              </a>
            </nav>
          </div>
        )}
      </header>
    );
  };
