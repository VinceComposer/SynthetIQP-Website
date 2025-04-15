import React from 'react';
import { useTranslation } from 'react-i18next';
import { Bell, Search } from 'lucide-react';

export default function DashboardHeader() {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 right-0 left-56 h-14 bg-white border-b border-gray-200 z-50">
      <div className="h-0.5 bg-gray-100">
        <div className="h-full w-3/4 bg-[#2D9CDB] rounded-r"></div>
      </div>
      <div className="px-4 h-[calc(100%-2px)] flex items-center justify-between">
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder={t('dashboard.header.search')}
            className="w-full pl-9 pr-4 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#2D9CDB] focus:border-transparent"
          />
        </div>
        <div className="flex items-center">
          <button className="relative p-1.5 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#2D9CDB] rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
}