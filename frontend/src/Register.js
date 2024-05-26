// Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './registerStyles.css'; // Import CSS file for register styles

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users', {
        user: { email, username, password }
      });
      console.log('Registration successful', response.data);
      // Redirect to the thank-you page after successful registration
      navigate('/thank-you');
    } catch (error) {
      console.error('Error registering', error);
    }
  };

  return (
    <div className="register-container">
      <div className="header">
        <h2>Thank you for signing up to the Facts Zone</h2>
        <p>Kindly sign in now to proceed.</p>
      </div>
      <form onSubmit={handleRegister} className="register-form">
        <div className="input-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
      <p className="centered-text">Already have an account? <Link to="/login">Sign in here</Link></p>
    </div>
  );
};

export default Register;
