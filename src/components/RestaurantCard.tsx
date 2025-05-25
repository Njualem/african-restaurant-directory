import React from 'react';
import { useTranslation } from 'react-i18next';

interface RestaurantCardProps {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  reviewCount: number;
  image: string;
  location: string;
  price: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  cuisine,
  rating,
  reviewCount,
  image,
  location,
  price
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="restaurant-card">
      <div className="restaurant-card-image">
        <img src={image} alt={name} />
      </div>
      <div className="restaurant-card-content">
        <h3>{name}</h3>
        <div className="restaurant-card-meta">
          <span className="cuisine">{cuisine}</span>
          <span className="location">{location}</span>
          <span className="price">{price}</span>
        </div>
        <div className="restaurant-card-rating">
          <span className="rating-score">{rating.toFixed(1)}</span>
          <span className="rating-count">({reviewCount} {reviewCount === 1 ? t('restaurant.review') : t('restaurant.reviews')})</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
