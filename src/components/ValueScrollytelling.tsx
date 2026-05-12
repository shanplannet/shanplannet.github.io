"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Activity, Zap } from "lucide-react";

export default function ValueScrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const engineeringY = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);
  const engineeringOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  
  const securityY = useTransform(scrollYProgress, [0.4, 0.7], [100, 0]);
  const securityOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);

  return (
    <section ref={containerRef} className="py-16 px-4 relative overflow-hidden bg-slate-50">
      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Engineering Impact */}
        <motion.div 
          style={{ y: engineeringY, opacity: engineeringOpacity }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-10"
        >
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-sm font-mono text-cyan-600 mb-3 tracking-widest uppercase font-semibold">The Engineering Impact</h3>
            <div className="text-6xl md:text-8xl font-bold text-slate-900 mb-4 tracking-tighter">
              $150M<span className="text-cyan-600">+</span>
            </div>
          </div>
          <div className="flex-1 glass-panel p-6 sm:p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap className="w-32 h-32 text-cyan-600" />
            </div>
            <p className="text-xl text-slate-700 relative z-10 leading-relaxed font-light">
              Cumulative operational savings delivered through <strong className="text-slate-900 font-semibold">strategic roadmap modernization</strong> and the decommissioning of legacy applications.
            </p>
          </div>
        </motion.div>

        {/* Security Impact */}
        <motion.div 
          style={{ y: securityY, opacity: securityOpacity }}
          className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-10"
        >
          <div className="flex-1 text-center md:text-right">
            <h3 className="text-sm font-mono text-emerald-600 mb-3 tracking-widest uppercase font-semibold">The Security Impact</h3>
            <div className="text-6xl md:text-8xl font-bold text-slate-900 mb-4 tracking-tighter">
              30%<span className="text-emerald-600">↓</span>
            </div>
          </div>
          <div className="flex-1 glass-panel p-6 sm:p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Activity className="w-32 h-32 text-emerald-600" />
            </div>
            <p className="text-xl text-slate-700 relative z-10 leading-relaxed font-light">
              Reduction in critical incidents orchestrated via a <strong className="text-slate-900 font-semibold">Cloud-Native SOC</strong> and the seamless integration of Cortex XDR.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
