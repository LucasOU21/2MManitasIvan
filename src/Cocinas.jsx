import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowLeft, ShieldCheck, Clock, PackageCheck, Truck, Hammer, Wrench, Ruler } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import montajeHero from './assets/montaje.muebles.jpg';

const MontajeMueblesPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const phoneNumber = '625791624';
  const countryCode = '34';
  const fullPhoneNumber = `${countryCode}${phoneNumber}`;

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    window.location.href = `https://wa.me/${fullPhoneNumber}`;
  };

  const handleBackClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={montajeHero} alt="Montaje de muebles" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={handleBackClick} 
            className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4 flex items-center hover:bg-white/30 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> 
            Volver a inicio
          </button>
          <div className="max-w-3xl text-white">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Montaje profesional de Cocinas en Madrid
            </h1>
            <p className={`text-lg md:text-xl mb-6 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Montamos desde muebles básicos hasta complejos armarios o cocinas. Rápido y sin preocupaciones.
            </p>
            <div className={`flex gap-3 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                onClick={handlePhoneClick} 
                className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 flex items-center hover:scale-105 transition text-sm md:text-base"
              >
                <Phone className="mr-2" size={16} /> 
                Llamar ahora
              </button>
              <button 
                onClick={handleWhatsAppClick} 
                className="bg-white text-teal-600 px-6 py-3 rounded-full hover:bg-teal-50 flex items-center hover:scale-105 transition text-sm md:text-base"
              >
                <MessageCircle className="mr-2" size={16} /> 
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Expertos en Cocinas */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Expertos en Cocinas</h2>
            <div className="text-center mb-6 max-w-3xl mx-auto">
              <p className="text-base md:text-lg text-gray-700 mb-4">
                En Manitas 2M nos encargamos del montaje de muebles altos, bajos y todo tipo de accesorios de cocina de todas las tiendas, asegurando un trabajo rápido, seguro y con acabado profesional que se adapta a tu espacio y necesidades.
              </p>
            </div>
            
            {/* Service feature boxes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-10">
              <div className="bg-teal-500 text-white rounded-lg p-3 md:p-6 text-center flex flex-col items-center justify-center h-28 md:h-44 hover:scale-105 transition transform cursor-pointer">
                <div className="bg-white rounded-full p-3 md:p-4 mb-2 md:mb-3 inline-flex">
                  <Hammer size={20} className="text-teal-500 md:w-6 md:h-6" />
                </div>
                <h3 className="text-sm md:text-xl font-semibold">Muebles Altos</h3>
              </div>
              
              <div className="bg-teal-500 text-white rounded-lg p-3 md:p-6 text-center flex flex-col items-center justify-center h-28 md:h-44 hover:scale-105 transition transform cursor-pointer">
                <div className="bg-white rounded-full p-3 md:p-4 mb-2 md:mb-3 inline-flex">
                  <Wrench size={20} className="text-teal-500 md:w-6 md:h-6" />
                </div>
                <h3 className="text-sm md:text-xl font-semibold">Muebles Bajos</h3>
              </div>
              
              <div className="bg-teal-500 text-white rounded-lg p-3 md:p-6 text-center flex flex-col items-center justify-center h-28 md:h-44 hover:scale-105 transition transform cursor-pointer">
                <div className="bg-white rounded-full p-3 md:p-4 mb-2 md:mb-3 inline-flex">
                  <PackageCheck size={20} className="text-teal-500 md:w-6 md:h-6" />
                </div>
                <h3 className="text-sm md:text-xl font-semibold">Encimeras</h3>
              </div>

              <div className="bg-teal-500 text-white rounded-lg p-3 md:p-6 text-center flex flex-col items-center justify-center h-28 md:h-44 hover:scale-105 transition transform cursor-pointer">
                <div className="bg-white rounded-full p-3 md:p-4 mb-2 md:mb-3 inline-flex">
                  <Ruler size={20} className="text-teal-500 md:w-6 md:h-6" />
                </div>
                <h3 className="text-sm md:text-xl font-semibold">Torres de Cocina</h3>
              </div>
            </div>
            
            {/* Content box for Muebles altos */}
            <div className="mb-8 bg-white rounded-lg p-5 md:p-10 shadow-md md:shadow-lg border-l-4 border-teal-500 scroll-mt-20">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">Muebles altos</h3>
              <p className="text-gray-700 mb-4 text-base md:text-lg leading-relaxed">
                Fijación segura en todo tipo de pared: porcelánico, pladur, cemento, ladrillo y posicionamiento ergonómico para cada tipo de puerta.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm md:shadow-md">
                  <h4 className="font-medium text-teal-700 text-base md:text-lg mb-1">Tipos</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Puertas batientes, puertas levadizas (elevadores) y módulos rinconera.</p>
                </div>
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm md:shadow-md">
                  <h4 className="font-medium text-teal-700 text-base md:text-lg mb-1">Qué garantizamos</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Anclaje estructural, mecanismos de elevación regulados, ajuste de holguras y nivelación.</p>
                </div>
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm md:shadow-md">
                  <h4 className="font-medium text-teal-700 text-base md:text-lg mb-1">Resultado</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Puertas seguras, apertura cómoda y acabado alineado con el resto de la cocina.</p>
                </div>
              </div>
            </div>

            {/* Content box for Muebles bajos */}
            <div className="mb-8 bg-white rounded-lg p-5 md:p-10 shadow-md md:shadow-lg border-l-4 border-teal-500 scroll-mt-20">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">Muebles bajos</h3>
              <p className="text-gray-700 mb-4 text-base md:text-lg leading-relaxed">
                Montaje impecable para que los muebles trabajen bien desde el primer día.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm md:shadow-md">
                  <h4 className="font-medium text-teal-700 text-base md:text-lg mb-1">Tipos</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Módulos de baldas, cajoneras (guías y extracción total), rinconeras y especieros.</p>
                </div>
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm md:shadow-md">
                  <h4 className="font-medium text-teal-700 text-base md:text-lg mb-1">Detalles</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Anclaje seguro a la pared, ajuste de puertas y guías, instalación de herrajes de cierre lento si se solicita.</p>
                </div>
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm md:shadow-md">
                  <h4 className="font-medium text-teal-700 text-base md:text-lg mb-1">Beneficio</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Apertura suave, aprovechamiento máximo del espacio y alineado perfecto con la encimera.</p>
                </div>
              </div>
            </div>

            {/* Content box for Encimeras - CORREGIDO: dentro del mismo contenedor */}
            <div className="mb-8 bg-white rounded-lg p-5 md:p-10 shadow-md md:shadow-lg border-l-4 border-teal-500 scroll-mt-20">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">Encimeras</h3>
              <p className="text-gray-700 mb-4 text-base md:text-lg leading-relaxed">
                Instalamos encimeras a medida con cortes y juntas precisas para un resultado perfecto.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm md:shadow-md">
                  <h4 className="font-medium text-teal-700 text-base md:text-lg mb-1">Materiales</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Laminado, Silestone, Dekton, laminada compacta y porcelánico.</p>
                </div>
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm md:shadow-md">
                  <h4 className="font-medium text-teal-700 text-base md:text-lg mb-1">Qué hacemos</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Corte a medida, unión y sellado hidrófugo, nivelado, remates y colocación de copetes, salpicadero y cantos.</p>
                </div>
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm md:shadow-md">
                  <h4 className="font-medium text-teal-700 text-base md:text-lg mb-1">Ventaja</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Acabados sin fugas ni desniveles, unión invisible y resistencia a uso diario.</p>
                </div>
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm md:shadow-md">
                  <h4 className="font-medium text-teal-700 text-base md:text-lg mb-1">Garantía de calidad</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Comprobación final de juntas y limpieza del perímetro.</p>
                </div>
              </div>
            </div>

            {/* Content box for Torres de cocina */}
            <div className="mb-8 md:mb-16 bg-white rounded-lg p-5 md:p-10 shadow-md md:shadow-lg border-l-4 border-teal-500 scroll-mt-20">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">Torres de cocina</h3>
              <p className="text-gray-700 mb-4 text-base md:text-lg leading-relaxed">
                Organización práctica y estética para almacenamiento y electrodomésticos.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm md:shadow-md">
                  <h4 className="font-medium text-teal-700 text-base md:text-lg mb-1">Opciones</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Torres con cajoneras, con baldas o preparadas para integrar hornos, neveras, microondas, y todo tipo de electrodomésticos.</p>
                </div>
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm md:shadow-md">
                  <h4 className="font-medium text-teal-700 text-base md:text-lg mb-1">Instalación</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Fijación a pared, refuerzo interior o modificación si es necesario, y ajuste de frentes para un aspecto uniforme.</p>
                </div>
                <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm md:shadow-md">
                  <h4 className="font-medium text-teal-700 text-base md:text-lg mb-1">Valor añadido</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Optimizamos accesos y ventilaciones para electrodomésticos integrados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Cómo funciona? */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">¿Cómo funciona?</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
            <li>Contáctanos por teléfono o WhatsApp y cuéntanos qué necesitas montar.</li>
            <li>Te damos un presupuesto personalizado sin compromiso.</li>
            <li>Agendamos día y hora de forma flexible.</li>
            <li>Montamos el mueble y revisamos contigo el resultado final.</li>
          </ol>
        </div>
      </section>

      {/* CTA personalizado */}
      <section className="py-16 bg-teal-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Necesitas montar tus muebles?</h2>
          <p className="text-lg mb-6">Solicita tu presupuesto gratuito. Te responderemos en menos de 24h.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={handlePhoneClick} 
              className="bg-white text-teal-600 px-6 py-3 rounded-full font-medium hover:bg-teal-50 flex items-center justify-center transition-all duration-300 hover:shadow-lg"
            >
              <Phone className="mr-2" /> 
              Llamar ahora
            </button>
            <button 
              onClick={handleWhatsAppClick} 
              className="border-2 border-white px-6 py-3 rounded-full font-medium hover:bg-white/10 flex items-center justify-center transition-all duration-300 hover:shadow-lg"
            >
              <MessageCircle className="mr-2" /> 
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

export default MontajeMueblesPage;