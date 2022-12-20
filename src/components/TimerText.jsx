import React from 'react'
import { useEffect } from 'react'

const TimerText = ({seconds, setDateNow, isPaused}) => {

    useEffect(() => {
        const interval = setInterval(() => {
            setDateNow(Date.now());
        }, 50);

        if (isPaused) {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
    }})
    
    
  return (
    <>
        {Math.floor(seconds/60)}:{new Intl.NumberFormat('nu', {minimumIntegerDigits:'2'}).format((seconds%60))}
    </>
  )
}

export default TimerText