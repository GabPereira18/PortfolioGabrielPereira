import React from 'react';
import SectionHeading from './SectionHeading';
import { BookUser, Briefcase, Mail, MapPin, GraduationCap, FileText } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Sobre Mim" 
          subtitle="Conheça minha trajetória" 
          icon={<BookUser className="text-primary" />}
        />
        
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Seção da Foto */}
          <div className="lg:w-1/3 xl:w-1/2 relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="/GabrielPereiraFoto.jpg" 
                alt="Gabriel Pereira" 
                className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="hidden lg:block absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-xl -z-10" />
          </div>
          
          {/* Conteúdo Textual */}
          <div className="lg:w-2/3 xl:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Transformando experiências em soluções tecnológicas
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-primary">Analista e Desenvolvedor de Sistemas</span> com mais de uma década de atuação no setor público, onde desenvolvi expertise em gestão de projetos tecnológicos e implantação de sistemas governamentais. Minha trajetória combina:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Domínio de metodologias ágeis (SCRUM)</li>
                <li>Experiência prática em suporte técnico especializado</li>
                <li>Visão estratégica de processos organizacionais</li>
              </ul>
            </div>

            {/* Destaques de Formação */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <GraduationCap className="text-primary" size={20} />
                Formação Complementar
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-gray-600">
                  <div className="font-medium">Recursos Humanos</div>
                  <div className="text-sm">Tecnólogo</div>
                </div>
                <div className="text-gray-600">
                  <div className="font-medium">Administração Pública</div>
                  <div className="text-sm">Pós-graduação</div>
                </div>
              </div>
            </div>

            {/* Grid de Informações */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: <Briefcase />, title: "Experiência", value: "10+ anos" },
                { icon: <MapPin />, title: "Localização", value: "Cuiabá - MT" },
                { icon: <Mail />, title: "Email", value: "gabrielwandell@hotmail.com" },
                { icon: <GraduationCap />, title: "Formação", value: "Análise e Desenvolvimento de Sistemas" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="p-4 bg-white rounded-lg border border-gray-100 hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-primary">{item.icon}</span>
                    <div>
                      <div className="text-sm text-gray-500">{item.title}</div>
                      <div className="font-medium text-gray-800">{item.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Botão de Currículo */}
<div className="mt-8 flex justify-center w-full">
  <a 
    href="https://www.canva.com/design/DAF_bOdhSFI/_gSbPQKCkJHvNTXc71mLnQ/view" 
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
  >
    <FileText size={20} />
    <span className="font-medium text-lg">Ver Currículo Completo</span>
  </a>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;