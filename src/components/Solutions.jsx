import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Target, Globe } from 'lucide-react';

const solutions = [
  {
    title: "Presencia Digital de Alto Impacto",
    description: "Causa la mejor primera impresión. Diseñamos sitios que no solo se ven bien, sino que convencen a tus clientes de que eres la mejor opción.",
    icon: Target,
  },
  {
    title: "Sistemas de Reserva y Control Total",
    description: "Deja que tus clientes agenden solos. Automatiza tus citas para que tú te enfoques en lo que mejor sabes hacer.",
    icon: Sparkles,
  },
  {
    title: "Paneles de Gestión para Dueños",
    description: "Toma decisiones basadas en la realidad. Accede a un panel privado para ver tus citas y clientes desde cualquier dispositivo.",
    icon: Zap,
  },
  {
    title: "De lo Local a lo Global",
    description: "Preparamos tu negocio para el siguiente nivel de crecimiento.",
    icon: Globe,
    cta: {
      text: "Chatear",
      link: "https://wa.me/527779864990?text=Hola,%20vi%20la%20web%20de%20ES%20Web%20Studio%20y%20me%20interesa%20la%20asesoría%20gratuita"
    }
  }
];

const WhatsAppIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-5 h-5 fill-current" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.633 1.434h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Solutions = () => {
  return (
    <section id="soluciones" className="relative py-32 overflow-hidden bg-black">
      {/* Optimized Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/bg_solutions_poster.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        style={{ willChange: 'transform' }}
      >
        <source src="/assets/bg_solutions.mp4" type="video/mp4" />
      </video>

      {/* Overlay - Dark/Contrast Layer */}
      <div className="absolute inset-0 bg-black/75 z-0" />

      {/* Transitions - Top and Bottom Fades to Solid Black */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black via-black/80 to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-[1]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white max-w-4xl mx-auto leading-tight"
          >
            <span className="text-white">Desde el concepto hasta el éxito</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg md:text-xl font-medium tracking-wide"
          >
            Impulsando la transformación digital de negocios visionarios
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-[2rem] glass-morphism backdrop-blur-md bg-black/40 border-white/10 solution-card-hover group flex flex-col h-full"
            >
              <div className="mb-6 p-3 rounded-2xl bg-white/5 w-fit border border-white/10 group-hover:border-tech-purple/50 transition-colors">
                <item.icon className="w-8 h-8 text-white/90" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 leading-snug text-white">
                  {item.title}
                </h3>
                <p className="text-silver-gray/90 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
              
              {item.cta && (
                <div className="mt-8">
                  <a
                    href={item.cta.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gradient rounded-xl text-white font-bold text-sm hover:shadow-lg hover:shadow-tech-purple/20 transition-all cursor-pointer w-full justify-center"
                  >
                    <WhatsAppIcon />
                    {item.cta.text}
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
