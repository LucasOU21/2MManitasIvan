import React, { useState, useEffect } from 'react';

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 md:mr-4">
          <p>
            Utilizamos cookies para mejorar su experiencia y analizar el uso del sitio. 
            Al continuar navegando, acepta el uso de cookies de acuerdo con nuestra{' '}
            <a href="/politica-privacidad" className="underline">
              Política de Privacidad
            </a>.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleAccept}
            className="bg-teal-500 hover:bg-teal-600 py-2 px-4 rounded whitespace-nowrap"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;