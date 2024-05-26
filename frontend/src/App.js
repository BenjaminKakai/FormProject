// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import DataFetch from './DataFetch';
import Welcome from './Welcome';
import ThankYou from './ThankYou';
import Dashboard from './Dashboard'; // Import Dashboard component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/fetch" element={<DataFetch />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add route for Dashboard */}
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Router>
  );
};

export default App;
