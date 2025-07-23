import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function HomeCta() {
  const { t, i18n } = useTranslation('sections/homeCta');
  const navigate = useNavigate();

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default anchor link behavior
    navigate('/discovery'); // Navigate directly to /discovery
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
  };

  return (
    <section className="text-center py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-gray-100 max-w-3xl mx-auto">
          <p className="text-blue-500 font-medium text-sm sm:text-base mb-2">
            {t('heading')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            {t('title')}
          </h2>
          <p className="mb-6 text-base text-gray-600">
            {t('description')}
          </p>
          <a
            href="/discovery" // Keep href as /discovery for accessibility/coherence
            onClick={handleCtaClick}
            className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-colors text-base shadow-md hover:shadow-lg"
          >
            <span className="inline-flex items-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9V5L21 12L14 19V15H3V9H14Z" fill="currentColor"/>
              </svg>
              {t('button')}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}