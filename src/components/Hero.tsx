import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { scrollToSection } from '../utils/helpers';

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-secondary via-secondary to-primary-dark opacity-90" />

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Conteúdo textual */}
          <div className="flex flex-col items-center text-center">
            {/* Título */}
            <h1 className={`mb-4 text-4xl font-bold transition-all duration-700 sm:text-5xl md:mb-5 md:text-6xl 
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="block text-light/80 text-lg font-medium md:text-xl lg:text-2xl">
                Olá, eu sou
              </span>
              <span className="block bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent mt-2">
                Gabriel Pereira
              </span>
            </h1>

            {/* Subtítulo */}
            <div className={`mb-6 max-w-3xl transition-all duration-700 delay-150 
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-base text-light/80 md:text-lg lg:text-xl px-4">
                <span className="font-medium text-primary-light">Analista e Desenvolvedor de Sistemas</span> com experiência sólida no setor público em Atendimento ao Usuário e Gestão de Projetos, apaixonado por tecnologia e soluções inovadoras.
              </p>
            </div>

            {/* Destaques */}
            <div className={`mb-8 grid w-full max-w-sm gap-3 transition-all duration-700 delay-300 
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              sm:grid-cols-2 sm:max-w-xl`}>
              <div className="rounded-lg bg-primary/10 p-3 backdrop-blur-sm">
                <p className="text-sm font-medium text-primary-light md:text-base">
                  +10 Anos de Experiência
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-3 backdrop-blur-sm">
                <p className="text-sm font-medium text-primary-light md:text-base">
                  Especialista em Atendimento
                </p>
              </div>
            </div>

            {/* Botões */}
            <div className={`flex w-full flex-col gap-3 transition-all duration-700 delay-500 
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              sm:flex-row sm:max-w-md`}>
              <button
                onClick={() => scrollToSection('about')}
                className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-medium text-light 
                  transition-all hover:bg-primary-dark hover:shadow-md focus:outline-none 
                  sm:px-8 sm:py-4 sm:text-base"
              >
                Sobre Mim
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full rounded-lg border-2 border-primary bg-primary/10 px-6 py-3 
                  text-sm font-medium text-light backdrop-blur-sm transition-all 
                  hover:bg-primary/20 hover:shadow-md focus:outline-none 
                  sm:px-8 sm:py-4 sm:text-base"
              >
                Contato
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Seta de navegação */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce-slow text-light/80 
          transition-all hover:text-primary-light md:bottom-10"
      >
        <ChevronDown className="h-8 w-8 md:h-10 md:w-10" strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default Hero;