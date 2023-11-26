import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { FaRegStar } from "react-icons/fa";
import "./Card.css";

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
        <img
          className="product-image"
          alt="Product image"
          src={
            state.status === "hover"
              ? "https://c.animaapp.com/Ohu87577/img/product-image-2@2x.png"
              : "https://cupcakecentral.com.au/cdn/shop/products/CLASSIC-STYLED-CC-RV-2.jpg?v=1681783033"
          }
        />
        <div className="text-wrapper">Cupcake Chocolate hạnh nhân</div>
        <img className="line" alt="Line" src="https://cupcakecentral.com.au/cdn/shop/products/CLASSIC-STYLED-CC-RV-2.jpg?v=1681783033" />
        <div className="rate">
          <div className="div">5.0</div>
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
