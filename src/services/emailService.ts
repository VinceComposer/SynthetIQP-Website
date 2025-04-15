import { send } from 'emailjs-com';
import { EMAILJS_CONFIG } from './emailConfig';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Extract first and last name from the full name
const extractNames = (fullName: string): { firstName: string; lastName: string } => {
  const nameParts = fullName.trim().split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';
  return { firstName, lastName };
};

// Send email using EmailJS
export const sendContactForm = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    console.log('Starting email sending process with EmailJS...');
    console.log('Using EmailJS configuration:', { 
      serviceId: EMAILJS_CONFIG.serviceId,
      userNotificationTemplate: EMAILJS_CONFIG.templates.userNotification,
      teamNotificationTemplate: EMAILJS_CONFIG.templates.teamNotification,
      // Don't log the actual publicKey for security
      hasPublicKey: !!EMAILJS_CONFIG.publicKey
    });
    
    const { firstName, lastName } = extractNames(formData.name);
    console.log(`Sending email for: ${firstName} ${lastName} (${formData.email})`);

    // Prepare template parameters for user notification
    const userTemplateParams = {
      user_firstname: firstName,
      user_lastname: lastName,
      user_email: formData.email,
      from_email: formData.email,
      user_phone: formData.phone || 'Not provided',
      user_message: formData.message,
      support_email: EMAILJS_CONFIG.supportEmail,
    };

    // Prepare template parameters for team notification
    const teamTemplateParams = {
      user_firstname: firstName,
      user_lastname: lastName,
      user_email: formData.email,
      from_email: formData.email,
      user_phone: formData.phone || 'Not provided',
      user_message: formData.message,
    };

    console.log('Sending notification to user...');
    
    try {
      // Send notification to the user
      const userResponse = await send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templates.userNotification,
        userTemplateParams,
        EMAILJS_CONFIG.publicKey
      );

      console.log('User notification response:', userResponse);

      // Send notifications to all team members
      console.log(`Sending notifications to ${EMAILJS_CONFIG.teamEmails.length} team members...`);
      
      const teamNotificationPromises = EMAILJS_CONFIG.teamEmails.map(teamEmail => {
        console.log(`Sending notification to team member: ${teamEmail}`);
        // Determine team member name based on email address
        let team_member = 'Support Team';
        if (teamEmail === 'v.russotto@gmail.com') {
          team_member = 'Vincenzo';
        } else if (teamEmail === 'chamo@studioredondo.mx') {
          team_member = 'José Ramón';
        }
        
        // Create a copy of the template parameters with the team member name
        const emailParams = { 
          ...teamTemplateParams, 
          team_email: teamEmail, 
          team_member,
        };
        
        console.log('Sending with params:', { 
          team_member,
          user_email: emailParams.user_email,
          from_email: emailParams.from_email
        });
        
        return send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templates.teamNotification,
          emailParams,
          EMAILJS_CONFIG.publicKey
        );
      });

      // Wait for all team notifications to be sent
      const teamResponses = await Promise.all(teamNotificationPromises);
      console.log('Team notification responses:', teamResponses);

      console.log('Email sending process completed successfully');
      return { 
        success: true, 
        message: "Thank you for getting in touch. Your message has been sent. We will review your message and get back to you as soon as possible!" 
      };
    } catch (sendError: any) {
      console.error('Error in EmailJS send operation:', sendError);
      // Check if there's a detailed error message from EmailJS
      const errorMessage = sendError.text || 'Failed to send email. Please try again later.';
      return { success: false, message: errorMessage };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'An error occurred while sending your message. Please try again later.' };
  }
};
