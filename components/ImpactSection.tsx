import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "Parabéns belo trabalho que vocês fazem, a FOPE está transformando a vida de nossos filhos",
    author: "Eva Maria",
    relation: "Vó do Guerreiro Azambuja"
  },
  {
    quote: "Trabalho lindo que eu amo e admiro, tenho muito a agradecer pela escola FOPE, e os comandantes, por 1 ano todo já cuidando do meu filho! Ele tem mudado e aprendido muito.",
    author: "Nauita Bugs",
    relation: "Mãe do Sgt Urguim"
  }
];

const ImpactSection: React.FC = () => {
  const phoneNumber = "5553991152051";
  const message = "Olá! Vi o site da FOPE e gostaria de mais informações sobre como inscrever meu filho. Tenho interesse em um futuro de disciplina, honra e liderança para ele.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <section id="impacto" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display uppercase tracking-wider font-bold text-lime-volt mb-4">Resultados e Impacto</h2>
          <div className="w-24 h-1 bg-lime-volt mb-6 mx-auto"></div>
          <p className="max-w-3xl mx-auto text-gray-400">O verdadeiro valor do nosso trabalho é medido pela transformação na vida de cada jovem e no legado que construímos juntos.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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

        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white max-w-3xl mx-auto leading-tight">
            Viu como a FOPE pode mudar a vida do seu filho?
          </h3>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Dê o primeiro passo para um futuro de disciplina, honra e liderança.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-lime-volt text-black font-bold font-display uppercase tracking-wider py-3 px-8 rounded-sm hover:bg-lime-volt-dark transition-colors duration-300"
          >
            Inscreva-se Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;