import './App.css';
import Pomodoro from './components/Pomodoro';
import Todo from './components/Todo';
import Footer from './components/Footer';
import NewTaskWindow from './components/NewTaskWindow';
import { useState } from 'react';

function App() {
  const [isNewTaskClosed, setIsNewTaskClosed] = useState(true);
  return (
    <>
      <main>
        <NewTaskWindow isNewTaskClosed={isNewTaskClosed} setIsNewTaskClosed={setIsNewTaskClosed}/>
        <Pomodoro />
        <Todo setIsNewTaskClosed={setIsNewTaskClosed}/>
      </main>
      <Footer />
    </>
  );
}

export default App;
