import React from 'react'
import './Button.css'

const Button = (props) => {
  const {type, children, onSubmit} = props;
  
  return (
    <button onClick={onSubmit} className={type}>{children}</button>
  )
}

export default Button