import React, { useRef, useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative">
        <div 
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <h3 className="text-xl font-bold mb-4">2MMANITASMADRID</h3>
            <p className="text-gray-400">
              Servicios profesionales de mantenimiento y reparación a domicilio
            </p>
            {/* Removed the green line that was here */}
          </div>
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <p className="text-gray-400 mb-3">
              Tel: <a 
                href="tel:625791624" 
                className="hover:text-teal-300 transition-colors duration-300 inline-flex items-center"
              >
                625 79 16 24
                <ExternalLink className="ml-1" size={12} />
              </a>
            </p>
            <p className="text-gray-400">
              Madrid, España
            </p>
          </div>
          <div className={`transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h4 className="text-lg font-semibold mb-4">Horario</h4>
            <p className="text-gray-400">
              Lunes - Viernes: 9:00 - 20:00<br />
              Sábados: 10:00 - 14:00
            </p>
          </div>
        </div>
        <div className={`border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 transition-all duration-700 delay-600 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <p>&copy; {new Date().getFullYear()} 2MManitasMadrid. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;