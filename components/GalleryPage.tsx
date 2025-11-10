
import React from 'react';

const images = [
  "https://i.imgur.com/l89Y8l9.jpeg",
  "https://i.imgur.com/526l6Bt.jpeg",
  "https://i.imgur.com/sk1pT2Z.jpeg",
  "https://i.imgur.com/PaIlA9e.jpeg",
  "https://i.imgur.com/brp1HBI.jpeg",
  "https://i.imgur.com/RHguzbi.jpeg",
  "https://i.imgur.com/ugkSIJE.jpeg",
  "https://i.imgur.com/pccjoHY.jpeg",
  "https://i.imgur.com/DEztNd9.jpeg",
  "https://i.imgur.com/VNkhrOz.jpeg",
  "https://i.imgur.com/1EGHWIe.jpeg",
  "https://i.imgur.com/9q9AR4y.jpeg",
  "https://i.imgur.com/eNhP23g.jpeg",
  "https://i.imgur.com/a7xGdX7.jpeg",
  "https://i.imgur.com/ZNiMEkX.jpeg",
  "https://i.imgur.com/fBRoel7.jpeg",
  "https://i.imgur.com/3DMC4dm.jpeg",
  "https://i.imgur.com/lu9ikkA.jpeg",
  "https://i.imgur.com/ePx27ZY.jpeg",
  "https://i.imgur.com/I4mr0p3.jpeg",
  "https://i.imgur.com/vplFJmD.jpeg",
  "https://i.imgur.com/V5Fl32V.jpeg",
  "https://i.imgur.com/g0n5PtY.jpeg",
  "https://i.imgur.com/otjQisG.jpeg",
  "https://i.imgur.com/ISLoIUQ.jpeg",
  "https://i.imgur.com/FKbc00d.jpeg",
  "https://i.imgur.com/waXEu09.jpeg",
  "https://i.imgur.com/osbnvvq.jpeg",
  "https://i.imgur.com/hxdgKSX.jpeg",
];

interface GalleryPageProps {
  onClose: () => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ onClose }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-gray-200 font-sans min-h-screen">
      <header className="bg-gray-900/80 backdrop-blur-sm py-5 border-b border-lime-volt/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-display uppercase tracking-wider font-bold text-lime-volt">Galeria de Fotos</h1>
          <button 
            onClick={onClose}
            className="bg-lime-volt text-black font-bold font-display uppercase tracking-wider py-2 px-6 rounded-sm hover:bg-lime-volt-dark transition-colors duration-300"
          >
            Voltar
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            Explore nossos momentos em ação! Cada imagem captura a essência da disciplina, camaradagem e patriotismo que definem a Companhia 126°. Venha ver de perto o dia a dia de nossos treinamentos, eventos e o orgulho de ser FOPE.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div key={index} className="group overflow-hidden rounded-lg shadow-lg">
              <img 
                src={src} 
                alt={`Foto da galeria FOPE ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 border-t border-lime-volt/20 mt-12">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} FOPE Companhia 126°. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default GalleryPage;
