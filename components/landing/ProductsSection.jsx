"use client";

import { motion } from "framer-motion";
import { Globe, Cuboid, Sparkles } from "lucide-react";

const tiers = [
  {
    icon: Globe,
    phase: "Stage 1–2",
    title: "Text & Voice Assistant",
    sub: "The starting point",
    desc: "A fast, multilingual conversational AI. Handles complex queries in English, Hindi and Telugu. Persistent memory, voice input, and blazing response speeds — all running on my own infrastructure.",
    features: [
      "Web + mobile browser access",
      "Native multilingual processing",
      "Voice input & audio responses",
      "Persistent personal memory",
    ],
    cardClass: "from-[#0a1a2e] to-[#050B14] border-white/10",
    glowClass: "bg-sky-500/5 group-hover:bg-sky-500/10",
    iconClass: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    tagClass: "text-sky-400 bg-sky-500/8 border-sky-500/20",
    premium: false,
  },
  {
    icon: Cuboid,
    phase: "Stage 3–4",
    title: "3D Avatar Experience",
    sub: "The end goal",
    desc: "VANI becomes a fully rendered 3D character. Real-time animations, emotion-driven responses, lip-sync voice output. You don't just chat with it — you interact with it as if it's there.",
    features: [
      "High-fidelity real-time 3D avatar",
      "Emotion-driven animation engine",
      "Spatial voice & lip-sync output",
      "Full 3D environment customisation",
    ],
    cardClass: "from-cyan-950/40 to-[#050B14] border-cyan-500/25",
    glowClass: "bg-cyan-500/5 group-hover:bg-cyan-500/12",
    iconClass: "text-cyan-300 bg-cyan-500/15 border-cyan-400/30 shadow-[0_0_24px_rgba(0,229,255,0.15)]",
    tagClass: "text-cyan-300 bg-cyan-500/10 border-cyan-500/25",
    premium: true,
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="relative z-10 py-32 px-6 bg-[#03070E] border-t border-white/5 overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-500/4 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-semibold uppercase tracking-[3px] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            End Goal
          </span>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Two forms.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
              One VANI.
            </span>
          </h2>
          <p className="text-slate-500 font-light leading-relaxed">
            The project evolves through 6 stages into two distinct experiences — a fast text-and-voice assistant first, then the full 3D avatar experience.
          </p>
        </motion.div>

        {/* Tier Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className={`relative p-8 md:p-10 rounded-[2rem] bg-gradient-to-br border transition-all duration-500 group overflow-hidden ${tier.cardClass}`}
            >
              {/* Glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 blur-[80px] rounded-full pointer-events-none transition-colors duration-500 ${tier.glowClass}`} />

              {/* Phase badge */}
              <div className="flex items-center justify-between mb-8">
                <span className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border ${tier.tagClass}`}>
                  {tier.phase}
                </span>
                {tier.premium && (
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500 text-black">
                    Final Stage
                  </span>
                )}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center mb-6 transition-colors ${tier.iconClass}`}>
                <tier.icon className="w-8 h-8" />
              </div>

              <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-2">{tier.sub}</p>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">{tier.title}</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed mb-8">
                {tier.desc}
              </p>

              <ul className="space-y-3">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-slate-300 font-light">
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${tier.premium ? "bg-cyan-400 shadow-[0_0_8px_rgba(0,229,255,0.6)]" : "bg-sky-400"}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
