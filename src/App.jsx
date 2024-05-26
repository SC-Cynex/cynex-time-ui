// App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './Routes/routes';
import NotFound from './pages/NotFound/NotFound';
import AuthGuard from './services/authGuard/AuthGuard';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          {
          routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<AuthGuard element={route.component} requiresAuth={route.requiresAuth} />}
            />
          ))
          }
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
