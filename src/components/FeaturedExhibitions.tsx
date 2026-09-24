import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HeritageSite } from '../types';
import { royalAudio } from '../utils/audioSynthesizer';

interface FeaturedExhibitionsProps {
  sites: HeritageSite[];
  onSelectSite: (site: HeritageSite) => void;
  onViewAll: () => void;
}

export const FeaturedExhibitions: React.FC<FeaturedExhibitionsProps> = ({
  sites,
  onSelectSite,
  onViewAll,
}) => {
  // Top 4 feature highlights for ROM-style alternating split rows
  const featured = [
    {
      site: sites[0], // Mysuru Palace
      eyebrow: 'FEATURED HERITAGE MONUMENT',
      title: 'MYSURU PALACE (AMBA VILAS)',
      subtitle: 'The Royal Wadiyar Residence & Golden Throne',
      validity: 'Open Daily • 10:00 to 17:30',
      image: '/assets/images/landmarks/site_amba_vilas_palace.jpg',
    },
    {
      site: sites[1], // Chamundi Hill
      eyebrow: 'FEATURED SACRED LANDMARK',
      title: 'CHAMUNDI HILL & SHRINE',
      subtitle: '1,008 Sacred Steps & 16ft Monolithic Nandi',
      validity: 'Open Daily • Sunrise to Sunset',
      image: '/assets/images/landmarks/site_chamundi_hill_temple.jpg',
    },
    {
      site: sites[3], // Devaraja Market
      eyebrow: 'FEATURED LIVING HERITAGE',
      title: 'DEVARAJA LIVING MARKET',
      subtitle: '130 Years of Jasmine, Attar & Sandalwood',
      validity: 'Established 1886 CE • Sayyaji Rao Corridor',
      image: '/assets/images/landmarks/site_devaraja_market.jpg',
    },
    {
      site: sites[4], // St. Philomena's
      eyebrow: 'FEATURED ARCHITECTURAL WONDER',
      title: "ST. PHILOMENA'S CATHEDRAL",
      subtitle: 'Neo-Gothic 175-Foot Twin Spires & Sacred Crypt',
      validity: 'Consecrated 1936 CE • Nalwadi Krishnaraja Patronage',
      image: '/assets/images/landmarks/site_st_philomena_cathedral.jpg',
    },
  ];

  return (
    <section id="featured-destinations" className="bg-white py-16 sm:py-24 border-b border-rom-border">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & View All Button (ROM Style) */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-black">
          <h2 className="font-sans text-xl sm:text-2xl font-bold text-black tracking-tight uppercase">
            Featured Heritage Destinations
          </h2>
          <button
            onClick={onViewAll}
            className="px-5 py-1.5 rounded-full border border-black hover:bg-black hover:text-white font-sans font-bold text-xs uppercase tracking-wider transition-all"
          >
            VIEW ALL
          </button>
        </div>

        {/* ROM Alternating Split Rows (00:06 - 00:09 in video) */}
        <div className="divide-y divide-rom-border">
          {featured.map((item, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <motion.div
                key={item.site.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onClick={() => {
                  royalAudio.playTempleChime(920);
                  onSelectSite(item.site);
                }}
                className={`group py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center cursor-pointer transition-colors hover:bg-rom-lightGray/40 px-4 -mx-4`}
                data-cursor="explore"
                data-cursor-text="EXPLORE"
              >
                {/* Text Block */}
                <div className={`flex flex-col justify-between h-full ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-rom-gray uppercase block mb-3">
                      {item.eyebrow}
                    </span>
                    <h3 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-black tracking-tight leading-[0.92] group-hover:text-rom-gold transition-colors mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base font-sans text-black/80 font-medium mb-2">
                      {item.subtitle}
                    </p>
                    <span className="text-xs text-rom-gray font-mono block">
                      {item.validity}
                    </span>
                  </div>

                  {/* Large ROM Action Arrow */}
                  <div className="pt-8 flex items-center gap-3">
                    <span className="w-12 h-12 rounded-full border border-black group-hover:bg-black group-hover:text-white flex items-center justify-center transition-all">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="font-sans font-bold text-xs uppercase tracking-wider text-black group-hover:text-rom-gold transition-colors">
                      Discover Details & History →
                    </span>
                  </div>
                </div>

                {/* Image Block */}
                <div className={`relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-rom-lightGray ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
