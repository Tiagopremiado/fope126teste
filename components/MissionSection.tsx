import React from 'react';

const MissionSection: React.FC = () => {
  return (
    <section id="missao" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-display uppercase tracking-wider font-bold text-lime-volt mb-4">Nossa Missão, Visão e Valores</h2>
        <div className="w-24 h-1 bg-lime-volt mb-12 mx-auto"></div>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-900 p-6 rounded-lg border border-lime-volt/20">
            <h3 className="text-xl font-display uppercase text-lime-volt mb-3">Missão</h3>
            <p className="text-gray-400">Formar cidadãos exemplares, ensinando disciplina, honra e civismo, preparando-os para liderar com integridade e servir à nação com excelência.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-lime-volt/20">
            <h3 className="text-xl font-display uppercase text-lime-volt mb-3">Visão</h3>
            <p className="text-gray-400">Ser a principal referência na formação cívico-moral de jovens no Brasil, reconhecida por seu impacto positivo na sociedade e na vida de seus membros.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-lime-volt/20">
            <h3 className="text-xl font-display uppercase text-lime-volt mb-3">Valores</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Disciplina</li>
              <li>Honra e Respeito</li>
              <li>Patriotismo</li>
              <li>Liderança</li>
              <li>Camaradagem</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;