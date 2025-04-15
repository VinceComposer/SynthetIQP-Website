import { init } from 'emailjs-com';

// EmailJS configuration
export const EMAILJS_CONFIG = {
  serviceId: 'service_943n5kb',
  publicKey: 'yLhgGMZrzc8YFpXQ-', // This is the public key for EmailJS
  host: 'mail.privateemail.com',
  port: 465,
  user: 'hello@synthetiqpartners.com',
  supportEmail: 'hello@synthetiqpartners.com',
  templates: {
    userNotification: 'template_flokt39', // Template for user notification
    teamNotification: 'template_vqnc5z5', // Template for team notification
  },
  teamEmails: [
    'hello@synthetiqpartners.com', // Support Team
    'v.russotto@gmail.com',       // Vincenzo Russotto
    'chamo@studioredondo.mx'      // José Ramón Pérez
  ]
  // Note: We don't store the password here for security reasons
};

// Initialize EmailJS
export const initializeEmailJS = () => {
  init(EMAILJS_CONFIG.publicKey);
};
