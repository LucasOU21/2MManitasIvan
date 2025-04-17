import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const ServicePlaceholder = ({ serviceName }) => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-16 pb-32 bg-gradient-to-r from-teal-500 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <button
            onClick={handleBackClick}
            className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 flex items-center hover:bg-white/30 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Volver atrás
          </button>
          
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {serviceName}
            </h1>
            <p className="text-xl mb-6">
              Estamos trabajando en esta página. Muy pronto podrá encontrar aquí toda la información sobre nuestros servicios de {serviceName.toLowerCase()}.
            </p>
            <p className="text-lg">
              Mientras tanto, puede contactarnos directamente para obtener más información sobre este servicio.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">¿Le interesa nuestro servicio de {serviceName.toLowerCase()}?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Llámenos hoy o contáctenos por WhatsApp para recibir más información o solicitar un presupuesto sin compromiso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:625791624" 
              className="bg-teal-500 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-600 inline-flex items-center"
            >
              Llamar: 625 79 16 24
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ServicePlaceholder;