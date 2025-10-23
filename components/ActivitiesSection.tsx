import React from 'react';
import type { Activity } from '../types';

const FlagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6H8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
  </svg>
);

const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944L12 22l9-1.056A12.02 12.02 0 0021.618 7.984z" />
    </svg>
);

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);


const activities: Activity[] = [
  { icon: ShieldCheckIcon, title: 'Ordem Unida', description: 'Desenvolvimento de disciplina, coordenação e espírito de corpo através de treinamentos de marcha e formações.' },
  { icon: HeartIcon, title: 'Primeiros Socorros', description: 'Capacitação para agir em situações de emergência, ensinando técnicas vitais de suporte básico à vida.' },
  { icon: FlagIcon, title: 'Civismo e Patriotismo', description: 'Aulas sobre a história do Brasil, seus símbolos e a importância do cidadão para a nação.' },
];

const ActivitiesSection: React.FC = () => {
  return (
    <section id="atividades" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-display uppercase tracking-wider font-bold text-lime-volt mb-4">Atividades e Treinamentos</h2>
        <div className="w-24 h-1 bg-lime-volt mb-12 mx-auto"></div>
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div key={activity.title} className="bg-black p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 border border-gray-800 hover:border-lime-volt">
              <div className="text-lime-volt mx-auto mb-4">
                <activity.icon />
              </div>
              <h3 className="text-xl font-display uppercase text-white mb-2">{activity.title}</h3>
              <p className="text-gray-400">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;