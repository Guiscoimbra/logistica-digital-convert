
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "O que mais me surpreendeu foi o cuidado da equipe em entender nosso negócio. As campanhas de tráfego trouxeram resultados consistentes, mas o diferencial foi o suporte próximo e as sugestões estratégicas que recebemos ao longo do processo.",
      author: "Rafael Souza",
      role: "Diretor Comercial"
    },
    {
      quote: "A presença da nossa marca nas redes sociais mudou completamente depois do trabalho da Rota Digital. Eles criaram conteúdos que realmente conversam com nosso público e ajudaram a fortalecer nosso posicionamento no setor.",
      author: "Camila Martins",
      role: "Gerente de Marketing"
    },
    {
      quote: "Sempre tivemos dificuldade em organizar os contatos e acompanhar os leads. Com a implementação do CRM e o acompanhamento da Rota, conseguimos melhorar muito nosso relacionamento com os clientes e otimizar o tempo da equipe.",
      author: "Eduardo Lima",
      role: "Coordenador de Operações"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

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
    
    // Auto carousel
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      clearInterval(interval);
    };
  }, []);

  return (
    <section 
      id="testimonials" 
      className="section relative bg-rota-darkBlue text-white transition-all duration-700 opacity-0 translate-y-10"
      ref={sectionRef}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">Quem já acelerou com a Rota Digital</h2>
        
        <div className="mt-16 max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg">
                    <div className="text-5xl font-serif text-white opacity-30 mb-4">"</div>
                    <blockquote className="text-xl md:text-2xl font-light italic mb-8">
                      {testimonial.quote}
                    </blockquote>
                    <div>
                      <p className="font-bold text-lg">{testimonial.author}</p>
                      <p className="text-white text-opacity-70">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white scale-125' : 'bg-white bg-opacity-30'
                }`}
                aria-label={`Depoimento ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Arrow controls */}
          <button 
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full p-2 hover:bg-opacity-20 transition-all duration-300"
            onClick={prevTestimonial}
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full p-2 hover:bg-opacity-20 transition-all duration-300"
            onClick={nextTestimonial}
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
