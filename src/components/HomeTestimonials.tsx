import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Define testimonial keys in the order we want to display them
const testimonialKeys = ["cto", "director", "manager", "vp", "founder", "lead"];

export default function HomeTestimonials() {
  const { t, i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialKeys.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialKeys.length) % testimonialKeys.length);
  };

  // Function to render stars
  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
    ));
  };

  // Get testimonials to display for desktop (3 at a time)
  const getDesktopTestimonials = () => {
    const startIndex = currentIndex % testimonialKeys.length;
    const endIndex = (startIndex + 3);
    
    if (endIndex <= testimonialKeys.length) {
      return testimonialKeys.slice(startIndex, endIndex);
    } else {
      const firstPart = testimonialKeys.slice(startIndex, testimonialKeys.length);
      const secondPart = testimonialKeys.slice(0, endIndex % testimonialKeys.length);
      return [...firstPart, ...secondPart];
    }
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
            {t('homeTestimonials.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('homeTestimonials.subtitle')}
          </p>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden md:block relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center">
            {/* Left Navigation Button */}
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-[#3498db]" />
            </button>

            <div className="grid grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {getDesktopTestimonials().map((key, index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="bg-white rounded-xl p-8 shadow-md flex flex-col h-full relative"
                  >
                    <div className="flex justify-center mb-6">
                      <img
                        src={t(`homeTestimonials.${key}.image`) || `https://images.unsplash.com/photo-${index % 3 === 0 ? '1560250097-0b93528c311a' : index % 3 === 1 ? '1573497019940-1c28c88b4f3e' : '1519085360753-af0119f7cbe7'}?auto=format&fit=crop&q=80&w=200`}
                        alt={t(`homeTestimonials.${key}.author`)}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    </div>
                    
                    <div className="text-center mb-4">
                      <div className="flex justify-center space-x-1 mb-4">
                        {renderStars(Number(t(`homeTestimonials.${key}.Stars`)) || 5)}
                      </div>
                      <p className="text-gray-700 italic mb-6">
                        "{t(`homeTestimonials.${key}.text`)}"
                      </p>
                      <div className="mt-auto">
                        <p className="font-semibold text-dark">
                          {t(`homeTestimonials.${key}.author`)}
                        </p>
                        <p className="text-sm text-gray-600">
                          {t(`homeTestimonials.${key}.role`)} - {t(`homeTestimonials.${key}.company`)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

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
                  // Highlight dot if its corresponding testimonial is among the currently displayed three
                  (index >= currentIndex % testimonialKeys.length && index < (currentIndex % testimonialKeys.length) + 3) ||
                  ((currentIndex % testimonialKeys.length) + 3 > testimonialKeys.length && (index < ((currentIndex % testimonialKeys.length) + 3) % testimonialKeys.length || index >= (currentIndex % testimonialKeys.length)))
                  ? 'bg-[#3498db]' : 'bg-gray-300'
                }`}
              />
            ))}
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
                    src={t(`homeTestimonials.${testimonialKeys[currentIndex]}.image`) || `https://images.unsplash.com/photo-${currentIndex % 3 === 0 ? '1560250097-0b93528c311a' : currentIndex % 3 === 1 ? '1573497019940-1c28c88b4f3e' : '1519085360753-af0119f7cbe7'}?auto=format&fit=crop&q=80&w=200`}
                    alt={t(`homeTestimonials.${testimonialKeys[currentIndex]}.author`)}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                
                <div className="text-center mb-4">
                  <div className="flex justify-center space-x-1 mb-4">
                    {renderStars(Number(t(`homeTestimonials.${testimonialKeys[currentIndex]}.Stars`)) || 5)}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "{t(`homeTestimonials.${testimonialKeys[currentIndex]}.text`)}"
                  </p>
                  <p className="font-semibold text-dark">
                    {t(`homeTestimonials.${testimonialKeys[currentIndex]}.author`)}
                  </p>
                  <p className="text-sm text-gray-600">
                    {t(`homeTestimonials.${testimonialKeys[currentIndex]}.role`)} - {t(`homeTestimonials.${testimonialKeys[currentIndex]}.company`)}
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
