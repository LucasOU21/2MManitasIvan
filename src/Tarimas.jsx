import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowLeft, ShieldCheck, Clock, PackageCheck, Ruler, Hammer } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import tarimaHero from './assets/Tarima1.jpg';
import tarimaGaleria from './assets/Tarima2.jpg';

const Tarimas = () => {
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
    window.location.href = '/';
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
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

      {/* Hero */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={tarimaHero} alt="Montaje de tarimas" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <button
            onClick={handleBackClick}
            className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4 flex items-center hover:bg-white/30 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Volver a inicio
          </button>

          <div className="max-w-3xl text-white">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Montaje de tarimas profesional
            </h1>
            <p className={`text-lg md:text-xl mb-6 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Montamos tarimas de todas las calidades, tiendas y grosores, con acabados limpios, precisos y duraderos.
            </p>
            <div className={`flex gap-3 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button onClick={handlePhoneClick} className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 flex items-center hover:scale-105 transition text-sm md:text-base">
                <Phone className="mr-2" size={16} /> Llamar ahora
              </button>
              <button onClick={handleWhatsAppClick} className="bg-white text-teal-600 px-6 py-3 rounded-full hover:bg-teal-50 flex items-center hover:scale-105 transition text-sm md:text-base">
                <MessageCircle className="mr-2" size={16} /> WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué incluye nuestro servicio? */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">¿Qué incluye nuestro servicio?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <PackageCheck size={32} className="text-teal-500" />,
                title: 'Instalación profesional',
                text: 'Montaje limpio y preciso de tarimas flotantes, clic-clac o macizas.'
              },
              {
                icon: <ShieldCheck size={32} className="text-teal-500" />,
                title: 'Trabajo de calidad',
                text: 'Trabajamos con cuidado para que el resultado quede perfecto y duradero.'
              },
              {
                icon: <Clock size={32} className="text-teal-500" />,
                title: 'Servicio rápido',
                text: 'Nos adaptamos a tus tiempos y dejamos el espacio listo para usar.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de tarimas */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-4 text-center">Montamos todo tipo de tarimas</h2>
          <p className="text-lg text-center mb-10 text-gray-700">
            Instalamos tarimas de distintas calidades, tiendas y grosores para dar con la mejor opción para cada espacio.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-10">
            {[
              {
                id: 'flotantes',
                icon: <Ruler size={20} className="text-teal-500 md:w-6 md:h-6" />,
                label: 'Tarimas Flotantes'
              },
              {
                id: 'clic',
                icon: <Hammer size={20} className="text-teal-500 md:w-6 md:h-6" />,
                label: 'Tarimas Clic-Clac'
              },
              {
                id: 'macizas',
                icon: <PackageCheck size={20} className="text-teal-500 md:w-6 md:h-6" />,
                label: 'Tarimas Macizas'
              },
              {
                id: 'rodapies',
                icon: <ShieldCheck size={20} className="text-teal-500 md:w-6 md:h-6" />,
                label: 'Rodapiés'
              }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="bg-teal-500 text-white rounded-lg p-3 md:p-6 text-center flex flex-col items-center justify-center h-28 md:h-44 hover:scale-105 transition transform cursor-pointer"
              >
                <div className="bg-white rounded-full p-3 md:p-4 mb-2 md:mb-3 inline-flex">
                  {item.icon}
                </div>
                <h3 className="text-sm md:text-xl font-semibold">{item.label}</h3>
              </button>
            ))}
          </div>

          <div id="flotantes" className="mb-8 md:mb-16 bg-white rounded-lg p-5 md:p-10 shadow-md md:shadow-lg border-l-4 border-teal-500 scroll-mt-20">
            <h3 className="text-xl md:text-2xl font-semibold text-teal-700 mb-4">Tarimas flotantes</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Instalación rápida y limpia, ideal para reformas y cambios de uso.</li>
              <li>Montamos modelos de distintas calidades y grosores según el espacio.</li>
              <li>Perfectas para salas, dormitorios y ambientes con un acabado moderno.</li>
            </ul>
          </div>

          <div id="clic" className="mb-8 md:mb-16 bg-white rounded-lg p-5 md:p-10 shadow-md md:shadow-lg border-l-4 border-teal-500 scroll-mt-20">
            <h3 className="text-xl md:text-2xl font-semibold text-teal-700 mb-4">Tarimas clic-clac</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Montaje sencillo y sin necesidad de grandes preparaciones previas.</li>
              <li>Ideal para viviendas, oficinas y zonas donde se busca practicidad.</li>
            </ul>
          </div>

          <div id="macizas" className="mb-8 md:mb-16 bg-white rounded-lg p-5 md:p-10 shadow-md md:shadow-lg border-l-4 border-teal-500 scroll-mt-20">
            <h3 className="text-xl md:text-2xl font-semibold text-teal-700 mb-4">Tarimas macizas</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Instalación precisa para un acabado más elegante y duradero.</li>
              <li>Trabajamos con modelos de distintas calidades, tanto estándar como premium.</li>
              <li>Recomendadas para quienes buscan un resultado más exclusivo.</li>
            </ul>
          </div>

          <div id="rodapies" className="mb-8 md:mb-16 bg-white rounded-lg p-5 md:p-10 shadow-md md:shadow-lg border-l-4 border-teal-500 scroll-mt-20">
            <h3 className="text-xl md:text-2xl font-semibold text-teal-700 mb-4">Rodapiés y remates</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Corte y colocación de rodapiés para un acabado perfecto.</li>
              <li>Completamos la instalación para que la tarima quede visualmente impecable.</li>
              <li>Trabajamos con precisión para que la transición entre suelos y paredes sea limpia.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-5">Algunos de nuestros trabajos</h2>
          <p className="text-center text-gray-500 mb-6">Acabados cuidados y instalaciones realizadas con detalle.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src={tarimaHero} alt="Instalación de tarima 1" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <img src={tarimaHero} alt="Instalación de tarima 2" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* ¿Por qué elegirnos? */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Montamos tarimas de todas las calidades, tiendas y grosores',
              'Instalación limpia, ordenada y con acabado profesional',
              'Equipo con experiencia en diferentes tipos de suelos y remates',
              'Presupuestos claros y atención cercana'
            ].map((text, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <ShieldCheck className="text-teal-500" size={20} />
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Cómo funciona? */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">¿Cómo funciona?</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
            <li>Contáctanos por teléfono o WhatsApp y cuéntanos qué tipo de tarima necesitas.</li>
            <li>Te orientamos sobre la mejor opción según calidad, grosor y espacio.</li>
            <li>Agendamos la instalación en el momento más adecuado para ti.</li>
            <li>Montamos la tarima y dejamos el resultado impecable.</li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Quieres instalar una tarima nueva?</h2>
          <p className="text-lg mb-6">Solicita tu presupuesto sin compromiso y te ayudamos a elegir la mejor opción.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={handlePhoneClick} className="bg-white text-teal-600 px-6 py-3 rounded-full font-medium hover:bg-teal-50 flex items-center justify-center transition-all duration-300 hover:shadow-lg">
              <Phone className="mr-2" /> Llamar ahora
            </button>
            <button onClick={handleWhatsAppClick} className="border-2 border-white px-6 py-3 rounded-full font-medium hover:bg-white/10 flex items-center justify-center transition-all duration-300 hover:shadow-lg">
              <MessageCircle className="mr-2" /> WhatsApp
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Tarimas;