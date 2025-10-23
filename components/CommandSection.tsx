import React from 'react';
import type { CommandMember } from '../types';

const commandStaff: CommandMember[] = [
  { name: 'Major Silva', rank: 'Comandante da Companhia', imageUrl: 'https://picsum.photos/seed/cmd1/400/400' },
  { name: 'Capitão Rocha', rank: 'Sub-Comandante', imageUrl: 'https://picsum.photos/seed/cmd2/400/400' },
  { name: 'Sargento Lima', rank: 'Comandante de Pelotão', imageUrl: 'https://picsum.photos/seed/cmd3/400/400' },
];

const CommandSection: React.FC = () => {
  return (
    <section id="comando" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-display uppercase tracking-wider font-bold text-lime-volt mb-4">Comando da Companhia</h2>
        <div className="w-24 h-1 bg-lime-volt mb-12 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commandStaff.map((member) => (
            <div key={member.name} className="bg-black p-6 rounded-lg group">
              <img
                src={member.imageUrl}
                alt={`Foto de ${member.name}`}
                className="w-40 h-40 rounded-full mx-auto object-cover mb-4 border-4 border-gray-700 group-hover:border-lime-volt transition-colors duration-300"
              />
              <h3 className="text-xl font-bold text-white font-display uppercase">{member.name}</h3>
              <p className="text-lime-volt">{member.rank}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommandSection;