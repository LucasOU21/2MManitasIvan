import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowLeft, Truck, ShieldCheck, Clock, PackageCheck } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Import images
import mudanzasHero from './assets/mudanza1.jpg';
import mudanzasImg1 from './assets/mudanza1.jpg';
// Import new images
import mudanzasImg2 from './assets/mudanzapage1.jpg'; 
import mudanzasImg3 from './assets/mudanzapage2.jpg';

const MudanzasPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const phoneNumber = '625791624';
  const countryCode = '34'; // Spain country code
  const fullPhoneNumber = `${countryCode}${phoneNumber}`;
  
  useEffect(() => {
    setIsLoaded(true);
    // Scroll to top when component mounts
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
  
  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with improved visual */}
      <section className="relative pt-16 pb-16 md:pb-32 overflow-hidden">
        {/* Hero Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={mudanzasHero} 
            alt="Servicio de Mudanzas" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <button
            onClick={handleBackClick}
            className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4 flex items-center hover:bg-white/30 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Volver a inicio
          </button>
          
          <div className="max-w-3xl text-white">
            <h1 
              className={`text-3xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Servicio de Mudanzas
            </h1>
            <p 
              className={`text-lg md:text-xl mb-6 transition-all duration-700 delay-300 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              El servicio de mudanzas más confiable de Madrid. Cuidamos de sus pertenencias como si fueran nuestras, garantizando un traslado seguro y sin complicaciones.
            </p>
            
            <div 
              className={`flex flex-wrap gap-3 transition-all duration-700 delay-500 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <button 
                onClick={handlePhoneClick}
                className="bg-teal-500 text-white px-5 py-2 rounded-full font-medium hover:bg-teal-600 flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm md:text-base md:px-6 md:py-3"
              >
                <Phone className="mr-2" size={16} />
                Llamar ahora
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-white text-teal-500 px-5 py-2 rounded-full font-medium hover:bg-teal-50 flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm md:text-base md:px-6 md:py-3"
              >
                <MessageCircle className="mr-2" size={16} />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Details - Enhanced for optimal mobile view */}
      <section className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Nuestro servicio de mudanzas incluye</h2>
            
            <div className="text-center mb-6 max-w-3xl mx-auto">
              <p className="text-base md:text-lg text-gray-700 mb-4">
                En Manitas 2M te ofrecemos precios económicos y servicios flexibles para que tu mudanza en Madrid se adapte a tus necesidades.
              </p>
              <p className="text-base md:text-lg text-gray-700">
                Contamos con un servicio integral de mudanza y nos ajustamos a tu situación para darte un presupuesto personalizado, sin compromiso.
              </p>
            </div>
            
            {/* Service feature boxes - enhanced responsive grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-10">
              <button 
                onClick={() => scrollToSection('embalaje')}
                className="bg-teal-500 text-white rounded-lg p-3 md:p-6 text-center cursor-pointer transform transition hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center h-28 md:h-44"
              >
                <div className="bg-white rounded-full p-3 md:p-4 inline-flex mb-2 md:mb-3">
                  <PackageCheck size={20} className="text-teal-500 md:w-6 md:h-6" />
                </div>
                <h3 className="text-sm md:text-xl font-semibold">Embalaje profesional</h3>
              </button>
              
              <button 
                onClick={() => scrollToSection('transporte')}
                className="bg-teal-500 text-white rounded-lg p-3 md:p-6 text-center cursor-pointer transform transition hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center h-28 md:h-44"
              >
                <div className="bg-white rounded-full p-3 md:p-4 inline-flex mb-2 md:mb-3">
                  <Truck size={20} className="text-teal-500 md:w-6 md:h-6" />
                </div>
                <h3 className="text-sm md:text-xl font-semibold">Transporte rápido</h3>
              </button>
              
              <button 
                onClick={() => scrollToSection('carga')}
                className="bg-teal-500 text-white rounded-lg p-3 md:p-6 text-center cursor-pointer transform transition hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center h-28 md:h-44"
              >
                <div className="bg-white rounded-full p-3 md:p-4 inline-flex mb-2 md:mb-3">
                  <ShieldCheck size={20} className="text-teal-500 md:w-6 md:h-6" />
                </div>
                <h3 className="text-sm md:text-xl font-semibold">Carga y descarga</h3>
              </button>

              <button 
                onClick={() => scrollToSection('montaje')}
                className="bg-teal-500 text-white rounded-lg p-3 md:p-6 text-center cursor-pointer transform transition hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center h-28 md:h-44"
              >
                <div className="bg-white rounded-full p-3 md:p-4 inline-flex mb-2 md:mb-3">
                  <Clock size={20} className="text-teal-500 md:w-6 md:h-6" />
                </div>
                <h3 className="text-sm md:text-xl font-semibold">Montaje</h3>
              </button>
            </div>
            
            {/* Enhanced content sections with IDs for navigation */}
            <section id="embalaje" className="mb-8 md:mb-16 bg-gray-50 rounded-lg p-5 md:p-10 shadow-md md:shadow-lg border-l-4 border-teal-500 scroll-mt-20">
              <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6">
                <div className="bg-teal-100 p-3 md:p-4 rounded-full inline-flex mb-3 md:mb-0 md:mr-5 w-min">
                  <PackageCheck size={24} className="text-teal-600 md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">Servicio de Embalaje Profesional</h3>
              </div>
              
              <p className="text-gray-700 mb-5 text-base md:text-lg leading-relaxed">
                Nos encargamos de embalar tus objetos con los materiales adecuados, según el tipo, fragilidad y tamaño de cada uno. Nuestro equipo está capacitado para proteger desde objetos delicados hasta muebles grandes, utilizando técnicas seguras y eficientes.
              </p>
              
              <h4 className="text-lg md:text-xl font-medium text-teal-700 mb-3">En Manitas 2M utilizamos materiales de embalaje profesionales, como:</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm md:shadow-md">
                  <h4 className="font-medium text-teal-700 text-base md:text-lg mb-1">Plástico de burbujas</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Ideal para proteger objetos frágiles de golpes y vibraciones durante el transporte.</p>
                </div>
                
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm md:shadow-md">
                  <h4 className="font-medium text-teal-700 text-base md:text-lg mb-1">Film de espuma</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Perfecto para envolver superficies delicadas o sensibles a rayaduras, ofreciendo una protección adicional.</p>
                </div>
                
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm md:shadow-md">
                  <h4 className="font-medium text-teal-700 text-base md:text-lg mb-1">Chips de relleno</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Evitan el movimiento dentro de las cajas durante el transporte, manteniendo todo en su lugar.</p>
                </div>
                
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm md:shadow-md">
                  <h4 className="font-medium text-teal-700 text-base md:text-lg mb-1">Film plástico estirable</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Ideal para envolver muebles y protegerlos del polvo y la humedad durante la mudanza.</p>
                </div>
              </div>
              
              <p className="text-gray-700 mt-4 md:mt-6 text-base md:text-lg italic">Y lo que haga falta para garantizar que tus pertenencias lleguen en perfecto estado a su destino.</p>
            </section>
            
            <section id="transporte" className="mb-8 md:mb-16 bg-gray-50 rounded-lg p-5 md:p-10 shadow-md md:shadow-lg border-l-4 border-teal-500 scroll-mt-20">
              <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6">
                <div className="bg-teal-100 p-3 md:p-4 rounded-full inline-flex mb-3 md:mb-0 md:mr-5 w-min">
                  <Truck size={24} className="text-teal-600 md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">Transporte rápido y confiable</h3>
              </div>
              
              <p className="text-gray-700 mb-5 text-base md:text-lg leading-relaxed">
                Ofrecemos transporte profesional de mudanzas cubriendo toda la Comunidad de Madrid. Nos aseguramos de que tu traslado sea puntual y seguro, adaptado a tus necesidades.
              </p>
              
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm md:shadow-md">
                <h4 className="font-medium text-teal-700 text-base md:text-lg mb-2">Factores que determinan el costo</h4>
                <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
                  El costo de la mudanza depende de varios factores, como la distancia, el volumen de objetos y los servicios adicionales que puedas requerir como el servicio de embalaje de objetos frágiles para asegurar que todo llegue en perfectas condiciones.
                </p>
                <div className="bg-teal-50 p-3 md:p-4 rounded-lg border-l-4 border-teal-400">
                  <p className="text-gray-700 font-medium text-sm md:text-base">Importante:</p>
                  <p className="text-gray-600 text-sm md:text-base">
                    Recuerda que, en Madrid Central, las furgonetas solo pueden acceder entre las 7:00 y las 15:00 horas. Si tu mudanza es por la tarde o dura todo el día, necesitarás un permiso especial del Ayuntamiento, que es gratuito para residentes.
                  </p>
                </div>
              </div>
            </section>
            
            <section id="carga" className="mb-8 md:mb-16 bg-gray-50 rounded-lg p-5 md:p-10 shadow-md md:shadow-lg border-l-4 border-teal-500 scroll-mt-20">
              <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6">
                <div className="bg-teal-100 p-3 md:p-4 rounded-full inline-flex mb-3 md:mb-0 md:mr-5 w-min">
                  <ShieldCheck size={24} className="text-teal-600 md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">Carga y descarga</h3>
              </div>
              
              <p className="text-gray-700 mb-5 text-base md:text-lg leading-relaxed">
                En Manitas 2M, queremos que tu mudanza sea lo más eficiente posible, por lo que valoramos distintos factores para ofrecerte el mejor servicio.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm md:shadow-md">
                  <h4 className="font-medium text-teal-700 text-base md:text-lg mb-1">Acceso al ascensor</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Si tus muebles pueden ser trasladados por el ascensor, el proceso será más rápido y económico. Al evitar el uso de las escaleras, reducimos tiempo y esfuerzo, lo que se traduce en un menor costo para ti.</p>
                </div>
                
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm md:shadow-md">
                  <h4 className="font-medium text-teal-700 text-base md:text-lg mb-1">Cajas de cartón</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">¿Necesitas cajas de cartón para tu mudanza? Te las conseguimos a precios especiales para facilitar el proceso de embalaje y traslado.</p>
                </div>
                
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm md:shadow-md sm:col-span-2 md:col-span-1">
                  <h4 className="font-medium text-teal-700 text-base md:text-lg mb-1">Operarios necesarios</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">Dependiendo de cuántas pertenencias tengas, asignaremos el número adecuado de operarios para asegurar que todo se traslade de manera eficiente y segura.</p>
                </div>
              </div>
            </section>
            
            <section id="montaje" className="mb-8 md:mb-16 bg-gray-50 rounded-lg p-5 md:p-10 shadow-md md:shadow-lg border-l-4 border-teal-500 scroll-mt-20">
              <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6">
                <div className="bg-teal-100 p-3 md:p-4 rounded-full inline-flex mb-3 md:mb-0 md:mr-5 w-min">
                  <Clock size={24} className="text-teal-600 md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">Desmontaje y montaje de muebles</h3>
              </div>
              
              <p className="text-gray-700 mb-5 text-base md:text-lg leading-relaxed">
                En Manitas 2M, nos encargamos de desmontar y montar tus muebles con profesionalidad. El desmontaje adecuado es esencial, ya que un proceso incorrecto puede dañar el mueble, dificultando el montaje o incluso haciéndolo imposible.
              </p>
              
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm md:shadow-md mb-4 md:mb-6">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Evaluamos el volumen de muebles y la complejidad de tus muebles para darte un precio justo. Deja que los expertos se encarguen de todo.
                </p>
              </div>
              
              <div className="bg-teal-600 text-white p-4 md:p-6 rounded-lg text-center">
                <p className="text-lg md:text-xl font-medium mb-2">¿Solo necesitas una mudanza con desmontaje y montaje de muebles?</p>
                <p className="text-base md:text-lg">¡Sin problema! Confía en Manitas 2M para tu mudanza en Madrid: rápida, segura y a tu medida.</p>
              </div>
            </section>
          </div>
        </div>
      </section>
      
      {/* Image Gallery Section - Enhanced mobile experience */}
      <section id="galeria" className="py-8 md:py-20 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12">Galería de imágenes</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {/* Original image */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src={mudanzasImg1} 
                alt="Servicio de mudanzas" 
                className="w-full h-52 md:h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* New image - Delivery person checking packages */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src={mudanzasImg2} 
                alt="Control de inventario en mudanzas" 
                className="w-full h-52 md:h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* New image - Person wrapping furniture */}
            <div className="overflow-hidden rounded-lg shadow-md sm:col-span-2 md:col-span-1">
              <img 
                src={mudanzasImg3} 
                alt="Embalaje profesional de muebles" 
                className="w-full h-52 md:h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - Optimized for mobile */}
      <section className="py-10 md:py-20 bg-teal-600 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-40 md:w-96 h-40 md:h-96 bg-white rounded-full"></div>
          <div className="absolute -bottom-24 -right-24 w-40 md:w-96 h-40 md:h-96 bg-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">¿Listo para su mudanza?</h2>
          <p className="text-base md:text-xl mb-6 md:mb-10 max-w-2xl mx-auto">
            Contacte con nosotros hoy mismo para obtener un presupuesto sin compromiso. Haremos que su mudanza sea una experiencia sin estrés.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-6">
            <button 
              onClick={handlePhoneClick}
              className="bg-white text-teal-600 px-6 py-3 md:px-8 md:py-4 rounded-full font-medium hover:bg-teal-50 flex items-center justify-center transition-all duration-300 hover:shadow-lg text-base md:text-lg w-full sm:w-auto mb-3 sm:mb-0"
            >
              <Phone className="mr-2 md:mr-3" size={18} />
              Llamar ahora
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="border-2 border-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium hover:bg-white/10 flex items-center justify-center transition-all duration-300 hover:shadow-lg text-base md:text-lg w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 md:mr-3" size={18} />
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

export default MudanzasPage;