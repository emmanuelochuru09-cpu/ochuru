import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-6 z-40">
      <a
        href="https://wa.me/2348032568417?text=Hello%20Emmanuel!%20I'm%20visiting%20your%20website%20and%20would%20like%20to%20inquire%20about%20building%20a%20website%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all font-mono"
      >
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-40" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-950" />
        </span>

        <MessageCircle className="w-5 h-5 fill-slate-950" />

        <span className="hidden sm:inline">
          Chat on WhatsApp: <span className="font-extrabold">08032568417</span>
        </span>
      </a>
    </aside>
  );
}
