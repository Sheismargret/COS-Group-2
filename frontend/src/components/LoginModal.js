import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; 

const LoginModal = ({ isOpen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleModalLogin = (e) => {
    e.preventDefault();
    setError('');

    // Use the same logic as your Login page
    if (email === "user@pau.com" && password === "password123") {
      localStorage.setItem('userToken', 'secure-jwt-string');
      window.location.reload(); // Refresh to unblur the background
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleClose = () => {
    navigate('/'); // Send them home if they close the mandatory login
  };

  return (
    <div className="modal-overlay">
      <div className="auth-card modal-card">
        {/* Close Button */}
        <button className="modal-close-x" onClick={handleClose}>&times;</button>
        
        <div className="auth-header">
          <h2>Sign In to Continue</h2>
          <p>Accessing this page requires a PAU Connect account</p>
        </div>

        <form className="auth-form" onSubmit={handleModalLogin}>
          {error && <div className="error-message">{error}</div>}

          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="e.g. name@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-btn">Login</button>
        </form>
        
        <div className="auth-footer">
          New here? <button onClick={() => navigate('/Register')} className="link-btn">Create an account</button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;