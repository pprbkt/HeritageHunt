import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { royalAudio } from '../utils/audioSynthesizer';

export const VisitorInfoSection: React.FC<{ onPlanVisit: () => void }> = ({ onPlanVisit }) => {
  const [openGuideline, setOpenGuideline] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const hoursList = [
    { date: 'Monday', hours: '10:00 – 17:30' },
    { date: 'Tuesday', hours: '10:00 – 17:30' },
    { date: 'Wednesday', hours: '10:00 – 17:30' },
    { date: 'Thursday', hours: '10:00 – 17:30' },
    { date: 'Friday', hours: '10:00 – 17:30' },
    { date: 'Saturday', hours: '10:00 – 17:30' },
    { date: 'Sunday & Public Holidays', hours: '10:00 – 17:30 (Palace Lights: 19:00 - 19:45)' },
  ];

  const guidelines = [
    {
      title: 'Plan Your Day at Mysuru',
      content: 'We recommend reserving at least 3 hours for Mysuru Palace (Amba Vilas) and 2 hours for Chamundi Hill. Audio guides are available in English and multiple international languages at all major landmark entrances.',
    },
    {
      title: 'What to Expect On Your Visit',
      content: 'Footwear removal is required inside temple sanctuaries and specific inner royal palace halls. Dedicated shoe storage with security tags is provided near Varaha Gate.',
    },
    {
      title: 'What Can I Bring With Me?',
      content: 'Small personal bags, water bottles, and hand cameras are permitted. Large luggage, tripods, and drone cameras are restricted inside inner palace halls.',
    },
    {
      title: 'Health & Safety',
      content: 'First aid stations and accessible wheelchair ramps are available across Amba Vilas Palace, Jaganmohan Art Gallery, and St. Philomena’s Cathedral.',
    },
    {
      title: 'Photography & Filming Guidelines',
      content: 'Personal photography without flash is welcomed. Commercial photography or video production requires advance approval from the Mysuru Palace Board.',
    },
  ];

  const faqs = [
    {
      q: 'When is the best time to visit Mysuru Palace?',
      a: 'Mornings between 10:00 AM and 12:00 PM offer smaller crowds. Sunday evenings feature the famous 45-minute illumination of 97,000 electric bulbs.',
    },
    {
      q: 'Are audio guides available?',
      a: 'Yes, handheld audio devices narrated by Mysuru historians are available at entry gates in English and multiple audio channels.',
    },
    {
      q: 'How do I travel between Chamundi Hill and the Palace?',
      a: 'Local auto-rickshaws, city buses (Route 201), and taxi services run continuously between Sayyaji Rao Road and Chamundi Hill foothills (12 km, 20 min).',
    },
  ];

  return (
    <section id="visitor-hours" className="bg-white py-16 sm:py-24 border-b border-rom-border">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sub-Nav Bar */}
        <div className="flex items-center gap-6 overflow-x-auto pb-4 mb-10 border-b border-rom-border text-xs font-sans font-bold tracking-wider text-rom-gray uppercase no-scrollbar">
          <a href="#visitor-hours" className="text-black underline whitespace-nowrap">Admission Hours</a>
          <a href="#visitor-guidelines" className="hover:text-black whitespace-nowrap">Visitor Guidelines</a>
          <a href="#pricing-faqs" className="hover:text-black whitespace-nowrap">Visitor FAQs</a>
        </div>

        {/* Giant ROM Visitor Title */}
        <div className="pb-8 mb-12 border-b border-black">
          <h2 className="font-bebas text-6xl sm:text-8xl md:text-9xl text-black tracking-tight leading-none">
            VISITOR INFORMATION
          </h2>
        </div>

        {/* ADMISSION HOURS Table */}
        <div className="py-12 border-b border-rom-border">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-bebas text-4xl sm:text-5xl text-black tracking-tight mb-3">
                ADMISSION HOURS
              </h3>
              <p className="text-xs text-rom-gray font-sans leading-relaxed mb-4">
                Operating schedules for Mysuru Palace, Jaganmohan Art Gallery, and city museums.
              </p>
              <button
                onClick={onPlanVisit}
                className="text-xs font-bold text-black uppercase underline hover:text-rom-gold"
              >
                PLAN YOUR ITINERARY →
              </button>
            </div>

            <div className="lg:col-span-2">
              <div className="divide-y divide-rom-border border-t border-b border-rom-border">
                {hoursList.map((row, idx) => (
                  <div key={idx} className="py-3.5 flex items-center justify-between text-xs sm:text-sm font-sans">
                    <span className="font-bold text-black">{row.date}</span>
                    <span className="font-mono text-rom-gray">{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* VISITOR GUIDELINES Accordions */}
        <div id="visitor-guidelines" className="py-16 border-b border-rom-border">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-bebas text-4xl sm:text-5xl text-black tracking-tight mb-3">
                VISITOR GUIDELINES
              </h3>
              <p className="text-xs text-rom-gray font-sans leading-relaxed">
                Everything you need to know for a respectful and seamless experience at Mysuru's heritage landmarks.
              </p>
            </div>

            <div className="lg:col-span-2 divide-y divide-rom-border border-t border-b border-rom-border">
              {guidelines.map((g, idx) => {
                const isOpen = openGuideline === idx;
                return (
                  <div key={idx} className="py-4">
                    <button
                      onClick={() => {
                        royalAudio.playTempleChime(750);
                        setOpenGuideline(isOpen ? null : idx);
                      }}
                      className="w-full flex items-center justify-between text-left font-sans font-bold text-base text-black uppercase"
                    >
                      <span>{g.title}</span>
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5 text-rom-gray" />}
                    </button>
                    {isOpen && (
                      <p className="text-xs sm:text-sm text-rom-gray leading-relaxed font-sans mt-3 pr-6 font-light">
                        {g.content}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* PRICING FAQS */}
        <div id="pricing-faqs" className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="font-bebas text-4xl sm:text-5xl text-black tracking-tight mb-3">
                VISITOR FAQS
              </h3>
            </div>

            <div className="lg:col-span-2 divide-y divide-rom-border border-t border-b border-rom-border">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="py-4">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left font-sans font-bold text-base text-black uppercase"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5 text-rom-gray" />}
                    </button>
                    {isOpen && (
                      <p className="text-xs sm:text-sm text-rom-gray leading-relaxed font-sans mt-3 font-light">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
