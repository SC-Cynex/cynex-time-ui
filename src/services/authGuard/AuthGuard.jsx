// AuthGuard.jsx
import React, { useEffect, useState } from 'react';
import AuthService from './AuthService';
import Login from '../../pages/Auth/Login/Login';

const AuthGuard = ({ element: Element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await AuthService.isAuthenticated();
      setIsAuthenticated(authenticated);
    };

    checkAuth();
  }, []);

  if (!isAuthenticated) {
    return <Login />;
  }

  return <Element />;
};

export default AuthGuard;
