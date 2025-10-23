import React from 'react';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projetos" className="py-20 bg-olive-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://picsum.photos/seed/fopefire/600/700" alt="Brigadista Mirim em treinamento" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-display uppercase tracking-widest text-lime-volt">Projetos Especiais</h3>
            <h2 className="text-4xl font-display font-bold text-white mt-2 mb-4">FOPE FIRE – BRIGADISTA MIRIM</h2>
            <div className="w-24 h-1 bg-lime-volt mb-6"></div>
            <p className="mb-4 leading-relaxed text-gray-300">
              O projeto "FOPE FIRE – Brigadista Mirim" é uma de nossas maiores iniciativas de impacto social. Em parceria com o Corpo de Bombeiros, capacitamos nossos jovens com noções de prevenção de incêndios, primeiros socorros avançados e defesa civil.
            </p>
            <p className="leading-relaxed text-gray-300">
              Além do conhecimento técnico, o programa desenvolve coragem, responsabilidade e um profundo senso de serviço à comunidade, formando verdadeiros heróis do cotidiano.
            </p>
            <a href="#contato" className="mt-8 inline-block border border-lime-volt text-lime-volt font-bold font-display uppercase tracking-wider py-3 px-8 rounded-sm hover:bg-lime-volt hover:text-black transition-colors duration-300">
              Participe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;