import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { FaRegStar } from "react-icons/fa";
import "./Card.css";

const productItem =[
    {
    pId: 1,
    pName: 'Red Velvet - Cupcake', 
    pPath:'./',
    pUrl:'https://cupcakecentral.com.au/cdn/shop/products/CLASSIC-STYLED-CC-RV-2.jpg?v=1681783033',
    pPrice: '4.60',
    pRate: '5.0',
    pCatelogy:'Cupcakes'
    }
]

export const Card = ({ status, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    status: status || "default",
  });

  return (
    <div
      className={`card ${state.status} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="overlap-group">
        <Link to="/">
            <img 
                src = {pUrl}
                alt='productimage'
            />
        </Link>
        <div className="text-wrapper">{pName}</div>
        <div className="line"></div>
        <div className="rate">
          <div className="div">{pRate}</div>
          <div className="star">
            <img
              alt="Star"
              src={
                state.status === "hover"
                  ? <FaRegStar />
                  : <FaRegStar />
              }
            />
            <img
          
              alt="Star"
              src={
                state.status === "hover"
                  ? <FaRegStar />
                  : <FaRegStar />
              }
            />
            <img
        
              alt="Star"
              src={
                state.status === "hover"
                  ? <FaRegStar />
                  : <FaRegStar />
                }
              />
            <img
              
              alt="Star"
              src={
                state.status === "hover"
                  ? <FaRegStar />
                  : <FaRegStar />
                }
              />
            <img
              
              alt="Star"
              src={
                state.status === "hover"
                  ? <FaRegStar />
                  : <FaRegStar />
                }
              />

            </div>
          
          </div>
          <div className="text-wrapper-2">150,000đ</div>
          <div className="add-to-cart">
            <FaShoppingCart  className="icons" color={state.status === "hover" ? "#47271C" : "white"} />
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        status: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        status: "default",
      };
  }

  return state;
}

Card.propTypes = {
  status: PropTypes.oneOf(["hover", "default"]),
};
