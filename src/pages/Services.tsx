// React is automatically imported by JSX transform
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
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
  const navigate = useNavigate(); // Initialize useNavigate

  // Refs for tab containers to scroll the active tab into view
  const strategyTabsRef = useRef<HTMLDivElement>(null);
  const implementationTabsRef = useRef<HTMLDivElement>(null);
  const transformationTabsRef = useRef<HTMLDivElement>(null);

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

  // Effect to scroll the active strategy tab into view
  useEffect(() => {
    const activeTabElement = strategyTabsRef.current?.querySelector(
      `button:nth-child(${activeStrategyTab + 1})`
    ) as HTMLElement;
    activeTabElement?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });
  }, [activeStrategyTab]);

  // Effect to scroll the active implementation tab into view
  useEffect(() => {
    const activeTabElement = implementationTabsRef.current?.querySelector(
      `button:nth-child(${activeImplementationTab + 1})`
    ) as HTMLElement;
    activeTabElement?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });
  }, [activeImplementationTab]);

  // Effect to scroll the active transformation tab into view
  useEffect(() => {
    const activeTabElement = transformationTabsRef.current?.querySelector(
      `button:nth-child(${activeTransformationTab + 1})`
    ) as HTMLElement;
    activeTabElement?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });
  }, [activeTransformationTab]);

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
                  
                  {/* Mobile tab navigation - Scrollable Carousel */}
                  <div className="flex sm:hidden overflow-x-auto whitespace-nowrap mb-6 scrollbar-hide" ref={strategyTabsRef}> {/* Added scrollbar-hide and ref */}
                    <div className="inline-flex gap-4 pb-2 px-2">
                      {strategyTabs.map((tab, index) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveStrategyTab(index)}
                          className={`flex-shrink-0 text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
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
                  
                  {/* Mobile tab navigation - Scrollable Carousel */}
                  <div className="flex sm:hidden overflow-x-auto whitespace-nowrap mb-6 scrollbar-hide" ref={implementationTabsRef}> {/* Added scrollbar-hide and ref */}
                    <div className="inline-flex gap-4 pb-2 px-2">
                      {implementationTabs.map((tab, index) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveImplementationTab(index)}
                          className={`flex-shrink-0 text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
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
                          {t(`${tab.key}.includes.title`)}
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
                            className={`flex-shrink-0 text-sm md:text-base font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                              activeTransformationTab === index
                                ? 'bg-primary text-white shadow-md'
                                : 'bg-white text-dark border border-metallic-light/20 hover:bg-gray-50'
                            }`}
                          >
                            {t(`${tab.key}.name`)}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile tab navigation - Scrollable Carousel */}
                  <div className="flex sm:hidden overflow-x-auto whitespace-nowrap mb-6 scrollbar-hide" ref={transformationTabsRef}> {/* Added scrollbar-hide and ref */}
                    <div className="inline-flex gap-4 pb-2 px-2">
                      {transformationTabs.map((tab, index) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTransformationTab(index)}
                          className={`flex-shrink-0 text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                            activeTransformationTab === index
                              ? 'bg-primary text-white shadow-md'
                              : 'bg-white text-dark border border-metallic-light/20 hover:bg-gray-50'
                          }`}
                        >
                          {t(`${tab.key}.name`)}
                        </button>
                      ))}
                    </div>
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
                  href="/discovery" // Keep href for accessibility
                  className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors text-sm md:text-base shadow-md hover:shadow-lg"
                  onClick={handleCtaClick} // Add onClick handler
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
