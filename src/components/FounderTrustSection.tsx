import { ShieldCheck, MessageCircle, PhoneCall, CheckCircle2, Award, Zap, Clock } from 'lucide-react';

export default function FounderTrustSection() {
  const guarantees = [
    'No junior subcontractors or outsourced templates—all code written directly by Emmanuel Ochuru',
    'Direct WhatsApp line with fast reply guarantee during working hours',
    '30 days of complimentary bug fixes, domain support, and minor copy updates post-launch',
    '100% money-back milestone guarantee if the initial design direction fails to meet your brief',
  ];

  return (
    <section className="py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Monogram & Verified Badge (REPLACES OLD RASTER PICTURE) */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-inner">
              {/* Prestigious Typographic Monogram Crest */}
              <div className="relative mb-4">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-900 flex items-center justify-center text-white shadow-xl border-2 border-indigo-400/40">
                  <span className="font-mono text-3xl font-black tracking-tighter">
                    EO
                  </span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center text-slate-950 shadow-md">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              <h4 className="text-lg font-bold text-white font-display">
                Emmanuel Ochuru
              </h4>
              <p className="text-xs text-indigo-400 font-mono mt-0.5">
                Lead Web Developer & Founder
              </p>
              <div className="text-[11px] text-slate-400 mt-2 font-mono">
                Lagos, Nigeria · Global Projects
              </div>

              {/* Status Indicator */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 w-full flex items-center justify-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for New Projects</span>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-indigo-400 uppercase">
                <span>Direct Senior Craftsmanship</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Zero Middlemen</span>
              </div>

              <h3
                className="text-2xl sm:text-3xl font-bold text-white font-display leading-tight"
                style={{ textWrap: 'balance' }}
              >
                You work directly with Emmanuel Ochuru—available directly on WhatsApp: 08032568417.
              </h3>

              <blockquote className="text-sm text-slate-300 leading-relaxed italic border-l-2 border-indigo-500 pl-4 py-1">
                "When you hire me at Ochuru Digital, there are no middlemen, excuses, or abandoned projects. You get fast communication, regular milestone previews, and an online presence engineered to convert."
              </blockquote>

              <div className="space-y-2 pt-1">
                {guarantees.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Quick Contact Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href="https://wa.me/2348032568417?text=Hello%20Emmanuel!%20I%20would%20like%20to%20discuss%20a%20website%20project%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg transition-all font-mono active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Chat on WhatsApp: 08032568417</span>
                </a>

                <a
                  href="tel:08032568417"
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center gap-2 transition-colors border border-slate-700"
                >
                  <PhoneCall className="w-4 h-4 text-indigo-400" />
                  <span>Direct Call: 08032568417</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
