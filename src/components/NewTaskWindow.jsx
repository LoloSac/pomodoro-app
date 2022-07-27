import { BsXLg } from 'react-icons/bs'

const NewTaskWindow = ({setIsNewTaskClosed, isNewTaskClosed}) => {

  return (
    <div className={`windowBackground ${isNewTaskClosed?'closed':''}`}>

        <div className='newTask window'>
            {/* Closing button */}
            <div style={{display:'flex', width:'103%', height:'5vh', alignItems:'center', justifyContent:'flex-end', cursor: 'pointer'}} onClick={()=>(setIsNewTaskClosed(true))} >
                <BsXLg />
            </div>

            {/* Form */}
            <form style={{height:'90%'}} action="">
                <legend style={{fontSize:'2em', fontWeight:'bold', marginBottom:'1em'}}>New task</legend>
                <label htmlFor="newName">Task name</label>
                <textarea type="text" name='newName' id='newName' className='textArea taskNameInput' placeholder='Example name' maxLength={70}/>

                <label htmlFor="newName">Description</label>
                <textarea type="text" name='newName' id='newName' className='textArea taskDescInput' placeholder='Describe your task (optional)' maxLength={350}/>

                <input type="button" value="Submit" className='formButton'/>

            </form>
           
        </div>
    </div>
  )
}

export default NewTaskWindow