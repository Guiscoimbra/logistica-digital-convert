
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-rota-darkBlue bg-opacity-90 py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="relative z-10">
          <img 
            src={isScrolled ? "/lovable-uploads/b0212289-7efa-459c-ba75-589929f6b90b.png" : "/lovable-uploads/64c331e6-ef73-44e5-9344-b5757fe868f5.png"} 
            alt="Rota Digital" 
            className="h-10 md:h-12"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className={`${isScrolled ? 'text-rota-darkBlue' : 'text-white'} hover:text-rota-mediumBlue font-medium transition-colors`}>Home</a>
          <a href="#services" className={`${isScrolled ? 'text-rota-darkBlue' : 'text-white'} hover:text-rota-mediumBlue font-medium transition-colors`}>Serviços</a>
          <a href="#plans" className={`${isScrolled ? 'text-rota-darkBlue' : 'text-white'} hover:text-rota-mediumBlue font-medium transition-colors`}>Planos</a>
          <a href="#methodology" className={`${isScrolled ? 'text-rota-darkBlue' : 'text-white'} hover:text-rota-mediumBlue font-medium transition-colors`}>Metodologia</a>
          <a 
            href="https://wa.me/5531093673225?text=Ol%C3%A1%20venho%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Rota%20Digital."
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary py-2 px-4"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-10 p-2 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? 
            <X className={isScrolled ? "h-6 w-6 text-rota-darkBlue" : "h-6 w-6 text-white"} /> : 
            <Menu className={isScrolled ? "h-6 w-6 text-rota-darkBlue" : "h-6 w-6 text-white"} />
          }
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-0 bg-rota-darkBlue bg-opacity-95">
            <div className="flex flex-col items-center justify-center min-h-screen space-y-8 text-white">
              <a href="#home" onClick={toggleMenu} className="text-xl font-medium hover:text-gray-300">Home</a>
              <a href="#services" onClick={toggleMenu} className="text-xl font-medium hover:text-gray-300">Serviços</a>
              <a href="#plans" onClick={toggleMenu} className="text-xl font-medium hover:text-gray-300">Planos</a>
              <a href="#methodology" onClick={toggleMenu} className="text-xl font-medium hover:text-gray-300">Metodologia</a>
              <a 
                href="https://wa.me/5531093673225?text=Ol%C3%A1%20venho%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Rota%20Digital."
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={toggleMenu}
                className="btn btn-outline border-white text-white hover:bg-white hover:text-rota-darkBlue"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
