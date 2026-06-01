import React from 'react';
import LoginModal from './LoginModal'; 
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div style={{ position: 'relative' }}>
        <div style={{ filter: 'blur(8px)', pointerEvents: 'none' }}>
          {children}
        </div>
        <LoginModal isOpen={true} />
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
