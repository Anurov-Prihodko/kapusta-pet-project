import Container from './components/Container';
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';
import { Summary } from './components/Summary';

const exampleSummary = [
  { month: 0, sum: 10000.0 },
  { month: 1, sum: 10000.0 },
  { month: 2, sum: 100.0 },
  { month: 3, sum: 10000.0 },
  { month: 4, sum: 1000.0 },
  { month: 5, sum: 10000.0 },
  { month: 6, sum: 10000.0 },
  { month: 7, sum: 10000.0 },
  { month: 8, sum: 10000.0 },
  { month: 9, sum: 10000.0 },
  { month: 10, sum: 10000.0 },
  { month: 11, sum: 10000.0 },
];

console.log(HomeView);

export default function App() {
  return (
    <Container>
      <LoginView />
      {/* <HomeView /> */}
      <Summary data={exampleSummary} />
    </Container>
  );
}
