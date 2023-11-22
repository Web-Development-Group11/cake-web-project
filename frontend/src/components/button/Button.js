import React from 'react'
import './Button.css'

const Button = (props) => {
  const {children} = props;
  return (
    <button className='btn primary'>{children}</button>
  )
}

export default Button