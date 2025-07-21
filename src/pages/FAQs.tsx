// React is automatically imported by JSX transform
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import FAQ from '../components/FAQ';

export default function FAQs() {
  const { t } = useTranslation();

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
        </motion.div>
      </div>
    </div>
  );
}
