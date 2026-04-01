"use client";
import { motion } from "framer-motion";

export const LocationMap = () => {
  // Coordenadas o dirección para el enlace de Google Maps
  const mapUrl = "https://maps.app.goo.gl/XzTta2QYrdseNh5n8";
  
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#F5F5F7] rounded-[32px] overflow-hidden border border-gray-100 shadow-sm flex flex-col md:flex-row"
      >
        {/* Texto de ubicación */}
        <div className="p-10 md:w-1/2 flex flex-col justify-center">
          <span className="text-clinic-primary font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-clinic-primary rounded-full animate-pulse"></span>
            Nuestra Ubicación
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-clinic-secondary mb-6 tracking-tight">
            Te esperamos en el <br /> corazón de la ciudad.
          </h2>
          <p className="text-clinic-muted text-lg mb-8 leading-relaxed">
            Calle Serracines, 2 <br />
            28806 Alcalá de Henares, Madrid (España)
          </p>
          <a 
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-clinic-primary font-semibold hover:underline"
          >
            Ver en Google Maps 
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
          </a>
        </div>

        {/* Miniatura del Mapa (Redireccionable) */}
        <div className="md:w-1/2 h-[300px] md:h-auto relative group cursor-pointer overflow-hidden">
          <a href={mapUrl} target="_blank" rel="noopener noreferrer">
            {/* Imagen de mapa (puedes cambiar este Unsplash por una captura real de tu local en Google Maps) */}
            <img 
              src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweqx9saSX2JT03pQoONigmyB6bzCO9_GIZBNAAMFD-M6-XsT1nHgx1mGrno7fsBWFTpqcZZ61-byreOPBckJyKdnar423JEi6r3sorSvH8MJ1chF_QGjp468d6sBtlYssZUWRcqvQw=s1024-v1" 
              alt="Mapa de ubicación"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay de cristal al pasar el mouse */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-bold text-clinic-secondary">
                Abrir navegación →
              </div>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
};