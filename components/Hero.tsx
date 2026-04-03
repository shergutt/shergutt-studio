"use client";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Label */}
        <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-white/60 text-xs tracking-widest uppercase">
            Available for Projects
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 leading-none">
          Shergutt
          <span className="text-accent">.</span>
        </h1>

        <p className="text-white/50 text-lg md:text-xl mb-2 font-light">
          Full-Stack Developer
        </p>

        {/* Tagline */}
        <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Building web apps, AI integrations, and digital products that work.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="bg-accent text-studio-black px-8 py-3.5 rounded-sm font-semibold text-sm hover:bg-accent-light transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
          >
            View Projects <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="border border-white/20 text-white/70 px-8 py-3.5 rounded-sm font-medium text-sm hover:border-accent hover:text-accent transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="text-accent/50 animate-bounce" />
      </a>
    </section>
  );
}
