import React, { useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const phoneNumber = '625791624';
  const countryCode = '34'; // Spain country code
  const fullPhoneNumber = `${countryCode}${phoneNumber}`;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    window.location.href = `https://wa.me/${fullPhoneNumber}`;
  };

  return (
    <section className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Servicios de Manitas Profesional a Domicilio
          </h2>
          <p 
            className={`text-lg mb-8 transition-all duration-700 delay-300 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Soluciones rápidas y eficientes para todas tus necesidades de reparación y mantenimiento
          </p>
          <div 
            className={`flex flex-wrap gap-4 justify-center transition-all duration-700 delay-500 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button 
              onClick={handlePhoneClick}
              className="bg-white text-teal-500 px-8 py-3 rounded-full font-medium hover:bg-teal-50 flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Phone className="mr-2" size={20} />
              Llamar Ahora
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="border-2 border-white px-8 py-3 rounded-full font-medium hover:bg-teal-600 flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <MessageCircle className="mr-2" size={20} />
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;