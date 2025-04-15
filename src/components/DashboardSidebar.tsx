import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  FolderKanban,
  Users,
  UserCircle,
  MessagesSquare,
  BarChart2,
  Settings,
  HelpCircle,
  LogOut
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function DashboardSidebar() {
  const { t } = useTranslation();
  const location = useLocation();
  const { signOut } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: 'dashboard.menu.overview', path: '/dashboard' },
    { icon: FolderKanban, label: 'dashboard.menu.projects', path: '/dashboard/projects' },
    { icon: Users, label: 'dashboard.menu.samples', path: '/dashboard/samples' },
    { icon: UserCircle, label: 'dashboard.menu.agents', path: '/dashboard/agents' },
    { icon: Users, label: 'dashboard.menu.characters', path: '/dashboard/characters' },
    { icon: MessagesSquare, label: 'dashboard.menu.conversations', path: '/dashboard/conversations' },
    { icon: BarChart2, label: 'dashboard.menu.analysis', path: '/dashboard/analysis' },
    { icon: Settings, label: 'dashboard.menu.settings', path: '/dashboard/settings' },
    { icon: HelpCircle, label: 'dashboard.menu.help', path: '/dashboard/help' },
  ];

  return (
    <div 
      className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-56'
      }`}
    >
      <div className="flex items-center justify-between px-3 py-3 border-b border-gray-200">
        {!isCollapsed && <span className="text-lg font-bold text-[#2D9CDB]">SynthetIQ</span>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-gray-500" />
          )}
        </button>
      </div>

      <nav className="p-2">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-2 px-2 py-2 rounded-lg transition-colors text-sm ${
                    isActive
                      ? 'bg-blue-50 text-[#2D9CDB]'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {!isCollapsed && <span>{t(item.label)}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-2 border-t border-gray-200">
        <button
          onClick={signOut}
          className="flex items-center space-x-2 w-full px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <LogOut className="w-4 h-4" />
          {!isCollapsed && <span>{t('dashboard.menu.logout')}</span>}
        </button>
      </div>
    </div>
  );
}