import React from 'react';
import SectionHeading from './SectionHeading';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Desenvolvimento Frontend',
      skills: [
        { name: 'HTML5', level: 85 },
        { name: 'CSS3', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'React', level: 70 },
        { name: 'Tailwind CSS', level: 70 },
      ],
    },
    {
      title: 'Desenvolvimento Backend',
      skills: [
        { name: 'Node.js', level: 45 },
        { name: 'Python', level: 50 },
        { name: 'MySQL', level: 45 },
        { name: 'REST API', level: 40 },
      ],
    },
    {
      title: 'Ferramentas & Outros',
      skills: [
        { name: 'Git/GitHub', level: 75 },
        { name: 'SCRUM', level: 85 },
        { name: 'ITIL', level: 80 },
        { name: 'Gestão de Projetos', level: 85 },
        { name: 'Comunicação', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading title="Minhas Habilidades" subtitle="Competências e conhecimentos" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-primary mb-6 pb-2 border-b-2 border-primary/20">
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-secondary">{skill.name}</span>
                      <span className="text-primary-dark">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-1000 group-hover:bg-primary-dark rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;