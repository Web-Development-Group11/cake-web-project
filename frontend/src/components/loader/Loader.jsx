import React from 'react'
import loader from './Loader.module.css'

const Loader = () => {
  return (
    <div className={loader.loader}>
      <div className={loader.myProgress}>
          <div className={loader.myBar}></div>
      </div>
      <div className="title--1" style={{color:'var(--primary-color)'}}>Loading...</div>
    </div>
  )
}

export default Loader