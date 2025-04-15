import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Platform() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-screen">
        <iframe 
          src="https://app.hexonasystems.com/"
          className="w-full h-full border-0"
          title="SynthetIQ Platform"
        />
      </div>
    </div>
  );
}