import React, { useState, useMemo } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { HeritageSite, HeritageCategory } from '../types';
import { DestinationCard } from './DestinationCard';
import { QuickViewModal } from './QuickViewModal';
import { useLanguage } from '../context/LanguageContext';
import { royalAudio } from '../utils/audioSynthesizer';

interface HeritageGalleryProps {
  sites: HeritageSite[];
  savedSiteIds: string[];
  onToggleSave: (siteId: string) => void;
  itinerarySiteIds: string[];
  onAddToItinerary: (site: HeritageSite) => void;
}

export const HeritageGallery: React.FC<HeritageGalleryProps> = ({
  sites,
  savedSiteIds,
  onToggleSave,
  itinerarySiteIds,
  onAddToItinerary,
}) => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<HeritageCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSite, setSelectedSite] = useState<HeritageSite | null>(null);

  const categories: { id: HeritageCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Heritage Sites', count: sites.length },
    { id: 'royal', label: 'Royal Palaces', count: 3 },
    { id: 'sacred', label: 'Sacred & Shrines', count: 2 },
    { id: 'cultural', label: 'Art & Museums', count: 2 },
    { id: 'living', label: 'Living Heritage', count: 2 },
  ];

  const filteredSites = useMemo(() => {
    return sites.filter((site) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        site.category === selectedCategory ||
        (selectedCategory === 'cultural' && (site.category === 'cultural' || site.category === 'architectural'));

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        site.name.toLowerCase().includes(query) ||
        site.tags.some((t) => t.toLowerCase().includes(query)) ||
        site.era.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [sites, selectedCategory, searchQuery]);

  return (
    <section id="heritage-sites" className="py-24 sm:py-32 bg-mysuru-bg relative overflow-hidden border-b border-mysuru-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header (Luxury Places Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-[11px] font-sans font-bold text-mysuru-gold tracking-[0.25em] uppercase mb-2">
              CURATED SELECTION
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-mysuru-charcoal tracking-tight">
              {t('sites.title')}
            </h2>
            <p className="font-sans text-sm sm:text-base text-mysuru-muted mt-2 max-w-xl">
              An exclusive portfolio of Mysuru's most iconic royal residences, temples, and living heritage destinations.
            </p>
          </div>

          {/* Minimal Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-mysuru-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search monuments, eras..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-mysuru-border text-xs text-mysuru-charcoal placeholder-mysuru-muted focus:outline-none focus:border-mysuru-gold shadow-sm transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Pills with Item Counts (Direct luxury-places.ch pattern) */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                royalAudio.playTempleChime(780);
                setSelectedCategory(cat.id);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-sans font-semibold tracking-wider whitespace-nowrap transition-all duration-300 border flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-mysuru-charcoal border-mysuru-charcoal text-white shadow-sm'
                  : 'bg-white border-mysuru-border text-mysuru-muted hover:text-mysuru-charcoal hover:border-mysuru-charcoal/40'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-mysuru-sand text-mysuru-charcoal'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredSites.map((site) => (
            <DestinationCard
              key={site.id}
              site={site}
              onExplore={(s) => setSelectedSite(s)}
              isSaved={savedSiteIds.includes(site.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>

        {filteredSites.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl p-8 border border-mysuru-border">
            <p className="font-serif text-xl text-mysuru-charcoal mb-2">No matching heritage sites found</p>
            <p className="text-xs text-mysuru-muted">Try searching for "Palace", "Temple", or reset category filters.</p>
          </div>
        )}
      </div>

      {/* Quick View Details Modal */}
      <QuickViewModal
        site={selectedSite}
        onClose={() => setSelectedSite(null)}
        onAddToItinerary={onAddToItinerary}
        isAddedToItinerary={selectedSite ? itinerarySiteIds.includes(selectedSite.id) : false}
      />
    </section>
  );
};
