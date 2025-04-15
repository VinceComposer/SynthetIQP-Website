import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Calendar } from 'lucide-react';
import { sendContactForm } from '../services/emailService';
import ContactFormPopup from '../components/ContactFormPopup';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);
  const [isContactFormPopupOpen, setIsContactFormPopupOpen] = useState(false);
  const [contactFormPopupMessage, setContactFormPopupMessage] = useState({
    title: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      // Combine first and last name for the email service
      const result = await sendContactForm({
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      });
      
      setSubmitResult(result);
      
      if (result.success) {
        // Reset form on success
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
        
        // Show the confirmation popup
        setContactFormPopupMessage({
          title: t('contact.confirmation.title'),
          message: t('contact.confirmation.message')
        });
        setIsContactFormPopupOpen(true);
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: 'An unexpected error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-dark">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-metallic text-center mb-16">
            {t('contact.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
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
                    <a href="#" className="text-primary hover:text-primary-dark transition-colors font-medium inline-flex items-center">
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
                    <a href="#" className="text-primary hover:text-primary-dark transition-colors font-medium inline-flex items-center">
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
                    <a
                      href="https://calendly.com/synthetiq/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors font-medium inline-flex items-center"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{t('contact.schedule.action')}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-metallic-light/10">
              {submitResult && (
                <div className={`mb-6 p-4 rounded-lg ${submitResult.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {submitResult.message}
                </div>
              )}
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-dark mb-1">
                      {t('contact.form.firstName')}
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder={t('contact.form.firstNamePlaceholder')}
                      className="w-full px-4 py-2 border border-metallic-light rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-metallic-dark"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-dark mb-1">
                      {t('contact.form.lastName')}
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder={t('contact.form.lastNamePlaceholder')}
                      className="w-full px-4 py-2 border border-metallic-light rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-metallic-dark"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">
                    {t('contact.form.email')}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="w-full px-4 py-2 border border-metallic-light rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-metallic-dark"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('contact.form.phonePlaceholder')}
                    className="w-full px-4 py-2 border border-metallic-light rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-metallic-dark"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="w-full px-4 py-2 border border-metallic-light rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-metallic-dark"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : t('contact.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    
    <ContactFormPopup
      isOpen={isContactFormPopupOpen}
      onClose={() => setIsContactFormPopupOpen(false)}
      title={contactFormPopupMessage.title}
      message={contactFormPopupMessage.message}
    />
  );
}