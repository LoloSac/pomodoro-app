import Title from './Title';
import TaskBox from './TaskBox';
import AddTaskButton from './AddTaskButton';

const Todo = () => {
  return (
    <section>
      <Title title='Tasks' id='todoTitle'/> 
      <AddTaskButton/>
      <div className='tasksContainer'>
        <TaskBox/>
        <TaskBox taskName='Jugar lol' taskDesc='perder tiempo'/>
        <TaskBox/>
        <TaskBox/>
      </div>
    </section>
  )
}

export default Todo