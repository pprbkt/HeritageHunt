import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { royalAudio } from '../utils/audioSynthesizer';

interface PlanYourVisitHubProps {
  onOpenInfo: () => void;
  onOpenItinerary: () => void;
  onOpenTours: () => void;
}

export const PlanYourVisitHub: React.FC<PlanYourVisitHubProps> = ({
  onOpenInfo,
  onOpenItinerary,
  onOpenTours,
}) => {
  const cards = [
    {
      title: 'Visitor Information',
      desc: 'Planning a trip to Mysuru? Discover opening hours across all 8 landmarks, transparent entry fees, dress codes, and transit advice.',
      image: '/assets/images/landmarks/site_amba_vilas_palace.jpg',
      action: onOpenInfo,
      label: 'Read Visitor Guide',
    },
    {
      title: 'School & Group Visits',
      desc: 'For educational institutions, student delegations, and travel groups exploring the historical architecture of Karnataka.',
      image: '/assets/images/landmarks/site_devaraja_market.jpg',
      action: onOpenTours,
      label: 'Book Group Experience',
    },
    {
      title: 'Signature Hunts & Day Tours',
      desc: 'Discover Mysuru through curated self-paced scavenger hunts, timed day routes, and certified royal historian walking trails.',
      image: '/assets/images/landmarks/site_chamundi_hill_temple.jpg',
      action: onOpenItinerary,
      label: 'Curate Itinerary',
    },
  ];

  return (
    <section id="plan-your-visit" className="bg-white py-16 sm:py-24 border-b border-rom-border">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Giant ROM Title (00:21 in video) */}
        <div className="pb-8 mb-10 border-b border-black">
          <h2 className="font-bebas text-5xl sm:text-7xl md:text-8xl text-black tracking-tight leading-none">
            PLAN YOUR VISIT
          </h2>
        </div>

        {/* 3-Card Columns (00:22 in video) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => {
                royalAudio.playTempleChime(850);
                card.action();
              }}
              className="group cursor-pointer flex flex-col justify-between"
              data-cursor="explore"
              data-cursor-text="VISIT"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-rom-lightGray mb-5">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <h3 className="font-sans text-xl font-bold text-black group-hover:text-rom-gold transition-colors mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-rom-gray leading-relaxed font-sans font-light mb-6">
                  {card.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-rom-border flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wider group-hover:text-rom-gold transition-colors">
                <span>{card.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
