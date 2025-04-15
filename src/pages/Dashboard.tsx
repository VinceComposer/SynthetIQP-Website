import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Target, BarChart, Settings } from 'lucide-react';
import DashboardLayout from '../layouts/DashboardLayout';

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-3 text-gray-900">{t('dashboard.welcome')}</h1>
          <p className="text-gray-600 text-lg">{t('dashboard.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {[
            { icon: Users, key: 'users' },
            { icon: Target, key: 'projects' },
            { icon: BarChart, key: 'insights' },
            { icon: Settings, key: 'settings' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-[#2D9CDB]" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {t(`dashboard.stats.${item.key}.value`)}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {t(`dashboard.stats.${item.key}.label`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-xl font-semibold mb-6 text-gray-900">{t('dashboard.recentActivity')}</h2>
            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center space-x-4 py-3 border-b border-gray-100 last:border-0">
                  <div className="w-2 h-2 rounded-full bg-[#2D9CDB]"></div>
                  <div>
                    <p className="text-gray-700 mb-1">{t(`dashboard.activities.${item}`)}</p>
                    <p className="text-sm text-gray-400">2 {t('dashboard.timeAgo')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-xl font-semibold mb-6 text-gray-900">{t('dashboard.quickActions')}</h2>
            <div className="grid grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((action) => (
                <button
                  key={action}
                  className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-left group"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#2D9CDB] transition-colors">
                    {t(`dashboard.actions.${action}.title`)}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {t(`dashboard.actions.${action}.description`)}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}