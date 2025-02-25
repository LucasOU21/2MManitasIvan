import React, { useState, useRef } from 'react';
import { ChevronRight, ChevronLeft, ChevronRightCircle } from 'lucide-react';
import ServiceDetail from './ServiceDetail';

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
    description: "Soluciones profesionales en trabajos de madera",
    image: carpinteriaImg1,
    details: "Expertos en instalación y reparación de todo tipo de elementos de carpintería. Trabajos de calidad en puertas, ventanas, muebles y estructuras de madera."
  },
  {
    title: "Electricidad",
    description: "Servicios integrales de instalación eléctrica",
    images: [electricidadImg1, electricidadImg2, electricidadImg3],
    image: electricidadImg1,
    details: "Instalaciones eléctricas completas, reparaciones, revisiones y certificaciones. Trabajos seguros y realizados por profesionales cualificados."
  },
  {
    title: "Albañilería",
    description: "Servicios profesionales de construcción y reforma",
    images: [albanileriaImg1, albanileriaImg2],
    image: albanileriaImg1,
    details: "Trabajos de albañilería para reformas integrales, reparaciones, tabiquería, revestimientos y todo tipo de construcciones menores."
  },
  {
    title: "Plato de Ducha",
    description: "Instalación y reforma de platos de ducha",
    images: [platoDuchaImg1, platoDuchaImg2],
    image: platoDuchaImg1,
    details: "Especialistas en instalación, cambio y reforma de platos de ducha. Trabajos de alta calidad con materiales modernos y diseños personalizados."
  },
  {
    title: "Tarima",
    description: "Instalación y mantenimiento de tarimas",
    images: [tarimaImg1, tarimaImg2],
    image: tarimaImg1,
    details: "Colocación de tarimas de diversos materiales, reparación, pulido y renovación. Soluciones para todo tipo de suelos de madera."
  },
  {
    title: "Pladur",
    description: "Trabajos de construcción en pladur",
    images: [pladurImg1],
    image: pladurImg1,
    details: "Instalación de tabiques, techos, trasdosados y todo tipo de trabajos con pladur. Soluciones para dividir, insonorizar y mejorar espacios interiores."
  },
  {
    title: "Mudanzas",
    description: "Servicio profesional de mudanzas",
    images: [mudanzasImg1],
    image: mudanzasImg1,
    details: "Ofrecemos servicios completos de mudanza. Incluye desmontaje, embalaje profesional, transporte seguro y montaje en el nuevo domicilio."
  },
  {
    title: "Pintura",
    description: "Servicios profesionales de pintura",
    images: [pinturaImg1],
    image: pinturaImg1,
    details: "Trabajos de pintura interior y exterior, con acabados de alta calidad y uso de materiales ecológicos."
  },
  {

    title: "Fontanería",
    description: "Soluciones en fontanería",
    images: [fontaneriaImg1, fontaneriaImg2, fontaneriaImg3],
    image: fontaneriaImg1,
    details: "Reparación e instalación de grifos, tuberías, desagües y todo tipo de sistemas de agua. Servicio de emergencia disponible."
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

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        
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
                className="min-w-[300px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow snap-start"
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
                    onClick={() => {
                      setSelectedService(service);
                      setIsServiceDetailOpen(true);
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