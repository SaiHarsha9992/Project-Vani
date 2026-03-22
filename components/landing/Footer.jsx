"use client";

import { motion } from "framer-motion";
import { AgentLogo } from "@/components/AgentLogo";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight, Code2, Sparkles } from "lucide-react";

const navLinks = [
  { label: "The Vision", href: "#vision" },
  { label: "Capabilities", href: "#core" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "End Goal", href: "#products" },
];

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Twitter, label: "Twitter / X", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@projectvani.dev" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#020509] border-t border-white/6 overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-16 bg-cyan-500/5 blur-[60px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 pt-20 pb-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-16">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-6"
          >
            <AgentLogo className="w-36 mb-6 opacity-90" />

            <p className="text-slate-500 font-light text-sm leading-relaxed max-w-sm mb-6">
              A personal AI engineering project. Building a multilingual, memory-aware,
              3D virtual assistant — one stage at a time. No team. No VC. Just code.
            </p>

            {/* Status + stack pills */}
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                Stage 1 — In Progress
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-slate-500 text-xs font-medium">
                <Code2 className="w-3 h-3" />
                Solo Project · 2026
              </div>
            </div>
          </motion.div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Nav Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2"
          >
            <h5 className="text-xs font-bold text-white uppercase tracking-[3px] mb-5">
              Sections
            </h5>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 text-slate-500 hover:text-cyan-400 transition-colors text-sm font-light"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-0.5 group-hover:translate-y-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Built With */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:col-span-3"
          >
            <h5 className="text-xs font-bold text-white uppercase tracking-[3px] mb-5">
              Built With
            </h5>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "Python", "Three.js", "GSAP", "OpenAI", "TailwindCSS", "Framer Motion"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-slate-500 font-mono px-2.5 py-1 rounded-lg bg-white/4 border border-white/6 hover:border-cyan-500/20 hover:text-slate-400 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-2 text-slate-600 text-xs font-light">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600/40" />
            <span>© 2026 Project VANI — A personal project by Harsha.</span>
          </div>

          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/4 border border-white/6 text-slate-500 hover:text-cyan-400 hover:bg-cyan-500/8 hover:border-cyan-500/25 transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
