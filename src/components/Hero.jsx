import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-20 bg-black">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-tech-purple/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-electric-cyan/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Tu negocio no se detiene.<br />
            <span className="text-gradient">Tu presencia digital tampoco debería.</span>
          </h1>
          <p className="text-xl md:text-2xl text-silver-gray mb-10 max-w-3xl mx-auto leading-relaxed">
            Creamos soluciones digitales diseñadas para atraer más clientes y liberar tu agenda. 
            Sitios rápidos, profesionales y listos para trabajar por ti las 24 horas.
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/527779864990?text=Hola,%20vi%20la%20web%20de%20ES%20Web%20Studio%20y%20me%20interesa%20la%20asesoría%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-brand-gradient rounded-xl text-white font-bold text-lg shadow-lg shadow-tech-purple/25 flex items-center gap-2 mx-auto cursor-pointer w-fit"
          >
            Quiero una asesoría gratuita
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
