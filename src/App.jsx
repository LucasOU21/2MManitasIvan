import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import GoogleAdsTracker from './components/GoogleAdsTracker' // Import the tracker
import CookieConsentBanner from './components/CookieConsentBanner' // Import cookie consent

function App() {
  // Initialize Google Ads tracking
  useEffect(() => {
    // You can add page-level or app-level tracking here if needed
    // This is in addition to the code in index.html
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <AboutUs />
      <Footer />
      <FloatingWhatsApp />
      <GoogleAdsTracker /> {/* Add the tracker component */}
      <CookieConsentBanner /> {/* Add cookie consent banner */}
    </div>
  )
}

export default App