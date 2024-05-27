import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './dashboardStyles.css';  // Import the CSS file

const Dashboard = () => {
  // Get the username from the location state
  const { state } = useLocation();
  const { username } = state || {};

  return (
    <div className="dashboard-container">
      <h2 className="welcome-message">Welcome, {username}!</h2>
      <p>Wanna check out some interesting facts about cats? Kindly click on the button below.</p>
      <button className="fetch-button">
        <Link to="/fetch">Fetch data...</Link>
      </button>
    </div>
  );
};

export default Dashboard;
