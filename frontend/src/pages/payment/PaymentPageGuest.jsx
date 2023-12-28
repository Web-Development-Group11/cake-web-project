import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import TextField from '../../components/textField/TextField';
import Button from '../../components/button/Button';
import paymentStyles from './Payment.module.css'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { FaCheck } from "react-icons/fa";
import AddSelectPayment from '../../components/AddSelect/addSelectPayment';
import PaymentDetail from '../../components/paymentDetail/PaymentDetail';

import axios from 'axios';

const PaymentPageGuest = (props) => {

  const handleChange = (name) => (value) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const [userData, setUserData] = useState({
    province: '',
    district: '',
    ward: '',
  });

  return (
    <>
      <div className={paymentStyles.center}>
        <div className={paymentStyles.payment}>
          <Breadcrumb />
          <div className={paymentStyles.payment__container}>
            {/* Chi tiết đơn hàng  */}
            <div className={paymentStyles.payment__orderOverlap}>
              <PaymentDetail cart={props.cart} />
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
                <div className={paymentStyles.cusInfo__column}>

                  <AddSelectPayment
                    showProvince={true}
                    showDistrict={true}
                    showWard={true}
                    selectedProvince={userData.province}
                    selectedDistrict={userData.district}
                    selectedWard={userData.ward}
                    onProvinceChange={handleChange('province')}
                    onDistrictChange={handleChange('district')}
                    onWardChange={handleChange('ward')}
                    className={paymentStyles.flexContainer}
                  />

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
                {/* Location field */}


              </div>
              {/* Phương thức vận chuyển */}
              <div className={`body--1 ${paymentStyles.cusInfo__overlap}`}>
                <div className={`title--1 ${paymentStyles.cusInfo__head}`}>Phương thức vận chuyển</div>
                <div className={paymentStyles.cusInfo__checkbox}>
                  <label className={paymentStyles.checkbox__item} >
                    <input
                      className={paymentStyles.checkbox}
                      type="checkbox"
                      id="checkbox1"

                    />
                    Giao hàng hoả tốc (trong 2h)
                    <FaCheck className={paymentStyles.checkbox__icon} />
                  </label>
                  <label className={paymentStyles.checkbox__item} >


                    <input
                      className={paymentStyles.checkbox}
                      type="checkbox"
                      id="checkbox2"


                    />
                    Giao hàng tiêu chuẩn (2-3 ngày)
                    <FaCheck className={paymentStyles.checkbox__icon} />
                  </label>
                </div>
              </div>
              {/* Phương thức thanh toán */}
              <div className={`body--1 ${paymentStyles.cusInfo__overlap}`}>
                <div className={`title--1 ${paymentStyles.cusInfo__head}`}>Phương thức thanh toán</div>
                <div className={paymentStyles.cusInfo__checkbox}>

                  <label className={paymentStyles.checkbox__item} >
                    <input
                      className={paymentStyles.checkbox}
                      type="checkbox"
                      id="checkbox1"
                    />
                    Thanh toán khi nhận hàng (COD)
                    <FaCheck className={paymentStyles.checkbox__icon} />
                  </label>
                  <label className={paymentStyles.checkbox__item} >


                    <input
                      className={paymentStyles.checkbox}
                      type="checkbox"
                      id="checkbox2"
                    />
                    Thanh toán bằng Ví MoMo
                    <FaCheck className={paymentStyles.checkbox__icon} />
                  </label>

                  <label className={paymentStyles.checkbox__item} >
                    <input
                      className={paymentStyles.checkbox}
                      type="checkbox"
                      id="checkbox2"
                    />
                    Thanh toán bằng thẻ ATM/VISA/MASTER
                    <FaCheck className={paymentStyles.checkbox__icon} />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default PaymentPageGuest 
