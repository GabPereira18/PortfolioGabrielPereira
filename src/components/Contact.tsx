import React from 'react';
import SectionHeading from './SectionHeading';
import SocialLinks from './SocialLinks';
import { MessageCircle, MapPin, Mail, Github } from 'lucide-react';

const Contato: React.FC = () => {
  const informacoesContato = [
    {
      icone: <MapPin size={20} className="text-indigo-600" />,
      titulo: "Localização",
      conteudo: "Cuiabá - MT",
      link: null
    },
    {
      icone: <Mail size={20} className="text-indigo-600" />,
      titulo: "Email",
      conteudo: "gabrielwandell@hotmail.com",
      link: "mailto:gabrielwandell@hotmail.com"
    },
    {
      icone: <Github size={20} className="text-indigo-600" />,
      titulo: "GitHub",
      conteudo: "github.com/gabpereira18",
      link: "http://github.com/gabpereira18"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Fale Comigo" 
          subtitle="Vamos conversar" 
        />
        
        <div className="mt-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
                           
              <p className="text-lg font-semibold text-gray-600 mb-4">
                Sempre disponível para discutir novas oportunidades, projetos criativos ou parcerias. 
                <span className="block mt-2 font-medium text-green-600">
                  Entre em contato comigo diretamente pelo WhatsApp para uma resposta rápida!
                </span>
              </p>
              
              <div className="flex flex-col md:flex-row gap-8">
                {/* Coluna do WhatsApp - Com foto de perfil */}
<div className="flex-1">
  <div className="bg-white p-6 rounded-lg border-2 border-green-200 shadow-sm h-full flex flex-col justify-between items-center text-center">
    <div className="w-full">
      <div className="flex flex-col items-center gap-3 mb-4">
        <div className="bg-green-100 p-2 rounded-full">
          <MessageCircle size={24} className="text-green-600" />
        </div>
        <h4 className="text-lg font-semibold text-gray-800">WhatsApp</h4>
        <h4 className="text-lg font-semibold text-gray-800">65 9 9221-3626</h4>
        
        {/* Foto de perfil */}
        <div className="my-4">
          <img 
            src="/Gabrielwhatsapp.jpeg" // Substitua pelo caminho correto
            alt="Foto de perfil do WhatsApp"
            className="w-36 h-36 rounded-full border-2 border-green-200 object-cover mx-auto"
          />
        </div>
      </div>
    </div>
    
    <a 
      href="https://wa.me/5565992213626"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
    >
      Enviar Mensagem
      <MessageCircle size={20} />
    </a>
  </div>
</div>

                {/* Coluna de Informações */}
                <div className="flex-1">
                  <div className="space-y-4">
                    {informacoesContato.map((info, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-start gap-3">
                        <div className="mt-1">
                          {info.icone}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-1">
                            {info.titulo}
                          </h4>
                          {info.link ? (
                            <a 
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-indigo-600 hover:text-indigo-800 transition-colors"
                            >
                              {info.conteudo}
                            </a>
                          ) : (
                            <p className="text-gray-600">{info.conteudo}</p>
                          )}
                        </div>
                      </div>
                    ))}

                    {/* Redes Sociais */}
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">
                        Conecte-se comigo nas redes sociais!
                      </h4>
                      <SocialLinks 
                        size={20}
                        className="justify-start"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;