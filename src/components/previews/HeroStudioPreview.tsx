import { useState } from 'react';
import { Gauge, Smartphone, Monitor, ShieldCheck, Zap, Sparkles, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function HeroStudioPreview() {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile' | 'audit'>('desktop');
  const [simulatedLeadSent, setSimulatedLeadSent] = useState(false);

  const handleTestDispatch = () => {
    setSimulatedLeadSent(true);
    setTimeout(() => setSimulatedLeadSent(false), 3000);
  };

  return (
    <div className="w-full rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-sm">
      {/* Browser Bar */}
      <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        {/* Window controls & URL */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-500">https://</span>
            <span className="text-white font-medium">yourbrand.com.ng</span>
            <span className="text-emerald-400 text-[10px] ml-1">· 100% SSL Verified</span>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium">
          <button
            type="button"
            onClick={() => setViewMode('desktop')}
            className={`px-2.5 py-1 rounded-md flex items-center gap-1.5 transition-all ${
              viewMode === 'desktop'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Monitor className="w-3 h-3" />
            <span className="hidden sm:inline">Desktop</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('mobile')}
            className={`px-2.5 py-1 rounded-md flex items-center gap-1.5 transition-all ${
              viewMode === 'mobile'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Smartphone className="w-3 h-3" />
            <span className="hidden sm:inline">Mobile 4G</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('audit')}
            className={`px-2.5 py-1 rounded-md flex items-center gap-1.5 transition-all ${
              viewMode === 'audit'
                ? 'bg-emerald-600 text-white shadow-sm font-semibold'
                : 'text-emerald-400 hover:text-emerald-300'
            }`}
          >
            <Gauge className="w-3 h-3" />
            <span>Speed Audit</span>
          </button>
        </div>
      </div>

      {/* Main View Area */}
      <div className="p-4 sm:p-6 min-h-[380px] flex flex-col justify-between">
        {viewMode === 'desktop' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            {/* Simulated Desktop Header */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center font-bold text-indigo-400 text-xs">
                  YB
                </div>
                <div>
                  <div className="text-xs font-bold text-white tracking-wide">Your Brand Nigeria</div>
                  <div className="text-[10px] text-slate-400 font-mono">Premium Services & Products</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300 font-medium">
                <span className="text-emerald-400 flex items-center gap-1 font-mono text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Fast Booking Active
                </span>
                <span className="hidden md:inline px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
                  Lagos · Abuja · Port Harcourt
                </span>
              </div>
            </div>

            {/* Simulated Desktop Hero Body */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 border border-slate-800">
              <div className="md:col-span-7 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-[11px] font-mono">
                  <Zap className="w-3 h-3 text-indigo-400" />
                  <span>Sub-0.4s Instant Load Time</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                  Experience Seamless Booking & Instant Paystack Checkout.
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Engineered with zero picture overhead so your Nigerian clients never stare at a blank loading screen on 3G or 4G data.
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleTestDispatch}
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-md"
                  >
                    {simulatedLeadSent ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Lead Dispatched in 0.12s!</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Test WhatsApp Lead Dispatch</span>
                      </>
                    )}
                  </button>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {simulatedLeadSent ? '✓ Verified on MTN & Airtel' : 'Click to test instant response'}
                  </span>
                </div>
              </div>

              {/* Vector Interactive Metrics Card */}
              <div className="md:col-span-5 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2.5">
                <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                  <span>Live Site Diagnostics</span>
                  <span className="text-emerald-400 font-mono text-[10px]">Optimal</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">First Contentful Paint</span>
                    <span className="font-mono font-bold text-emerald-400">0.38s</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">Image Bandwidth Saved</span>
                    <span className="font-mono font-bold text-indigo-400">4.8 MB (100%)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-400">Cumulative Layout Shift</span>
                    <span className="font-mono font-bold text-emerald-400">0.00 (Zero Shift)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {viewMode === 'mobile' && (
          <div className="max-w-xs mx-auto w-full p-4 rounded-2xl bg-slate-950 border-2 border-slate-700 shadow-xl space-y-3 animate-in fade-in duration-200">
            {/* Mobile Top Status */}
            <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono border-b border-slate-800 pb-2">
              <span className="font-bold text-white">9:41 AM</span>
              <span className="text-emerald-400 font-semibold">MTN 4G · 100%</span>
            </div>

            {/* Mobile Site Header */}
            <div className="flex items-center justify-between">
              <div className="font-bold text-white text-xs tracking-tight">YourBrand.ng</div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                Instant 0.38s
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-indigo-600/20 border border-indigo-500/40 text-indigo-400 flex items-center justify-center mx-auto">
                <Sparkles className="w-5 h-5" />
              </div>
              <h5 className="text-xs font-bold text-white leading-snug">
                Zero Heavy Images. 100% Instant Engagement.
              </h5>
              <p className="text-[10px] text-slate-400">
                Nigerian clients on limited data plans bounce if a website takes &gt; 3 seconds. Our sites load in under 0.5 seconds.
              </p>
              <button
                type="button"
                onClick={handleTestDispatch}
                className="w-full py-1.5 rounded-lg bg-emerald-500 text-slate-950 text-[11px] font-bold shadow-md flex items-center justify-center gap-1 active:scale-95"
              >
                <MessageCircle className="w-3 h-3" />
                <span>1-Tap WhatsApp Order</span>
              </button>
            </div>

            <div className="text-[10px] text-center text-slate-500 font-mono">
              Designed for Lagos, Abuja & Nationwide 4G Networks
            </div>
          </div>
        )}

        {viewMode === 'audit' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-2xl font-mono font-bold text-emerald-400">100</div>
                <div className="text-[11px] font-medium text-slate-300 mt-1">Performance</div>
                <div className="text-[10px] text-slate-500 font-mono">Lighthouse Score</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-2xl font-mono font-bold text-emerald-400">0.38s</div>
                <div className="text-[11px] font-medium text-slate-300 mt-1">First Contentful Paint</div>
                <div className="text-[10px] text-slate-500 font-mono">Mobile 4G Latency</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-2xl font-mono font-bold text-emerald-400">0.00</div>
                <div className="text-[11px] font-medium text-slate-300 mt-1">Layout Shift (CLS)</div>
                <div className="text-[10px] text-slate-500 font-mono">Stable Viewport</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-2xl font-mono font-bold text-emerald-400">&lt; 38KB</div>
                <div className="text-[11px] font-medium text-slate-300 mt-1">Total Page Weight</div>
                <div className="text-[10px] text-slate-500 font-mono">Zero Heavy JPEGs</div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Speed Comparison: Traditional Heavy Sites vs. Ochuru Optimized Architecture
              </div>
              <div className="space-y-2 text-xs">
                <div className="grid grid-cols-12 gap-2 p-2.5 rounded-lg bg-rose-950/20 border border-rose-900/40 text-slate-300 items-center">
                  <div className="col-span-5 font-semibold text-rose-300">Standard Image-Heavy Website</div>
                  <div className="col-span-3 font-mono text-rose-400">6.8s – 9.2s load</div>
                  <div className="col-span-4 text-[11px] text-slate-400">65%+ bounce rate on Nigerian mobile data</div>
                </div>
                <div className="grid grid-cols-12 gap-2 p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-slate-300 items-center">
                  <div className="col-span-5 font-semibold text-emerald-300">Ochuru Zero-Image Architecture</div>
                  <div className="col-span-3 font-mono text-emerald-400 font-bold">0.38s instant load</div>
                  <div className="col-span-4 text-[11px] text-emerald-300/90 font-medium">94% visitor retention & instant conversions</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom performance ticker */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-slate-300 font-medium">Pure Vector & Lightweight CSS Architecture</span>
          </div>
          <div className="font-mono text-emerald-400 text-[11px]">
            ⚡ 0 HTTP Image Requests · 100% Instant Delivery
          </div>
        </div>
      </div>
    </div>
  );
}
