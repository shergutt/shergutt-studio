"use client";
import { ExternalLink } from "lucide-react";

const GitHubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const projects = [
  {
    name: "MindForge",
    category: "AI Course Platform",
    description:
      "Full-stack course platform with AI integration. Features course management, PayPal payments, and an AI tutor powered by MiniMax TTS. Seeded with real AI courses in Spanish.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "PayPal", "MiniMax TTS"],
    url: "https://mindforge.valorix.lat",
    github: null,
    status: "Live",
    accent: "#06B6D4",
  },
  {
    name: "Habitly",
    category: "Habit Manager",
    description:
      "A habit tracking app to build and maintain positive routines. Clean interface, progress visualization, and streak tracking.",
    tech: ["React", "Node.js", "MongoDB"],
    url: "https://habitly.valorix.lat",
    github: null,
    status: "Live",
    accent: "#10B981",
  },
  {
    name: "New Jaco Oasis",
    category: "Apartment Rental",
    description:
      "Landing page for a vacation apartment rental in Jacó, Costa Rica. Property showcase, booking info, and contact form for inquiries.",
    tech: ["Next.js", "Tailwind CSS"],
    url: "https://new-jaco-oasis.vercel.app",
    github: null,
    status: "Live",
    accent: "#F59E0B",
  },
  {
    name: "Valorix Global",
    category: "Company Landing Page",
    description:
      "Professional landing page for Valorix — a company offering digital services and solutions. Corporate branding with modern web presence.",
    tech: ["Next.js", "Tailwind CSS"],
    url: "https://valorix-global.vercel.app",
    github: null,
    status: "Live",
    accent: "#8B5CF6",
  },
  {
    name: "Hotel CRM",
    category: "CRM System",
    description:
      "Customer relationship management system tailored for hotel operations. Manages guest profiles, reservations, and communications in one platform.",
    tech: ["React", "Node.js", "PostgreSQL", "Express"],
    url: "https://hotel-crm-five.vercel.app/",
    github: null,
    status: "Live",
    accent: "#EC4899",
  },
  {
    name: "ASR Consultores",
    category: "Consulting Firm",
    description:
      "Professional website for ASR Consultores, a consulting firm. Clean corporate design with service showcases and contact workflows.",
    tech: ["Next.js", "Tailwind CSS"],
    url: "https://asr-consultores.vercel.app",
    github: null,
    status: "Live",
    accent: "#06B6D4",
  },
  {
    name: "La Cuchilla Barbershop",
    category: "Landing Page",
    description:
      "Dark-themed landing page for a barbershop with pricing chart, service-at-home section, and WhatsApp booking integration.",
    tech: ["Next.js", "Tailwind CSS", "WhatsApp API"],
    url: "https://barbershop-landing-ten.vercel.app",
    github: null,
    status: "Live",
    accent: "#D4AF37",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-studio-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-accent text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Selected Work<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="group bg-studio-card border border-white/5 hover:border-white/15 transition-all duration-300 rounded-sm overflow-hidden flex flex-col"
            >
              <div className="h-1 w-full" style={{ backgroundColor: p.accent }} />
              <div className="p-7 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium tracking-wide uppercase" style={{ color: p.accent }}>
                    {p.category}
                  </span>
                  <span className="text-white/30 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.accent }} />
                    {p.status}
                  </span>
                </div>
                <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-200">
                  {p.name}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6 flex-grow">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span key={t} className="text-white/30 text-xs border border-white/10 px-2 py-0.5 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium hover:text-accent transition-colors" style={{ color: p.accent }}>
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-white/40 hover:text-white transition-colors">
                      <GitHubIcon size={14} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
