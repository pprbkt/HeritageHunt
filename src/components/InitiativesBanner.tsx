import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Crown } from 'lucide-react';
import { royalAudio } from '../utils/audioSynthesizer';

export const InitiativesBanner: React.FC<{ onLearnMore: () => void }> = ({ onLearnMore }) => {
  return (
    <section className="relative h-[65vh] min-h-[500px] w-full overflow-hidden bg-black flex items-center justify-end">
      {/* Full-bleed background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/assets/images/landmarks/site_amba_vilas_palace.jpg"
          alt="Mysuru Palace Grand Corridor"
          className="w-full h-full object-cover filter brightness-[0.75]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/80" />
      </div>

      {/* Right Floating Card (00:14 - 00:15 in ROM video) */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 sm:p-12 max-w-lg shadow-2xl border-l-4 border-black"
        >
          <div className="flex items-center gap-2 mb-2 text-rom-gray">
            <Crown className="w-4 h-4 text-rom-gold" />
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] uppercase">
              ROYAL PRESERVATION INITIATIVE
            </span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-5xl text-black tracking-tight leading-none mb-4">
            WADIYAR DYNASTY & HERITAGE CONSERVATION
          </h2>

          <p className="text-xs sm:text-sm text-rom-gray font-sans leading-relaxed mb-8">
            Explore conservation projects, digital palm-leaf manuscript archives at the Oriental Research Institute, and community restoration programs safeguarding Mysuru's living cultural legacy for future generations.
          </p>

          <button
            onClick={() => {
              royalAudio.playTempleChime(750);
              onLearnMore();
            }}
            className="px-8 py-3.5 bg-black hover:bg-rom-gold text-white font-sans font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
