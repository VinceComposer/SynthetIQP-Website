import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, Users, PenTool, BarChart, MessageSquare, Zap } from 'lucide-react';

const useCases = [
  { icon: Target, key: 'marketing' },
  { icon: Users, key: 'research' },
  { icon: PenTool, key: 'design' },
  { icon: BarChart, key: 'analytics' },
  { icon: MessageSquare, key: 'feedback' },
  { icon: Zap, key: 'testing' }
];

export default function UseCases() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            {t('useCases.title')}
          </h1>
          <p className="text-xl text-gray-600 text-center mb-16">
            {t('useCases.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((UseCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <UseCase.icon className="w-6 h-6 text-[#2D9CDB]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {t(`useCases.cases.${UseCase.key}.title`)}
                    </h3>
                    <p className="text-gray-600">
                      {t(`useCases.cases.${UseCase.key}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}