import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import logoImage from '../assets/LogoManitas.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Full list of services for the dropdown - only Mudanzas has a dedicated page
  const services = [
    { title: "Mudanzas", path: "/mudanzas", hasPage: true },
    { title: "Carpintería", path: "#services", hasPage: false },
    { title: "Electricidad", path: "#services", hasPage: false },
    { title: "Albañilería", path: "#services", hasPage: false },
    { title: "Plato de Ducha", path: "#services", hasPage: false },
    { title: "Tarima", path: "#services", hasPage: false },
    { title: "Pladur", path: "#services", hasPage: false },
    { title: "Pintura", path: "#services", hasPage: false },
    { title: "Fontanería", path: "#services", hasPage: false }
  ];
  
  // Check if we're on the home page or a service page
  const isHomePage = window.location.pathname === '/';
  
  // Function to handle service link clicks
  const handleServiceClick = (service, e) => {
    if (!service.hasPage) {
      e.preventDefault();
      // If on home page, scroll to services section
      if (isHomePage) {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If on another page, store instruction to scroll to services and redirect to home
        sessionStorage.setItem('scrollToSection', 'services');
        window.location.href = '/';
      }
      // Close the dropdown
      setIsServicesDropdownOpen(false);
      setIsMenuOpen(false);
    }
    // For Mudanzas, let the default link behavior take place
  };
  
  // Function to handle navigation to sections on the main page
  const navigateToMainSection = (sectionId, e) => {
    if (isHomePage) {
      // If on home page, just scroll to the section
      e.preventDefault();
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on another page, store the target section in sessionStorage
      sessionStorage.setItem('scrollToSection', sectionId);
      // Let the link proceed naturally to the home page
    }
  };
  
  // Check if we need to scroll to a section when the component mounts
  useEffect(() => {
    if (isHomePage) {
      const sectionToScroll = sessionStorage.getItem('scrollToSection');
      if (sectionToScroll) {
        // Small timeout to ensure the page is fully loaded
        setTimeout(() => {
          const element = document.getElementById(sectionToScroll);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
          // Clear the stored section
          sessionStorage.removeItem('scrollToSection');
        }, 500);
      }
    }
  }, [isHomePage]);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  return (
    <>
      <header className="bg-teal-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4 h-25 overflow-hidden">
              <a href="/">
                <img 
                  src={logoImage}
                  alt="2mmanitas madrid" 
                  className="max-h-24 w-auto object-contain" 
                />
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  className="flex items-center hover:text-teal-200 focus:outline-none"
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                >
                  Servicios
                  {isServicesDropdownOpen ? 
                    <ChevronUp size={16} className="ml-1" /> : 
                    <ChevronDown size={16} className="ml-1" />
                  }
                </button>
                
                {/* Dropdown Menu */}
                {isServicesDropdownOpen && (
                  <div className="absolute z-10 mt-2 py-2 w-48 bg-white rounded-md shadow-xl">
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href={service.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-500 hover:text-white"
                        onClick={(e) => handleServiceClick(service, e)}
                      >
                        {service.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Main page section links with improved navigation */}
              <a 
                href={isHomePage ? "#about-us" : "/"} 
                className="hover:text-teal-200"
                onClick={(e) => navigateToMainSection('about-us', e)}
              >
                Sobre Nosotros
              </a>
              <a 
                href={isHomePage ? "#reviews" : "/"} 
                className="hover:text-teal-200"
                onClick={(e) => navigateToMainSection('reviews', e)}
              >
                Reseñas
              </a>
              <a 
                href="tel:625791624" 
                className="bg-white text-teal-500 px-6 py-2 rounded-full font-medium hover:bg-teal-50"
              >
                625 79 16 24
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-teal-500 text-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2">
              {/* No dropdown toggle - just display services heading */}
              <div className="font-medium text-lg py-2 border-b border-teal-400">Servicios:</div>
              
              {/* Direct list of service links - always visible in mobile menu */}
              <div className="pl-2 space-y-2 mb-4">
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={service.path}
                    className="block py-2 px-2 text-white hover:text-teal-200"
                    onClick={(e) => handleServiceClick(service, e)}
                  >
                    {service.title}
                  </a>
                ))}
              </div>
              
              {/* Main page section links with improved navigation */}
              <a 
                href={isHomePage ? "#about-us" : "/"} 
                className="py-2 hover:text-teal-200 border-t border-teal-400"
                onClick={(e) => navigateToMainSection('about-us', e)}
              >
                Sobre Nosotros
              </a>
              <a 
                href={isHomePage ? "#reviews" : "/"} 
                className="py-2 hover:text-teal-200"
                onClick={(e) => navigateToMainSection('reviews', e)}
              >
                Reseñas
              </a>
              <a href="tel:625791624" className="py-2 hover:text-teal-200 flex items-center">
                <Phone size={16} className="mr-2" />
                Llamar: 625 79 16 24
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;