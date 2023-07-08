import {VscDebugRestart} from 'react-icons/vsc';
import { useState } from 'react';
import Title from './Title';
import Timer from './Timer';
import Button from './Button';

const Pomodoro = () => {
  const [configTime, setConfigTime] = useState(1500*1000);
  const [initialTime, setInitialTime] = useState(configTime);
  const [initialDate, setInitialDate] = useState(0);
  const [dateNow, setDateNow] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [seconds, setSeconds] = useState(0)
  const resetDate = () => {
    setDateNow(Date.now());
    setInitialTime(configTime);
    setInitialDate(Date.now());
    setHasStarted(false);
    setIsPaused(true);
    console.log('reset');
  }

  return (
    <section className='pomodoro'>
      <Title title='Pomodoro' id='pomodoroTitle'/>

      <Timer initialTime={initialTime} initialDate={initialDate} setInitialDate={setInitialDate} 
      dateNow={dateNow} setDateNow={setDateNow} isPaused={isPaused}
      seconds={seconds} setSeconds={setSeconds} resetDate={resetDate}/>

      <div style={{display:'flex', flexDirection:'row'}}>

        <Button text={!hasStarted?'Start':isPaused?'resume':'pause'} onClick={()=>{
          if(isPaused){setInitialTime(seconds*1000); setInitialDate(Date.now()); setDateNow(Date.now())}
          setIsPaused(!isPaused); 
          if (!hasStarted) {setInitialDate(Date.now()); setDateNow(Date.now()); setHasStarted(true)}
          }}/>

        <Button text={<VscDebugRestart style={{height:'1.5em', width:'1.5em'}}/>} onClick={()=>resetDate()} />

      </div>
    </section>
  )
}

export default Pomodoro