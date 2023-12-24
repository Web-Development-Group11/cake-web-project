import React from 'react'
import loader from './Loader.module.css'

const Loader = () => {
  return (
    <>
        <div className={loader.myProgress}>
            <div className={loader.myBar}></div>
        </div>
    </>
  )
}

export default Loader