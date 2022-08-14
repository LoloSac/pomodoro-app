import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <div className='button' style={{cursor:'pointer'}} onClick={onClick}>{text}</div>
  )
}

export default Button