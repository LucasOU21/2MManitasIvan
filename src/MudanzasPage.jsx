import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowLeft, Truck, ShieldCheck, Clock, PackageCheck } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Import images
import mudanzasHero from './assets/mudanza1.jpg';
import mudanzasImg1 from './assets/mudanza1.jpg';
// Import additional images when available
// import mudanzasImg2 from './assets/mudanza2.jpg';
// import mudanzasImg3 from './assets/mudanza3.jpg';

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
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with improved visual */}
      <section className="relative pt-16 pb-32 overflow-hidden">
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
            className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 flex items-center hover:bg-white/30 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Volver a servicios
          </button>
          
          <div className="max-w-3xl text-white">
            <h1 
              className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Servicio de Mudanzas
            </h1>
            <p 
              className={`text-xl mb-8 transition-all duration-700 delay-300 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              El servicio de mudanzas más confiable de Madrid. Cuidamos de sus pertenencias como si fueran nuestras, garantizando un traslado seguro y sin complicaciones.
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
      
      {/* Service Details - Enhanced Interactive Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Nuestro servicio de mudanzas incluye</h2>
            
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                En Manitas 2M te ofrecemos precios económicos y servicios flexibles para que tu mudanza en Madrid se adapte a tus necesidades.
              </p>
              <p className="text-lg text-gray-700">
                Contamos con un servicio integral de mudanza y nos ajustamos a tu situación para darte un presupuesto personalizado, sin compromiso.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div 
                className="bg-teal-500 text-white rounded-lg p-6 text-center cursor-pointer transform transition hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center h-44"
                onClick={() => window.location.href = "#embalaje"}
              >
                <div className="bg-white rounded-full p-4 inline-flex mb-3">
                  <PackageCheck size={30} className="text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold">Embalaje profesional</h3>
              </div>
              
              <div 
                className="bg-teal-500 text-white rounded-lg p-6 text-center cursor-pointer transform transition hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center h-44"
                onClick={() => window.location.href = "#transporte"}
              >
                <div className="bg-white rounded-full p-4 inline-flex mb-3">
                  <Truck size={30} className="text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold">Transporte rápido y confiable</h3>
              </div>
              
              <div 
                className="bg-teal-500 text-white rounded-lg p-6 text-center cursor-pointer transform transition hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center h-44"
                onClick={() => window.location.href = "#carga"}
              >
                <div className="bg-white rounded-full p-4 inline-flex mb-3">
                  <ShieldCheck size={30} className="text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold">Carga y descarga</h3>
              </div>

              <div 
                className="bg-teal-500 text-white rounded-lg p-6 text-center cursor-pointer transform transition hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center h-44"
                onClick={() => window.location.href = "#montaje"}
              >
                <div className="bg-white rounded-full p-4 inline-flex mb-3">
                  <Clock size={30} className="text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold">Desmontaje y montaje</h3>
              </div>
            </div>
            
            <div id="embalaje" className="mb-20 bg-gray-50 rounded-lg p-10 shadow-lg transition-all duration-300 hover:shadow-xl border-l-4 border-teal-500">
              <div className="flex items-center mb-6">
                <div className="bg-teal-100 p-4 rounded-full">
                  <PackageCheck size={30} className="text-teal-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-5">Servicio de Embalaje Profesional</h3>
              </div>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Nos encargamos de embalar tus objetos con los materiales adecuados, según el tipo, fragilidad y tamaño de cada uno. Nuestro equipo está capacitado para proteger desde objetos delicados hasta muebles grandes, utilizando técnicas seguras y eficientes.
              </p>
              
              <h4 className="text-xl font-medium text-teal-700 mb-4">En Manitas 2M utilizamos materiales de embalaje profesionales, como:</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
                  <h4 className="font-medium text-teal-700 text-lg mb-3">Plástico de burbujas</h4>
                  <p className="text-gray-600 leading-relaxed">Ideal para proteger objetos frágiles de golpes y vibraciones durante el transporte.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
                  <h4 className="font-medium text-teal-700 text-lg mb-3">Film de espuma</h4>
                  <p className="text-gray-600 leading-relaxed">Perfecto para envolver superficies delicadas o sensibles a rayaduras, ofreciendo una protección adicional.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
                  <h4 className="font-medium text-teal-700 text-lg mb-3">Chips de relleno</h4>
                  <p className="text-gray-600 leading-relaxed">Evitan el movimiento dentro de las cajas durante el transporte, manteniendo todo en su lugar.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
                  <h4 className="font-medium text-teal-700 text-lg mb-3">Film plástico estirable</h4>
                  <p className="text-gray-600 leading-relaxed">Ideal para envolver muebles y protegerlos del polvo y la humedad durante la mudanza.</p>
                </div>
              </div>
              
              <p className="text-gray-700 mt-6 text-lg italic">Y lo que haga falta para garantizar que tus pertenencias lleguen en perfecto estado a su destino.</p>
            </div>
            
            <div id="transporte" className="mb-20 bg-gray-50 rounded-lg p-10 shadow-lg transition-all duration-300 hover:shadow-xl border-l-4 border-teal-500">
              <div className="flex items-center mb-6">
                <div className="bg-teal-100 p-4 rounded-full">
                  <Truck size={30} className="text-teal-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-5">Transporte rápido y confiable</h3>
              </div>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Ofrecemos transporte profesional de mudanzas cubriendo toda la Comunidad de Madrid. Nos aseguramos de que tu traslado sea puntual y seguro, adaptado a tus necesidades.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h4 className="font-medium text-teal-700 text-lg mb-3">Factores que determinan el costo</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  El costo de la mudanza depende de varios factores, como la distancia, el volumen de objetos y los servicios adicionales que puedas requerir como el servicio de embalaje de objetos frágiles para asegurar que todo llegue en perfectas condiciones.
                </p>
                <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                  <p className="text-gray-700 font-medium">Importante:</p>
                  <p className="text-gray-600">
                    Recuerda que, en Madrid Central, las furgonetas solo pueden acceder entre las 7:00 y las 15:00 horas. Si tu mudanza es por la tarde o dura todo el día, necesitarás un permiso especial del Ayuntamiento, que es gratuito para residentes.
                  </p>
                </div>
              </div>
            </div>
            
            <div id="carga" className="mb-20 bg-gray-50 rounded-lg p-10 shadow-lg transition-all duration-300 hover:shadow-xl border-l-4 border-teal-500">
              <div className="flex items-center mb-6">
                <div className="bg-teal-100 p-4 rounded-full">
                  <ShieldCheck size={30} className="text-teal-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-5">Carga y descarga</h3>
              </div>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                En Manitas 2M, queremos que tu mudanza sea lo más eficiente posible, por lo que valoramos distintos factores para ofrecerte el mejor servicio.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
                  <h4 className="font-medium text-teal-700 text-lg mb-3">Acceso al ascensor</h4>
                  <p className="text-gray-600 leading-relaxed">Si tus muebles pueden ser trasladados por el ascensor, el proceso será más rápido y económico. Al evitar el uso de las escaleras, reducimos tiempo y esfuerzo, lo que se traduce en un menor costo para ti.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
                  <h4 className="font-medium text-teal-700 text-lg mb-3">Cajas de cartón</h4>
                  <p className="text-gray-600 leading-relaxed">¿Necesitas cajas de cartón para tu mudanza? Te las conseguimos a precios especiales para facilitar el proceso de embalaje y traslado.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
                  <h4 className="font-medium text-teal-700 text-lg mb-3">Operarios necesarios</h4>
                  <p className="text-gray-600 leading-relaxed">Dependiendo de cuántas pertenencias tengas, asignaremos el número adecuado de operarios para asegurar que todo se traslade de manera eficiente y segura.</p>
                </div>
              </div>
            </div>
            
            <div id="montaje" className="mb-16 bg-gray-50 rounded-lg p-10 shadow-lg transition-all duration-300 hover:shadow-xl border-l-4 border-teal-500">
              <div className="flex items-center mb-6">
                <div className="bg-teal-100 p-4 rounded-full">
                  <Clock size={30} className="text-teal-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-5">Desmontaje y montaje de muebles</h3>
              </div>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                En Manitas 2M, nos encargamos de desmontar y montar tus muebles con profesionalidad. El desmontaje adecuado es esencial, ya que un proceso incorrecto puede dañar el mueble, dificultando el montaje o incluso haciéndolo imposible.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <p className="text-gray-600 leading-relaxed">
                  Evaluamos el volumen de muebles y la complejidad de tus muebles para darte un precio justo. Deja que los expertos se encarguen de todo.
                </p>
              </div>
              
              <div className="bg-teal-600 text-white p-6 rounded-lg text-center">
                <p className="text-xl font-medium mb-2">¿Solo necesitas una mudanza con desmontaje y montaje de muebles?</p>
                <p className="text-lg">¡Sin problema! Confía en Manitas 2M para tu mudanza en Madrid: rápida, segura y a tu medida.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Image Gallery Section - Enhanced */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Galería de imágenes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <div className="relative h-72">
                <img 
                  src={mudanzasImg1} 
                  alt="Servicio de mudanzas" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <p className="text-white p-4 font-medium">Servicio profesional de mudanzas</p>
                </div>
              </div>
            </div>
            
            {/* Add more images when available */}
            {/* Placeholder divs with gradient backgrounds until you have more images */}
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <div className="relative h-72 bg-gradient-to-br from-teal-200 to-teal-400 flex items-center justify-center">
                <div className="text-center p-6">
                  <Truck className="text-white h-16 w-16 mx-auto mb-4 opacity-70" />
                  <p className="text-white text-lg font-medium">Equipos de transporte</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <p className="text-white p-4 font-medium">Vehículos equipados para mudanzas</p>
                </div>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <div className="relative h-72 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <div className="text-center p-6">
                  <PackageCheck className="text-white h-16 w-16 mx-auto mb-4 opacity-70" />
                  <p className="text-white text-lg font-medium">Embalaje y protección</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <p className="text-white p-4 font-medium">Materiales profesionales de embalaje</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - Enhanced */}
      <section className="py-20 bg-teal-600 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8">¿Listo para su mudanza?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Contacte con nosotros hoy mismo para obtener un presupuesto sin compromiso. Haremos que su mudanza sea una experiencia sin estrés.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={handlePhoneClick}
              className="bg-white text-teal-600 px-8 py-4 rounded-full font-medium hover:bg-teal-50 flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg"
            >
              <Phone className="mr-3" size={20} />
              Llamar ahora
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="border-2 border-white px-8 py-4 rounded-full font-medium hover:bg-white/10 flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg"
            >
              <MessageCircle className="mr-3" size={20} />
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