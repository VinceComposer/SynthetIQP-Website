import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Define testimonial keys in the order we want to display them
const testimonialKeys = ["cto", "director", "manager", "vp", "founder", "lead"];

export default function Testimonials() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialKeys.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialKeys.length - 1 : prev - 1));
  };

  // Function to render stars
  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
    ));
  };

  return (
    <section className="py-16 bg-[#EDF1FC]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
            {t('testimonials.testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('testimonials.testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden md:block relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialKeys.map((key, index) => {
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-md flex flex-col h-full relative"
                >
                  <div className="flex justify-center mb-6">
                    <img
                      src={t(`testimonials.testimonials.${key}.image`) || `https://images.unsplash.com/photo-${index % 3 === 0 ? '1560250097-0b93528c311a' : index % 3 === 1 ? '1573497019940-1c28c88b4f3e' : '1519085360753-af0119f7cbe7'}?auto=format&fit=crop&q=80&w=200`}
                      alt={t(`testimonials.testimonials.${key}.author`)}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="flex justify-center space-x-1 mb-4">
                      {renderStars(Number(t(`testimonials.testimonials.${key}.Stars`)) || 5)}
                    </div>
                    <p className="text-gray-700 italic mb-6">
                      "{t(`testimonials.testimonials.${key}.text`)}"
                    </p>
                    <div className="mt-auto">
                      <p className="font-semibold text-dark">
                        {t(`testimonials.testimonials.${key}.author`)}
                      </p>
                      <p className="text-sm text-gray-600">
                        {t(`testimonials.testimonials.${key}.role`)} - {t(`testimonials.testimonials.${key}.company`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative max-w-sm mx-auto">
          <div className="flex items-center justify-center">
            {/* Left Navigation Button */}
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-[#3498db]" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialKeys[currentIndex]}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-6 shadow-md w-full"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={t(`testimonials.${testimonialKeys[currentIndex]}.image`) || `https://images.unsplash.com/photo-${currentIndex % 3 === 0 ? '1560250097-0b93528c311a' : currentIndex % 3 === 1 ? '1573497019940-1c28c88b4f3e' : '1519085360753-af0119f7cbe7'}?auto=format&fit=crop&q=80&w=200`}
                    alt={t(`testimonials.${testimonialKeys[currentIndex]}.author`)}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                
                <div className="text-center mb-4">
                  <div className="flex justify-center space-x-1 mb-4">
                    {renderStars(Number(t(`testimonials.${testimonialKeys[currentIndex]}.Stars`)) || 5)}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "{t(`testimonials.${testimonialKeys[currentIndex]}.text`)}"
                  </p>
                  <p className="font-semibold text-dark">
                    {t(`testimonials.${testimonialKeys[currentIndex]}.author`)}
                  </p>
                  <p className="text-sm text-gray-600">
                    {t(`testimonials.${testimonialKeys[currentIndex]}.role`)} - {t(`testimonials.${testimonialKeys[currentIndex]}.company`)}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Navigation Button */}
            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-[#3498db]" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonialKeys.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#3498db]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
