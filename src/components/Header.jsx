import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import logoImage from '../assets/LogoManitas.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // List of services for the dropdown
  const services = [
    { title: "Carpintería", path: "/carpinteria" },
    { title: "Electricidad", path: "/electricidad" },
    { title: "Mudanzas", path: "/mudanzas" },
    { title: "Albañilería", path: "/albanileria" },
    { title: "Plato de Ducha", path: "/plato-ducha" },
    { title: "Tarima", path: "/tarima" },
    { title: "Pladur", path: "/pladur" },
    { title: "Pintura", path: "/pintura" },
    { title: "Fontanería", path: "/fontaneria" }
  ];
  
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
  
  // Navigate to a specific route
  const navigateTo = (path) => {
    window.location.href = path;
  };
  
  // Toggle dropdown without navigating
  const toggleServicesDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };
  
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
                  onClick={toggleServicesDropdown}
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
                        onClick={(e) => {
                          e.preventDefault();
                          navigateTo(service.path);
                        }}
                      >
                        {service.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <a href="#about-us" className="hover:text-teal-200">Sobre Nosotros</a>
              <a href="#reviews" className="hover:text-teal-200">Reseñas</a>
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
            <nav className="flex flex-col space-y-4">
              {/* Mobile Services Dropdown */}
              <div>
                <button 
                  className="flex items-center hover:text-teal-200 w-full focus:outline-none"
                  onClick={toggleServicesDropdown}
                >
                  Servicios
                  {isServicesDropdownOpen ? 
                    <ChevronUp size={16} className="ml-2" /> : 
                    <ChevronDown size={16} className="ml-2" />
                  }
                </button>
                
                {/* Mobile Dropdown Content */}
                {isServicesDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href={service.path}
                        className="block py-2 text-teal-100 hover:text-white active:text-white"
                        onClick={(e) => {
                          e.preventDefault();
                          navigateTo(service.path);
                          setIsMenuOpen(false); // Close menu after selecting
                        }}
                      >
                        {service.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <a href="#about-us" className="hover:text-teal-200">Sobre Nosotros</a>
              <a href="#reviews" className="hover:text-teal-200">Reseñas</a>
              <a href="tel:625791624" className="hover:text-teal-200 flex items-center">
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