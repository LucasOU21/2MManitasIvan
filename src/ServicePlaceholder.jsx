import React, { useState, useEffect } from 'react';
import { ArrowLeft, Phone, MessageCircle } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Import images to use based on service name
import carpinteriaImg1 from './assets/carpinteria1.png';
import electricidadImg1 from './assets/electricidad.jpg';
import albanileriaImg1 from './assets/Albanileria1.jpg';
import platoDuchaImg1 from './assets/platoducha1.jpg';
import tarimaImg1 from './assets/Tarima1.jpg';
import pladurImg1 from './assets/pladur1.jpg';
import pinturaImg1 from './assets/pintura1.jpg';
import fontaneriaImg1 from './assets/fontaneria1.jpg';

// Service descriptions map
const serviceDescriptions = {
  "Carpintería": {
    description: "Montaje de muebles y cocinas",
    details: "Servicio especializado en montaje de cocinas y muebles de Ikea, Leroy Merlin y otras tiendas.",
    image: carpinteriaImg1
  },
  "Electricidad": {
    description: "Servicios básicos de instalación eléctrica",
    details: "Servicios básicos de electricidad para el hogar.",
    image: electricidadImg1
  },
  "Albañilería": {
    description: "Servicios profesionales de construcción y reforma",
    details: "Servicios completos de albañilería para pequeñas y medianas reformas.",
    image: albanileriaImg1
  },
  "Plato de Ducha": {
    description: "Instalación y reforma de platos de ducha",
    details: "Especialistas en instalación y sustitución de platos de ducha.",
    image: platoDuchaImg1
  },
  "Tarima": {
    description: "Instalación de tarimas y rodapiés",
    details: "Instalación profesional de tarimas flotantes, macizas y rodapiés.",
    image: tarimaImg1
  },
  "Pladur": {
    description: "Trabajos de construcción en pladur",
    details: "Especialistas en estructuras e instalaciones de pladur.",
    image: pladurImg1
  },
  "Pintura": {
    description: "Servicios profesionales de pintura",
    details: "Servicio de pintura interior y exterior.",
    image: pinturaImg1
  },
  "Fontanería": {
    description: "Soluciones en fontanería",
    details: "Fontaneros profesionales para instalaciones y reparaciones.",
    image: fontaneriaImg1
  }
};

const ServicePlaceholder = ({ serviceName }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const phoneNumber = '625791624';
  const countryCode = '34'; // Spain country code
  const fullPhoneNumber = `${countryCode}${phoneNumber}`;
  
  // Get service info from the map or use defaults
  const serviceInfo = serviceDescriptions[serviceName] || {
    description: "Servicios profesionales",
    details: "Servicio profesional de alta calidad.",
    image: null
  };
  
  useEffect(() => {
    setIsLoaded(true);
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    window.location.href = "/";
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    window.location.href = `https://wa.me/${fullPhoneNumber}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with improved visual */}
      <section className="relative pt-16 pb-32 overflow-hidden">
        {/* Hero Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={serviceInfo.image} 
            alt={`Servicio de ${serviceName}`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <button
            onClick={handleBackClick}
            className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 flex items-center hover:bg-white/30 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Volver a inicio
          </button>
          
          <div className="max-w-3xl text-white">
            <h1 
              className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {serviceName}
            </h1>
            <p 
              className={`text-xl mb-8 transition-all duration-700 delay-300 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {serviceInfo.description}
            </p>
            
            <div 
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <button 
                onClick={handlePhoneClick}
                className="bg-teal-500 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-600 flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Phone className="mr-2" size={18} />
                Llamar ahora
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-white text-teal-500 px-6 py-3 rounded-full font-medium hover:bg-teal-50 flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <MessageCircle className="mr-2" size={18} />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Details section - Simplified to only show the description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 shadow-md border-l-4 border-teal-500">
              <h2 className="text-2xl font-bold mb-6">Sobre nuestro servicio de {serviceName.toLowerCase()}</h2>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                {serviceInfo.details}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">¿Le interesa nuestro servicio de {serviceName.toLowerCase()}?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Llámenos hoy o contáctenos por WhatsApp para recibir más información o solicitar un presupuesto sin compromiso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={handlePhoneClick}
              className="bg-teal-500 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-600 flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Phone className="mr-2" size={18} />
              Llamar: 625 79 16 24
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-white border-2 border-teal-500 text-teal-500 px-6 py-3 rounded-full font-medium hover:bg-teal-50 flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <MessageCircle className="mr-2" size={18} />
              WhatsApp
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ServicePlaceholder;