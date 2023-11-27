import React from "react";
import PropTypes from "prop-types";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import "./card.css";

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

// Move the productItem declaration outside of the function scope
const productItem = [
  {
    pId: 1,
    pName: "Red Velvet - Cupcake",
    pPath: "./",
    pUrl: "https://cupcakecentral.com.au/cdn/shop/products/CLASSIC-STYLED-CC-RV-2.jpg?v=1681783033",
    pPrice: "4.60",
    pRate: "5.0",
    pCatelogy: "Cupcakes",
  },
  {
    pId: 2,
    pName: "Red Velvet - Cupcake",
    pPath: "./",
    pUrl: "https://cupcakecentral.com.au/cdn/shop/products/CLASSIC-STYLED-CC-RV-2.jpg?v=1681783033",
    pPrice: "4.60",
    pRate: "5.0",
    pCatelogy: "Cupcakes",
  },
];

export default function Card({ status, className, productItem }) {
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
        {productItem && productItem.map((item) => (
          <div key={item.pId}>
            <Link to={`/products/${item.pId}`}>
              <img src={item.pUrl} alt="productimage" />
            </Link>
            <div className="text-wrapper">{item.pName}</div>
            <div className="line"></div>
            <div className="rate">
              <div className="div">{item.pRate}</div>
              <div className="flex">
                {/* Yellow Star */}
                {[...Array(Number(item.pRate))].map((index) => (
                  <span key={index}>
                    <FaRegStar color="red" />
                  </span>
                ))}
                {/* White Star */}
                {[...Array(5 - Number(item.pRate))].map((index) => (
                  <span key={index}>
                    <FaRegStar color="white" />
                  </span>
                ))}
              </div>
            </div>
            <div className="text-wrapper-2">{item.pPrice}</div>
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
  productItem: PropTypes.array,
};
