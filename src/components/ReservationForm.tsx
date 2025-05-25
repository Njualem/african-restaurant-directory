import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ReservationFormProps {
  restaurantId: string;
  restaurantName: string;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ restaurantId, restaurantName }) => {
  const { t } = useTranslation();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState(2);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    console.log({
      restaurantId,
      date,
      time,
      partySize,
      name,
      email,
      phone,
      specialRequests
    });
    // Show confirmation or error
  };
  
  return (
    <div className="reservation-form">
      <h2>{t('restaurant.make_reservation')}</h2>
      <h3>{restaurantName}</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">{t('reservation.date')}</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="time">{t('reservation.time')}</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="party-size">{t('reservation.party_size')}</label>
          <select
            id="party-size"
            value={partySize}
            onChange={(e) => setPartySize(parseInt(e.target.value))}
            required
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(size => (
              <option key={size} value={size}>{size} {size === 1 ? t('reservation.person') : t('reservation.people')}</option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="name">{t('reservation.name')}</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">{t('reservation.email')}</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">{t('reservation.phone')}</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="special-requests">{t('reservation.special_requests')}</label>
          <textarea
            id="special-requests"
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            rows={3}
          />
        </div>
        
        <button type="submit" className="primary-button">
          {t('reservation.confirm')}
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
