import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; 
import { useAuth } from '../context/AuthContext';

const LoginModal = ({ isOpen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  if (!isOpen) return null;

  const handleModalLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      await login(email, password);
    } catch (err) {
      setError(err.message || 'Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    navigate('/');
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

          <button type="submit" className="auth-btn" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="auth-footer">
          New here? <button type="button" onClick={() => navigate('/register')} className="link-btn">Create an account</button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
