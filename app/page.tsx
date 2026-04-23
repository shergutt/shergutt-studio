import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ParaQuien from "@/components/ParaQuien";
import Services from "@/components/Services";
import Proceso from "@/components/Proceso";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="bg-studio-black">
      <ScrollReveal />
      <Navbar />
      <FloatingWhatsApp />
      <Hero />
      <ParaQuien />
      <Services />
      <Proceso />
      <Projects />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
