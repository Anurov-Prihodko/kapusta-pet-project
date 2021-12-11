import Container from './components/Container';
import HomeView from './views/HomeView';
import LoginForm from './components/LoginForm/LoginForm';

export default function App() {
  return (
    <Container>
      <HomeView />
      <LoginForm />
    </Container>
  );
}
