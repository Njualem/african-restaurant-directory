import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface RestaurantManagementProps {
  // Props will be expanded as needed
}

const RestaurantManagement: React.FC<RestaurantManagementProps> = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('all');
  
  // Mock data for demonstration
  const restaurants = [
    { id: '1', name: 'Saveurs du Congo', cuisine: 'Congolese', status: 'active', rating: 4.7 },
    { id: '2', name: 'Jollof House', cuisine: 'West African', status: 'active', rating: 4.5 },
    { id: '3', name: 'Caribbean Flavors', cuisine: 'Caribbean', status: 'pending', rating: 0 },
    { id: '4', name: 'Ethiopian Delights', cuisine: 'Ethiopian', status: 'active', rating: 4.8 },
  ];
  
  return (
    <div className="admin-restaurant-management">
      <div className="admin-header">
        <h2>{t('admin.restaurants')}</h2>
        <button className="primary-button">
          + {t('admin.add_restaurant')}
        </button>
      </div>
      
      <div className="admin-tabs">
        <button 
          className={`admin-tab ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          {t('admin.all_restaurants')}
        </button>
        <button 
          className={`admin-tab ${activeTab === 'active' ? 'active' : ''}`}
          onClick={() => setActiveTab('active')}
        >
          {t('admin.active')}
        </button>
        <button 
          className={`admin-tab ${activeTab === 'pending' ? 'active' : ''}`}
          onClick={() => setActiveTab('pending')}
        >
          {t('admin.pending')}
        </button>
      </div>
      
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>{t('admin.name')}</th>
              <th>{t('admin.cuisine')}</th>
              <th>{t('admin.status')}</th>
              <th>{t('admin.rating')}</th>
              <th>{t('admin.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {restaurants
              .filter(restaurant => activeTab === 'all' || restaurant.status === activeTab)
              .map(restaurant => (
                <tr key={restaurant.id}>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.cuisine}</td>
                  <td>
                    <span className={`status-badge ${restaurant.status}`}>
                      {t(`admin.${restaurant.status}`)}
                    </span>
                  </td>
                  <td>{restaurant.rating > 0 ? restaurant.rating : '-'}</td>
                  <td className="actions">
                    <button className="icon-button" title={t('common.edit')}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 2.5L13.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 4L4 10V12H6L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="icon-button" title={t('common.view')}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 3C3 3 1 8 1 8C1 8 3 13 8 13C13 13 15 8 15 8C15 8 13 3 8 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="icon-button" title={t('common.delete')}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4H3.33333H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.33334 4V2.66667C5.33334 2.31305 5.47381 1.97391 5.72386 1.72386C5.97391 1.47381 6.31305 1.33334 6.66667 1.33334H9.33334C9.68696 1.33334 10.0261 1.47381 10.2761 1.72386C10.5262 1.97391 10.6667 2.31305 10.6667 2.66667V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.6667 4V13.3333C12.6667 13.687 12.5262 14.0261 12.2761 14.2761C12.0261 14.5262 11.687 14.6667 11.3333 14.6667H4.66667C4.31305 14.6667 3.97391 14.5262 3.72386 14.2761C3.47381 14.0261 3.33334 13.687 3.33334 13.3333V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RestaurantManagement;
