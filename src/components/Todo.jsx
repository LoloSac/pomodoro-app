import Title from './Title';
import Task from './Task';
import AddTaskButton from './AddTaskButton';
import { useState } from 'react';

const Todo = () => {

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => (task.id !== id)));
  }

  // const addTask = () ={
  //   return()
  // }

  const [tasks, setTasks] = useState([
    { 
      id: 1,
    },

    {
      title: 'Homework',
      description: 'do homework',
      id: 2,
    },

    {
      title: 'Biología tarea',
      id: 3,
    },

    {
      title: 'Tarea informática',
      description: 'terminar video de 2019',
      id: 4,
    }
  ])

  return (
    <section>
      <Title title='Tasks' id='todoTitle'/> 
      <AddTaskButton/>
      <div className='tasksContainer'>
        {tasks.length > 0 
        ? 
          tasks.map((task)=>(<Task taskName={task.title} taskDesc={task.description} key={task.id} id={task.id} onDeleteClick={deleteTask}/>))
        :
          <div className='taskBox emptyTask'>
            <div className='task' style={{justifyContent: 'center', fontWeight: 'bold', fontSize:'larger'}}>
              No tasks :(
            </div>
          </div>
        }
      </div>
    </section>
  )
}

export default Todo