"use client";

const niches = [
  { label: "Abogados y despachos jurídicos", icon: "⚖️" },
  { label: "Consultorios y profesionales de salud", icon: "🏥" },
  { label: "Clínicas de estética y belleza", icon: "✨" },
  { label: "Barberos y salones de belleza", icon: "💈" },
  { label: "Negocios de servicios con citas", icon: "📅" },
];

export default function ParaQuien() {
  return (
    <section id="para-quien" className="py-28 px-6 bg-studio-dark border-y border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-accent text-xs tracking-[0.3em] uppercase font-medium mb-3">
          Para quién trabajamos
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
          Trabajamos con negocios de servicios<br className="hidden md:block" /> que necesitan verse mejor y captar más clientes<span className="text-accent">.</span>
        </h2>
        <p className="text-white/40 text-base md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
          Si eres un profesional independiente o lideras un equipo pequeño y sabes que tu presencia online no está a la altura de la calidad de tu trabajo, estamos aquí para ayudarte.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {niches.map((n) => (
            <div
              key={n.label}
              className="flex items-center gap-2.5 bg-studio-card border border-white/5 px-4 py-2.5 rounded-sm text-sm text-white/60 hover:border-accent/30 hover:text-white/80 transition-all duration-200"
            >
              <span className="text-base">{n.icon}</span>
              <span>{n.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
