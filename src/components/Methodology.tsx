
import React, { useEffect, useRef } from 'react';

const Methodology = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');

          // Animar os steps
          const steps = entry.target.querySelectorAll('.methodology-step');
          steps.forEach((step, index) => {
            setTimeout(() => {
              step.classList.add('opacity-100');
              step.classList.remove('opacity-0');
            }, index * 200);
          });
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

  const methodologySteps = [
    {
      number: "01",
      title: "Diagnóstico",
      description: "Análise profunda do seu negócio, concorrentes e oportunidades digitais no setor logístico."
    },
    {
      number: "02",
      title: "Estratégia",
      description: "Desenvolvimento de um plano personalizado, combinando social media, campanhas de tráfego pago e desenvolvimento de sites de alta conversão."
    },
    {
      number: "03",
      title: "Implementação",
      description: "Execução ágil e técnica das ações, com foco em criar presença digital forte, campanhas segmentadas e páginas otimizadas para conversão."
    },
    {
      number: "04",
      title: "Monitoramento",
      description: "Acompanhamento constante de métricas, performance das redes sociais, resultados das campanhas e desempenho dos sites."
    },
    {
      number: "05",
      title: "Otimização",
      description: "Ajustes estratégicos contínuos, baseados em dados, para maximizar engajamento, geração de leads e conversão em todas as frentes digitais."
    }
  ];

  return (
    <section 
      id="methodology" 
      className="section bg-white transition-all duration-700 opacity-0 translate-y-10"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <h2 className="section-title text-center">Como funciona a Rota Digital</h2>
        <p className="section-subtitle text-center">
          Metodologia exclusiva para resultados reais
        </p>
        
        <div className="mt-16 relative">
          {/* Linha conectora vertical */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rota-darkBlue to-rota-mediumBlue"></div>
          
          {methodologySteps.map((step, index) => (
            <div 
              key={index}
              className={`methodology-step flex flex-col md:flex-row items-center mb-16 transition-opacity duration-500 opacity-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2 p-4 md:p-8 md:text-right">
                <div className={`md:ml-auto md:mr-0 ${index % 2 === 0 ? 'md:ml-0 md:mr-auto md:text-left' : ''}`}>
                  <h3 className="text-2xl font-bold text-rota-darkBlue mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              
              <div className="relative flex items-center justify-center my-4 z-10">
                <div className="rounded-full bg-rota-darkBlue text-white text-2xl font-bold w-16 h-16 flex items-center justify-center shadow-lg">
                  {step.number}
                </div>
              </div>
              
              <div className="w-full md:w-1/2 p-4 md:p-8">
                <div></div> {/* Espaço vazio para manter o layout alinhado */}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="https://wa.me/5531093673225?text=Ol%C3%A1%20venho%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Rota%20Digital."
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Vamos conversar sobre seu projeto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
