import TimerText from "./TimerText";
const Timer = ({initialTime, initialDate, setInitialDate, dateNow, setDateNow, placeholderTimer, isPaused}) => {

const timeBuilder = (initialTime, initialDate, dateNow) => {
  let seconds = (initialTime-(dateNow-initialDate))/1000;
  return(seconds >= 0 ? <TimerText seconds={seconds} setDateNow={setDateNow} setInitialDate={setInitialDate} isPaused={isPaused}/> 
  : placeholderTimer)
}

return (
  <span className='timer'>
    {timeBuilder(initialTime, initialDate, dateNow)}
  </span>
)}
export default Timer;
