import React from 'react';
import { Award, Users, Clock, Sparkles } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      number: "1000+",
      label: "Clientes Satisfechos"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      number: "24/7",
      label: "Disponibilidad"
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "20",
      label: "Años de Experiencia"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      number: "100%",
      label: "Garantía de Satisfacción"
    }
  ];

  return (
    <div id="about-us" className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              En 2MManitasMadrid, nuestra pasión es simplificar la vida de nuestros clientes 
              mediante servicios de mantenimiento y reparación integrales y sostenibles. 
              Fundada en Madrid, hemos crecido desde una pequeña iniciativa local hasta 
              convertirnos en un referente en servicios profesionales de mantenimiento.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Creemos que un hogar bien mantenido es la base de una vida más tranquila y 
              confortable. Por eso, nos comprometemos a ofrecer soluciones rápidas, 
              eficientes y personalizadas que respondan a las necesidades únicas de cada cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">
              Nuestros Valores Fundamentales
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Profesionalidad</h3>
                <p className="text-gray-600 leading-relaxed">
                  Contamos con un equipo altamente cualificado y en constante formación. 
                  Cada miembro de nuestro equipo aporta conocimientos especializados y 
                  un compromiso absoluto con la excelencia en cada servicio que realizamos.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Compromiso</h3>
                <p className="text-gray-600 leading-relaxed">
                  Vamos más allá de cumplir con un trabajo. Nos comprometemos a entender 
                  las necesidades específicas de cada cliente y ofrecer soluciones que 
                  superen sus expectativas, con rapidez, eficiencia y atención personalizada.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Confianza</h3>
                <p className="text-gray-600 leading-relaxed">
                  Construimos relaciones duraderas basadas en la transparencia, 
                  la honestidad y la integridad. Cada servicio es una oportunidad 
                  para demostrar que somos un socio en el que puedes confiar plenamente.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Sostenibilidad</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nuestro compromiso con el medio ambiente va más allá de las palabras. 
                  Utilizamos productos ecológicos, optimizamos nuestros procesos para 
                  reducir residuos y trabajamos con proveedores que comparten nuestra 
                  visión de responsabilidad ambiental.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;