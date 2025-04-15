import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  isError?: boolean;
}

export default function ContactFormPopup({ isOpen, onClose, title, message, isError = false }: ContactFormPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[100]"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center z-[110] p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full relative"
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="text-center">
                <div className={`w-16 h-16 ${isError ? 'bg-red-100' : 'bg-primary/10'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {isError ? (
                    <AlertCircle className="w-8 h-8 text-red-500" />
                  ) : (
                    <CheckCircle className="w-8 h-8 text-primary" />
                  )}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isError ? 'text-red-600' : 'text-dark'}`}>{title}</h3>
                <p className="text-metallic">{message}</p>
                {isError && (
                  <button 
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Try Again
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
