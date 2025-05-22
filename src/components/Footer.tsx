import React from 'react';
import SocialLinks from './SocialLinks';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative min-h-[300px] flex items-center justify-center bg-secondary overflow-hidden">
      {/* Gradiente igual ao do Hero */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary via-secondary to-primary-dark opacity-80"
      />
      
      <div className="container mx-auto px-4 z-10 text-light">
        <div className="flex flex-col items-center">
          <SocialLinks size={24} className="mb-8" />
          
          <div className="text-center">
            <p className="flex items-center justify-center mb-4">
              Desenvolvido por Gabriel Pereira.
            </p>
            <p>
              &copy; {currentYear} Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;