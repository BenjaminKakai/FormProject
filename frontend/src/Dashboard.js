import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Dashboard = () => {
  // Get the username from the location state
  const { state } = useLocation();
  const { username } = state || {};

  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <p>Here's your dashboard.</p>
      <button>
        <Link to="/fetch">Fetch data...</Link>
      </button>
    </div>
  );
};

export default Dashboard;
