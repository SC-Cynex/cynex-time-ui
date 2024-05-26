// AuthGuard.jsx
import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthService from './AuthService';

const AuthGuard = ({ element: Element, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await AuthService.isAuthenticated();
      setIsAuthenticated(authenticated);
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div>Verificando autenticação...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Element />;
};

export default AuthGuard;
