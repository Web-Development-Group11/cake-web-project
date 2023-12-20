import React from "react";
import "./Cart.css";
import Button from "../../components/button/Button";
import Navbar from '../../components/header/NavBar'
import Footer from '../../components/footer/Footer'


import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

const Cart = () => {
  const breadcrumbItems = [
    {url: '/cart' },
  ];
  return (
    <div >
    <Breadcrumb items={breadcrumbItems} />
    </div >

  )
};
export default Cart