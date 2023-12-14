import React from "react";
import PropTypes from "prop-types";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
// import { FaStarHalf } from "react-icons/fa";
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

export default function Card({ status, className}) {
  
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
      <div className="overlap-group">
        {jsonData.map((item,index) => (
          <div key={index}  >
            <div className="product-image">
              <Link to={`/`}>
                <img src={item.pUrl} alt="productimage"  
                />
              </Link>
            </div>
            <div className="card-title">
              <div className={`title--4`}>{item.pName}</div>
            </div>
            <hr className="line" />
            <div className="rate">
              <div className="flex">
                {/* Yellow Star chỉ mới làm được số chẵn, lẻ như 4.5 thì chưa*/}
                {[...Array(Number(item.pRate))].map((index) => (
                  <span key={index} className="stardetail">
                    <FaStar color="#E21033" />
                  </span>
                ))}
                {/* White Star */}
                {[...Array(5 - Number(item.pRate))].map((index) => (
                  <span key={index}>
                    <FaRegStar color="#E21033"/>
                  </span>
                ))}
              </div>
              <div className= "div"><div className={`body--2`} >{item.pRate}</div></div>
            </div>
            <div className="divprice"><div className={`title--4`} >{item.pPrice}</div></div>
            <div className="add-to-cart">
              <FaShoppingCart  
                className="icons"
                color={state.status === "hover" ? "#47271C" : "white"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Card.propTypes = {
  status: PropTypes.oneOf(["hover", "default"]),
  className: PropTypes.string,
};