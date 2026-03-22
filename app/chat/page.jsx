"use client";

import { Send, Sparkles, TerminalSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import BackgroundEffects from "@/components/landing/BackgroundEffects";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { id: Date.now().toString(), role: "user", content: input };
    const currentMessages = [...messages, userMessage];
    setMessages(currentMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: currentMessages }),
      });

      if (!response.ok) throw new Error("API Connection Failed");

      const data = await response.json();
      
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "model",
          content: data.reply || "Error generating response.",
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "model",
          content: `Connection Error: ${err.message}`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative bg-[#050B14] text-white min-h-screen font-sans overflow-hidden selection:bg-[#00E5FF] selection:text-black flex flex-col">

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/20 backdrop-blur-lg">
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex flex-col items-center justify-center -space-y-0.5 group-hover:bg-cyan-500/20 transition-colors">
            {/* Minimalist V logo */}
            <div className="w-2.5 h-[1.5px] bg-cyan-400 rotate-45 transform translate-x-[2px]" />
            <div className="w-2.5 h-[1.5px] bg-cyan-400 -rotate-45 transform -translate-x-[2px]" />
          </div>
          <span className="font-bold tracking-widest text-sm">VANI</span>
        </Link>
        <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          Terminal Mode
        </div>
      </header>

      {/* Chat Area */}
      <div className="relative z-10 flex-1 overflow-y-auto px-4 py-8 md:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center min-h-[50vh] text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-cyan-400" />
              </div>
              <h1 className="text-2xl md:text-3xl font-black mb-3">Initialize VANI OS</h1>
              <p className="text-slate-500 mb-8 max-w-sm">
                Multilingual cognitive engine online. Hindi, Telugu, and English natively supported.
              </p>
              <span className="text-xs uppercase tracking-widest text-cyan-500/60 font-medium">Awaiting input command...</span>
            </motion.div>
          ) : (
            <AnimatePresence initial={false}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-4 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                      message.role === "user" ? "bg-white/10" : "bg-cyan-500/20 border border-cyan-500/30 text-cyan-400"
                    }`}
                  >
                    {message.role === "user" ? (
                      <span className="text-xs font-bold text-slate-300">U</span>
                    ) : (
                      <TerminalSquare className="w-4 h-4" />
                    )}
                  </div>
                  <div
                    className={`px-5 py-3.5 rounded-2xl max-w-[85%] text-sm leading-relaxed ${
                      message.role === "user"
                        ? "bg-white/10 text-white rounded-tr-sm"
                        : "bg-gradient-to-br from-cyan-950/40 to-[#050B14] border border-cyan-500/20 text-slate-300 rounded-tl-sm shadow-[0_4px_24px_-8px_rgba(0,229,255,0.15)]"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}

          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-4 flex-row"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                <TerminalSquare className="w-4 h-4" />
              </div>
              <div className="px-5 py-3.5 rounded-2xl max-w-[85%] bg-gradient-to-br from-cyan-950/40 to-[#050B14] border border-cyan-500/20 rounded-tl-sm shadow-[0_4px_24px_-8px_rgba(0,229,255,0.15)] flex gap-1 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse delay-75" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse delay-150" />
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="relative z-20 p-4 border-t border-white/5 bg-[#03070E]/80 backdrop-blur-xl">
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="relative flex items-end gap-2 bg-white/5 border border-white/10 rounded-2xl p-2 focus-within:border-cyan-500/50 focus-within:ring-1 focus-within:ring-cyan-500/20 transition-all shadow-lg"
          >
            <textarea
              value={input}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  if (input.trim()) handleSubmit(e);
                }
              }}
              placeholder="Query VANI (English / हिन्दी / తెలుగు)..."
              className="w-full max-h-32 bg-transparent text-sm text-white placeholder-slate-500 resize-none outline-none py-3 px-3 min-h-[48px]"
              rows={1}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500 text-black flex items-center justify-center disabled:opacity-50 disabled:bg-white/10 disabled:text-slate-500 transition-colors hover:bg-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.4)] disabled:shadow-none"
            >
              <Send className="w-5 h-5 ml-1" />
            </button>
          </form>
          <div className="text-center mt-3">
            <span className="text-[10px] uppercase tracking-widest text-slate-600 font-semibold">
              Project VANI Engine v1.0 • Built completely from scratch
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
