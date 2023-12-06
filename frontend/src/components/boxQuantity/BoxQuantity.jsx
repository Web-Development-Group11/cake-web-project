import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import React from "react";
import "./BoxQuantity.css";

class QuantityComponent extends React.Component {
  state = {
    quantity: 1,
  };

  incrementQuantity = () => {
    this.setState({
      quantity: this.state.quantity + 1,
      errorMessage: "",
    });
  };

  decrementQuantity = () => {
    const newQuantity = this.state.quantity - 1;
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

  render() {
    const { quantity, errorMessage } = this.state;

    return (
      <div className="button__quantity">
        <div className="button__quantity--minus">
          <CiSquareMinus size={50} onClick={this.decrementQuantity} className="my-icon"/>
        </div>

        <div className="input__quantity">              
            <input
            type="number"
            step="1" 
            min="0" 
            value="1"
            // value={quantity}
            className={`body--1`}
            />
        </div>


        <div className="button__quantity--plus">
          <CiSquarePlus size={50} onClick={this.incrementQuantity} className="my-icon"/>
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    );
  }
}
export default QuantityComponent;

// -----Để lấy số lượng tính toán -----
// import React, { useState } from 'react';
// const MyComponent = () => {
//     const [quantity, setQuantity] = useState(1);
  
//     const onQuantityChangeCallback = (newQuantity) => {
//       // Tính toán giá trị
//       const totalPrice = newQuantity * 1000;
  
//       // Gọi hàm khác để xử lý giá trị
//       handleTotalPriceChange(totalPrice);
//     };
  
//     return (
//       <QuantityComponent
//         onQuantityChange={onQuantityChangeCallback}
//       />
//     );
//   };
  


                        // <div class="quantity buttons_added">                  
                        //   <input type="number" step="1" min="0" value="1" title="Qty" class="input-text qty text">
                        //   <div class="quantity-adjust">
                        //     <a href="#" class="plus">
                        //       <i class="fa fa-angle-up"></i>
                        //     </a>
                        //     <a href="#" class="minus">
                        //       <i class="fa fa-angle-down"></i>
                        //     </a>
                        //   </div>
                        // </div>