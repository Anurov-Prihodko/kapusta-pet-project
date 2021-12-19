import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from './components/Container';
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';
import ReportView from './views/ReportView';

import { getCurrentUser } from './redux/auth/authOperations';
import { getIsChecksCurrentUser } from './redux/auth/authSelectors';

export default function App() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const isChecksCurrentUser = useSelector(getIsChecksCurrentUser); //?

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <LoginView />
      <div className="border__test"></div>
      <HomeView />
      <div className="border__test"></div>
      <ReportView />
    </Container>
  );
}
