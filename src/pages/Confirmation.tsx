import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion'; // Asumo que ya estás usando framer-motion por otras páginas

export default function Confirmation() {
  const { t } = useTranslation(); // Use default namespace like Discovery.tsx

  const videoUrl = "https://synthetiqpartners.com/videos/video-test-confirmacion-discovery.mp4";
  const imageUrl = "https://synthetiqpartners.com/images/jose-vincenzo-fundadores-synthetiq-partners.png";

  return (
    <div className="pt-32 pb-12 bg-gray-50"> {/* Increased top padding */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-6 sm:p-8" // Added padding to the main container
        >
          {/* Sección 1: Confirmación + Video */}
          <section className="p-6 sm:p-8 text-center"> {/* Increased bottom padding */}
            <h1 className="text-3xl md:text-4xl font-bold text-dark mb-3">
              {t('confirmationPage.confirmation.title')}
            </h1>
            <p className="text-base md:text-lg text-metallic mb-4">
              {t('confirmationPage.confirmation.subtitle')}
            </p>
            <p className="text-base md:text-lg font-semibold text-dark mb-6">
              {t('confirmationPage.confirmation.important_video')}
            </p>
            <div className="video-container mb-6">
              <video
                controls
                src={videoUrl}
                className="w-full h-auto rounded-lg shadow-md" // Clases para el video
                // poster="path/to/poster-image.jpg" // Considera añadir una imagen de poster
              >
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
          </section>

          {/* Sección 2: Agradecimiento + Instrucciones */}
          <section className="p-6 sm:p-8 text-center bg-gray-100 mt-6 rounded-xl"> {/* Added top margin and rounded corners */}
            <div className="image-container mb-6">
              <img
                src={imageUrl}
                alt="José y Vincenzo - Fundadores de Synthetiq Partners"
                className="mx-auto rounded-full w-40 h-40 object-cover border-4 border-white shadow-md" // Increased image size by 50%
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
              {t('confirmationPage.thanks_instructions.title')}
            </h2>
            <p className="text-base md:text-lg text-dark mb-4">
              {t('confirmationPage.thanks_instructions.message')}
            </p>
            <p className="text-base md:text-lg font-semibold text-primary mb-6">
              {t('confirmationPage.thanks_instructions.important_prep')}
            </p>
            <p className="text-lg md:text-xl font-bold text-dark">
              {t('confirmationPage.thanks_instructions.closing')}
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
