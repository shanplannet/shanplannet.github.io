"use client";

import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import { useEffect, useState } from "react";

const TITLES = ["Engineering Executive", "CISO & Security Architect"];

export default function HeroSection() {
  const [titleIdx, setTitleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIdx((prev) => (prev + 1) % TITLES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:py-32 flex flex-col justify-center items-center overflow-hidden px-4">
      {/* Background abstract gradient */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none">
        <div className="w-[80vw] h-[80vw] sm:w-[600px] sm:h-[600px] bg-cyan-200/50 rounded-full blur-[100px] absolute -translate-x-1/2" />
        <div className="w-[80vw] h-[80vw] sm:w-[500px] sm:h-[500px] bg-emerald-200/50 rounded-full blur-[100px] absolute translate-x-1/4" />
      </div>

      <div className="z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.a
          href="https://cisowhisperer.com/high-stakes-security-nevadas-casino-cisos-to-watch/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="group mb-4 inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 transition-all text-xs sm:text-sm font-semibold text-emerald-800 shadow-sm hover:shadow hover:-translate-y-0.5"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Featured: Nevada's Casino CISOs to Watch
          <span className="text-emerald-500 group-hover:translate-x-1 transition-transform">➔</span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white/50 backdrop-blur-md text-xs font-mono tracking-wider uppercase text-slate-600 shadow-sm"
        >
          Shan Muthukumarasamy
        </motion.div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-3 h-[120px] sm:h-[130px] flex items-center justify-center">
          <motion.span
            key={titleIdx}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
            transition={{ duration: 0.8, ease: "anticipate" }}
            className={`block ${titleIdx === 0 ? "text-gradient-engineering" : "text-gradient-security"}`}
          >
            {TITLES[titleIdx]}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg sm:text-2xl text-slate-600 font-light max-w-2xl mb-8"
        >
          Building <span className="text-cyan-600 font-medium">Scalable Systems</span>. Hardening <span className="text-emerald-600 font-medium">Global Infrastructure</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#" className="group relative px-6 py-3 rounded-lg overflow-hidden bg-slate-900 text-white font-semibold flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-cyan-900/10">
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group px-6 py-3 rounded-lg border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 transition-all font-semibold flex items-center gap-2 text-slate-700 hover:text-slate-900 shadow-sm">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5 text-slate-500 group-hover:text-[#0A66C2] transition-colors"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-slate-400" />
      </motion.div>
    </section>
  );
}
