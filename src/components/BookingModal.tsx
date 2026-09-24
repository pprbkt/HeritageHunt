import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { Experience } from '../types';
import { royalAudio } from '../utils/audioSynthesizer';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  experience: Experience | null;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ experience, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('2026-10-04');
  const [guestCount, setGuestCount] = useState(2);
  const [isBooked, setIsBooked] = useState(false);
  const [ticketType, setTicketType] = useState<'standard' | 'royal_vip'>('standard');

  if (!experience) return null;

  const basePrice = experience.priceINR;
  const multiplier = ticketType === 'royal_vip' ? 1.6 : 1.0;
  const totalPrice = Math.round(basePrice * guestCount * multiplier);

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    royalAudio.playCelebrationChime();
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#B68D40', '#121316', '#10B981'],
    });
    setIsBooked(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-xl bg-white border border-mysuru-border rounded-3xl overflow-hidden shadow-2xl z-10 my-8"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-mysuru-sand hover:bg-mysuru-charcoal hover:text-white text-mysuru-charcoal transition-colors shadow-sm"
          >
            <X className="w-4 h-4" />
          </button>

          {!isBooked ? (
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-sans font-bold bg-mysuru-sand text-mysuru-charcoal border border-mysuru-border uppercase">
                  {experience.category}
                </span>
                <span className="text-xs text-mysuru-gold font-bold">★ {experience.rating}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-mysuru-charcoal mb-2">
                {experience.title}
              </h3>
              <p className="text-xs text-mysuru-muted font-sans mb-6">
                {experience.description}
              </p>

              <form onSubmit={handleConfirmBooking} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-sans font-bold text-mysuru-gold uppercase tracking-wider block mb-1.5">
                      Tour Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-mysuru-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-mysuru-sand/40 border border-mysuru-border text-xs text-mysuru-charcoal focus:outline-none focus:border-mysuru-gold"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-sans font-bold text-mysuru-gold uppercase tracking-wider block mb-1.5">
                      Guests
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-mysuru-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(Number(e.target.value))}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-mysuru-sand/40 border border-mysuru-border text-xs text-mysuru-charcoal focus:outline-none focus:border-mysuru-gold"
                      >
                        {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-sans font-bold text-mysuru-gold uppercase tracking-wider block mb-1.5">
                    Experience Tier
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <div
                      onClick={() => setTicketType('standard')}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        ticketType === 'standard'
                          ? 'border-mysuru-charcoal bg-mysuru-charcoal text-white'
                          : 'border-mysuru-border bg-mysuru-sand/30 text-mysuru-charcoal'
                      }`}
                    >
                      <div className="text-xs font-bold">Standard Pass</div>
                      <div className={`text-[10px] ${ticketType === 'standard' ? 'text-white/70' : 'text-mysuru-muted'}`}>Guided tour & entry</div>
                    </div>

                    <div
                      onClick={() => setTicketType('royal_vip')}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        ticketType === 'royal_vip'
                          ? 'border-mysuru-charcoal bg-mysuru-charcoal text-white'
                          : 'border-mysuru-border bg-mysuru-sand/30 text-mysuru-charcoal'
                      }`}
                    >
                      <div className="text-xs font-bold flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-mysuru-gold" /> Royal VIP Pass
                      </div>
                      <div className={`text-[10px] ${ticketType === 'royal_vip' ? 'text-white/70' : 'text-mysuru-muted'}`}>Audio kit + silk gift</div>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-mysuru-sand/50 border border-mysuru-border space-y-1.5">
                  <div className="text-[10px] font-bold text-mysuru-gold uppercase tracking-wider">
                    Included in Your Experience:
                  </div>
                  {experience.includes.map((inc, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-mysuru-charcoal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-mysuru-border flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-mysuru-muted uppercase font-semibold block font-sans">Total Demo Price</span>
                    <div className="font-serif text-2xl font-bold text-mysuru-charcoal">
                      ₹{totalPrice.toLocaleString()}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-3 rounded-xl bg-mysuru-charcoal hover:bg-mysuru-gold text-white font-sans font-bold text-xs tracking-wider uppercase transition-all shadow-md"
                  >
                    Confirm Booking →
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="p-8 text-center bg-white">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-600 text-emerald-600 flex items-center justify-center mx-auto mb-4 text-2xl shadow-sm">
                ✓
              </div>

              <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-emerald-700 uppercase block mb-1">
                RESERVATION CONFIRMED
              </span>
              <h3 className="font-serif text-2xl font-bold text-mysuru-charcoal mb-2">
                Your Tour Pass is Ready!
              </h3>
              <p className="text-xs text-mysuru-muted mb-6">
                Booking reference <strong className="text-mysuru-gold font-mono font-bold">#HH-MYS-{Math.floor(100000 + Math.random() * 900000)}</strong>
              </p>

              <div className="p-5 rounded-2xl bg-mysuru-sand/50 border border-mysuru-border text-left space-y-2.5 text-xs font-sans mb-6">
                <div className="flex justify-between border-b border-mysuru-borderLight pb-2">
                  <span className="text-mysuru-muted">Experience:</span>
                  <span className="text-mysuru-charcoal font-bold truncate max-w-[200px]">{experience.title}</span>
                </div>
                <div className="flex justify-between border-b border-mysuru-borderLight pb-2">
                  <span className="text-mysuru-muted">Date & Slot:</span>
                  <span className="text-mysuru-charcoal font-medium">{selectedDate} • {experience.timeSlot}</span>
                </div>
                <div className="flex justify-between border-b border-mysuru-borderLight pb-2">
                  <span className="text-mysuru-muted">Meeting Point:</span>
                  <span className="text-mysuru-charcoal">{experience.meetingPoint}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-mysuru-muted">Guests / Tier:</span>
                  <span className="text-emerald-700 font-bold">{guestCount} Guests • {ticketType.toUpperCase()}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl bg-mysuru-charcoal hover:bg-mysuru-gold text-white text-xs font-sans font-bold transition-all shadow-sm"
              >
                Close & Return
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
