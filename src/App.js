import Container from './components/Container';
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';
import ReportView from './views/ReportView';

export default function App() {
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
