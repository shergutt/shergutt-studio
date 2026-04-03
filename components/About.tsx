"use client";
import { MapPin, Code2, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-studio-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <div>
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-medium mb-3">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
              Building digital experiences<span className="text-accent">.</span>
            </h2>

            <div className="space-y-5 text-white/50 leading-relaxed text-base">
              <p>
                We're a full-stack development studio. We build web applications,
                AI-powered tools, and digital products — from concept to deployment.
              </p>
              <p>
                We work across the entire stack: modern React frontends, robust backends,
                database design, and cloud deployments. We care about clean code,
                fast interfaces, and products that actually solve problems.
              </p>
              <p>
                Whether it's a course platform with AI integration, a CRM system, or a
                landing page — we treat every project with the same standard: ship
                something that works and sounds right.
              </p>
            </div>

            {/* Quick facts */}
            <div className="flex flex-col sm:flex-row gap-6 mt-10 pt-10 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-white/90 text-sm font-medium">Based in</p>
                  <p className="text-white/40 text-xs">Worldwide</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Code2 size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-white/90 text-sm font-medium">Full-Stack</p>
                  <p className="text-white/40 text-xs">End-to-end development</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Zap size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-white/90 text-sm font-medium">Deploying on</p>
                  <p className="text-white/40 text-xs">Vercel, Cloudflare</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative code block */}
          <div className="hidden lg:block">
            <div className="bg-studio-card border border-white/5 rounded-sm p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="text-white/20 text-xs ml-2">shergutt.js</span>
              </div>
              <pre className="text-white/40 text-xs leading-relaxed overflow-x-auto">
                <code>{`const dev = {
  name: "Shergutt",
  title: "Full-Stack Developer",
  location: "Worldwide",
  
  stack: [
    "React", "Next.js", "TypeScript",
    "Node.js", "Python",
    "PostgreSQL", "MongoDB",
    "Prisma", "Tailwind CSS",
    "AI APIs", "Cloudflare",
  ],
  
  focus: [
    "Web Applications",
    "AI Integration",
    "Digital Products",
    "Fast UX",
  ],
  
  available: true,
};`}</code>
              </pre>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
