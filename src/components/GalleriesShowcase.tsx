import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HeritageSite } from '../types';
import { royalAudio } from '../utils/audioSynthesizer';

interface GalleriesShowcaseProps {
  sites: HeritageSite[];
  onSelectSite: (site: HeritageSite) => void;
  onViewAll: () => void;
}

export const GalleriesShowcase: React.FC<GalleriesShowcaseProps> = ({
  sites,
  onSelectSite,
  onViewAll,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const galleryList = [
    {
      site: sites[0],
      num: '01',
      label: 'AMBA VILAS DURBAR',
      tag: 'Royal Residence & 1912 Indo-Saracenic Marvel',
      image: '/assets/images/landmarks/site_amba_vilas_palace.jpg',
    },
    {
      site: sites[1],
      num: '02',
      label: 'CHAMUNDESHWARI TEMPLE',
      tag: 'Sacred 3,489 FT Hill Peak & 1659 Nandi Monolith',
      image: '/assets/images/landmarks/site_chamundi_hill_temple.jpg',
    },
    {
      site: sites[2],
      num: '03',
      label: 'JAGANMOHAN ART GALLERY',
      tag: 'Raja Ravi Varma Canvases & Royal Wadiyar Portraits',
      image: '/assets/images/landmarks/site_jaganmohan_art_gallery.jpg',
    },
    {
      site: sites[3],
      num: '04',
      label: 'DEVARAJA LIVING MARKET',
      tag: '130 Years of Jasmine Flowers, Kumkum & Natural Attar',
      image: '/assets/images/landmarks/site_devaraja_market.jpg',
    },
    {
      site: sites[7] || sites[0],
      num: '05',
      label: 'LALITHA MAHAL PALACE',
      tag: 'Pure Italian White Marble & London St. Paul Inspiration',
      image: '/assets/images/landmarks/site_lalitha_mahal_palace.jpg',
    },
  ];

  const current = galleryList[activeIdx];

  return (
    <section className="relative h-[75vh] min-h-[600px] w-full overflow-hidden bg-black flex items-center">
      {/* Background Image Carousel (00:23 - 00:26 in video) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIdx}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={current.image}
            alt={current.label}
            className="w-full h-full object-cover filter brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
        </motion.div>
      </AnimatePresence>

      {/* Main Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left: Active Gallery Info */}
        <div className="max-w-xl text-white">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-amber-300 uppercase block mb-2">
            MYSURU PERMANENT GALLERIES & SITES
          </span>
          <h3 className="font-bebas text-5xl sm:text-7xl text-white tracking-tight leading-none mb-3">
            {current.label}
          </h3>
          <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed mb-6 font-light">
            {current.tag}
          </p>

          <button
            onClick={() => onSelectSite(current.site)}
            className="px-7 py-3 rounded-full bg-white text-black hover:bg-rom-gold hover:text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg"
          >
            <span>Explore {current.label}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right: ROM Stacked Vertical Menu & Giant Slide Number (00:23 - 00:26 in video) */}
        <div className="flex items-center gap-8 text-right">
          <div className="space-y-3 font-bebas text-2xl sm:text-4xl tracking-tight text-white/60">
            {galleryList.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  royalAudio.playTempleChime(700 + idx * 60);
                  setActiveIdx(idx);
                }}
                className={`cursor-pointer transition-all duration-300 block hover:text-white ${
                  activeIdx === idx ? 'text-white border-b-2 border-white pb-1 font-bold' : 'opacity-40 hover:opacity-100'
                }`}
              >
                {item.label}
              </div>
            ))}

            <button
              onClick={onViewAll}
              className="font-sans font-bold text-xs uppercase tracking-widest text-amber-300 hover:text-white pt-4 flex items-center justify-end gap-1.5"
            >
              <span>VIEW ALL SITES</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Giant Slide Number on far right (00:23 in video) */}
          <div className="hidden sm:block font-bebas text-8xl md:text-9xl text-white/20 select-none">
            {current.num}
          </div>
        </div>
      </div>
    </section>
  );
};
