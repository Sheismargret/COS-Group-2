import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // This is where you check if the user is logged in.
  // Usually, you check localStorage for a token.
  const isAuthenticated = localStorage.getItem('userToken'); 

  if (!isAuthenticated) {
    // If not authenticated, redirect to login
    return <Navigate to="/Login" replace />;
  }

  // If authenticated, render the page
  return children;
};

export default ProtectedRoute;