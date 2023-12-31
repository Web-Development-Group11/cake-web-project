import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import TextField from '../../components/textField/TextField';
import Button from '../../components/button/Button';
import paymentStyles from './Payment.module.css'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { FaCheck } from "react-icons/fa";
import AddSelectPayment from '../../components/AddSelect/addSelectPayment';
import { FaTimes } from 'react-icons/fa';
import { validateFullName, validateAddressDetail, validateEmail, validatePhone } from "../../components/validation/validationForm";
import toast from 'react-hot-toast';

const PaymentPageGuest = (props) => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [fullnameError, setFullnameError] = useState(false);
  const [addressDetailError, setAddressDetailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [fullnameErrorMsg, setFullnameErrorMsg] = useState("");
  const [addressDetailErrorMsg, setAddressDetailErrorMsg] = useState("");
  const [phoneErrorMsg, setPhoneErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");

  const [selectedShippingMethod, setSelectedShippingMethod] = useState('');

  const handleShippingMethodChange = (method) => {
    setSelectedShippingMethod(method);
  };

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };


  function changeInputValue(name, value) {
    if (name === "fullname") {
      setFullname(value);
      setFullnameError(false);
      setFullnameErrorMsg("");
    } else if (name === "addressDetail") {
      setAddressDetail(value);
      setAddressDetailError(false);
      setAddressDetailErrorMsg("");
    } else if (name === "phone") {
      setPhone(value);
      setPhoneError(false);
      setPhoneErrorMsg("");
    } else if (name === "email") {
      setEmail(value);
      setEmailError(false);
      setEmailErrorMsg("");
    }
  }

  function validationForm() {
    let returnData = {
      fullnameError: false,
      addressDetailError: false,
      phoneError: false,
      emailError: false,
      fullnameErrorMsg: "",
      addressDetailErrorMsg: "",
      phoneErrorMsg: "",
      emailErrorMsg: ""
    };

    const fullnameError = validateFullName(fullname);
    const addressDetailError = validateAddressDetail(addressDetail);
    const phoneError = validatePhone(phone);
    const emailError = validateEmail(email);

    if (fullnameError) {
      returnData = {
        ...returnData,
        fullnameError: true,
        fullnameErrorMsg: fullnameError
      };
    }
    if (addressDetailError) {
      returnData = {
        ...returnData,
        addressDetailError: true,
        addressDetailErrorMsg: addressDetailError
      };
    }

    if (phoneError) {
      returnData = {
        ...returnData,
        phoneError: true,
        phoneErrorMsg: phoneError
      };
    }

    if (emailError) {
      returnData = {
        ...returnData,
        emailError: true,
        emailErrorMsg: emailError
      };
    }

    return returnData;
  }

  async function submitForm(e) {
    e.preventDefault();

    const validation = validationForm();

    if (
      validation.fullnameError ||
      validation.addressDetailError ||
      validation.phoneError ||
      validation.emailError
    ) {
      setFullnameError(validation.fullnameError);
      setFullnameErrorMsg(validation.fullnameErrorMsg);
      setAddressDetailError(validation.addressDetailError);
      setAddressDetailErrorMsg(validation.addressDetailErrorMsg);
      setPhoneError(validation.phoneError);
      setPhoneErrorMsg(validation.phoneErrorMsg);
      setEmailError(validation.emailError);
      setEmailErrorMsg(validation.emailErrorMsg);
    } else {
      toast.success('Bạn đã thanh toán thành công!')
      // navigate('/');
    }
  }

  const [cart, setCart] = useState([]);

  const removeProduct = (sanpham) => {
    const updatedCart = cart.filter((sp) => sp.id !== sanpham.id);
    setCart(updatedCart);
  };

  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace(/\./g, ',');
  };

  const subTotal = cart.reduce((total, product) => {
    const productPrice = parseFloat(product.price) * product.amount;
    return total + productPrice;
  }, 0);

  const discount = 0;
  const shippingFee = 0;

  const totalPrice = subTotal + discount + shippingFee;

  useEffect(() => {
    if (props.cart && props.cart.length > 0) {
      setCart(props.cart);
    }
  }, [props.cart]);


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
          <form onSubmit={submitForm} className={paymentStyles.payment__container}>
            {/* Chi tiết đơn hàng  */}
            <div className={paymentStyles.payment__orderOverlap}>
              <div className={paymentStyles.payment__orderDetail}>
                <div className={`title--1 ${paymentStyles.orderDetail__head}`}>Chi tiết đơn hàng</div>
                <hr className={paymentStyles.orderDetail__line}></hr>
                <div className={paymentStyles.orderDetail__product}>
                  <table >
                    <tbody>
                      {cart.map((product) => (
                        <tr key={product.id} className={`${paymentStyles.product_row}`}>
                          <td className={`${paymentStyles.col1}`}>
                            <div className={paymentStyles.product_img}>
                              <img
                                className={paymentStyles.img}
                                src={product.image_urls.image_url_0}
                                alt={product.title}
                              />
                            </div>
                          </td>
                          <td className={paymentStyles.col2}>
                            <div className={`title--4 ${paymentStyles.content__title}`}>{product.title}</div>
                            <div className={`body--2 ${paymentStyles.count}`}>Số lượng: {product.amount}</div>
                          </td>
                          <td className={paymentStyles.col3}>
                            <div className={paymentStyles.x}>
                              <FaTimes onClick={() => removeProduct(product)} />
                            </div>
                            <div className={`body--2 ${paymentStyles.price}`}> {formatPrice(parseFloat(product.price) * product.amount)}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>


                <div className={`body--1 ${paymentStyles.orderDetail__info}`}>
                  <div className={`title--2 ${paymentStyles.orderDetail__info1}`} >

                    <div className={paymentStyles.info1__title}>Nhập mã khuyến mãi:</div>
                    <div className={paymentStyles.checkout__info1}>
                      <div >
                        <TextField
                          placeholder="Nhập mã khuyến mãi"
                        />
                      </div>
                      <div >
                        <Button type="btn2 primary">Áp dụng</Button>
                      </div>
                    </div>

                  </div>
                </div>

                <hr className={paymentStyles.orderDetail__line}></hr>

                <div className={`body--1 ${paymentStyles.orderDetail__info}`}>
                  <div className={paymentStyles.checkout__info1}>
                    <div >Tạm tính</div>
                    <div> {formatPrice(subTotal)}</div>
                  </div>
                  <div className={paymentStyles.checkout__info1}>
                    <div>Giảm giá: </div>
                    <div>{formatPrice(discount)}
                    </div>
                  </div>
                  <div className={paymentStyles.checkout__info1}>
                    <div >Phí vận chuyển: </div>
                    <div >{formatPrice(shippingFee)}
                    </div>
                  </div>
                </div>

                <hr className={paymentStyles.orderDetail__line}></hr>

                <div className={`body--1 ${paymentStyles.orderDetail__info}`}>
                  <div className={paymentStyles.checkout__info2}>
                    <div >
                      <div className={`body--1 `}>Tổng tiền</div>
                      <div className={`title--3 ${paymentStyles.cusInfo__head}`}> {formatPrice(totalPrice)}</div>
                    </div>
                    <div className={paymentStyles.btn}>
                      <Button type="btn1 primary" >Thanh toán</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={paymentStyles.payment__cusInfo} >
              {/* thông tin nhận hàng */}
              <div className={paymentStyles.cusInfo__overlap}>
                <div className={`title--1 ${paymentStyles.cusInfo__head}`}>Thông tin nhận hàng</div>
                <div className={paymentStyles.cusInfo__row}>
                  <div className={paymentStyles.cusInfo__col1}>
                    <TextField
                      placeholder="Họ và tên"
                      value={fullname}
                      onChange={(value) => changeInputValue("fullname", value)}
                    />
                    <div className={paymentStyles.errorcontainer}>
                      {fullnameError && <div className={paymentStyles.errorMsg}>{fullnameErrorMsg}</div>}
                    </div>
                  </div>

                  <div className={paymentStyles.cusInfo__col2}>
                    <TextField
                      placeholder="Số điện thoại"
                      value={phone}
                      onChange={(value) => changeInputValue("phone", value)}
                    />
                    <div className={paymentStyles.errorcontainer}>
                      {phoneError && <div className={paymentStyles.errorMsg}>{phoneErrorMsg}</div>}
                    </div>

                  </div>
                </div>
                <div className={paymentStyles.cusInfo__row}>
                  <div className={paymentStyles.cusInfo__col1}>
                    <TextField
                      placeholder="Email"
                      value={email}
                      onChange={(value) => changeInputValue("email", value)}
                    />
                    <div className={paymentStyles.errorcontainer}>
                      {emailError && <div className={paymentStyles.errorMsg}>{emailErrorMsg}</div>}
                    </div>
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
                      value={addressDetail}
                      onChange={(value) => changeInputValue("addressDetail", value)}
                    />
                    <div className={paymentStyles.errorcontainer}>
                      {addressDetailError && <div className={paymentStyles.errorMsg}>{addressDetailErrorMsg}</div>}
                    </div>
                  </div>
                </div>
                <div>
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
                  <label className={paymentStyles.checkbox__item}>
                    <input
                      className={paymentStyles.checkbox}
                      type="checkbox"
                      checked={selectedShippingMethod === 'express'}
                      onChange={() => handleShippingMethodChange('express')}
                      id="checkbox1"
                    />
                    Giao hàng hoả tốc (trong 2h)
                    {selectedShippingMethod === 'express' && <FaCheck className={paymentStyles.checkbox__icon} />}
                  </label>
                  <label className={paymentStyles.checkbox__item}>
                    <input
                      className={paymentStyles.checkbox}
                      type="checkbox"
                      checked={selectedShippingMethod === 'standard'}
                      onChange={() => handleShippingMethodChange('standard')}
                      id="checkbox2"
                    />
                    Giao hàng tiêu chuẩn (2-3 ngày)
                    {selectedShippingMethod === 'standard' && <FaCheck className={paymentStyles.checkbox__icon} />}
                  </label>
                </div>
              </div>
              {/* Phương thức thanh toán */}
              <div className={`body--1 ${paymentStyles.cusInfo__overlap}`}>
                <div className={`title--1 ${paymentStyles.cusInfo__head}`}>Phương thức thanh toán</div>
                <div className={paymentStyles.cusInfo__checkbox}>
                  <label className={paymentStyles.checkbox__item}>
                    <input
                      className={paymentStyles.checkbox}
                      type="checkbox"
                      checked={selectedPaymentMethod === 'COD'}
                      onChange={() => handlePaymentMethodChange('COD')}
                      id="checkbox1"
                    />
                    Thanh toán khi nhận hàng (COD)
                    {selectedPaymentMethod === 'COD' && <FaCheck className={paymentStyles.checkbox__icon} />}
                  </label>
                  <label className={paymentStyles.checkbox__item}>
                    <input
                      className={paymentStyles.checkbox}
                      type="checkbox"
                      checked={selectedPaymentMethod === 'MoMo'}
                      onChange={() => handlePaymentMethodChange('MoMo')}
                      id="checkbox2"
                    />
                    Thanh toán bằng Ví MoMo
                    {selectedPaymentMethod === 'MoMo' && <FaCheck className={paymentStyles.checkbox__icon} />}
                  </label>
                  <label className={paymentStyles.checkbox__item}>
                    <input
                      className={paymentStyles.checkbox}
                      type="checkbox"
                      checked={selectedPaymentMethod === 'Card'}
                      onChange={() => handlePaymentMethodChange('Card')}
                      id="checkbox3"
                    />
                    Thanh toán bằng thẻ ATM/VISA/MASTER
                    {selectedPaymentMethod === 'Card' && <FaCheck className={paymentStyles.checkbox__icon} />}
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div >
    </>
  )
}

export default PaymentPageGuest 
