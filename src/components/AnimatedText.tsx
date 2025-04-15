import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedTextProps {
  words: string[];
  className?: string;
  textSizes?: {
    default: string;
    long: string;
  };
}

export default function AnimatedText({ 
  words, 
  className = '',
  textSizes = {
    default: 'text-4xl md:text-6xl',
    long: 'text-3xl md:text-5xl'
  }
}: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Changed to 3 seconds interval

    return () => clearInterval(interval);
  }, [words.length]);

  const isLongWord = (word: string) => word.length > 15;

  return (
    <span className="relative inline-flex justify-center items-center min-w-[280px] sm:min-w-[320px] md:min-w-[400px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ 
            duration: 0.4, // Keeping animation duration the same for smooth transitions
            ease: [0.4, 0, 0.2, 1] // Custom easing for smoother animation
          }}
          className={`absolute ${className} ${
            isLongWord(words[currentIndex]) ? textSizes.long : textSizes.default
          } whitespace-nowrap px-2`}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
      <span className="invisible whitespace-nowrap">{words[0]}</span>
    </span>
  );
}