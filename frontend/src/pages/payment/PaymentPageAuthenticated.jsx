import React, { useEffect, useState } from 'react';
import Navbar from '../../components/header/NavBar'
import { Link } from 'react-router-dom'
import TextField from '../../components/textField/TextField';
import Button from '../../components/button/Button';
import paymentStyles from './Payment.module.css'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loader from '../../components/loader/Loader';
import { axiosClient } from '../../api/axios';
import { FaTimes } from 'react-icons/fa';

const PaymentPageAuthenticated = (props) => {
    const navigate = useNavigate();
    const [selectedShippingMethod, setSelectedShippingMethod] = useState('');
    const handleShippingMethodChange = (method) => {
        setSelectedShippingMethod(method);
    };
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const handlePaymentMethodChange = (method) => {
        setSelectedPaymentMethod(method);
    };
    // Loader state
    const [isLoading, setIsLoading] = useState(true);
    const [customerData, setCustomerData] = useState();
    async function submitForm(e) {
        e.preventDefault();
        navigate('/');
    }

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axiosClient.get('/user')
                setTimeout(() => {
                    setIsLoading(false);
                })

                setCustomerData(response.data.data)
            } catch (err) {
                console.log(err)
            }
        }
        getUser();
    }, []);

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


    return isLoading ? (
        <Loader></Loader>
    ) : (
        <>
            <Navbar />
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

                        <div className={paymentStyles.payment__cusInfo}>
                            {/* Thông tin nhận hàng */}
                            <div className={paymentStyles.cusInfo__overlap}>
                                <div className={`title--1 ${paymentStyles.cusInfo__head}`}>Thông tin nhận hàng</div>
                                <div className={`body--1 ${paymentStyles.cusInfo__info}`}>
                                    <div className={paymentStyles.checkout__info1}>
                                        <div className={`title--3 ${paymentStyles.cusInfo__head1}`}>
                                            Thông tin người nhận
                                        </div>
                                        <div >
                                            <Link to='/account'>
                                                <Button type="btn2 primary">Thay đổi thông tin</Button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                                {customerData && (
                                    <div>
                                        <div className={paymentStyles.cusInfo__col1}>Họ và tên: {customerData.name} </div>

                                        <div className={paymentStyles.cusInfo__col1}>Số điện thoại: {customerData.phoneNumber}</div>

                                        <div className={paymentStyles.cusInfo__col1}>Email: {customerData.email}</div>
                                    </div>
                                )}
                                <div className={`title--3 ${paymentStyles.cusInfo__head1}`}>
                                    Địa chỉ giao hàng
                                </div>
                                {customerData && (
                                    <div>
                                        <div className={paymentStyles.cusInfo__col1}>Địa chỉ cụ thể: {customerData.addressDetails.address}</div>
                                        <div className={paymentStyles.cusInfo__col1}> Phường/Xã, Quận/Huyện: {customerData.addressDetails.ward},{" "}{customerData.addressDetails.district}</div>
                                        <div className={paymentStyles.cusInfo__col1}>Tỉnh/Thành phố: {customerData.addressDetails.province}</div>

                                    </div>
                                )}
                                <div >
                                    <div className={paymentStyles.cusInfo__col1Note}>
                                        <TextField placeholder="Ghi chú" />
                                    </div>
                                </div>
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
            </div>
        </>
    )
}

export default PaymentPageAuthenticated