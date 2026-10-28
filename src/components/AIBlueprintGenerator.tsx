import { useState } from 'react';
import { Sparkles, MessageCircle, CheckCircle2, ArrowRight, Loader2, FileCode, Check } from 'lucide-react';

interface BlueprintResult {
  headline: string;
  subheadline: string;
  recommendedPages: string[];
  conversionHooks: string[];
  recommendedPackage: string;
  projectedWeeklyInquiries: string;
  estimatedDelivery: string;
}

export default function AIBlueprintGenerator() {
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('Hospitality & Dining');
  const [goals, setGoals] = useState('Online bookings, Google ranking, stop WhatsApp back-and-forth');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<BlueprintResult | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim()) return;

    setLoading(true);
    try {
      const response = await fetch('/api/generate-blueprint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessName, industry, goals }),
      });
      const data = await response.json();
      setResult(data);
    } catch {
      // Fallback
      setResult({
        headline: `Transform ${businessName} into a High-Converting Market Leader`,
        subheadline: 'Sub-second mobile speed, Google local ranking, and 24/7 Paystack & WhatsApp sales automation.',
        recommendedPages: ['Home & Brand Story', 'Services & Live Pricing', 'Client Proof & Reviews', 'Instant WhatsApp Intake'],
        conversionHooks: [
          'Direct 24/7 client booking without repetitive manual chat delays',
          'Sub-0.4s instant load time on MTN & Airtel 4G networks',
          'Top ranking on Google local search in Lagos, Abuja & nationwide',
        ],
        recommendedPackage: 'Professional Business Engine (₦340,000 Promo Price - 15% Off)',
        projectedWeeklyInquiries: '+10 to 18 High-Intent Inquiries',
        estimatedDelivery: '7 Business Days',
      });
    } finally {
      setLoading(false);
    }
  };

  const whatsappText = result
    ? `Hello Emmanuel! I generated an AI Website Strategy Blueprint for my business on your website.\n\nBusiness: ${businessName}\nHeadline: "${result.headline}"\nPages: ${result.recommendedPages.join(', ')}\nRecommended Package: ${result.recommendedPackage}\n\nI want to discuss bringing this blueprint to life with your promo discount pricing. Can we talk?`
    : '';

  return (
    <section id="ai-blueprint" className="py-20 bg-slate-900/30 border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-indigo-400 uppercase mb-3 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>AI Strategy & Blueprint Engine</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-emerald-400">Powered by Gemini AI</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display mb-3"
            style={{ textWrap: 'balance' }}
          >
            Generate an Instant Custom Website Blueprint for Your Brand
          </h2>

          <p className="text-sm text-slate-300">
            Tell us about your business to generate a tailored conversion headline, page architecture, and high-growth blueprint in seconds.
          </p>
        </div>

        {/* Input Form */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl mb-8">
          <form onSubmit={handleGenerate} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Business Name:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Prime Care Dental Clinic"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Industry / Niche:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Legal Services in Ikoyi"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Primary Business Goal:
                </label>
                <input
                  type="text"
                  placeholder="e.g. 24/7 Card Checkout & Appointments"
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-500 hover:from-indigo-500 hover:to-emerald-400 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg transition-all active:scale-98 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Synthesizing Custom Blueprint via Gemini...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-emerald-300" />
                  <span>Generate Custom AI Website Blueprint</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Blueprint Result Card */}
        {result && (
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-indigo-500/40 shadow-2xl space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
                  Custom Strategic Blueprint for
                </span>
                <h3 className="text-xl font-bold text-white font-display">{businessName}</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-semibold self-start sm:self-auto">
                {result.projectedWeeklyInquiries}
              </span>
            </div>

            {/* Headline concept */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-[10px] text-indigo-400 uppercase tracking-wider font-mono font-bold">
                Recommended Hero Headline Strategy
              </span>
              <div className="text-base font-bold text-white font-display">
                "{result.headline}"
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {result.subheadline}
              </p>
            </div>

            {/* Pages & Hooks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono block">
                  Recommended Page Flow
                </span>
                <div className="space-y-1.5">
                  {result.recommendedPages.map((page, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{page}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono block">
                  Core Conversion Hooks
                </span>
                <div className="space-y-1.5">
                  {result.conversionHooks.map((hook, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hook}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Package & Turnaround */}
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-900/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-slate-400 block font-mono text-[11px]">Recommended Tier:</span>
                <span className="font-bold text-emerald-400 text-sm">{result.recommendedPackage}</span>
              </div>
              <div className="text-slate-300 font-mono">
                Launch Horizon: <strong className="text-white">{result.estimatedDelivery}</strong>
              </div>
            </div>

            {/* Direct Action */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <span className="text-xs text-slate-400">
                Want Emmanuel to execute this exact blueprint?
              </span>
              <a
                href={`https://wa.me/2348032568417?text=${encodeURIComponent(whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg transition-all font-mono active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Send Blueprint to Emmanuel on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
