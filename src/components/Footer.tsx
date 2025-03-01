import React from 'react';
import { Scissors, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Scissors className="h-8 w-8 text-rose-400 mr-2" />
              <span className="text-xl font-bold">Ateliê de Costura</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Oferecemos serviços de alta qualidade em consertos, ajustes e customização de roupas.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-400 hover:text-white transition duration-300">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="text-gray-400 hover:text-white transition duration-300">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-gray-400 hover:text-white transition duration-300">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#servicos" className="text-gray-400 hover:text-white transition duration-300">
                    Consertos
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="text-gray-400 hover:text-white transition duration-300">
                    Troca de Zíper
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="text-gray-400 hover:text-white transition duration-300">
                    Barras
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="text-gray-400 hover:text-white transition duration-300">
                    Ajustes
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  Rua das Agulhas, 123 - Centro
                </li>
                <li className="text-gray-400">
                  São Paulo - SP, 01234-567
                </li>
                <li className="text-gray-400">
                  (11) 98765-4321
                </li>
                <li className="text-gray-400">
                  contato@ateliedecostura.com.br
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ateliê de Costura. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;