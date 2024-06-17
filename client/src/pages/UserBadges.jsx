import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import AssignBadge from './AssignBadge';
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';

function UserBadges() {
  const [badges, setBadges] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBadges = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:3001/api/badges', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setBadges(response.data);
      } catch (error) {
        setError('Nie posiadasz jeszcze żadnych odznak');
        console.error('Error fetching badges:', error);
      }
    };

    fetchBadges();
  }, []);

  return (
    <Fragment>
      <body>
        <Menu />
        <div style={{ padding: '20px' }}>
          <button style={{ marginBottom: '50px' }} onClick={() => navigate('/home')}>Powrót do strony głównej</button>
          <h2>Twoje Odznaki</h2><br/>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          {badges.length === 0 && <div></div>}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {badges.map((badge) => (
              <div key={badge._id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                <h3>{badge.name}</h3>
                <p>{badge.description}</p>
              </div>
            ))}
          </div>
          <br/><br/><br/><br/>
          <h2>Dodaj nową odznakę</h2><br/>
          <AssignBadge />
        </div>
        <Footer />
      </body>
    </Fragment>
  );
}

export default UserBadges;
