import { useState } from 'react';
import { AD_TEMPLATES } from '../data/content.ts';
import { X, Copy, Check, Megaphone, Smartphone, MessageCircle, Search, Share2, Sparkles, Send } from 'lucide-react';

interface AdCampaignStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdCampaignStudioModal({ isOpen, onClose }: AdCampaignStudioModalProps) {
  const [selectedChannel, setSelectedChannel] = useState<string>('instagram_feed');
  const [copied, setCopied] = useState<string | null>(null);

  // Customizer fields
  const [agencyBrand, setAgencyBrand] = useState('Ochuru Digital');
  const [founderName, setFounderName] = useState('Emmanuel Ochuru');
  const [phone, setPhone] = useState('08032568417');
  const [email, setEmail] = useState('emmanuelochuru02@gmail.com');
  const [locations, setLocations] = useState('Lagos, Abuja & Nationwide');

  if (!isOpen) return null;

  const currentTemplate = AD_TEMPLATES.find((t) => t.channel === selectedChannel) || AD_TEMPLATES[0];

  const formatText = (text: string) => {
    return text
      .replace(/Emmanuel Ochuru/g, founderName)
      .replace(/Ochuru Web Studio|Ochuru Digital/g, agencyBrand)
      .replace(/08032568417/g, phone)
      .replace(/\[Owner Name \/ Business Team\]/g, 'Alhaji / Manager')
      .replace(/\[Business Name\]/g, 'Prime Care Clinic')
      .replace(/\[products \/ services \/ client reviews\]/g, 'quality service and 5-star customer reviews')
      .replace(/\[Industry\/Service\]/g, 'private healthcare & consulting')
      .replace(/Lagos, Abuja & Nationwide/g, locations);
  };

  const handleCopy = (content: string, key: string) => {
    navigator.clipboard.writeText(content);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl my-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <Megaphone className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                Ad Campaign Studio & Client Outreach Kit
              </h3>
              <p className="text-[11px] text-slate-400">
                Turnkey campaign copy & pitch scripts to attract high-paying website clients.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Channel Selector */}
          <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-800">
            {AD_TEMPLATES.map((tmpl) => (
              <button
                key={tmpl.id}
                type="button"
                onClick={() => setSelectedChannel(tmpl.channel)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  selectedChannel === tmpl.channel
                    ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {tmpl.channelLabel}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Live Vector Preview (REPLACES OLD RASTER PICTURES) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>Live Rendered Ad Mockup</span>
                <span className="text-emerald-400 font-mono text-[11px]">100% Vector (Zero Images)</span>
              </div>

              {/* Instagram Feed Ad Mockup */}
              {selectedChannel === 'instagram_feed' && (
                <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-xl text-xs">
                  {/* Account lockup */}
                  <div className="p-3 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-emerald-400 flex items-center justify-center font-bold text-slate-950 text-xs font-mono">
                        EO
                      </div>
                      <div>
                        <div className="font-bold text-white leading-tight">{agencyBrand}</div>
                        <div className="text-[10px] text-slate-400">Sponsored · WhatsApp Available</div>
                      </div>
                    </div>
                    <span className="text-indigo-400 text-[11px] font-semibold">Follow</span>
                  </div>

                  {/* Creative Area (VECTOR ART REPLACING OLD DESK PHOTO) */}
                  <div className="p-6 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border-b border-slate-800 flex flex-col justify-between min-h-[220px]">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-mono border border-emerald-500/30 self-start">
                      <Sparkles className="w-3 h-3" />
                      <span>Custom Website Design</span>
                    </div>

                    <div className="my-4">
                      <h4 className="text-xl font-extrabold text-white font-display tracking-tight leading-snug">
                        {currentTemplate.headline}
                      </h4>
                      <p className="text-xs text-slate-300 mt-2 font-mono">
                        Lagos · Abuja · Port Harcourt · Nationwide
                      </p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                      <span className="text-[11px] text-slate-300 font-medium">Turnaround: 7–10 Days</span>
                      <span className="font-mono text-xs font-bold text-emerald-400">Packages from ₦110,500 (15% Off Active)</span>
                    </div>
                  </div>

                  {/* Ad Action Bar */}
                  <div className="p-3 flex items-center justify-between bg-slate-900 border-b border-slate-800">
                    <span className="text-xs font-semibold text-white">Chat on WhatsApp: {phone}</span>
                    <a
                      href={`https://wa.me/2348032568417`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-1 font-mono"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                      <span>Send Message</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Story / Status Card Mockup */}
              {selectedChannel === 'story_status' && (
                <div className="max-w-xs mx-auto rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-950 to-slate-900 border-2 border-slate-800 p-5 shadow-2xl text-center space-y-4">
                  <div className="text-[10px] text-indigo-400 font-mono uppercase tracking-widest">
                    Status / Story Callout
                  </div>
                  <div className="w-12 h-12 rounded-full bg-indigo-600/20 border border-indigo-500/40 text-indigo-400 flex items-center justify-center mx-auto">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-extrabold text-white font-display">
                    {currentTemplate.headline}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Stop losing customers to slow voice notes. I build sub-0.5s websites with 24/7 Paystack checkout & WhatsApp booking.
                  </p>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs font-bold text-emerald-400">
                    Send "WEBSITE" on WhatsApp to {phone}
                  </div>
                </div>
              )}

              {/* WhatsApp Pitch Script Mockup */}
              {selectedChannel === 'whatsapp_outreach' && (
                <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-xl space-y-3 text-xs">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-800 text-emerald-400 font-mono text-[11px]">
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Pitch Script Format</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 leading-relaxed font-mono whitespace-pre-wrap text-[11px]">
                    {formatText(currentTemplate.body)}
                  </div>
                </div>
              )}

              {/* Google Search Ad Mockup */}
              {selectedChannel === 'google_search' && (
                <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-xl space-y-2 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                    <span className="font-bold text-white">Sponsored</span>
                    <span>·</span>
                    <span className="text-slate-500">https://ochurudigital.com</span>
                  </div>
                  <div className="text-sm font-bold text-indigo-400 hover:underline cursor-pointer">
                    {currentTemplate.headline}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {formatText(currentTemplate.body)}
                  </p>
                </div>
              )}

              {/* LinkedIn Post Mockup */}
              {selectedChannel === 'linkedin_b2b' && (
                <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 shadow-xl space-y-3 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white font-mono text-xs">
                      EO
                    </div>
                    <div>
                      <div className="font-bold text-white">{founderName}</div>
                      <div className="text-[10px] text-slate-400">Web Architect & Founder · 1st</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                    {formatText(currentTemplate.body)}
                  </p>
                </div>
              )}
            </div>

            {/* Right Column: Customizer & Copy Action */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block font-mono">
                  Personalize Your Details
                </span>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">Brand Name:</label>
                    <input
                      type="text"
                      value={agencyBrand}
                      onChange={(e) => setAgencyBrand(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">Founder Name:</label>
                    <input
                      type="text"
                      value={founderName}
                      onChange={(e) => setFounderName(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">WhatsApp & Call Number:</label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">Target Locations / Cities:</label>
                    <input
                      type="text"
                      value={locations}
                      onChange={(e) => setLocations(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Copy Script Container */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white">Full Post Copy & Hashtags:</span>
                  <button
                    type="button"
                    onClick={() => handleCopy(formatText(currentTemplate.body), 'body')}
                    className="px-3 py-1 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium flex items-center gap-1.5 transition-colors font-mono"
                  >
                    {copied === 'body' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied === 'body' ? 'Copied' : 'Copy Copy'}</span>
                  </button>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 max-h-48 overflow-y-auto font-mono whitespace-pre-wrap">
                  {formatText(currentTemplate.body)}
                </div>

                {currentTemplate.hashtags && (
                  <div className="pt-2">
                    <span className="text-[11px] text-slate-400 block mb-1">Recommended Hashtags:</span>
                    <div className="flex flex-wrap gap-1.5 text-[11px] text-indigo-400 font-mono">
                      {currentTemplate.hashtags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Strategy Tip */}
              <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-900/50 text-xs text-slate-300">
                <span className="font-semibold text-indigo-300">Campaign Recommendation: </span>
                {currentTemplate.tips}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
