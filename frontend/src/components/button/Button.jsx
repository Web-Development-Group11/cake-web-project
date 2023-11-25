import React from 'react'
import './Button.css'

const Button = (props) => {
  const {type, children} = props;
  return (
    <button className={type}>{children}</button>
  )
}

export default Button