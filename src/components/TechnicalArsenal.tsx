"use client";

import { motion, Variants } from "framer-motion";
import { Cpu, ShieldCheck, Database, Cloud, Lock, Eye, AlertTriangle, Workflow } from "lucide-react";

const ENGINEERING_SKILLS = [
  { name: "AWS & Azure", icon: Cloud, desc: "Cloud-native architectures" },
  { name: "Kubernetes", icon: Workflow, desc: "Orchestration & scaling" },
  { name: "Java & .NET", icon: Cpu, desc: "Legacy refactoring" },
  { name: "Snowflake", icon: Database, desc: "Data strategy" },
];

const SECURITY_SKILLS = [
  { name: "Zero Trust", icon: Lock, desc: "ZTA & Identity" },
  { name: "SOAR / XDR", icon: Eye, desc: "Automated response" },
  { name: "Cortex & SentinelOne", icon: ShieldCheck, desc: "Endpoint security" },
  { name: "MITRE ATT&CK", icon: AlertTriangle, desc: "Threat hunting" },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function TechnicalArsenal() {
  return (
    <section className="py-16 px-4 relative z-10 border-t border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Technical Arsenal</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            A dual-threat capability set combining <span className="text-cyan-600 font-medium">high-velocity engineering</span> with
            <span className="text-emerald-600 font-medium"> military-grade security</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Engineering Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-4">
              <div className="p-2 bg-cyan-100/50 rounded-lg">
                <Cpu className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">Engineering & Cloud</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ENGINEERING_SKILLS.map((skill, i) => (
                <motion.div
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariants}
                  key={skill.name}
                  className="glass-panel p-4 hover:bg-slate-50 border-slate-200 transition-colors group"
                >
                  <skill.icon className="w-8 h-8 text-cyan-600/80 mb-3 group-hover:text-cyan-600 transition-colors" />
                  <h4 className="font-semibold text-slate-800">{skill.name}</h4>
                  <p className="text-sm text-slate-500 mt-1 font-mono">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Security Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-4">
              <div className="p-2 bg-emerald-100/50 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">Security & Architecture</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SECURITY_SKILLS.map((skill, i) => (
                <motion.div
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariants}
                  key={skill.name}
                  className="glass-panel p-4 hover:bg-slate-50 border-slate-200 transition-colors group"
                >
                  <skill.icon className="w-8 h-8 text-emerald-600/80 mb-3 group-hover:text-emerald-600 transition-colors" />
                  <h4 className="font-semibold text-slate-800">{skill.name}</h4>
                  <p className="text-sm text-slate-500 mt-1 font-mono">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
