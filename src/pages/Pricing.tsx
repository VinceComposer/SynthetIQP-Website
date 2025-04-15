import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Briefcase, Building2, Monitor, Headset, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import Popup from '../components/Popup';

// Import the JSON files
import enPricing from '../i18n/pages/en/pricing.json';
import esPricing from '../i18n/pages/es/pricing.json';

const iconMap = {
  MessageSquare,
  Briefcase,
  Building2,
  Monitor,
  Headset
};

const Pricing = () => {
  const { t, i18n } = useTranslation();
  const [pricingPlans, setPricingPlans] = useState([]);
  const [currentPricingGroup, setCurrentPricingGroup] = useState(1);
  const [currentMobilePricingIndex, setCurrentMobilePricingIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isGetStartedPopupOpen, setIsGetStartedPopupOpen] = useState(false);
  const [isGetQuotePopupOpen, setIsGetQuotePopupOpen] = useState(false);
  const [isAIOPlatformPopupOpen, setIsAIOPlatformPopupOpen] = useState(false);
  const [isVirtualStaffPopupOpen, setIsVirtualStaffPopupOpen] = useState(false);
  const [isComenzarPopupOpen, setIsComenzarPopupOpen] = useState(false);
  const [isObtenerCotizacionPopupOpen, setIsObtenerCotizacionPopupOpen] = useState(false);
  const [isPlataformaAIOPopupOpen, setIsPlataformaAIOPopupOpen] = useState(false);
  const [isContratarPopupOpen, setIsContratarPopupOpen] = useState(false);
  const [showAllPlans, setShowAllPlans] = useState(false);

  useEffect(() => {
    try {
      // Load the appropriate pricing content based on the current language
      const pricingContent = i18n.language === 'es' ? esPricing.pricing : enPricing.pricing;
      console.log('Loaded pricing content:', pricingContent);
      
      if (pricingContent && pricingContent.plans) {
        // For Spanish version, convert feature names to use keys for consistent styling
        if (i18n.language === 'es') {
          const updatedPlans = pricingContent.plans.map(plan => {
            if (plan.features) {
              // Map feature names to keys where possible
              plan.features = plan.features.map(feature => {
                if (feature.name) {
                  // Business plan
                  if (plan.key === 'business') {
                    if (feature.name.includes('hoja de ruta')) return { key: 'roadmap', included: feature.included };
                    if (feature.name.includes('agentes IA personalizados')) return { key: 'development', included: feature.included };
                    if (feature.name.includes('Gerente de Proyecto')) return { key: 'manager', included: feature.included };
                    if (feature.name.includes('Canal de Comunicación')) return { key: 'communication', included: feature.included };
                    if (feature.name.includes('tiempo promedio de entrega')) return { key: 'delivery', included: feature.included };
                    if (feature.name.includes('Optimización y Soporte')) return { key: 'support', included: feature.included };
                    if (feature.name.includes('Múltiples proyectos')) return { key: 'multiple', included: feature.included };
                  }
                  // Enterprise plan
                  if (plan.key === 'enterprise') {
                    if (feature.name.includes('hoja de ruta')) return { key: 'roadmap', included: feature.included };
                    if (feature.name.includes('agentes IA personalizados')) return { key: 'development', included: feature.included };
                    if (feature.name.includes('Gerente de Proyecto')) return { key: 'manager', included: feature.included };
                    if (feature.name.includes('Canal de Comunicación')) return { key: 'communication', included: feature.included };
                    if (feature.name.includes('tiempo promedio de entrega')) return { key: 'delivery', included: feature.included };
                    if (feature.name.includes('Optimización y Soporte')) return { key: 'support', included: feature.included };
                    if (feature.name.includes('Múltiples proyectos')) return { key: 'multiple', included: feature.included };
                  }
                }
                return feature;
              });
            }
            return plan;
          });
          setPricingPlans(updatedPlans);
        } else {
          setPricingPlans(pricingContent.plans);
        }
      } else {
        console.error('Pricing plans not found in the JSON file');
        setPricingPlans([]);
      }
    } catch (error) {
      console.error('Error loading pricing content:', error);
      setPricingPlans([]);
    }
    setCurrentPricingGroup(1);
    setCurrentMobilePricingIndex(0);
  }, [i18n.language]);

  // Filter plans by group for desktop view only
  const currentGroupPlans = pricingPlans.filter(plan => plan.group === currentPricingGroup) || [];

  // Button handlers
  const handleGetStartedClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsGetStartedPopupOpen(true);
  };

  const handleGetQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsGetQuotePopupOpen(true);
  };

  const handleAIOPlatformClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAIOPlatformPopupOpen(true);
  };

  const handleVirtualStaffClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsVirtualStaffPopupOpen(true);
  };

  const handleComenzarClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsComenzarPopupOpen(true);
  };

  const handleObtenerCotizacionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsObtenerCotizacionPopupOpen(true);
  };

  const handlePlataformaAIOClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPlataformaAIOPopupOpen(true);
  };

  const handleBookACallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  const handleAgendarLlamadaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  const handleContratarClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContratarPopupOpen(true);
  };

  const nextMobilePricing = () => {
    setCurrentMobilePricingIndex((prev) => (prev === pricingPlans.length - 1 ? 0 : prev + 1));
  };

  const prevMobilePricing = () => {
    setCurrentMobilePricingIndex((prev) => (prev === 0 ? pricingPlans.length - 1 : prev - 1));
  };

  return (
    <div className="pt-16 pb-20">
      <div className="container mx-auto px-4 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
            {i18n.language === 'es' ? esPricing.pricing.title : enPricing.pricing.title}
          </h2>
          <p className="text-xl text-metallic">
            {i18n.language === 'es' ? esPricing.pricing.subtitle : enPricing.pricing.subtitle}
          </p>
        </motion.div>

        {currentGroupPlans.length > 0 && (
          <>
            <div className="hidden md:block relative max-w-7xl mx-auto">
              <AnimatePresence mode="wait">
                <div className="flex justify-center gap-8">
                  {currentGroupPlans.map((plan, index) => {
                    const Icon = plan.icon && iconMap[plan.icon as keyof typeof iconMap] ? iconMap[plan.icon as keyof typeof iconMap] : MessageSquare;
                    
                    return (
                      <motion.div
                        key={plan.key || index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`w-full bg-dark rounded-3xl p-8 ${plan.highlight ? 'border-2 border-[#FFD700]' : ''}`}
                      >
                        <div className="flex flex-col h-full">
                          <div className="text-center mb-8">
                            <h3 className="text-white text-2xl font-bold mb-2">
                              {plan.title}
                            </h3>
                            <div className="flex items-center justify-center mb-2">
                              {plan.price !== 'Custom' && plan.price !== 'Precio' && <span className="text-white text-lg">$</span>}
                              <span className="text-white text-4xl font-bold">{plan.price}</span>
                              <span className="text-white text-lg">
                                {i18n.language === 'es' && plan.price === 'Precio' ? ' Personalizado' : plan.period}
                              </span>
                            </div>
                            {plan.description && (
                              <p className="text-white text-sm mt-4">
                                {plan.description}
                              </p>
                            )}
                          </div>

                          <div className="flex-grow space-y-4">
                            {plan.features && plan.features.length > 0 && (
                              <ul className="text-white space-y-2">
                                {plan.features.map((feature, idx) => {
                                  // Skip the "multiple" feature for the Business plan in full-screen version
                                  if (plan.key === 'business' && (feature.key === 'multiple' || feature.name?.includes('Múltiples proyectos'))) {
                                    return null;
                                  }
                                  return (
                                    <li key={idx} className="flex items-center">
                                      <Icon className="w-5 h-5 mr-3 text-[#FFD700]" />
                                      {feature.key ? 
                                        (i18n.language === 'es' ? esPricing.pricing.features[feature.key] : enPricing.pricing.features[feature.key]) 
                                        : feature.name}
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                            {plan.additionalFeatures && plan.additionalFeatures.length > 0 && (
                              <ul className="text-white space-y-2">
                                {plan.additionalFeatures.map((feature, idx) => (
                                  <li key={idx} className="flex items-center">
                                    <Icon className="w-5 h-5 mr-3 text-[#FFD700]" />
                                    {feature.key ? 
                                      (i18n.language === 'es' ? esPricing.pricing.features[feature.key] : enPricing.pricing.features[feature.key]) 
                                      : feature.name}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>

                          <div className="mt-8">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                if (plan.key === 'AIO Platform' && plan.cta === 'Get Started') {
                                  handleAIOPlatformClick(e);
                                } else if (plan.key === 'Virtual Staff' && plan.cta === 'Hire') {
                                  handleVirtualStaffClick(e);
                                } else if (plan.key === 'business' && plan.cta === 'Comenzar') {
                                  handleComenzarClick(e);
                                } else if (plan.key === 'enterprise' && plan.cta === 'Obtener Cotización') {
                                  handleObtenerCotizacionClick(e);
                                } else if (plan.key === 'AIO Platform' && plan.cta === 'Comenzar') {
                                  handlePlataformaAIOClick(e);
                                } else if (plan.key === 'Virtual Staff' && plan.cta === 'Contratar') {
                                  handleContratarClick(e);
                                } else if (plan.cta === 'Get Started') {
                                  handleGetStartedClick(e);
                                } else if (plan.cta === 'Get Quote') {
                                  handleGetQuoteClick(e);
                                } else {
                                  setIsPopupOpen(true); // Fallback action
                                }
                              }}
                              className={`
                                w-full py-4 rounded-xl mt-8 font-semibold transition-colors
                                ${plan.highlight
                                  ? 'bg-[#FFD700] text-dark hover:bg-[#FFE55C]'
                                  : 'bg-white text-dark hover:bg-gray-100'
                                }
                              `}
                            >
                              {plan.cta}
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </AnimatePresence>

              <button
                onClick={() => setCurrentPricingGroup(prev => (prev === 1 ? 2 : 1))}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors border border-metallic-light/10 z-10"
                aria-label="Previous pricing group"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>
              <button
                onClick={() => setCurrentPricingGroup(prev => (prev === 1 ? 2 : 1))}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors border border-metallic-light/10 z-10"
                aria-label="Next pricing group"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>

              <div className="flex justify-center space-x-2 mt-6">
                <div className={`w-2 h-2 rounded-full transition-colors ${currentPricingGroup === 1 ? 'bg-[#FFD700]' : 'bg-gray-600'}`} />
                <div className={`w-2 h-2 rounded-full transition-colors ${currentPricingGroup === 2 ? 'bg-[#FFD700]' : 'bg-gray-600'}`} />
              </div>
            </div>

            <div className="md:hidden relative max-w-sm mx-auto">
              <AnimatePresence mode="wait">
                {pricingPlans[currentMobilePricingIndex] && (
                  <motion.div
                    key={pricingPlans[currentMobilePricingIndex].key || currentMobilePricingIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className={`w-full bg-dark rounded-3xl p-6 min-h-[550px] relative ${pricingPlans[currentMobilePricingIndex].highlight ? 'border-2 border-[#FFD700]' : ''}`}
                  >
                    <div className="flex flex-col justify-center h-full pb-16">
                      <div>
                        <div className="text-center mb-5">
                          <h3 className="text-white text-2xl font-bold mb-2">
                            {pricingPlans[currentMobilePricingIndex].title}
                          </h3>
                          <div className="flex items-center justify-center mb-2">
                            {pricingPlans[currentMobilePricingIndex].price !== 'Custom' && pricingPlans[currentMobilePricingIndex].price !== 'Precio' && <span className="text-white text-lg">$</span>}
                            <span className="text-white text-4xl font-bold">{pricingPlans[currentMobilePricingIndex].price}</span>
                            <span className="text-white text-lg">
                              {i18n.language === 'es' && pricingPlans[currentMobilePricingIndex].price === 'Precio' ? ' Personalizado' : pricingPlans[currentMobilePricingIndex].period}
                            </span>
                          </div>
                          {pricingPlans[currentMobilePricingIndex].description && (
                            <p className="text-white text-sm mt-3 whitespace-pre-line">
                              {pricingPlans[currentMobilePricingIndex].description}
                            </p>
                          )}
                        </div>

                        <div className="space-y-3">
                          {pricingPlans[currentMobilePricingIndex].features && pricingPlans[currentMobilePricingIndex].features.map((feature, idx) => {
                            // Skip the "multiple" feature for the Business plan
                            if (pricingPlans[currentMobilePricingIndex].key === 'business' && (feature.key === 'multiple' || feature.name?.includes('Múltiples proyectos'))) {
                              return null;
                            }
                            
                            // Get the appropriate icon
                            const Icon = pricingPlans[currentMobilePricingIndex].icon && 
                              iconMap[pricingPlans[currentMobilePricingIndex].icon as keyof typeof iconMap] ? 
                              iconMap[pricingPlans[currentMobilePricingIndex].icon as keyof typeof iconMap] : 
                              Check;
                            
                            return (
                              <div
                                key={idx}
                                className={`flex items-center ${
                                  feature.included ? 'text-white' : 'text-gray-500 line-through'
                                }`}
                              >
                                <Icon className={`w-5 h-5 min-w-[20px] mr-3 text-[#FFD700] flex-shrink-0 ${!feature.included && 'text-gray-500'}`} />
                                <span className="text-sm md:text-base">{feature.key ? (i18n.language === 'es' ? esPricing.pricing.features[feature.key] : enPricing.pricing.features[feature.key]) : feature.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          const plan = pricingPlans[currentMobilePricingIndex];
                          if (i18n.language === 'en') {
                            if (plan.key === 'consulting') {
                              handleBookACallClick(e);
                            } else if (plan.key === 'business') {
                              handleGetStartedClick(e);
                            } else if (plan.key === 'enterprise') {
                              handleGetQuoteClick(e);
                            } else if (plan.key === 'AIO Platform') {
                              handleAIOPlatformClick(e);
                            } else if (plan.key === 'Virtual Staff') {
                              handleVirtualStaffClick(e);
                            }
                          } else {
                            if (plan.key === 'consulting') {
                              handleAgendarLlamadaClick(e);
                            } else if (plan.key === 'business') {
                              handleComenzarClick(e);
                            } else if (plan.key === 'enterprise') {
                              handleObtenerCotizacionClick(e);
                            } else if (plan.key === 'AIO Platform') {
                              handlePlataformaAIOClick(e);
                            } else if (plan.key === 'Virtual Staff') {
                              handleContratarClick(e);
                            }
                          }
                        }}
                        className={`
                          w-full py-4 rounded-xl font-semibold transition-colors
                          ${pricingPlans[currentMobilePricingIndex].highlight
                            ? 'bg-[#FFD700] text-dark hover:bg-[#FFE55C]'
                            : 'bg-white text-dark hover:bg-gray-100'
                          }
                        `}
                      >
                        {pricingPlans[currentMobilePricingIndex].cta}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile Navigation Buttons */}
              <div className="absolute w-full top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
                <button
                  onClick={prevMobilePricing}
                  className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors border border-metallic-light/10 z-10 pointer-events-auto -ml-4"
                  aria-label="Previous pricing plan"
                >
                  <ChevronLeft className="w-6 h-6 text-primary" />
                </button>
                <button
                  onClick={nextMobilePricing}
                  className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors border border-metallic-light/10 z-10 pointer-events-auto -mr-4"
                  aria-label="Next pricing plan"
                >
                  <ChevronRight className="w-6 h-6 text-primary" />
                </button>
              </div>

              {/* Mobile Dots Navigation */}
              <div className="flex justify-center space-x-2 mt-6">
                {pricingPlans.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentMobilePricingIndex ? 'bg-[#FFD700]' : 'bg-gray-600'
                    }`}
                    onClick={() => setCurrentMobilePricingIndex(index)}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title={t('contact.inProgress.title')}
        message={t('contact.inProgress.schedule')}
      />
      <Popup
        isOpen={isGetStartedPopupOpen}
        onClose={() => setIsGetStartedPopupOpen(false)}
        title={t('contact.inProgress.title')}
        message={t('contact.inProgress.getStarted')}
      />
      <Popup
        isOpen={isGetQuotePopupOpen}
        onClose={() => setIsGetQuotePopupOpen(false)}
        title={t('contact.inProgress.title')}
        message={t('contact.inProgress.getQuote')}
      />
      <Popup
        isOpen={isAIOPlatformPopupOpen}
        onClose={() => setIsAIOPlatformPopupOpen(false)}
        title={t('contact.inProgress.title')}
        message={t('contact.inProgress.AIOPlatform')}
      />
      <Popup
        isOpen={isVirtualStaffPopupOpen}
        onClose={() => setIsVirtualStaffPopupOpen(false)}
        title={t('contact.inProgress.title')}
        message={t('contact.inProgress.VirtualStaff')}
      />
      <Popup
        isOpen={isComenzarPopupOpen}
        onClose={() => setIsComenzarPopupOpen(false)}
        title={t('contact.inProgress.title')}
        message={t('contact.inProgress.getStarted')}
      />
      <Popup
        isOpen={isObtenerCotizacionPopupOpen}
        onClose={() => setIsObtenerCotizacionPopupOpen(false)}
        title={t('contact.inProgress.title')}
        message={t('contact.inProgress.getQuote')}
      />
      <Popup
        isOpen={isPlataformaAIOPopupOpen}
        onClose={() => setIsPlataformaAIOPopupOpen(false)}
        title={t('contact.inProgress.title')}
        message={t('contact.inProgress.AIOPlatform')}
      />
      <Popup
        isOpen={isContratarPopupOpen}
        onClose={() => setIsContratarPopupOpen(false)}
        title={t('contact.inProgress.title')}
        message={t('contact.inProgress.VirtualStaff')}
      />
    </div>
  );
};

export default Pricing;
