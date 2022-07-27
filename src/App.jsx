import './App.css';
import Pomodoro from './components/Pomodoro';
import Todo from './components/Todo';
import Footer from './components/Footer';
import NewTaskWindow from './components/NewTaskWindow';

function App() {
  return (
    <>
      <main>
        <NewTaskWindow/>
        <Pomodoro />
        <Todo />
      </main>
      <Footer />
    </>
  );
}

export default App;
