"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Rellena aquí los datos del especialista que se queda en la clínica
const especialista = {
  nombre: "Nombre y Apellidos",
  cargo: "Fisioterapeuta Colegiado · Director",
  especialidad:
    "Especialista en fisioterapia avanzada, osteopatía y recuperación funcional personalizada para lesiones deportivas y dolor crónico.",
  foto: "/ruta-de-la-foto.jpg", // Mantén la misma ruta de imagen que tenías en el array staff
};

export const Especialistas = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24" id="equipo">
      <div className="mb-14 text-center md:text-left">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#14b8a6] font-bold text-xs uppercase tracking-[0.2em] mb-4 block"
        >
          Nuestro Equipo Profesional
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Especialistas en <br /> tu salud integral.
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center bg-[#F5F5F7] p-6 sm:p-10 rounded-[40px] border border-slate-200/70 max-w-4xl"
      >
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-gray-200 shadow-md">
            <img
              src={especialista.foto}
              alt={especialista.nombre}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        <div className="md:col-span-7 px-2">
          <p className="text-[#14b8a6] font-bold text-xs uppercase tracking-wider mb-2">
            {especialista.cargo}
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {especialista.nombre}
          </h3>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            {especialista.especialidad}
          </p>
        </div>
      </motion.div>
    </section>
  );
};
