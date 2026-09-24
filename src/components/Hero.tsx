import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Pause } from 'lucide-react';
import { royalAudio } from '../utils/audioSynthesizer';

interface HeroProps {
  onPlanClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPlanClick, onExploreClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().then(() => {
        setIsVideoReady(true);
      }).catch(() => {
        // Autoplay prevented or codec issue - fallback image remains visible
      });
    }
  }, []);

  return (
    <section className="relative h-[82vh] min-h-[640px] max-h-[880px] w-full overflow-hidden bg-black flex items-end">
      {/* Full-bleed Cinematic Hero Video & Fallback Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        {/* Layer 1: Instant High-Res Fallback Image (Always Visible immediately) */}
        <img
          src="/assets/images/hero/hero_mysuru_palace_night.jpg"
          alt="Mysuru Palace Illuminated"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.88]"
        />

        {/* Layer 2: Video Overlay (Smoothly fades in when browser plays video) */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoReady(true)}
          onPlaying={() => setIsVideoReady(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.85] transition-opacity duration-1000 ${
            isVideoReady ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/assets/videos/hero_mysuru_palace_cinematic.mp4" type="video/mp4" />
        </video>

        {/* Fallback & Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        {/* Left: Giant ROM-Style Condensed Typography */}
        <div className="text-white select-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-amber-300 block mb-1">
              MYSURU • KARNATAKA • INDIA
            </span>
            <h1 className="font-bebas text-7xl sm:text-9xl md:text-[13rem] leading-[0.82] tracking-tighter text-white drop-shadow-2xl">
              MYSURU
            </h1>
          </motion.div>
        </div>

        {/* Right: White Floating ROM Overlay Card (00:00 - 00:05 in video) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-6 sm:p-8 max-w-md rounded-none shadow-2xl border-l-4 border-black"
        >
          <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-rom-gray uppercase block mb-1">
            EXPLORE THE ROYAL CITY
          </span>
          <h2 className="font-bebas text-3xl sm:text-4xl text-black tracking-tight leading-none mb-3">
            WELCOME TO MYSURU
          </h2>
          <p className="text-xs sm:text-sm text-rom-gray font-sans leading-relaxed mb-6 font-normal">
            Karnataka's premier heritage destination, home to centuries of Wadiyar royal art, sacred guardian hills, fragrant heirloom markets, and timeless monuments.
          </p>

          <button
            onClick={() => {
              royalAudio.playTempleChime(880);
              onPlanClick();
            }}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-black hover:bg-rom-gold text-white font-sans font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 group shadow-md"
            data-cursor="explore"
            data-cursor-text="VISIT"
          >
            <span>Plan Your Visit</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Media Play/Pause Controls (Bottom Right corner) */}
      <button
        onClick={toggleVideo}
        className="absolute bottom-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white text-xs backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center transition-all"
        title={isPlaying ? 'Pause Video' : 'Play Video'}
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
      </button>
    </section>
  );
};
