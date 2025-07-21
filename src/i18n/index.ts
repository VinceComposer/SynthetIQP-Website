import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
import enHero from './pages/en/sections/hero.json';
import enHowWeHelp from './pages/en/sections/howWeHelp.json';
import enHowItWorks from './pages/en/sections/howItWorks.json';
import enProblem from './pages/en/sections/problem.json';
import enCaseStudies from './pages/en/sections/caseStudies.json';
import enTestimonials from './pages/en/sections/testimonials.json';
import enContact from './pages/en/contact.json';
import enNavigation from './common/en/navigation.json';
import enFooter from './common/en/footer.json';
import enFaq from './pages/en/faq.json';
import enAbout from './pages/en/about.json';
import enAuth from './pages/en/auth.json';
import enDashboard from './pages/en/dashboard.json';
import enPrivacy from './pages/en/privacy.json';
import enTerms from './pages/en/terms.json';
import enRefund from './pages/en/refund.json';
import enServices from './pages/en/services.json';
import enDiscovery from './pages/en/discovery.json';
// pricing page removed

// Spanish translations
import esHero from './pages/es/sections/hero.json';
import esHowWeHelp from './pages/es/sections/howWeHelp.json';
import esHowItWorks from './pages/es/sections/howItWorks.json';
import esProblem from './pages/es/sections/problem.json';
import esCaseStudies from './pages/es/sections/caseStudies.json';
import esTestimonials from './pages/es/sections/testimonials.json';
import esContact from './pages/es/contact.json';
import esServices from './pages/es/services.json';
import esNavigation from './common/es/navigation.json';
import esFooter from './common/es/footer.json';
import esFaq from './pages/es/faq.json';
import esAbout from './pages/es/about.json';
import esAuth from './pages/es/auth.json';
import esDashboard from './pages/es/dashboard.json';
import esPrivacy from './pages/es/privacy.json';
import esTerms from './pages/es/terms.json';
import esRefund from './pages/es/refund.json';
import esDiscovery from './pages/es/discovery.json';
// pricing page removed

const resources = {
  en: {
    translation: {
      ...enNavigation,
      ...enFooter,
      ...enHero,
      ...enHowWeHelp,
      ...enHowItWorks,
      ...enProblem,
      ...enCaseStudies,
      ...enTestimonials,
      ...enContact,
      ...enFaq,
      ...enAbout,
      ...enAuth,
      ...enDashboard,
      ...enPrivacy,
      ...enTerms,
      ...enServices,
      ...enRefund,
      ...enDiscovery
      // pricing page removed
    }
  },
  es: {
    translation: {
      ...esNavigation,
      ...esFooter,
      ...esHero,
      ...esHowWeHelp,
      ...esHowItWorks,
      ...esProblem,
      ...esCaseStudies,
      ...esTestimonials,
      ...esContact,
      ...esFaq,
      ...esAbout,
      ...esAuth,
      ...esDashboard,
      ...esPrivacy,
      ...esTerms,
      ...esServices,
      ...esRefund,
      ...esDiscovery
      // pricing page removed
    }
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
    }
  });

export default i18n;