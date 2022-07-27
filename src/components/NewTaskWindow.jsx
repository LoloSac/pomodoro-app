import { BsXLg } from 'react-icons/bs'

const NewTaskWindow = ({setIsNewTaskClosed, isNewTaskClosed, newTitle, setNewTitle, newDesc, setNewDesc, onSubmit}) => { 

  return (
    <div className={`windowBackground ${isNewTaskClosed?'closed':''}`}>
        <div className='trueBackground' onClick={()=>(setIsNewTaskClosed(true))}></div>

        <div className='newTask window'>
            {/* Closing button */}
            <div style={{display:'flex', width:'103%', height:'5vh', alignItems:'center', justifyContent:'flex-end'}}>
                <span style={{cursor: 'pointer', boxSizing:'initial', padding:'10px'}} onClick={()=>(setIsNewTaskClosed(true))}>
                    <BsXLg />
                </span>
            </div>

            {/* Form */}
            <form style={{height:'90%'}} onSubmit={(e) => {e.preventDefault(); onSubmit(); setIsNewTaskClosed(true); setNewTitle(''); setNewDesc('')}}>
                <legend style={{fontSize:'2em', fontWeight:'bold', marginBottom:'1em'}}>New task</legend>

                <label htmlFor="newName">Task name</label>
                <input type="text" name='newName' id='newName' className='textArea taskNameInput' placeholder='Example name' maxLength={70} required autoComplete="off"
                value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}/>

                <label htmlFor="newName">Description</label>
                <textarea name='newDesc' id='newDesc' className='textArea taskDescInput' placeholder='Describe your task (optional)' maxLength={350}  autoComplete="off"
                value={newDesc} onChange={(e)=>setNewDesc(e.target.value)}/>

                <input type="submit" value="Submit" className='formButton'/>
            </form>
           
        </div>
    </div>
  )
}

export default NewTaskWindow