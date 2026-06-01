import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { apiRequest } from '../lib/api';

const AuthContext = createContext(null);
const AUTH_STORAGE_KEY = 'pauConnectAuth';

const readStoredAuth = () => {
  try {
    const value = localStorage.getItem(AUTH_STORAGE_KEY);
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => readStoredAuth());

  useEffect(() => {
    if (auth) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(auth));
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, [auth]);

  useEffect(() => {
    const syncAuth = () => setAuth(readStoredAuth());
    window.addEventListener('storage', syncAuth);
    return () => window.removeEventListener('storage', syncAuth);
  }, []);

  const login = async (email, password) => {
    const response = await apiRequest('/api/v1/auth/login', {
      method: 'POST',
      body: { email, password },
    });
    setAuth(response.data);
    return response.data;
  };

  const register = async (formData) => {
    const response = await apiRequest('/api/v1/auth/register', {
      method: 'POST',
      body: formData,
    });
    setAuth(response.data);
    return response.data;
  };

  const logout = () => {
    setAuth(null);
  };

  const value = useMemo(() => ({
    user: auth,
    isAuthenticated: Boolean(auth),
    login,
    register,
    logout,
  }), [auth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
