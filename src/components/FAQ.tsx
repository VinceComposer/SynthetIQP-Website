import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { key: "aiAgents" },
  { key: "implementation" },
  { key: "security" },
  { key: "customization" },
  { key: "integration" },
  { key: "support" },
  { key: "pricing" },
  { key: "singleAgent" },
  { key: "dataPrivacy" },
  { key: "techStack" },
  { key: "underperforming" },
  { key: "moneyBack" },
  { key: "aioQuality" },
  { key: "aioSubscription" },
  { key: "aioCancellation" },
  { key: "whyVirtualStaff" },
  { key: "virtualStaffHours" },
  { key: "automationCost" },
  { key: "selfManagement" }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="mb-6"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left bg-white hover:bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-between group border border-metallic-light/10"
          >
            <span className="font-semibold text-dark group-hover:text-primary transition-colors pr-8">
              {t(`faq.questions.${faq.key}.question`)}
            </span>
            {openIndex === index ? (
              <Minus className="w-5 h-5 text-primary flex-shrink-0" />
            ) : (
              <Plus className="w-5 h-5 text-primary flex-shrink-0" />
            )}
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 text-metallic bg-gray-50 rounded-xl mt-2 shadow-inner">
                  {t(`faq.questions.${faq.key}.answer`)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}