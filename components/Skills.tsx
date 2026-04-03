"use client";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "FastAPI", "Express", "REST APIs", "GraphQL"],
  },
  {
    title: "Database & Data",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "SQLite", "Redis"],
  },
  {
    title: "AI & APIs",
    skills: ["OpenAI API", "MiniMax TTS", "AI Integration", "LangChain", "Prompt Engineering"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Vercel", "Cloudflare", "Docker", "Git", "CI/CD", "Wasm"],
  },
  {
    title: "Tools & Other",
    skills: ["Figma", "Telegram Bots", "WhatsApp API", "Stripe/PayPal", "n8n"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-studio-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-accent text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Tech Stack<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="flex flex-col">
              <h3 className="text-white/30 text-xs tracking-widest uppercase font-medium mb-4 pb-2 border-b border-white/5">
                {group.title}
              </h3>
              <div className="flex flex-col gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-white/60 text-xs hover:text-accent transition-colors duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
