"use client";

import { motion } from "framer-motion";
import {
  MessageSquare, Languages, Database, Cpu,
  Lock, Brain, ChevronRight
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const features = [
  {
    icon: MessageSquare,
    tag: "Core",
    title: "Real-Time Chat Engine",
    desc: "Persistent conversations with memory — knows your context across sessions without repeating yourself.",
    glow: "cyan",
  },
  {
    icon: Languages,
    tag: "Language",
    title: "Native Multilingual",
    desc: "Thinks in Hindi and Telugu — not translated. Built-in understanding of regional language context and flow.",
    glow: "sky",
  },
  {
    icon: Database,
    tag: "Memory",
    title: "Smart Personal Memory",
    desc: "Remembers your habits, meeting notes, preferences, and workflow patterns. Gets smarter over time.",
    glow: "blue",
  },
  {
    icon: Cpu,
    tag: "Avatar",
    title: "3D Visual Assistant",
    desc: "Evolves from text chat to a fully animated 3D avatar with real-time emotion modelling.",
    glow: "cyan",
  },
  {
    icon: Lock,
    tag: "Infrastructure",
    title: "Self-Hosted & Private",
    desc: "No API rate limits, no third-party dependency. My infrastructure, my rules, always online.",
    glow: "sky",
  },
  {
    icon: Brain,
    tag: "Automation",
    title: "Workflow Automation",
    desc: "Drafts emails, summarises meetings, manages schedules — a personal AI secretary in your pocket.",
    glow: "blue",
  },
];

const glowColors = {
  cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20 group-hover:bg-cyan-500/15",
  sky: "text-sky-400 bg-sky-500/10 border-sky-500/20 group-hover:bg-sky-500/15",
  blue: "text-blue-400 bg-blue-500/10 border-blue-500/20 group-hover:bg-blue-500/15",
};

export default function CoreFeaturesSection() {
  return (
    <section
      id="core"
      className="relative z-10 py-28 px-8 bg-[#03070E] border-y border-white/5 overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-sky-500/4 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-400 text-xs font-semibold uppercase tracking-[3px] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              What I'm Building
            </span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Every feature,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">
                built with purpose.
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-500 font-light md:max-w-sm text-sm leading-relaxed md:text-right"
          >
            No bloat. No filler. Each capability in VANI solves a real problem I face
            daily — and builds toward the final 3D assistant vision.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <SpotlightCard
                className="p-7 h-full"
                spotlightColor={
                  f.glow === "cyan" ? "rgba(0, 229, 255, 0.15)" :
                  f.glow === "sky" ? "rgba(56, 189, 248, 0.15)" :
                  "rgba(59, 130, 246, 0.15)"
                }
              >
                {/* Top shimmer on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Tag + Icon row */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${glowColors[f.glow]}`}>
                    <f.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-600 group-hover:text-slate-400 transition-colors pt-1">
                    {f.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-50 transition-colors">
                  {f.title}
                </h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-4">
                  {f.desc}
                </p>

                <div className="flex items-center gap-1 text-xs text-slate-600 group-hover:text-cyan-500 transition-colors">
                  <span>Stage details</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
