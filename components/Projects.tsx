"use client";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Mauren Chacon",
    category: "Landing Page — Uñas y estética",
    description:
      "Página profesional para técnica de uñas. Muestra servicios, galería de trabajos, testimonios y flujo de citas. Consultas van directo a WhatsApp.",
    url: "https://nailsalon.shergutt.lat/",
    status: "En vivo",
    accent: "#F4B6C2",
  },
  {
    name: "La Cuchilla Barbershop",
    category: "Landing Page — Barbería",
    description:
      "Landing oscura con tabla de precios, sección de servicio a domicilio e integración de reservas por WhatsApp.",
    url: "https://barbershop-landing-ten.vercel.app",
    status: "En vivo",
    accent: "#D4AF37",
  },
  {
    name: "ASR Consultores",
    category: "Página Web — Despacho jurídico",
    description:
      "Sitio corporativo para despacho de consultoría. Diseño limpio con presentación de servicios, equipo y flujo de contacto profesional.",
    url: "https://asr-consultores.vercel.app",
    status: "En vivo",
    accent: "#06B6D4",
  },
  {
    name: "Sunset Oasis Jacó",
    category: "Landing Page — Alquiler vacacional",
    description:
      "Landing para apartamento de vacaciones en Jacó. Galería de fotos, información del inmueble y formulario de inquiries.",
    url: "https://www.thesunsetoasis.com/",
    status: "En vivo",
    accent: "#F59E0B",
  },
  {
    name: "Hotel CRM",
    category: "Sistema interno — Hotelería",
    description:
      "Sistema de gestión de reservas y perfiles de huéspedes para un hotel pequeño. Administra habitaciones, check-ins y comunicaciones en un solo lugar.",
    url: "https://hotel-crm.shergutt.lat/",
    status: "En vivo",
    accent: "#EC4899",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-studio-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-accent text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Proyectos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Trabajos seleccionados<span className="text-accent">.</span>
          </h2>
          <p className="text-white/40 text-base mt-4 max-w-xl">
            Proyectos reales para negocios reales. Cada uno resuelto con lo que el cliente necesitaba — sin complejidad innecesaria.
          </p>
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
                  <span className="text-white/30 text-xs flex items-center gap-1.5">
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
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-80 transition-opacity"
                    style={{ color: p.accent }}
                  >
                    <ExternalLink size={14} /> Ver proyecto
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
