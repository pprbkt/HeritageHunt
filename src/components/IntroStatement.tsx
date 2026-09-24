import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const IntroStatement: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="discover" className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-mysuru-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Category Eyebrow */}
        <div className="text-[11px] font-sans font-bold tracking-[0.25em] text-mysuru-gold uppercase mb-6">
          THE MYSURU HERITAGE UNIVERSE
        </div>

        {/* Large Swiss Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-10"
        >
          <span className="font-serif text-3xl sm:text-5xl md:text-6xl text-mysuru-charcoal font-light leading-tight block">
            {t('intro.quote1')}
          </span>
          <span className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold italic text-mysuru-gold block mt-2">
            {t('intro.quote2')}
          </span>
        </motion.div>

        {/* Thin Gold Hairline */}
        <div className="w-16 h-[1.5px] bg-mysuru-gold mx-auto mb-10" />

        {/* Body Paragraph */}
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <p className="font-serif text-xl sm:text-2xl text-mysuru-charcoal leading-relaxed font-normal">
            {t('intro.headline')}
          </p>
          <p className="font-sans text-sm sm:text-base text-mysuru-muted leading-relaxed font-light">
            {t('intro.paragraph')}
          </p>
          <p className="font-serif text-lg sm:text-xl text-mysuru-gold italic pt-2 font-medium">
            "{t('intro.mission')}"
          </p>
        </div>

        {/* 4 Minimal Metric Counters (Luxury Places Style) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto pt-12 border-t border-mysuru-borderLight"
        >
          {[
            { number: '600+', label: 'Years of Royal Wadiyar History' },
            { number: '100K', label: 'Illuminated Palace Bulbs' },
            { number: '1,008', label: 'Chamundi Hill Sacred Steps' },
            { number: '130+', label: 'Years of Devaraja Market' },
          ].map((stat, idx) => (
            <div key={idx} className="p-6 bg-mysuru-sand/60 rounded-2xl border border-mysuru-border/60 text-center">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-mysuru-charcoal mb-1">
                {stat.number}
              </div>
              <div className="text-[11px] font-sans text-mysuru-muted tracking-wider uppercase font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
