import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
import enHero from './pages/en/sections/hero.json';
import enHowWeHelp from './pages/en/sections/howWeHelp.json';
import enHowItWorks from './pages/en/sections/howItWorks.json';
import enProblem from './pages/en/sections/problem.json';
import enCaseStudies from './pages/en/sections/caseStudies.json';
import enHomeTestimonials from './pages/en/sections/hometestimonials.json';
import enContact from './pages/en/contact.json';
import enNavigation from './common/en/navigation.json';
import enFooter from './common/en/footer.json';
import enFaq from './pages/en/faq.json';
import enAbout from './pages/en/about.json';
import enAuth from './pages/en/auth.json';
import enPrivacy from './pages/en/privacy.json';
import enTerms from './pages/en/terms.json';
import enRefund from './pages/en/refund.json';
import enServices from './pages/en/services.json';
import enDiscovery from './pages/en/discovery.json';
import enConfirmation from './pages/en/confirmation.json'; // Import confirmation English translations
import enHomeCta from './pages/en/sections/homeCta.json'; // Import homeCta English translations

// Spanish translations
import esHero from './pages/es/sections/hero.json';
import esHowWeHelp from './pages/es/sections/howWeHelp.json';
import esHowItWorks from './pages/es/sections/howItWorks.json';
import esProblem from './pages/es/sections/problem.json';
import esCaseStudies from './pages/es/sections/caseStudies.json';
import esHomeTestimonials from './pages/es/sections/hometestimonials.json';
import esContact from './pages/es/contact.json';
import esServices from './pages/es/services.json';
import esNavigation from './common/es/navigation.json';
import esFooter from './common/es/footer.json';
import esFaq from './pages/es/faq.json';
import esAbout from './pages/es/about.json';
import esAuth from './pages/es/auth.json';
import esPrivacy from './pages/es/privacy.json';
import esTerms from './pages/es/terms.json';
import esRefund from './pages/es/refund.json';
import esServices from './pages/es/services.json';
import esDiscovery from './pages/es/discovery.json';
import esConfirmation from './pages/es/confirmation.json'; // Import confirmation Spanish translations
import esHomeCta from './pages/es/sections/homeCta.json'; // Import homeCta Spanish translations

const resources = {
  en: {
    translation: {
      ...enNavigation,
      ...enFooter,
      ...enHero,
      ...enHowWeHelp,
      ...enHowItWorks,
      ...enCaseStudies,
      homeTestimonials: enHomeTestimonials.testimonials,
      ...enContact,
      ...enFaq,
      ...enAbout,
      ...enAuth,
      ...enPrivacy,
      ...enTerms,
      ...enServices,
      ...enRefund,
      discoveryPage: enDiscovery, // discoveryPage remains nested in translation
      confirmationPage: enConfirmation // Nest confirmationPage under translation
    },
    problem: enProblem, // Assign enProblem to the problem namespace
    'sections/homeCta': enHomeCta // homeCta namespace
  },
  es: {
    translation: {
      ...esNavigation,
      ...esFooter,
      ...esHero,
      ...esHowWeHelp,
      ...esHowItWorks,
      ...esCaseStudies,
      homeTestimonials: esHomeTestimonials.testimonials,
      ...esContact,
      ...esFaq,
      ...esAbout,
      ...esAuth,
      ...esPrivacy,
      ...esTerms,
      ...esServices,
      ...esRefund,
      discoveryPage: esDiscovery, // discoveryPage remains nested in translation
      confirmationPage: esConfirmation // Nest confirmationPage under translation
    },
    problem: esProblem, // Assign esProblem to the problem namespace
    'sections/homeCta': esHomeCta // homeCta namespace
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    },
    ns: [
      'translation',
      'sections/homeCta',
      'problem' // Keep problem namespace here and remove confirmationPage
    ],
    defaultNS: 'translation'
  });

export default i18n;
