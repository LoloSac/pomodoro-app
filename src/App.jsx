import './App.css';
import Pomodoro from './components/Pomodoro';
import Todo from './components/Todo';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <main>
        <Pomodoro />
        <Todo />
      </main>
      <Footer />
    </>
  );
}

export default App;
