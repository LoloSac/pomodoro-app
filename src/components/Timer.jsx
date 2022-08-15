import TimerText from "./TimerText";
const Timer = ({initialTime, initialDate, setInitialDate, dateNow, setDateNow, placeholderTimer, isPaused, seconds, setSeconds}) => {

const timeBuilder = (initialTime, initialDate, dateNow) => {
  setSeconds(Math.floor((initialTime-(dateNow-initialDate))/1000));
  return(seconds >= 0 ? <TimerText seconds={seconds} setDateNow={setDateNow} isPaused={isPaused}/> : placeholderTimer)
}

return (
  <span className='timer'>
    {timeBuilder(initialTime, initialDate, dateNow)}
  </span>
)}
export default Timer;
