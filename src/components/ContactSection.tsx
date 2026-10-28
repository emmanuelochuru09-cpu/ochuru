import { useState, useEffect } from 'react';
import { ProjectBrief } from '../types.ts';
import { MessageCircle, PhoneCall, Copy, Check, Send, CheckCircle2, History, RotateCcw } from 'lucide-react';

interface ContactSectionProps {
  initialProjectType?: string;
}

export default function ContactSection({ initialProjectType = '' }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('Professional Business Engine (5–8 pages)');
  const [budget, setBudget] = useState('₦340,000 – ₦650,000 (Business Engine Promo - 15% Off)');
  const [timeline, setTimeline] = useState('Standard (Within 2 weeks)');
  const [details, setDetails] = useState('');
  const [copied, setCopied] = useState(false);
  const [submittedBrief, setSubmittedBrief] = useState<ProjectBrief | null>(null);
  const [inquiries, setInquiries] = useState<ProjectBrief[]>([]);
  const [showInquiriesList, setShowInquiriesList] = useState(false);

  useEffect(() => {
    if (initialProjectType) {
      setProjectType(`Custom Solution modeled after: ${initialProjectType}`);
    }
  }, [initialProjectType]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ochuru_inquiries');
      if (saved) {
        setInquiries(JSON.parse(saved));
      }
    } catch {
      // Local storage fallback
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !businessName.trim()) return;

    const newBrief: ProjectBrief = {
      id: `inq_${Date.now()}`,
      name,
      businessName,
      email: email || 'Not provided',
      phone: phone || 'Not provided',
      projectType,
      budget,
      timeline,
      details: details || 'None specified',
      timestamp: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setSubmittedBrief(newBrief);
    const updated = [newBrief, ...inquiries];
    setInquiries(updated);
    try {
      localStorage.setItem('ochuru_inquiries', JSON.stringify(updated));
    } catch {
      // ignore
    }

    // Auto-open WhatsApp with prepared brief
    const text = `Website Project Inquiry for Emmanuel Ochuru:\nName: ${newBrief.name}\nBusiness: ${newBrief.businessName}\nEmail: ${newBrief.email}\nPhone: ${newBrief.phone}\nProject: ${newBrief.projectType}\nBudget: ${newBrief.budget}\nTimeline: ${newBrief.timeline}\nNotes: ${newBrief.details}`;
    window.open(`https://wa.me/2348032568417?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCopyBrief = () => {
    if (!submittedBrief) return;
    const text = `Website Project Inquiry for Emmanuel Ochuru:\nName: ${submittedBrief.name}\nBusiness: ${submittedBrief.businessName}\nEmail: ${submittedBrief.email}\nPhone: ${submittedBrief.phone}\nProject: ${submittedBrief.projectType}\nBudget: ${submittedBrief.budget}\nTimeline: ${submittedBrief.timeline}\nNotes: ${submittedBrief.details}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-indigo-400 uppercase mb-3">
            <span>Direct WhatsApp & Call Available</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Response in &lt; 15 Mins</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display mb-3"
            style={{ textWrap: 'balance' }}
          >
            Ready to give your business the online presence it deserves?
          </h2>

          <p className="text-sm text-slate-300">
            Fill the project brief below to immediately generate your spec sheet and launch a direct WhatsApp chat with Emmanuel Ochuru.
          </p>

          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setShowInquiriesList(!showInquiriesList)}
              className="text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1.5 font-mono"
            >
              <History className="w-3.5 h-3.5" />
              <span>{showInquiriesList ? 'Hide Submitted Inquiries' : `View Inquiries (${inquiries.length})`}</span>
            </button>
          </div>
        </div>

        {/* Inquiries list if toggled */}
        {showInquiriesList && (
          <div className="mb-8 p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold text-white uppercase font-mono">Client Inquiries & Briefs</span>
              <span className="text-[11px] text-slate-500 font-mono">Saved locally in browser</span>
            </div>
            {inquiries.length === 0 ? (
              <p className="text-xs text-slate-400 text-center py-4">
                No inquiries submitted yet. When customers submit your brief form, they will appear here.
              </p>
            ) : (
              <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                {inquiries.map((inq) => (
                  <div key={inq.id} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">{inq.name} · {inq.businessName}</span>
                      <span className="text-[10px] text-slate-500 font-mono">{inq.timestamp}</span>
                    </div>
                    <div className="text-slate-400">
                      <span className="text-indigo-400">{inq.projectType}</span> · <span className="text-emerald-400">{inq.budget}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 line-clamp-1">{inq.details}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="p-6 sm:p-10 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl">
          {!submittedBrief ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chief Adebayo Balogun"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Business Name or Brand:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Prime Care Dental Clinic"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. contact@primecare.ng"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your WhatsApp / Phone Number:
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 08012345678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Project Scale:
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Starter Business Presence (1–4 pages)">Starter Presence (1–4 pages)</option>
                    <option value="Professional Business Engine (5–8 pages)">Professional Business Engine (5–8 pages)</option>
                    <option value="E-Commerce Store & Paystack">E-Commerce Store & Paystack</option>
                    <option value="Website Redesign & Speed Optimization">Website Redesign & Speed Optimization</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Estimated Budget:
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
                  >
                    <option value="₦110,000 – ₦250,000 (Starter Promo - 15% Off)">₦110,000 – ₦250,000 (Starter Promo - 15% Off)</option>
                    <option value="₦340,000 – ₦650,000 (Business Engine Promo - 15% Off)">₦340,000 – ₦650,000 (Business Engine Promo - 15% Off)</option>
                    <option value="₦765,000 – ₦1,400,000 (Store & Custom Promo - 15% Off)">₦765,000 – ₦1,400,000 (Store & Custom Promo - 15% Off)</option>
                    <option value="₦1,400,000+ (Enterprise Portal)">₦1,400,000+ (Enterprise Portal)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Desired Timeline:
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Rush (Within 5–7 days)">Rush (Within 5–7 days)</option>
                    <option value="Standard (Within 2 weeks)">Standard (Within 2 weeks)</option>
                    <option value="Flexible (Next 30 days)">Flexible (Next 30 days)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  What specific features or results do you need?
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Need WhatsApp booking for our Victoria Island clinic, fast loading on mobile phones, and Google local search presence."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 transition-all font-mono active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>Submit Brief & Open Direct WhatsApp with Emmanuel</span>
              </button>

              <div className="text-[11px] text-center text-slate-500 font-mono">
                Submitting this brief instantly formats your spec sheet and connects you directly with Emmanuel Ochuru on 08032568417.
              </div>
            </form>
          ) : (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-900/60 text-xs text-emerald-300 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Inquiry Ready & Redirecting to WhatsApp! Your project brief is generated below:</span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 font-mono text-xs">
                <div className="text-[11px] text-slate-500 uppercase tracking-wider">Prepared Project Brief:</div>
                <div className="text-slate-300 space-y-1">
                  <div><span className="text-slate-500">Name:</span> {submittedBrief.name}</div>
                  <div><span className="text-slate-500">Business:</span> {submittedBrief.businessName}</div>
                  <div><span className="text-slate-500">Phone/WhatsApp:</span> {submittedBrief.phone}</div>
                  <div><span className="text-slate-500">Email:</span> {submittedBrief.email}</div>
                  <div><span className="text-slate-500">Project:</span> {submittedBrief.projectType}</div>
                  <div><span className="text-slate-500">Budget:</span> {submittedBrief.budget}</div>
                  <div><span className="text-slate-500">Timeline:</span> {submittedBrief.timeline}</div>
                  <div><span className="text-slate-500">Notes:</span> {submittedBrief.details}</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/2348032568417?text=${encodeURIComponent(
                    `Website Project Inquiry for Emmanuel Ochuru:\nName: ${submittedBrief.name}\nBusiness: ${submittedBrief.businessName}\nEmail: ${submittedBrief.email}\nPhone: ${submittedBrief.phone}\nProject: ${submittedBrief.projectType}\nBudget: ${submittedBrief.budget}\nTimeline: ${submittedBrief.timeline}\nNotes: ${submittedBrief.details}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all font-mono"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Send Directly on WhatsApp (08032568417)</span>
                </a>

                <a
                  href="tel:08032568417"
                  className="py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-2 transition-colors font-mono"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Call 08032568417</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyBrief}
                  className="py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-2 transition-colors font-mono"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy Brief'}</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setSubmittedBrief(null)}
                  className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1.5 transition-colors underline underline-offset-4"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
