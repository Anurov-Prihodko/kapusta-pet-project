import Container from './components/Container';
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';

export default function App() {
  return (
    <Container>
      <LoginView />
      <HomeView />
    </Container>
  );
}
