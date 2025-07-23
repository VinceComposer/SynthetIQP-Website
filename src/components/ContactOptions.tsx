import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Calendar } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

type ActionType = 'schedule';

export default function ContactOptions() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleFeatureClick = (actionType: ActionType) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (actionType === 'schedule') {
      navigate('/discovery');
      window.scrollTo({ top: 0 });
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const scriptElement = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      if (scriptElement && document.body.contains(scriptElement)) {
        document.body.removeChild(scriptElement);
      }
    };
  }, []);

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
          <p className="text-xl text-metallic mb-12">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Content in a single column */}
        <div className="max-w-3xl mx-auto space-y-12">

          {/* Embedded Form Section - Adjusted width for larger screens */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-metallic-light/10 max-w-full md:max-w-3xl mx-auto">
            <iframe
                src="https://api.leadconnectorhq.com/widget/form/PY5g6boxkNLgF2Xjz4FI"
                style={{width: '100%', height: '663px', border: 'none', borderRadius: '4px'}}
                id="inline-PY5g6boxkNLgF2Xjz4FI"
                data-layout={JSON.stringify({'id':'INLINE'})}
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Main Website Contact Form - English"
                data-height="663"
                data-layout-iframe-id="inline-PY5g6boxkNLgF2Xjz4FI"
                data-form-id="PY5g6boxkNLgF2Xjz4FI"
                title="Main Website Contact Form - English"
            ></iframe>
            {/* The script tag for embedding is handled by the useEffect hook above. */}
          </div>

          {/* Email and Book a Discovery Options */}
          <div className="space-y-8">
            {/* Email Option */}
            <div className="flex items-start justify-center md:justify-start">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-dark text-center md:text-left">{t('contact.email.title')}</h3>
                <a href={`mailto:${t('contact.email.value')}`} className="text-metallic hover:text-primary transition-colors block text-center md:text-left">
                  {t('contact.email.value')}
                </a>
              </div>
            </div>

            {/* Book a Discovery Option */}
            <div className="flex items-start justify-center md:justify-start">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-dark text-center md:text-left">{t('contact.schedule.title')}</h3>
                <p className="text-metallic mb-2 text-center md:text-left">{t('contact.schedule.description')}</p>
                {/* Updated to redirect to Discovery page */}
                <Link to="/discovery" onClick={() => window.scrollTo({ top: 0 })} className="text-primary hover:text-primary-dark transition-colors font-medium inline-flex items-center justify-center md:justify-start">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{t('contact.schedule.action')}</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Removed Popups */}
    </section>
  );
}
