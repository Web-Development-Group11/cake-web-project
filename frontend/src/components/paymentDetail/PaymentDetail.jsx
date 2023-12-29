import React, { useState, useRef, useCallback, useEffect } from 'react';
import TextField from '../textField/TextField';
import Button from '../button/Button';

import { FaTimes } from 'react-icons/fa'; // Assuming you're using FaTimes for the remove icon
import payDetailStyles from './PaymentDetail.module.css';

const PaymentDetail = (props) => {
    // Dummy data for testing
    const [cart, setCart] = useState([
        {
            "image_urls": {
                "image_url_0": "https://cupcakecentral.com.au/cdn/shop/products/CLASSIC-INDIVIDUAL-CUT-CC-VV.jpg?v=1681779966",
                "image_url_1": "https://cupcakecentral.com.au/cdn/shop/products/CLASSIC-STYLED-CC-VV.jpg?v=1681783651",
                "image_url_2": null,
                "image_url_3": null,
                "image_url_4": null,
                "image_url_5": null,
                "image_urls_0": null,
                "image_urls_1": null,
                "image_urls_2": null,
                "image_urls_3": null
            },
            "id": "658058d48d7ea0928f7babd5",
            "price": 4.6,
            "product_description": "There is nothing ordinary about this Vanilla...",
            "specific_type": "cupcake",
            "title": "Vanilla Vanilla - Cupcake",
            "amount": 3 // Assuming amount is part of the product object
        },
        {
            "image_urls": {
                "image_url_0": "https://cupcakecentral.com.au/cdn/shop/products/CLASSIC-INDIVIDUAL-CUT-CC-DFC.jpg?v=1681779984",
                "image_url_1": "https://cupcakecentral.com.au/cdn/shop/products/CLASSIC-STYLED-CC-DFC.jpg?v=1681783491",
                "image_url_2": "https://cupcakecentral.com.au/cdn/shop/products/CLASSIC-STYLED-CC-DFC-2.jpg?v=1681783491",
                "image_url_3": null,
                "image_url_4": null,
                "image_url_5": null,
                "image_urls_0": null,
                "image_urls_1": null,
                "image_urls_2": null,
                "image_urls_3": null
            },
            "id": "658058d48d7ea0928f7babd6",
            "price": 4.6,
            "product_description": "NEW LOOK, same great taste...",
            "specific_type": "cupcake",
            "title": "Devil's Food Chocolate - Cupcake",
            "amount": 2 // Assuming amount is part of the product object
        }
    ]);

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
        setCart(props.cart);
    }, [])

    return (
        <>

            <div className={payDetailStyles.payment__orderDetail}>
                <div className={`title--1 ${payDetailStyles.orderDetail__head}`}>Chi tiết đơn hàng</div>
                <hr className={payDetailStyles.orderDetail__line}></hr>
                <div className={payDetailStyles.orderDetail__product}>
                    <table >
                        <tbody>
                            {cart.map((product) => (
                                <tr key={product.id} className={`${payDetailStyles.product_row}`}>
                                    <td className={`${payDetailStyles.col1}`}>
                                        <div className={payDetailStyles.product_img}>
                                            <img
                                                className={payDetailStyles.img}
                                                src={product.image_urls.image_url_0}
                                                alt={product.title}
                                            />
                                        </div>
                                    </td>
                                    <td className={payDetailStyles.col2}>
                                        <div className={`title--4 ${payDetailStyles.content__title}`}>{product.title}</div>
                                        <div className={`body--2 ${payDetailStyles.count}`}>Số lượng: {product.amount}</div>
                                    </td>
                                    <td className={payDetailStyles.col3}>
                                        <div className={payDetailStyles.x}>
                                            <FaTimes onClick={() => removeProduct(product)} />
                                        </div>
                                        <div className={`body--2 ${payDetailStyles.price}`}> {formatPrice(parseFloat(product.price) * product.amount)}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                <div className={`body--1 ${payDetailStyles.orderDetail__info}`}>
                    <div className={`title--2 ${payDetailStyles.orderDetail__info1}`} >

                        <div className={payDetailStyles.info1__title}>Nhập mã khuyến mãi:</div>
                        <div className={payDetailStyles.checkout__info1}>
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

                <hr className={payDetailStyles.orderDetail__line}></hr>

                <div className={`body--1 ${payDetailStyles.orderDetail__info}`}>
                    <div className={payDetailStyles.checkout__info1}>
                        <div >Tạm tính</div>
                        <div> {formatPrice(subTotal)}</div>
                    </div>
                    <div className={payDetailStyles.checkout__info1}>
                        <div>Giảm giá: </div>
                        <div>{formatPrice(discount)}
                        </div>
                    </div>
                    <div className={payDetailStyles.checkout__info1}>
                        <div >Phí vận chuyển: </div>
                        <div >{formatPrice(shippingFee)}
                        </div>
                    </div>
                </div>

                <hr className={payDetailStyles.orderDetail__line}></hr>

                <div className={`body--1 ${payDetailStyles.orderDetail__info}`}>
                    <div className={payDetailStyles.checkout__info2}>
                        <div >
                            <div className={`body--1 `}>Tổng tiền</div>
                            <div className={`title--3 ${payDetailStyles.cusInfo__head}`}> {formatPrice(totalPrice)}</div>
                        </div>
                        <div className={payDetailStyles.btn}>
                            <Button type="btn1 primary">Thanh toán</Button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PaymentDetail;