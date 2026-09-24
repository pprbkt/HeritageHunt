import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Clock, MapPin, IndianRupee, Navigation, Plus, Check, ShieldCheck, Sparkles } from 'lucide-react';
import { HeritageSite } from '../types';

interface QuickViewModalProps {
  site: HeritageSite | null;
  onClose: () => void;
  onAddToItinerary?: (site: HeritageSite) => void;
  isAddedToItinerary?: boolean;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  site,
  onClose,
  onAddToItinerary,
  isAddedToItinerary = false,
}) => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  if (!site) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm"
        data-lenis-prevent
      >
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-white border border-mysuru-border rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
          data-lenis-prevent
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-white/90 hover:bg-mysuru-charcoal hover:text-white text-mysuru-charcoal border border-mysuru-border transition-all shadow-md"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Scrollable Modal Content */}
          <div className="overflow-y-auto flex-1 overscroll-contain" data-lenis-prevent>
            {/* Top Media Gallery */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-mysuru-sand overflow-hidden">
              <img
                src={site.gallery[activePhotoIdx] || site.image}
                alt={site.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />

              <div className="absolute bottom-4 left-4 sm:left-6 right-4 sm:right-6 flex flex-wrap items-end justify-between gap-2">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider bg-white/95 text-mysuru-charcoal border border-mysuru-border shadow-sm inline-block mb-2">
                    {site.categoryLabel}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-4xl font-bold text-mysuru-charcoal">
                    {site.name}
                  </h2>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/95 border border-mysuru-border text-mysuru-gold font-bold text-sm shadow-sm">
                  <Star className="w-4 h-4 fill-mysuru-gold" />
                  <span>{site.rating}</span>
                  <span className="text-xs text-mysuru-muted">({site.reviewCount.toLocaleString()} reviews)</span>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            {site.gallery.length > 1 && (
              <div className="flex gap-2 p-3 bg-mysuru-sand/40 border-b border-mysuru-border overflow-x-auto">
                {site.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`relative w-20 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activePhotoIdx === idx ? 'border-mysuru-gold scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Main Info */}
            <div className="p-6 sm:p-8 space-y-6 text-mysuru-charcoal">
              {/* Description & History */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-bold text-mysuru-charcoal border-b border-mysuru-border pb-2">
                  Historical Significance
                </h3>
                <p className="text-sm sm:text-base font-sans text-mysuru-charcoal/80 leading-relaxed font-light">
                  {site.description}
                </p>
                
                <div className="p-4 rounded-xl bg-mysuru-sand/40 border-l-4 border-mysuru-gold text-xs sm:text-sm text-mysuru-charcoal/80 italic">
                  <strong>Architectural Note: </strong>
                  {site.historicalNote}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="font-serif text-lg font-bold text-mysuru-charcoal border-b border-mysuru-border pb-2 mb-3">
                  Key Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {site.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-mysuru-charcoal/80 p-2.5 rounded-lg bg-mysuru-sand/40 border border-mysuru-borderLight">
                      <Sparkles className="w-4 h-4 text-mysuru-gold flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visitor Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-mysuru-sand/50 border border-mysuru-border">
                  <div className="flex items-center gap-1.5 text-mysuru-gold text-xs font-bold uppercase tracking-wider mb-1">
                    <Clock className="w-3.5 h-3.5" /> Timings
                  </div>
                  <p className="text-xs text-mysuru-charcoal font-medium">{site.timings}</p>
                </div>

                <div className="p-4 rounded-xl bg-mysuru-sand/50 border border-mysuru-border">
                  <div className="flex items-center gap-1.5 text-mysuru-gold text-xs font-bold uppercase tracking-wider mb-1">
                    <IndianRupee className="w-3.5 h-3.5" /> Entry Ticket
                  </div>
                  <p className="text-xs text-mysuru-charcoal font-medium">
                    Indian: {site.entryFee.indian === 0 ? 'Free Entry' : `₹${site.entryFee.indian}`}
                  </p>
                  <p className="text-[11px] text-mysuru-muted">
                    Foreign: {site.entryFee.foreign === 0 ? 'Free' : `₹${site.entryFee.foreign}`}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-mysuru-sand/50 border border-mysuru-border">
                  <div className="flex items-center gap-1.5 text-mysuru-gold text-xs font-bold uppercase tracking-wider mb-1">
                    <MapPin className="w-3.5 h-3.5" /> Location
                  </div>
                  <p className="text-xs text-mysuru-charcoal font-medium line-clamp-2">{site.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="p-4 sm:p-6 bg-mysuru-sand/60 border-t border-mysuru-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-mysuru-muted">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verified Mysuru Heritage Tourism Site</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`https://maps.google.com/?q=${site.coordinates.lat},${site.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl border border-mysuru-border bg-white hover:bg-mysuru-sand text-mysuru-charcoal text-xs font-sans font-semibold flex items-center justify-center gap-2 shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5 text-mysuru-gold" />
                <span>Get Directions</span>
              </a>

              {onAddToItinerary && (
                <button
                  onClick={() => onAddToItinerary(site)}
                  className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-xl text-xs font-sans font-bold flex items-center justify-center gap-2 transition-all shadow-sm ${
                    isAddedToItinerary
                      ? 'bg-emerald-700 text-white'
                      : 'bg-mysuru-charcoal hover:bg-mysuru-gold text-white'
                  }`}
                >
                  {isAddedToItinerary ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Itinerary</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Add to Trip</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
