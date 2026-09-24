import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation, Car, Footprints, Clock, ArrowRight, Compass } from 'lucide-react';
import { HERITAGE_SITES } from '../data/heritageData';
import { royalAudio } from '../utils/audioSynthesizer';

export const DistanceExplorer: React.FC = () => {
  const [fromSiteId, setFromSiteId] = useState('user-location');
  const [toSiteId, setToSiteId] = useState('mysuru-palace');
  const [travelMode, setTravelMode] = useState<'driving' | 'walking'>('driving');

  const locations: Record<string, { name: string; x: number; y: number; type: string }> = {
    'user-location': { name: 'Your Location (Mysuru City)', x: 20, y: 50, type: 'live' },
    'mysuru-palace': { name: 'Mysuru Palace (Amba Vilas)', x: 50, y: 50, type: 'palace' },
    'chamundi-hill': { name: 'Chamundi Hill & Temple', x: 80, y: 80, type: 'hill' },
    'devaraja-market': { name: 'Devaraja Market', x: 48, y: 35, type: 'market' },
    'jaganmohan-palace': { name: 'Jaganmohan Art Gallery', x: 44, y: 45, type: 'art' },
    'st-philomenas-cathedral': { name: "St. Philomena's Cathedral", x: 55, y: 20, type: 'church' },
    'railway-museum': { name: 'Mysuru Railway Museum', x: 35, y: 28, type: 'museum' },
  };

  const calculateMetrics = () => {
    if (fromSiteId === toSiteId) return { dist: '0.0 km', driveTime: '0 min', walkTime: '0 min', cal: '0 kcal' };

    let distKm = 3.2;
    if (fromSiteId === 'user-location' && toSiteId === 'mysuru-palace') distKm = 3.2;
    else if (fromSiteId === 'mysuru-palace' && toSiteId === 'devaraja-market') distKm = 1.4;
    else if (fromSiteId === 'mysuru-palace' && toSiteId === 'chamundi-hill') distKm = 12.0;
    else if (fromSiteId === 'devaraja-market' && toSiteId === 'st-philomenas-cathedral') distKm = 1.6;
    else if (toSiteId === 'chamundi-hill') distKm = 11.5;
    else distKm = 2.4;

    const driveMins = Math.max(3, Math.round(distKm * 2.8));
    const walkMins = Math.round(distKm * 13);
    const calories = Math.round(distKm * 65);

    return {
      dist: `${distKm.toFixed(1)} km`,
      driveTime: `${driveMins} min`,
      walkTime: `${walkMins} min`,
      cal: `${calories} kcal`,
    };
  };

  const metrics = calculateMetrics();

  return (
    <section className="py-24 sm:py-32 bg-mysuru-bg relative overflow-hidden border-b border-mysuru-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-[11px] font-sans font-bold text-mysuru-gold tracking-[0.25em] uppercase mb-2">
            LOCATION & ROUTE MATRIX
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-mysuru-charcoal tracking-tight">
            HOW FAR IS YOUR NEXT DISCOVERY?
          </h2>
          <p className="font-sans text-sm sm:text-base text-mysuru-muted mt-2">
            Calculate instant distances, travel durations, and transit corridors across Mysuru heritage sites.
          </p>
        </div>

        {/* Route Calculator Box */}
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden bg-white border border-mysuru-border p-6 sm:p-10 shadow-luxury">
          {/* Origin & Destination */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 rounded-2xl bg-mysuru-sand/50 border border-mysuru-border">
              <label className="text-[10px] font-sans font-bold text-mysuru-gold uppercase tracking-wider block mb-2">
                Origin / Start Location
              </label>
              <select
                value={fromSiteId}
                onChange={(e) => {
                  royalAudio.playTempleChime(700);
                  setFromSiteId(e.target.value);
                }}
                className="w-full bg-white border border-mysuru-border rounded-xl px-4 py-2.5 text-xs text-mysuru-charcoal focus:outline-none focus:border-mysuru-gold shadow-sm"
              >
                <option value="user-location">📍 Your Location (Mysuru City)</option>
                <option value="mysuru-palace">👑 Mysuru Palace (Amba Vilas)</option>
                <option value="devaraja-market">🌸 Devaraja Market</option>
                <option value="jaganmohan-palace">🎨 Jaganmohan Art Gallery</option>
                <option value="chamundi-hill">⛰️ Chamundi Hill Foothills</option>
              </select>
            </div>

            <div className="p-4 rounded-2xl bg-mysuru-sand/50 border border-mysuru-border">
              <label className="text-[10px] font-sans font-bold text-mysuru-gold uppercase tracking-wider block mb-2">
                Destination Landmark
              </label>
              <select
                value={toSiteId}
                onChange={(e) => {
                  royalAudio.playTempleChime(880);
                  setToSiteId(e.target.value);
                }}
                className="w-full bg-white border border-mysuru-border rounded-xl px-4 py-2.5 text-xs text-mysuru-charcoal focus:outline-none focus:border-mysuru-gold shadow-sm"
              >
                {HERITAGE_SITES.map((site) => (
                  <option key={site.id} value={site.id}>
                    {site.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <button
              onClick={() => {
                royalAudio.playTempleChime(750);
                setTravelMode('driving');
              }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-sans font-semibold transition-all border ${
                travelMode === 'driving'
                  ? 'bg-mysuru-charcoal border-mysuru-charcoal text-white shadow-sm'
                  : 'bg-mysuru-sand border-mysuru-border text-mysuru-muted hover:text-mysuru-charcoal'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>Driving / Auto-Rickshaw</span>
            </button>

            <button
              onClick={() => {
                royalAudio.playTempleChime(850);
                setTravelMode('walking');
              }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-sans font-semibold transition-all border ${
                travelMode === 'walking'
                  ? 'bg-mysuru-charcoal border-mysuru-charcoal text-white shadow-sm'
                  : 'bg-mysuru-sand border-mysuru-border text-mysuru-muted hover:text-mysuru-charcoal'
              }`}
            >
              <Footprints className="w-4 h-4" />
              <span>Heritage Walk</span>
            </button>
          </div>

          {/* Route Visualizer */}
          <div className="p-6 rounded-2xl bg-mysuru-sand/50 border border-mysuru-border mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-9 h-9 rounded-full bg-mysuru-charcoal text-white flex items-center justify-center font-bold text-xs">
                  A
                </div>
                <div>
                  <div className="text-[10px] font-sans text-mysuru-muted uppercase font-semibold">Origin</div>
                  <div className="text-sm font-bold text-mysuru-charcoal">{locations[fromSiteId]?.name}</div>
                </div>
              </div>

              {/* Progress Line */}
              <div className="flex-1 w-full sm:w-auto flex flex-col items-center px-4">
                <div className="flex items-center gap-2 text-mysuru-gold text-xs font-bold mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{travelMode === 'driving' ? metrics.driveTime : metrics.walkTime}</span>
                  <span>•</span>
                  <span>{metrics.dist}</span>
                </div>
                
                <div className="w-full h-1 bg-mysuru-border rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-mysuru-gold rounded-full"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    style={{ width: '40%' }}
                  />
                </div>
                <span className="text-[10px] text-mysuru-muted mt-1 uppercase font-sans font-medium">
                  Via Sayyaji Rao Corridor
                </span>
              </div>

              <div className="flex items-center gap-3 text-center sm:text-right">
                <div>
                  <div className="text-[10px] font-sans text-mysuru-muted uppercase font-semibold">Destination</div>
                  <div className="text-sm font-bold text-mysuru-charcoal">{locations[toSiteId]?.name}</div>
                </div>
                <div className="w-9 h-9 rounded-full bg-mysuru-gold text-white flex items-center justify-center font-bold text-xs">
                  B
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3.5 rounded-xl bg-mysuru-sand/40 border border-mysuru-borderLight">
              <span className="text-[10px] font-sans text-mysuru-muted uppercase font-semibold block">Distance</span>
              <span className="font-serif text-xl font-bold text-mysuru-charcoal">{metrics.dist}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-mysuru-sand/40 border border-mysuru-borderLight">
              <span className="text-[10px] font-sans text-mysuru-muted uppercase font-semibold block">Travel Time</span>
              <span className="font-serif text-xl font-bold text-mysuru-gold">
                {travelMode === 'driving' ? metrics.driveTime : metrics.walkTime}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-mysuru-sand/40 border border-mysuru-borderLight">
              <span className="text-[10px] font-sans text-mysuru-muted uppercase font-semibold block">Energy</span>
              <span className="font-serif text-xl font-bold text-emerald-700">{metrics.cal}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-mysuru-sand/40 border border-mysuru-borderLight">
              <span className="text-[10px] font-sans text-mysuru-muted uppercase font-semibold block">Transit Mode</span>
              <span className="font-serif text-xl font-bold text-mysuru-charcoal">Clean Eco</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
