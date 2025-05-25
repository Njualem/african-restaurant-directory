import React from 'react';
import { useTranslation } from 'react-i18next';

interface AdminSidebarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ onNavigate, activeSection }) => {
  const { t } = useTranslation();
  
  const sections = [
    { id: 'dashboard', label: 'admin.dashboard', icon: 'dashboard' },
    { id: 'restaurants', label: 'admin.restaurants', icon: 'restaurant' },
    { id: 'users', label: 'admin.users', icon: 'users' },
    { id: 'reviews', label: 'admin.reviews', icon: 'reviews' },
    { id: 'content', label: 'admin.content', icon: 'content' },
    { id: 'analytics', label: 'admin.analytics', icon: 'analytics' },
  ];
  
  return (
    <div className="admin-sidebar">
      <div className="admin-sidebar-header">
        <h2>{t('app.name')}</h2>
        <p>{t('admin.dashboard')}</p>
      </div>
      <nav className="admin-sidebar-nav">
        <ul>
          {sections.map((section) => (
            <li 
              key={section.id}
              className={activeSection === section.id ? 'active' : ''}
              onClick={() => onNavigate(section.id)}
            >
              <span className="icon">{renderIcon(section.icon)}</span>
              <span className="label">{t(section.label)}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

// Helper function to render icons
const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'dashboard':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="3" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="11" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="11" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );
    case 'restaurant':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 18V10C16 9.46957 15.7893 8.96086 15.4142 8.58579C15.0391 8.21071 14.5304 8 14 8H6C5.46957 8 4.96086 8.21071 4.58579 8.58579C4.21071 8.96086 4 9.46957 4 10V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 14V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 3V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 18H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'users':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H7C5.93913 13 4.92172 13.4214 4.17157 14.1716C3.42143 14.9217 3 15.9391 3 17V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'reviews':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 13C19 13.5304 18.7893 14.0391 18.4142 14.4142C18.0391 14.7893 17.5304 15 17 15H5L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'content':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 9.5L10 18.5L1 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 3.5L10 12.5L19 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'analytics':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 18H2V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 10L9 6L13 10L18 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
};

export default AdminSidebar;
