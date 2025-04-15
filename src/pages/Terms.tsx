import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function Terms() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <FileText className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
              {t('terms.title')}
            </h1>
            <p className="text-xl text-metallic mb-4">
              {t('terms.subtitle')}
            </p>
            <p className="text-sm text-metallic">
              {t('terms.lastUpdated')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 space-y-12">
            {[1, 2, 3, 4, 5].map((section) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: section * 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-4 text-dark">
                  {t(`terms.sections.${section}.title`)}
                </h2>
                <p className="text-metallic leading-relaxed">
                  {t(`terms.sections.${section}.content`)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}