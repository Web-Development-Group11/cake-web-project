import React from 'react';
import Navbar from '../../components/header/NavBar'
import './ProductDetail.css';
import { Link } from 'react-router-dom';
// import { Card } from '../../components/card/Card';
import Button from '../../components/button/Button';
// import TextField from '../../components/textField/TextField';
// import { BoxQuantityComponent } from '../../components/boxquantity/BoxQuantity';
import Footer from '../../components/footer/Footer';


// Import các icon
// import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

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


        <div className='productDetail__screen'>
          <div className='productDetail__page'>
            <div className='navigation'>

            </div>

            <div className='productDetail'>
              <div className='productDetail__info'>
                <div className="productDetail__info_img">

                </div>

                <div className="productDetail__info_text">

                </div>

              </div>

              <div className="productDetail__outstanding">
                <p className="productDetail__outstanding_title"></p>
                <div className="productDetail__outstanding_img">

                </div>
              </div>

              <div className="productDetail__review">
                <div className="vit-nh-gi">
                  <div className="overlap-4">
                    <div className="nh-gi">
                      <div className="tab-instance" divClassName="tab-2" editText="Đánh giá sản phẩm" type="primary" />
                      <div active className="tab-3" divClassName="tab-4" editText="Viết đánh giá" type="primary" />
                    </div>
                    <div className="overlap-wrapper">
                      <div className="overlap-5">
                        <div className="text-field">
                          <div className="overlap-group-2">
                            <div className="text-wrapper-11">Đánh giá của bạn</div>
                          </div>
                        </div>
                        <p className="p">Viết đánh giá của bạn tại đây nhé!</p>
                        <div className="overlap-group-wrapper">
                          <div className="overlap-6">
                            <div className="text-wrapper-12">Họ và Tên</div>
                          </div>
                        </div>
                        <input className="input" placeholder="Email" type="email" />
                        <div className="text-field-2">
                          <div className="text-wrapper-13">Số điện thoại</div>
                        </div>
                        <div className="mc-hi-lng">
                          <p className="text-wrapper-14">Đánh giá mức độ hài lòng của bạn:</p>
                          <div
                            className="rating-instance"
                            star="five"
                            starImg="https://c.animaapp.com/LRsy0thE/img/star-1-5.svg"
                            starStar="https://c.animaapp.com/LRsy0thE/img/star-1-5.svg"
                            starStar1="https://c.animaapp.com/LRsy0thE/img/star-1-5.svg"
                            starStar2="https://c.animaapp.com/LRsy0thE/img/star-1-5.svg"
                            starStar3="https://c.animaapp.com/LRsy0thE/img/star-1-5.svg"
                          />
                        </div>
                        <Button className="button-1-instance" size="large" text="Đăng bài" type="primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>


      </div>
      <Footer />
    </>
  )
}


