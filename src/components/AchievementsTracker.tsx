import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Footprints, BookOpen, Sparkles, Flame, Trophy, CheckCircle2, Lock } from 'lucide-react';
import { INITIAL_ACHIEVEMENTS } from '../data/itineraryData';
import { royalAudio } from '../utils/audioSynthesizer';
import confetti from 'canvas-confetti';

export const AchievementsTracker: React.FC = () => {
  const [achievements, setAchievements] = useState(INITIAL_ACHIEVEMENTS);
  const [discoveredCount, setDiscoveredCount] = useState(7);
  const totalMonuments = 20;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown': return <Crown className="w-5 h-5" />;
      case 'Footprints': return <Footprints className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      default: return <Trophy className="w-5 h-5" />;
    }
  };

  const handleUnlockBadge = (id: string) => {
    royalAudio.playCelebrationChime();
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#B68D40', '#121316', '#10B981'],
    });

    setAchievements(
      achievements.map((ach) =>
        ach.id === id ? { ...ach, unlocked: true, progress: ach.total } : ach
      )
    );
    setDiscoveredCount((prev) => Math.min(totalMonuments, prev + 1));
  };

  const progressPercentage = Math.round((discoveredCount / totalMonuments) * 100);

  return (
    <section className="py-24 sm:py-32 bg-mysuru-bg relative overflow-hidden border-b border-mysuru-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-[11px] font-sans font-bold text-mysuru-gold tracking-[0.25em] uppercase mb-2">
            HERITAGE PASSPORT & GAMIFICATION
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-mysuru-charcoal tracking-tight">
            HOW MUCH OF MYSURU HAVE YOU DISCOVERED?
          </h2>
          <p className="font-sans text-sm sm:text-base text-mysuru-muted mt-2">
            Check into authentic Mysuru landmarks, listen to audio guides, and earn certified explorer badges.
          </p>
        </div>

        {/* Big Gamification Hub */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-mysuru-border mb-12 shadow-luxury">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <div className="flex items-center gap-5">
              <div className="w-18 h-18 rounded-2xl bg-mysuru-sand border border-mysuru-border flex flex-col items-center justify-center text-mysuru-charcoal shadow-sm p-3">
                <Crown className="w-7 h-7 text-mysuru-gold mb-1" />
                <span className="text-[9px] font-sans font-bold uppercase tracking-wider">LEVEL 2</span>
              </div>

              <div>
                <span className="text-[10px] font-sans font-bold text-mysuru-gold uppercase tracking-wider block">
                  Status: Royal Heritage Wanderer
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-mysuru-charcoal">
                  {discoveredCount} / {totalMonuments} Heritage Sites Visited
                </h3>
              </div>
            </div>

            <div className="text-center md:text-right">
              <span className="font-serif text-4xl font-extrabold text-mysuru-charcoal block">
                {progressPercentage}%
              </span>
              <span className="text-xs text-mysuru-muted font-sans">
                {totalMonuments - discoveredCount} more sites to Master Mysurean
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 bg-mysuru-sand rounded-full overflow-hidden border border-mysuru-border p-[1px]">
            <motion.div
              className="h-full bg-mysuru-gold rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {achievements.map((ach) => (
            <motion.div
              key={ach.id}
              whileHover={{ y: -3 }}
              className={`rounded-2xl p-5 border flex flex-col justify-between transition-all ${
                ach.unlocked
                  ? 'bg-white border-mysuru-border shadow-sm'
                  : 'bg-white/60 border-mysuru-borderLight opacity-70'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-mysuru-sand border border-mysuru-border text-mysuru-charcoal">
                    {getIcon(ach.icon)}
                  </div>
                  {ach.unlocked ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Lock className="w-4 h-4 text-mysuru-muted" />
                  )}
                </div>

                <h4 className="font-serif text-base font-bold text-mysuru-charcoal mb-1">
                  {ach.title}
                </h4>
                <p className="text-[11px] font-sans text-mysuru-muted leading-relaxed mb-4 font-light">
                  {ach.description}
                </p>
              </div>

              <div>
                <div className="flex justify-between text-[10px] text-mysuru-muted mb-1 font-sans">
                  <span>Progress</span>
                  <span className="text-mysuru-charcoal font-bold">
                    {ach.progress} / {ach.total}
                  </span>
                </div>
                {!ach.unlocked && (
                  <button
                    onClick={() => handleUnlockBadge(ach.id)}
                    className="w-full mt-2 py-1.5 rounded-lg bg-mysuru-sand hover:bg-mysuru-charcoal text-[10px] font-sans font-bold text-mysuru-charcoal hover:text-white border border-mysuru-border transition-all"
                  >
                    Simulate Unlock →
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
