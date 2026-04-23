"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Necesito saber de tecnología para trabajar con ustedes?",
    a: "No. Nosotros manejamos todo el proceso técnico. Tú nos cuentas qué necesitas en palabras simples y nosotros lo traducimos a una solución digital.",
  },
  {
    q: "¿En cuánto tiempo está listo mi proyecto?",
    a: "Una landing page puede estar lista en 3 a 5 días. Proyectos más grandes como páginas web o sistemas se cotizan según el alcance específico.",
  },
  {
    q: "¿Pueden trabajar con profesionales independientes o solo empresas grandes?",
    a: "Trabajamos principalmente con independientes y negocios pequeños. Ese es nuestro nicho y donde mejor sabemos añadir valor.",
  },
  {
    q: "¿Qué pasa si después de entregado quiero hacer cambios?",
    a: "Puedes contratar un plan de mantenimiento mensual o pedir cambios puntuales por separado. Sin compromisos forzosos.",
  },
  {
    q: "¿Hacemos reuniones virtuales?",
    a: "Sí. Trabajamos con clientes en todo Costa Rica por videollamada, WhatsApp o como prefieras.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 px-6 bg-studio-black">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-accent text-xs tracking-[0.3em] uppercase font-medium mb-3">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Preguntas frecuentes<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between bg-studio-card border border-white/5 hover:border-white/15 transition-all duration-200 rounded-sm px-6 py-5 text-left group"
              >
                <span className="text-white/80 text-sm font-medium pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-white/30 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="bg-studio-dark border border-white/5 border-t-0 rounded-b-sm px-6 py-5">
                  <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
