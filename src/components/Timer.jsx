import {useState, useEffect} from "react"
const Timer = () => {

const timeBuilder = (initialTime, initialDate, dateNow) => {
  let seconds = (initialTime-(dateNow-initialDate))/1000;
  return(seconds >= 0 ? `${Math.floor(seconds/60)}:${new Intl.NumberFormat('nu', {minimumIntegerDigits:'2'}).format((Math.floor(seconds%60)))}` : '0:00')
}
const [initialTime, setInitialTime] = useState(5*1000);
const [initialDate, setInitialDate] = useState(0);
const [dateNow, setDateNow] = useState(0);
  
useEffect(() => {
// temporalmente esto va aca, pero debería ir cuando apretas el botón
  setInitialDate(Date.now());
  setDateNow(Date.now());

  const interval = setInterval(() => {
    setDateNow(Date.now());
  }, 100);

  return () => {
    clearInterval(interval);
  }
}, [])

return (
  <span className='timer'>
    {timeBuilder(initialTime, initialDate, dateNow)}
  </span>
)}
export default Timer;

// todo: necesito hacer que el setInterval pare cuando el número llegue a 0, por lo que capaz me conviene
// hacer otro componente que se llame algo como timerTime o algo así y si seconds ≤ 0 que no se renderice más, 
// parando el setInterval por la cleanup function del useEffect