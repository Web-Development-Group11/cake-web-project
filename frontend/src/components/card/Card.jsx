import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaStar, FaRegStar } from "react-icons/fa";
import cardStyles from "./Card.module.css";
import Rating from '@mui/material/Rating';

const initialState = {
  status: "default",
};
const formatPrice = (price) => {
  return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace(/\./g, ',');
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

export default function Card(props) {
  const product = props.product
  const onClick = props.onClick
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      className={`${cardStyles.card} ${cardStyles[state.status]}`}
      onMouseLeave={() => {
        dispatch({ type: "mouse_leave" });
      }}
      onMouseEnter={() => {
        dispatch({ type: "mouse_enter" });
      }}
    >
      <div onClick={onClick} className={cardStyles.card__productImage}>
        <Link to={`/product/${product.id}`}>
          <img className={cardStyles.card__Image} src={product.image_urls.image_url_0} alt={product.title} />
        </Link>
      </div>
      <div className={cardStyles.card__content}>
        <div className={`${cardStyles.content__title} title--4`}>{product.title}</div>

        <div className={cardStyles.content__line}>
          <hr />
        </div>
        <div className={cardStyles.content__rate}>
          <Rating
            style={{ color: '#E21033' }}
            name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
          {/* {[...Array(5)].map((_, index) => (
            <span key={index} className={cardStyles.starDetail}>
              {index < Math.round(product.pRate) ? (
                <FaStar className={cardStyles.icons} />
              ) : (
                <FaRegStar className={cardStyles.icons} />
              )}
            </span>
          ))} */}
          <span className={`body--2`}>{product.pRate}</span>
        </div>
        <div className={cardStyles.content__price}>
          <div className={`title--4`}>{formatPrice(product.price)}</div>
        </div>
        <div className={cardStyles.content__cart} onClick={() => props.addProduct(product)}>
          <FaShoppingCart
            className={cardStyles.carticons}
          />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    specific_type: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    pRate: PropTypes.number,
    image_urls: PropTypes.shape({
      image_url_0: PropTypes.string,
    }),
  }),
};