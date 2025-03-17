import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Reviews from './components/Reviews'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import GoogleAdsTracker from './components/GoogleAdsTracker'
import CookieConsentBanner from './components/CookieConsentBanner'

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
      <Reviews /> {/* Reviews section after AboutUs */}
      <Footer />
      <FloatingWhatsApp />
      <GoogleAdsTracker />
      <CookieConsentBanner />
    </div>
  )
}

export default App