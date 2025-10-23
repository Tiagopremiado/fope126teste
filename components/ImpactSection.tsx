import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "A disciplina e o respeito que meu filho aprendeu na FOPE transformaram nossa família. Ele está mais focado, responsável e orgulhoso de si mesmo.",
    author: "Ana Silva",
    relation: "Mãe de Cadete"
  },
  {
    quote: "Fazer parte da Companhia 126° me deu um propósito. Aprendi a liderar, a trabalhar em equipe e, acima de tudo, a amar e servir meu país.",
    author: "Cadete Oliveira",
    relation: "Aluno do Programa"
  }
];

const ImpactSection: React.FC = () => {
  return (
    <section id="impacto" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display uppercase tracking-wider font-bold text-lime-volt mb-4">Resultados e Impacto</h2>
          <div className="w-24 h-1 bg-lime-volt mb-6 mx-auto"></div>
          <p className="max-w-3xl mx-auto text-gray-400">O verdadeiro valor do nosso trabalho é medido pela transformação na vida de cada jovem e no legado que construímos juntos.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <blockquote key={index} className="bg-gray-900 p-8 rounded-lg border-l-4 border-lime-volt">
              <p className="text-lg italic text-gray-300">"{testimonial.quote}"</p>
              <footer className="mt-4">
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-sm text-lime-volt">{testimonial.relation}</p>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://picsum.photos/seed/impact1/500/500" alt="Evento FOPE 1" className="rounded-lg object-cover w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://picsum.photos/seed/impact2/500/500" alt="Evento FOPE 2" className="rounded-lg object-cover w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://picsum.photos/seed/impact3/500/500" alt="Evento FOPE 3" className="rounded-lg object-cover w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://picsum.photos/seed/impact4/500/500" alt="Evento FOPE 4" className="rounded-lg object-cover w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300" />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;