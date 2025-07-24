import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleLanguage = React.useCallback(() => {
    const newLang = i18n.language.startsWith('en') ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    setIsMenuOpen(false);
  }, [i18n]);

  const currentLanguage = i18n.language.startsWith('en') ? 'EN' : 'ES';
  const alternateLanguage = i18n.language.startsWith('en') ? 'ES' : 'EN';

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
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
    setIsMenuOpen(false);

    if (location.pathname === path) {
      window.scrollTo({ top: 0 });
    } else {
      navigate(path);
      window.scrollTo({ top: 0 });
    }
  };

  const headerStyle = {
    backgroundColor: '#f5f0e6',
    backgroundImage: 'linear-gradient to right, #f5f0e6, rgba(245, 240, 230, 0))',
  };

  return (
    <header className="fixed w-full z-50 border-b border-metallic-light/10" style={headerStyle}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo className="h-10" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={toggleLanguage}
              className="flex items-center text-secondary hover:text-secondary-dark transition-colors"
              type="button"
            >
              <span>{currentLanguage}</span>
            </button>
            <a 
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="text-dark hover:text-primary transition-colors"
            >
              {t('navigation.home')}
            </a>
            <a 
              href="/services"
              onClick={(e) => handleLinkClick(e, '/services')}
              className="text-dark hover:text-primary transition-colors"
            >
              {t('navigation.services')}
            </a>
            <a 
              href="/about"
              onClick={(e) => handleLinkClick(e, '/about')}
              className="text-dark hover:text-primary transition-colors"
            >
              {t('navigation.about')}
            </a>
            <a 
              href="/#contact" 
              onClick={handleContactClick}
              className="text-dark hover:text-primary transition-colors"
            >
              {t('navigation.contact')}
            </a>
            <a 
              href="/faqs"
              onClick={(e) => handleLinkClick(e, '/faqs')}
              className={`text-dark hover:text-primary transition-colors ${
                location.pathname === '/faqs' ? 'text-primary' : ''
              }`}
            >
              {t('navigation.resources')}
            </a>
            <a
              href="/discovery"
              onClick={(e) => handleLinkClick(e, '/discovery')}
              className="btn-primary"
            >
              {t('navigation.clientPortal')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 border-b border-metallic-light/10 py-4" style={{ backgroundColor: '#f5f0e6' }}>
            <div className="flex flex-col space-y-4 px-4">
              <button
                onClick={toggleLanguage}
                className="text-secondary hover:text-secondary-dark transition-colors flex items-center"
                type="button"
              >
                {alternateLanguage}
              </button>
              <a 
                href="/"
                onClick={(e) => handleLinkClick(e, '/')}
                className="text-dark hover:text-primary transition-colors"
              >
                {t('navigation.home')}
              </a>
              <a 
                href="/services"
                onClick={(e) => handleLinkClick(e, '/services')}
                className="text-dark hover:text-primary transition-colors"
              >
                {t('navigation.services')}
              </a>
              <a 
                href="/about"
                onClick={(e) => handleLinkClick(e, '/about')}
                className="text-dark hover:text-primary transition-colors"
              >
                {t('navigation.about')}
              </a>
              <a 
                href="/#contact"
                onClick={handleContactClick}
                className="text-dark hover:text-primary transition-colors"
              >
                {t('navigation.contact')}
              </a>
              <a 
                href="/faqs"
                onClick={(e) => handleLinkClick(e, '/faqs')}
                className={`text-dark hover:text-primary transition-colors ${
                  location.pathname === '/faqs' ? 'text-primary' : ''
                }`}
              >
                {t('navigation.resources')}
              </a>
              <a
                href="/discovery"
                onClick={(e) => handleLinkClick(e, '/discovery')}
                className="btn-primary text-center"
              >
                {t('navigation.clientPortal')}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}