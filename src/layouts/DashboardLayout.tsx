import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardHeader from '../components/DashboardHeader';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardSidebar />
      <DashboardHeader />
      <div className="pl-56 pt-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
          {children}
        </div>
      </div>
    </div>
  );
}