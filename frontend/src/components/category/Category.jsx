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


// import PropTypes from "prop-types";
// import React from "react";
// import { useReducer } from "react";
// import "./Category.css";

// const Category = ({ status, className }) => {
//   const [state, dispatch] = useReducer(reducer, {
//     status: status || "default",
//   });

//   return (
//     <div
//       className={`category ${className}`}
//       onMouseLeave={() => {
//         dispatch("mouse_leave");
//       }}
//       onMouseEnter={() => {
//         dispatch("mouse_enter");
//       }}
//     >
//       <div className={`overlap-group ${state.status}`}>
//         <div className="card" />
//         <img className="img" alt="Img" src={state.status === "status-2" ? "image.png" : "img.png"} />
//         <img className="view" alt="View" src={state.status === "status-2" ? "image.svg" : "view.svg"} />
//         <p className="text-wrapper">Món ăn nhẹ ngọt ngào và đáng yêu</p>
//         <img className="line" alt="Line" src={state.status === "status-2" ? "line-2.svg" : "line.svg"} />
//         <div className="div">Cupcake</div>
//       </div>
//     </div>
//   );
// };

// function reducer(state, action) {
//   switch (action) {
//     case "mouse_enter":
//       return {
//         ...state,
//         status: "status-2",
//       };

//     case "mouse_leave":
//       return {
//         ...state,
//         status: "default",
//       };
//   }

//   return state;
// }

// Category.propTypes = {
//   status: PropTypes.oneOf(["status-2", "default"]),
// };

// export default Category