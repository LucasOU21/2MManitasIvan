import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = '625791624';
  const countryCode = '34'; // Spain country code
  const fullPhoneNumber = `${countryCode}${phoneNumber}`;
  
  useEffect(() => {
    // Delay the appearance of the WhatsApp button for a nice entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500); // Delay of 1.5 seconds
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleWhatsAppClick = () => {
    window.location.href = `https://wa.me/${fullPhoneNumber}`;
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
      {/* Tooltip */}
      {isTooltipVisible && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 mb-2 w-48 animate-fadeIn">
          <button 
            onClick={() => setIsTooltipVisible(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <X size={16} />
          </button>
          <p className="text-gray-800 text-sm mt-1">
            ¿Necesita ayuda? ¡Contáctenos por WhatsApp!
          </p>
        </div>
      )}
      
      {/* Floating Button with Pulse Effect */}
      <button 
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsTooltipVisible(true)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 relative"
      >
        <MessageCircle size={30} fill="white" className={isVisible ? 'animate-bounce' : ''} />
        
        {/* Pulse animation ring */}
        <span className="absolute inset-0 rounded-full border-4 border-green-300 animate-ping opacity-75"></span>
      </button>
    </div>
  );
};

// Add these custom animations to your tailwind.config.js or use them directly in your global CSS file
// If you need to add them to your CSS, remove the comment below and add this to your index.css

/*
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes ping {
  75%, 100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-5%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
}

.animate-ping {
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.animate-bounce {
  animation: bounce 1s infinite;
}
*/

export default FloatingWhatsApp;