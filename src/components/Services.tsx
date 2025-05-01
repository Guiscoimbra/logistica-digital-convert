
import React, { useEffect, useRef } from 'react';
import { Route, Smartphone, FileText, Users, MessageSquare } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');

          // Animar cada card com delay
          const cards = entry.target.querySelectorAll('.service-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('opacity-100', 'translate-y-0');
              card.classList.remove('opacity-0', 'translate-y-10');
            }, index * 100);
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

  const services = [
    {
      icon: <Route className="h-10 w-10 text-white" />,
      title: "Tráfego Pago",
      description: "Google Ads e Meta Ads para captar clientes no momento certo."
    },
    {
      icon: <Smartphone className="h-10 w-10 text-white" />,
      title: "Social Media",
      description: "Gestão profissional e conteúdo estratégico para fortalecer sua marca."
    },
    {
      icon: <FileText className="h-10 w-10 text-white" />,
      title: "Desenvolvimento de Sites",
      description: "Páginas institucionais e landing pages otimizadas para conversão."
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Implementação de CRM",
      description: "Gestão eficiente de leads e oportunidades (conforme plano)."
    },
    {
      icon: <FileText className="h-10 w-10 text-white" />,
      title: "Design Gráfico",
      description: "Identidade visual, apresentações, artes e muito mais (conforme plano)."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-white" />,
      title: "Atendimento Humanizado por IA",
      description: "Atendimento inteligente, personalizado e 24h via WhatsApp (contratação à parte)."
    }
  ];

  return (
    <section 
      id="services" 
      className="section bg-white transition-all duration-700 opacity-0 translate-y-10"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title text-center">Nossos Serviços</h2>
          <p className="section-subtitle text-center mt-6">
            Soluções digitais completas para logística de alta performance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card text-center flex flex-col items-center transition-all duration-500 opacity-0 translate-y-10 hover-lift overflow-hidden group"
            >
              <div className="bg-gradient-to-r from-rota-darkBlue to-rota-mediumBlue w-full p-8 mb-4">
                <div className="bg-white bg-opacity-20 rounded-full p-4 mx-auto w-20 h-20 flex items-center justify-center animate-float mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              </div>
              <div className="p-6 bg-white shadow-lg flex-grow w-full border-b-4 border-transparent group-hover:border-rota-darkBlue transition-all duration-300">
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://wa.me/5531093673225?text=Ol%C3%A1%20venho%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Rota%20Digital."
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary shadow-lg hover-scale"
          >
            Quero saber como funciona
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
