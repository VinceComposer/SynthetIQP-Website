// React is automatically imported by JSX transform
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

// Define types for translation items
interface ServiceItem {
  icon?: string;
  iconColor?: string;
  text: string;
}

interface ServiceSection {
  title: string;
  items: string[];
}

export default function Services() {
  const { t } = useTranslation();
  const [activeStrategyTab, setActiveStrategyTab] = useState(0);
  const [activeImplementationTab, setActiveImplementationTab] = useState(0);
  const [activeTransformationTab, setActiveTransformationTab] = useState(0);

  const strategyTabs = [
    { id: 'tab1', key: 'strategy.tabs.tab1' },
    { id: 'tab2', key: 'strategy.tabs.tab2' },
    { id: 'tab3', key: 'strategy.tabs.tab3' },
  ];

  const implementationTabs = [
    { id: 'tab1', key: 'implementation.tabs.tab1' },
    { id: 'tab2', key: 'implementation.tabs.tab2' },
    { id: 'tab3', key: 'implementation.tabs.tab3' },
  ];

  const transformationTabs = [
    { id: 'tab1', key: 'transformation.tabs.tab1' },
    { id: 'tab2', key: 'transformation.tabs.tab2' },
    { id: 'tab3', key: 'transformation.tabs.tab3' },
    { id: 'tab4', key: 'transformation.tabs.tab4' },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Services Intro Section */}
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-dark">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-center text-metallic mb-12">
              {t('subtitle')}
            </p>
          </section>

          {/* Services Container */}
          <div className="bg-white/60 rounded-2xl p-4 sm:p-8 mb-16 sm:mb-24">
            {/* SERVICE 1: CLARITY AND STRATEGY */}
            <section id="strategy" className="mb-16 sm:mb-24">
              <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg">
                <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4 text-left">
                  {t('steps.step1.title')}
                </h2>
                <p className="text-base md:text-lg text-dark mb-8 text-left">
                  {t('steps.step1.description')}
                </p>

                <div className="mb-8">
                  {/* Desktop tab navigation - visible on sm and above */}
                  <div className="hidden sm:flex items-center justify-center gap-4 mb-6">
                    <div className="flex-grow overflow-hidden">
                      <div className="flex flex-row justify-center gap-4">
                        {strategyTabs.map((tab, index) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveStrategyTab(index)}
                            className={`text-sm md:text-base font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                              activeStrategyTab === index
                                ? 'bg-secondary text-white shadow-md'
                                : 'bg-white text-dark border border-metallic-light/20 hover:bg-gray-50'
                            }`}
                          >
                            {t(`${tab.key}.name`)}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile tab navigation - visible only on xs */}
                  <div className="flex sm:hidden items-center justify-center gap-2 mb-6">
                    <button 
                      onClick={() => setActiveStrategyTab((prev) => (prev > 0 ? prev - 1 : strategyTabs.length - 1))}
                      className="flex-none bg-white text-dark border border-metallic-light/20 rounded-lg p-2"
                      aria-label="Previous tab"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    
                    <div className="flex-grow text-center">
                      <button
                        className="text-sm font-medium py-2 px-4 rounded-lg bg-secondary text-white shadow-md inline-block mx-auto"
                      >
                        {t(`${strategyTabs[activeStrategyTab].key}.name`)}
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => setActiveStrategyTab((prev) => (prev < strategyTabs.length - 1 ? prev + 1 : 0))}
                      className="flex-none bg-white text-dark border border-metallic-light/20 rounded-lg p-2"
                      aria-label="Next tab"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>

                {strategyTabs.map((tab, index) => (
                  <div
                    key={tab.id}
                    className={activeStrategyTab === index ? 'block' : 'hidden'}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-white rounded-lg p-6 shadow-sm border border-metallic-light/10 hover:shadow-md transition-all flex flex-col">
                        <h3 className="text-lg md:text-xl font-bold text-dark mb-2">
                          {t(`${tab.key}.title`)}
                        </h3>
                        <p 
                          className="text-base md:text-lg font-bold mb-4"
                          style={{ color: t(`${tab.key}.priceColor`) || 'var(--color-primary)' }}
                        >
                          {t(`${tab.key}.price`)}
                        </p>
                        <p className="text-sm md:text-base text-dark mb-4 flex-grow">
                          {t(`${tab.key}.description`)}
                        </p>
                        <p className="text-xs md:text-sm text-dark mt-4 bg-gray-50 p-2 rounded-md">
                          <strong>{t('idealFor')}: </strong>
                          <span dangerouslySetInnerHTML={{ __html: t(`${tab.key}.idealFor`) }} />
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                        <p className="font-semibold text-base md:text-lg text-dark mb-3">
                          {t(`${tab.key}.includes.title`)}
                        </p>
                        <ul className="space-y-3 text-sm text-dark">
                          {Array.isArray(t(`${tab.key}.includes.items`, { returnObjects: true })) && (t(`${tab.key}.includes.items`, { returnObjects: true }) as ServiceItem[]).map((item: ServiceItem, i: number) => (
                            <li key={i} className="flex items-start">
                              <span className={`text-${item.iconColor || 'primary'} mr-2 mt-1 flex-shrink-0`}>
                                <Check size={18} />
                              </span>
                              <span dangerouslySetInnerHTML={{ __html: item.text }} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SERVICE 2: TECHNICAL IMPLEMENTATION */}
            <section id="implementation" className="mb-16 sm:mb-24">
              <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg">
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 text-left">
                  {t('steps.step2.title')}
                </h2>
                <p className="text-base md:text-lg text-dark mb-8 text-left">
                  {t('steps.step2.description')}
                </p>

                <div className="bg-gray-50 border-l-4 border-secondary p-6 rounded-lg mb-10 text-left">
                  <h3 className="text-lg md:text-xl font-bold text-dark mb-2">
                    {t('implementation.onboarding.title')}
                  </h3>
                  <p className="text-sm md:text-base text-dark mt-2" dangerouslySetInnerHTML={{ 
                    __html: t('implementation.onboarding.description') 
                  }} />
                  <p className="text-xs md:text-sm font-semibold text-secondary mt-2">
                    {t('implementation.onboarding.note')}
                  </p>
                </div>

                <div className="mb-8">
                  {/* Desktop tab navigation - visible on sm and above */}
                  <div className="hidden sm:flex items-center justify-center gap-4 mb-6">
                    <div className="flex-grow overflow-hidden">
                      <div className="flex flex-row justify-center gap-4">
                        {implementationTabs.map((tab, index) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveImplementationTab(index)}
                            className={`text-sm md:text-base font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                              activeImplementationTab === index
                                ? 'bg-secondary text-white shadow-md'
                                : 'bg-white text-dark border border-metallic-light/20 hover:bg-gray-50'
                            }`}
                          >
                            {t(`${tab.key}.name`)}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile tab navigation - visible only on xs */}
                  <div className="flex sm:hidden items-center justify-center gap-2 mb-6">
                    <button 
                      onClick={() => setActiveImplementationTab((prev) => (prev > 0 ? prev - 1 : implementationTabs.length - 1))}
                      className="flex-none bg-white text-dark border border-metallic-light/20 rounded-lg p-2"
                      aria-label="Previous tab"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    
                    <div className="flex-grow text-center">
                      <button
                        className="text-sm font-medium py-2 px-4 rounded-lg bg-secondary text-white shadow-md inline-block mx-auto"
                      >
                        {t(`${implementationTabs[activeImplementationTab].key}.name`)}
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => setActiveImplementationTab((prev) => (prev < implementationTabs.length - 1 ? prev + 1 : 0))}
                      className="flex-none bg-white text-dark border border-metallic-light/20 rounded-lg p-2"
                      aria-label="Next tab"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>

                {implementationTabs.map((tab, index) => (
                  <div
                    key={tab.id}
                    className={activeImplementationTab === index ? 'block' : 'hidden'}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className={`bg-white rounded-lg p-6 shadow-sm border border-metallic-light/10 hover:shadow-md transition-all flex flex-col ${
                        tab.id === 'tab3' ? 'border-2 border-secondary' : ''
                      }`}>
                        <h3 className={`text-lg md:text-xl font-bold ${tab.id === 'tab3' ? 'text-secondary' : 'text-dark'}`}>
                          {t(`${tab.key}.title`)}
                        </h3>
                        <p className="text-base md:text-lg font-bold mb-4" dangerouslySetInnerHTML={{ 
                          __html: t(`${tab.key}.price`) 
                        }} />
                        <p className="text-sm md:text-base text-dark mb-4 flex-grow">
                          {t(`${tab.key}.description`)}
                        </p>
                        <p className="text-xs md:text-sm text-dark mt-4 bg-gray-50 p-2 rounded-md">
                          <strong>{t('idealFor')}: </strong>
                          <span dangerouslySetInnerHTML={{ __html: t(`${tab.key}.idealFor`) }} />
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                        <h3 className="font-semibold text-base md:text-lg text-dark mb-3">
                          {t(`${tab.key}.includes.title')}
                        </h3>
                        <div className="space-y-4 text-sm md:text-base text-dark">
                          {tab.id === 'tab1' ? (
                            <ul className="list-disc list-inside pl-2 space-y-2">
                              {(t(`${tab.key}.includes.items`, { returnObjects: true }) as string[]).map((item: string, i: number) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                              ))}
                            </ul>
                          ) : (
                            (t(`${tab.key}.includes.sections`, { returnObjects: true }) as ServiceSection[]).map((section: ServiceSection, i: number) => (
                              <div key={i} className="mb-4 last:mb-0">
                                <h4 className="font-semibold mb-1 text-sm md:text-base">{section.title}</h4>
                                <ul className="list-disc list-inside pl-2 space-y-1 text-sm md:text-base">
                                  {section.items.map((item: string, j: number) => (
                                    <li key={j}>{item}</li>
                                  ))
                                  }
                                </ul>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SERVICE 3: ORGANIZATIONAL TRANSFORMATION */}
            <section id="transformation" className="mb-16 sm:mb-24">
              <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg">
                <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4 text-left">
                  {t('steps.step3.title')}
                </h2>
                <p className="text-base md:text-lg text-dark mb-8 text-left">
                  {t('steps.step3.description')}
                </p>

                <div className="mb-8">
                  {/* Desktop tab navigation - visible on sm and above */}
                  <div className="hidden sm:flex items-center justify-center gap-4 mb-6">
                    <div className="flex-grow overflow-hidden">
                      <div className="flex flex-wrap flex-row justify-center gap-4">
                        {transformationTabs.map((tab, index) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTransformationTab(index)}
                            className={`text-sm md:text-base font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                              activeTransformationTab === index
                                ? 'bg-secondary text-white shadow-md'
                                : 'bg-white text-dark border border-metallic-light/20 hover:bg-gray-50'
                            }`}
                          >
                            {t(`transformation.tabs.${tab.id}.name`)}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile tab navigation - visible only on xs */}
                  <div className="flex sm:hidden items-center justify-center gap-2 mb-6">
                    <button 
                      onClick={() => setActiveTransformationTab((prev) => (prev > 0 ? prev - 1 : transformationTabs.length - 1))}
                      className="flex-none bg-white text-dark border border-metallic-light/20 rounded-lg p-2"
                      aria-label="Previous tab"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    
                    <div className="flex-grow text-center">
                      <button
                        className="text-sm font-medium py-2 px-4 rounded-lg bg-secondary text-white shadow-md inline-block mx-auto"
                      >
                        {t(`transformation.tabs.${transformationTabs[activeTransformationTab].id}.name`)}
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => setActiveTransformationTab((prev) => (prev < transformationTabs.length - 1 ? prev + 1 : 0))}
                      className="flex-none bg-white text-dark border border-metallic-light/20 rounded-lg p-2"
                      aria-label="Next tab"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>

                {transformationTabs.map((tab, index) => (
                  <div
                    key={tab.id}
                    className={activeTransformationTab === index ? 'block' : 'hidden'}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-white rounded-lg p-6 shadow-sm border border-metallic-light/10 hover:shadow-md transition-all flex flex-col">
                        <h3 className="text-lg md:text-xl font-bold text-dark mb-3">
                          {t(`transformation.tabs.${tab.id}.title`)}
                        </h3>
                        <p className="text-base md:text-lg font-bold mb-4" dangerouslySetInnerHTML={{ 
                          __html: t(`transformation.tabs.${tab.id}.price`) 
                        }} />
                        <p className="text-sm md:text-base text-dark mb-4 flex-grow">
                          {t(`transformation.tabs.${tab.id}.description`)}
                        </p>
                        <p className="text-xs md:text-sm text-dark mt-4 bg-gray-50 p-2 rounded-md">
                          <strong>{t('idealFor')}: </strong>
                          {t(`transformation.tabs.${tab.id}.idealFor`)}
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                        <h3 className="font-semibold text-base md:text-lg text-dark mb-3">
                          {t(`transformation.tabs.${tab.id}.includes.title`)}
                        </h3>
                        <ul className="space-y-3 text-sm md:text-base text-dark">
                          {Array.isArray(t(`transformation.tabs.${tab.id}.includes.items`, { returnObjects: true })) && (t(`transformation.tabs.${tab.id}.includes.items`, { returnObjects: true }) as ServiceItem[]).map((item: ServiceItem, i: number) => (
                            <li key={i} className="flex items-start">
                              <span className={`text-${item.iconColor || 'primary'} mr-2 mt-1 flex-shrink-0`}>
                                <Check size={18} />
                              </span>
                              <span>{item.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-gray-100">
                <p className="text-sm md:text-base text-primary font-medium mb-2">
                  {t('callToAction.heading')}
                </p>
                <h2 className="text-xl md:text-2xl sm:text-3xl font-bold text-dark mb-4">
                  {t('callToAction.title')}
                </h2>
                <p className="mb-6 text-sm md:text-base text-dark max-w-3xl mx-auto">
                  {t('callToAction.description')}
                </p>
                <a 
                  href="/discovery" 
                  className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors text-sm md:text-base shadow-md hover:shadow-lg"
                >
                  <span className="inline-flex items-center">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 9V5L21 12L14 19V15H3V9H14Z" fill="currentColor"/>
                    </svg>
                    {t('callToAction.button')}
                  </span>
                </a>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
