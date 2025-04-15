import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ShieldCheck, Rocket, Gauge, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  { icon: Zap, key: 'efficiency' },
  { icon: ShieldCheck, key: 'errors' },
  { icon: Rocket, key: 'ahead' },
  { icon: Gauge, key: 'scale' }
];

export default function HowWeHelp() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            {t('howWeHelp.title')}
          </h2>
          <p className="text-xl text-metallic">
            {t('howWeHelp.subtitle')}
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((Service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-full"
            >
              <div className="relative w-full h-full bg-white rounded-2xl p-8 shadow-lg border border-metallic-light/10 hover:shadow-xl transition-all group-hover:scale-105 flex flex-col">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-semibold mb-4 text-dark">
                  {t(`howWeHelp.services.${Service.key}.title`)}
                </h3>

                <p className="text-metallic flex-grow">
                  {t(`howWeHelp.services.${Service.key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative max-w-sm mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-metallic-light/10"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  {React.createElement(services[currentIndex].icon, {
                    className: "w-8 h-8 text-primary"
                  })}
                </div>

                <h3 className="text-xl font-semibold mb-4 text-dark">
                  {t(`howWeHelp.services.${services[currentIndex].key}.title`)}
                </h3>

                <p className="text-metallic">
                  {t(`howWeHelp.services.${services[currentIndex].key}.description`)}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors border border-metallic-light/10 z-10"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors border border-metallic-light/10 z-10"
              aria-label="Next service"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {services.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}