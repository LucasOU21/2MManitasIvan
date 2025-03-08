import { useEffect } from 'react';

// Track a conversion using Google Ads
export const trackConversion = (conversionLabel) => {
  if (window.gtag && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      'send_to': `AW-16915711020/${conversionLabel}`
    });
  } else {
    console.warn('Google Ads tracking code not loaded yet');
  }
};

// Example component to track page views
const GoogleAdsTracker = () => {
  useEffect(() => {
    // You can add page-specific tracking here if needed
    console.log('Google Ads tracker mounted');
  }, []);

  return null; // This component doesn't render anything
};

export default GoogleAdsTracker;