"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AgentLogo } from "@/components/AgentLogo";
import { Cpu, GitBranch, ArrowDown, ChevronRight } from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import Link from "next/link";


export default function HeroSection() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center py-12 pt-16 px-6 text-center">

      {/* Top status bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center gap-3"
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-widest uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Active Development
        </div>
      </motion.div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <AgentLogo className="w-[280px] md:w-[420px]" />
      </motion.div>

      {/* Headline */}
      <motion.div
        className="max-w-5xl mx-auto mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        <div className="flex flex-col items-center gap-0.5 mb-1">
          <BlurText
            text="My AI assistant,"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-5xl md:text-6xl font-black tracking-tight leading-tight text-white"
          />
          <BlurText
            text="built from scratch."
            delay={200}
            animateBy="words"
            direction="top"
            className="text-5xl md:text-6xl font-black tracking-tight leading-tight text-cyan-500"
          />
        </div>
        <p className="text-lg md:text-md text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
          A personal engineering journey — from a simple chat interface to a
          fully immersive multilingual 3D AI assistant. Built solo, stage by stage.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/chat"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500" />
            <span className="absolute inset-[1.5px] rounded-[10px] bg-[#050B14] group-hover:bg-[#071929] transition-colors" />
            <span className="relative flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
              Query VANI v1.0
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </motion.div>

      {/* Terminal line */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex items-center gap-3 px-6 py-2 rounded-xl bg-black/60 border border-white/8 text-sm font-mono text-slate-400 mb-10 backdrop-blur-sm"
      >
        <Cpu className="w-4 h-4 text-cyan-500" />
        <span className="text-cyan-500">~</span>
        <span className="text-slate-300">building</span>
        <span className="text-cyan-400">project-vani</span>
        <span className="text-slate-500">--stage 1 of 6</span>
        <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1" />
      </motion.div>
      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="flex flex-col items-center gap-2 text-slate-600 text-xs uppercase tracking-widest"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
        Explore
      </motion.div>

    </section>
  );
}
