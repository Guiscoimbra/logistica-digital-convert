
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rota-darkBlue text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img 
              src="/lovable-uploads/64c331e6-ef73-44e5-9344-b5757fe868f5.png" 
              alt="Rota Digital" 
              className="h-12 mb-6"
            />
            <p className="text-gray-300 mb-4">
              Marketing Digital Especializado para Transportadoras, Operadores Logísticos e Empresas de Logística.
            </p>
            <p className="font-medium">
              A rota certa do transporte ao embarcador.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Links Úteis</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#plans" className="text-gray-300 hover:text-white transition-colors">Planos</a></li>
              <li><a href="#methodology" className="text-gray-300 hover:text-white transition-colors">Metodologia</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Depoimentos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Tráfego Pago</li>
              <li className="text-gray-300">Social Media</li>
              <li className="text-gray-300">Desenvolvimento Web</li>
              <li className="text-gray-300">Implementação de CRM</li>
              <li className="text-gray-300">Design Gráfico</li>
              <li className="text-gray-300">Atendimento Humanizado por IA</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-gray-300 flex-shrink-0 mt-0.5" />
                <a href="tel:+5531093673225" className="text-gray-300 hover:text-white transition-colors">
                  (31) 99367-3225
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-gray-300 flex-shrink-0 mt-0.5" />
                <a href="mailto:contato@rotadigitalmkt.com" className="text-gray-300 hover:text-white transition-colors">
                  contato@rotadigitalmkt.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-gray-300 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Belo Horizonte, MG
                </span>
              </li>
            </ul>
            
            <div className="mt-6">
              <a 
                href="https://wa.me/5531093673225?text=Ol%C3%A1%20venho%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Rota%20Digital."
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-rota-darkBlue py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} Rota Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
