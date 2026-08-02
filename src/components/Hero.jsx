import React, { useEffect, useState } from "react";
import ReviewSlider from "./ReviewSlider";
import {
  Phone,
  MessageCircle,
  Wrench,
  Truck,
  Building2,
  HardHat,
} from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const phoneNumber = "625791624";
  const countryCode = "34";
  const fullPhoneNumber = `${countryCode}${phoneNumber}`;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    window.location.href = `https://wa.me/${fullPhoneNumber}`;
  };

  const scrollToReviews = () => {
    const reviewsSection = document.getElementById("reviews");
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Hero izquierda */}
          <div className="w-full md:w-7/12 order-1 text-center md:text-left">

            {/* Chips */}
            <div
              className={`flex flex-wrap justify-center md:justify-start gap-3 mb-5 transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-6"
              }`}
            >  
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5">
                <HardHat size={16} />
                <span> Profesional Autónomo </span>
              </div>
            
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5">
                <Wrench size={16} />
                <span>Herramientas incluidas</span>
              </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5">
                <Building2 size={16} />
                <span> Servicios a particulares y empresas</span>
              </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5">
                <Truck size={16} />
                <span>Furgoneta propia</span>
              </div>

            </div>

            {/* Título */}
            <h2
              className={`text-4xl md:text-5xl font-bold leading-tight mb-4 transition-all duration-700 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Montadores <br />
              Profesionales en Madrid
            </h2>

            {/* Subtítulo */}
            <p
              className={`text-lg mb-8 transition-all duration-700 delay-300 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Soluciones rápidas y eficientes con acabado profesional.
            </p>

            {/* Botones */}
            <div
              className={`transition-all duration-700 delay-500 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex flex-row gap-3 justify-center md:justify-start">

                <button
                  onClick={handlePhoneClick}
                  className="bg-white text-teal-500 px-6 py-2 rounded-full font-medium hover:bg-teal-50 flex items-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Phone className="mr-2" size={18} />
                  Llamar ahora
                </button>

                <button
                  onClick={handleWhatsAppClick}
                  className="border-2 border-white px-6 py-2 rounded-full font-medium hover:bg-teal-600 flex items-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <MessageCircle className="mr-2" size={18} />
                  WhatsApp
                </button>

              </div>
            </div>
          </div>

          {/* Hero derecha */}
          <div
            className={`w-full md:w-5/12 order-2 mt-10 md:mt-0 transition-all duration-700 delay-300 ease-out ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <ReviewSlider onReviewSectionClick={scrollToReviews} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;