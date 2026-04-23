"use client";
import { ArrowRight, Check } from "lucide-react";

type Service = {
  name: string;
  price: string;
  description: string;
  features: string[];
  accent: string;
  badge: string;
};

const services: Service[] = [
  {
    name: "Landing Page",
    price: "Desde $250",
    badge: "Inicio rápido",
    description:
      "Para negocios que necesitan estar online rápido y bien. Una página que presenta tu trabajo, genera confianza y envía consultas directo a tu WhatsApp.",
    features: [
      "1 página profesional lista para vender",
      "Diseño responsive en teléfono y escritorio",
      "Formulario que envía a tu WhatsApp",
      "SEO básico para que te encuentren en Google",
      "Entrega en 3-5 días",
    ],
    accent: "#06B6D4",
  },
  {
    name: "Página Web Empresarial",
    price: "Desde $650",
    badge: "Presencia completa",
    description:
      "Para negocios que necesitan más que una landing. Presentación completa de servicios, sobre ti, galerías, testimonios y un sistema de contacto que funciona.",
    features: [
      "Hasta 5 páginas personalizadas",
      "Diseño profesional y único para tu negocio",
      "Galería de servicios o trabajos",
      "Sistema de contacto y agenda",
      "SEO avanzado y estadísticas básicas",
    ],
    accent: "#8B5CF6",
  },
  {
    name: "Automatización Simple",
    price: "Desde $350",
    badge: "Ahorra tiempo",
    description:
      "Para negocios que hacen trabajo manual Repetitivo. Conectamos herramientas para que tu agenda, respuestas y seguimientos fluyan solos.",
    features: [
      "Automatización de respuestas por WhatsApp",
      "Integración con agenda o calendario",
      "Notificaciones automáticas a clientes",
      "Conexión con tus herramientas existentes",
      "Reducción de trabajo manual Repetitivo",
    ],
    accent: "#10B981",
  },
  {
    name: "Sistema Interno / Mini CRM",
    price: "Desde $1,500",
    badge: "Orden total",
    description:
      "Para negocios que necesitan orden. Un sistema a la medida para gestionar clientes, citas, historial y operaciones — sin complicaciones.",
    features: [
      "Sistema a la medida para tu flujo",
      "Gestión de clientes y seguimiento",
      "Panel de administración claro",
      "Escalable según crezca tu negocio",
      "Incluye hosting y dominio",
    ],
    accent: "#F59E0B",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-studio-black">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-accent text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Servicios
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Lo que hacemos por ti<span className="text-accent">.</span>
          </h2>
          <p className="text-white/40 text-base md:text-lg leading-relaxed">
            Cuatro propuestas claras para cada etapa de tu negocio. Sin sorpresas, sin tecnicismos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <article
              key={s.name}
              className="bg-studio-card border border-white/5 hover:border-white/15 transition-all duration-300 rounded-sm overflow-hidden flex flex-col"
            >
              <div className="h-1 w-full" style={{ backgroundColor: s.accent }} />

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p
                      className="text-xs tracking-[0.2em] uppercase font-medium mb-2"
                      style={{ color: s.accent }}
                    >
                      {s.badge}
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-1">
                      {s.name}
                    </h3>
                    <p className="text-white/30 text-sm">{s.price}</p>
                  </div>
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {s.description}
                </p>

                <div className="space-y-2.5 flex-grow">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <div
                        className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: `${s.accent}20`,
                          color: s.accent,
                        }}
                      >
                        <Check size={10} />
                      </div>
                      <p className="text-sm leading-relaxed text-white/60">{f}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5 mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                    style={{ color: s.accent }}
                  >
                    Cotizar este servicio <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
