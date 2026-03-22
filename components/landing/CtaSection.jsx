"use client";

import { motion } from "framer-motion";
import GradualBlur from "@/components/ui/GradualBlur";
import { Sparkles, ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section
      id="cta"
      className="relative z-10 bg-[#03070E] border-t border-white/5 overflow-hidden"
    >
      {/* Scrollable content wrapper with GradualBlur at bottom */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div className="py-32 px-8">
          <div className="max-w-5xl mx-auto">
            {/* Ambient glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[600px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 text-center max-w-3xl mx-auto"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-semibold uppercase tracking-[3px] mb-8">
                <Sparkles className="w-3.5 h-3.5" />
                Follow the journey
              </div>

              <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-white mb-5">
                This is just{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
                  Stage 1.
                </span>
              </h2>

              <p className="text-slate-500 font-light text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                VANI is a living project. Each stage builds on the last — from text chat to a
                fully immersive 3D AI assistant. Watch it evolve.
              </p>

              {/* Stage progress indicators */}
              <div className="flex items-center justify-center gap-2 mb-10">
                {[1, 2, 3, 4, 5, 6].map((s) => (
                  <div
                    key={s}
                    className={`rounded-full transition-all duration-300 ${
                      s === 1
                        ? "w-8 h-2 bg-cyan-500 shadow-[0_0_12px_rgba(0,229,255,0.6)]"
                        : "w-2 h-2 bg-white/15"
                    }`}
                  />
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="#roadmap"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold overflow-hidden"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500" />
                  <span className="absolute inset-[1.5px] rounded-[10px] bg-[#050B14] group-hover:bg-[#071929] transition-colors" />
                  <span className="relative flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    See the roadmap
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>

                <motion.a
                  href="#vision"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-400 hover:text-white border border-white/8 hover:border-white/20 bg-white/3 hover:bg-white/6 transition-all"
                >
                  Read the vision
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* GradualBlur fading into the footer */}
        <GradualBlur
          target="parent"
          position="bottom"
          height="7rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential
          opacity={1}
          zIndex={10}
        />
      </div>
    </section>
  );
}
