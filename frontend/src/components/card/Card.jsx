import React from "react";
import PropTypes from "prop-types";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import "./Card.css";
import jsonData from "../../assets/db/productsData.json";

const initialState = {
  status: "default",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "mouse_enter":
      return { ...state, status: "hover" };
    case "mouse_leave":
      return { ...state, status: "default" };
    default:
      return state;
  }
};

export default function Card({ status, className }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div
      className={`card ${state.status} ${className}`}
      onMouseLeave={() => {
        dispatch({ type: "mouse_leave" });
      }}
      onMouseEnter={() => {
        dispatch({ type: "mouse_enter" });
      }}
    >
      {jsonData.map((item, index) => (
        <div key={index} className="card">
          <div className="product-image">
            <Link to={`/`}>
              <img src={item.pUrl} alt="productimage" />
            </Link>
          </div>
          <div className="overlap-group">
            <div className="card-title">
              <div className={`title--4`}>{item.pName}</div>
            </div>
            <div className="line" >
              <hr />
            </div>
            <div className="rate">

              {[...Array(Number(item.pRate))].map((index) => (
                <span key={index} className="stardetail">
                  <FaStar color="#E21033" className="icons" />
                </span>
              ))}
              {[...Array(5 - Number(item.pRate))].map((index) => (
                <span key={index}>
                  <FaRegStar color="#E21033" className="icons" />
                </span>
              ))}
              <span className={`body--2`}> {item.pRate}</span>

            </div>
            <div className="price">
              <div className={`title--4`}>{item.pPrice}</div>
            </div>

            <div className="add-to-cart">
              <FaShoppingCart
                className="icons"
                color={state.status === "hover" ? "#47271C" : "white"}
              />
            </div>

          </div>
        </div>
      ))}
    </div>

  );
}

Card.propTypes = {
  status: PropTypes.oneOf(["hover", "default"]),
  className: PropTypes.string,
};