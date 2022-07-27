import './App.css';
import Pomodoro from './components/Pomodoro';
import Todo from './components/Todo';
import Footer from './components/Footer';
import NewTaskWindow from './components/NewTaskWindow';
import { useState } from 'react';

function App() {
  const [isNewTaskClosed, setIsNewTaskClosed] = useState(true);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const [tasks, setTasks] = useState([
    { 
      id: 0,
    },

    {
      title: 'Homework',
      description: 'do homework',
      id: 1,
    },

    {
      title: 'Biología tarea',
      id: 2,
    },

    {
      title: 'Tarea informática',
      description: 'terminar video de 2019',
      id: 3,
    }
  ])

  const NewTask = (newtitle, newdescription, newid) => {
    const title = newtitle;
    const description = newdescription;
    const id = newid;
    return {id, description, title}
  }

  const onSubmit = () => {
    const newTask = NewTask(newTitle, newDesc, tasks.length);
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  }
  return (
    <>
      <main>
        <NewTaskWindow isNewTaskClosed={isNewTaskClosed} setIsNewTaskClosed={setIsNewTaskClosed} newTitle={newTitle} setNewTitle={setNewTitle} 
        newDesc={newDesc} setNewDesc={setNewDesc} onSubmit={onSubmit}/>
        <Pomodoro />
        <Todo setIsNewTaskClosed={setIsNewTaskClosed} tasks={tasks} setTasks={setTasks}/>
      </main>
      <Footer />
    </>
  );
}

export default App;
