"use client";

import { motion } from "framer-motion";
import {
  MessageSquare, Globe, UserCircle, Cuboid, Network, Star,
  CheckCircle2, ArrowRight, Clock
} from "lucide-react";

const phases = [
  {
    stage: "01",
    duration: "~1 month",
    status: "current",
    title: "Real-Time AI Foundation",
    detail: "Building the core. A working chat engine with auth, memory, and persistent history. The skeleton everything else runs on.",
    icon: MessageSquare,
    features: ["Real-time chat interface", "User auth & sessions", "Chat history & memory persistence"],
    output: "Working conversation engine",
  },
  {
    stage: "02",
    duration: "~1 month",
    status: "upcoming",
    title: "Multilingual Expansion",
    detail: "Teaching VANI to truly understand Hindi and Telugu — not just translate, but think in those languages contextually.",
    icon: Globe,
    features: ["Native Telugu & Hindi processing", "Code-switching support", "Basic voice input mode"],
    output: "Multilingual conversation base",
  },
  {
    stage: "03",
    duration: "~1 month",
    status: "upcoming",
    title: "2D Visual Identity",
    detail: "VANI gets a face. A 2D animated avatar synced with voice responses — moving past the plain text box.",
    icon: UserCircle,
    features: ["2D animated avatar", "Face tracking & lip sync", "Synchronized chat + voice"],
    output: "Interactive 2D assistant",
  },
  {
    stage: "04",
    duration: "~2 months",
    status: "upcoming",
    title: "3D Immersive System",
    detail: "The big one. Full Three.js 3D avatar with real-time animations driven by an emotion matrix. The vision.",
    icon: Cuboid,
    features: ["Real-time 3D character", "Emotion modelling engine", "Spatial audio responses"],
    output: "Fully interactive 3D virtual assistant",
  },
  {
    stage: "05",
    duration: "~1 month",
    status: "upcoming",
    title: "Automation Layer",
    detail: "VANI starts doing things, not just saying things. Email drafting, meeting summaries, personal workflow management.",
    icon: Network,
    features: ["Email generation & sending", "Meeting note summariser", "Smart task & calendar hooks"],
    output: "Personal AI secretary",
  },
  {
    stage: "06",
    duration: "Ongoing",
    status: "future",
    title: "Polish & Expand",
    detail: "Refinement, performance, and new capabilities. The project never truly ends — it just keeps getting better.",
    icon: Star,
    features: ["Performance optimisation", "Plugin architecture", "Enterprise-grade extensibility"],
    output: "Production-quality personal assistant",
  },
];

const statusConfig = {
  current: { label: "In Progress", classes: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400", dot: "bg-emerald-400 animate-pulse" },
  upcoming: { label: "Planned", classes: "bg-white/5 border-white/10 text-slate-400", dot: "bg-slate-500" },
  future: { label: "Future", classes: "bg-blue-500/10 border-blue-500/20 text-blue-400", dot: "bg-blue-400" },
};

export default function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="relative z-10 py-32 px-6 overflow-hidden bg-[#03070E]"
    >
      {/* Ambient */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/4 blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-semibold uppercase tracking-[3px] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Development Roadmap
          </span>
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              6 stages.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
                One destination.
              </span>
            </h2>
            <p className="text-slate-500 font-light text-sm md:max-w-xs leading-relaxed md:mb-1">
              A personal ~6-month sprint from basic chat to a fully immersive 3D AI assistant.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-6">
          {/* Vertical line */}
          <div className="absolute left-[calc(2.5rem-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-white/10 to-transparent hidden md:block" />

          {phases.map((phase, i) => {
            const status = statusConfig[phase.status];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.07 }}
                className="relative flex gap-6 items-start group"
              >
                {/* Stage node */}
                <div className="relative flex-shrink-0 hidden md:flex">
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center z-10 transition-all duration-300 ${
                    phase.status === "current"
                      ? "bg-cyan-500 border-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.5)]"
                      : "bg-[#03070E] border-white/15 group-hover:border-cyan-500/40"
                  }`}>
                    <phase.icon className={`w-4 h-4 ${phase.status === "current" ? "text-black" : "text-slate-500 group-hover:text-cyan-400 transition-colors"}`} />
                  </div>
                </div>

                {/* Card */}
                <div className={`flex-1 rounded-2xl border p-6 md:p-8 transition-all duration-300 ${
                  phase.status === "current"
                    ? "bg-gradient-to-br from-cyan-950/30 to-transparent border-cyan-500/25 shadow-[0_0_40px_rgba(0,229,255,0.05)]"
                    : "bg-white/2 border-white/6 hover:border-white/12"
                }`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl font-black text-white/10 leading-none select-none">{phase.stage}</span>
                      <div>
                        <h3 className="text-lg font-bold text-white">{phase.title}</h3>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                          <Clock className="w-3 h-3" />
                          {phase.duration}
                        </div>
                      </div>
                    </div>
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium ${status.classes}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                      {status.label}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm font-light leading-relaxed mb-5">
                    {phase.detail}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {phase.features.map((f, j) => (
                      <span key={j} className="flex items-center gap-1.5 text-xs text-slate-400 bg-white/4 border border-white/8 px-3 py-1.5 rounded-lg">
                        <CheckCircle2 className="w-3 h-3 text-cyan-600" />
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Output: </span>
                    <span className="text-cyan-500 font-medium">{phase.output}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
