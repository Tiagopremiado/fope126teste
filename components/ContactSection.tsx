import React from 'react';

const FacebookIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
);

const InstagramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218 1.791.465 2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm6.406-1.18a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" /></svg>
);

const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display uppercase tracking-wider font-bold text-lime-volt mb-4">Faça Parte da Tropa</h2>
          <p className="max-w-2xl mx-auto text-gray-400">Preencha o formulário abaixo para mais informações sobre inscrições e parcerias. Junte-se a nós na missão de formar os líderes do amanhã.</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Nome Completo</label>
              <input type="text" name="name" id="name" placeholder="Nome Completo" className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-lime-volt" required />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" name="email" id="email" placeholder="Seu Melhor Email" className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-lime-volt" required />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Mensagem</label>
              <textarea name="message" id="message" rows={5} placeholder="Sua Mensagem" className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-lime-volt" required></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-lime-volt text-black font-bold font-display uppercase tracking-wider py-3 px-8 rounded-sm hover:bg-lime-volt-dark transition-colors duration-300">
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 text-center">
            <h3 className="text-xl font-display uppercase tracking-wider text-gray-300 mb-4">Ou entre em contato diretamente</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-gray-400">
                <a href="mailto:fopebrasilrs@gmail.com" className="hover:text-lime-volt transition-colors duration-300">fopebrasilrs@gmail.com</a>
                <span className="hidden md:inline">|</span>
                <a href="tel:+5553991152051" className="hover:text-lime-volt transition-colors duration-300">(53) 99115-2051</a>
            </div>
            <div className="flex justify-center space-x-6 mt-6">
                <a href="https://www.facebook.com/fope.pedro.osorio/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lime-volt transition-colors duration-300">
                    <span className="sr-only">Facebook</span>
                    <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/fopepedroosorio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lime-volt transition-colors duration-300">
                    <span className="sr-only">Instagram</span>
                    <InstagramIcon />
                </a>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;