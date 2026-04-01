import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Columna 1: Logo y Eslogan */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">KineSalud</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Especialistas en fisioterapia avanzada y bienestar integral. Tu salud en las mejores manos.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Tratamientos</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 3: Horario */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Horario</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex justify-between"><span>Lunes - Viernes</span> <span>09:00 - 21:00</span></li>
              <li className="flex justify-between"><span>Sábado</span> <span>10:00 - 14:00</span></li>
              <li className="flex justify-between text-red-400"><span>Domingo</span> <span>Cerrado</span></li>
            </ul>
          </div>

          {/* Columna 4: Ubicación */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Dónde estamos</h4>
            <p className="text-sm text-gray-600 mb-2">Calle de Serracines 2</p>
            <p className="text-sm text-gray-600 mb-4">28806, Alcalá de Henares </p>
            <p className="text-sm font-semibold text-blue-600">+34 918 838 775</p>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2026 KineSalud. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600">Aviso Legal</a>
            <a href="#" className="hover:text-gray-600">Privacidad</a>
            <a href="#" className="hover:text-gray-600">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;