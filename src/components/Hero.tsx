
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
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
      id="home" 
      className="relative min-h-[90vh] flex items-center pt-20 pb-8 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background gradient overlay with pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-rota-darkBlue to-rota-mediumBlue opacity-95 z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMTIgMTJjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6TTI0IDYwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2eiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-40 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
      
      {/* Abstract lines */}
      <div className="hidden md:block absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="absolute top-1/4 right-20 h-1/2 w-px bg-white"></div>
        <div className="absolute top-1/3 right-40 h-1/3 w-px bg-white"></div>
        <div className="absolute top-1/2 right-60 h-1/4 w-px bg-white"></div>
      </div>
      
      <div className="container mx-auto z-10 transition-all duration-700 opacity-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-md">
            A rota certa para o seu crescimento digital no setor logístico.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto">
            Transforme sua presença online em oportunidades reais de negócio com a agência especialista em marketing para transportadoras e operadores logísticos.
          </p>
          
          <a 
            href="https://wa.me/5531093673225?text=Ol%C3%A1%20venho%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Rota%20Digital."
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary text-lg group px-8 py-4 shadow-lg hover:shadow-xl"
          >
            Quero impulsionar minha empresa
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-1 h-10 rounded-full bg-white opacity-60"></div>
        <span className="text-white text-sm mt-2">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
