import React, { createContext, useContext, useState } from 'react';

export type LanguageCode = 'en';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
}

const translations: Record<string, string> = {
  // Navigation
  'nav.discover': 'Discover',
  'nav.heritage': 'Heritage',
  'nav.map': 'Mysuru Map',
  'nav.itinerary': 'Itinerary',
  'nav.experiences': 'Experiences',
  'nav.about': 'About',
  'nav.exploreBtn': 'Explore Mysuru →',
  'nav.locationTag': 'MYSURU, KARNATAKA',

  // Hero
  'hero.eyebrow': 'MYSURU • KARNATAKA • INDIA',
  'hero.titleLine1': 'DISCOVER',
  'hero.titleLine2': "MYSURU'S",
  'hero.titleLine3': 'HERITAGE.',
  'hero.subtitle': 'Explore centuries of history, royal architecture, sacred hills, living markets, and untold stories hidden across the royal city.',
  'hero.ctaPrimary': 'Explore Mysuru',
  'hero.ctaSecondary': 'Plan Your Visit ↓',
  'hero.scrollCue': 'SCROLL TO DISCOVER',

  // Opening Statement
  'intro.quote1': 'MYSURU IS MORE THAN A DESTINATION.',
  'intro.quote2': "IT'S A STORY.",
  'intro.headline': 'A CITY BUILT BY HISTORY.',
  'intro.paragraph': 'Mysuru is a city where royal architecture, sacred spaces, traditional markets, sandalwood fragrances, art, and vibrant festivals exist side by side.',
  'intro.mission': 'Heritage Hunt brings these timeless stories together in one place.',

  // Heritage Section
  'sites.eyebrow': 'EXPLORE MYSURU',
  'sites.title': 'PLACES WITH A STORY',
  'sites.filterAll': 'All Sites',
  'sites.filterRoyal': 'Royal Palaces',
  'sites.filterSacred': 'Sacred & Temples',
  'sites.filterCultural': 'Art & Museums',
  'sites.filterLiving': 'Living Markets',

  // Map
  'map.title': 'MYSURU, ON THE MAP.',
  'map.subtitle': 'Interactive satellite & heritage guide to Mysuru city landmarks.',

  // Itinerary
  'itinerary.title': 'MAKE A DAY OF IT.',
  'itinerary.subtitle': 'Curated royal timeline crafted for timeless discovery.',

  // Final CTA
  'cta.title1': 'YOUR MYSURU',
  'cta.title2': 'ADVENTURE',
  'cta.title3': 'STARTS HERE.',
  'cta.subtitle': 'Discover the places, stories, and experiences that make Mysuru unforgettable.',
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language] = useState<LanguageCode>('en');

  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: () => {}, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
