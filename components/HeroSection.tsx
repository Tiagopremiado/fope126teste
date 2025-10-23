import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://i.imgur.com/o2npVba.jpeg')" }}></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display uppercase tracking-wider font-bold mb-4 text-shadow-lg">
          <span className="text-lime-volt">Companhia 126°</span>
        </h1>
        <p className="text-lg md:text-2xl max-w-4xl mx-auto font-light leading-relaxed">
          Formando jovens fortes, disciplinados e patriotas — preparados para servir, liderar e transformar o futuro do Brasil.
        </p>
        <a href="#quem-somos" className="mt-8 inline-block bg-lime-volt text-black font-bold font-display uppercase tracking-wider py-3 px-8 rounded-sm hover:bg-lime-volt-dark transition-colors duration-300">
          Nossa Missão
        </a>
      </div>
    </section>
  );
};

export default HeroSection;