import { useState } from 'react';
import { Utensils, Calendar, Clock, Users, CheckCircle2, ChevronRight, PhoneCall } from 'lucide-react';

export default function RestaurantPreview() {
  const [selectedZone, setSelectedZone] = useState<'rooftop' | 'main'>('rooftop');
  const [guestCount, setGuestCount] = useState<number>(2);
  const [selectedTime, setSelectedTime] = useState<string>('7:30 PM');
  const [reserved, setReserved] = useState(false);

  const menuItems = [
    { name: 'Pan-Seared Atlantic Snapper', cat: 'Mains', price: '₦18,500', note: 'Yam purée & smoked chili oil' },
    { name: 'Suya Glazed Lamb Chops', cat: 'Chef Pick', price: '₦24,000', note: 'Truffle mashed potatoes' },
    { name: 'Zobo Sangria & Citrus Mist', cat: 'Cocktails', price: '₦8,500', note: 'House botanicals' },
  ];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setReserved(true);
    setTimeout(() => setReserved(false), 3500);
  };

  return (
    <div className="w-full h-full bg-slate-950 p-4 sm:p-5 flex flex-col justify-between font-sans select-none">
      {/* Top simulated bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Utensils className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="font-bold text-white tracking-tight">ELEMENTS BISTRO</span>
            <span className="text-[10px] text-amber-400/90 block font-mono">VICTORIA ISLAND, LAGOS</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Live Bookings Active</span>
        </div>
      </div>

      {/* Middle Interactive Section */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 py-3">
        {/* Menu Column */}
        <div className="sm:col-span-6 space-y-2">
          <div className="flex items-center justify-between text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
            <span>Signature Menu</span>
            <span className="text-amber-400">Autumn 2026</span>
          </div>
          <div className="space-y-1.5">
            {menuItems.map((item, idx) => (
              <div key={idx} className="p-2 rounded-lg bg-slate-900/90 border border-slate-800/80 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-200">{item.name}</span>
                  <span className="font-mono text-amber-400 font-bold">{item.price}</span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 mt-0.5">
                  <span>{item.note}</span>
                  <span className="text-slate-500">{item.cat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Reservation Widget */}
        <div className="sm:col-span-6 bg-slate-900/80 rounded-xl p-3 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="text-[11px] font-bold text-slate-200 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Instant VIP Table Booking</span>
              <span className="text-[10px] text-emerald-400 font-mono">WhatsApp Sync</span>
            </div>

            {/* Zone Selector */}
            <div className="grid grid-cols-2 gap-1.5 mb-2.5">
              <button
                type="button"
                onClick={() => setSelectedZone('rooftop')}
                className={`py-1 px-2 rounded-md text-[11px] font-medium transition-all ${
                  selectedZone === 'rooftop'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-800/70 text-slate-300 hover:text-white'
                }`}
              >
                Rooftop Lounge
              </button>
              <button
                type="button"
                onClick={() => setSelectedZone('main')}
                className={`py-1 px-2 rounded-md text-[11px] font-medium transition-all ${
                  selectedZone === 'main'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-800/70 text-slate-300 hover:text-white'
                }`}
              >
                Main Dining Room
              </button>
            </div>

            {/* Guests & Time */}
            <div className="grid grid-cols-2 gap-2 text-[11px] mb-2.5">
              <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-500 flex items-center gap-1">
                  <Users className="w-2.5 h-2.5" /> Guests:
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  {[2, 4, 6].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setGuestCount(count)}
                      className={`w-6 h-5 rounded text-[10px] font-mono font-bold ${
                        guestCount === count ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-500 flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5" /> Time:
                </span>
                <div className="flex items-center gap-1 mt-1">
                  {['7:00 PM', '8:30 PM'].map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`px-1.5 h-5 rounded text-[10px] font-mono ${
                        selectedTime === time ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleBook}
            className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95"
          >
            {reserved ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-950" />
                <span>Reserved! WhatsApp Confirmed</span>
              </>
            ) : (
              <>
                <span>Confirm {guestCount} Guests · {selectedTime}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Footer speed badge */}
      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500 font-mono">
        <span className="flex items-center gap-1 text-slate-400">
          <PhoneCall className="w-3 h-3 text-amber-400" /> Auto-synced to Manager Phone
        </span>
        <span className="text-emerald-400 font-bold">Load Speed: 0.35s (0KB Images)</span>
      </div>
    </div>
  );
}
