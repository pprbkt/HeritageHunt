import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, Quote, Camera } from 'lucide-react';
import { TRAVELER_STORIES } from '../data/itineraryData';

export const CommunitySection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-mysuru-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[11px] font-sans font-bold text-mysuru-gold tracking-[0.25em] uppercase mb-2">
            TRAVELER REVIEWS & STORIES
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-mysuru-charcoal tracking-tight">
            SEE MYSURU THROUGH OTHER TRAVELERS.
          </h2>
          <p className="font-sans text-sm sm:text-base text-mysuru-muted mt-2">
            Authentic experiences shared by cultural explorers and architectural enthusiasts.
          </p>
        </div>

        {/* Stories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TRAVELER_STORIES.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-mysuru-border hover:border-mysuru-gold flex flex-col justify-between transition-all duration-400 hover:shadow-luxury"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={story.avatar}
                      alt={story.author}
                      className="w-11 h-11 rounded-full object-cover border border-mysuru-border"
                    />
                    <div>
                      <h4 className="font-serif text-base font-bold text-mysuru-charcoal">
                        {story.author}
                      </h4>
                      <p className="text-[11px] text-mysuru-muted font-sans">{story.origin}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-mysuru-gold">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="relative mb-6">
                  <Quote className="w-6 h-6 text-mysuru-gold/20 absolute -top-2 -left-1" />
                  <p className="text-xs sm:text-sm text-mysuru-charcoal/80 leading-relaxed font-sans italic pl-5 font-light">
                    "{story.comment}"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-mysuru-borderLight flex items-center justify-between text-[11px] text-mysuru-muted font-sans">
                <span className="text-mysuru-gold font-semibold">📍 {story.siteVisited}</span>
                <span>{story.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photo Gallery Row (Luxury Places Style) */}
        <div className="bg-mysuru-sand/40 rounded-3xl p-6 sm:p-8 border border-mysuru-border">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-mysuru-gold" />
              <span className="font-serif text-lg font-bold text-mysuru-charcoal">#HeritageHuntMysuru Shared Moments</span>
            </div>
            <span className="text-xs text-mysuru-muted font-sans font-medium">2,840+ Traveler Photos</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { img: '/assets/images/landmarks/site_amba_vilas_durbar.jpg', caption: 'Durbar Hall at Amba Vilas Palace' },
              { img: '/assets/images/landmarks/site_devaraja_jasmine_market.jpg', caption: 'Devaraja Jasmine flower stalls' },
              { img: '/assets/images/landmarks/site_st_philomena_stained_glass.jpg', caption: 'French stained glass at St. Philomena' },
              { img: '/assets/images/landmarks/site_chamundi_nandi_monolith.jpg', caption: '1659 CE Monolithic Nandi Bull' },
            ].map((pic, idx) => (
              <div key={idx} className="group relative aspect-square rounded-2xl overflow-hidden border border-mysuru-border">
                <img src={pic.img} alt={pic.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex items-end">
                  <span className="text-[11px] text-white font-sans font-medium">{pic.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
