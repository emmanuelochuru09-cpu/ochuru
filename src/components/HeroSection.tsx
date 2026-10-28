import { MessageCircle, Calculator, Gauge, Zap, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import HeroStudioPreview from './previews/HeroStudioPreview.tsx';

export default function HeroSection() {
  return (
    <section className="relative pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent pointer-events-none -z-10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Kicker & Headline Area */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-indigo-400 mb-4 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60">
            <span>Bespoke Web Development & Growth</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Nigerian & Global Businesses</span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-display mb-6 leading-[1.12]"
            style={{ textWrap: 'balance' }}
          >
            We Build High-Impact Websites That Turn Nigerian Visitors Into Paying Clients.
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8"
            style={{ textWrap: 'balance' }}
          >
            Fast, custom websites engineered to rank on Google, eliminate manual WhatsApp back-and-forth, and collect customer payments automatically 24/7.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
            <a
              href="https://wa.me/2348032568417?text=Hello%20Emmanuel!%20I%20want%20to%20build%20a%20website%20for%20my%20business.%20Let's%20talk."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 flex items-center gap-2 transition-all active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Chat on WhatsApp: 08032568417</span>
            </a>

            <a
              href="#cost-estimator"
              className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 font-semibold text-sm border border-slate-700/80 flex items-center gap-2 transition-all whitespace-nowrap"
            >
              <Calculator className="w-4 h-4 text-indigo-400" />
              <span>View Pricing in Naira (₦)</span>
            </a>

            <a
              href="#website-audit"
              className="px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 font-semibold text-sm border border-slate-800 flex items-center gap-2 transition-all whitespace-nowrap"
            >
              <Gauge className="w-4 h-4 text-emerald-400" />
              <span>Free 60-Second Website Test</span>
            </a>
          </div>

          {/* Quantitative Proof Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-2 pb-2 text-left">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                <span>Turnaround</span>
              </div>
              <div className="text-sm font-bold text-white mt-1">Launched in 5–10 Days</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Integration</span>
              </div>
              <div className="text-sm font-bold text-white mt-1">Paystack & WhatsApp Ready</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Zero Bloat</span>
              </div>
              <div className="text-sm font-bold text-white mt-1">Sub-0.4s MTN/Airtel 4G Load</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                <span>Average Growth</span>
              </div>
              <div className="text-sm font-bold text-emerald-400 mt-1">+160% Qualified Leads</div>
            </div>
          </div>
        </div>

        {/* Hero Interactive Studio Visual (Replaces the heavy raster picture) */}
        <div className="max-w-5xl mx-auto mt-6">
          <HeroStudioPreview />
        </div>
      </div>
    </section>
  );
}
