"use client";

import { motion } from "framer-motion";
import { Building2, Shield, Code, Server } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Chief Information Security Officer (CISO)",
    company: "Peppermill Casino & Resorts",
    period: "2024 – Present",
    location: "Reno, NV",
    desc: "Architected an Enterprise-wide Zero Trust Architecture and Cloud-Native SOC, reducing critical incidents by 30% and cutting MTTR by 40% via SOAR automation.",
    tech: ["Zero Trust (ZTA)", "SOAR", "Cortex (XDR)", "SentinelOne"],
    leadership: "Achieved 100% compliance with NV Gaming Board & PCI DSS 4.0",
    icon: Shield,
    color: "emerald"
  },
  {
    role: "Assistant Vice President, IT – Software Engineering & Operations",
    company: "Capital Insurance Group",
    period: "2022 – 2024",
    location: "Reno, NV",
    desc: "Spearheaded a cloud-native SaaS architecture migration improving availability to 99.9%, and architected a Snowflake data strategy.",
    tech: ["AWS", "Guidewire", "Snowflake", "RPA (UiPath)"],
    leadership: "Directed 97+ employees, increasing velocity by 20%",
    icon: Server,
    color: "cyan"
  },
  {
    role: "Director of IT – Software Engineering & Operations",
    company: "Farmers Insurance Group",
    period: "2012 – 2022",
    location: "Woodland Hills, CA",
    desc: "Modernized roadmap decommissioning 40+ legacy apps resulting in $150M savings, and established DevSecOps culture.",
    tech: ["AppDynamics", "Splunk", "Low-Code/AI", "Agile"],
    leadership: "$150M in cumulative operational savings",
    icon: Code,
    color: "cyan"
  }
];

export default function ExperienceTimeline() {
  return (
    <section className="py-16 px-4 bg-white relative z-10 border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-slate-900">Experience Timeline</h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px timeline-line z-0" />

          <div className="space-y-10 relative z-10">
            {EXPERIENCES.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row gap-6 ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-50 border-2 border-slate-200 items-center justify-center shadow-sm z-20">
                    <exp.icon className={`w-4 h-4 ${exp.color === "emerald" ? "text-emerald-500" : "text-cyan-600"}`} />
                  </div>

                  {/* Content Card */}
                  <div className="md:w-1/2 pl-12 md:pl-0">
                    <div className="glass-panel p-6 sm:p-8 hover:border-slate-300 transition-colors">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                          <div className="flex items-center gap-2 text-slate-600 text-sm">
                            <Building2 className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <span className="text-sm font-mono text-slate-500 whitespace-nowrap">{exp.period}</span>
                      </div>
                      
                      <p className="text-slate-700 leading-relaxed mb-6 font-light">{exp.desc}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Tech Stack</div>
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((t) => (
                              <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-slate-100/80 text-slate-700 border border-slate-200">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Leadership Impact</div>
                          <div className={`px-3 py-1.5 text-sm rounded inline-block border ${
                            exp.color === "emerald" 
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
                              : "bg-cyan-50 text-cyan-700 border-cyan-200"
                          }`}>
                            {exp.leadership}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
