import { useState } from 'react';
import { PRICING_PACKAGES, PRICING_ADDONS } from '../data/content.ts';
import { Check, MessageCircle, ArrowRight, ShieldCheck, TrendingUp, Sparkles, Tag, Flame } from 'lucide-react';

export default function CostCalculator() {
  const [selectedTier, setSelectedTier] = useState<'starter' | 'business' | 'growth'>('business');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['seo', 'booking']);
  const [avgCustomerValue, setAvgCustomerValue] = useState<number>(65000);
  const [monthlyInquiries, setMonthlyInquiries] = useState<number>(6);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentPkg = PRICING_PACKAGES[selectedTier];

  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = PRICING_ADDONS.find((a) => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const originalAddonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = PRICING_ADDONS.find((a) => a.id === id);
    return sum + (addon ? (addon.originalPrice ?? addon.price) : 0);
  }, 0);

  const totalInvestment = currentPkg.basePrice + addonsTotal;
  const originalTotalInvestment = (currentPkg.originalPrice ?? currentPkg.basePrice) + originalAddonsTotal;
  const totalSavings = originalTotalInvestment - totalInvestment;

  const projectedMonthlyRevenue = avgCustomerValue * monthlyInquiries;
  const breakEvenMonths = Math.max(0.1, Number((totalInvestment / projectedMonthlyRevenue).toFixed(1)));

  const whatsappMessage = `https://wa.me/2348032568417?text=${encodeURIComponent(
    `Hello Emmanuel! I used your Website Price & ROI Calculator.\n\nPackage: ${currentPkg.name}\nAddons: ${selectedAddons
      .map((id) => PRICING_ADDONS.find((a) => a.id === id)?.name || id)
      .join(', ') || 'None'}\nEstimated Price: ₦${totalInvestment.toLocaleString()} (Includes -₦50,000 reduction & 15% discount applied! Original: ₦${originalTotalInvestment.toLocaleString()})\nTimeline: ${
      selectedAddons.includes('express') ? '5 Business Days (Rush)' : currentPkg.baseTimeline
    }\n\nI would love to lock in this special discounted pricing for my business. Can we talk?`
  )}`;

  return (
    <section id="cost-estimator" className="py-20 bg-slate-900/40 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-indigo-400 uppercase mb-3">
            <span>Transparent Investment in Naira (₦)</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-emerald-400 font-bold">-₦50,000 Slash + 15% Discount Active</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display mb-4"
            style={{ textWrap: 'balance' }}
          >
            Interactive Website Pricing & Revenue Return Calculator
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            A high-performing website is not an expense—it is a digital salesperson working for you 24/7. Select your package and features below with our exclusive promo pricing applied.
          </p>
        </div>

        {/* Exclusive Promo Banner */}
        <div className="mb-10 p-4 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-indigo-950/80 border border-emerald-500/40 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 text-slate-200">
            <span className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <Flame className="w-4 h-4" />
            </span>
            <div>
              <span className="font-bold text-white">Special Promo Applied: </span>
              <span>All packages reduced by <strong className="text-emerald-400 font-mono">-₦50,000</strong> plus an additional <strong className="text-emerald-400 font-mono">15% Discount</strong> across all packages & upgrades!</span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-bold font-mono text-[11px] shrink-0">
            15% Off Active
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Select Tier */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-[11px] font-bold flex items-center justify-center font-mono">
                  1
                </span>
                <span>Select Project Scale</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(['starter', 'business', 'growth'] as const).map((tierKey) => {
                  const pkg = PRICING_PACKAGES[tierKey];
                  const isSelected = selectedTier === tierKey;
                  const discountSavings = (pkg.originalPrice ?? pkg.basePrice) - pkg.basePrice;

                  return (
                    <button
                      key={tierKey}
                      type="button"
                      onClick={() => setSelectedTier(tierKey)}
                      className={`p-4 rounded-xl text-left border transition-all relative ${
                        isSelected
                          ? 'bg-indigo-950/40 border-indigo-500 shadow-md ring-1 ring-indigo-500/50'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                      }`}
                    >
                      {tierKey === 'business' && (
                        <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-bold font-mono">
                          Most Popular
                        </span>
                      )}

                      <div className="text-xs font-bold text-white mb-1">{pkg.name}</div>

                      {/* Strikethrough original and new discounted price */}
                      <div className="flex items-baseline gap-2 mb-1">
                        {pkg.originalPrice && (
                          <span className="text-xs text-slate-500 line-through font-mono">
                            ₦{pkg.originalPrice.toLocaleString()}
                          </span>
                        )}
                        <span className="text-base font-bold text-emerald-400 font-mono">
                          ₦{pkg.basePrice.toLocaleString()}
                        </span>
                      </div>

                      <div className="inline-block px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-semibold mb-2">
                        Save ₦{discountSavings.toLocaleString()}
                      </div>

                      <div className="text-[11px] text-slate-400 line-clamp-2">
                        {pkg.idealFor}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected package features preview */}
              <div className="mt-4 pt-4 border-t border-slate-800/80">
                <div className="text-[11px] text-slate-400 font-mono mb-2">Included in this tier:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {currentPkg.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2: Add-on Upgrades */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-600 text-[11px] font-bold flex items-center justify-center font-mono">
                    2
                  </span>
                  <span>Custom Upgrades & Integrations</span>
                </div>
                <span className="text-emerald-400 text-[11px] font-mono font-semibold">15% Discount Applied</span>
              </h3>

              <div className="space-y-3">
                {PRICING_ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <label
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-start justify-between gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-slate-900 border-indigo-500/80 text-white'
                          : 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:text-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center transition-colors ${
                            isChecked ? 'bg-indigo-600 text-white' : 'border border-slate-700 bg-slate-900'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-200">{addon.name}</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">{addon.description}</div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        {addon.originalPrice && (
                          <div className="text-[11px] text-slate-500 line-through font-mono">
                            ₦{addon.originalPrice.toLocaleString()}
                          </div>
                        )}
                        <div className="font-mono text-xs font-bold text-emerald-400">
                          +₦{addon.price.toLocaleString()}
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Interactive Revenue ROI Sliders */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-5">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-[11px] font-bold flex items-center justify-center font-mono">
                  3
                </span>
                <span>Projected Nigerian Client ROI</span>
              </h3>

              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-slate-300">Average Value / Sale of 1 Customer:</span>
                  <span className="font-mono font-bold text-emerald-400 text-sm">
                    ₦{avgCustomerValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="500000"
                  step="5000"
                  value={avgCustomerValue}
                  onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                  className="w-full accent-indigo-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-slate-300">Extra Monthly Inquiries Converted by Website:</span>
                  <span className="font-mono font-bold text-indigo-400 text-sm">
                    {monthlyInquiries} Clients / month
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={monthlyInquiries}
                  onChange={(e) => setMonthlyInquiries(Number(e.target.value))}
                  className="w-full accent-indigo-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Live Summary Column (5 cols) */}
          <div className="lg:col-span-5 sticky top-24 space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">Discounted Total Investment</span>
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1 font-semibold">
                  <Tag className="w-3.5 h-3.5" /> 15% Promo Applied
                </span>
              </div>

              {/* Price display with savings */}
              <div className="py-5">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-sm text-slate-500 line-through font-mono">
                    ₦{originalTotalInvestment.toLocaleString()}
                  </span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                    ₦{totalInvestment.toLocaleString()}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold mt-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>You Save ₦{totalSavings.toLocaleString()} (-₦50k + 15% Off)</span>
                </div>

                <div className="text-xs text-slate-400 mt-2 font-mono">
                  Delivery Timeline: {selectedAddons.includes('express') ? '5 Days (Express Rush)' : currentPkg.baseTimeline}
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-2 py-4 border-t border-slate-800/80 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span>{currentPkg.name} (Discounted)</span>
                  <span className="font-mono">₦{currentPkg.basePrice.toLocaleString()}</span>
                </div>
                {selectedAddons.map((id) => {
                  const addon = PRICING_ADDONS.find((a) => a.id === id);
                  if (!addon) return null;
                  return (
                    <div key={id} className="flex items-center justify-between text-slate-400">
                      <span className="truncate pr-2">+ {addon.name} (15% Off)</span>
                      <span className="font-mono text-slate-300 shrink-0">₦{addon.price.toLocaleString()}</span>
                    </div>
                  );
                })}
              </div>

              {/* Projected Revenue ROI Box */}
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-900/40 my-4 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-300 font-medium flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> Projected New Monthly Revenue:
                  </span>
                  <span className="font-mono font-bold text-emerald-400">
                    +₦{projectedMonthlyRevenue.toLocaleString()}/mo
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Estimated Break-Even Horizon:</span>
                  <span className="font-mono font-bold text-white">
                    {breakEvenMonths <= 1 ? '< 1 Month' : `~${breakEvenMonths} Months`}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-2">
                <a
                  href={whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all font-mono active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Send Discounted Quote to Emmanuel on WhatsApp</span>
                </a>

                <a
                  href="#contact"
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors border border-slate-700"
                >
                  <span>Or Fill Project Brief Form Below</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-500 text-center font-mono">
                Includes .com or .ng domain setup, SSL security, and 30-day post-launch support.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
