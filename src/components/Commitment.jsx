import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Highlighter, Headphones } from 'lucide-react';

const pillars = [
  {
    title: "Entrega Ágil",
    description: "Entendemos que cada día que tu negocio no está en internet, es una oportunidad perdida. Optimizamos nuestros procesos para que tu sitio esté listo en tiempo récord.",
    icon: Zap,
    color: "from-tech-purple to-tech-purple/60 shadow-purple-500/20"
  },
  {
    title: "Diseño a Medida",
    description: "No usamos moldes genéricos. Cada proyecto se construye desde cero pensando exclusivamente en las necesidades de tu empresa y tus clientes.",
    icon: Highlighter,
    color: "from-electric-cyan to-electric-cyan/60 shadow-cyan-500/20"
  },
  {
    title: "Soporte Continuo",
    description: "No te dejamos solo después del lanzamiento. Nos encargamos de que todo funcione siempre perfecto para que tú nunca tengas que preocuparte por nada técnico.",
    icon: Headphones,
    color: "from-white to-silver-gray shadow-white/20"
  }
];

const WavyBackground = () => (
  <div 
    className="absolute inset-x-0 bottom-0 z-0 pointer-events-none opacity-40 h-[400px]"
    style={{
      maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
    }}
  >
    <svg 
      viewBox="0 0 1440 400" 
      className="absolute bottom-0 w-full h-auto translate-y-8"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {[...Array(12)].map((_, i) => (
        <motion.path
          key={i}
          d={`M-100 ${200 + i * 15} Q 360 ${100 - i * 10} 720 ${200 + i * 5} T 1540 ${200 - i * 5}`}
          stroke="url(#gradient-wave)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.3 + (i * 0.05) }}
          transition={{ duration: 2, delay: i * 0.1, ease: "easeInOut" }}
        />
      ))}
      <defs>
        <linearGradient id="gradient-wave" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7A32FF" />
          <stop offset="50%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const Commitment = () => {
  return (
    <section id="compromiso" className="py-32 relative">
      <WavyBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Más que una agencia, <br />
            <span className="text-gradient">tu socio en el mundo digital</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-silver-gray text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Nos apasiona ver crecer los negocios locales. Por eso, basamos nuestro trabajo en tres pilares diseñados para garantizar que tu inversión se convierta en resultados reales.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative px-4">
          {pillars.map((pillar, pIndex) => (
            <motion.div
              key={pIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: pIndex * 0.15 }}
              className="flex flex-col h-full"
            >
              {/* Pillar Card */}
              <div className="glass-morphism p-8 rounded-2xl border border-white/10 hover:border-electric-cyan/30 transition-all duration-500 group relative overflow-hidden h-full flex flex-col">
                {/* Glow effect */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
                
                <div className="mb-8 relative">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${pillar.color} shadow-lg mb-6`}>
                    <pillar.icon className="w-7 h-7 text-deep-navy" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-electric-cyan transition-colors">
                    {pillar.title}
                  </h3>
                </div>

                <div className="relative z-10">
                  <p className="text-silver-gray leading-relaxed text-lg">
                    {pillar.description}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="mt-auto pt-8">
                  <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${pillar.color} opacity-30 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;
