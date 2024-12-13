import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const SetPIN = ({ onPINSet }) => {
  const [pin, setPin] = useState('');

  const handleSetPIN = () => {
    if (pin.length === 4) {
      const encryptedPin = CryptoJS.AES.encrypt(pin, 'your-secret-key').toString();
      localStorage.setItem('userPIN', encryptedPin); // Save encrypted PIN to local storage
      onPINSet();
    } else {
      alert('PIN must be 4 digits!');
    }
  };

  return (
    <div>
      <h2>Set Your PIN</h2>
      <input
        type="password"
        maxLength="4"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        placeholder="Enter a 4-digit PIN"
      />
      <button onClick={handleSetPIN}>Set PIN</button>
    </div>
  );
};

export default SetPIN;
