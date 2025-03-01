import React, { useState } from 'react';
import { Scissors, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="flex items-center">
            <Scissors className="h-8 w-8 text-rose-600 mr-2" />
            <span className="text-xl font-bold text-gray-800">Ateliê de Costura</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-rose-600 font-medium transition duration-300">
              Início
            </a>
            <a href="#servicos" className="text-gray-700 hover:text-rose-600 font-medium transition duration-300">
              Serviços
            </a>
            <a href="#contato" className="text-gray-700 hover:text-rose-600 font-medium transition duration-300">
              Contato
            </a>
            <a 
              href="tel:+5511987654321" 
              className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
            >
              (11) 98765-4321
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a 
                href="/" 
                className="text-gray-700 hover:text-rose-600 font-medium transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#servicos" 
                className="text-gray-700 hover:text-rose-600 font-medium transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a 
                href="#contato" 
                className="text-gray-700 hover:text-rose-600 font-medium transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <a 
                href="tel:+5511987654321" 
                className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 inline-block w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                (11) 98765-4321
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;