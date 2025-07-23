// React is automatically imported by JSX transform
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Discovery = () => {
  const { t } = useTranslation();
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  // Testimonial navigation handlers
  const nextTestimonial = () => {
    const testimonials = t('testimonials.items', { returnObjects: true }) as Array<{name: string, role: string, image: string, imageAlt: string, quote: string}>;
    setActiveTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    const testimonials = t('testimonials.items', { returnObjects: true }) as Array<{name: string, role: string, image: string, imageAlt: string, quote: string}>;
    setActiveTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // FAQ toggle handler
  const toggleFaq = (index: number) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EDF1FC' }}>
      <div className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section with Video */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16"
          >
            <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-4" style={{ color: '#1A1A2E' }}>
                {t('discoveryHero.title')}
              </h1>
              <p className="mt-2 mb-8 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto text-center" style={{ color: '#1A1A2E' }}>
                {t('discoveryHero.subtitle')}
              </p>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-black mx-auto max-w-4xl shadow-md">
                <video 
                  src={t('discoveryHero.videoUrl')} 
                  controls 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.section>
          
          {/* CTA Card Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 sm:mb-16"
          >
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: '#1A1A2E' }}>
                {t('ctaCard.title')}
              </h2>
              <p className="text-[#1A1A2E] mb-6">
                {t('ctaCard.subtitle')}
              </p>
              <a 
                href="#calendar" 
                className="inline-block bg-[#00B3FF] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#0099DD] transition-colors shadow-md hover:shadow-lg"
              >
                <i className="fas fa-arrow-right mr-2"></i>
                {t('ctaCard.buttonText')}
              </a>
            </div>
          </motion.section>
          
          {/* What's Included Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 sm:mb-16"
            id="oferta-gratuita"
          >
            <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#1A1A2E' }}>
                {t('whatIncludes.title')}
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#7C3AED] mb-6">
                {t('whatIncludes.subtitle')}
              </h3>
              <p className="text-[#1A1A2E] mb-2">
                {t('whatIncludes.description')}
              </p>
              <p className="text-[#1A1A2E] mb-8 text-sm italic">
                {t('whatIncludes.note')}
              </p>
              
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-xl font-bold text-[#1A1A2E] mb-4">
                  {t('whatIncludes.objectives.title')}
                </h4>
                <ul className="space-y-4 text-[#1A1A2E] mb-8">
                  {(t('whatIncludes.objectives.items', { returnObjects: true }) as Array<{title: string, description: string}>).map((item, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check-circle text-[#00B3FF] w-6 h-6 mt-1 mr-3 flex-shrink-0"></i>
                      <span>
                        <strong>{item.title}</strong>
                        {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mb-8">
                <h4 className="text-xl font-bold text-[#1A1A2E] mb-4">
                  {t('whatIncludes.deliverable.title')}
                </h4>
                <p className="text-[#1A1A2E] bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <strong>
                    {t('whatIncludes.deliverable.description')}
                  </strong>
                </p>
              </div>

              <div className="text-center mt-8">
                <a 
                  href="#calendar" 
                  className="inline-block bg-[#00B3FF] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#0099DD] transition-colors shadow-md hover:shadow-lg"
                >
                  <i className="fas fa-arrow-right mr-2"></i>
                  {t('whatIncludes.buttonText')}
                </a>
              </div>
            </div>
          </motion.section>
          
          {/* Testimonials Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 sm:mb-16"
            id="testimonials"
            style={{ backgroundColor: '#EDF1FC' }}
          >
            <div className="py-12 sm:py-16">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <h3 className="text-sm sm:text-base font-medium uppercase tracking-wider text-blue-600">
                    {t('testimonials.title')}
                  </h3>
                  <h2 className="mt-2 text-2xl sm:text-4xl font-bold text-[#1A1A2E]">
                    {t('testimonials.subtitle')}
                  </h2>
                </div>
                
                {/* Desktop view: 3 cards in a row */}
                <div className="hidden md:grid md:grid-cols-3 gap-6">
                  {(t('testimonials.items', { returnObjects: true }) as Array<{name: string, role: string, image: string, imageAlt: string, title: string, quote: string, stars: number}>).map((testimonial, index) => (
                    <div 
                      key={`desktop-${index}`} 
                      className="bg-white p-6 rounded-xl shadow-md flex flex-col h-full"
                    >
                      <div className="flex justify-center mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.imageAlt} 
                          className="w-24 h-24 object-cover rounded-full"
                        />
                      </div>
                      <h4 className="font-bold text-xl text-center text-[#1A1A2E] mb-2">"{testimonial.title}"</h4>
                      <p className="text-[#1A1A2E] text-center mb-6 flex-grow">
                        {testimonial.quote}
                      </p>
                      <div className="mt-auto">
                        <p className="font-bold text-center">- {testimonial.name} {testimonial.role}</p>
                        <div className="flex justify-center mt-2">
                          {[...Array(testimonial.stars)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-xl">★</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Mobile view: 1 card with navigation */}
                <div className="md:hidden flex items-center justify-center">
                  {/* Navigation controls (Left) */}
                  <button 
                    onClick={prevTestimonial}
                    className="bg-[#00B3FF] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#0099DD] transition-colors mr-4"
                    aria-label="Testimonio anterior"
                  >
                    <span className="text-xl">&larr;</span>
                  </button>
                  {/* Current testimonial */}
                  {(() => {
                    const testimonials = t('testimonials.items', { returnObjects: true }) as Array<{name: string, role: string, image: string, imageAlt: string, title: string, quote: string, stars: number}>;
                    const testimonial = testimonials[activeTestimonialIndex];
                    return (
                      <div className="bg-white p-6 rounded-xl shadow-md flex-grow">
                        <div className="flex justify-center mb-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.imageAlt} 
                            className="w-24 h-24 object-cover rounded-full"
                          />
                        </div>
                        <h4 className="font-bold text-xl text-center text-[#1A1A2E] mb-2">"{testimonial.title}"</h4>
                        <p className="text-[#1A1A2E] text-center mb-6">
                          {testimonial.quote}
                        </p>
                        <p className="font-bold text-center">- {testimonial.name} {testimonial.role}</p>
                        <div className="flex justify-center mt-2">
                          {[...Array(testimonial.stars)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-xl">★</span>
                          ))}
                        </div>
                      </div>
                    );
                  })()} 

                  {/* Navigation controls (Right) */}
                  <button 
                    onClick={nextTestimonial}
                    className="bg-[#00B3FF] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#0099DD] transition-colors ml-4"
                    aria-label="Siguiente testimonio"
                  >
                    <span className="text-xl">&rarr;</span>
                  </button>
                </div>

                {/* Dots Navigation - hidden on desktop, visible on mobile */}
                <div className="md:hidden flex justify-center items-center gap-2 mt-4">
                  {(t('testimonials.items', { returnObjects: true }) as Array<any>).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonialIndex(index)}
                      className={`w-3 h-3 rounded-full ${index === activeTestimonialIndex ? 'bg-[#00B3FF]' : 'bg-gray-300'}`}
                      aria-label={`Ir al testimonio ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
          
          {/* FAQs Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16 sm:mb-24"
            id="faq"
          >
            <header className="text-center mb-12 sm:mb-16">
              <h3 className="text-lg font-semibold text-blue-500 uppercase tracking-wider">{t('faqs.title')}</h3>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E]">{t('faqs.subtitle')}</h2>
              <p className="mt-4 text-base sm:text-lg text-[#1A1A2E] max-w-3xl mx-auto">{t('faqs.description')}</p>
            </header>
            <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg space-y-4">
              {(t('faqs.items', { returnObjects: true }) as Array<{question: string, answer: string}>).map((faq, index) => (
                <div key={index} className="faq-item border-b border-gray-200 pb-4 last:border-b-0">
                  <button 
                    className="faq-question w-full flex justify-between items-center text-left text-lg font-semibold text-[#1A1A2E]"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.question}</span>
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <div className={`faq-answer pt-4 text-gray-600 ${activeFaqIndex === index ? 'block' : 'hidden'}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
          
          {/* Calendar Booking Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12 sm:mb-16"
            id="calendar"
          >
            <header className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: '#1A1A2E' }}>
                {t('calendar.title')}
              </h2>
              <p className="mt-4 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto" style={{ color: '#1A1A2E' }}>
                {t('calendar.subtitle')}
              </p>
            </header>
            
            <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg">
              <div className="mt-8">
                <div style={{ position: 'relative', paddingBottom: '1050px', height: 0, overflow: 'hidden', maxWidth: '100%', margin: '0 auto' }}>
                  <iframe 
                    src={t('calendar.calendarUrl')}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                    scrolling="no"
                    allowTransparency={true}
                    loading="lazy"
                    id="discovery-calendar"
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Team Section - "Ahí estaremos" */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            id="equipo"
          >
            <div className="bg-blue-600 text-white p-8 sm:p-12 rounded-2xl shadow-lg text-center">
              <div className="flex justify-center mb-8">
                <img 
                  src={t('team.image')} 
                  alt={t('team.imageAlt')} 
                  className="w-36 h-36 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-blue-400 shadow-lg"
                />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
                {t('team.title')}
              </h2>
              <div className="max-w-4xl mx-auto text-lg space-y-4 text-blue-100">
                <p>{t('team.description')}</p>
              </div>
            </div>
          </motion.section>
          
        </div>
      </div>
    </div>
  );
};

export default Discovery;
