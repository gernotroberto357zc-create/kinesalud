// components/Navbar.tsx
import React from 'react';

export const Navbar = () => {
  return (
    // Hemos cambiado 'top-0 w-full' por 'top-6 inset-x-0' y añadido 'max-w-5xl mx-auto'
    <nav className="fixed top-6 inset-x-0 z-50 flex justify-center px-6">
      <div className="w-full max-w-5xl h-14 px-6 flex items-center justify-between bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/[0.03] rounded-full transition-all duration-300">

        {/* Logo con tipografía de Apple */}
        <div className="flex items-center gap-1.5 group cursor-pointer">
          <span className="text-gray-900 font-bold text-xl tracking-tighter">
            KineSalud<span className="text-clinic-primary">.</span>
          </span>
        </div>

        {/* Menú Minimalista - Ajustado el tamaño y espaciado */}
        <div className="hidden md:flex items-center space-x-10 text-[13px] text-gray-500 font-medium tracking-tight">
          <a href="#servicios" className="hover:text-clinic-primary transition-colors duration-200">Tratamientos</a>
          <a href="#clinica" className="hover:text-clinic-primary transition-colors duration-200">La Clínica </a>
          <a href="#contacto" className="hover:text-clinic-primary transition-colors duration-200">Contacto </a>
        </div>

        {/* Enlace a Doctoralia (limpio y sin doble botón) */}
        <a
  href="https://www.doctoralia.es/clinicas/kine-salud-2"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2 rounded-full text-[13px] font-bold transition-all shadow-md active:scale-95 inline-block text-center"
  style={{ 
    backgroundColor: '#14b8a6', // El mismo verde Teal
    color: '#FFFFFF'            // Blanco puro garantizado
  }}
>
  Cita online
</a>
      </div>
    </nav>
  );
};