import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import React from "react";
import "./BoxQuantity.css";

class QuantityComponent extends React.Component {
  state = {
    quantity: "1",
    errorMessage: "",
  };

  incrementQuantity = () => {
    this.setState({
      quantity: this.state.quantity === "" ? 1 : parseInt(this.state.quantity) + 1,
      errorMessage: "",
    });
  };

  decrementQuantity = () => {
    const newQuantity = parseInt(this.state.quantity) - 1;
    if (newQuantity <= 0) {
      this.setState({
        errorMessage: "",
      });
    } else {
      this.setState({
        quantity: newQuantity,
        errorMessage: "",
      });
    }
  };

  handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    if (!isNaN(newQuantity) || newQuantity === "") {
      this.setState({
        quantity: newQuantity === "" ? "" : newQuantity,
        errorMessage: "",
      });
    } else {
      this.setState({
        errorMessage: "",
      });
    }
  };

  render() {
    const { quantity, errorMessage } = this.state;

    return (
      <div className="button__quantity">
        <div className="button__quantity--minus">
          <CiSquareMinus size={50} onClick={this.decrementQuantity} className="my-icon" />
        </div>

        <div className="input__quantity">
          <input
            type="text"
            step="1"
            min="0"
            value={quantity}
            className={`body--1`}
            onChange={this.handleQuantityChange}
          />
        </div>

        <div className="button__quantity--plus">
          <CiSquarePlus size={50} onClick={this.incrementQuantity} className="my-icon" />
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    );
  }
}

export default QuantityComponent;
