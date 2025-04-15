import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Popup from './Popup';

export default function Problem() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const challenges = [
    'inefficientProcesses',
    'skillGap',
    'integration',
    'scalability',
    'overhead'
  ];

  const solutions = [
    'customAgents',
    'expertise',
    'seamless',
    'futureProof',
    'profitability'
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === 1 ? 0 : 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const handleScheduleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  const handleKnowMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/services');
    window.scrollTo({ top: 0 });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            {t('section.title', 'We understand you')}
          </h2>
          <p className="text-xl text-metallic">
            {t('section.subtitle', 'Changes in AI are happening way too fast and it is vital to have a partner that can help you understand and adapt')}
          </p>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Challenges Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-secondary/10 rounded-full"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-metallic-light/10">
              <div className="flex items-center mb-8">
                <AlertCircle className="w-8 h-8 text-secondary mr-3" />
                <h2 className="text-2xl font-bold text-dark">{t('problem.title')}</h2>
              </div>
              <p className="text-metallic leading-relaxed mb-8">{t('problem.description')}</p>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start">
                    <span className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center text-sm font-semibold text-secondary mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-metallic-dark">{t(`problem.challenges.${challenge}`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solutions Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-metallic-light/10">
              <div className="flex items-center mb-8">
                <CheckCircle2 className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-dark">{t('solution.title')}</h2>
              </div>
              <p className="text-metallic leading-relaxed mb-8">{t('solution.description')}</p>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-sm font-semibold text-primary mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-metallic-dark">{t(`solution.benefits.${solution}`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative max-w-sm mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              {currentIndex === 0 ? (
                <motion.div
                  key="problems"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white rounded-2xl p-8 shadow-lg border border-metallic-light/10"
                >
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full"></div>
                  <div className="flex items-center mb-8">
                    <AlertCircle className="w-8 h-8 text-secondary mr-3" />
                    <h2 className="text-2xl font-bold text-dark">{t('problem.title')}</h2>
                  </div>
                  <p className="text-metallic leading-relaxed mb-8">{t('problem.description')}</p>
                  <div className="space-y-4">
                    {challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start">
                        <span className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center text-sm font-semibold text-secondary mr-3 mt-0.5">
                          {index + 1}
                        </span>
                        <p className="text-metallic-dark">{t(`problem.challenges.${challenge}`)}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="solutions"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white rounded-2xl p-8 shadow-lg border border-metallic-light/10"
                >
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full"></div>
                  <div className="flex items-center mb-8">
                    <CheckCircle2 className="w-8 h-8 text-primary mr-3" />
                    <h2 className="text-2xl font-bold text-dark">{t('solution.title')}</h2>
                  </div>
                  <p className="text-metallic leading-relaxed mb-8">{t('solution.description')}</p>
                  <div className="space-y-4">
                    {solutions.map((solution, index) => (
                      <div key={index} className="flex items-start">
                        <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-sm font-semibold text-primary mr-3 mt-0.5">
                          {index + 1}
                        </span>
                        <p className="text-metallic-dark">{t(`solution.benefits.${solution}`)}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Floating Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors border border-metallic-light/10 z-10"
              aria-label="Previous section"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors border border-metallic-light/10 z-10"
              aria-label="Next section"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            <div
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === 0 ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
            <div
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === 1 ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          <a
            href="#"
            onClick={handleScheduleClick}
            className="btn-primary"
          >
            {t('hero.cta.contact')}
          </a>
          <a
            href="/resources"
            onClick={handleKnowMoreClick}
            className="btn-outline"
          >
            {t('hero.cta.services')}
          </a>
        </motion.div>
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