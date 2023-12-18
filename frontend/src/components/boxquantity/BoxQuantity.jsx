import React, { useState, useEffect, useRef } from "react";
import boxQtyStyles from "./Boxquantity.module.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const BoxQuantityComponent = ({ height = "2.5rem", quantity, onQuantityChange }) => {
  const [localQuantity, setLocalQuantity] = useState(quantity);
  const minusIconRef = useRef(null);
  const plusIconRef = useRef(null);

  useEffect(() => {
    if (minusIconRef.current) {
      const parentWidth = minusIconRef.current.parentNode.offsetWidth;
      minusIconRef.current.style.fontSize = `${parentWidth}rem`;
    }

    if (plusIconRef.current) {
      const parentWidth = plusIconRef.current.parentNode.offsetWidth;
      plusIconRef.current.style.fontSize = `${parentWidth}rem`;
    }
  }, [height]);

  useEffect(() => {
    setLocalQuantity(quantity);
  }, [quantity]);

  const incrementQuantity = () => {
    setLocalQuantity((prevQuantity) => {
      const newQuantity = prevQuantity === "" ? 1 : parseInt(prevQuantity) + 1;
      return newQuantity.toString();
    });
  };

  const decrementQuantity = () => {
    setLocalQuantity((prevQuantity) => {
      const newQuantity = parseInt(prevQuantity) - 1;
      return newQuantity <= 0 ? "1" : newQuantity.toString();
    });
  };

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    if (!isNaN(newQuantity) || newQuantity === "") {
      setLocalQuantity(newQuantity === "" ? "" : newQuantity);
    }
  };

  const buttonHeight = parseFloat(height);
  const calculateFontSize = () => {
    return `calc(${buttonHeight / 2}rem)`;
  };

  const minWidth = `${buttonHeight * 3}rem`;
  const maxWidth = `${buttonHeight * 4}rem`;

  useEffect(() => {
    onQuantityChange(localQuantity);
  }, [localQuantity, onQuantityChange]);

  return (
    <>
      <div className={boxQtyStyles.button__overlap} style={{ height: height, minWidth: minWidth, maxWidth: maxWidth }}>
        <div className={`${boxQtyStyles.button__quantity} ${parseInt(localQuantity) === 1 ? boxQtyStyles.disabled : ""}`} onClick={decrementQuantity}>
          <FaMinus className={boxQtyStyles.customIcon} refs={minusIconRef} style={{ fontSize: calculateFontSize() }} />
        </div>

        <div className={boxQtyStyles.input__quantity}>
          <input
            className={`body--1 ${boxQtyStyles.inputQty}`}
            type="text"
            step="1"
            min="1"
            value={localQuantity}
            onChange={handleQuantityChange}
            style={{ fontSize: calculateFontSize() }}
          />
        </div>

        <div className={boxQtyStyles.button__quantity} onClick={incrementQuantity}>
          <FaPlus className={boxQtyStyles.customIcon} refs={plusIconRef} style={{ fontSize: calculateFontSize() }} />
        </div>
      </div>
    </>
  );
};

export default BoxQuantityComponent;