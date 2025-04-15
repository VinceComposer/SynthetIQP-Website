import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, BookOpen, PlayCircle, ChevronDown, Construction } from 'lucide-react';
import FAQ from '../components/FAQ';

const tabs = [
  { id: 'faqs', icon: HelpCircle, title: 'FAQs' },
  { id: 'guides', icon: BookOpen, title: 'Guides' },
  { id: 'videos', icon: PlayCircle, title: 'Videos' }
];

export default function Resources() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('faqs');
  const [isOpen, setIsOpen] = useState(false);

  const currentTab = tabs.find(tab => tab.id === activeTab)!;

  const WorkInProgressMessage = () => (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
        <Construction className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-dark text-center">
        {t('resources.workInProgress.title')}
      </h3>
      <p className="text-metallic text-center max-w-md">
        {t('resources.workInProgress.message')}
      </p>
    </div>
  );

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-dark">
            {t('resources.title')}
          </h1>
          <p className="text-xl text-center text-metallic mb-16">
            {t('resources.subtitle')}
          </p>

          {/* Desktop Tabs Navigation */}
          <div className="hidden md:flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-xl p-1">
              {tabs.map(({ id, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`
                    flex items-center px-6 py-3 rounded-lg transition-all duration-300
                    ${activeTab === id
                      ? 'bg-white text-primary shadow-md transform -translate-y-0.5'
                      : 'text-metallic hover:text-primary'
                    }
                  `}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  <span className="font-medium">{t(`resources.tabs.${id}`)}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Toggle Navigation */}
          <div className="md:hidden mb-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Toggle Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-primary to-secondary text-white"
              >
                <div className="flex items-center space-x-3">
                  {React.createElement(currentTab.icon, { className: "w-5 h-5" })}
                  <span className="font-medium">{t(`resources.tabs.${currentTab.id}`)}</span>
                </div>
                <ChevronDown
                  className={`
                    w-5 h-5 transition-transform duration-300
                    ${isOpen ? 'rotate-180' : 'rotate-0'}
                  `}
                />
              </button>

              {/* Options List */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-100"
                  >
                    {tabs.map((tab) => (
                      <motion.button
                        key={tab.id}
                        onClick={() => {
                          setActiveTab(tab.id);
                          setIsOpen(false);
                        }}
                        className={`
                          w-full px-6 py-4 flex items-center justify-between
                          text-left transition-colors duration-300
                          ${activeTab === tab.id
                            ? 'bg-gray-50'
                            : 'hover:bg-gray-50'
                          }
                          border-b border-gray-100 last:border-b-0
                        `}
                        whileHover={{ x: 10 }}
                      >
                        <div className="flex items-center space-x-3">
                          {React.createElement(tab.icon, {
                            className: `w-5 h-5 ${
                              activeTab === tab.id
                                ? 'text-primary'
                                : 'text-metallic'
                            }`
                          })}
                          <span
                            className={`
                              font-medium
                              ${activeTab === tab.id
                                ? 'text-primary'
                                : 'text-metallic'
                              }
                            `}
                          >
                            {t(`resources.tabs.${tab.id}`)}
                          </span>
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'faqs' && <FAQ />}
              {activeTab === 'guides' && <WorkInProgressMessage />}
              {activeTab === 'videos' && <WorkInProgressMessage />}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}