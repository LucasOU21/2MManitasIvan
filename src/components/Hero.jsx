import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const Hero = () => {
  const phoneNumber = '653333139';
  const countryCode = '34'; // Spain country code
  const fullPhoneNumber = `${countryCode}${phoneNumber}`;

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    window.location.href = `https://wa.me/${fullPhoneNumber}`;
  };

  return (
    <section className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Servicios de Manitas Profesional a Domicilio
            </h2>
            <p className="text-lg mb-8">
              Soluciones rápidas y eficientes para todas tus necesidades de reparación y mantenimiento
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handlePhoneClick}
                className="bg-white text-teal-500 px-8 py-3 rounded-full font-medium hover:bg-teal-50 flex items-center"
              >
                <Phone className="mr-2" size={20} />
                Llamar Ahora
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="border-2 border-white px-8 py-3 rounded-full font-medium hover:bg-teal-600 flex items-center"
              >
                <MessageCircle className="mr-2" size={20} />
                WhatsApp
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="/api/placeholder/600/400" 
              alt="Servicios de manitas" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;