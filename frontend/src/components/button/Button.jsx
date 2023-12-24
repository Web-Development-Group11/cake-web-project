import React from 'react'
import './Button.css'

const Button = (props) => {
  const {type, children, onClick} = props;
  
  return (
    <button onClick={onClick} className={type}>{children}</button>
  )
}

export default Button