import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, ShoppingBag, Stethoscope, ChevronLeft, ChevronRight, Briefcase, Cpu, Globe } from 'lucide-react';

const cases = [
  {
    icon: Building2,
    key: 'enterprise',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    gradient: 'from-primary/80 to-primary-dark/90'
  },
  {
    icon: ShoppingBag,
    key: 'retail',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    gradient: 'from-secondary/80 to-secondary-dark/90'
  },
  {
    icon: Stethoscope,
    key: 'healthcare',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200',
    gradient: 'from-primary/80 to-secondary/90'
  },
  {
    icon: Briefcase,
    key: 'consulting',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    gradient: 'from-secondary/80 to-primary/90'
  },
  {
    icon: Cpu,
    key: 'technology',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    gradient: 'from-primary/80 to-secondary/90'
  },
  {
    icon: Globe,
    key: 'education',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200',
    gradient: 'from-secondary/80 to-primary-dark/90'
  }
];

export default function CaseStudies() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };

  const CurrentIcon = cases[currentIndex].icon;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            {t('caseStudies.title')}
          </h2>
          <p className="text-xl text-metallic">
            {t('caseStudies.subtitle')}
          </p>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden md:block relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <div className="grid md:grid-cols-2 gap-8">
              {[0, 1].map((offset) => {
                const index = (currentIndex + offset) % cases.length;
                const item = cases[index];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ delay: offset * 0.2 }}
                    className="group relative overflow-hidden rounded-2xl shadow-lg h-[400px]"
                  >
                    <div className="aspect-w-16 aspect-h-9 h-full">
                      <img
                        src={item.image}
                        alt={t(`caseStudies.${item.key}.title`)}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient}`}></div>
                      <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <item.icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-2xl font-semibold">
                            {t(`caseStudies.${item.key}.title`)}
                          </h3>
                        </div>
                        <div className="space-y-4">
                          <p className="text-lg text-white/90">
                            {t(`caseStudies.${item.key}.description`)}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl font-bold">{t(`caseStudies.${item.key}.stats.improvement`)}</span>
                              <span className="text-white/80">{t(`caseStudies.${item.key}.stats.label`)}</span>
                            </div>
                            <p className="text-sm text-white/70">
                              {t(`caseStudies.${item.key}.outcome`)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatePresence>

          {/* Desktop Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors border border-metallic-light/10 z-10"
            aria-label="Previous case studies"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors border border-metallic-light/10 z-10"
            aria-label="Next case studies"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {cases.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(currentIndex / 2) === Math.floor(index / 2) ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
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
                className="group relative overflow-hidden rounded-2xl shadow-lg h-[400px]"
              >
                <div className="aspect-w-16 aspect-h-9 h-full">
                  <img
                    src={cases[currentIndex].image}
                    alt={t(`caseStudies.${cases[currentIndex].key}.title`)}
                    className="object-cover w-full h-full"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${cases[currentIndex].gradient}`}></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <CurrentIcon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-semibold">
                        {t(`caseStudies.${cases[currentIndex].key}.title`)}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <p className="text-lg text-white/90">
                        {t(`caseStudies.${cases[currentIndex].key}.description`)}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold">
                            {t(`caseStudies.${cases[currentIndex].key}.stats.improvement`)}
                          </span>
                          <span className="text-white/80">
                            {t(`caseStudies.${cases[currentIndex].key}.stats.label`)}
                          </span>
                        </div>
                        <p className="text-sm text-white/70">
                          {t(`caseStudies.${cases[currentIndex].key}.outcome`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Floating Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors border border-metallic-light/10 z-10"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors border border-metallic-light/10 z-10"
              aria-label="Next case study"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {cases.map((_, index) => (
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