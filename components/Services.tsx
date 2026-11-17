"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface ServiceItem {
  title: string;
  desc: string;
  tag: string;
  size: string;
  bg: string;
}

const services: ServiceItem[] = [
  { 
    title: "Fisioterapia", 
    tag: "Terapia Manual & Avanzada",
    desc: "Recuperación funcional personalizada para lesiones deportivas, contracturas y dolores crónicos de espalda o articulaciones.", 
    size: "md:col-span-2", 
    bg: "bg-[#F5F5F7]" 
  },
  { 
    title: "Osteopatía", 
    tag: "Enfoque Integral",
    desc: "Tratamiento estructural, visceral y craneal para devolver el equilibrio natural a tu cuerpo.", 
    size: "md:col-span-1", 
    bg: "bg-[#F5F5F7]" 
  },
  { 
    title: "Suelo Pélvico", 
    tag: "Salud Íntima",
    desc: "Valoración especializada, prevención y recuperación postparto en un entorno cercano y confidencial.", 
    size: "md:col-span-1", 
    bg: "bg-[#F5F5F7]" 
  },
  { 
    title: "Rehabilitación", 
    tag: "Readaptación Activa",
    desc: "Programas de ejercicio terapéutico guiado para recuperar movilidad, fuerza y volver a tu mejor nivel con seguridad.", 
    size: "md:col-span-2", 
    bg: "bg-[#E8E8ED]" 
  },
];

// Sustituye por el número real de la clínica (con prefijo 34, sin + ni espacios)
const WHATSAPP_NUMBER = "34608765492";

export const Services = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.215, 0.61, 0.355, 1] 
      } 
    },
  };

  const handleServiceClick = (serviceTitle: string) => {
    const message = encodeURIComponent(
      `Hola KineSalud, me gustaría pedir información o cita para ${serviceTitle}.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="tratamientos" className="max-w-6xl mx-auto px-6 py-24">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col mb-12"
      >
        <span className="text-teal-700 font-semibold text-sm mb-2 uppercase tracking-widest">
          Nuestras Especialidades
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Cuidado profesional <br /> para tu bienestar integral.
        </h2>
      </motion.div>

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
            onClick={() => handleServiceClick(service.title)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleServiceClick(service.title);
              }
            }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className={`${service.size} ${service.bg} p-8 md:p-10 rounded-[32px] flex flex-col justify-between min-h-[320px] transition-all duration-300 hover:shadow-xl hover:shadow-slate-300/50 group cursor-pointer border border-slate-200/80 hover:border-teal-600/30 relative overflow-hidden`}
          >
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200/60 px-3 py-1 rounded-full mb-4">
                {service.tag}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-3 transition-colors group-hover:text-teal-700">
                {service.title}
              </h3>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed max-w-md">
                {service.desc}
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 mt-4 border-t border-slate-200/60">
              <span className="text-sm font-semibold text-slate-700 group-hover:text-teal-700 transition-colors">
                Consultar tratamiento
              </span>
              <motion.div 
                whileTap={{ scale: 0.9 }}
                className="bg-white text-slate-900 rounded-full p-3.5 shadow-sm border border-slate-200/70 group-hover:bg-teal-700 group-hover:text-white group-hover:border-teal-700 transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
