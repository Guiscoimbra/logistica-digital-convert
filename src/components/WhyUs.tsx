
import React, { useEffect, useRef } from 'react';
import { Check, TrendingUp, Target, Users } from 'lucide-react';

const WhyUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="why-us" 
      className="section bg-gray-50 transition-all duration-700 opacity-0 translate-y-10"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <h2 className="section-title text-center">Por que a Rota Digital?</h2>
        <p className="section-subtitle text-center">
          Especialização que gera resultados concretos.
        </p>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <p className="text-lg text-center mb-12">
            Na Rota Digital, respiramos logística. Somos a agência que entende a fundo os desafios do seu segmento e entrega estratégias digitais sob medida para transportadoras, operadores logísticos e empresas de logística que querem crescer de verdade.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card flex items-start p-6 hover:-translate-y-1">
              <Target className="h-10 w-10 text-rota-darkBlue flex-shrink-0 mr-4" />
              <div>
                <h3 className="font-bold text-xl mb-2 text-rota-darkBlue">Foco exclusivo no setor logístico</h3>
                <p className="text-gray-600">Conhecimento profundo do seu mercado, linguagem e público.</p>
              </div>
            </div>
            
            <div className="card flex items-start p-6 hover:-translate-y-1">
              <TrendingUp className="h-10 w-10 text-rota-darkBlue flex-shrink-0 mr-4" />
              <div>
                <h3 className="font-bold text-xl mb-2 text-rota-darkBlue">Resultados mensuráveis</h3>
                <p className="text-gray-600">Estratégias orientadas a dados, com ROI comprovado.</p>
              </div>
            </div>
            
            <div className="card flex items-start p-6 hover:-translate-y-1">
              <Check className="h-10 w-10 text-rota-darkBlue flex-shrink-0 mr-4" />
              <div>
                <h3 className="font-bold text-xl mb-2 text-rota-darkBlue">Soluções integradas</h3>
                <p className="text-gray-600">Da captação de leads à gestão do relacionamento com clientes.</p>
              </div>
            </div>
            
            <div className="card flex items-start p-6 hover:-translate-y-1">
              <Users className="h-10 w-10 text-rota-darkBlue flex-shrink-0 mr-4" />
              <div>
                <h3 className="font-bold text-xl mb-2 text-rota-darkBlue">Parceria estratégica</h3>
                <p className="text-gray-600">Atuamos como extensão do seu negócio, alinhando nossos objetivos aos seus resultados.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://wa.me/5531093673225?text=Ol%C3%A1%20venho%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Rota%20Digital."
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Fale com um especialista agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
