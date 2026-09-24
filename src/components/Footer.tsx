import React from 'react';
import { MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-mysuru-border pt-16 pb-12 text-mysuru-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Row (Luxury Places Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-mysuru-borderLight">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-mysuru-border bg-mysuru-sand flex items-center justify-center text-mysuru-charcoal font-serif font-bold text-base">
                H
              </div>
              <div>
                <span className="font-cinzel font-bold text-lg tracking-[0.2em] text-mysuru-charcoal block">
                  HERITAGE HUNT
                </span>
                <span className="text-[9px] font-sans font-semibold tracking-[0.2em] text-mysuru-muted uppercase block">
                  MYSURU • KARNATAKA • INDIA
                </span>
              </div>
            </div>

            <p className="font-serif text-base text-mysuru-gold italic">
              Discover. Explore. Experience.
            </p>

            <p className="text-xs text-mysuru-muted font-sans leading-relaxed max-w-sm font-light">
              Heritage Hunt is a dedicated digital heritage tourism platform exclusively for Mysuru City, celebrating its royal palaces, sacred guardian hills, artisan traditions, and living culture.
            </p>

            <div className="flex items-center gap-2 text-xs text-mysuru-muted">
              <MapPin className="w-3.5 h-3.5 text-mysuru-gold" />
              <span>Cultural Heritage Corridor, Mysuru, Karnataka 570001</span>
            </div>
          </div>

          {/* Col 1: Discover */}
          <div className="space-y-3">
            <h4 className="font-sans text-[11px] font-bold text-mysuru-charcoal tracking-[0.18em] uppercase">
              Discover
            </h4>
            <ul className="space-y-2 text-xs text-mysuru-muted font-sans">
              <li><a href="#heritage-sites" className="hover:text-mysuru-charcoal transition-colors">Heritage Sites (8)</a></li>
              <li><a href="#experiences" className="hover:text-mysuru-charcoal transition-colors">Curated Tours (5)</a></li>
              <li><a href="#dasara-special" className="hover:text-mysuru-charcoal transition-colors">Mysuru Dasara 2026</a></li>
              <li><a href="#interactive-map" className="hover:text-mysuru-charcoal transition-colors">Interactive City Map</a></li>
              <li><a href="#discover" className="hover:text-mysuru-charcoal transition-colors">Wadiyar Dynasty History</a></li>
            </ul>
          </div>

          {/* Col 2: Plan */}
          <div className="space-y-3">
            <h4 className="font-sans text-[11px] font-bold text-mysuru-charcoal tracking-[0.18em] uppercase">
              Plan
            </h4>
            <ul className="space-y-2 text-xs text-mysuru-muted font-sans">
              <li><a href="#itinerary-planner" className="hover:text-mysuru-charcoal transition-colors">Day Trip Itineraries</a></li>
              <li><a href="#heritage-sites" className="hover:text-mysuru-charcoal transition-colors">Saved Favorites</a></li>
              <li><a href="#experiences" className="hover:text-mysuru-charcoal transition-colors">Experience Bookings</a></li>
              <li><a href="#discover" className="hover:text-mysuru-charcoal transition-colors">Personalized Recommendations</a></li>
              <li><a href="#interactive-map" className="hover:text-mysuru-charcoal transition-colors">Distance & Route Engine</a></li>
            </ul>
          </div>

          {/* Col 3: Platform */}
          <div className="space-y-3">
            <h4 className="font-sans text-[11px] font-bold text-mysuru-charcoal tracking-[0.18em] uppercase">
              Platform & Legal
            </h4>
            <ul className="space-y-2 text-xs text-mysuru-muted font-sans">
              <li><a href="#" className="hover:text-mysuru-charcoal transition-colors">About Heritage Hunt</a></li>
              <li><a href="#" className="hover:text-mysuru-charcoal transition-colors">Contact Heritage Desk</a></li>
              <li><a href="#" className="hover:text-mysuru-charcoal transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-mysuru-charcoal transition-colors">Terms of Tourism Guide</a></li>
              <li><a href="#" className="hover:text-mysuru-charcoal transition-colors">Karnataka Tourism Alignment</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mysuru-muted font-sans">
          <div>
            © 2026 Heritage Hunt. All rights reserved. Dedicated exclusively to Mysuru City, Karnataka.
          </div>
          <div className="flex items-center gap-1 text-[11px] text-mysuru-gold font-sans font-semibold">
            Mysuru: The Cultural Capital of Karnataka ❤️
          </div>
        </div>
      </div>
    </footer>
  );
};
