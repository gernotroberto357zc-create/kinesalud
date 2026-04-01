// app/page.tsx
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import Footer from "@/components/Footer"; // 1. Importamos el nuevo componente

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section: Salud Profesional */}
      <Navbar />
      <section className="relative pt-44 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
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
            <button className="w-full sm:w-auto bg-clinic-primary text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-teal-700 transition-all shadow-lg shadow-teal-900/10 active:scale-95">
              Solicitar Cita
            </button>
            <button className="group text-clinic-secondary font-semibold text-lg flex items-center gap-2 hover:text-clinic-primary transition-colors">
              Nuestros Tratamientos 
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Bento Grid con fondo suave de clínica */}
      <section id="servicios" className="bg-clinic-bg py-24 rounded-[48px] mx-4 mb-12"> {/* Añadido mb-12 para separar del footer */}
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
      </section>
      
      {/* 2. Sustituimos el footer viejo por el componente profesional */}
      <Footer />
      
    </main>
  );
}