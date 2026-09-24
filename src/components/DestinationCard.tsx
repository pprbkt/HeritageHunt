import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, MapPin, Headphones, ArrowRight, Bookmark } from 'lucide-react';
import { HeritageSite } from '../types';
import { royalAudio } from '../utils/audioSynthesizer';

interface DestinationCardProps {
  site: HeritageSite;
  onExplore: (site: HeritageSite) => void;
  isSaved?: boolean;
  onToggleSave?: (siteId: string) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  site,
  onExplore,
  isSaved = false,
  onToggleSave,
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-2xl overflow-hidden border border-mysuru-border hover:border-mysuru-gold transition-all duration-400 hover:shadow-luxury-hover flex flex-col h-full"
      data-cursor="explore"
      data-cursor-text="VIEW"
    >
      {/* Top Image Frame with Smooth Scale */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-mysuru-sand">
        <img
          src={site.image}
          alt={site.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider bg-white/95 text-mysuru-charcoal border border-mysuru-border shadow-sm">
            {site.categoryLabel}
          </span>

          <div className="flex items-center gap-1.5">
            {site.audioGuideAvailable && (
              <span className="p-1.5 rounded-full bg-white/90 text-mysuru-gold border border-mysuru-border shadow-sm" title="Audio Guide Available">
                <Headphones className="w-3.5 h-3.5" />
              </span>
            )}
            
            {onToggleSave && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  royalAudio.playTempleChime(950);
                  onToggleSave(site.id);
                }}
                className={`p-1.5 rounded-full border shadow-sm transition-all ${
                  isSaved
                    ? 'bg-mysuru-gold text-white border-mysuru-gold'
                    : 'bg-white/90 text-mysuru-muted hover:text-mysuru-charcoal border-mysuru-border'
                }`}
                title={isSaved ? 'Saved to Favorites' : 'Save Landmark'}
              >
                <Bookmark className="w-3.5 h-3.5 fill-current" />
              </button>
            )}
          </div>
        </div>

        {/* Bottom Era & Rating Pill (Luxury Places Spec Row) */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="text-[10px] font-sans font-semibold text-mysuru-charcoal px-2.5 py-0.5 rounded-md bg-white/95 border border-mysuru-border shadow-sm">
            {site.era}
          </span>

          <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/95 border border-mysuru-border text-[11px] text-mysuru-gold font-bold shadow-sm">
            <Star className="w-3 h-3 fill-mysuru-gold text-mysuru-gold" />
            <span>{site.rating}</span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Landmark Name */}
          <div className="mb-2">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-mysuru-charcoal group-hover:text-mysuru-gold transition-colors leading-snug">
              {site.name}
            </h3>
          </div>

          {/* Short Tagline */}
          <p className="text-xs sm:text-sm text-mysuru-muted line-clamp-2 leading-relaxed font-sans font-light mb-4">
            {site.tagline}
          </p>

          {/* Key Metric Specs (Luxury Places Metadata Row) */}
          <div className="grid grid-cols-2 gap-2 py-3 border-t border-b border-mysuru-borderLight text-xs text-mysuru-muted font-sans mb-4">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-mysuru-gold" />
              <span>{site.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-mysuru-gold" />
              <span className="truncate">{site.distanceFromCenterKm === 0 ? 'City Center' : `${site.distanceFromCenterKm} km away`}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => {
            royalAudio.playTempleChime(880);
            onExplore(site);
          }}
          className="w-full py-2.5 px-4 rounded-xl border border-mysuru-charcoal/20 bg-mysuru-sand hover:bg-mysuru-charcoal text-mysuru-charcoal hover:text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group/btn"
        >
          <span>Explore Landmark</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
