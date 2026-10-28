import { useState } from 'react';
import { CASE_STUDIES } from '../data/content.ts';
import { IndustryType, CaseStudy } from '../types.ts';
import { ArrowUpRight, Sparkles, MessageCircle, Eye } from 'lucide-react';
import RestaurantPreview from './previews/RestaurantPreview.tsx';
import CorporatePreview from './previews/CorporatePreview.tsx';
import EcommercePreview from './previews/EcommercePreview.tsx';
import CaseStudyModal from './CaseStudyModal.tsx';

interface ShowcaseSectionProps {
  onSelectProjectForBrief: (title: string) => void;
}

export default function ShowcaseSection({ onSelectProjectForBrief }: ShowcaseSectionProps) {
  const [filter, setFilter] = useState<IndustryType>('all');
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  const filteredStudies = filter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((item) => item.industry === filter);

  const renderCardPreview = (study: CaseStudy) => {
    switch (study.previewType) {
      case 'restaurant':
        return <RestaurantPreview />;
      case 'corporate':
        return <CorporatePreview />;
      case 'ecommerce':
        return <EcommercePreview />;
      default:
        return null;
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header & Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-indigo-400 uppercase mb-3">
              <span>Client Showcase & Proof of Work</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Engineered for Tangible Revenue</span>
            </div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display"
              style={{ textWrap: 'balance' }}
            >
              Websites crafted to outperform your industry competition.
            </h2>
          </div>

          {/* Interactive filter buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium self-start lg:self-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filter === 'all' ? 'bg-indigo-600 text-white shadow-sm font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              type="button"
              onClick={() => setFilter('hospitality')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filter === 'hospitality' ? 'bg-indigo-600 text-white shadow-sm font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Hospitality
            </button>
            <button
              type="button"
              onClick={() => setFilter('services')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filter === 'services' ? 'bg-indigo-600 text-white shadow-sm font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Corporate Services
            </button>
            <button
              type="button"
              onClick={() => setFilter('ecommerce')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filter === 'ecommerce' ? 'bg-indigo-600 text-white shadow-sm font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              E-Commerce
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-lg flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              {/* Interactive Vector UI Preview Frame (REPLACES OLD RASTER PICTURE) */}
              <div className="relative h-64 w-full bg-slate-950 overflow-hidden border-b border-slate-800">
                {renderCardPreview(study)}

                {/* Hover overlay hint */}
                <div className="absolute top-2 right-2 z-10">
                  <button
                    type="button"
                    onClick={() => setActiveStudy(study)}
                    className="p-1.5 rounded-lg bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-800 backdrop-blur-sm text-xs flex items-center gap-1 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="text-[11px] font-mono">Expand View</span>
                  </button>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-indigo-400">{study.clientName}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>{study.timeframe}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display mb-2 group-hover:text-emerald-400 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {study.outcome}
                  </p>

                  {/* Clean unboxed tags */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-400 mb-4 font-mono">
                    {study.tags.map((tag, i) => (
                      <span key={i} className="flex items-center gap-2">
                        <span>{tag}</span>
                        {i < study.tags.length - 1 && <span aria-hidden="true" className="text-slate-600">/</span>}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Impact Metric & Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-mono">Proven Result</span>
                    <span className="text-sm font-bold text-emerald-400 font-mono">{study.metric}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveStudy(study)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
                    >
                      Case Study
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectProjectForBrief(study.title)}
                      className="p-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-400 border border-indigo-500/30 hover:border-indigo-500/50 transition-colors"
                      title="Build something similar"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Speed note ribbon */}
        <div className="mt-10 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-200 font-medium">Performance Engineering Standard:</span>
            <span>All mockups and web components utilize pure CSS/SVG vectors for instant sub-0.5s mobile rendering.</span>
          </div>
          <a
            href="https://wa.me/2348032568417?text=Hello%20Emmanuel!%20I'd%20like%20to%20discuss%20a%20website%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 font-mono transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp: 08032568417</span>
          </a>
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        study={activeStudy}
        onClose={() => setActiveStudy(null)}
        onRequestSimilar={onSelectProjectForBrief}
      />
    </section>
  );
}
