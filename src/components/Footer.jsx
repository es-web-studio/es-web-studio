import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="py-12 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center gap-6">
          <Logo className="h-24 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
          <p className="text-silver-gray/50 text-sm">
            © {new Date().getFullYear()} ES Web Studio. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-silver-gray/30">
            <span>Privacidad</span>
            <span>Términos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
