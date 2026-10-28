import { MessageCircle, PhoneCall, Mail, Megaphone } from 'lucide-react';

interface FooterProps {
  onOpenAdStudio: () => void;
}

export default function Footer({ onOpenAdStudio }: FooterProps) {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-bold text-white tracking-tight font-display text-sm">
            Ochuru Digital
          </span>
          <span aria-hidden="true" className="hidden sm:inline text-slate-700">·</span>
          <span>© {new Date().getFullYear()} Emmanuel Ochuru. Lagos, Nigeria & Worldwide.</span>
        </div>

        {/* Direct Contact Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 font-mono text-xs">
          <a
            href="https://wa.me/2348032568417?text=Hello%20Emmanuel!%20I'd%20like%20to%20discuss%20a%20website%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1.5 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp: 08032568417</span>
          </a>

          <a
            href="tel:08032568417"
            className="text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call: 08032568417</span>
          </a>

          <a
            href="mailto:emmanuelochuru02@gmail.com"
            className="text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>emmanuelochuru02@gmail.com</span>
          </a>

          <button
            type="button"
            onClick={onOpenAdStudio}
            className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1.5 transition-colors"
          >
            <Megaphone className="w-3.5 h-3.5" />
            <span>Ad Campaign Kit</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
