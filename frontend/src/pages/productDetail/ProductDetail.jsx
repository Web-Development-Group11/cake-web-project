import React from 'react';
import Navbar from '../../components/header/NavBar';
import './ProductDetail.css';
// import { Link } from 'react-router-dom';
// import { Card } from '../../components/card/Card';
// import { Button } from '../../components/button/Button';
// import { TextField } from '../../components/textField/TextField';
// import { BoxQuantityComponent } from '../../components/boxquantity/BoxQuantity';
import Footer from '../../components/footer/Footer';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product  from '../product/Product';

// Import các icon
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

export default function ProductDetail() {
  // const navigationProduct = () => (
  //   <Router>
  //     <div>
  //       <Navigation />
  //       <hr />
  //       <Switch>
  //         <Route path="/" exact component={Home} />
  //         <Route path="/product" exact component={Product} />
  //         <Route path="/product/:productId" component={ProductDetail} />
  //       </Switch>
  //     </div>
  //   </Router>
  // );
  
  return (
    <>
      <Navbar />
      <div>
        <div>
        <div className="navigation">
            <Link className="navigation__item" to={'/'}>Trang chủ</Link>
            <p className="navigation__item">|</p>
            <Link className="navigation__item" to={'/product'}>Sản phẩm</Link>
            <p className="navigation__item">|</p>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
