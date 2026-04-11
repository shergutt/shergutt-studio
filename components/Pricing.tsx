import { ArrowRight, Check } from "lucide-react";

type Plan = {
  name: string;
  price: string;
  audience: string;
  details: string[];
  cta: string;
  accent: string;
  featured: boolean;
  badge: string;
  note?: string;
};

const plans: Plan[] = [
  {
    name: "Landing Page",
    price: "$200 USD",
    audience: "For freelancers and new businesses that need to be online now.",
    details: [
      "1 professional landing page ready to sell",
      "Looks perfect on phone and desktop",
      "Contact form that sends leads straight to your WhatsApp",
      "Basic SEO so customers can find you on Google",
      "Ready in just 3 days",
    ],
    cta: "Book This Package",
    accent: "#06B6D4",
    featured: true,
    badge: "Fast launch",
  },
  {
    name: "Sistema web / CRM",
    price: "Desde $500 USD",
    audience:
      "Ideal para gestionar clientes y operaciones de negocio, por ejemplo inventarios, hoteles u otros procesos administrativos.",
    details: [
      "Sistema web hecho a la medida para procesos internos",
      "También incluye hosting y dominio",
      "Panel para administrar clientes, ventas u operaciones",
      "Escalable según el flujo de tu negocio",
      "No incluye manejo de documentos ni archivos multimedia",
    ],
    note: "Esas funciones tienen un costo adicional.",
    cta: "Cotizar este sistema",
    accent: "#F59E0B",
    featured: false,
    badge: "Custom ops",
  },
  {
    name: "Tienda online / Ecommerce",
    price: "$650 USD",
    audience:
      "Incluye página web ecommerce con integración de PayPal Checkout para pagos en línea.",
    details: [
      "Catálogo de productos listo para vender",
      "Checkout con PayPal para pagos en línea",
      "También incluye hosting y dominio",
      "Diseño responsive para teléfono y escritorio",
      "Base lista para seguir creciendo tu tienda",
    ],
    cta: "Cotizar esta tienda",
    accent: "#22C55E",
    featured: false,
    badge: "Online sales",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-studio-black py-28 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-accent text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Packages that ship fast<span className="text-accent">.</span>
          </h2>
          <p className="text-white/40 text-base md:text-lg leading-relaxed">
            Clear starting prices for the most requested projects. If your scope
            is different, we can quote a custom build.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-sm border overflow-hidden transition-all duration-300 ${
                plan.featured
                  ? "bg-studio-card border-accent/30 shadow-[0_0_0_1px_rgba(6,182,212,0.14)]"
                  : "bg-studio-dark border-white/5 hover:border-white/15"
              }`}
            >
              <div className="h-1 w-full" style={{ backgroundColor: plan.accent }} />

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div>
                    <p
                      className="text-xs tracking-[0.25em] uppercase font-medium mb-3"
                      style={{ color: plan.accent }}
                    >
                      {plan.badge}
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {plan.name}
                    </h3>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                        {plan.price}
                      </span>
                    </div>
                  </div>

                  {plan.featured ? (
                    <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                      Most popular
                    </span>
                  ) : null}
                </div>

                <p className="text-white/50 leading-relaxed mb-8 min-h-[96px]">
                  {plan.audience}
                </p>

                <div className="space-y-3 mb-8 flex-grow">
                  {plan.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-3">
                      <div
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border"
                        style={{
                          borderColor: `${plan.accent}33`,
                          backgroundColor: `${plan.accent}14`,
                          color: plan.accent,
                        }}
                      >
                        <Check size={12} />
                      </div>
                      <p className="text-sm leading-relaxed text-white/70">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5">
                  {plan.note ? (
                    <p className="text-xs leading-relaxed text-white/35 mb-4">
                      {plan.note}
                    </p>
                  ) : null}

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
                    style={{ color: plan.accent }}
                  >
                    {plan.cta}
                    <ArrowRight size={14} />
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
