import { useState } from 'react';
import { Gauge, AlertTriangle, CheckCircle2, ArrowRight, MessageCircle, RotateCcw } from 'lucide-react';

export default function WebsiteAudit() {
  const [urlOrName, setUrlOrName] = useState('');
  const [currentSituation, setCurrentSituation] = useState<'social_only' | 'unhappy' | 'outdated'>('social_only');
  const [loadsFast, setLoadsFast] = useState<boolean | null>(null);
  const [hasBooking, setHasBooking] = useState<boolean | null>(null);
  const [googleRank, setGoogleRank] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const calculateAudit = () => {
    let score = 100;
    const issues: string[] = [];

    if (currentSituation === 'social_only') {
      score = 25;
      issues.push('Zero Google search visibility for your service');
      issues.push('Customer trust drop due to lack of a verified website domain');
      issues.push('Losing high-value leads who want direct booking/pricing upfront');
    } else {
      if (currentSituation === 'unhappy') {
        score -= 20;
        issues.push('Outdated aesthetic failing to command premium market rates');
      }
      if (loadsFast === false) {
        score -= 30;
        issues.push('Poor mobile experience causing 60%+ immediate bounce rate on 4G');
      }
      if (hasBooking === false) {
        score -= 20;
        issues.push('Friction in client intake—requiring repetitive manual messaging');
      }
      if (googleRank === false) {
        score -= 25;
        issues.push('Missing structured schema and local SEO keywords for your city');
      }
    }

    return {
      score: Math.max(20, score),
      issues: issues.length > 0 ? issues : ['Your foundation is good, but performance and conversion optimization will unlock scale.']
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlOrName.trim()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setUrlOrName('');
    setCurrentSituation('social_only');
    setLoadsFast(null);
    setHasBooking(null);
    setGoogleRank(null);
  };

  const auditResult = submitted ? calculateAudit() : null;

  return (
    <section id="website-audit" className="py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-indigo-400 uppercase mb-3">
            <span>Free Interactive Audit Tool</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Takes 60 Seconds</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display mb-3"
            style={{ textWrap: 'balance' }}
          >
            Is your online presence helping or hurting your sales?
          </h2>

          <p className="text-sm text-slate-300">
            Check where your business stands today and get a complimentary diagnostic report before building.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Your Business Name or Current Website URL:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lekki Aesthetics or www.mybrand.ng"
                  value={urlOrName}
                  onChange={(e) => setUrlOrName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  What is your current website situation?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setCurrentSituation('social_only')}
                    className={`p-3 rounded-xl text-left border text-xs transition-all ${
                      currentSituation === 'social_only'
                        ? 'bg-indigo-950/40 border-indigo-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className="font-semibold text-slate-200">Only Social Media</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Instagram / WhatsApp only</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentSituation('unhappy')}
                    className={`p-3 rounded-xl text-left border text-xs transition-all ${
                      currentSituation === 'unhappy'
                        ? 'bg-indigo-950/40 border-indigo-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className="font-semibold text-slate-200">Outdated Website</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Doesn't represent our quality</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentSituation('outdated')}
                    className={`p-3 rounded-xl text-left border text-xs transition-all ${
                      currentSituation === 'outdated'
                        ? 'bg-indigo-950/40 border-indigo-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className="font-semibold text-slate-200">Sluggish or Broken</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Needs speed & redesign</div>
                  </button>
                </div>
              </div>

              {currentSituation !== 'social_only' && (
                <div className="space-y-4 pt-2 border-t border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <span className="text-slate-300">Does it load under 1.5 seconds on mobile phones?</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setLoadsFast(true)}
                        className={`px-3 py-1 rounded-md text-xs font-mono ${
                          loadsFast === true ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-950 text-slate-400'
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => setLoadsFast(false)}
                        className={`px-3 py-1 rounded-md text-xs font-mono ${
                          loadsFast === false ? 'bg-rose-500 text-white font-bold' : 'bg-slate-950 text-slate-400'
                        }`}
                      >
                        No / Slow
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <span className="text-slate-300">Can customers book or buy directly without messaging?</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setHasBooking(true)}
                        className={`px-3 py-1 rounded-md text-xs font-mono ${
                          hasBooking === true ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-950 text-slate-400'
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => setHasBooking(false)}
                        className={`px-3 py-1 rounded-md text-xs font-mono ${
                          hasBooking === false ? 'bg-rose-500 text-white font-bold' : 'bg-slate-950 text-slate-400'
                        }`}
                      >
                        No
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <span className="text-slate-300">Does your brand rank on page 1 of Google in your city?</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setGoogleRank(true)}
                        className={`px-3 py-1 rounded-md text-xs font-mono ${
                          googleRank === true ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-950 text-slate-400'
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => setGoogleRank(false)}
                        className={`px-3 py-1 rounded-md text-xs font-mono ${
                          googleRank === false ? 'bg-rose-500 text-white font-bold' : 'bg-slate-950 text-slate-400'
                        }`}
                      >
                        No / Unknown
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <Gauge className="w-4 h-4" />
                <span>Generate Diagnostic Report</span>
              </button>
            </form>
          ) : (
            auditResult && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div>
                    <span className="text-[11px] text-slate-400 font-mono block">Audit Assessment for:</span>
                    <span className="text-lg font-bold text-white">{urlOrName}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">
                        Conversion Health Score
                      </span>
                      <span className={`text-2xl font-bold font-mono ${
                        auditResult.score < 50 ? 'text-rose-400' : auditResult.score < 80 ? 'text-amber-400' : 'text-emerald-400'
                      }`}>
                        {auditResult.score}/100
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Identified Bottlenecks & Fixes:
                  </h4>
                  {auditResult.issues.map((issue, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{issue}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-900/40 text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Emmanuel Ochuru can solve these bottlenecks within 7 to 10 days.</span>
                  </div>

                  <a
                    href={`https://wa.me/2348032568417?text=${encodeURIComponent(
                      `Hello Emmanuel! I ran the Website Audit on "${urlOrName}". My Conversion Health Score was ${auditResult.score}/100. Issues identified: ${auditResult.issues.join('; ')}. Can you help me fix this?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shrink-0 transition-colors font-mono"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Discuss Fixes on WhatsApp</span>
                  </a>
                </div>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1.5 transition-colors underline underline-offset-4"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Run Another Audit</span>
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
