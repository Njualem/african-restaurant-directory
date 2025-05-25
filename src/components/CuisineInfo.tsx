import React from 'react';
import { useTranslation } from 'react-i18next';

interface CuisineInfoProps {
  cuisineType: string;
}

const CuisineInfo: React.FC<CuisineInfoProps> = ({ cuisineType }) => {
  const { t } = useTranslation();
  
  // Mock data for demonstration
  const cuisines = {
    'west-african': {
      name: 'West African',
      description: 'West African cuisine encompasses a diverse range of foods across multiple countries including Senegal, Nigeria, Ghana, and Ivory Coast. The cuisine is characterized by its rich stews, flavorful rice dishes, and abundant use of spices. Staple ingredients include rice, cassava, plantains, yams, and a variety of vegetables. Dishes are often accompanied by spicy sauces and feature proteins like fish, chicken, beef, and goat.',
      keyIngredients: ['Scotch bonnet peppers', 'Palm oil', 'Peanuts', 'Cassava', 'Plantains', 'Yams', 'Rice'],
      famousDishes: [
        { name: 'Jollof Rice', description: 'A one-pot rice dish cooked with tomatoes, onions, and various spices' },
        { name: 'Fufu', description: 'A dough-like food made from boiled and pounded cassava or yams' },
        { name: 'Mafé', description: 'A Senegalese stew made with peanut sauce' },
        { name: 'Egusi Soup', description: 'A Nigerian soup made with ground melon seeds and vegetables' }
      ],
      history: 'West African cuisine has been shaped by centuries of trade, colonization, and cultural exchange. The transatlantic slave trade brought West African culinary traditions to the Caribbean and Americas, influencing cuisines like Creole, Cajun, and various Caribbean cooking styles. Today, West African restaurants are gaining popularity worldwide for their bold flavors and unique cooking techniques.',
      regions: ['Senegal', 'Nigeria', 'Ghana', 'Ivory Coast', 'Mali', 'Guinea']
    },
    'east-african': {
      name: 'East African',
      description: 'East African cuisine is diverse and varies by country, including Ethiopia, Kenya, Tanzania, and Somalia. It features a blend of indigenous African cooking with influences from Arab, Indian, and European cultures due to trade and colonization. The cuisine is known for its aromatic spices, slow-cooked stews, and unique bread-like staples.',
      keyIngredients: ['Teff flour', 'Berbere spice', 'Niter kibbeh (spiced butter)', 'Lentils', 'Plantains', 'Maize'],
      famousDishes: [
        { name: 'Injera', description: 'A sourdough flatbread with a slightly spongy texture' },
        { name: 'Doro Wat', description: 'A spicy Ethiopian chicken stew' },
        { name: 'Ugali', description: 'A cornmeal porridge similar to polenta' },
        { name: 'Nyama Choma', description: 'Grilled meat, often goat or beef, popular in Kenya' }
      ],
      history: 'East African cuisine has been influenced by various trade routes, particularly those connecting to the Middle East and India. Ethiopian cuisine stands out for its unique flavors and traditions, having developed largely in isolation due to geographical barriers. The region\'s culinary traditions have been preserved through generations, with many dishes maintaining their authentic preparation methods.',
      regions: ['Ethiopia', 'Kenya', 'Tanzania', 'Uganda', 'Somalia', 'Eritrea']
    },
    'caribbean': {
      name: 'Caribbean',
      description: 'Caribbean cuisine is a fusion of African, European, Indian, and indigenous Taíno influences. Each island has its own distinct culinary tradition, though they share common ingredients and cooking methods. The cuisine is characterized by its bold flavors, use of tropical fruits, and various spices. Rice, beans, plantains, and seafood are staples throughout the region.',
      keyIngredients: ['Scotch bonnet peppers', 'Allspice', 'Coconut', 'Plantains', 'Rice and beans', 'Seafood'],
      famousDishes: [
        { name: 'Jerk Chicken', description: 'Spicy grilled chicken marinated with a hot spice mixture' },
        { name: 'Callaloo', description: 'A leafy stew made with indigenous greens' },
        { name: 'Ackee and Saltfish', description: 'Jamaica\'s national dish made with ackee fruit and salted cod' },
        { name: 'Roti', description: 'Flatbread of Indian origin, popular throughout the Caribbean' }
      ],
      history: 'Caribbean cuisine evolved through centuries of colonization, slavery, and migration. African culinary traditions, brought by enslaved people, merged with European cooking methods and indigenous ingredients. Later, indentured laborers from India introduced spices and dishes that further enriched the region\'s food culture. Today, Caribbean cuisine is celebrated globally for its vibrant flavors and cultural significance.',
      regions: ['Jamaica', 'Trinidad and Tobago', 'Haiti', 'Dominican Republic', 'Cuba', 'Puerto Rico']
    }
  };
  
  const cuisine = cuisines[cuisineType as keyof typeof cuisines] || cuisines['west-african'];
  
  return (
    <div className="cuisine-info">
      <div className="cuisine-header">
        <h2>{cuisine.name} {t('cuisine.cuisine')}</h2>
      </div>
      
      <div className="cuisine-description">
        <p>{cuisine.description}</p>
      </div>
      
      <div className="cuisine-section">
        <h3>{t('cuisine.key_ingredients')}</h3>
        <div className="ingredient-tags">
          {cuisine.keyIngredients.map((ingredient, index) => (
            <span key={index} className="ingredient-tag">{ingredient}</span>
          ))}
        </div>
      </div>
      
      <div className="cuisine-section">
        <h3>{t('cuisine.famous_dishes')}</h3>
        <div className="famous-dishes">
          {cuisine.famousDishes.map((dish, index) => (
            <div key={index} className="dish-card">
              <h4>{dish.name}</h4>
              <p>{dish.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="cuisine-section">
        <h3>{t('cuisine.history')}</h3>
        <p>{cuisine.history}</p>
      </div>
      
      <div className="cuisine-section">
        <h3>{t('cuisine.regions')}</h3>
        <div className="region-tags">
          {cuisine.regions.map((region, index) => (
            <span key={index} className="region-tag">{region}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuisineInfo;
