import React, { useRef, useState } from 'react';
import { ChevronRight, ChevronLeft, ChevronRightCircle } from 'lucide-react';
import ServiceDetail from './ServiceDetail';
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

const workingOnPageMessage = "Estamos trabajando en esta página. Muy pronto podrá encontrar aquí toda la información sobre este servicio.";

const services = [
  // Mudanza as the first service
  {
    title: "Mudanzas",
    description: "Servicio de mudanzas para particulares",
    images: [mudanzasImg1],
    image: mudanzasImg1,
    details: "Servicio de mudanzas exclusivamente para particulares.",
    path: "/mudanzas",
    hasPage: true
  },
  // Other services with "working on page" message
  {
    title: "Carpintería",
    description: workingOnPageMessage,
    image: carpinteriaImg1,
    details: workingOnPageMessage,
    path: "/carpinteria",
    hasPage: false
  },
  {
    title: "Electricidad",
    description: workingOnPageMessage,
    images: [electricidadImg1, electricidadImg2, electricidadImg3],
    image: electricidadImg1,
    details: workingOnPageMessage,
    path: "/electricidad",
    hasPage: false
  },
  {
    title: "Albañilería",
    description: workingOnPageMessage,
    images: [albanileriaImg1, albanileriaImg2],
    image: albanileriaImg1,
    details: workingOnPageMessage,
    path: "/albanileria",
    hasPage: false
  },
  {
    title: "Plato de Ducha",
    description: workingOnPageMessage,
    images: [platoDuchaImg1, platoDuchaImg2],
    image: platoDuchaImg1,
    details: workingOnPageMessage,
    path: "/plato-ducha",
    hasPage: false
  },
  {
    title: "Tarima",
    description: workingOnPageMessage,
    images: [tarimaImg1, tarimaImg2],
    image: tarimaImg1,
    details: workingOnPageMessage,
    path: "/tarima",
    hasPage: false
  },
  {
    title: "Pladur",
    description: workingOnPageMessage,
    images: [pladurImg1],
    image: pladurImg1,
    details: workingOnPageMessage,
    path: "/pladur",
    hasPage: false
  },
  {
    title: "Pintura",
    description: workingOnPageMessage,
    images: [pinturaImg1],
    image: pinturaImg1,
    details: workingOnPageMessage,
    path: "/pintura",
    hasPage: false
  },
  {
    title: "Fontanería",
    description: workingOnPageMessage,
    images: [fontaneriaImg1, fontaneriaImg2, fontaneriaImg3],
    image: fontaneriaImg1,
    details: workingOnPageMessage,
    path: "/fontaneria",
    hasPage: false
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isServiceDetailOpen, setIsServiceDetailOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleServiceClick = (service) => {
    if (service.hasPage) {
      // For services with dedicated pages (only Mudanzas for now)
      window.location.href = service.path;
    } else {
      // For other services, show the modal with the "working on page" message
      setSelectedService(service);
      setIsServiceDetailOpen(true);
    }
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
                onClick={() => handleServiceClick(service)}
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
                      handleServiceClick(service);
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

      {selectedService && (
        <ServiceDetail 
          isOpen={isServiceDetailOpen}
          setIsOpen={setIsServiceDetailOpen}
          service={selectedService}
        />
      )}
    </section>
  );
};

export default Services;