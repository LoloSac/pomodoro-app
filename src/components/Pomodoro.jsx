import {VscDebugRestart} from 'react-icons/vsc';
import Title from './Title';
import Timer from './Timer';
import Button from './Button';

const Pomodoro = () => {
  return (
    <section className='pomodoro'>
      <Title title='Pomodoro' id='pomodoroTitle'/>
      <Timer/>
      <div style={{display:'flex', flexDirection:'row'}}>
        <Button text='start'/>
        <Button text={<VscDebugRestart style={{height:'1.5em', width:'1.5em'}}/>}/>
      </div>
    </section>
  )
}

export default Pomodoro