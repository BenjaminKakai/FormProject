import React from 'react';
import axios from 'axios';

const Welcome = () => {
  // Retrieve username from localStorage
  const username = localStorage.getItem('username');

  return (
    <div>
      <h1>Welcome {username}!</h1>
      <button onClick={() => window.location.href = '/fetch'}>Fetch Data</button>
    </div>
  );
};

export default Welcome;
