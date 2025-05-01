
import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const Plans = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');

          // Animar cada plano com delay
          const plans = entry.target.querySelectorAll('.plan-card');
          plans.forEach((plan, index) => {
            setTimeout(() => {
              plan.classList.add('opacity-100', 'scale-100');
              plan.classList.remove('opacity-0', 'scale-95');
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

  const plans = [
    {
      name: "Rota Essencial",
      description: "Para empresas que buscam estabelecer uma presença digital sólida, gerar leads qualificados e fortalecer a comunicação visual nas principais redes.",
      features: [
        "Campanhas de tráfego pago altamente segmentadas",
        "Gestão de social media com conteúdos estratégicos",
        "Landing page personalizada para conversão",
        "Relatórios semanais",
        "Suporte via WhatsApp",
        "Reuniões mensais de análise e planejamento",
        "Manutenções e atualizações constantes do site"
      ],
      note: "Atendimento Humanizado por IA (Contratação à parte)",
      highlight: false
    },
    {
      name: "Rota Avançada",
      description: "Ideal para quem deseja um posicionamento digital abrangente, ferramentas completas de gestão e presença marcante em múltiplos canais.",
      features: [
        "Estratégias avançadas de tráfego pago",
        "Social media para Instagram, Facebook e LinkedIn",
        "Landing page de alta performance",
        "Implementação de CRM personalizado para gestão de leads",
        "Design profissional para apresentações e artes gráficas",
        "Relatórios semanais detalhados",
        "Suporte prioritário via WhatsApp",
        "Reuniões mensais estratégicas"
      ],
      note: "Atendimento Humanizado por IA (Contratação à parte)",
      highlight: true
    },
    {
      name: "Rota Operacional",
      description: "Voltado para empresas de logística que precisam captar profissionais motoristas (agregados, terceiros ou CLT) de forma rápida e assertiva.",
      features: [
        "Campanhas específicas de tráfego pago para atrair motoristas",
        "Landing page focada na inscrição e encaminhamento de profissionais",
        "Relatórios semanais",
        "Suporte via WhatsApp",
        "Reuniões mensais",
        "Manutenções do site"
      ],
      note: "Atendimento Humanizado por IA (Contratação à parte)",
      highlight: false
    }
  ];

  return (
    <section 
      id="plans" 
      className="section bg-gray-50 transition-all duration-700 opacity-0 translate-y-10"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <h2 className="section-title text-center">Planos sob medida para sua empresa</h2>
        <p className="section-subtitle text-center">
          Escolha o plano ideal para o seu momento
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`plan-card relative transition-all duration-500 opacity-0 scale-95 rounded-lg overflow-hidden ${
                plan.highlight ? 'border-2 border-rota-mediumBlue shadow-lg transform md:-translate-y-4' : 'border border-gray-200'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 inset-x-0 h-2 bg-rota-mediumBlue"></div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-rota-darkBlue">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-rota-mediumBlue flex-shrink-0 mr-2 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.note && (
                  <p className="text-sm text-gray-500 italic mb-6">{plan.note}</p>
                )}
                
                <div className="mt-auto">
                  <a 
                    href="https://wa.me/5531093673225?text=Ol%C3%A1%20venho%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Rota%20Digital."
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-full text-center py-3 px-4 rounded-md font-medium transition-colors duration-300 ${
                      plan.highlight 
                      ? 'bg-rota-darkBlue text-white hover:bg-rota-mediumBlue' 
                      : 'bg-white border border-rota-darkBlue text-rota-darkBlue hover:bg-rota-darkBlue hover:text-white'
                    }`}
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://wa.me/5531093673225?text=Ol%C3%A1%20venho%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Rota%20Digital."
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Quero um diagnóstico gratuito
          </a>
        </div>
      </div>
    </section>
  );
};

export default Plans;
