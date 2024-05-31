import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import AuthGuard from './services/authGuard/AuthGuard';
import routes from './Routes/routes';
import AuthService from './services/authGuard/AuthService';

function RedirectToAppropriatePage() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await AuthService.isAuthenticated();
      setIsAuthenticated(authenticated);
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated !== null) {
      if (isAuthenticated) {
        navigate('/point-register');
      } else {
        navigate('/login');
      }
    }
  }, [isAuthenticated, navigate]);

  return null;
}

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<AuthGuard element={route.component} requiresAuth={route.requiresAuth} />}
            />
          ))}
          <Route path="/" element={<RedirectToAppropriatePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
