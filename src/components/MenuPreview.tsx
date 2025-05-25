import React from 'react';
import { useTranslation } from 'react-i18next';

interface MenuPreviewProps {
  restaurantId: string;
  restaurantName: string;
}

const MenuPreview: React.FC<MenuPreviewProps> = ({ restaurantName }) => {
  const { t } = useTranslation();
  
  // Mock data for demonstration
  const menuCategories = [
    {
      id: 'starters',
      name: 'menu.starters',
      items: [
        { id: '1', name: 'Accra', description: 'Crispy bean fritters served with spicy tomato sauce', price: '8.50€', image: '/images/accra.jpg' },
        { id: '2', name: 'Alloco', description: 'Fried plantains with spicy tomato dip', price: '7.00€', image: '/images/alloco.jpg' },
        { id: '3', name: 'Yassa Chicken Skewers', description: 'Marinated chicken skewers with onion and lemon', price: '9.50€', image: '/images/yassa-skewers.jpg' },
      ]
    },
    {
      id: 'mains',
      name: 'menu.main_courses',
      items: [
        { id: '4', name: 'Jollof Rice', description: 'Traditional West African rice dish with tomatoes, onions and spices', price: '16.00€', image: '/images/jollof.jpg' },
        { id: '5', name: 'Mafé', description: 'Senegalese peanut stew with tender beef and vegetables', price: '18.50€', image: '/images/mafe.jpg' },
        { id: '6', name: 'Thieboudienne', description: 'Senegalese fish and rice dish with vegetables', price: '19.00€', image: '/images/thieboudienne.jpg' },
      ]
    },
    {
      id: 'desserts',
      name: 'menu.desserts',
      items: [
        { id: '7', name: 'Thiakry', description: 'Sweet millet couscous with yogurt and fruit', price: '7.50€', image: '/images/thiakry.jpg' },
        { id: '8', name: 'Coconut Flan', description: 'Caribbean-style coconut custard', price: '8.00€', image: '/images/coconut-flan.jpg' },
      ]
    }
  ];
  
  return (
    <div className="menu-preview">
      <div className="menu-header">
        <h2>{restaurantName} - {t('restaurant.menu')}</h2>
      </div>
      
      {menuCategories.map(category => (
        <div key={category.id} className="menu-category">
          <h3>{t(category.name)}</h3>
          <div className="menu-items">
            {category.items.map(item => (
              <div key={item.id} className="menu-item">
                <div className="menu-item-image">
                  {/* In a real app, this would be a proper image */}
                  <div className="placeholder-image">{item.name[0]}</div>
                </div>
                <div className="menu-item-content">
                  <h4>{item.name}</h4>
                  <p className="description">{item.description}</p>
                  <p className="price">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="menu-footer">
        <p>{t('menu.disclaimer')}</p>
      </div>
    </div>
  );
};

export default MenuPreview;
