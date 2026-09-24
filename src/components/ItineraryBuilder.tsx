import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Trash2, Plus, Download, Car, Footprints, ChevronUp, ChevronDown, Check } from 'lucide-react';
import { DEFAULT_ITINERARY } from '../data/itineraryData';
import { HERITAGE_SITES } from '../data/heritageData';
import { ItineraryStop, HeritageSite } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { royalAudio } from '../utils/audioSynthesizer';
import confetti from 'canvas-confetti';

export const ItineraryBuilder: React.FC = () => {
  const { t } = useLanguage();
  const [itinerary, setItinerary] = useState<ItineraryStop[]>(DEFAULT_ITINERARY);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);

  const removeStop = (id: string) => {
    royalAudio.playTempleChime(600);
    setItinerary(itinerary.filter((s) => s.id !== id));
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    const newItems = [...itinerary];
    const temp = newItems[index - 1];
    newItems[index - 1] = newItems[index];
    newItems[index] = temp;
    setItinerary(newItems);
  };

  const moveDown = (index: number) => {
    if (index === itinerary.length - 1) return;
    const newItems = [...itinerary];
    const temp = newItems[index + 1];
    newItems[index + 1] = newItems[index];
    newItems[index] = temp;
    setItinerary(newItems);
  };

  const addStop = (site: HeritageSite) => {
    royalAudio.playCelebrationChime();
    const newStop: ItineraryStop = {
      id: `stop-${Date.now()}`,
      time: '04:00 PM',
      siteId: site.id,
      name: site.name,
      duration: site.duration,
      activity: site.highlights[0] || 'Explore royal architecture and artifacts.',
      distanceFromPrev: '2.0 km',
      travelTime: '8 min drive',
      transportMode: 'auto',
      tip: 'Recommended afternoon visit.',
    };
    setItinerary([...itinerary, newStop]);
    setShowAddModal(false);
  };

  const handleExport = () => {
    royalAudio.playCelebrationChime();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#B68D40', '#121316', '#731A2D'],
    });
    setShowExportModal(true);
  };

  return (
    <section id="itinerary-planner" className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-mysuru-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[11px] font-sans font-bold text-mysuru-gold tracking-[0.25em] uppercase mb-2">
            DAY TRIP CURATOR
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-mysuru-charcoal tracking-tight">
            {t('itinerary.title')}
          </h2>
          <p className="font-sans text-sm sm:text-base text-mysuru-muted mt-2">
            {t('itinerary.subtitle')} Customize, reorder, or add stops to curate your bespoke royal Mysuru day.
          </p>
        </div>

        {/* Timeline Itinerary Wrapper */}
        <div className="max-w-4xl mx-auto">
          {/* Top Actions & Summary Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-mysuru-sand/70 border border-mysuru-border mb-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse" />
              <div>
                <span className="font-serif text-base font-bold text-mysuru-charcoal block">
                  Mysuru Royal Heritage Itinerary
                </span>
                <span className="text-xs text-mysuru-muted font-sans">
                  {itinerary.length} Heritage Stops • ~10.5 Hours Active Discovery
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setShowAddModal(true)}
                className="flex-1 sm:flex-initial px-4 py-2 rounded-xl border border-mysuru-border bg-white hover:bg-mysuru-sand text-mysuru-charcoal text-xs font-sans font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm"
              >
                <Plus className="w-4 h-4 text-mysuru-gold" />
                <span>Add Landmark</span>
              </button>

              <button
                onClick={handleExport}
                className="flex-1 sm:flex-initial px-5 py-2 rounded-xl bg-mysuru-charcoal hover:bg-mysuru-gold text-white text-xs font-sans font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Export Pass</span>
              </button>
            </div>
          </div>

          {/* Timeline Nodes */}
          <div className="relative border-l-2 border-mysuru-border ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-6">
            {itinerary.map((stop, index) => (
              <motion.div
                key={stop.id}
                layout
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-5 w-8 h-8 rounded-full bg-white border-2 border-mysuru-charcoal flex items-center justify-center text-[10px] font-sans font-bold text-mysuru-charcoal shadow-sm">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-mysuru-border hover:border-mysuru-gold transition-all duration-300 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-sans font-bold bg-mysuru-sand text-mysuru-charcoal border border-mysuru-border">
                        {stop.time}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-mysuru-charcoal">
                        {stop.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1 self-end sm:self-center">
                      <button
                        onClick={() => moveUp(index)}
                        disabled={index === 0}
                        className="p-1 rounded bg-mysuru-sand hover:bg-mysuru-border text-mysuru-charcoal disabled:opacity-20"
                        title="Move Up"
                      >
                        <ChevronUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => moveDown(index)}
                        disabled={index === itinerary.length - 1}
                        className="p-1 rounded bg-mysuru-sand hover:bg-mysuru-border text-mysuru-charcoal disabled:opacity-20"
                        title="Move Down"
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => removeStop(stop.id)}
                        className="p-1 rounded bg-mysuru-sand hover:bg-rose-100 text-mysuru-muted hover:text-rose-700 ml-1"
                        title="Remove Stop"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-mysuru-muted leading-relaxed font-sans mb-3">
                    {stop.activity}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-mysuru-borderLight text-xs text-mysuru-muted font-sans">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-mysuru-charcoal font-medium">
                        <Clock className="w-3.5 h-3.5 text-mysuru-gold" /> Duration: {stop.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        {stop.transportMode === 'walk' ? <Footprints className="w-3.5 h-3.5" /> : <Car className="w-3.5 h-3.5" />}
                        {stop.travelTime}
                      </span>
                    </div>
                    <div className="text-[11px] text-amber-700 font-medium">
                      💡 Tip: {stop.tip}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Landmark Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="fixed inset-0" onClick={() => setShowAddModal(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white border border-mysuru-border rounded-3xl p-6 z-10 max-h-[80vh] overflow-y-auto shadow-2xl"
            >
              <h3 className="font-serif text-2xl font-bold text-mysuru-charcoal mb-4">
                Add Landmark to Day Trip
              </h3>
              <div className="space-y-3">
                {HERITAGE_SITES.map((site) => (
                  <div
                    key={site.id}
                    onClick={() => addStop(site)}
                    className="p-3.5 rounded-xl bg-mysuru-sand/40 border border-mysuru-border hover:border-mysuru-gold cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <img src={site.image} alt={site.name} className="w-12 h-12 rounded-lg object-cover" />
                      <div>
                        <div className="font-serif text-sm font-bold text-mysuru-charcoal group-hover:text-mysuru-gold">
                          {site.name}
                        </div>
                        <div className="text-[11px] text-mysuru-muted">{site.categoryLabel}</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-mysuru-gold group-hover:translate-x-0.5 transition-transform">
                      + Add
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Export Pass Modal */}
      <AnimatePresence>
        {showExportModal && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="fixed inset-0" onClick={() => setShowExportModal(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              className="relative w-full max-w-md bg-white border border-mysuru-border rounded-3xl p-6 sm:p-8 z-10 shadow-2xl text-center"
            >
              <div className="w-14 h-14 rounded-full border border-mysuru-border bg-mysuru-sand mx-auto mb-4 flex items-center justify-center text-xl text-mysuru-charcoal shadow-sm">
                👑
              </div>

              <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-mysuru-gold uppercase block mb-1">
                HERITAGE HUNT • DIGITAL ITINERARY PASS
              </span>
              <h3 className="font-serif text-2xl font-bold text-mysuru-charcoal mb-2">
                Mysuru Day Pass Generated
              </h3>
              <p className="text-xs text-mysuru-muted mb-6">
                Your custom itinerary with {itinerary.length} verified stops is ready.
              </p>

              <div className="p-4 rounded-2xl bg-mysuru-sand/60 border border-mysuru-border mb-6 text-left space-y-2 text-xs font-sans">
                <div className="flex justify-between text-mysuru-muted">
                  <span>Pass Type:</span>
                  <span className="text-mysuru-charcoal font-bold">Royal Explorer Pass</span>
                </div>
                <div className="flex justify-between text-mysuru-muted">
                  <span>Destination:</span>
                  <span className="text-mysuru-charcoal font-bold">Mysuru, Karnataka</span>
                </div>
                <div className="flex justify-between text-mysuru-muted">
                  <span>Pass Token:</span>
                  <span className="font-mono text-emerald-700 font-bold">#MYS-2026-HERITAGE</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowExportModal(false)}
                  className="flex-1 py-3 rounded-xl bg-mysuru-charcoal hover:bg-mysuru-gold text-white text-xs font-sans font-bold transition-all shadow-sm"
                >
                  Save Pass to Device
                </button>
                <button
                  onClick={() => setShowExportModal(false)}
                  className="px-5 py-3 rounded-xl border border-mysuru-border text-mysuru-charcoal text-xs font-sans hover:bg-mysuru-sand"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
