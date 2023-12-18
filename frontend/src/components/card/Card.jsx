import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaStar, FaRegStar } from "react-icons/fa";
import cardStyles from "./Card.module.css";
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

export default function Card({ className }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
     className={`${cardStyles.card} ${cardStyles[state.status]} ${className}`}
      onMouseLeave={() => {
        dispatch({ type: "mouse_leave" });
      }}
      onMouseEnter={() => {
        dispatch({ type: "mouse_enter" });
      }}
    >
      {jsonData.map((item, index) => (
        <div key={index} className={cardStyles.card}>
          <div className={cardStyles.card__productImage}>
            <Link to={`/`}>
              <img className={cardStyles.card__Image} src={item.pUrl} alt="productimage" />
            </Link>
          </div>
          <div className={cardStyles.card__content}>
            <div className={cardStyles.content__title}>
              <div className={`title--4`}>{item.pName}</div>
            </div>
            <div className={cardStyles.content__line}>
              <hr />
            </div>
            <div className={cardStyles.content__rate}>
              {[...Array(Number(item.pRate))].map((_, index) => (
                <span key={index} className={cardStyles.starDetail}>
                  <FaStar className={cardStyles.icons} />
                </span>
              ))}
              {[...Array(5 - Number(item.pRate))].map((_, index) => (
                <span key={index}>
                  <FaRegStar className={cardStyles.icons} />
                </span>
              ))}
              <span className={`body--2`}>{item.pRate}</span>
            </div>
            <div className={cardStyles.content__price}>
              <div className={`title--4`}>{item.pPrice}</div>
            </div>
            <div className={cardStyles.content__cart}>
              <FaShoppingCart
                className={cardStyles.carticons}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
};