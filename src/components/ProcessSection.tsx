import { Compass, Palette, Code2, Rocket, ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      step: '01',
      title: 'Strategy & Customer Intake Architecture',
      description: 'We audit your customer journey, determine where buyers drop off, and structure high-converting landing pages tailored to Nigerian buyers.',
      duration: 'Day 1–2',
      icon: Compass,
    },
    {
      step: '02',
      title: 'High-Impact Copywriting & Visual Direction',
      description: 'We write clear, punchy copy that eliminates skepticism and builds a clean, fast vector-based design that loads instantly on mobile.',
      duration: 'Day 3–4',
      icon: Palette,
    },
    {
      step: '03',
      title: 'Full-Stack Engineering & Speed Tuning',
      description: 'We code custom responsive components, integrate Paystack/Flutterwave, wire automated WhatsApp lead alerts, and benchmark sub-0.5s loading.',
      duration: 'Day 5–7',
      icon: Code2,
    },
    {
      step: '04',
      title: 'Domain Launch, Google Ranking & 30-Day Support',
      description: 'We connect your .com.ng or .com domain, configure SSL certificates, register your Google Business Profile, and provide 30 days of direct support.',
      duration: 'Day 8–10',
      icon: Rocket,
    },
  ];

  return (
    <section id="process" className="py-20 bg-slate-900/30 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-indigo-400 uppercase mb-3">
            <span>Transparent & Guaranteed Delivery</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Zero Technical Stress</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display mb-4"
            style={{ textWrap: 'balance' }}
          >
            From idea to a live revenue-generating website in 7 to 10 days.
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            No endless delays, no technical jargon, and no abandoned projects. We handle everything from domain setup to copy and payment integration.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between hover:border-indigo-500/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-extrabold text-indigo-400 font-mono">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                      {item.duration}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-white font-display mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 text-[11px] text-slate-500 flex items-center gap-1 font-mono">
                  <span>Guaranteed Milestones</span>
                  <ArrowRight className="w-3 h-3 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
