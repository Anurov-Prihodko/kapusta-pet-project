import axios from 'axios';
import { decode } from 'jsonwebtoken';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from './components/Container';
import { getUserToken } from './redux/auth/authSelectors';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import ReportView from './views/ReportView';

const getIsAuthenitcated = token => {
  try {
    const { exp } = decode(token);
    return exp * 1000 > Date.now();
  } catch {
    return false;
  }
};

export default function App() {
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

  if (!isAuthenticated) {
    return (
      <Container>
        <LoginView />
      </Container>
    );
  }

  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/reports" element={<ReportView />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
