import React, { useState, useRef } from 'react';
import { ChevronRight, ChevronLeft, ChevronRightCircle } from 'lucide-react';
import ServiceDetail from './ServiceDetail';

const services = [
  {
    title: "Montaje de Muebles",
    description: "Instalación profesional de todo tipo de muebles",
    image: "/api/placeholder/400/300",
    details: "Especialistas en montaje de todo tipo de muebles: armarios, camas, estanterías, escritorios y más. Servicio rápido y profesional con garantía de satisfacción."
  },
  {
    title: "Reparaciones Eléctricas",
    description: "Soluciones seguras para problemas eléctricos",
    image: "/api/placeholder/400/300",
    details: "Instalación y reparación de enchufes, interruptores, lámparas y todo tipo de problemas eléctricos. Trabajo certificado y seguro."
  },
  {
    title: "Mantenimiento General",
    description: "Cuidado integral de tu hogar u oficina",
    image: "/api/placeholder/400/300",
    details: "Servicios completos de mantenimiento incluyendo pintura, reparaciones menores, instalación de accesorios y más."
  },
  {
    title: "Mudanzas",
    description: "Servicio profesional de mudanzas",
    image: "/api/placeholder/400/300",
    details: "Ofrecemos servicios completos de mudanza. Incluye desmontaje, embalaje profesional, transporte seguro y montaje en el nuevo domicilio."
  },
  {
    title: "Recogida de Escombros",
    description: "Limpieza y gestión de residuos",
    image: "/api/placeholder/400/300",
    details: "Servicio profesional de recogida y gestión de escombros. Garantizamos una gestión responsable y ecológica de todos los residuos."
  },
  {
    title: "Pintura",
    description: "Servicios profesionales de pintura",
    image: "/api/placeholder/400/300",
    details: "Trabajos de pintura interior y exterior, con acabados de alta calidad y uso de materiales ecológicos."
  },
  {
    title: "Fontanería",
    description: "Soluciones en fontanería",
    image: "/api/placeholder/400/300",
    details: "Reparación e instalación de grifos, tuberías, desagües y todo tipo de sistemas de agua. Servicio de emergencia disponible."
  },
  {
    title: "Jardinería",
    description: "Mantenimiento de jardines",
    image: "/api/placeholder/400/300",
    details: "Cuidado completo de jardines, poda, plantación y diseño paisajístico. Mantenimiento regular disponible."
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