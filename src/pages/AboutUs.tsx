// React is automatically imported by JSX transform
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, Award, Lightbulb, Users } from 'lucide-react';

export default function AboutUs() {
  const { t, i18n } = useTranslation();

  const values = [
    { key: 'excellence', icon: Award },
    { key: 'innovation', icon: Lightbulb },
    { key: 'integrity', icon: Target },
    { key: 'collaboration', icon: Users }
  ];

  // Function to highlight specific phrases in text
  const highlightText = (text: string) => {
    const currentLanguage = i18n.language;
    const phraseToHighlight = currentLanguage === 'es' 
      ? 'Agencia de Automatizaciones de IA' 
      : 'AI Automation Agency';
    
    if (!text.includes(phraseToHighlight)) return text;
    
    const parts = text.split(phraseToHighlight);
    return (
      <>
        {parts[0]}
        <span className="font-bold text-secondary">{phraseToHighlight}</span>
        {parts[1]}
      </>
    );
  };

  // Team member data with profile picture URLs
  const teamMembers: Record<string, { role: string; imageUrl: string }> = {
    ceo: {
      role: 'ceo',
      imageUrl: 'https://synthetiqpartners.com/images/vincenzo-enrico-russotto-garcia-chief-executive-officer.png'
    },
    coo: {
      role: 'coo',
      imageUrl: 'https://synthetiqpartners.com/images/jose-ramon-perez-quintana-estrategy-director.png'
    },
    cto: {
      role: 'cto',
      imageUrl: 'https://synthetiqpartners.com/images/nicolas-tambussi-chief-technology-officer.png'
    },
    cm: {
      role: 'cm',
      imageUrl: 'https://synthetiqpartners.com/images/fatima-communication-manager.png'
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
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
              {t('about.title')}
            </h1>
            <p className="text-xl text-metallic">
              {highlightText(t('about.subtitle'))}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-metallic-light/10">
              <h2 className="text-2xl font-bold mb-4 text-dark">{t('about.mission.title')}</h2>
              <p className="text-metallic">{t('about.mission.description')}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-metallic-light/10">
              <h2 className="text-2xl font-bold mb-4 text-dark">{t('about.vision.title')}</h2>
              <p className="text-metallic">{highlightText(t('about.vision.description'))}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-16 border border-metallic-light/10">
            <h2 className="text-2xl font-bold mb-6 text-center text-dark">{t('about.values.title')}</h2>
            <p className="text-metallic text-center mb-8">{t('about.values.description')}</p>
            <div className="grid md:grid-cols-4 gap-6">
              {values.map((Value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-metallic-dark font-medium">
                    {t(`about.values.list.${Value.key}`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-metallic-light/10">
            <h2 className="text-2xl font-bold mb-6 text-center text-dark">{t('about.team.title')}</h2>
            <p className="text-metallic text-center mb-12">{t('about.team.description')}</p>
            <div className="grid md:grid-cols-4 gap-8">
              {Object.keys(teamMembers).map((memberKey, index) => {
                const member = teamMembers[memberKey as keyof typeof teamMembers];
                return (
                  <motion.div
                    key={memberKey}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <img
                        src={member.imageUrl}
                        alt={t(`about.team.members.${member.role}.name`)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-dark">
                      {t(`about.team.members.${member.role}.name`)}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {t(`about.team.members.${member.role}.role`)}
                    </p>
                    <p className="text-metallic">
                      {t(`about.team.members.${member.role}.description`)}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}