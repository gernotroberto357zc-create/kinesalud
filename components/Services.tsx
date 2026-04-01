// components/Services.tsx
import React from 'react';

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
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex flex-col mb-12">
        <span className="text-apple-blue font-semibold text-sm mb-2">Nuestras Especialidades</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-apple-text">
          Cuidado profesional <br/> para tu bienestar integral.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`${service.size} ${service.bg} p-10 rounded-[32px] flex flex-col justify-between min-h-[320px] transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 group cursor-pointer border border-transparent hover:border-gray-200`}
          >
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-apple-text mb-3">
                {service.title}
              </h3>
              <p className="text-apple-subtext text-lg leading-relaxed max-w-[280px]">
                {service.desc}
              </p>
            </div>
            <div className="flex justify-end">
              <div className="bg-white rounded-full p-3 shadow-sm group-hover:bg-apple-text group-hover:text-white transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};