"use client";

import { motion, Variants } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Especialistas } from "@/components/Especialistas";
import { Testimonials } from "@/components/Testimonials";
import { LocationMap } from "@/components/LocationMap";
import Footer from "@/components/Footer";

export default function Home() {
  // Definimos la variante con el tipo Variants para que TypeScript no se queje
  const revealVariant: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <main className="min-h-screen bg-white selection:bg-[#14b8a6] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={revealVariant}
          className="max-w-5xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-teal-50 text-[#14b8a6] rounded-full">
            Centro de Fisioterapia Avanzada
          </span>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 mb-8 leading-tight">
            Tu bienestar en <br />
            <span className="text-[#14b8a6] italic font-medium">manos expertas.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Recuperación funcional y alivio del dolor crónico con un enfoque integral y personalizado.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="https://www.doctoralia.es/clinicas/kine-salud-2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg active:scale-95 text-center flex items-center justify-center"
              style={{ backgroundColor: '#14b8a6', color: '#FFFFFF' }} 
            >
              Solicitar Cita
            </a>
            <a 
              href="#servicios" 
              className="font-semibold text-lg text-slate-900 flex items-center gap-2 hover:text-[#14b8a6] transition-colors"
            >
              Nuestros Tratamientos <span>→</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Secciones de la página */}
      <Services />
      <Especialistas />
      <Testimonials />
      <LocationMap />
      <Footer />
      
    </main>
  );
}
