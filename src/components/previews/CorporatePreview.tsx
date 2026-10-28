import { useState } from 'react';
import { ShieldCheck, FileText, CheckCircle2, Lock, ArrowRight, Building2, Briefcase } from 'lucide-react';

export default function CorporatePreview() {
  const [activePractice, setActivePractice] = useState<'m&a' | 'tax' | 'compliance'>('m&a');
  const [scheduled, setScheduled] = useState(false);

  const practiceData = {
    'm&a': {
      label: 'Cross-Border M&A & Private Equity',
      retainer: '₦4.5M/mo Retainer Tier',
      scope: 'Multi-jurisdiction due diligence, SEC Nigeria compliance, and shareholder agreements.'
    },
    'tax': {
      label: 'Corporate Tax Structuring & Repatriation',
      retainer: '₦3.2M/mo Retainer Tier',
      scope: 'FIRS optimization, double taxation relief, foreign exchange advisory.'
    },
    'compliance': {
      label: 'Fintech & CBN Regulatory Licensing',
      retainer: '₦5.0M/mo Retainer Tier',
      scope: 'PSP license filings, NDPR audit defense, AML compliance frameworks.'
    }
  };

  const handleConsult = () => {
    setScheduled(true);
    setTimeout(() => setScheduled(false), 3500);
  };

  return (
    <div className="w-full h-full bg-slate-950 p-4 sm:p-5 flex flex-col justify-between font-sans select-none">
      {/* Top corporate bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Building2 className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="font-bold text-white tracking-tight">LEXINGTON PARTNERS</span>
            <span className="text-[10px] text-indigo-400/90 block font-mono">IKOYI, LAGOS & ABUJA</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-[11px] font-mono">
          <Lock className="w-3 h-3 text-indigo-400" />
          <span>256-Bit SSL Client Portal</span>
        </div>
      </div>

      {/* Middle Interactive Corporate Intake */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 py-3">
        {/* Practice Areas */}
        <div className="sm:col-span-5 space-y-1.5">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Practice Disciplines
          </div>
          <button
            type="button"
            onClick={() => setActivePractice('m&a')}
            className={`w-full p-2 rounded-lg text-left text-xs transition-all border ${
              activePractice === 'm&a'
                ? 'bg-indigo-950/60 border-indigo-500/60 text-white'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="font-medium">M&A & Private Equity</div>
            <div className="text-[10px] text-indigo-400/80 font-mono mt-0.5">Corporate Tier 1</div>
          </button>
          <button
            type="button"
            onClick={() => setActivePractice('tax')}
            className={`w-full p-2 rounded-lg text-left text-xs transition-all border ${
              activePractice === 'tax'
                ? 'bg-indigo-950/60 border-indigo-500/60 text-white'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="font-medium">Corporate Tax & Wealth</div>
            <div className="text-[10px] text-indigo-400/80 font-mono mt-0.5">FIRS & Cross-Border</div>
          </button>
          <button
            type="button"
            onClick={() => setActivePractice('compliance')}
            className={`w-full p-2 rounded-lg text-left text-xs transition-all border ${
              activePractice === 'compliance'
                ? 'bg-indigo-950/60 border-indigo-500/60 text-white'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="font-medium">Fintech & CBN Licensing</div>
            <div className="text-[10px] text-indigo-400/80 font-mono mt-0.5">Regulatory Advisory</div>
          </button>
        </div>

        {/* Practice Details & Intake Action */}
        <div className="sm:col-span-7 bg-slate-900/80 rounded-xl p-3 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-white">{practiceData[activePractice].label}</span>
              <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                {practiceData[activePractice].retainer}
              </span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
              {practiceData[activePractice].scope}
            </p>

            <div className="p-2 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-1 mb-2">
              <div className="text-[10px] text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> Lead Counsel: Partner Level (SAN Board)
              </div>
              <div className="text-[10px] text-slate-400 flex items-center gap-1.5">
                <FileText className="w-3 h-3 text-indigo-400" /> Non-Disclosure Agreement pre-executed
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleConsult}
            className="w-full py-2 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95"
          >
            {scheduled ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>NDA & Intake Dossier Dispatched</span>
              </>
            ) : (
              <>
                <Briefcase className="w-3.5 h-3.5" />
                <span>Schedule Confidential Briefing</span>
                <ArrowRight className="w-3 h-3" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Footer speed badge */}
      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500 font-mono">
        <span className="text-slate-400">Institutional SLA: &lt; 2-Hour Response</span>
        <span className="text-emerald-400 font-bold">Lighthouse Score: 100/100 · 0.29s</span>
      </div>
    </div>
  );
}
