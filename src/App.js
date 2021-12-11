import Container from './components/Container';
import HomeView from './views/HomeView';

export default function App() {
  // const style = {
  //   fontWeight: 900,
  //   color: '#FF751D',
  //   fontSize: 36,
  // };

  // const elem1 = <span style={{ ...style }}>0</span>;
  // const elemAdd = <button>Add</button>;
  // const elemMinus = <button>Minus</button>;
  // const li = (
  //   <ul>
  //     <li>Pug1</li>
  //     <li>Pug2</li>
  //     <li>Pug3</li>
  //     <li>Pug4</li>
  //   </ul>
  // );

  // const element = (
  //   <div>
  //     {elem1}
  //     {elemAdd}
  //     {elemMinus}
  //     {li}
  //   </div>
  // );

  return (
    <Container>
      <HomeView />
    </Container>
  );
}
