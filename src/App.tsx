import { useTranslation } from 'react-i18next';
import './i18n/i18n';
import LanguageSelector from './components/LanguageSelector';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import RestaurantCard from './components/RestaurantCard';
import './App.css';

function App() {
  const { t } = useTranslation();
  
  // Mock data for demonstration
  const restaurants = [
    {
      id: '1',
      name: 'Saveurs du Congo',
      cuisine: 'Congolese',
      rating: 4.7,
      reviewCount: 124,
      image: 'https://example.com/restaurant1.jpg',
      location: 'Paris, 11e',
      price: '€€'
    },
    {
      id: '2',
      name: 'Jollof House',
      cuisine: 'West African',
      rating: 4.5,
      reviewCount: 89,
      image: 'https://example.com/restaurant2.jpg',
      location: 'Paris, 18e',
      price: '€€'
    },
    {
      id: '3',
      name: 'Caribbean Flavors',
      cuisine: 'Caribbean',
      rating: 4.3,
      reviewCount: 67,
      image: 'https://example.com/restaurant3.jpg',
      location: 'Lyon',
      price: '€€€'
    },
    {
      id: '4',
      name: 'Ethiopian Delights',
      cuisine: 'Ethiopian',
      rating: 4.8,
      reviewCount: 156,
      image: 'https://example.com/restaurant4.jpg',
      location: 'Marseille',
      price: '€€'
    }
  ];

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // In a real app, this would filter restaurants
  };

  const handleFilterChange = (filters: any) => {
    console.log('Filters changed:', filters);
    // In a real app, this would apply filters
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>{t('app.name')}</h1>
        <p>{t('app.tagline')}</p>
        <LanguageSelector />
      </header>
      
      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
      </div>
      
      <main>
        <nav className="main-nav">
          <ul>
            <li>{t('navigation.home')}</li>
            <li className="active">{t('navigation.restaurants')}</li>
            <li>{t('navigation.map')}</li>
            <li>{t('navigation.favorites')}</li>
            <li>{t('navigation.profile')}</li>
          </ul>
        </nav>
        
        <div className="filter-container">
          <FilterBar onFilterChange={handleFilterChange} />
        </div>
        
        <section className="content">
          <h2>{t('navigation.restaurants')}</h2>
          
          <div className="restaurant-grid">
            {restaurants.map(restaurant => (
              <RestaurantCard
                key={restaurant.id}
                id={restaurant.id}
                name={restaurant.name}
                cuisine={restaurant.cuisine}
                rating={restaurant.rating}
                reviewCount={restaurant.reviewCount}
                image={restaurant.image}
                location={restaurant.location}
                price={restaurant.price}
              />
            ))}
          </div>
        </section>
      </main>
      
      <footer className="app-footer">
        <p>© 2025 {t('app.name')} - {t('footer.all_rights_reserved')}</p>
        <div className="footer-links">
          <a href="#">{t('footer.about')}</a>
          <a href="#">{t('footer.contact')}</a>
          <a href="#">{t('footer.privacy')}</a>
          <a href="#">{t('footer.terms')}</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
