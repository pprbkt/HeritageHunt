import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Star, ArrowRight, Layers } from 'lucide-react';
import L from 'leaflet';
import { HeritageSite } from '../types';
import { royalAudio } from '../utils/audioSynthesizer';

interface MysuruMapProps {
  sites: HeritageSite[];
  onSelectSite: (site: HeritageSite) => void;
}

export const MysuruMap: React.FC<MysuruMapProps> = ({ sites, onSelectSite }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});

  const [activeSite, setActiveSite] = useState<HeritageSite>(sites[0]);
  const [mapMode, setMapMode] = useState<'carto' | 'topo'>('carto');

  // Tile layer URLs (Free, no API key required)
  const cartoUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}';
  const topoUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const tileLayerRef = useRef<L.TileLayer | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return; // Initialize only once

    // Mysuru City Center Coordinates
    const map = L.map(mapContainerRef.current, {
      center: [12.3051, 76.6551],
      zoom: 13,
      zoomControl: false,
      scrollWheelZoom: false,
    });

    // Add Zoom Control to Top Right
    L.control.zoom({ position: 'topright' }).addTo(map);

    // Initial Tile Layer
    const tileLayer = L.tileLayer(cartoUrl, {
      maxZoom: 19,
      attribution: '&copy; Esri, OpenStreetMap contributors',
    }).addTo(map);

    tileLayerRef.current = tileLayer;
    mapInstanceRef.current = map;

    // Add Markers
    sites.forEach((site) => {
      const isInitial = site.id === sites[0].id;
      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker',
        html: `
          <div class="relative group cursor-pointer">
            <div class="w-8 h-8 rounded-full ${isInitial ? 'bg-black text-amber-400 border-2 border-amber-400 shadow-lg scale-110' : 'bg-white text-black border border-neutral-300 shadow-md hover:scale-110'} flex items-center justify-center transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </div>
            <div class="absolute top-full mt-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-bold tracking-wide whitespace-nowrap ${isInitial ? 'bg-black text-white border border-amber-400' : 'bg-white text-black border border-neutral-200 shadow'}">
              ${site.name.split(' ')[0]}
            </div>
          </div>
        `,
        iconSize: [32, 45],
        iconAnchor: [16, 16],
      });

      const marker = L.marker([site.coordinates.lat, site.coordinates.lng], { icon: customIcon }).addTo(map);

      marker.on('click', () => {
        royalAudio.playTempleChime(920);
        setActiveSite(site);
        map.flyTo([site.coordinates.lat, site.coordinates.lng], 14, { duration: 1.2 });
      });

      markersRef.current[site.id] = marker;
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [sites]);

  // Handle layer switch
  useEffect(() => {
    if (!mapInstanceRef.current || !tileLayerRef.current) return;
    mapInstanceRef.current.removeLayer(tileLayerRef.current);
    const newUrl = mapMode === 'carto' ? cartoUrl : topoUrl;
    const newLayer = L.tileLayer(newUrl, {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(mapInstanceRef.current);
    tileLayerRef.current = newLayer;
  }, [mapMode]);

  // Handle active marker visual state update
  useEffect(() => {
    if (!activeSite) return;
    sites.forEach((site) => {
      const marker = markersRef.current[site.id];
      if (!marker) return;
      const isSelected = site.id === activeSite.id;
      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker',
        html: `
          <div class="relative group cursor-pointer">
            <div class="w-8 h-8 rounded-full ${isSelected ? 'bg-black text-amber-400 border-2 border-amber-400 shadow-xl scale-125 z-50' : 'bg-white text-black border border-neutral-300 shadow-md hover:scale-110'} flex items-center justify-center transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </div>
            <div class="absolute top-full mt-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-bold tracking-wide whitespace-nowrap ${isSelected ? 'bg-black text-white border border-amber-400 z-50' : 'bg-white text-black border border-neutral-200 shadow'}">
              ${site.name.split(' ')[0]}
            </div>
          </div>
        `,
        iconSize: [32, 45],
        iconAnchor: [16, 16],
      });
      marker.setIcon(customIcon);
    });
  }, [activeSite, sites]);

  return (
    <section id="interactive-map" className="py-20 bg-neutral-50 relative overflow-hidden border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-2">
            URBAN HERITAGE MAP
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-black tracking-tight uppercase">
            Mysuru, On The Map
          </h2>
          <p className="font-sans text-sm sm:text-base text-neutral-600 mt-2">
            Explore the real geographic coordinates of Mysuru's royal palaces, sacred hills, and heritage gardens using interactive map tiles.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-2xl overflow-hidden border border-neutral-300 shadow-2xl bg-neutral-100">
          {/* Top Map Bar */}
          <div className="absolute top-4 left-4 right-16 z-[1000] flex flex-wrap items-center justify-between gap-3 pointer-events-none">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200 text-xs font-sans text-black pointer-events-auto shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-black uppercase tracking-wider">MYSURU HERITAGE ZONE</span>
              <span className="text-neutral-500 text-[11px]">| 12.3051° N, 76.6551° E</span>
            </div>

            <div className="flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200 p-1 pointer-events-auto shadow-sm">
              <button
                onClick={() => setMapMode('carto')}
                className={`px-3 py-1 rounded-full text-xs font-sans font-semibold transition-all ${
                  mapMode === 'carto' ? 'bg-black text-white' : 'text-neutral-600 hover:text-black'
                }`}
              >
                Street Map
              </button>
              <button
                onClick={() => setMapMode('topo')}
                className={`px-3 py-1 rounded-full text-xs font-sans font-semibold transition-all ${
                  mapMode === 'topo' ? 'bg-black text-white' : 'text-neutral-600 hover:text-black'
                }`}
              >
                Topographic
              </button>
            </div>
          </div>

          {/* Leaflet Map Div */}
          <div ref={mapContainerRef} className="w-full h-[520px] z-0" />

          {/* Floating Preview Card */}
          <AnimatePresence>
            {activeSite && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-[1000] bg-white/95 backdrop-blur-md rounded-xl p-4 border border-neutral-200 shadow-2xl"
              >
                <div className="flex gap-4 items-start">
                  <img
                    src={activeSite.image}
                    alt={activeSite.name}
                    className="w-20 h-20 rounded-lg object-cover border border-neutral-200 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] font-mono font-bold uppercase text-amber-700 tracking-wider">
                        {activeSite.categoryLabel}
                      </span>
                      <div className="flex items-center text-xs text-amber-600 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 mr-0.5" />
                        {activeSite.rating}
                      </div>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-black truncate mt-0.5">
                      {activeSite.name}
                    </h3>
                    <p className="text-xs font-sans text-neutral-600 line-clamp-1 mt-0.5">
                      {activeSite.tagline}
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 font-sans mt-2">
                      <Navigation className="w-3 h-3 text-amber-600" />
                      <span>
                        {activeSite.distanceFromCenterKm === 0
                          ? 'City Center (KM 0)'
                          : `${activeSite.distanceFromCenterKm} km from Center`}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-neutral-200">
                  <button
                    onClick={() => onSelectSite(activeSite)}
                    className="flex-1 py-2 px-3 rounded-lg bg-black hover:bg-neutral-800 text-white text-xs font-sans font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm uppercase tracking-wider"
                  >
                    <span>View Site Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={`https://maps.google.com/?q=${activeSite.coordinates.lat},${activeSite.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-lg border border-neutral-300 hover:border-black text-black text-xs font-sans font-medium flex items-center justify-center gap-1"
                  >
                    <span>Google Maps</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

