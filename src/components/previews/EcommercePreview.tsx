import { useState } from 'react';
import { ShoppingBag, CreditCard, ShieldCheck, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';

export default function EcommercePreview() {
  const [selectedVariant, setSelectedVariant] = useState<'alabaster' | 'obsidian' | 'terracotta'>('alabaster');
  const [paid, setPaid] = useState(false);

  const variants = {
    alabaster: { name: 'Alabaster Minimalist Ceramic Vase', price: '₦48,000', colorClass: 'bg-stone-200 text-stone-900' },
    obsidian: { name: 'Obsidian Matte Ribbed Vessel', price: '₦54,000', colorClass: 'bg-stone-900 text-stone-100' },
    terracotta: { name: 'Raw Terracotta Sculptural Pitcher', price: '₦42,000', colorClass: 'bg-amber-800 text-amber-100' },
  };

  const current = variants[selectedVariant];

  const handleCheckout = () => {
    setPaid(true);
    setTimeout(() => setPaid(false), 3500);
  };

  return (
    <div className="w-full h-full bg-slate-950 p-4 sm:p-5 flex flex-col justify-between font-sans select-none">
      {/* Top eCommerce bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <ShoppingBag className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="font-bold text-white tracking-tight">AURA LIVING CO.</span>
            <span className="text-[10px] text-emerald-400/90 block font-mono">LEKKI PHASE 1, LAGOS</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono">
          <CreditCard className="w-3 h-3 text-emerald-400" />
          <span>Paystack 24/7 Gateway</span>
        </div>
      </div>

      {/* Middle Interactive Product & Checkout */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 py-3">
        {/* Vector Product Showcase Card */}
        <div className="sm:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-xl p-3 border border-slate-800 flex flex-col items-center justify-center text-center relative overflow-hidden">
          {/* Stylized vector geometry art representing artisanal vase */}
          <div className="relative my-2 w-20 h-24 flex items-center justify-center">
            <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-xl animate-pulse" />
            <svg viewBox="0 0 100 120" className="w-16 h-20 text-emerald-400/80 drop-shadow-md">
              <path
                d="M35 10 L65 10 C60 30, 80 50, 75 80 C70 105, 30 105, 25 80 C20 50, 40 30, 35 10 Z"
                fill="currentColor"
                opacity="0.25"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <ellipse cx="50" cy="10" rx="15" ry="4" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M40 45 C45 55, 55 55, 60 45" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
              <path d="M32 75 C42 85, 58 85, 68 75" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
            </svg>
          </div>

          <div className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">
            Handmade Ceramic Collection
          </div>
          <div className="text-xs font-bold text-white mt-1">100% Artisan Glazed</div>
        </div>

        {/* Product Variant & Live Checkout */}
        <div className="sm:col-span-7 bg-slate-900/80 rounded-xl p-3 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-white truncate max-w-[140px]">{current.name}</span>
              <span className="text-xs font-mono font-bold text-emerald-400">{current.price}</span>
            </div>
            <div className="text-[10px] text-slate-400 mb-2.5">
              Instant delivery to Lagos (24h) & Nationwide (48h).
            </div>

            {/* Finish Selector */}
            <div className="mb-3">
              <span className="text-[10px] font-mono text-slate-400 block mb-1">Select Ceramic Finish:</span>
              <div className="grid grid-cols-3 gap-1.5">
                {(['alabaster', 'obsidian', 'terracotta'] as const).map((variantKey) => (
                  <button
                    key={variantKey}
                    type="button"
                    onClick={() => setSelectedVariant(variantKey)}
                    className={`p-1.5 rounded-md text-[10px] font-medium capitalize text-center border transition-all ${
                      selectedVariant === variantKey
                        ? 'bg-emerald-500/20 border-emerald-500 text-white font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {variantKey}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-1.5 rounded-lg bg-slate-950/70 border border-slate-800 text-[10px] text-slate-400 flex items-center justify-between mb-2">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> Paystack Secured
              </span>
              <span className="flex items-center gap-1 text-emerald-400">
                <MessageSquare className="w-3 h-3" /> Auto WhatsApp Receipt
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCheckout}
            className="w-full py-2 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95"
          >
            {paid ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-950" />
                <span>₦{current.price} Paid! Order Sent to WhatsApp</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                <span>Instant 1-Click Checkout ({current.price})</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Footer speed badge */}
      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500 font-mono">
        <span className="text-slate-400">Zero "DM for Price" Friction</span>
        <span className="text-emerald-400 font-bold">Page Weight: 28KB (Zero Photos)</span>
      </div>
    </div>
  );
}
