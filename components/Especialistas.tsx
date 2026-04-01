"use client";
import React from 'react';
import { motion } from 'framer-motion';

const staff = [
  {
    nombre: "Daniel Díaz",
    cargo: "Fisioterapeuta y Osteópata",
    especialidad: "Osteopatía, Fisioterapia Deportiva y Punción Seca",
    foto: "https://pixel-p2.s3.eu-central-1.amazonaws.com/doctor/3f087d/3f087da34be24097486e093206253456_large.jpg" 
  },
  {
    nombre: "Edna Lizbeth Zárate",
    cargo: "Fisioterapeuta",
    especialidad: "Suelo Pélvico, Pilates Clínico y Drenaje Linfático",
    foto: "/fisioLiz.jpg"
  }
];

export const Especialistas = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24" id="equipo">
      <div className="mb-16 text-center md:text-left">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[#14b8a6] font-bold text-xs uppercase tracking-[0.2em] mb-4 block"
        >
          Nuestro Equipo Profesional
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Especialistas en <br /> tu salud integral.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-4xl">
        {staff.map((persona, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] bg-gray-100 mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-500">
              <img
                src={persona.foto}
                alt={persona.nombre}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="px-2">
              <p className="text-[#14b8a6] font-bold text-xs uppercase tracking-wider mb-1">{persona.cargo}</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#14b8a6] transition-colors">{persona.nombre}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{persona.especialidad}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};