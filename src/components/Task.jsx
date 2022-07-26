import { IoTrashSharp } from 'react-icons/io5'
import { useState } from 'react'
import {IoCheckboxOutline, IoSquareOutline} from 'react-icons/io5'


const Task = ({taskName, taskDesc}) => {
    const [isFinished, setIsFinished] = useState(false);

    return(
        <div className="task">
            <div onClick={()=> setIsFinished(!isFinished)}>
            {isFinished ? <IoCheckboxOutline className="checkbox" style={{cursor:'pointer', opacity: '0.5'}}/> 
            : <IoSquareOutline className="checkbox" style={{cursor:'pointer'}}/>}
            </div>

            <div className="taskText" style={isFinished ?{textDecoration: 'line-through', opacity: '0.5'}:null}>
                <p>
                    <span style={{fontSize:'larger', fontWeight: 'bold'}}>{taskName}</span>
                    <br/>
                    <span style={{fontSize:'medium'}}>{taskDesc}</span>
                </p>
            </div>

            <IoTrashSharp className="deleteButton" style={{cursor:'pointer'}}/>
        </div>
    )
    }

    Task.defaultProps = {
        taskName : 'Task',
        taskDesc: 'Description'
      }


export default Task