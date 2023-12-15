import React from 'react'
import './Category.css'
import { FiChevronRight } from "react-icons/fi";

const Category = (props) => {
  return (
    <div className='category'>
        <div className="category__image">
          <img src={props.img} alt="category image" id='image' />
        </div>
        <div className="category__info">
            <div className="category__title title--1">{props.title}</div>
            <hr size="1"/>
            <div className="btn__container">
                <div className="category__description body--2">{props.description}</div>
                <div className="cir_btn">
                  <FiChevronRight className="view__icon" />
                </div>
            </div>
        </div>
            
    </div>
    
  )
}

export default Category