import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToContact: true } });
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ block: 'start' });
      }
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();

    if (location.pathname === path) {
      window.scrollTo({ top: 0 });
    } else {
      navigate(path);
      window.scrollTo({ top: 0 });
    }
  };

  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, service: string) => {
    e.preventDefault();
    
    // Navegar a la página de servicios y pasar el estado con la sección a desplazar
    navigate('/services', { state: { scrollToService: service } });
  };

  const services = [
    'clarityStrategy',
    'technicalImplementation',
    'organisationalTransformation'
  ];

  return (
    <footer className="bg-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {/* Company Info */}
          <div>
            <a 
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="text-2xl text-primary mb-6 block font-bold"
            >
              SynthetIQ Partners
            </a>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-primary" />
                <p className="text-metallic">
                  Edinburgh, Madrid, Buenos Aires.
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <a href={`mailto:${t('footer.contact.email')}`} className="text-metallic hover:text-white transition-colors">
                  {t('footer.contact.email')}
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">{t('footer.services.title')}</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="/services"
                    onClick={(e) => handleServiceClick(e, service)}
                    className="text-metallic hover:text-white transition-colors"
                  >
                    {t(`footer.services.${service}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-6">{t('footer.legal.title')}</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href={i18n.language === 'es' ? "/es/privacy" : "/privacy"}
                  onClick={(e) => handleLinkClick(e, i18n.language === 'es' ? "/es/privacy" : "/privacy")}
                  className="text-metallic hover:text-white transition-colors"
                >
                  {t('footer.legal.privacy')}
                </a>
              </li>
              <li>
                <a 
                  href={i18n.language === 'es' ? "/es/terms" : "/terms"}
                  onClick={(e) => handleLinkClick(e, i18n.language === 'es' ? "/es/terms" : "/terms")}
                  className="text-metallic hover:text-white transition-colors"
                >
                  {t('footer.legal.terms')}
                </a>
              </li>
              <li>
                <a 
                  href={i18n.language === 'es' ? "/es/refund" : "/refund"}
                  onClick={(e) => handleLinkClick(e, i18n.language === 'es' ? "/es/refund" : "/refund")}
                  className="text-metallic hover:text-white transition-colors"
                >
                  {t('footer.legal.refund')}
                </a>
              </li>
              <li>
                <a 
                  href="/#contact" 
                  onClick={handleContactClick} 
                  className="text-metallic hover:text-white transition-colors"
                >
                  {t('footer.legal.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-6">{t('footer.social.title')}</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61573548207885#" target="_blank" rel="noopener noreferrer" className="text-metallic hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://x.com/synthetiqp" target="_blank" rel="noopener noreferrer" className="text-metallic hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/synthetiq-partners" target="_blank" rel="noopener noreferrer" className="text-metallic hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/synthetiq_partners/" target="_blank" rel="noopener noreferrer" className="text-metallic hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@SynthetIQPartners" target="_blank" rel="noopener noreferrer" className="text-metallic hover:text-primary transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center text-metallic">
          <p>&copy; {new Date().getFullYear()} SynthetIQ Partners. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}