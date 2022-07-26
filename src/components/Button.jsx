import React from 'react'

const Button = ({text}) => {
  return (
    <div className='button' style={{cursor:'pointer'}}>{text}</div>
  )
}

export default Button