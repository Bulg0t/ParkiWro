import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AssignBadge() {
  const [qrCode, setQrCode] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await axios.post('http://localhost:3001/api/badges/assign', { qrCode }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMessage('Badge assigned successfully!');
      setError('');
      setQrCode('');
      navigate('/odznaki');
    } catch (error) {
      setError(error.response.data.error || 'Nie posiadasz jeszcze zadnych odznak');
      setMessage('');
      console.error('Error assigning badge:', error);
    }
  };

  return (
    <div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {message && <div style={{ color: 'green' }}>{message}</div>}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Wpisz QR Code" 
          value={qrCode} 
          onChange={(e) => setQrCode(e.target.value)} 
          required 
        />
        <button type="submit">Assign Badge</button>
      </form>
    </div>
  );
}

export default AssignBadge;
