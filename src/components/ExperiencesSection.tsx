import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, MapPin, ArrowRight } from 'lucide-react';
import { EXPERIENCES_DATA } from '../data/experiencesData';
import { Experience } from '../types';
import { BookingModal } from './BookingModal';
import { royalAudio } from '../utils/audioSynthesizer';

export const ExperiencesSection: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  return (
    <section id="experiences" className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-mysuru-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[11px] font-sans font-bold text-mysuru-gold tracking-[0.25em] uppercase mb-2">
            EXCLUSIVE TOUR PACKAGES
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-mysuru-charcoal tracking-tight">
            EXPERIENCE THE CITY.
          </h2>
          <p className="font-sans text-sm sm:text-base text-mysuru-muted mt-2">
            Guided heritage walks, artisan silk weaving masterclasses, and palace illuminations led by certified historians.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERIENCES_DATA.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white border border-mysuru-border hover:border-mysuru-gold flex flex-col justify-between transition-all duration-400 hover:shadow-luxury-hover"
              data-cursor="explore"
              data-cursor-text="BOOK"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-mysuru-sand">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider bg-white/95 text-mysuru-charcoal border border-mysuru-border shadow-sm">
                      {exp.category}
                    </span>
                    {exp.badge && (
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-sans font-bold bg-mysuru-charcoal text-white shadow-sm">
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 border border-mysuru-border text-xs text-mysuru-gold font-bold shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-mysuru-gold" />
                    <span>{exp.rating}</span>
                    <span className="text-mysuru-muted text-[11px]">({exp.reviews})</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-mysuru-charcoal group-hover:text-mysuru-gold transition-colors mb-2 leading-snug">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-mysuru-muted leading-relaxed font-sans line-clamp-3 mb-4 font-light">
                    {exp.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-mysuru-muted font-sans pb-4 border-b border-mysuru-borderLight">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-mysuru-gold" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-mysuru-gold" />
                      <span className="truncate max-w-[140px]">{exp.meetingPoint}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price & Action Row */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-mysuru-muted uppercase font-semibold block font-sans">Starting from</span>
                  <div className="flex items-center text-lg font-bold font-serif text-mysuru-charcoal">
                    <span>₹{exp.priceINR}</span>
                    <span className="text-xs text-mysuru-muted font-sans font-normal ml-1">/ guest</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    royalAudio.playTempleChime(950);
                    setSelectedExperience(exp);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-mysuru-charcoal hover:bg-mysuru-gold text-white text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-sm group/b"
                >
                  <span>Book Tour</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/b:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <BookingModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </section>
  );
};
