import React from 'react';
import { motion } from 'framer-motion';

const ClosureBanner = () => {
  return (
    <section className="py-20 px-6 relative z-10 bg-transparent">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-5xl bg-brand-gradient/90 backdrop-blur-sm p-12 md:p-20 rounded-[2.5rem] relative overflow-hidden group shadow-2xl shadow-tech-purple/20"
      >
        {/* Animated Orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-white/20 transition-all duration-700" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-deep-navy/20 rounded-full -ml-20 -mb-20 blur-3xl" />

        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>
          <div className="w-24 h-1.5 bg-white/30 mx-auto rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default ClosureBanner;
