import React from 'react';

export const ROMFooter: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-12 font-sans border-t border-rom-darkBorder">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Links Grid (00:32 - 00:35 in ROM video) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-rom-darkBorder">
          {/* Column 1: Socials & Contact */}
          <div className="space-y-4">
            {/* Social Icons */}
            <div className="flex items-center gap-3 text-sm text-white/80">
              <a href="#" className="hover:text-amber-300">in</a>
              <a href="#" className="hover:text-amber-300">f</a>
              <a href="#" className="hover:text-amber-300">📷</a>
              <a href="#" className="hover:text-amber-300">🎵</a>
              <a href="#" className="hover:text-amber-300">𝕏</a>
            </div>

            <div className="pt-2 space-y-2 text-xs font-bold uppercase tracking-wider">
              <div><a href="#visitor-hours" className="hover:text-amber-300 underline">Contact Us</a></div>
              <div><a href="#" className="hover:text-amber-300 underline">Newsletter Signup</a></div>
              <div className="pt-2">
                <a href="#devaraja-market" className="font-bebas text-xl text-white hover:text-amber-300 tracking-wider">
                  SHOP HERITAGE BOUTIQUE ↗
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: ABOUT HERITAGE HUNT */}
          <div className="space-y-3">
            <h4 className="font-bebas text-xl tracking-wider text-white border-b border-rom-darkBorder pb-1">
              ABOUT HERITAGE HUNT
            </h4>
            <ul className="space-y-1.5 text-xs text-white/70 font-medium">
              <li><a href="#discover" className="hover:text-white">About Heritage Hunt</a></li>
              <li><a href="#" className="hover:text-white">Open Digital Archives</a></li>
              <li><a href="#" className="hover:text-white">Strategic Direction</a></li>
              <li><a href="#" className="hover:text-white">Wadiyar Lineage Archives</a></li>
              <li><a href="#" className="hover:text-white">Karnataka Heritage Trust</a></li>
              <li><a href="#" className="hover:text-white">Accessibility Commitment</a></li>
            </ul>
          </div>

          {/* Column 3: WORK WITH US */}
          <div className="space-y-3">
            <h4 className="font-bebas text-xl tracking-wider text-white border-b border-rom-darkBorder pb-1">
              WORK WITH US
            </h4>
            <ul className="space-y-1.5 text-xs text-white/70 font-medium">
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Internships & Fellowships</a></li>
              <li><a href="#" className="hover:text-white">Youth Historians Cabinet</a></li>
              <li><a href="#" className="hover:text-white">Volunteer Guides</a></li>
            </ul>
          </div>

          {/* Column 4: BUSINESS */}
          <div className="space-y-3">
            <h4 className="font-bebas text-xl tracking-wider text-white border-b border-rom-darkBorder pb-1">
              BUSINESS & TOURS
            </h4>
            <ul className="space-y-1.5 text-xs text-white/70 font-medium">
              <li><a href="#" className="hover:text-white">Publishing & Books</a></li>
              <li><a href="#" className="hover:text-white">Travelling Exhibitions</a></li>
              <li><a href="#" className="hover:text-white">Palace Venue Rentals</a></li>
            </ul>
          </div>

          {/* Column 5: NEWS & PUBLICATIONS */}
          <div className="space-y-3">
            <h4 className="font-bebas text-xl tracking-wider text-white border-b border-rom-darkBorder pb-1">
              NEWS & PUBLICATIONS
            </h4>
            <ul className="space-y-1.5 text-xs text-white/70 font-medium">
              <li><a href="#" className="hover:text-white">Media Centre</a></li>
              <li><a href="#" className="hover:text-white">News Releases</a></li>
              <li><a href="#" className="hover:text-white">Mysuru Heritage Magazine</a></li>
              <li><a href="#" className="hover:text-white">Annual Reports & Policies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Territorial Land Acknowledgment (Exact ROM Layout) */}
        <div className="pt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 text-xs text-white/60 font-sans">
          <div>
            <span className="font-bold text-white block mb-1 uppercase tracking-wider">
              100 Sayyaji Rao Road, Mysuru, Karnataka 570001
            </span>
            <span className="text-[11px] text-white/40 font-mono">
              © 2026 HERITAGE HUNT MYSURU — AN INITIATIVE DEDICATED TO KARNATAKA HERITAGE
            </span>
          </div>

          <div className="text-left lg:text-right space-y-2">
            <p className="text-[11px] text-white/60 leading-relaxed font-light">
              Heritage Hunt acknowledges that Mysuru stands on the ancestral royal lands of the Wadiyar kingdom, the Hoysala dynasty, and the traditional artisan communities who nurtured Mysuru's living cultural legacy.
            </p>
            <div className="flex items-center justify-start lg:justify-end gap-4 text-[11px] font-bold uppercase tracking-wider text-white pt-1">
              <a href="#" className="hover:text-amber-300 underline">PRIVACY POLICY</a>
              <span>•</span>
              <a href="#" className="hover:text-amber-300 underline">TERMS OF USE</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
