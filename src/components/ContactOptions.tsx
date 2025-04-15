import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Calendar, Send } from 'lucide-react';
import Popup from './Popup';
import ContactFormPopup from './ContactFormPopup';
import { Link } from 'react-router-dom';
import { sendContactForm } from '../services/emailService';

type ActionType = 'call' | 'chat' | 'schedule';

export default function ContactOptions() {
  const { t, i18n } = useTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isContactFormPopupOpen, setIsContactFormPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState({
    title: '',
    message: ''
  });
  const [contactFormPopupMessage, setContactFormPopupMessage] = useState({
    title: '',
    message: '',
    isError: false
  });
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFeatureClick = (actionType: ActionType) => (e: React.MouseEvent) => {
    e.preventDefault();
    setPopupMessage({
      title: t('contact.inProgress.title'),
      message: t(`contact.inProgress.${actionType}`)
    });
    setIsPopupOpen(true);
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'firstName':
        return value.trim() === '' ? 'This field is required' : '';
      case 'lastName':
        return value.trim() === '' ? 'This field is required' : '';
      case 'email':
        if (value.trim() === '') return 'This field is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'phone':
        // Phone is optional and no validation is applied
        return '';
      case 'message':
        return value.trim() === '' ? 'This field is required' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: validateField(name, value) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      firstName: validateField('firstName', formData.firstName),
      lastName: validateField('lastName', formData.lastName),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message)
    };
    
    setFormErrors(newErrors);
    
    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    
    if (!hasErrors && privacyConsent) {
      // Form is valid and privacy policy is accepted
      setIsSubmitting(true);
      
      try {
        // Send the form data to the email service
        const result = await sendContactForm({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        });
        
        if (result.success) {
          // Show success message
          setContactFormPopupMessage({
            title: t('contact.confirmation.title'),
            message: t('contact.confirmation.message'),
            isError: false
          });
          
          // Reset form
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
          });
          
          setPrivacyConsent(false);
        } else {
          // Show error message
          setContactFormPopupMessage({
            title: 'Error',
            message: result.message,
            isError: true
          });
        }
        
        setIsContactFormPopupOpen(true);
      } catch (error) {
        console.error('Error submitting form:', error);
        setContactFormPopupMessage({
          title: 'Error',
          message: 'An unexpected error occurred. Please try again later.',
          isError: true
        });
        setIsContactFormPopupOpen(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const isFormValid = () => {
    // Check if required fields are filled and no errors exist
    return (
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.message.trim() !== '' &&
      !Object.values(formErrors).some(error => error !== '') &&
      privacyConsent
    );
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-metallic">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-dark">{t('contact.email.title')}</h3>
                <a href={`mailto:${t('contact.email.value')}`} className="text-metallic hover:text-primary transition-colors">
                  {t('contact.email.value')}
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-dark">{t('contact.call.title')}</h3>
                <p className="text-metallic mb-2">{t('contact.call.description')}</p>
                <a href="#" onClick={handleFeatureClick('call')} className="text-primary hover:text-primary-dark transition-colors font-medium inline-flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>{t('contact.call.action')}</span>
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-dark">{t('contact.liveChat.title')}</h3>
                <p className="text-metallic mb-2">{t('contact.liveChat.description')}</p>
                <a href="#" onClick={handleFeatureClick('chat')} className="text-primary hover:text-primary-dark transition-colors font-medium inline-flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  <span>{t('contact.liveChat.button')}</span>
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-dark">{t('contact.schedule.title')}</h3>
                <p className="text-metallic mb-2">{t('contact.schedule.description')}</p>
                <a href="#" onClick={handleFeatureClick('schedule')} className="text-primary hover:text-primary-dark transition-colors font-medium inline-flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{t('contact.schedule.action')}</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Send className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-dark">{t('contact.form.title')}</h3>
                <p className="text-metallic">{t('contact.form.description')}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-metallic-light/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark mb-1">
                      {t('contact.form.firstName')}
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.firstNamePlaceholder')}
                      className="w-full px-4 py-2 border border-metallic-light rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-metallic-dark"
                    />
                    {formErrors.firstName && <p className="text-red-500 text-sm">{formErrors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark mb-1">
                      {t('contact.form.lastName')}
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.lastNamePlaceholder')}
                      className="w-full px-4 py-2 border border-metallic-light rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-metallic-dark"
                    />
                    {formErrors.lastName && <p className="text-red-500 text-sm">{formErrors.lastName}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="w-full px-4 py-2 border border-metallic-light rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-metallic-dark"
                  />
                  {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.phonePlaceholder')}
                    className="w-full px-4 py-2 border border-metallic-light rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-metallic-dark"
                  />
                  {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="w-full px-4 py-2 border border-metallic-light rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-metallic-dark"
                  ></textarea>
                  {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy-consent"
                    checked={privacyConsent}
                    onChange={(e) => setPrivacyConsent(e.target.checked)}
                    className="w-4 h-4 text-primary border-metallic-light rounded focus:ring-primary"
                  />
                  <label htmlFor="privacy-consent" className="ml-2 text-sm text-metallic">
                    {t('contact.form.privacyConsent').split(i18n.language === 'es' ? 'Política de Privacidad' : 'Privacy Policy').map((part, i, arr) => 
                      i === 0 ? (
                        <React.Fragment key={i}>
                          {part}
                          <Link 
                            to={i18n.language === 'es' ? "/es/privacy" : "/privacy"} 
                            className="text-primary hover:underline"
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            {i18n.language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
                          </Link>
                          {arr.length > 1 ? arr[1] : ''}
                        </React.Fragment>
                      ) : null
                    )}
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={!isFormValid() || isSubmitting}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    isFormValid() && !isSubmitting
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : t('contact.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title={popupMessage.title}
        message={popupMessage.message}
      />
      
      <ContactFormPopup
        isOpen={isContactFormPopupOpen}
        onClose={() => setIsContactFormPopupOpen(false)}
        title={contactFormPopupMessage.title}
        message={contactFormPopupMessage.message}
        isError={contactFormPopupMessage.isError}
      />
    </section>
  );
}