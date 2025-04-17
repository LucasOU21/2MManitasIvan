import React, { useRef } from 'react';
import { ChevronRight, ChevronLeft, ChevronRightCircle } from 'lucide-react';
import SwipeIndicator from './SwipeIndicator';

// Use relative paths starting with ../
import carpinteriaImg1 from '../assets/carpinteria1.png';
import carpinteriaImg2 from '../assets/carpinteria2.png';
import carpinteriaImg3 from '../assets/carpinteria3.png';
import electricidadImg1 from '../assets/electricidad.jpg';
import electricidadImg2 from '../assets/electricidad2.jpg';
import electricidadImg3 from '../assets/electricidad3.jpg';
import albanileriaImg1 from '../assets/Albanileria1.jpg';
import albanileriaImg2 from '../assets/Albanileria2.jpg';
import platoDuchaImg1 from '../assets/platoducha1.jpg';
import platoDuchaImg2 from '../assets/platoducha2.jpg';
import tarimaImg1 from '../assets/Tarima1.jpg';
import tarimaImg2 from '../assets/Tarima2.jpg';
import pladurImg1 from '../assets/pladur1.jpg';
import mudanzasImg1 from '../assets/mudanza1.jpg';
import pinturaImg1 from '../assets/pintura1.jpg';
import fontaneriaImg1 from '../assets/fontaneria1.jpg';
import fontaneriaImg2 from '../assets/fontaneria2.jpg';
import fontaneriaImg3 from '../assets/fontaneria3.jpg';

const services = [
  {
    title: "Carpintería",
    description: "Montaje de muebles y cocinas",
    image: carpinteriaImg1,
    details: "Servicio especializado en montaje de cocinas y muebles de Ikea, Leroy Merlin y otras tiendas.",
    path: "/carpinteria"
  },
  {
    title: "Electricidad",
    description: "Servicios básicos de instalación eléctrica",
    images: [electricidadImg1, electricidadImg2, electricidadImg3],
    image: electricidadImg1,
    details: "Servicios básicos de electricidad para el hogar.",
    path: "/electricidad"
  },
  {
    title: "Mudanzas",
    description: "Servicio de mudanzas para particulares",
    images: [mudanzasImg1],
    image: mudanzasImg1,
    details: "Servicio de mudanzas exclusivamente para particulares.",
    path: "/mudanzas"
  },
  {
    title: "Albañilería",
    description: "Servicios profesionales de construcción y reforma",
    images: [albanileriaImg1, albanileriaImg2],
    image: albanileriaImg1,
    details: "Servicios completos de albañilería para pequeñas y medianas reformas.",
    path: "/albanileria"
  },
  {
    title: "Plato de Ducha",
    description: "Instalación y reforma de platos de ducha",
    images: [platoDuchaImg1, platoDuchaImg2],
    image: platoDuchaImg1,
    details: "Especialistas en instalación y sustitución de platos de ducha.",
    path: "/plato-ducha"
  },
  {
    title: "Tarima",
    description: "Instalación de tarimas y rodapiés",
    images: [tarimaImg1, tarimaImg2],
    image: tarimaImg1,
    details: "Instalación profesional de tarimas flotantes, macizas y rodapiés.",
    path: "/tarima"
  },
  {
    title: "Pladur",
    description: "Trabajos de construcción en pladur",
    images: [pladurImg1],
    image: pladurImg1,
    details: "Especialistas en estructuras e instalaciones de pladur.",
    path: "/pladur"
  },
  {
    title: "Pintura",
    description: "Servicios profesionales de pintura",
    images: [pinturaImg1],
    image: pinturaImg1,
    details: "Servicio de pintura interior y exterior.",
    path: "/pintura"
  },
  {
    title: "Fontanería",
    description: "Soluciones en fontanería",
    images: [fontaneriaImg1, fontaneriaImg2, fontaneriaImg3],
    image: fontaneriaImg1,
    details: "Fontaneros profesionales para instalaciones y reparaciones.",
    path: "/fontaneria"
  }
];

const Services = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const navigateToService = (path) => {
    window.location.href = path;
  };

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
        
        {/* Mobile Swipe Indicator */}
        <SwipeIndicator />
        
        <div className="relative">
          {/* Left scroll button */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 hidden md:block"
          >
            <ChevronLeft size={24} className="text-teal-500" />
          </button>

          {/* Services container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
              <div 
                key={index} 
                className="min-w-[300px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow snap-start cursor-pointer"
                onClick={() => navigateToService(service.path)}
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateToService(service.path);
                    }}
                    className="text-teal-500 font-medium flex items-center hover:text-teal-600"
                  >
                    Saber más
                    <ChevronRightCircle size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right scroll button */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 hidden md:block"
          >
            <ChevronRight size={24} className="text-teal-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;