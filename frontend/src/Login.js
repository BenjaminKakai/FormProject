import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './loginStyles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users/sign_in', {
        user: { email, password }
      });
      console.log('Login successful', response.data);
      
      // Extract the username from the response
      const { username } = response.data;

      // Redirect to the dashboard page after successful login
      navigate('/dashboard', { state: { username } });
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <div className="login-container">
      <div className="header">
        <h2>Thank you for signing up to the Facts Zone</h2>
        <p>Kindly sign in now to proceed.</p>
      </div>
      <form onSubmit={handleLogin} className="login-form">
        <div className="input-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="centered-text">Don't have an account? <Link to="/signup">Sign up here</Link></p>
    </div>
  );
};

export default Login;
