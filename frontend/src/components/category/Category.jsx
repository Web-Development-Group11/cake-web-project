import React from 'react'
import './Category.css'
import { FiChevronRight } from "react-icons/fi";

const Category = (props) => {
  return (
    <a href={props.link}>
        <div  className='category'>
            <div className="info">
                <div className="title title--1">{props.title}</div>
                <hr className="line" />
                <div className="btn__container">
                    <div className="description body--2">{props.description}</div>
                    <div className="btn">
                      <FiChevronRight className="view__icon" />
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={props.img} alt="category image" />
            </div>
            
        </div>
    </a>
    
  )
}

export default Category