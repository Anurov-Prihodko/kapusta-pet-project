import axios from 'axios';
import { decode } from 'jsonwebtoken';
import React, { useEffect, useState, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Container from './components/Container';
import { getUserToken } from './redux/auth/authSelectors';
import HeaderHome from './components/HeaderHome';
import useGoogleAuthLogin from './utils/useGoogleAuthLogin';

const LoginView = React.lazy(() => import('./views/LoginView'));
const HomeView = React.lazy(() => import('./views/HomeView'));
const ReportView = React.lazy(() => import('./views/ReportView'));

const getIsAuthenitcated = token => {
  try {
    const { exp } = decode(token);
    return exp * 1000 > Date.now();
  } catch {
    return false;
  }
};

export default function App() {
  useGoogleAuthLogin();

  const authToken = useSelector(getUserToken);
  const [isAuthenticated, setIsAuthenticated] = useState(
    getIsAuthenitcated(authToken),
  );

  useEffect(() => {
    const authenticated = getIsAuthenitcated(authToken);
    setIsAuthenticated(authenticated);
    axios.defaults.headers.common.Authorization = authenticated
      ? `Bearer ${authToken}`
      : undefined;
  }, [authToken]);

  return (
    <Container>
      <HeaderHome />
      <Suspense fallback={null}>
        {!isAuthenticated && <LoginView />}
        {isAuthenticated && (
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/reports" element={<ReportView />} />
          </Routes>
        )}
      </Suspense>
    </Container>
  );
}
