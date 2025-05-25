import React from 'react';
import { useTranslation } from 'react-i18next';

interface ChefProfileProps {
  chefId: string;
}

const ChefProfile: React.FC<ChefProfileProps> = ({ chefId }) => {
  const { t } = useTranslation();
  
  // Mock data for demonstration
  const chef = {
    id: chefId,
    name: 'Marie Koné',
    title: 'Executive Chef',
    restaurant: 'Saveurs du Congo',
    image: '/images/chef-marie.jpg',
    bio: 'Chef Marie Koné brings over 15 years of culinary expertise, specializing in authentic Congolese cuisine. Born in Kinshasa and trained in Paris, she combines traditional African flavors with modern French techniques. Her signature dish, the Moambe Chicken, has been featured in several international culinary magazines.',
    specialties: ['Moambe Chicken', 'Fufu', 'Pili Pili Sauce', 'Congolese Grilled Fish'],
    awards: [
      { year: 2023, name: 'Best African Restaurant in Paris' },
      { year: 2021, name: 'Rising Star Chef Award' },
      { year: 2019, name: 'Culinary Innovation Prize' }
    ],
    education: [
      { year: '2005-2007', institution: 'Le Cordon Bleu, Paris', degree: 'Culinary Arts Diploma' },
      { year: '2003-2005', institution: 'Culinary Institute of Kinshasa', degree: 'Traditional African Cuisine Certificate' }
    ]
  };
  
  return (
    <div className="chef-profile">
      <div className="chef-header">
        <div className="chef-image">
          {/* In a real app, this would be a proper image */}
          <div className="placeholder-image">{chef.name[0]}</div>
        </div>
        <div className="chef-title">
          <h2>{chef.name}</h2>
          <p className="chef-position">{chef.title}</p>
          <p className="chef-restaurant">{chef.restaurant}</p>
        </div>
      </div>
      
      <div className="chef-bio">
        <h3>{t('chef.biography')}</h3>
        <p>{chef.bio}</p>
      </div>
      
      <div className="chef-specialties">
        <h3>{t('chef.specialties')}</h3>
        <ul>
          {chef.specialties.map((specialty, index) => (
            <li key={index}>{specialty}</li>
          ))}
        </ul>
      </div>
      
      <div className="chef-awards">
        <h3>{t('chef.awards')}</h3>
        <ul>
          {chef.awards.map((award, index) => (
            <li key={index}>
              <span className="award-year">{award.year}</span>
              <span className="award-name">{award.name}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="chef-education">
        <h3>{t('chef.education')}</h3>
        <ul>
          {chef.education.map((edu, index) => (
            <li key={index}>
              <span className="education-year">{edu.year}</span>
              <span className="education-details">
                <strong>{edu.institution}</strong>
                <span>{edu.degree}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChefProfile;
