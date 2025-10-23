import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="quem-somos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-3xl font-display uppercase tracking-wider font-bold text-lime-volt mb-4">Quem Somos</h2>
            <div className="w-24 h-1 bg-lime-volt mb-6"></div>
            <p className="mb-4 leading-relaxed">
              A FOPE – Força Patriota Estudantil é uma instituição dedicada à formação de crianças e jovens de 6 a 17 anos, fundamentada nos valores da disciplina, respeito, patriotismo e liderança. Nossa missão é preparar a próxima geração para os desafios do futuro.
            </p>
            <p className="leading-relaxed">
              A Companhia 126° é uma unidade oficial de destaque, reconhecida pela excelência em seus treinamentos, organização impecável e profundo impacto social na comunidade. Somos um símbolo de ordem, orgulho e compromisso com o Brasil.
            </p>
          </div>
          <div>
            <img src="https://picsum.photos/seed/fopeabout/600/400" alt="Cadetes da FOPE em formação" className="rounded-lg shadow-2xl w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;