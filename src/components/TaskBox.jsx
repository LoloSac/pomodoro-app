import Task from './Task';

const TaskBox = ({taskName, taskDesc}) => {
  return (
    <div className='taskBox'>
        <Task taskName={taskName} taskDesc={taskDesc}/>
    </div>
  )
}


export default TaskBox