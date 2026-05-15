import React from 'react';
import LoginModal from './LoginModal'; 

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('userToken');

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