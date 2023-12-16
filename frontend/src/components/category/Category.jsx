import React from 'react'
import category from './Category.module.css'
import { FiChevronRight } from "react-icons/fi";

const Category = (props) => {
  return (
    <div className={category.category}>
        <div className={category.image}>
          <img src={props.img} alt="category image" className={category.picture} />
        </div>
        <div className={category.info}>
            <div className={`${category.title} title--1`}>{props.title}</div>
            <hr size="1"/>
            <div className={category.btn__container}>
                <div className={`${category.description} body--2`}>{props.description}</div>
                <div className={category.cir_btn}>
                  <FiChevronRight className={category.view__icon}/>
                </div>
            </div>
        </div>
            
    </div>
    
  )
}

export default Category