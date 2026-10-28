import { COMPARISON_POINTS } from '../data/content.ts';
import { ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';

export default function ComparisonSection() {
  return (
    <section id="why-website" className="py-20 bg-slate-900/50 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-indigo-400 uppercase mb-3">
            <span>The Reality of Modern Business</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Why a Professional Website Matters</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display mb-4"
            style={{ textWrap: 'balance' }}
          >
            Social media gets attention. A custom website closes the deal.
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            Many Nigerian businesses make the mistake of thinking an Instagram or Facebook page is enough. But when high-intent customers search on Google or want to spend real money, a dedicated website is what converts doubts into paying customers.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMPARISON_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/90 shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white font-display mb-4">
                  {item.title}
                </h3>

                <div className="space-y-4 mb-6">
                  {/* Without website */}
                  <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/30">
                    <div className="flex items-center gap-2 text-xs font-bold text-rose-400 mb-1">
                      <XCircle className="w-4 h-4 shrink-0" />
                      <span>Without a Dedicated Website:</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pl-6">
                      {item.withoutSite}
                    </p>
                  </div>

                  {/* With Ochuru website */}
                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-1">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>With Your Custom Ochuru Website:</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed pl-6">
                      {item.withOurSite}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Outcome Indicator */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Business Impact:</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1 font-mono">
                  <span>{item.impact}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Adjacency Proof Callout */}
        <div className="mt-10 p-5 rounded-xl bg-indigo-950/40 border border-indigo-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-300 leading-relaxed">
            <span className="font-semibold text-white">Market Reality:</span> 75% of consumers judge a company's credibility based purely on their website speed and design. In Nigeria, having a fast .com.ng or .com domain separates serious businesses from fly-by-night accounts.
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors whitespace-nowrap shrink-0"
          >
            Upgrade Your Digital Presence
          </a>
        </div>
      </div>
    </section>
  );
}
