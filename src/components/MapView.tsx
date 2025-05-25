import React from 'react';
import { useTranslation } from 'react-i18next';

interface MapViewProps {
  center?: { lat: number; lng: number };
  zoom?: number;
}

const MapView: React.FC<MapViewProps> = ({ 
  center = { lat: 48.8566, lng: 2.3522 }, // Default to Paris
  zoom = 12 
}) => {
  const { t } = useTranslation();
  const [isLoading] = React.useState(true);
  
  // This would be replaced with actual map implementation
  // using Google Maps, Mapbox, or another mapping service
  
  return (
    <div className="map-container">
      {isLoading && (
        <div className="map-loading">
          <p>{t('common.loading')}</p>
        </div>
      )}
      <div className="map-view">
        {/* Placeholder for map implementation */}
        <div className="map-placeholder">
          <p>{t('navigation.map')}</p>
          <p>Lat: {center.lat}, Lng: {center.lng}, Zoom: {zoom}</p>
        </div>
      </div>
      <div className="map-controls">
        <button className="map-control-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="map-control-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="map-control-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16L16 12L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MapView;
