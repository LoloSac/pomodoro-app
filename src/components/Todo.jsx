import Title from './Title';
import Task from './Task';
import AddTaskButton from './AddTaskButton';

const Todo = ({setIsNewTaskClosed, tasks, setTasks}) => {

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => (task.id !== id)));
  }


  return (
    <section>
      <Title title='Tasks' id='todoTitle'/>

      <div className="addTaskButton" onClick={()=>setIsNewTaskClosed(false)}>      
        <AddTaskButton/>
      </div> 

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