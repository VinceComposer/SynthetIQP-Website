import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedText from './AnimatedText';
import Popup from './Popup';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();
  
  const animatedWords = isSpanish 
    ? ['IA', 'Automatizaciones de IA', 'Agentes de IA', 'Herramientas de IA']
    : ['AI Solutions', 'AI Automations', 'AI Agents', 'AI Tools'];

  const handleStartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/discovery');
    window.scrollTo({ top: 0 });
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/services');
    window.scrollTo({ top: 0 });
  };

  return (
    <section className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-primary/5 to-secondary/5 overflow-hidden flex items-center">
      <div className="container mx-auto px-8 md:px-12 py-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="font-bold text-dark mb-8 md:mb-16 leading-normal md:leading-relaxed pt-8 md:pt-24">
              {isSpanish ? (
                <>
                  {/* Desktop Version */}
                  <div className="hidden md:block">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-4xl md:text-6xl mb-8 px-4">Transforma tu empresa con</span>
                      <div className="w-full">
                        <AnimatedText 
                          words={animatedWords}
                          className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                          textSizes={{
                            default: 'text-4xl md:text-6xl',
                            long: 'text-3xl md:text-5xl'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Version */}
                  <div className="md:hidden flex flex-col items-center">
                    <span className="block text-3xl sm:text-4xl mb-2">Transforma</span>
                    <span className="block text-3xl sm:text-4xl mb-4">tu empresa con</span>
                    <div className="w-full">
                      <AnimatedText 
                        words={animatedWords}
                        className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                        textSizes={{
                          default: 'text-3xl sm:text-4xl',
                          long: 'text-2xl sm:text-3xl'
                        }}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Desktop Version */}
                  <div className="hidden md:block">
                    <span className="block mb-8 text-4xl md:text-6xl px-4">Transform Your Business with</span>
                    <span className="block text-4xl md:text-6xl px-4">
                      <AnimatedText 
                        words={animatedWords}
                        className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block"
                        textSizes={{
                          default: 'text-4xl md:text-6xl',
                          long: 'text-4xl md:text-6xl'
                        }}
                      />
                    </span>
                  </div>

                  {/* Mobile Version */}
                  <div className="md:hidden">
                    <span className="block text-3xl sm:text-4xl mb-2">Transform Your</span>
                    <span className="block text-3xl sm:text-4xl mb-4">Business with</span>
                    <span className="block text-3xl sm:text-4xl">
                      <AnimatedText 
                        words={animatedWords}
                        className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block"
                        textSizes={{
                          default: 'text-3xl sm:text-4xl',
                          long: 'text-3xl sm:text-4xl'
                        }}
                      />
                    </span>
                  </div>
                </>
              )}
            </h1>
            <p className="text-lg md:text-2xl text-metallic mb-8 md:mb-16 max-w-4xl mx-auto px-4">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/discovery"
                onClick={handleStartClick}
                className="btn-primary"
              >
                {t('hero.cta.contact', 'Start Here')}
              </a>
              <a
                href="/services"
                onClick={handleServicesClick}
                className="btn-outline"
              >
                {t('hero.cta.services', 'Know More')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title={t('contact.inProgress.title')}
        message={t('contact.inProgress.schedule')}
      />
    </section>
  );
}