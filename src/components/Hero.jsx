import React, { useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import ReviewSlider from './ReviewSlider';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const phoneNumber = '625791624';
  const countryCode = '34'; // Spain country code
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
    // Scroll to reviews section
    const reviewsSection = document.getElementById('reviews');
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Hero Content */}
          <div className="w-full md:w-7/12 order-1 text-center md:text-left">
            <h2 
              className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Servicios de Manitas Profesional a Domicilio
            </h2>
            <p 
              className={`text-lg mb-8 transition-all duration-700 delay-300 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Soluciones rápidas y eficientes para todas tus necesidades de reparación y mantenimiento
            </p>
            <div 
              className={`flex flex-wrap gap-4 justify-center md:justify-start transition-all duration-700 delay-500 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex flex-row gap-3 w-full justify-center md:justify-start">
                <button 
                  onClick={handlePhoneClick}
                  className="bg-white text-teal-500 px-6 py-2 rounded-full font-medium hover:bg-teal-50 flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm md:text-base"
                >
                  <Phone className="mr-2" size={18} />
                  Llamar ahora
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="border-2 border-white px-6 py-2 rounded-full font-medium hover:bg-teal-600 flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm md:text-base"
                >
                  <MessageCircle className="mr-2" size={18} />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
          
          {/* Right side - Review Slider */}
          <div className={`w-full md:w-5/12 order-2 mt-10 md:mt-0 transition-all duration-700 delay-300 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <ReviewSlider onReviewSectionClick={scrollToReviews} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;