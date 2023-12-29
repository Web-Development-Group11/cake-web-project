import React, { useEffect, useState, useCallback, useRef } from "react";
import cartStyles from "./Cart.module.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import BoxQuantityComponent from '../../components/boxquantity/BoxQuantity';
import Header from '../../components/header/NavBar';
import Footer from '../../components/footer/Footer';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { fetcher } from "../../api/fetcher";
import { axiosClient } from "../../api/axios";
import { useCurrentUser } from "../../hook/useCurrentUser";

function Cart({ setShowCart, cart, setCart, setIsBuyNow }) {

  const [tongtien, setTongtien] = useState(0);
  const [someState, setSomeState] = useState(0);
  const listRef = useRef(null);

  const { data: currentUser } = useCurrentUser();


  const handleQuantityChange = useCallback((productId, newQuantity) => {
    // Check if the quantity is actually changing
    if (cart?.some(product => product.id === productId && product.amount !== newQuantity)) {
      setCart((prevCart) => {
        const updatedCart = prevCart.map((product) => {
          if (product.id === productId) {
            return {
              ...product,
              amount: newQuantity,
            };
          }
          return product;
        });
        return updatedCart;
      });
    }
  }, [cart, setCart]);

  const removeProduct = (sanpham) => {
    const updatedCart = cart?.filter((sp) => sp.id !== sanpham.id);
    setCart(updatedCart);
  };

  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace(/\./g, ',');
  };

  const tinhtongtien = useCallback(() => {
    let tt = 0;
    cart?.forEach((sp) => {
      tt += sp.price * sp.amount;
    });
    setTongtien(tt);
  }, [cart, setTongtien]);

  const saveGuestCart = async () => {
    try {
      await axiosClient.post('/cart', { cart })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    tinhtongtien();
  }, [cart, someState, tinhtongtien]);

  useEffect(() => {
    saveGuestCart();
  })

  return (
    <>
      <div className={cartStyles.cart__container}>
        {/* Breadcrumb */}
        <Breadcrumb />
        {/* Tiêu đề */}
        <div className={`heading ${cartStyles.head}`}>Giỏ hàng của bạn</div>
        {/* Giỏ hàng */}
        <table ref={listRef} className={`${cartStyles.cart__class} ${cartStyles.customTable}`}>

          <thead>
            <tr className={`title--2 ${cartStyles.class_header}`}>
              <th className={cartStyles.header__col1}>Sản phẩm</th>
              <th className={cartStyles.col2}>Đơn giá</th>
              <th className={cartStyles.col2}>Số lượng</th>
              <th className={cartStyles.col2}>Số tiền</th>
              <th className={cartStyles.col3}></th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((product) => (
              <tr key={product.id} className={`body--2 ${cartStyles.class_row}`}>
                <Link to={`/product/${product.id}`} className={`${cartStyles.col1}`}>
                  <div className={cartStyles.product_img}>
                    <div className={cartStyles.img_container}>
                      <img className={cartStyles.img} src={product?.image_urls.image_url_0} alt={product.title} />
                    </div>
                  </div>
                  <div className={cartStyles.product_name}>{product.title}</div>
                </Link>
                <td className={cartStyles.col2}>
                  <span>{formatPrice(product.price)}</span>
                </td>
                <td className={cartStyles.col2}>
                  <BoxQuantityComponent
                    height="1.5rem"
                    quantity={product.amount}
                    onQuantityChange={(newQuantity) => handleQuantityChange(product.id, newQuantity)}
                  />
                </td>
                <td className={cartStyles.col2}>
                  {formatPrice(product.price * product.amount)}
                </td>
                <td className={cartStyles.col3}>
                  <FaXmark onClick={() => removeProduct(product)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Tổng đơn hàng */}
        <div className={cartStyles.cart__checkout}>
          <div className={cartStyles.checkout__overlap}>
            <div className={`title--1 ${cartStyles.checkout__head}`}>Thông tin đơn hàng</div>
            <hr className={cartStyles.checkout__line}></hr>

            <div className={`body--1 ${cartStyles.checkout__info}`}>
              <div className={cartStyles.checkout__info1}>
                <div className={cartStyles.info1__title}>Tạm tính:</div>
                <div className={cartStyles.info1__amount}>  {formatPrice(tongtien)}</div>
              </div>

              <div className={`body--2 ${cartStyles.checkout__info3}`}>Phí vận chuyển sẽ được tính ở trang thanh toán</div>

              <div className={cartStyles.checkout__btn} onClick={() => setIsBuyNow(false)}>
                {!currentUser && (
                  <Link to="/paymentpageguest">
                    <Button type="btn1 primary">Thanh toán</Button>
                  </Link>
                )}
                {currentUser && (
                  <Link to="/paymentpageauth">
                    <Button type="btn1 primary">Thanh toán</Button>
                  </Link>
                )}
              </div>

              <div className={`body--2 ${cartStyles.back__arrow}`}>
                <Link to="/product">
                  <FaArrowCircleLeft alt="Arrow left circle" /> Tiếp tục mua hàng
                </Link>
              </div>

            </div>
          </div>

          {/* chính sách */}
          <div className={cartStyles.cart__policy}>
            <a href="/policy" className={`title--2 ${cartStyles.policy__title}`} >Chính sách giao hàng </a>
            <ul className={`body--2 ${cartStyles.policy__content}`} >
              <li>Vui lòng kiểm tra kỹ sản phẩm và số lượng trước khi nhận hàng thanh toán</li>
              <li>Liên hệ hotline 0123456789 để được tư vấn chi tiết</li>
            </ul>

          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;