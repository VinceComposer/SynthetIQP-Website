// React is automatically imported by JSX transform
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import FAQ from '../components/FAQ';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function FAQs() {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default anchor link behavior
    navigate('/discovery'); // Navigate using react-router-dom
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-dark">
            {t('faq.title')}
          </h1>
          <p className="text-xl text-center text-metallic mb-16">
            {t('faq.subtitle')}
          </p>

          {/* FAQ Content */}
          <FAQ />

          {/* CTA FAQs Section */}
          <section className="text-center mt-16">
            <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-gray-100">
              <p className="text-sm md:text-base text-primary font-medium mb-2">
                {t('ctaFaqs.heading')}
              </p>
              <h2 className="text-xl md:text-2xl sm:text-3xl font-bold text-dark mb-4">
                {t('ctaFaqs.title')}
              </h2
>              <p className="mb-6 text-sm md:text-base text-dark max-w-3xl mx-auto">
                {t('ctaFaqs.description')}
              </p>
              <a
                href="/discovery" // Keep href for accessibility
                className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors text-sm md:text-base shadow-md hover:shadow-lg"
                onClick={handleCtaClick} // Add onClick handler
              >
                <span className="inline-flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9V5L21 12L14 19V15H3V9H14Z" fill="currentColor"/>
                  </svg>
                  {t('ctaFaqs.button')}
                </span>
              </a>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
