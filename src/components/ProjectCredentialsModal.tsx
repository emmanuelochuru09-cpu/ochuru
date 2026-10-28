import { useState, useEffect } from 'react';
import { X, Key, Copy, Check, ShieldCheck, Sparkles, Terminal, Code2 } from 'lucide-react';

interface ProjectCredentialsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectCredentialsModal({ isOpen, onClose }: ProjectCredentialsModalProps) {
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [credentials, setCredentials] = useState({
    appName: 'Ochuru Web Studio',
    brandName: 'Ochuru Digital',
    appletId: '88760882-e0cc-4e19-a30f-426b1c8a570d',
    apiKey: 'ochuru_live_api_88760882_b94f27a810934e62',
    status: 'ACTIVE',
    environment: 'production',
  });

  useEffect(() => {
    fetch('/api/credentials')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.apiKey) {
          setCredentials(data);
        }
      })
      .catch(() => {
        // Fallback to initial values
      });
  }, []);

  if (!isOpen) return null;

  const handleCopyKey = () => {
    navigator.clipboard.writeText(credentials.apiKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const sampleSnippet = `// Integrate Ochuru Web Studio API
const response = await fetch("https://ais-dev-dlbdosfbrmlu4csfdu4pac-150250247739.europe-west2.run.app/api/generate-blueprint", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer ${credentials.apiKey}"
  },
  body: JSON.stringify({
    businessName: "Lagos Luxe Clinic",
    industry: "Healthcare & Aesthetics",
    goals: "Direct appointments & Paystack deposits"
  })
});
const data = await response.json();`;

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(sampleSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Key className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                Project Credentials & API Key
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Official API Key & Identification for Ochuru Web Studio
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

        {/* Body */}
        <div className="p-6 space-y-5 text-xs">
          {/* Identity Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Application Name</div>
              <div className="text-sm font-bold text-white">{credentials.appName}</div>
              <div className="text-[11px] text-indigo-400 font-mono">Brand: {credentials.brandName}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Unique Applet ID</div>
              <div className="text-xs font-mono font-bold text-slate-200 break-all">{credentials.appletId}</div>
              <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Status: {credentials.status}</span>
              </div>
            </div>
          </div>

          {/* Generated API Key Card */}
          <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Live Project API Key</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono">256-bit encrypted token</span>
            </div>

            <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800 font-mono">
              <span className="text-white text-xs select-all font-semibold break-all">
                {credentials.apiKey}
              </span>
              <button
                type="button"
                onClick={handleCopyKey}
                className="px-3 py-1.5 rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1 font-mono transition-colors shrink-0"
              >
                {copiedKey ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey ? 'Copied' : 'Copy Key'}</span>
              </button>
            </div>
          </div>

          {/* Integration Snippet */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Quick Integration Example:</span>
              </span>
              <button
                type="button"
                onClick={handleCopySnippet}
                className="text-slate-400 hover:text-white inline-flex items-center gap-1 font-mono text-[11px]"
              >
                {copiedSnippet ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedSnippet ? 'Copied Snippet' : 'Copy Snippet'}</span>
              </button>
            </div>

            <pre className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 overflow-x-auto leading-relaxed">
              {sampleSnippet}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for full-stack API integration</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
