import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Users, LineChart, Layout, Headphones, GraduationCap, ArrowRight, Check, ChevronLeft, ChevronRight, MessageSquare, Building2, Briefcase, Monitor, Headset } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Popup from '../components/Popup';

const services = [
  {
    icon: Bot,
    key: 'professionalAgents',
    features: ['automation', 'efficiency', 'integration', 'customization']
  },
  {
    icon: Users,
    key: 'userAgents',
    features: ['engagement', 'support', 'personalization', 'analytics']
  },
  {
    icon: LineChart,
    key: 'consulting',
    features: ['strategy', 'implementation', 'training', 'optimization']
  },
  {
    icon: Layout,
    key: 'aioplatform',
    features: ['tools', 'automation', 'analytics', 'support']
  },
  {
    icon: Headphones,
    key: 'virtualstaff',
    features: ['setup', 'management', 'optimization', 'support']
  },
  {
    icon: GraduationCap,
    key: 'education',
    features: ['courses', 'resources', 'workshops', 'certification']
  }
];

// Define the hardcoded pricing plans as fallback
const defaultPricingPlans = [
  {
    key: 'consulting',
    icon: 'MessageSquare',
    price: '120',
    period: '/h',
    description: "Still Unsure on how to Implement AI? Let's Talk.\nIf you have questions about how AI can be implemented, or how we work, or whether AI Agents fit your business... Schedule an Free Consultation Call with one of our key team members.",
    cta: 'Book a Call',
    highlight: false,
    group: 1
  },
  {
    key: 'business',
    icon: 'Briefcase',
    price: '5000',
    period: '/mo',
    features: [
      { name: 'Personalised roadmap development', key: 'roadmap', included: true },
      { name: 'Custom AI Agent development', key: 'development', included: true },
      { name: 'Dedicated Project Manager', key: 'manager', included: true },
      { name: 'Private Communication Channel', key: 'communication', included: true },
      { name: '1-2 weeks/agent avg. delivery time', key: 'delivery', included: true },
      { name: 'Continuous Optimization and Support', key: 'support', included: true },
      { name: 'Multiple AI Agent projects simultaneously', key: 'multiple', included: false }
    ],
    cta: 'Get Started',
    highlight: true,
    group: 1
  },
  {
    key: 'enterprise',
    icon: 'Building2',
    price: 'Custom',
    period: ' Price',
    features: [
      { name: 'Personalised roadmap development', key: 'roadmap', included: true },
      { name: 'Custom AI Agent development', key: 'development', included: true },
      { name: 'Dedicated Project Manager', key: 'manager', included: true },
      { name: 'Private Communication Channel', key: 'communication', included: true },
      { name: '1-2 weeks/agent avg. delivery time', key: 'delivery', included: true },
      { name: 'Continuous Optimization and Support', key: 'support', included: true },
      { name: 'Multiple AI Agent projects simultaneously', key: 'multiple', included: true }
    ],
    cta: 'Get Quote',
    highlight: false,
    group: 1
  },
  {
    key: 'AIO Platform',
    icon: 'Monitor',
    price: '120',
    period: '/mo',
    features: [
      { name: 'Full platform access', key: 'roadmap', included: true },
      { name: 'Advanced analytics dashboard', key: 'development', included: true },
      { name: 'Create Membership areas', key: 'manager', included: true },
      { name: 'Custom integrations', key: 'communication', included: true },
      { name: 'Create unlimited Automations', key: 'delivery', included: true },
      { name: '24/7 Technical support', key: 'support', included: true },
      { name: 'Manage leads, websites, funnels, calendars and many other services', key: 'multiple', included: true }
    ],
    cta: 'Get Started',
    highlight: true,
    group: 2
  },
  {
    key: 'Virtual Staff',
    icon: 'Headset',
    price: '60',
    period: '/hr',
    features: [
      { name: 'Dedicated virtual staff', key: 'roadmap', included: true },
      { name: 'AIO Platform setup and management', key: 'development', included: true },
      { name: 'Client Conversion process optimization', key: 'manager', included: true },
      { name: 'Marketing tools optimization', key: 'communication', included: true },
      { name: 'Regular performance reports', key: 'delivery', included: true },
      { name: 'Custom automation setup +$60/Hr', key: 'support', included: true },
      { name: 'Easy switching from other tools and importing your business data', key: 'multiple', included: true }
    ],
    cta: 'Hire',
    highlight: false,
    group: 2
  }
];

const iconMap = {
  MessageSquare,
  Briefcase,
  Building2,
  Monitor,
  Headset
};

export default function Services() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isGetStartedPopupOpen, setIsGetStartedPopupOpen] = useState(false);
  const [isGetQuotePopupOpen, setIsGetQuotePopupOpen] = useState(false);
  const [isAIOPlatformPopupOpen, setIsAIOPlatformPopupOpen] = useState(false);
  const [isVirtualStaffPopupOpen, setIsVirtualStaffPopupOpen] = useState(false);
  const [isComenzarPopupOpen, setIsComenzarPopupOpen] = useState(false);
  const [isObtenerCotizacionPopupOpen, setIsObtenerCotizacionPopupOpen] = useState(false);
  const [isPlataformaAIOPopupOpen, setIsPlataformaAIOPopupOpen] = useState(false);
  const [isPersonalVirtualPopupOpen, setIsPersonalVirtualPopupOpen] = useState(false);

  // Function to get the correct title for a pricing plan
  const getPlanTitle = (planKey) => {
    // Direct mapping for known plan keys
    const titleMap = {
      en: {
        'consulting': 'Consulting',
        'business': 'Business',
        'enterprise': 'Enterprise',
        'AIO Platform': 'AIO Platform',
        'Virtual Staff': 'Virtual Staff'
      },
      es: {
        'consulting': 'Consultoría',
        'business': 'Negocios',
        'enterprise': 'Empresarial',
        'AIO Platform': 'Plataforma AIO',
        'Virtual Staff': 'Personal Virtual'
      }
    };
    
    // Get the title from the map or fall back to the plan's title property
    return titleMap[i18n.language]?.[planKey] || 
           (i18n.language === 'en' ? titleMap.en[planKey] : titleMap.es[planKey]) || 
           planKey;
  };

  useEffect(() => {
    try {
      // Load pricing plans from translations
      const translatedPlans = t('pricing.plans', { returnObjects: true });
      
      // Check if we got a valid array of plans
      if (translatedPlans && Array.isArray(translatedPlans) && translatedPlans.length > 0) {
        console.log('Loaded translated pricing plans:', translatedPlans);
        
        // Map the translated plans to ensure all required properties are present
        const processedPlans = translatedPlans.map(plan => {
          // Ensure each plan has all required properties, falling back to defaults if needed
          const defaultPlan = defaultPricingPlans.find(dp => dp.key === plan.key) || defaultPricingPlans[0];
          
          // Process features to ensure they have the correct structure
          let processedFeatures = defaultPlan.features;
          
          if (plan.features && Array.isArray(plan.features)) {
            processedFeatures = plan.features.map((feature, idx) => {
              // Ensure each feature has the correct structure
              if (typeof feature === 'object' && feature !== null) {
                // If the feature has a name property, use it
                if (feature.name) {
                  return {
                    name: feature.name,
                    key: feature.key || '',
                    included: feature.included !== undefined ? feature.included : true
                  };
                }
                
                // If the feature has a key property, look up the name from pricing.features
                if (feature.key) {
                  return {
                    name: t(`pricing.features.${feature.key}`, 
                         (defaultPlan.features[idx] && defaultPlan.features[idx].name) || feature.key),
                    key: feature.key,
                    included: feature.included !== undefined ? feature.included : true
                  };
                }
                
                // Fallback to default plan feature
                return defaultPlan.features[idx] || { 
                  name: '', 
                  key: '',
                  included: true 
                };
              } else {
                // If feature is just a string or malformed, use default structure
                return defaultPlan.features[idx] || { 
                  name: String(feature), 
                  key: '',
                  included: true 
                };
              }
            });
          }
          
          return {
            ...defaultPlan,
            ...plan,
            features: processedFeatures,
            // Use translation for description if available
            description: plan.description || defaultPlan.description
          };
        });
        
        // setPricingPlans(processedPlans);
      } else {
        console.warn('Invalid pricing plans format from translations, using defaults');
        // setPricingPlans(defaultPricingPlans);
      }
    } catch (error) {
      console.error("Error loading translated pricing plans:", error);
      // setPricingPlans(defaultPricingPlans);
    }
    
    // Reset the current indices when language changes
    // setCurrentPricingGroup(1);
    // setCurrentMobilePricingIndex(0);
  }, [t, i18n.language]);

  const nextService = () => {
    setCurrentServiceIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevService = () => {
    setCurrentServiceIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleScheduleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

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

  const handlePersonalVirtualClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPersonalVirtualPopupOpen(true);
  };

  const handleLearnMore = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/resources');
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="pt-32 pb-20">
      {/* Services Section */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
            {t('services.title')}
          </h1>
          <p className="text-xl text-metallic">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Rest of the services section stays the same */}
        {/* Desktop Carousel */}
        <div className="hidden md:block relative max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <div className="grid md:grid-cols-2 gap-8">
              {[0, 1].map((offset) => {
                const index = (currentServiceIndex + offset) % services.length;
                const Service = services[index];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ delay: offset * 0.2 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group border border-metallic-light/10 flex flex-col h-[500px]"
                  >
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                        <Service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-dark">
                        {t(`services.${Service.key}.title`)}
                      </h3>
                      <p className="text-metallic mb-6">
                        {t(`services.${Service.key}.description`)}
                      </p>
                    </div>

                    <div className="space-y-3 mb-8 flex-grow">
                      {Service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-metallic-dark">
                            {t(`services.${Service.key}.features.${feature}`)}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="#"
                      onClick={handleLearnMore}
                      className="inline-flex items-center text-primary hover:text-primary-dark transition-colors group mt-auto"
                    >
                      <span className="font-semibold">{t('services.learnMore')}</span>
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </AnimatePresence>

          {/* Desktop Navigation Buttons */}
          <button
            onClick={prevService}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors border border-metallic-light/10 z-10"
            aria-label="Previous services"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={nextService}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors border border-metallic-light/10 z-10"
            aria-label="Next services"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {services.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentServiceIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative max-w-sm mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentServiceIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group border border-metallic-light/10 min-h-[500px] flex flex-col"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    {React.createElement(services[currentServiceIndex].icon, {
                      className: "w-8 h-8 text-primary group-hover:text-white transition-colors"
                    })}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-dark">
                    {t(`services.${services[currentServiceIndex].key}.title`)}
                  </h3>
                  <p className="text-metallic mb-6">
                    {t(`services.${services[currentServiceIndex].key}.description`)}
                  </p>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  {services[currentServiceIndex].features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-metallic-dark">
                        {t(`services.${services[currentServiceIndex].key}.features.${feature}`)}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#"
                  onClick={handleLearnMore}
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors group mt-auto"
                >
                  <span className="font-semibold">{t('services.learnMore')}</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </AnimatePresence>

            {/* Floating Navigation Buttons */}
            <button
              onClick={prevService}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors border border-metallic-light/10 z-10"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={nextService}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors border border-metallic-light/10 z-10"
              aria-label="Next service"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {services.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentServiceIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            onClick={handleScheduleClick}
            className="btn-primary"
          >
            {t('hero.cta.contact')}
          </a>
        </motion.div>
      </div>

      {/* Pricing Section - Removed as requested */}
      {/* The pricing section has been removed so that only services are visible on this page */}

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
        message={t('contact.inProgress.comenzar')}
      />
      <Popup
        isOpen={isObtenerCotizacionPopupOpen}
        onClose={() => setIsObtenerCotizacionPopupOpen(false)}
        title={t('contact.inProgress.title')}
        message={t('contact.inProgress.obtenerCotizacion')}
      />
      <Popup
        isOpen={isPlataformaAIOPopupOpen}
        onClose={() => setIsPlataformaAIOPopupOpen(false)}
        title={t('contact.inProgress.title')}
        message={t('contact.inProgress.plataformaAIO')}
      />
      <Popup
        isOpen={isPersonalVirtualPopupOpen}
        onClose={() => setIsPersonalVirtualPopupOpen(false)}
        title={t('contact.inProgress.title')}
        message={t('contact.inProgress.personalVirtual')}
      />
    </div>
  );
}