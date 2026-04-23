"use client";
import { MessageSquare, Brush, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Conversamos",
    description:
      "Cuéntanos qué necesitas. Sin tecnicismos, sin compromiso. Entendemos tu situación y te proponemos la mejor opción.",
    accent: "#06B6D4",
  },
  {
    number: "02",
    icon: Brush,
    title: "Diseñamos y construimos",
    description:
      "Preparamos todo basado en lo que acordamos. Te mostramos avances y ajustamos antes de publicar.",
    accent: "#8B5CF6",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Lo lanzamos y lo mantenemos",
    description:
      "Tu proyecto queda listo y funcionando. Si necesitas cambios o soporte, estamos disponibles.",
    accent: "#10B981",
  },
];

export default function Proceso() {
  return (
    <section id="proceso" className="py-28 px-6 bg-studio-dark border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-accent text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Proceso
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Un proceso simple, sin sorpresas<span className="text-accent">.</span>
          </h2>
          <p className="text-white/40 text-base md:text-lg leading-relaxed">
            Tres pasos. De principio a fin. Sin sorpresas, sin letra pequeña.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center mb-6 border"
                  style={{
                    backgroundColor: `${step.accent}14`,
                    borderColor: `${step.accent}33`,
                  }}
                >
                  <Icon size={22} style={{ color: step.accent }} />
                </div>
                <p
                  className="text-xs tracking-[0.2em] uppercase font-medium mb-3"
                  style={{ color: step.accent }}
                >
                  {step.number}
                </p>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
