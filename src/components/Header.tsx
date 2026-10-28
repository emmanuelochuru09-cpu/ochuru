import { MessageCircle, Megaphone, PhoneCall, Key, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenAdStudio: () => void;
  onOpenCredentials: () => void;
}

export default function Header({ onOpenAdStudio, onOpenCredentials }: HeaderProps) {
  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 border-b border-indigo-900/40 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-slate-300">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-medium text-white">Direct Line:</span>
            <a
              href="https://wa.me/2348032568417?text=Hello%20Emmanuel!%20I%20would%20like%20to%20discuss%20a%20website%20project%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 font-bold font-mono hover:underline flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: 08032568417</span>
            </a>
            <span aria-hidden="true" className="text-slate-600 hidden sm:inline">·</span>
            <span className="hidden sm:inline text-emerald-400 font-semibold font-mono">Special Promo: -₦50,000 Off + 15% Discount</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenCredentials}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-[11px] font-mono font-medium transition-colors"
            >
              <Key className="w-3 h-3 text-emerald-400" />
              <span>API Key & Deploy</span>
            </button>
            <button
              type="button"
              onClick={onOpenAdStudio}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 text-[11px] font-medium transition-colors"
            >
              <Megaphone className="w-3 h-3 text-indigo-400" />
              <span>Client Ad Kit</span>
            </button>
            <a
              href="tel:08032568417"
              className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 font-mono transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-emerald-400" />
              <span>Call 08032568417</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation (Strict 3-Zone Contract) */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single element brand wordmark */}
          <a
            href="/"
            className="text-lg font-bold tracking-tight text-white hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 font-display flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-mono font-extrabold text-sm shadow-md">
              OD
            </span>
            <span>Ochuru Digital</span>
          </a>

          {/* Zone 2: 4-5 single-line nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#why-website" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Why A Website
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Case Studies
            </a>
            <a href="#cost-estimator" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Price Calculator
            </a>
            <a href="#website-audit" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Free Audit
            </a>
            <a href="#process" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Our Process
            </a>
            <a href="#contact" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Inquire
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/2348032568417?text=Hello%20Emmanuel!%20I%20would%20like%20to%20get%20a%20website%20quote%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-md hover:shadow-emerald-500/20 transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 font-mono"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
