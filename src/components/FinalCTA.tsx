import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { royalAudio } from '../utils/audioSynthesizer';

interface FinalCTAProps {
  onExploreClick: () => void;
  onPlanClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onExploreClick, onPlanClick }) => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[640px] py-28 sm:py-36 flex items-center justify-center overflow-hidden bg-mysuru-bg border-t border-mysuru-border">
      {/* Background Image with Light Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/landmarks/site_amba_vilas_palace.jpg"
          alt="Mysuru Palace"
          className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mysuru-bg via-white/80 to-white/70" />
      </div>

      {/* Center CTA Box */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="text-[11px] font-sans font-bold text-mysuru-gold tracking-[0.25em] uppercase mb-4">
          YOUR ROYAL JOURNEY
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-mysuru-charcoal tracking-tight leading-tight mb-6"
        >
          <span>{t('cta.title1')}</span>{' '}
          <span className="font-serif italic text-mysuru-gold">{t('cta.title2')}</span><br />
          <span>{t('cta.title3')}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-mysuru-muted font-sans max-w-xl mx-auto mb-10 font-light leading-relaxed"
        >
          {t('cta.subtitle')}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <button
            onClick={() => {
              royalAudio.playTempleChime(1046.5);
              onExploreClick();
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-mysuru-charcoal text-white hover:bg-mysuru-gold font-sans font-bold text-xs tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2 group"
          >
            <span>Explore Mysuru</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              royalAudio.playTempleChime(750);
              onPlanClick();
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-mysuru-charcoal/30 bg-white/90 hover:bg-white text-mysuru-charcoal font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-mysuru-gold" />
            <span>Plan Your Visit</span>
          </button>
        </motion.div>

        {/* Final Tagline */}
        <div className="mt-16 pt-8 border-t border-mysuru-border text-center">
          <p className="font-serif text-lg sm:text-xl text-mysuru-charcoal italic font-medium">
            "Mysuru isn't just a place you visit. It's a story you walk through."
          </p>
        </div>
      </div>
    </section>
  );
};
