import { IoTrashSharp } from 'react-icons/io5'
import { useState } from 'react'
import {IoCheckboxOutline, IoSquareOutline} from 'react-icons/io5'


const Task = ({taskName, taskDesc, onDeleteClick, id}) => {
    const [isFinished, setIsFinished] = useState(false);

    return(
        <div className='taskBox'>
            <div className="task">
                <div onClick={()=> setIsFinished(!isFinished)} style={{display:'flex', alignItems: 'center'}}>
                {isFinished ? <IoCheckboxOutline className={`checkbox ${isFinished?'disabled':''}`} style={{cursor:'pointer'}}/> 
                : <IoSquareOutline className="checkbox" style={{cursor:'pointer'}}/>}
                </div>

                <div className={`taskText ${isFinished?'disabled':''} `} style={isFinished ?{textDecoration: 'line-through'}:{}}>
                    <p>
                        <span style={{fontSize:'larger', fontWeight: 'bold', width:'100%'}}>{taskName}</span>
                        <br/>
                        <span style={{fontSize:'medium', width:'100%'}}>{taskDesc}</span>
                    </p>
                </div>

                <div style={{display:'flex', alignItems: 'center', cursor:'pointer'}} onClick={()=>onDeleteClick(id)}>
                    <IoTrashSharp className={`deleteButton ${isFinished?'disabled':''}`}/>
                </div>
            </div>
        </div>
    )
    }

    Task.defaultProps = {
        taskName : 'Task'
      }


export default Task