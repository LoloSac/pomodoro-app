import React from 'react'

const NewTaskWindow = () => {
  return (
    <div className='windowBackground'>
        <div className='newTask window'>
            <form style={{height:'100%'}} action="">
                <legend style={{fontSize:'2em', fontWeight:'bold', marginBottom:'1em'}}>New task</legend>
                <label htmlFor="newName">Task name</label>
                <textarea type="text" name='newName' id='newName' className='textArea taskNameInput' placeholder='Example name' />

                <label htmlFor="newName">Description</label>
                <textarea type="text" name='newName' id='newName' className='textArea taskDescInput' placeholder='Describe your task (optional)' />

                <input type="button" value="Submit" className='formButton'/>

            </form>
           
        </div>
    </div>
  )
}

export default NewTaskWindow