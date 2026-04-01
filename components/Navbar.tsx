// components/Navbar.tsx
import React from 'react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
        {/* Logo con tipografía de Apple */}
        <span className="text-apple-text font-bold text-xl tracking-tighter">
          KineSalud<span className="text-apple-blue">.</span>
        </span>

        {/* Menú Minimalista */}
        <div className="hidden md:flex space-x-8 text-[13px] text-apple-text/70 font-medium">
          <a href="#servicios" className="hover:text-apple-text transition-colors">Tratamientos</a>
          <a href="#clinica" className="hover:text-apple-text transition-colors">La Clínica</a>
          <a href="#contacto" className="hover:text-apple-text transition-colors">Contacto</a>
        </div>

        {/* Botón redondeado (Squircle) */}
        <button className="bg-apple-blue text-white px-5 py-1.5 rounded-full text-xs font-semibold hover:bg-[#0077ED] transition-all shadow-sm">
          Cita online
        </button>
      </div>
    </nav>
  );
};