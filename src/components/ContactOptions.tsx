import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Calendar } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

type ActionType = 'schedule';

export default function ContactOptions() {
  const { t, i18n } = useTranslation();
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

  const formSrc = t('contact.contactForm.src');
  const formId = t('contact.contactForm.id');
  const formTitle = t('contact.contactForm.title');

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
        <div className="max-w-6xl mx-auto space-y-12"> {/* Changed max-w-3xl to max-w-6xl */}

          {/* Embedded Form Section - Adjusted width for larger screens */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-metallic-light/10 max-w-full mx-auto"> {/* Removed md:max-w-3xl */}
            <iframe
                src={formSrc}
                style={{width: '100%', height: '663px', border: 'none', borderRadius: '4px'}}
                id={`inline-${formId}`}
                data-layout={JSON.stringify({'id':'INLINE'})}
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name={formTitle}
                data-height="663"
                data-layout-iframe-id={`inline-${formId}`}
                data-form-id={formId}
                title={formTitle}
            ></iframe>
            {/* The script tag for embedding is handled by the useEffect hook above. */}
          </div>

          {/* Email and Book a Discovery Options */}
          <div className="space-y-8">
            

            
          </div>

        </div>
      </div>

      {/* Removed Popups */}
    </section>
  );
}
