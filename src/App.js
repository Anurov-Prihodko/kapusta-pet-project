import Container from './components/Container';
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';
import Reports from './components/Reports/Reports';

console.log(HomeView);

export default function App() {
  return (
    <Container>
      <LoginView />
      {/* <HomeView /> */}
      <Reports />
    </Container>
  );
}
