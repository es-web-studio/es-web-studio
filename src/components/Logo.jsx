import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "h-11" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className={`flex items-center ${className} select-none group cursor-pointer`}
    >
      <img 
        src="/assets/logo-text-no-bg.png" 
        alt="ES Web Studio" 
        width="200"
        height="44"
        className="h-full w-auto object-contain filter drop-shadow-[0_0_12px_rgba(122,50,255,0.2)] group-hover:drop-shadow-[0_0_20px_rgba(122,50,255,0.4)] transition-all duration-300"
      />
    </motion.div>
  );
};

export default Logo;
