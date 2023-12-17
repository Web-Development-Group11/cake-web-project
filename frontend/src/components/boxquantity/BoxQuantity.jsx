import React, { useState, useEffect, useRef } from "react";
import boxQtyStyles from "./Boxquantity.module.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const BoxQuantityComponent = ({ height = "2.5rem" }) => {
  const [quantity, setQuantity] = useState("1");
  const iconRef = useRef(null);

  useEffect(() => {
    if (iconRef.current) {
      const parentWidth = iconRef.current.parentNode.offsetWidth;
      iconRef.current.style.fontSize = `${parentWidth}rem`;
    }
  }, [height]); 

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

  const buttonHeight = parseFloat(height); 
  const calculateFontSize = () => {
    return `calc(${buttonHeight / 2}rem)`;
  };

  return (
    <>
      <div
        className={boxQtyStyles.button__overlap}
        style={{ height: height, width: `calc(25% * ${buttonHeight})`  }}
      >
        <div
          className={`${boxQtyStyles.button__quantity} ${parseInt(quantity) === 1 ? boxQtyStyles.disabled : ""
            }`}
          onClick={decrementQuantity}
        >
          <FaMinus className={boxQtyStyles.customIcon} ref={iconRef} style={{ fontSize: calculateFontSize() }}  />
        </div>

        <div className={boxQtyStyles.input__quantity}>
          <input
            className={`body--1 ${boxQtyStyles.inputQty}`}
            type="text"
            step="1"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            style={{ fontSize: calculateFontSize() }}
          />
        </div>

        <div className={boxQtyStyles.button__quantity} onClick={incrementQuantity}>

          <FaPlus className={boxQtyStyles.customIcon} ref={iconRef} style={{ fontSize: calculateFontSize() }}/>

        </div>
      </div>
    </>
  );
};

export default BoxQuantityComponent;