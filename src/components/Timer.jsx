import TimerText from "./TimerText";
import { useEffect } from "react";
const Timer = ({initialTime, initialDate, setInitialDate, dateNow, setDateNow, isPaused, seconds, setSeconds, resetDate}) => {
  const placeholderTimer = '0:00';

  useEffect(() => {
    setSeconds(Math.floor((initialTime-(dateNow-initialDate))/1000));
  })
  useEffect(() => {
    if (seconds<0) {
      resetDate();
    }
    console.log('hello!');
  })
  

return (
  <span className='timer'>
    {seconds >= 0 ? <TimerText seconds={seconds} setDateNow={setDateNow} isPaused={isPaused}/> : placeholderTimer}
  </span>
)}
export default Timer;
