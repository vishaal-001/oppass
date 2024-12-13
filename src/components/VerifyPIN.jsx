import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const VerifyPIN = ({ onVerified }) => {
  const [pin, setPin] = useState('');

  const handleVerifyPIN = () => {
    const encryptedPin = localStorage.getItem('userPIN');
    if (encryptedPin) {
      const decryptedPin = CryptoJS.AES.decrypt(encryptedPin, 'your-secret-key').toString(CryptoJS.enc.Utf8);
      if (pin === decryptedPin) {
        onVerified();
      } else {
        alert('Incorrect PIN!');
      }
    } else {
      alert('No PIN set. Please set a PIN first.');
    }
  };

  return (
    <div>
      <h2>Enter Your PIN</h2>
      <input
        type="password"
        maxLength="4"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        placeholder="Enter your PIN"
      />
      <button onClick={handleVerifyPIN}>Verify PIN</button>
    </div>
  );
};

export default VerifyPIN;
