import React from 'react';
import Hero from '../components/Hero';
import HowWeHelp from '../components/HowWeHelp';
import HowItWorks from '../components/HowItWorks';
import Problem from '../components/Problem';
import CaseStudies from '../components/CaseStudies';
import HomeTestimonials from '../components/HomeTestimonials';
import ContactOptions from '../components/ContactOptions';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation('home');
  const { t: tCommon } = useTranslation('common'); // Assuming common translations for CTA

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <HowWeHelp />
        <HowItWorks />
        <Problem />
        <CaseStudies />
        <HomeTestimonials />
        {/* Home CTA Section - Styled to match Services page */}
        <section className="text-center py-16">
          <div className="container mx-auto px-4">
            <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-gray-100">
              <p className="text-primary font-medium text-sm sm:text-base mb-2">
                {t('homeCta.heading')}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-4">
                {t('homeCta.title')}
              </h2>
              <p className="mb-6 text-base text-dark max-w-3xl mx-auto">
                {t('homeCta.description')}
              </p>
              <a
                href="/discovery"
                className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors text-base shadow-md hover:shadow-lg"
              >
                <span className="inline-flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9V5L21 12L14 19V15H3V9H14Z" fill="currentColor"/>
                  </svg>
                  {t('homeCta.button')}
                </span>
              </a>
            </div>
          </div>
        </section>
        <ContactOptions />
      </main>
    </div>
  );
}