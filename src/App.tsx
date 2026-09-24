import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { LanguageProvider } from './context/LanguageContext';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedExhibitions } from './components/FeaturedExhibitions';
import { InitiativesBanner } from './components/InitiativesBanner';
import { PlanYourVisitHub } from './components/PlanYourVisitHub';
import { GalleriesShowcase } from './components/GalleriesShowcase';
import { VisitorInfoSection } from './components/VisitorInfoSection';
import { MysuruMap } from './components/MysuruMap';
import { DistanceExplorer } from './components/DistanceExplorer';
import { TravelerTools } from './components/TravelerTools';
import { ItineraryBuilder } from './components/ItineraryBuilder';
import { PersonalizedQuiz } from './components/PersonalizedQuiz';
import { AchievementsTracker } from './components/AchievementsTracker';
import { ROMFooter } from './components/ROMFooter';
import { QuickViewModal } from './components/QuickViewModal';
import { HERITAGE_SITES } from './data/heritageData';
import { HeritageSite } from './types';

export const AppContent: React.FC = () => {
  const [selectedSiteModal, setSelectedSiteModal] = useState<HeritageSite | null>(null);
  const [itinerarySiteIds, setItinerarySiteIds] = useState<string[]>(['mysuru-palace', 'jaganmohan-palace', 'devaraja-market']);

  useEffect(() => {
    // Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleAddToItinerary = (site: HeritageSite) => {
    if (!itinerarySiteIds.includes(site.id)) {
      setItinerarySiteIds([...itinerarySiteIds, site.id]);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black relative font-sans">
      {/* Precision ROM Cursor */}
      <CustomCursor />

      {/* 1. ROM Header */}
      <Navbar
        onOpenPlan={() => scrollToSection('plan-your-visit')}
        onOpenSearch={() => scrollToSection('featured-destinations')}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero
          onPlanClick={() => scrollToSection('plan-your-visit')}
          onExploreClick={() => scrollToSection('featured-destinations')}
        />

        {/* 3. ROM Alternating Split Destinations Showcase */}
        <FeaturedExhibitions
          sites={HERITAGE_SITES}
          onSelectSite={(site) => setSelectedSiteModal(site)}
          onViewAll={() => scrollToSection('interactive-map')}
        />

        {/* 4. ROM Royal Preservation Impact Banner */}
        <InitiativesBanner
          onLearnMore={() => scrollToSection('visitor-hours')}
        />

        {/* 5. ROM 3-Column Plan Your Visit Hub */}
        <PlanYourVisitHub
          onOpenInfo={() => scrollToSection('visitor-hours')}
          onOpenItinerary={() => scrollToSection('itinerary-builder')}
          onOpenTours={() => scrollToSection('itinerary-builder')}
        />

        {/* 6. ROM Numbered Slide Stack Carousel Showcase */}
        <GalleriesShowcase
          sites={HERITAGE_SITES}
          onSelectSite={(site) => setSelectedSiteModal(site)}
          onViewAll={() => scrollToSection('interactive-map')}
        />

        {/* 7. ROM Visitor Information, Admission Hours & Guidelines Accordions */}
        <VisitorInfoSection
          onPlanVisit={() => scrollToSection('itinerary-builder')}
        />

        {/* 10. Interactive Mysuru Radar Map */}
        <MysuruMap
          sites={HERITAGE_SITES}
          onSelectSite={(site) => setSelectedSiteModal(site)}
        />

        {/* 11. Real-Time Transit & Distance Calculator */}
        <DistanceExplorer />

        {/* 12. Visitor Utilities: Currency Converter & Phrase Audio Translator */}
        <TravelerTools />

        {/* 13. Interactive Itinerary Day Planner */}
        <div id="itinerary-builder">
          <ItineraryBuilder />
        </div>

        {/* 13. Personalized Travel Matcher */}
        <PersonalizedQuiz
          onSelectSite={(site) => setSelectedSiteModal(site)}
        />

        {/* 14. Gamification Explorer Passport */}
        <AchievementsTracker />
      </main>

      {/* 15. ROM Full Black Footer */}
      <ROMFooter />

      {/* Landmark Quick View Drawer */}
      <QuickViewModal
        site={selectedSiteModal}
        onClose={() => setSelectedSiteModal(null)}
        onAddToItinerary={handleAddToItinerary}
        isAddedToItinerary={selectedSiteModal ? itinerarySiteIds.includes(selectedSiteModal.id) : false}
      />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
