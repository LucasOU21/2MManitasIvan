import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowLeft, ShieldCheck, Clock, PackageCheck } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import montajeHero from './assets/montaje.muebles.jpg';

const MontajeMueblesPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [contactMethod, setContactMethod] = useState('');
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

  // Dentro de MontajeMueblesPage, justo antes del return:
const [openSection, setOpenSection] = useState(null);

const toggleSection = (index) => {
  setOpenSection(openSection === index ? null : index);
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
            <ArrowLeft size={16} className="mr-2" /> Volver a inicio
          </button>

          <div className="max-w-3xl text-white">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Montaje profesional de muebles en Madrid
            </h1>
            <p className={`text-lg md:text-xl mb-6 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Montamos desde muebles básicos hasta complejos armarios o cocinas. Rápido, limpio y sin preocupaciones.
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
            {[{
              icon: <PackageCheck size={32} className="text-teal-500" />, title: 'Montaje de todo tipo de muebles',
              text: 'Armarios, estanterías, muebles de salón, estructuras complejas y más.'
            }, {
              icon: <ShieldCheck size={32} className="text-teal-500" />, title: 'Montadores profesionales',
              text: 'Contamos con un equipo formado y con experiencia en montaje de marcas como IKEA, Leroy Merlin y más.'
            }, {
              icon: <Clock size={32} className="text-teal-500" />, title: 'Montaje rápido y limpio',
              text: 'Trabajamos con rapidez y dejamos todo limpio al finalizar. Nos adaptamos a tus horarios.'
            }].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios destacados */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Puntualidad garantizada y tiempos de respuesta rápidos",
              "Presupuestos cerrados sin sorpresas",
              "Atención personalizada y servicio cercano",
              "Montaje seguro y sin daños en tus muebles"
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
            <li>Contáctanos por teléfono o WhatsApp y cuéntanos qué necesitas montar.</li>
            <li>Te damos un presupuesto personalizado sin compromiso.</li>
            <li>Agendamos día y hora de forma flexible.</li>
            <li>Montamos el mueble y revisamos contigo el resultado final.</li>
          </ol>
        </div>
      </section>

      {/* Formulario de contacto 
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Podemos ayudarte</h2>
          <form
            action="mailto:info@kaliareformas.com"
            method="POST"
            encType="text/plain"
            className="space-y-6"
          >
            <div>
              <label className="block text-gray-700 font-medium mb-2">Código postal *</label>
              <input type="text" name="Código postal" required className="w-full border border-gray-300 rounded px-4 py-2" />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">¿Qué tipo de mueble necesitas que te montemos? *</label>
              <textarea name="Tipo de mueble" required className="w-full border border-gray-300 rounded px-4 py-2" rows="2" />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">¿Cuántas unidades necesitas que te montemos? *</label>
              <div className="space-y-2">
                {['1 unidad', '2-3 unidades', '4-5 unidades', 'Más de 5 unidades'].map((option, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input type="radio" name="Cantidad de unidades" value={option} required />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">¿Posees instrucciones de montaje? *</label>
              <div className="flex space-x-4">
                {['Sí', 'No'].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input type="radio" name="Instrucciones montaje" value={option} required />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

             <div>
              <label className="block text-gray-700 font-medium mb-2">¿Por dónde quieres que te contactemos? *</label>
              <div className="flex space-x-4">
                {['WhatsApp', 'Teléfono', 'Correo electrónico'].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="Método de contacto"
                      value={option}
                      required
                      onChange={(e) => setContactMethod(e.target.value)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

          
            {contactMethod === 'WhatsApp' && (
              <div>
                <label className="block text-gray-700 font-medium mb-2">Número de WhatsApp *</label>
                <input
                  type="tel"
                  name="Número de WhatsApp"
                  required
                  placeholder="+34 6XX XXX XXX"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>
            )}

            {contactMethod === 'Teléfono' && (
              <div>
                <label className="block text-gray-700 font-medium mb-2">Número de teléfono *</label>
                <input
                  type="tel"
                  name="Número de teléfono"
                  required
                  placeholder="+34 9XX XXX XXX"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>
            )}

            {contactMethod === 'Correo electrónico' && (
              <div>
                <label className="block text-gray-700 font-medium mb-2">Correo electrónico *</label>
                <input
                  type="email"
                  name="Correo electrónico"
                  required
                  placeholder="tuemail@ejemplo.com"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>
            )}

            <button
              type="submit"
              className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition w-full"
            >
              Enviar solicitud
            </button>
          </form>
        </div>
      </section> */}

      {/* CTA personalizado */}
      <section className="py-16 bg-teal-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Necesitas montar tus muebles?</h2>
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

export default MontajeMueblesPage;