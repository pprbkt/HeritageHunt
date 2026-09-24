import React, { useState } from 'react';
import { Star, Clock, IndianRupee, MapPin, Navigation, Bookmark, Sparkles, Share2, Check } from 'lucide-react';
import { HERITAGE_SITES } from '../data/heritageData';

export const HeritageDetailShowcase: React.FC<{
  onAddToTrip: () => void;
  isAdded: boolean;
}> = ({ onAddToTrip, isAdded }) => {
  const palace = HERITAGE_SITES[0];
  const [isSaved, setIsSaved] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-mysuru-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-[11px] font-sans font-bold text-mysuru-gold tracking-[0.25em] uppercase mb-2">
            FEATURED LANDMARK SPOTLIGHT
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-mysuru-charcoal tracking-tight">
            AMBA VILAS PALACE
          </h2>
          <p className="font-sans text-sm sm:text-base text-mysuru-muted mt-2">
            The pinnacle of Indian royal architecture and seat of the 600-year Wadiyar dynasty.
          </p>
        </div>

        {/* Embedded Magazine Showcase Card (Luxury Places Style) */}
        <div className="rounded-3xl overflow-hidden border border-mysuru-border bg-white shadow-luxury">
          {/* Top Visual Banner */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-mysuru-sand">
            <img
              src="/assets/images/landmarks/site_amba_vilas_palace.jpg"
              alt="Mysuru Palace"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Overlaid Badges */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <span className="px-4 py-1.5 rounded-full bg-white/95 text-mysuru-charcoal border border-mysuru-border text-xs font-sans font-bold tracking-wider uppercase shadow-md">
                ROYAL HERITAGE • WADIYAR DYNASTY
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2.5 rounded-full bg-white/90 hover:bg-white text-mysuru-charcoal border border-mysuru-border transition-all shadow-sm"
                  title="Share Landmark"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`p-2.5 rounded-full border transition-all shadow-sm ${
                    isSaved ? 'bg-mysuru-gold text-white border-mysuru-gold' : 'bg-white/90 hover:bg-white text-mysuru-charcoal border-mysuru-border'
                  }`}
                  title="Save Landmark"
                >
                  <Bookmark className="w-4 h-4 fill-current" />
                </button>
              </div>
            </div>

            {/* Title bottom banner */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h3 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
                  Mysuru Palace
                </h3>
                <p className="text-sm font-sans text-amber-200 mt-1">
                  Sayyaji Rao Corridor, Mysuru
                </p>
              </div>

              <div className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/95 border border-mysuru-border text-mysuru-charcoal font-bold text-sm shadow-md">
                <Star className="w-4 h-4 fill-mysuru-gold text-mysuru-gold" />
                <span>4.8</span>
                <span className="text-xs text-mysuru-muted">(48,200 verified reviews)</span>
              </div>
            </div>
          </div>

          {/* Details & Interactive Action Row */}
          <div className="p-6 sm:p-10">
            {/* 4 Info Pills */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-mysuru-sand/60 border border-mysuru-border">
                <div className="flex items-center gap-1.5 text-mysuru-gold text-xs font-bold uppercase tracking-wider mb-1">
                  <Clock className="w-3.5 h-3.5" /> Timings
                </div>
                <div className="text-sm font-bold text-mysuru-charcoal">10:00 AM – 05:30 PM</div>
                <div className="text-[11px] text-mysuru-muted mt-0.5">Sun Lights: 7:00 – 7:45 PM</div>
              </div>

              <div className="p-4 rounded-2xl bg-mysuru-sand/60 border border-mysuru-border">
                <div className="flex items-center gap-1.5 text-mysuru-gold text-xs font-bold uppercase tracking-wider mb-1">
                  <IndianRupee className="w-3.5 h-3.5" /> Entry Ticket
                </div>
                <div className="text-sm font-bold text-mysuru-charcoal">₹100 (Adults)</div>
                <div className="text-[11px] text-mysuru-muted mt-0.5">₹50 (Kids) | ₹1000 (Foreign)</div>
              </div>

              <div className="p-4 rounded-2xl bg-mysuru-sand/60 border border-mysuru-border">
                <div className="flex items-center gap-1.5 text-mysuru-gold text-xs font-bold uppercase tracking-wider mb-1">
                  <Clock className="w-3.5 h-3.5" /> Visit Duration
                </div>
                <div className="text-sm font-bold text-mysuru-charcoal">2.5 to 3 Hours</div>
                <div className="text-[11px] text-mysuru-muted mt-0.5">Guided tours available</div>
              </div>

              <div className="p-4 rounded-2xl bg-mysuru-sand/60 border border-mysuru-border">
                <div className="flex items-center gap-1.5 text-mysuru-gold text-xs font-bold uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5" /> Location
                </div>
                <div className="text-sm font-bold text-mysuru-charcoal">City Center (KM 0)</div>
                <div className="text-[11px] text-emerald-600 mt-0.5 font-medium">Sayyaji Rao Road</div>
              </div>
            </div>

            {/* Narrative & Action Bar */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-6 border-t border-mysuru-borderLight">
              <p className="text-sm text-mysuru-muted font-sans leading-relaxed max-w-2xl">
                The seat of the Wadiyar dynasty, Amba Vilas stands as one of the most visited monuments on earth. Designed in Indo-Saracenic grandeur with stained glass from Glasgow, Belgian crystal chandeliers, and nearly 100,000 incandescent light bulbs.
              </p>

              <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                <a
                  href={`https://maps.google.com/?q=${palace.coordinates.lat},${palace.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial px-6 py-3 rounded-full border border-mysuru-border bg-white hover:bg-mysuru-sand text-mysuru-charcoal font-sans font-semibold text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-mysuru-gold" />
                  <span>Get Directions</span>
                </a>

                <button
                  onClick={onAddToTrip}
                  className={`flex-1 sm:flex-initial px-8 py-3 rounded-full text-xs font-sans font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-sm ${
                    isAdded
                      ? 'bg-emerald-700 text-white'
                      : 'bg-mysuru-charcoal hover:bg-mysuru-gold text-white'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Itinerary</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Add to Trip</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
