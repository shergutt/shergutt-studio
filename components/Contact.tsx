"use client";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const whatsapp = `https://wa.me/50688888888?text=${encodeURIComponent(
      `Hola Sher, me llamo ${name}.\n\n${message}\n\nMi email: ${email}`
    )}`;
    window.open(whatsapp, "_blank");
    setStatus("sent");
  }

  return (
    <section id="contact" className="py-28 px-6 bg-studio-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — info */}
          <div>
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-medium mb-3">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Let's build something<span className="text-accent">.</span>
            </h2>
            <p className="text-white/40 text-base leading-relaxed mb-10">
              Have a project in mind? A question? Just want to connect?
              Reach out and I'll get back to you as soon as possible.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:shergutt@example.com"
                className="flex items-center gap-3 text-white/50 hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-sm bg-studio-card border border-white/5 flex items-center justify-center group-hover:border-accent/30 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="text-sm">shergutt@example.com</span>
              </a>
            </div>

            {/* Social links */}
            <div className="mt-10 pt-10 border-t border-white/5">
              <p className="text-white/20 text-xs tracking-widest uppercase mb-4">
                Find me online
              </p>
              <div className="flex gap-4">
                {[
                  { label: "GitHub", href: "#" },
                  { label: "Instagram", href: "#" },
                  { label: "Facebook", href: "#" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="text-white/30 text-sm hover:text-accent transition-colors border border-white/10 px-4 py-2 rounded-sm hover:border-accent/30"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-studio-card border border-white/5 rounded-sm p-8 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs tracking-wide uppercase">
                    Name
                  </label>
                  <input
                    name="name"
                    required
                    placeholder="Tu nombre"
                    className="bg-studio-dark border border-white/10 text-white text-sm px-4 py-3 rounded-sm focus:border-accent/50 focus:outline-none transition-colors placeholder:text-white/20"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs tracking-wide uppercase">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="tu@email.com"
                    className="bg-studio-dark border border-white/10 text-white text-sm px-4 py-3 rounded-sm focus:border-accent/50 focus:outline-none transition-colors placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/40 text-xs tracking-wide uppercase">
                  Project Type
                </label>
                <select
                  name="type"
                  className="bg-studio-dark border border-white/10 text-white/60 text-sm px-4 py-3 rounded-sm focus:border-accent/50 focus:outline-none transition-colors cursor-pointer appearance-none"
                >
                  <option>Web Application</option>
                  <option>Landing Page</option>
                  <option>AI Integration</option>
                  <option>Mobile App</option>
                  <option>Backend / API</option>
                  <option>Consulting</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/40 text-xs tracking-wide uppercase">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="bg-studio-dark border border-white/10 text-white text-sm px-4 py-3 rounded-sm focus:border-accent/50 focus:outline-none transition-colors placeholder:text-white/20 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sent"}
                className="bg-accent text-studio-black font-semibold text-sm py-3.5 rounded-sm hover:bg-accent-light transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === "sent" ? (
                  "¡Enviado! Te contactamos pronto."
                ) : (
                  <>
                    <Send size={15} />
                    Enviar Mensaje
                  </>
                )}
              </button>

              {status === "sent" && (
                <p className="text-center text-xs text-white/30">
                  Redirigiendo a WhatsApp...
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
