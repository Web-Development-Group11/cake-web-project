import React, { useEffect, useState } from 'react';
import Navbar from '../../components/header/NavBar'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import TextField from '../../components/textField/TextField';
import Button from '../../components/button/Button';
import paymentStyles from './Payment.module.css'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { FaCheck } from "react-icons/fa";
const PaymentPageAuthenticated = () => {
    const [customerData, setCustomerData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const data = [
                    {
                        "username": "Nguyen Van A",
                        "phone": "0123456789",
                        "email": "example1@email.com",
                        "address": {
                            "detail": "251",
                            "ward": "phường 23",
                            "district": "quận 1",
                            "province": "Thành phố Hồ Chí Minh"
                        }
                    }
                ];

                // Thiết lập dữ liệu trong state
                setCustomerData(data[0]);
            } catch (error) {
                console.error('Error fetching customer data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            <Navbar />
            <div className={paymentStyles.center}>
                <div className={paymentStyles.payment}>
                    <Breadcrumb />
                    <div className={paymentStyles.payment__container}>
                        {/* Chi tiết đơn hàng  */}
                        <div className={paymentStyles.payment__orderOverlap}>
                            <div className={paymentStyles.payment__orderDetail}>
                                <div className={`title--1 ${paymentStyles.orderDetail__head}`}>Chi tiết đơn hàng</div>
                                <hr className={paymentStyles.orderDetail__line}></hr>
                                <div className={paymentStyles.orderDetail__product}>card sp </div>

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
                                        <div>90,000 </div>
                                    </div>
                                    <div className={paymentStyles.checkout__info1}>
                                        <div>Giảm giá: </div>
                                        <div>0
                                        </div>
                                    </div>
                                    <div className={paymentStyles.checkout__info1}>
                                        <div >Phí vận chuyển: </div>
                                        <div >0
                                        </div>
                                    </div>
                                </div>

                                <hr className={paymentStyles.orderDetail__line}></hr>

                                <div className={`body--1 ${paymentStyles.orderDetail__info}`}>
                                    <div className={paymentStyles.checkout__info1}>
                                        <div >
                                            <div className={`body--1 `}>Tổng tiền</div>
                                            <div className={`title--3 ${paymentStyles.info1__sumup}`}>90,000</div>
                                        </div>
                                        <div >
                                            <Button type="btn1 primary">Thanh toán</Button>
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
                                            <Button type="btn2 primary">Thay đổi thông tin</Button>
                                        </div>
                                    </div>
                                </div>
                                {customerData && (
                                    <div>
                                        <div className={paymentStyles.cusInfo__col1}>Họ và tên: {customerData.username} </div>

                                        <div className={paymentStyles.cusInfo__col1}>Số điện thoại: {customerData.phone}</div>

                                        <div className={paymentStyles.cusInfo__col1}>Email: {customerData.email}</div>
                                    </div>
                                )}
                                <div className={`title--3 ${paymentStyles.cusInfo__head1}`}>
                                    Địa chỉ giao hàng
                                </div>
                                {customerData && customerData.address && (
                                    <div>
                                        <div className={paymentStyles.cusInfo__col1}>Địa chỉ cụ thể: {customerData.address.detail}</div>
                                        <div className={paymentStyles.cusInfo__col1}> Phường/Xã, Quận/Huyện: {customerData.address.ward},{" "}{customerData.address.district}</div>
                                        <div className={paymentStyles.cusInfo__col1}>Tỉnh/Thành phố: {customerData.address.province}</div>

                                    </div>
                                )}
                                <div className={paymentStyles.cusInfo__row}>
                                    <div className={paymentStyles.cusInfo__col1Note}>
                                        <TextField placeholder="Ghi chú" />
                                    </div>
                                </div>
                            </div>

                            {/* Phương thức vận chuyển */}
                            < div className={`body--1 ${paymentStyles.cusInfo__overlap}`}>
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
            </div>
            <Footer />
        </>
    )
}

export default PaymentPageAuthenticated