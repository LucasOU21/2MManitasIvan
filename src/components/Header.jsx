import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (
    <>
      <header className="bg-teal-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold tracking-wider">ECOMANITAS</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="hover:text-teal-200">Servicios</a>
              <a href="#about-us" className="hover:text-teal-200">Sobre Nosotros</a>
              <a href="#contact" className="hover:text-teal-200">Contacto</a>
              <button className="bg-white text-teal-500 px-6 py-2 rounded-full font-medium hover:bg-teal-50">
                653 333 139
              </button>
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
              <a href="#services" className="hover:text-teal-200">Servicios</a>
              <a href="#about-us" className="hover:text-teal-200">Sobre Nosotros</a>
              <a href="#contact" className="hover:text-teal-200">Contacto</a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;