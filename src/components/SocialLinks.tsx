import React from 'react';
import { Github, Instagram, Linkedin, MessageCircle, FileText } from 'lucide-react';

interface SocialLinksProps {
  size?: number;
  className?: string;
  iconClasses?: {
    github?: string;
    instagram?: string;
    linkedin?: string;
    whatsapp?: string;
    curriculo?: string;
  };
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  size = 24, 
  className = '',
  iconClasses = {
    github: "text-gray-700 hover:text-gray-900",
    instagram: "text-pink-600 hover:text-pink-800",
    linkedin: "text-blue-600 hover:text-blue-800",
    whatsapp: "text-green-600 hover:text-green-800",
    curriculo: "text-yellow-600 hover:text-yellow-800"
  }
}) => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={size} className={iconClasses.github} />,
      url: 'http://github.com/gabpereira18'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={size} className={iconClasses.instagram} />,
      url: 'https://www.instagram.com/gabrielwandel/'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={size} className={iconClasses.linkedin} />,
      url: 'http://linkedin.com/GabPereira18'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle size={size} className={iconClasses.whatsapp} />,
      url: 'https://wa.me/5565992213626'
    },
    {
      name: 'Currículo',
      icon: <FileText size={size} className={iconClasses.curriculo} />,
      url: 'https://www.canva.com/design/DAF_bOdhSFI/_gSbPQKCkJHvNTXc71mLnQ/view?utm_content=DAF_bOdhSFI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb8eb9c60e7'
    }
  ];

  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-100 rounded-full transition-all duration-300 hover:bg-gray-200"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;