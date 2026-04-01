"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Definimos la estructura de datos para TypeScript
interface ServiceItem {
  title: string;
  desc: string;
  size: string;
  bg: string;
}

const services: ServiceItem[] = [
  { 
    title: "Fisioterapia", 
    desc: "Recuperación funcional avanzada para lesiones y dolores crónicos.", 
    size: "md:col-span-2", 
    bg: "bg-[#F5F5F7]" 
  },
  { 
    title: "Osteopatía", 
    desc: "Tratamiento integral de la estructura corporal.", 
    size: "md:col-span-1", 
    bg: "bg-[#F5F5F7]" 
  },
  { 
    title: "Suelo Pélvico", 
    desc: "Especialistas en salud íntima y recuperación postparto.", 
    size: "md:col-span-1", 
    bg: "bg-[#F5F5F7]" 
  },
  { 
    title: "Rehabilitación", 
    desc: "Programas de ejercicio terapéutico para volver a tu mejor nivel.", 
    size: "md:col-span-2", 
    bg: "bg-[#E8E8ED]" 
  },
];

export const Services = () => {
  // Configuración del contenedor padre (coordina la cascada)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Retraso entre tarjetas
      },
    },
  };

  // Configuración de cada tarjeta individual
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col mb-12"
      >
        <span className="text-clinic-primary font-semibold text-sm mb-2 uppercase tracking-widest">
          Nuestras Especialidades
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-clinic-secondary">
          Cuidado profesional <br/> para tu bienestar integral.
        </h2>
      </motion.div>

      {/* Grid Animado */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            variants={cardVariants}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className={`${service.size} ${service.bg} p-10 rounded-[32px] flex flex-col justify-between min-h-[320px] transition-shadow duration-500 hover:shadow-2xl hover:shadow-gray-200/50 group cursor-pointer border border-transparent hover:border-gray-200 relative overflow-hidden`}
          >
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-clinic-secondary mb-3 transition-colors group-hover:text-clinic-primary">
                {service.title}
              </h3>
              <p className="text-clinic-muted text-lg leading-relaxed max-w-[280px]">
                {service.desc}
              </p>
            </div>

            {/* Icono/Botón con animación de color */}
            <div className="flex justify-end">
              <motion.div 
                whileTap={{ scale: 0.9 }}
                className="bg-white text-clinic-secondary rounded-full p-4 shadow-sm group-hover:bg-clinic-secondary group-hover:text-white transition-all duration-300"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};