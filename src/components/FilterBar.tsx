import React from 'react';
import { useTranslation } from 'react-i18next';

interface FilterBarProps {
  onFilterChange: (filters: any) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const { t } = useTranslation();
  
  // Example filter change handler
  const handleFilterClick = () => {
    // This would normally open filter options
    // For demo purposes, just pass a sample filter
    onFilterChange({ cuisine: 'all', price: 'all', rating: 4 });
  };
  
  return (
    <div className="filter-bar">
      <div className="filter-bar-header">
        <h3>{t('filters.title')}</h3>
      </div>
      <div className="filter-options">
        <div className="filter-option">
          <button className="filter-button" onClick={handleFilterClick}>
            {t('filters.cuisine')}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L2 5H10L6 9Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
        <div className="filter-option">
          <button className="filter-button" onClick={handleFilterClick}>
            {t('filters.price')}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L2 5H10L6 9Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
        <div className="filter-option">
          <button className="filter-button" onClick={handleFilterClick}>
            {t('filters.rating')}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L2 5H10L6 9Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
        <div className="filter-option">
          <button className="filter-button" onClick={handleFilterClick}>
            {t('filters.distance')}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L2 5H10L6 9Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
