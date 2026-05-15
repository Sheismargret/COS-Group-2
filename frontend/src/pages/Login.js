import React, { useState } from 'react'; 
import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate for redirection

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Simulated login logic
    if (email === "user@pau.com" && password === "password123") {
      localStorage.setItem('userToken', 'secure-jwt-string');
      navigate('/'); // Redirect to home after successful login
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back!</h2>
          <p>Enter your credentials to access your account</p>
        </div>

        <form className="auth-form" onSubmit={handleLogin}>
          {error && <div className="error-message">{error}</div>}

          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="e.g. example@pau.edu.ng"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;