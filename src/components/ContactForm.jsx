import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    negocio: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic Validation
    if (!formData.nombre || !formData.correo || !formData.negocio || !formData.mensaje) {
      setErrorMessage('Por favor, completa todos los campos.');
      return;
    }

    if (!validateEmail(formData.correo)) {
      setErrorMessage('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Placeholder credentials - User to fill later
      const SERVICE_ID = 'service_6imrcie';
      const TEMPLATE_ID = 'template_nm8dlfg';
      const PUBLIC_KEY = 'U7tKwPyLJYtvV_RWP';

      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      setIsSuccess(true);
      setFormData({ nombre: '', correo: '', negocio: '', mensaje: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrorMessage('Hubo un error. Por favor, inténtalo de nuevo o contáctanos por WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gradient font-bold tracking-wider uppercase mb-4">
              ¿Listo para llevar tu negocio al siguiente nivel?
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Empecemos a trabajar</h2>
            <p className="text-silver-gray text-lg">Cuéntanos sobre tu proyecto y te ayudaremos a escalar.</p>
          </motion.div>
        </div>

        <div className="relative min-h-[550px]">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.9, backdropFilter: "blur(0px)" }}
                animate={{ opacity: 1, scale: 1, backdropFilter: "blur(12px)" }}
                exit={{ opacity: 0, scale: 0.9, backdropFilter: "blur(0px)" }}
                className="glass-morphism p-12 rounded-3xl text-center flex flex-col items-center justify-center absolute inset-0 w-full h-full z-20"
              >
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                  className="w-24 h-24 bg-[#00E5FF]/10 rounded-full flex items-center justify-center mb-8 border border-[#00E5FF]/30 shadow-[0_0_30px_rgba(0,229,255,0.2)]"
                >
                  <CheckCircle2 className="w-12 h-12 text-[#00E5FF]" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-4 text-white">¡Mensaje recibido!</h3>
                <p className="text-silver-gray text-lg max-w-md leading-relaxed">
                  Gracias por confiar en <span className="text-[#00E5FF] font-semibold">ES Web Studio</span>. Te contactaremos en breve.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-10 px-8 py-3 rounded-xl border border-white/10 text-white/70 font-medium hover:bg-white/5 hover:text-white transition-all cursor-pointer"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="contact-form"
                ref={formRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="glass-morphism p-8 md:p-12 rounded-3xl"
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-silver-gray mb-2">Nombre</label>
                    <input
                      required
                      disabled={isSubmitting}
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full bg-deep-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tech-purple transition-colors disabled:opacity-50"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-silver-gray mb-2">Correo Electrónico</label>
                    <input
                      required
                      disabled={isSubmitting}
                      type="email"
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      className="w-full bg-deep-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tech-purple transition-colors disabled:opacity-50"
                      placeholder="email@ejemplo.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-silver-gray mb-2">Tipo de Negocio</label>
                  <input
                    required
                    disabled={isSubmitting}
                    type="text"
                    name="negocio"
                    value={formData.negocio}
                    onChange={handleChange}
                    className="w-full bg-deep-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tech-purple transition-colors disabled:opacity-50"
                    placeholder="Ej: Inmobiliaria, Clínica, E-commerce"
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-silver-gray mb-2">Mensaje</label>
                  <textarea
                    required
                    disabled={isSubmitting}
                    name="mensaje"
                    rows="4"
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full bg-deep-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tech-purple transition-colors disabled:opacity-50"
                    placeholder="¿En qué podemos ayudarte?"
                  ></textarea>
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-gradient py-5 rounded-xl text-white font-bold text-sm sm:text-base hover:shadow-lg hover:shadow-tech-purple/20 transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>Empezar mi proyecto hoy</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {errorMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2 text-red-400 text-sm justify-center bg-red-400/10 py-3 rounded-lg border border-red-400/20"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errorMessage}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

