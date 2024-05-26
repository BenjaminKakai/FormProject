import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import DataFetch from './DataFetch';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/fetch" element={<DataFetch />} />
        <Route path="/" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
