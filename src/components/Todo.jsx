import Title from './Title';
import Task from './Task';
import AddTaskButton from './AddTaskButton';
import { useState } from 'react';

const Todo = () => {

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => (task.id !== id)));
    console.log(id);
  }

  const [tasks, setTasks] = useState([
    {
      title: 'Tarea', 
      description: 'hacer tarea',
      id: 1,
    },

    {
      title: 'Homework',
      description: 'do homework',
      id: 2,
    }
  ])

  return (
    <section>
      <Title title='Tasks' id='todoTitle'/> 
      <AddTaskButton/>
      <div className='tasksContainer'>
        {tasks.map((task)=>(<Task taskName={task.title} taskDesc={task.description} key={task.id} id={task.id} onDeleteClick={deleteTask}/>))}
      </div>
    </section>
  )
}

export default Todo