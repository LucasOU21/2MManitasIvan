import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowLeft, ShieldCheck, Clock, PackageCheck } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import puertasHero from './assets/puerta-1.jpg';

const Puertas = () => {
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
          <img src={puertasHero} alt="Instalación de puertas" className="w-full h-full object-cover" />
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
              Instalación y sustitución de puertas
            </h1>
            <p className={`text-lg md:text-xl mb-6 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Instalamos, cambiamos y ajustamos puertas de interior y entrada en Madrid.
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
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            ¿Qué incluye nuestro servicio?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <PackageCheck size={32} className="text-teal-500" />,
                title: 'Instalación de puertas',
                text: 'Instalamos puertas de entrada e interiores con acabado profesional.'
              },
              {
                icon: <ShieldCheck size={32} className="text-teal-500" />,
                title: 'Profesionales experimentados',
                text: 'Equipo capacitado en instalación de puertas, marcos y ajustes de precisión.'
              },
              {
                icon: <Clock size={32} className="text-teal-500" />,
                title: 'Servicio rápido',
                text: 'Trabajamos con rapidez y nos adaptamos a tus horarios.'
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

      {/* Especialistas en puertas */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-4 text-center">Especialistas en Puertas</h2>
          <p className="text-lg text-center mb-10 text-gray-700">
            Nos especializamos en la instalación, sustitución y ajuste de todo tipo de puertas. No fabricamos.
          </p>

          {/* Service feature boxes - clicables */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-10">
            {[
              {
                id: 'entrada',
                icon: <PackageCheck size={20} className="text-teal-500 md:w-6 md:h-6" />,
                label: 'Puertas de Entrada'
              },
              {
                id: 'interiores',
                icon: <ShieldCheck size={20} className="text-teal-500 md:w-6 md:h-6" />,
                label: 'Puertas Interiores'
              },
              {
                id: 'armarios',
                icon: <PackageCheck size={20} className="text-teal-500 md:w-6 md:h-6" />,
                label: 'Puertas Armarios'
              },
              {
                id: 'tapetas',
                icon: <Clock size={20} className="text-teal-500 md:w-6 md:h-6" />,
                label: 'Tapetas'
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

          {/* Secciones de detalle */}
          <div id="entrada" className="mb-8 md:mb-16 bg-white rounded-lg p-5 md:p-10 shadow-md md:shadow-lg border-l-4 border-teal-500 scroll-mt-20">
            <h3 className="text-xl md:text-2xl font-semibold text-teal-700 mb-4">Puertas de Entrada</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Instalación de puertas de entrada seguras y duraderas.</li>
              <li>Trabajamos con puertas blindadas, acorazadas, de madera, aluminio y PVC.</li>
              <li>Desmontaje de puerta antigua.</li>
              <li>Instalación de marcos y tapetas.</li>
              <li>Colocación de cerraduras de seguridad y bisagras.</li>
              <li>Ajustes de precisión y acabados profesionales.</li>
            </ul>
          </div>

          <div id="interiores" className="mb-8 md:mb-16 bg-white rounded-lg p-5 md:p-10 shadow-md md:shadow-lg border-l-4 border-teal-500 scroll-mt-20">
            <h3 className="text-xl md:text-2xl font-semibold text-teal-700 mb-4">Puertas Interiores</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Instalación de puertas interiores con acabado profesional.</li>
              <li>Trabajamos con puertas de madera maciza, placas y modernas.</li>
              <li>Ajuste de marcos a medida.</li>
              <li>Regulación de bisagras.</li>
              <li>Colocación de herrajes y tapetas.</li>
              <li>Desmontaje de puerta antigua.</li>
            </ul>
          </div>

          <div id="armarios" className="mb-8 md:mb-16 bg-white rounded-lg p-5 md:p-10 shadow-md md:shadow-lg border-l-4 border-teal-500 scroll-mt-20">
            <h3 className="text-xl md:text-2xl font-semibold text-teal-700 mb-4">Puertas de Armarios</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Instalación y ajuste de puertas de armarios y roperos.</li>
              <li>Trabajamos con puertas abatibles y correderas.</li>
              <li>Desmontaje e instalación de puertas.</li>
              <li>Regulación de bisagras.</li>
              <li>Alineación perfecta de puertas.</li>
              <li>Sustitución de herrajes si es necesario.</li>
            </ul>
          </div>

          <div id="tapetas" className="mb-8 md:mb-16 bg-white rounded-lg p-5 md:p-10 shadow-md md:shadow-lg border-l-4 border-teal-500 scroll-mt-20">
            <h3 className="text-xl md:text-2xl font-semibold text-teal-700 mb-4">Sustitución de Tapetas</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Sustituimos tapetas desgastadas o dañadas.</li>
              <li>Trabajamos con tapetas de madera, melamina y lacadas.</li>
              <li>Puerta renovada sin necesidad de cambiar toda la puerta.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Beneficios destacados */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Instalación profesional y precisa",
              "Presupuestos sin compromiso y cerrados",
              "Amplia experiencia en todo tipo de puertas",
              "Servicio rápido, limpio y eficiente"
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
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">¿Cómo funciona?</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
            <li>Contáctanos por teléfono o WhatsApp y describe tu necesidad.</li>
            <li>Te damos un presupuesto personalizado sin compromiso.</li>
            <li>Agendamos día y hora según tu disponibilidad.</li>
            <li>Realizamos la instalación, sustitución o ajuste con profesionalidad.</li>
          </ol>
        </div>
      </section>

      {/* CTA personalizado */}
      <section className="py-16 bg-teal-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Necesitas instalar, cambiar o ajustar una puerta?</h2>
          <p className="text-lg mb-6">Solicita tu presupuesto gratuito. Te responderemos en menos de 24h.</p>
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

export default Puertas;