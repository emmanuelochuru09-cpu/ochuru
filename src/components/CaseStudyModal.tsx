import { CaseStudy } from '../types.ts';
import { X, CheckCircle2, Clock, BarChart3, MessageCircle, ExternalLink } from 'lucide-react';
import RestaurantPreview from './previews/RestaurantPreview.tsx';
import CorporatePreview from './previews/CorporatePreview.tsx';
import EcommercePreview from './previews/EcommercePreview.tsx';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onRequestSimilar: (title: string) => void;
}

export default function CaseStudyModal({ study, onClose, onRequestSimilar }: CaseStudyModalProps) {
  if (!study) return null;

  const renderPreview = () => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-indigo-400 font-mono uppercase tracking-wider mb-1">
              <span>{study.clientName}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400 font-bold">{study.metric}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white font-display">
              {study.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Interactive Vector UI Preview (Zero Heavy Images) */}
          <div className="h-72 sm:h-80 w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
            {renderPreview()}
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              The Business Challenge & Delivery
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {study.description}
            </p>
          </div>

          {/* Metrics Ribbon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono block">Quantified Impact</span>
                <span className="text-sm font-bold text-white font-mono">{study.metric}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono block">Delivery Turnaround</span>
                <span className="text-sm font-bold text-white font-mono">{study.timeframe}</span>
              </div>
            </div>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Engineered Deliverables
            </h4>
            <div className="space-y-2">
              {study.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            Ready for a similar solution for your business?
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                onRequestSimilar(study.title);
                onClose();
              }}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Fill Project Brief</span>
            </button>
            <a
              href={`https://wa.me/2348032568417?text=${encodeURIComponent(
                `Hello Emmanuel! I was reviewing your case study on "${study.title}" and would like to build a similar high-performance website for my business.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-md transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Request a Site Like This</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
