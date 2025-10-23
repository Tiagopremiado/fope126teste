import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-lime-volt/20">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
          <div className="space-y-2">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} FOPE Companhia 126°. Todos os direitos reservados.</p>
            <p className="text-xs text-gray-500">Formando o futuro do Brasil.</p>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-3">
             <div className="flex space-x-6">
                <a href="https://www.facebook.com/fope.pedro.osorio/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lime-volt transition-colors duration-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="https://www.instagram.com/fopepedroosorio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lime-volt transition-colors duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218 1.791.465 2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm6.406-1.18a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" /></svg>
                </a>
             </div>
             <div className="text-sm text-gray-400 space-x-4">
                <a href="mailto:fopebrasilrs@gmail.com" className="hover:text-lime-volt transition-colors duration-300">fopebrasilrs@gmail.com</a>
                <a href="tel:+5553991152051" className="hover:text-lime-volt transition-colors duration-300">(53) 99115-2051</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;