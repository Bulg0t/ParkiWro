import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserBadges() {
  const [badges, setBadges] = useState([]);
  const [error, setError] = useState('');

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
        setError('Failed to fetch badges');
        console.error('Error fetching badges:', error);
      }
    };

    fetchBadges();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Badges</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {badges.length === 0 && <div>No badges assigned yet.</div>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {badges.map((badge) => (
          <div key={badge._id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h3>{badge.name}</h3>
            <p>{badge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserBadges;
