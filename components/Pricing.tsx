import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Landing Page",
    price: "Desde $250",
    badge: "Inicio rápido",
    audience: "Para negocios que necesitan estar online rápido con una página profesional que genera confianza y consultas.",
    features: [
      "1 página profesional lista para vender",
      "Diseño responsive en teléfono y escritorio",
      "Formulario que envía directo a tu WhatsApp",
      "SEO básico para encontrarte en Google",
      "Entrega en 3 a 5 días",
    ],
    cta: "Cotizar landing page",
    accent: "#06B6D4",
  },
  {
    name: "Automatización Simple",
    price: "Desde $350",
    badge: "Ahorra tiempo",
    audience:
      "Para negocios que hacen trabajo manual Repetitivo y quieren automatizar agenda, respuestas o seguimientos.",
    features: [
      "Automatización de respuestas por WhatsApp",
      "Integración con tu agenda o calendario",
      "Notificaciones automáticas a clientes",
      "Conexión con tus herramientas existentes",
      "Reducción de trabajo manual Repetitivo",
    ],
    cta: "Cotizar automatización",
    accent: "#10B981",
  },
  {
    name: "Sistema Interno / Mini CRM",
    price: "Desde $1,500",
    badge: "Orden total",
    audience:
      "Para negocios que necesitan un sistema a la medida para gestionar clientes, citas, historial y operaciones.",
    features: [
      "Sistema a la medida para tu flujo de negocio",
      "Gestión de clientes y seguimiento",
      "Panel de administración claro",
      "Escalable según crezca tu negocio",
      "Incluye hosting y dominio",
    ],
    cta: "Cotizar sistema interno",
    accent: "#F59E0B",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 bg-studio-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-accent text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Precios
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Precios claros, sin sorpresas<span className="text-accent">.</span>
          </h2>
          <p className="text-white/40 text-base md:text-lg leading-relaxed">
            Precios de partida para los servicios más solicitados. Si tu proyecto tiene un alcance diferente, cotizamos a la medida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="flex flex-col rounded-sm border border-white/5 hover:border-white/15 transition-all duration-300 bg-studio-card overflow-hidden"
            >
              <div className="h-1 w-full" style={{ backgroundColor: plan.accent }} />

              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-8">
                  <p
                    className="text-xs tracking-[0.2em] uppercase font-medium mb-3"
                    style={{ color: plan.accent }}
                  >
                    {plan.badge}
                  </p>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                    {plan.price}
                  </span>
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  {plan.audience}
                </p>

                <div className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <div
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: `${plan.accent}14`,
                          color: plan.accent,
                        }}
                      >
                        <Check size={11} />
                      </div>
                      <p className="text-sm leading-relaxed text-white/70">{f}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                    style={{ color: plan.accent }}
                  >
                    {plan.cta} <ArrowRight size={14} />
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
