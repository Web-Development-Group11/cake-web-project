import React, { useState } from "react";
import boxqntStyles from "./Boxquantity.module.css";

const QuantityComponent = () => {
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
    <div className={boxqntStyles.button__overlap}>
      <div className={boxqntStyles.button__quantity}>
        <div
          className={`${boxqntStyles.buttonWrapper} ${
            parseInt(quantity) === 1 ? boxqntStyles.disabled : ""
          }`}
          onClick={decrementQuantity}
        >
          <span className={boxqntStyles.quantityText}>-</span>
        </div>
      </div>

      <div className={boxqntStyles.input__quantity}>
        <input
          className={`body--1 ${boxqntStyles.inputqnt}`}
          type="text"
          step="1"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>

      <div className={boxqntStyles.button__quantity}>
        <div
          className={boxqntStyles.buttonWrapper}
          onClick={incrementQuantity}
        >
          <span className={boxqntStyles.quantityText}>+</span>
        </div>
      </div>
    </div>
  );
}
export default QuantityComponent