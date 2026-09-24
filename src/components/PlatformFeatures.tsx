import React from 'react';
import { motion } from 'framer-motion';
import { Search, Navigation, Calendar, Sparkles, Share2, Activity, Database } from 'lucide-react';

export const PlatformFeatures: React.FC = () => {
  const features = [
    {
      title: 'Discover',
      desc: 'High-definition heritage profiles, verified Wadiyar historical archives, and audio guide narration.',
      icon: <Search className="w-5 h-5 text-mysuru-gold" />,
    },
    {
      title: 'Navigate',
      desc: 'GPS-guided walking trails, auto-rickshaw distance calculators, and interactive topographical radar map.',
      icon: <Navigation className="w-5 h-5 text-mysuru-gold" />,
    },
    {
      title: 'Plan',
      desc: 'Personalized timeline builder with smart opening hours coordination and offline digital pass downloads.',
      icon: <Calendar className="w-5 h-5 text-mysuru-gold" />,
    },
    {
      title: 'Experience',
      desc: 'Guided illumination walks, silk loom artisan masterclasses, and royal palace heritage corridors.',
      icon: <Sparkles className="w-5 h-5 text-mysuru-gold" />,
    },
    {
      title: 'Share',
      desc: 'Community travel stories, verified ratings, secret photography viewpoints, and explorer badges.',
      icon: <Share2 className="w-5 h-5 text-mysuru-gold" />,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-mysuru-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[11px] font-sans font-bold text-mysuru-gold tracking-[0.25em] uppercase mb-2">
            PLATFORM ARCHITECTURE
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-mysuru-charcoal tracking-tight">
            MYSURU'S HERITAGE, DIGITALLY CONNECTED.
          </h2>
          <p className="font-sans text-sm sm:text-base text-mysuru-muted mt-2">
            The complete technology ecosystem powering cultural exploration across the royal city.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-mysuru-border hover:border-mysuru-gold flex flex-col justify-between transition-all duration-300 hover:shadow-luxury group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-mysuru-sand border border-mysuru-border flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {feat.icon}
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-serif text-lg font-bold text-mysuru-charcoal">
                    {feat.title}
                  </h3>
                </div>
                <p className="text-xs font-sans text-mysuru-muted leading-relaxed mt-2 font-light">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Admin Platform Preview (Luxury Places Clean Dashboard) */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[10px] font-sans font-bold text-mysuru-gold uppercase tracking-[0.2em] block mb-1">
              HERITAGE HUNT ENTERPRISE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-mysuru-charcoal">
              BUILT FOR MYSURU'S HERITAGE ECOSYSTEM.
            </h3>
            <p className="text-xs text-mysuru-muted mt-1">
              Providing Mysuru tourism authorities, guides, and heritage site administrators live analytics.
            </p>
          </div>

          <div className="rounded-3xl border border-mysuru-border bg-white p-6 sm:p-8 shadow-luxury">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-mysuru-borderLight mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                <span className="font-sans text-xs font-bold text-mysuru-charcoal uppercase tracking-wider">
                  Mysuru Tourism Administration Dashboard • Live Stream
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-mysuru-sand border border-mysuru-border text-[10px] text-mysuru-charcoal font-mono">
                Node: KA-MYS-01
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-mysuru-sand/40 border border-mysuru-borderLight">
                <span className="text-[10px] text-mysuru-muted uppercase block font-sans font-semibold">Active Visitors</span>
                <span className="font-serif text-2xl font-bold text-mysuru-charcoal">14,820</span>
                <span className="text-[10px] text-emerald-700 block mt-0.5 font-medium">↑ 18.4% today</span>
              </div>

              <div className="p-4 rounded-xl bg-mysuru-sand/40 border border-mysuru-borderLight">
                <span className="text-[10px] text-mysuru-muted uppercase block font-sans font-semibold">Audio Streams</span>
                <span className="font-serif text-2xl font-bold text-mysuru-gold">3,490</span>
                <span className="text-[10px] text-mysuru-muted block mt-0.5">Mobile 72% • Web 28%</span>
              </div>

              <div className="p-4 rounded-xl bg-mysuru-sand/40 border border-mysuru-borderLight">
                <span className="text-[10px] text-mysuru-muted uppercase block font-sans font-semibold">Palace Check-ins</span>
                <span className="font-serif text-2xl font-bold text-mysuru-charcoal">8,940</span>
                <span className="text-[10px] text-mysuru-gold block mt-0.5 font-medium">Illumination Peak 7 PM</span>
              </div>

              <div className="p-4 rounded-xl bg-mysuru-sand/40 border border-mysuru-borderLight">
                <span className="text-[10px] text-mysuru-muted uppercase block font-sans font-semibold">Heritage Sites</span>
                <span className="font-serif text-2xl font-bold text-emerald-700">20 / 20</span>
                <span className="text-[10px] text-mysuru-muted block mt-0.5">100% Operational</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-mysuru-sand/50 border border-mysuru-border font-mono text-[11px] text-mysuru-muted space-y-1">
              <div className="text-mysuru-charcoal flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-emerald-600" />
                <span>[2026-09-24 16:10] Pass verified at Varaha Gate (Mysuru Palace)</span>
              </div>
              <div className="text-mysuru-muted">
                <span>[2026-09-24 16:08] New booking: Devaraja Market & Mysore Pak Trail (2 Guests)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
