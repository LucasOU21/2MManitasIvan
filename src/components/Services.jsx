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
    details: "Servicio completo de carpintería para todo tipo de necesidades. Instalamos y reparamos puertas, ventanas, armarios empotrados y muebles a medida. Trabajamos con diversos materiales (madera maciza, MDF, contrachapado) y ofrecemos restauración de muebles antiguos. Todos nuestros trabajos están garantizados y utilizamos materiales sostenibles de primera calidad."
  },
  {
    title: "Electricidad",
    description: "Servicios integrales de instalación eléctrica",
    images: [electricidadImg1, electricidadImg2, electricidadImg3],
    image: electricidadImg1,
    details: "Electricistas certificados para instalaciones completas, reparación de averías y sustitución de cuadros eléctricos. Ofrecemos soluciones modernas como iluminación LED de bajo consumo y domótica. Realizamos revisiones de seguridad, certificados eléctricos y boletines para compañías. Todos nuestros trabajos cumplen con la normativa vigente para garantizar su seguridad."
  },
  {
    title: "Albañilería",
    description: "Servicios profesionales de construcción y reforma",
    images: [albanileriaImg1, albanileriaImg2],
    image: albanileriaImg1,
    details: "Servicios completos de albañilería para pequeñas y medianas reformas. Realizamos tabiquería, suelos cerámicos, reparación de humedades y grietas, alicatado de baños y cocinas. Nos especializamos en reforma integral de baños y cocinas, desde el diseño hasta la ejecución final. Utilizamos técnicas modernas y materiales de calidad con presupuestos sin compromiso."
  },
  {
    title: "Plato de Ducha",
    description: "Instalación y reforma de platos de ducha",
    images: [platoDuchaImg1, platoDuchaImg2],
    image: platoDuchaImg1,
    details: "Especialistas en instalación y sustitución de platos de ducha. Servicio completo que incluye: retirada de bañera o plato antiguo, preparación e impermeabilización, instalación del nuevo plato, colocación de mampara y conexión de desagües. Trabajamos con diversos materiales y ofrecemos soluciones a medida, incluyendo instalaciones a ras de suelo para mayor accesibilidad."
  },
  {
    title: "Tarima",
    description: "Instalación y mantenimiento de tarimas",
    images: [tarimaImg1, tarimaImg2],
    image: tarimaImg1,
    details: "Expertos en instalación y mantenimiento de tarimas. Ofrecemos: colocación de tarima flotante y maciza, tarimas para exteriores, lijado y barnizado, reparación de tablas dañadas y nivelación de superficies. Trabajamos con maderas naturales y composites para exteriores, con tratamientos antihumedad y protección UV. Asesoramiento personalizado para elegir el material ideal para su espacio."
  },
  {
    title: "Pladur",
    description: "Trabajos de construcción en pladur",
    images: [pladurImg1],
    image: pladurImg1,
    details: "Especialistas en estructuras e instalaciones de pladur. Realizamos tabiques divisorios, falsos techos decorativos, muebles a medida y trasdosados para aislamiento térmico y acústico. Utilizamos diferentes tipos de placas según necesidades: estándar, hidrófugas, ignífugas o acústicas. Nuestros trabajos incluyen tratamiento de juntas, masillado y preparación para pintura, con materiales certificados y acabados perfectos."
  },
  {
    title: "Mudanzas",
    description: "Servicio profesional de mudanzas",
    images: [mudanzasImg1],
    image: mudanzasImg1,
    details: "Servicio de mudanzas completo para particulares y empresas. Ofrecemos: desmontaje profesional, embalaje seguro de objetos frágiles, transporte con vehículos adaptados, montaje en el nuevo domicilio y colocación según sus indicaciones. Disponemos de materiales de calidad y ofrecemos servicios complementarios como almacenaje temporal. Todos nuestros operarios están formados en manipulación de cargas."
  },
  {
    title: "Pintura",
    description: "Servicios profesionales de pintura",
    images: [pinturaImg1],
    image: pinturaImg1,
    details: "Servicio de pintura interior y exterior. Realizamos pintura de paredes y techos, esmalte de puertas y ventanas, técnicas decorativas y eliminación de gotelé. Trabajos en exteriores con tratamientos impermeabilizantes y protección contra humedad. Utilizamos pinturas ecológicas, antimoho y antibacterianas. Preparamos adecuadamente las superficies (limpieza, masillado, lijado) para garantizar acabados duraderos."
  },
  {
    title: "Fontanería",
    description: "Soluciones en fontanería",
    images: [fontaneriaImg1, fontaneriaImg2, fontaneriaImg3],
    image: fontaneriaImg1,
    details: "Fontaneros profesionales para instalaciones y reparaciones. Servicios de instalación y reparación de grifería, cisternas y sanitarios, detección de fugas, mantenimiento de calentadores, renovación de tuberías y desatascos. Trabajamos con materiales de primera calidad y ofrecemos servicio de emergencia 24/7. Realizamos revisiones preventivas para evitar problemas futuros y proporcionamos presupuestos sin compromiso."
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