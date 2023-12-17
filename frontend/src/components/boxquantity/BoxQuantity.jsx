import React, { useState } from "react";
import boxQtyStyles from "./Boxquantity.module.css";

const BoxQuantityComponent = () => {
  const [quantity, setQuantity] = useState("1");

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity === "" ? 1 : parseInt(prevQuantity) + 1;
      return newQuantity.toString();
    });
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = parseInt(prevQuantity) - 1;
      return newQuantity <= 0 ? "1" : newQuantity.toString();
    });
  };

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    if (!isNaN(newQuantity) || newQuantity === "") {
      setQuantity(newQuantity === "" ? "" : newQuantity);
    }
  };

  return (
    <>
      <div className={boxQtyStyles.button__overlap}>
        <div
          className={`${boxQtyStyles.buttonWrapper} ${
            parseInt(quantity) === 1 ? boxQtyStyles.disabled : ""
          }`}
          onClick={decrementQuantity}
        >
          <span className={boxQtyStyles.quantityText}>-</span>
        </div>
      </div>

      <div className={boxQtyStyles.input__quantity}>
        <input
          className={`body--1 ${boxQtyStyles.inputQty}`}
          type="text"
          step="1"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>

      <div className={boxQtyStyles.button__quantity}>
        <div className={boxQtyStyles.buttonWrapper} onClick={incrementQuantity}>
          <span className={boxQtyStyles.quantityText}>+</span>
        </div>
      </div>
    </>
  );
};

export default BoxQuantityComponent;