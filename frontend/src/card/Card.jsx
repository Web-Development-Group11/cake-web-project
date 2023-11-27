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
          <div className="flex">
            {/* Yellow Star */}
            {[...Array(Number(item.rating))].map((index) => {
              return (
                <span key={index}>
                <svg
                  className=""
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                </span>
                          );
                        })}
                        {/* White Star */}
                        {[...Array(5 - Number(item.rating))].map((index) => {
                          return (
                            <span key={index}>
                              <svg
                                className="w-4 h-4 fill-current text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </span>
                          );
                        })}
                      </div>"
          <div className="star">
            <FaRegStar color="red"/>


          </div>
          <div className="text-wrapper-2">{pPrice}</div>
          <div className="add-to-cart">
            <FaShoppingCart  className="icons" color={state.status === "hover" ? "#47271C" : "white"} />
        </div>
      </div>
    </div>
  );
};
)

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
