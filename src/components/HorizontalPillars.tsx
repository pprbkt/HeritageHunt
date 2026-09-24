import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles, Feather, Flame, ArrowRight } from 'lucide-react';

interface Pillar {
  id: string;
  num: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  highlights: string[];
}

export const HorizontalPillars: React.FC<{ onExplorePillar: (cat: string) => void }> = ({ onExplorePillar }) => {
  const pillars: Pillar[] = [
    {
      id: 'royal',
      num: '01',
      category: 'ROYAL',
      tagline: 'Palaces & Dynasty Splendor',
      description: '600 years of Wadiyar regal patronship that shaped modern Karnataka through architecture, education, and royal ceremonies.',
      image: '/assets/images/landmarks/site_amba_vilas_palace.jpg',
      icon: <Crown className="w-4 h-4 text-mysuru-gold" />,
      highlights: ['Amba Vilas Durbar Hall', 'Jaganmohan Art Gallery', 'Lalitha Mahal Marble', 'Golden Howdah (750kg)'],
    },
    {
      id: 'sacred',
      num: '02',
      category: 'SACRED',
      tagline: 'Hills, Temples & Guardians',
      description: 'Ancient hills where legends battle darkness, guardian shrines overlooking misty plains, and stone steps carved in devotion.',
      image: '/assets/images/landmarks/site_chamundi_hill_temple.jpg',
      icon: <Sparkles className="w-4 h-4 text-mysuru-gold" />,
      highlights: ['Chamundi Hill Gopuram (1827)', '1,008 Pilgrim Steps', 'Monolithic Nandi (1659)', 'St. Philomena Crypt'],
    },
    {
      id: 'cultural',
      num: '03',
      category: 'CULTURAL',
      tagline: 'Fine Arts, Music & Museums',
      description: 'The renaissance of South Indian classical Carnatic music, gold-leaf gesso paintings, and vintage steam engines.',
      image: '/assets/images/landmarks/site_jaganmohan_art_gallery.jpg',
      icon: <Feather className="w-4 h-4 text-mysuru-gold" />,
      highlights: ['Raja Ravi Varma Canvases', 'Mysore Gesso Gold Art', '1899 Maharani Saloon', 'Mysuru Heritage Archives'],
    },
    {
      id: 'living',
      num: '04',
      category: 'LIVING',
      tagline: 'Markets, Silk & Sandalwood',
      description: 'Sensory journeys through 130-year flower markets, authentic ghee-scented Mysore Pak kitchens, and handwoven pure zari silk.',
      image: '/assets/images/landmarks/site_devaraja_market.jpg',
      icon: <Flame className="w-4 h-4 text-mysuru-gold" />,
      highlights: ['GI Mysuru Mallige Jasmine', 'Heirloom Mysore Pak', 'Devaraja 1886 Market', 'Pure Sandalwood Attar'],
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-mysuru-bg relative overflow-hidden border-b border-mysuru-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header (Luxury Places Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-[11px] font-sans font-bold text-mysuru-gold tracking-[0.25em] uppercase mb-2">
              HERITAGE PILLARS
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-mysuru-charcoal tracking-tight">
              HERITAGE IS EVERYWHERE.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-mysuru-muted max-w-lg">
            Mysuru's grandeur does not end at palace walls. It lives through sacred steps, artisan looms, fragrance markets, and living alleys.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-mysuru-border hover:border-mysuru-gold transition-all duration-400 hover:shadow-luxury flex flex-col h-full"
              data-cursor="explore"
              data-cursor-text={pillar.category}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-mysuru-sand">
                <img
                  src={pillar.image}
                  alt={pillar.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />
                
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-white/95 text-[10px] font-mono font-bold text-mysuru-charcoal border border-mysuru-border shadow-sm">
                  {pillar.num}
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-white/90 border border-mysuru-border shadow-sm">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="font-cinzel text-base font-bold text-mysuru-charcoal tracking-wider">
                        {pillar.category}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-mysuru-charcoal mb-2">
                    {pillar.tagline}
                  </h4>
                  <p className="text-xs font-sans text-mysuru-muted leading-relaxed font-light mb-4">
                    {pillar.description}
                  </p>
                  
                  <div className="space-y-1.5 mb-6">
                    {pillar.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-mysuru-charcoal/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-mysuru-gold" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onExplorePillar(pillar.id)}
                  className="w-full py-2.5 rounded-xl border border-mysuru-border hover:border-mysuru-charcoal bg-mysuru-sand hover:bg-mysuru-charcoal text-mysuru-charcoal hover:text-white text-xs font-sans font-semibold tracking-wider flex items-center justify-center gap-2 transition-all group/b"
                >
                  <span>Explore {pillar.category}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/b:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
