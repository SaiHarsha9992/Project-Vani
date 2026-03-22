"use client";

import { motion } from "framer-motion";
import { Terminal, Lightbulb, Route, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const whyCards = [
  {
    icon: Terminal,
    title: "Why I'm building it",
    body: "I wanted a personal AI assistant that actually works my way — multilingual, memory-aware, and not locked behind expensive APIs or rate limits.",
    accent: "cyan",
  },
  {
    icon: Lightbulb,
    title: "What makes it different",
    body: "Not a clone of ChatGPT. VANI is designed to become a 3D visual entity — something you interact with, not just type at.",
    accent: "sky",
  },
  {
    icon: Route,
    title: "The long game",
    body: "This is a 6-stage roadmap starting from a basic chat interface and growing into a fully immersive AI secretary.",
    accent: "blue",
  },
];

const checks = [
  "Self-hosted, no API dependency",
  "Understands Hindi & Telugu natively",
  "Persistent memory per session",
  "3D avatar in the final stage",
  "Email & workflow automation",
  "100% built by developer",
];

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="relative z-10 py-28 px-8 overflow-hidden bg-[#03070E]"
    >
      {/* Ambient */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/4 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-semibold uppercase tracking-[3px]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            The Vision
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-5">
            Not a product.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
              A personal challenge.
            </span>
          </h2>
          <p className="text-lg text-slate-500 font-light leading-relaxed">
            VANI is my answer to a simple question: can one person build a truly intelligent,
            multilingual, visually immersive AI assistant — completely from scratch?
          </p>
        </motion.div>

        {/* Why Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {whyCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <SpotlightCard className="p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center mb-6">
                  <card.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed">{card.body}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Feature checklist — full width frosted panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm overflow-hidden"
        >
          {/* Decorative top line */}
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3 flex-shrink-0">
                <p className="text-xs uppercase tracking-[3px] text-cyan-500 font-semibold mb-3">What VANI will do</p>
                <h3 className="text-2xl font-black text-white leading-snug">
                  Everything I ever wished my AI could handle.
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4 flex-1">
                {checks.map((check, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    className="flex items-center gap-3 text-slate-300 text-sm font-light"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                    {check}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
