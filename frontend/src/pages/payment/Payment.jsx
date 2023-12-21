import React from 'react'
import Navbar from '../../components/header/NavBar'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import TextField from '../../components/textField/TextField';
import Button from '../../components/button/Button';
import paymentStyles from './Payment.module.css'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
const Payment = () => {
  return (
    <>
      <Navbar />
      <div className={paymentStyles.payment}>
        <Breadcrumb />
        <div className={paymentStyles.payment__container}>
          {/* Chi tiết đơn hàng  */}
          <div className={paymentStyles.payment__orderDetail}>
            <div className={`title--1 ${paymentStyles.orderDetail__head}`}>Chi tiết đơn hàng</div>
            <hr className={paymentStyles.orderDetail__line}></hr>
            <div className={paymentStyles.orderDetail__product}>card sp </div>

            <div className={`body--1 ${paymentStyles.orderDetail__info}`}>
              <div className={`title--2 ${paymentStyles.orderDetail__info1}`} >

                <div className={paymentStyles.info1__title}>Nhập mã khuyến mãi:</div>
                <div className={paymentStyles.checkout__info1}>
                  <div className={paymentStyles.info1__title}>
                    <TextField
                      placeholder="Nhập mã khuyến mãi"
                    />
                  </div>
                  <div className={paymentStyles.info1__btn}>
                    <Button type="btn2 secondary--2">Áp dụng</Button>
                  </div>
                </div>

              </div>
            </div>

            <hr className={paymentStyles.orderDetail__line}></hr>

            <div className={`body--1 ${paymentStyles.orderDetail__info}`}>
              <div className={paymentStyles.checkout__info1}>
                <div className={paymentStyles.info1__title}>Tạm tính</div>
                <div className={paymentStyles.info1__btn}>90,000
                </div>
              </div>
              <div className={paymentStyles.checkout__info1}>
                <div className={paymentStyles.info1__title}>Giảm giá: </div>
                <div className={paymentStyles.info1__btn}>0
                </div>
              </div>
              <div className={paymentStyles.checkout__info1}>
                <div className={paymentStyles.info1__title}>Phí vận chuyển: </div>
                <div className={paymentStyles.info1__btn}>0
                </div>
              </div>
            </div>

            <hr className={paymentStyles.orderDetail__line}></hr>

            <div className={`body--1 ${paymentStyles.orderDetail__info}`}>
              <div className={paymentStyles.checkout__info1}>
                <div className={paymentStyles.info1__title}>
                  <div className={`body--1 `}>Tổng tiền</div>
                  <div className={`title--3`}>90,000</div>
                </div>
                <div className={paymentStyles.info1__btn}>
                  <Button type="btn1 primary">Thanh toán</Button>
                </div>
              </div>
            </div>

          </div>
          <div className={paymentStyles.payment__cusInfo}>
            {/* thông tin nhận hàng */}
            <div className={paymentStyles.cusInfo__overlap}>
              <div className={`title--1 ${paymentStyles.cusInfo__head}`}>Thông tin nhận hàng</div>
              <div className={paymentStyles.cusInfo__row}>
                <div className={paymentStyles.cusInfo__col1}>
                  <TextField
                    placeholder="Họ và tên"
                  />
                </div>
                <div className={paymentStyles.cusInfo__col2}>
                  <TextField
                    placeholder="Số điện thoại"
                  />
                </div>
              </div>

              <div className={paymentStyles.cusInfo__row}>
                <div className={paymentStyles.cusInfo__col1}>
                  <TextField
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className={paymentStyles.cusInfo__row}>
                <div className={paymentStyles.cusInfo__col1}>
                  <TextField
                    placeholder="Địa chỉ cụ thể"
                  />
                </div>
              </div>

              <div className={paymentStyles.cusInfo__row}>
                <div className={paymentStyles.cusInfo__col1Note}>
                  <TextField
                    placeholder="Ghi chú"
                  />
                </div>
              </div>
            </div>

            <div className={paymentStyles.cusInfo__overlap}>
              <div className={`title--1 ${paymentStyles.cusInfo__head}`}>Phương thức vận chuyển</div>
              <div> </div>
            </div>
          </div>

          {/* Phương thức vận chuyển */}
          {/* <div className="phng-thc-vn-chuyn">
          <div className="overlap-5">
            <div className="text-wrapper-15">Phương thức vận chuyển</div>
            <div className="giao-hng-ho-tc">
              <p className="p">Giao hàng hoả tốc (trong 2h)</p>
            </div>
            <div className="giao-hng-tiu-chun">
              <p className="text-wrapper-16">Giao hàng tiêu chuẩn (2-3 ngày)</p>
            </div>
          </div>
          <img className="checkbox" alt="Checkbox" src="https://c.animaapp.com/7r8GknzA/img/checkbox-4@2x.png" />
          <img className="checkbox-2" alt="Checkbox" src="https://c.animaapp.com/7r8GknzA/img/checkbox-3@2x.png" />
        </div> */}
          {/* Phương thức thanh toán */}
          {/* <div className="phng-thc-thanh-ton">
          <div className="overlap-6">
            <div className="text-wrapper-15">Phương thức thanh toán</div>
            <div className="thanh-ton-khi-nhn">
              <img className="checkbox-3" alt="Checkbox" src="https://c.animaapp.com/7r8GknzA/img/checkbox-3@2x.png" />
              <p className="text-wrapper-17">Thanh toán khi nhận hàng (COD)</p>
            </div>
            <div className="thanh-ton-bng-momo">
              <img className="checkbox-3" alt="Checkbox" src="https://c.animaapp.com/7r8GknzA/img/checkbox-1@2x.png" />
              <p className="text-wrapper-17">Thanh toán bằng Ví MoMo</p>
            </div>
            <div className="thanh-ton-bng-th">
              <img className="checkbox-3" alt="Checkbox" src="https://c.animaapp.com/7r8GknzA/img/checkbox-3@2x.png" />
              <p className="text-wrapper-18">Thanh toán bằng thẻ ATM/VISA/MASTER</p>
            </div>
          </div>
        </div> */}
        </div >
      </div >
      {/* <Footer /> */}

    </>
  )
}

export default Payment