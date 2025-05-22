import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/helpers';

interface HeaderProps {
  activeSection: string;
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'contact', label: 'Contato' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-secondary shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold font-heading text-light">
          Portfolio Gabriel Pereira
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`text-light hover:text-primary-light transition-colors ${
                    activeSection === item.id
                      ? 'font-semibold text-primary-light'
                      : 'font-normal'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className="md:hidden text-light"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-secondary absolute top-full left-0 w-full py-4 shadow-lg animate-fade-in">
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <li key={item.id} className="w-full text-center">
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full py-2 text-light hover:bg-primary hover:text-light transition-colors ${
                    activeSection === item.id
                      ? 'font-semibold text-primary-light'
                      : 'font-normal'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header