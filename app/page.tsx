"use client"; // <--- ESTO ES VITAL para que las animaciones funcionen

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  // Configuración de la animación: Aparece desde abajo (y: 20) y se vuelve opaco
  const revealVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section Animada al Cargar */}
      <section className="relative pt-44 pb-20 px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealVariant}
          className="max-w-5xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-teal-50 text-clinic-primary rounded-full">
            Centro de Fisioterapia Avanzada
          </span>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-clinic-secondary mb-8 leading-tight">
            Tu bienestar en <br />
            <span className="text-clinic-primary italic font-medium">manos expertas.</span>
          </h1>

          <p className="text-xl md:text-2xl text-clinic-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Especialistas en recuperación funcional y alivio del dolor crónico con tecnología de vanguardia.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
  <a
    href="https://www.doctoralia.es/clinicas/kine-salud-2"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg active:scale-95 text-center flex items-center justify-center"
    style={{ 
      backgroundColor: '#14b8a6', // Este es el verde Teal sólido
      color: '#FFFFFF',           // Blanco puro
      display: 'flex',
      minWidth: '200px'
    }} 
  >
    Solicitar Cita
  </a>
  
  <a 
    href="#servicios" 
    className="font-semibold text-lg flex items-center gap-2 transition-colors cursor-pointer"
    style={{ color: '#1f2937' }} // Gris muy oscuro casi negro
  >
    Nuestros Tratamientos
    <span>→</span>
  </a>
</div>
        </motion.div>
      </section>

      {/* Sección de Servicios con Scroll Reveal (Se activa al bajar) */}
      <motion.section
        id="servicios"
        initial="hidden"
        whileInView="visible" // <--- Aquí ocurre la magia del scroll
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariant}
        className="bg-clinic-bg py-24 rounded-[48px] mx-4 mb-12"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-clinic-secondary">
                Servicios <br /> Especializados
              </h2>
            </div>
            <p className="text-clinic-muted max-w-sm">
              Combinamos terapia manual, osteopatía y ejercicio terapéutico para tu salud integral.
            </p>
          </div>

          <Services />
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}