import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always enabled
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowBanner(true);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(localStorage.getItem('cookiePreferences'));
        if (savedPreferences) {
          setCookiePreferences(savedPreferences);
        }
      } catch (error) {
        console.error('Error parsing cookie preferences:', error);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true
    };
    
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    setCookiePreferences(allAccepted);
    setShowBanner(false);
    
    // Enable all tracking scripts
    if (window.gtag && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      });
    }
  };

  const handleEssentialOnly = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false
    };
    
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(essentialOnly));
    setCookiePreferences(essentialOnly);
    setShowBanner(false);
    
    // Disable tracking scripts
    if (window.gtag && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      });
    }
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    setShowBanner(false);
    
    // Update tracking based on preferences
    if (window.gtag && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'analytics_storage': cookiePreferences.analytics ? 'granted' : 'denied',
        'ad_storage': cookiePreferences.marketing ? 'granted' : 'denied'
      });
    }
  };

  const handleTogglePreference = (type) => {
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto">
        {/* Main Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-4 max-w-3xl">
            <h3 className="text-lg font-medium mb-2">Política de Cookies</h3>
            <p className="text-gray-300 text-sm">
              Utilizamos cookies para mejorar su experiencia y analizar el uso del sitio. 
              Algunas cookies son esenciales para el funcionamiento del sitio, mientras que otras 
              nos ayudan a mejorar la experiencia del usuario. Usted puede elegir qué cookies 
              acepta y cuáles rechaza.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleAcceptAll}
              className="bg-teal-500 hover:bg-teal-600 py-2 px-4 rounded whitespace-nowrap"
            >
              Aceptar todo
            </button>
            <button
              onClick={handleEssentialOnly}
              className="bg-transparent border border-white hover:bg-gray-700 py-2 px-4 rounded whitespace-nowrap"
            >
              Solo esenciales
            </button>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="bg-transparent hover:bg-gray-700 py-2 px-4 rounded whitespace-nowrap"
            >
              {showDetails ? 'Ocultar detalles' : 'Personalizar'}
            </button>
          </div>
        </div>
        
        {/* Detailed Preferences */}
        {showDetails && (
          <div className="mt-4 border-t border-gray-700 pt-4">
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Cookies Esenciales</h4>
                  <p className="text-sm text-gray-400">Necesarias para el funcionamiento básico del sitio web.</p>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="essential-cookies" 
                    checked={cookiePreferences.essential} 
                    disabled 
                    className="mr-2 cursor-not-allowed"
                  />
                  <label htmlFor="essential-cookies" className="text-sm text-gray-400">Siempre activo</label>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Cookies Analíticas</h4>
                  <p className="text-sm text-gray-400">Nos ayudan a entender cómo interactúan los usuarios con el sitio.</p>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="analytics-cookies" 
                    checked={cookiePreferences.analytics} 
                    onChange={() => handleTogglePreference('analytics')}
                    className="mr-2 cursor-pointer"
                  />
                  <label htmlFor="analytics-cookies" className="text-sm cursor-pointer">Permitir</label>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Cookies de Marketing</h4>
                  <p className="text-sm text-gray-400">Utilizadas para mostrar anuncios relevantes y campañas de marketing.</p>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="marketing-cookies" 
                    checked={cookiePreferences.marketing} 
                    onChange={() => handleTogglePreference('marketing')}
                    className="mr-2 cursor-pointer"
                  />
                  <label htmlFor="marketing-cookies" className="text-sm cursor-pointer">Permitir</label>
                </div>
              </div>
            </div>
            
            <div className="text-right mt-4">
              <button
                onClick={handleSavePreferences}
                className="bg-teal-500 hover:bg-teal-600 py-2 px-4 rounded"
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        )}
        
        {/* Link to Privacy Policy */}
        <div className="mt-2 text-xs text-gray-400">
          <a href="/politica-privacidad" className="underline hover:text-white">
            Ver nuestra Política de Privacidad
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;