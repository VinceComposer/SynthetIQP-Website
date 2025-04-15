import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ClipboardCheck, Cog, Bot, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  { icon: ClipboardCheck, step: 'discovery' },
  { icon: Cog, step: 'development' },
  { icon: Bot, step: 'deployment' },
  { icon: Zap, step: 'optimization' }
];

export default function HowItWorks() {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-secondary/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-metallic">
            {t('howItWorks.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop View (Unchanged) */}
          <div className="hidden md:block relative perspective-1000">
            {/* Floating Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-secondary/20 to-primary/20" />
            
            <div className="relative">
              {steps.map((Step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Timeline Node */}
                  <div
                    className={`
                      absolute left-1/2 -translate-x-1/2
                      w-8 h-8 rounded-full
                      transition-all duration-500
                      ${activeStep === index
                        ? 'bg-primary scale-125'
                        : 'bg-white border-2 border-primary scale-100'
                      }
                      ${index === 0 ? 'top-0' : index === steps.length - 1 ? 'bottom-0' : 'top-1/2'}
                    `}
                  >
                    <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`
                      flex items-center
                      ${index % 2 ? 'flex-row-reverse' : 'flex-row'}
                      mb-24 last:mb-0
                    `}
                  >
                    {/* Spacer */}
                    <div className="w-1/2" />

                    {/* Card Container */}
                    <div
                      className={`
                        w-1/2 ${index % 2 ? 'pr-12' : 'pl-12'}
                        transform-gpu transition-all duration-500
                      `}
                    >
                      <div
                        className={`
                          relative bg-white rounded-2xl p-8
                          transform-gpu transition-all duration-500
                          ${activeStep === index ? 'scale-105' : 'scale-100'}
                          shadow-lg hover:shadow-xl
                          border border-metallic-light/10
                        `}
                        style={{
                          transform: activeStep === index
                            ? `rotate${index % 2 ? 'Y' : 'Y'}(${index % 2 ? '-' : ''}5deg) translateZ(20px)`
                            : 'rotateY(0) translateZ(0)',
                          transformStyle: 'preserve-3d'
                        }}
                      >
                        {/* Content */}
                        <div className="relative z-10">
                          <div
                            className={`
                              w-16 h-16 rounded-2xl mb-6
                              transition-all duration-500
                              ${activeStep === index
                                ? 'bg-primary text-white'
                                : 'bg-primary/10 text-primary'
                              }
                              flex items-center justify-center
                            `}
                          >
                            <Step.icon className="w-8 h-8" />
                          </div>

                          <h3 className="text-xl font-semibold mb-4 text-dark">
                            {t(`howItWorks.${Step.step}.title`)}
                          </h3>

                          <p className="text-metallic">
                            {t(`howItWorks.${Step.step}.description`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile View (Enhanced) */}
          <div className="md:hidden space-y-12">
            {steps.map((Step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: index * 0.2
                }}
                className="relative"
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute left-10 top-24 w-0.5 h-24 bg-gradient-to-b from-primary/20 to-secondary/20"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                  />
                )}

                {/* Step Number */}
                <motion.div
                  className="absolute left-8 -top-3 w-8 h-8 bg-primary text-white text-lg font-semibold rounded-full flex items-center justify-center z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.2 + 0.1
                  }}
                >
                  {index + 1}
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className="relative bg-white rounded-xl p-6 shadow-lg border border-metallic-light/10 ml-12"
                  initial={{ x: 50, rotateY: 90 }}
                  whileInView={{ x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: index * 0.2 + 0.2
                  }}
                >
                  {/* Icon Container */}
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: index * 0.2 + 0.3
                    }}
                  >
                    <Step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-dark">
                      {t(`howItWorks.${Step.step}.title`)}
                    </h3>
                    <p className="text-metallic">
                      {t(`howItWorks.${Step.step}.description`)}
                    </p>
                  </motion.div>

                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute -bottom-1 -right-1 w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl"
                    initial={{ scale: 0, rotate: 45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}