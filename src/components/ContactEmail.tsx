"use client";

import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";

export default function ContactEmail() {
  const [copied, setCopied] = useState(false);
  // Initial state hides the email in the static HTML rendered by Next.js
  const [emailText, setEmailText] = useState("Loading Secure Contact...");

  // useEffect only runs on the client-side inside the browser.
  // This means scrapers reading the HTML file never see the assembled address.
  useEffect(() => {
    const user = "shanplannet";
    const domain = "gmail.com";
    setEmailText(`${user}@${domain}`);
  }, []);

  const handleAction = () => {
    if (navigator.clipboard && emailText.includes("@")) {
      navigator.clipboard.writeText(emailText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
      
      // Optionally fallback to mail client on click
      window.location.href = `mailto:${emailText}`;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleAction}
        className="group flex flex-col sm:flex-row items-center justify-center gap-4 px-6 py-4 rounded-xl hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all cursor-pointer"
        aria-label="Copy and open email"
      >
        <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
          {emailText}
        </span>
        <div className="bg-slate-200 group-hover:bg-cyan-100 p-2 md:p-3 rounded-lg transition-colors flex items-center gap-2 text-sm font-semibold">
          {copied ? (
            <>
              <Check className="w-5 h-5 text-emerald-600" />
              <span className="text-emerald-700 hidden sm:block">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-5 h-5 text-slate-500 group-hover:text-cyan-700" />
              <span className="text-cyan-800 hidden sm:block group-hover:block">Copy</span>
            </>
          )}
        </div>
      </button>
      
      {copied && (
        <span className="text-emerald-600 font-mono text-sm mt-3 animate-pulse">
          Email address securely copied to clipboard.
        </span>
      )}
    </div>
  );
}
