import React from 'react';

const GalleryCTASection: React.FC = () => {
  return (
    <section id="gallery-cta" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-display uppercase tracking-wider font-bold text-lime-volt mb-4">Nossos Momentos em Ação</h2>
        <div className="w-24 h-1 bg-lime-volt mb-6 mx-auto"></div>
        <p className="max-w-3xl mx-auto text-gray-400 mb-8">
          Explore os registros de nossos treinamentos, eventos e o dia a dia da Companhia 126°. Uma imagem vale mais que mil palavras.
        </p>
        <a 
          href="gallery.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-lime-volt text-black font-bold font-display uppercase tracking-wider py-3 px-8 rounded-sm hover:bg-lime-volt-dark transition-colors duration-300"
        >
          Ver Galeria FOPE
        </a>
      </div>
    </section>
  );
};

export default GalleryCTASection;
