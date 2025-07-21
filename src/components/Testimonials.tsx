import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    key: "cto",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
  },
  {
    key: "director",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200"
  },
  {
    key: "manager",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
  },
  {
    key: "vp",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
  },
  {
    key: "founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    key: "lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  }
];

export default function Testimonials() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/5 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-metallic">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden md:block relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <div className="grid md:grid-cols-3 gap-8">
              {[0, 1, 2].map((offset) => {
                const index = (currentIndex + offset) % testimonials.length;
                const testimonial = testimonials[index];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ delay: offset * 0.2 }}
                    className="bg-white rounded-2xl p-8 shadow-lg relative border border-metallic-light/10 h-[420px] flex flex-col"
                  >
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                    <div className="mb-8 flex-grow">
                      <div className="flex items-center mb-6">
                        <img
                          src={testimonial.image}
                          alt={t(`testimonials.${testimonial.key}.author`)}
                          className="w-16 h-16 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-dark text-lg">
                            {t(`testimonials.${testimonial.key}.author`)}
                          </h4>
                          <p className="text-sm text-metallic">
                            {t(`testimonials.${testimonial.key}.role`)}
                          </p>
                          <p className="text-sm text-primary">
                            {t(`testimonials.${testimonial.key}.company`)}
                          </p>
                        </div>
                      </div>
                      <p className="text-metallic italic">"{t(`testimonials.${testimonial.key}.text`)}"</p>
                    </div>
                    <div className="border-t border-metallic-light/10 pt-4 mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-dark">
                            {t(`testimonials.${testimonial.key}.results.metric`)}
                          </p>
                          <p className="text-sm text-metallic">
                            {t(`testimonials.${testimonial.key}.results.description`)}
                          </p>
                        </div>
                        <span className="text-2xl font-bold text-primary">
                          {t(`testimonials.${testimonial.key}.results.value`)}
                        </span>
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
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors border border-metallic-light/10 z-10"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(currentIndex / 3) === Math.floor(index / 3) ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative max-w-sm mx-auto">
          {/* Flex container for buttons and card */}
          <div className="flex items-center justify-center space-x-4">
            {/* Floating Navigation Buttons (Left) */}
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-dark shadow-lg hover:bg-gray-700 transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <div className="flex-grow">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-metallic-light/10 min-h-[420px] flex flex-col"
                >
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                  <div className="mb-8 flex-grow">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={t(`testimonials.${testimonials[currentIndex].key}.author`)}
                        className="w-16 h-16 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-dark text-lg">
                          {t(`testimonials.${testimonials[currentIndex].key}.author`)}
                        </h4>
                        <p className="text-sm text-metallic">
                          {t(`testimonials.${testimonials[currentIndex].key}.role`)}
                        </p>
                        <p className="text-sm text-primary">
                          {t(`testimonials.${testimonials[currentIndex].key}.company`)}
                        </p>
                      </div>
                    </div>
                    <p className="text-metallic italic">
                      "{t(`testimonials.${testimonials[currentIndex].key}.text`)}"
                    </p>
                  </div>
                  <div className="border-t border-metallic-light/10 pt-4 mt-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-dark">
                          {t(`testimonials.${testimonials[currentIndex].key}.results.metric`)}
                        </p>
                        <p className="text-sm text-metallic">
                          {t(`testimonials.${testimonials[currentIndex].key}.results.description`)}
                        </p>
                      </div>
                      <span className="text-2xl font-bold text-primary">
                        {t(`testimonials.${currentIndex}.key}.results.value`)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Floating Navigation Buttons (Right) */}
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-dark shadow-lg hover:bg-gray-700 transition-colors z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
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