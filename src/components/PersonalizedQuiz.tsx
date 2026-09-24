import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Heart, Camera, Users, Sparkles, ArrowRight, Star } from 'lucide-react';
import { HERITAGE_SITES } from '../data/heritageData';
import { HeritageSite } from '../types';
import { royalAudio } from '../utils/audioSynthesizer';

export const PersonalizedQuiz: React.FC<{ onSelectSite: (site: HeritageSite) => void }> = ({ onSelectSite }) => {
  const [selectedVibe, setSelectedVibe] = useState<'royal' | 'sacred' | 'food_art' | 'family' | 'photo'>('royal');

  const vibes = [
    { id: 'royal', label: 'Royal History', icon: <Crown className="w-4 h-4" /> },
    { id: 'sacred', label: 'Spiritual Seeker', icon: <Heart className="w-4 h-4" /> },
    { id: 'food_art', label: 'Culture & Food', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'family', label: 'Family Day Out', icon: <Users className="w-4 h-4" /> },
    { id: 'photo', label: 'Photography', icon: <Camera className="w-4 h-4" /> },
  ];

  const recommendations: Record<string, HeritageSite[]> = {
    royal: [HERITAGE_SITES[0], HERITAGE_SITES[2], HERITAGE_SITES[7]],
    sacred: [HERITAGE_SITES[1], HERITAGE_SITES[4]],
    food_art: [HERITAGE_SITES[3], HERITAGE_SITES[2]],
    family: [HERITAGE_SITES[5], HERITAGE_SITES[6]],
    photo: [HERITAGE_SITES[0], HERITAGE_SITES[4], HERITAGE_SITES[1]],
  };

  const curatedList = recommendations[selectedVibe] || [HERITAGE_SITES[0], HERITAGE_SITES[1]];

  return (
    <section className="py-24 sm:py-32 bg-mysuru-bg relative overflow-hidden border-b border-mysuru-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-[11px] font-sans font-bold text-mysuru-gold tracking-[0.25em] uppercase mb-2">
            TAILORED DISCOVERY
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-mysuru-charcoal tracking-tight">
            MYSURU, CURATED FOR YOU.
          </h2>
          <p className="font-sans text-sm sm:text-base text-mysuru-muted mt-2">
            Select your personal travel focus to view tailored architectural, sacred, or cultural recommendations.
          </p>
        </div>

        {/* Vibe Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {vibes.map((v) => (
            <button
              key={v.id}
              onClick={() => {
                royalAudio.playTempleChime(850);
                setSelectedVibe(v.id as any);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans font-semibold transition-all duration-300 border shadow-sm ${
                selectedVibe === v.id
                  ? 'bg-mysuru-charcoal border-mysuru-charcoal text-white'
                  : 'bg-white border-mysuru-border text-mysuru-muted hover:text-mysuru-charcoal hover:border-mysuru-charcoal/40'
              }`}
            >
              <span className={selectedVibe === v.id ? 'text-mysuru-gold' : 'text-mysuru-muted'}>{v.icon}</span>
              <span>{v.label}</span>
            </button>
          ))}
        </div>

        {/* Curated Recommendations Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {curatedList.map((site, i) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-5 border border-mysuru-border hover:border-mysuru-gold transition-all duration-400 hover:shadow-luxury flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-mysuru-sand">
                  <img src={site.image} alt={site.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded bg-white/95 text-[10px] text-mysuru-charcoal font-bold shadow-sm border border-mysuru-border">
                    {site.era}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[10px] font-bold text-mysuru-gold uppercase tracking-wider">{site.category.toUpperCase()}</span>
                  <div className="flex items-center text-xs text-mysuru-gold font-bold">
                    <Star className="w-3 h-3 fill-mysuru-gold mr-0.5" />
                    {site.rating}
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-mysuru-charcoal group-hover:text-mysuru-gold transition-colors mb-1">
                  {site.name}
                </h3>
                <p className="text-xs font-sans text-mysuru-muted line-clamp-2 mb-4 font-light">
                  {site.tagline}
                </p>
              </div>

              <button
                onClick={() => {
                  royalAudio.playTempleChime(920);
                  onSelectSite(site);
                }}
                className="w-full py-2.5 rounded-xl bg-mysuru-sand hover:bg-mysuru-charcoal text-mysuru-charcoal hover:text-white text-xs font-sans font-bold flex items-center justify-center gap-1.5 transition-all border border-mysuru-border"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
