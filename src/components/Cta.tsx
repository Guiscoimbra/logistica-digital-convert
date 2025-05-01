
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Cta = () => {
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
      id="cta" 
      className="section bg-gray-50 transition-all duration-700 opacity-0 translate-y-10"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-rota-darkBlue to-rota-mediumBlue rounded-2xl p-10 md:p-16 text-center text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar sua presença digital em crescimento real?
          </h2>
          
          <p className="text-xl mb-8 text-white text-opacity-90">
            Fale agora com um especialista da Rota Digital e descubra como podemos impulsionar sua empresa para o próximo nível.
          </p>
          
          <a 
            href="https://wa.me/5531093673225?text=Ol%C3%A1%20venho%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Rota%20Digital."
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-rota-darkBlue font-bold py-3 px-8 rounded-md text-lg hover:bg-gray-100 transition-colors duration-300 group"
          >
            Quero crescer com a Rota Digital
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
