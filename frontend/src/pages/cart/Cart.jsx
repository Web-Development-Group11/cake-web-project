import { useEffect, useState } from "react";
import cartStyles from "./Cart.module.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import BoxQuantityComponent from '../../components/boxquantity/BoxQuantity';
import Header from '../../components/header/NavBar';
import Footer from '../../components/footer/Footer';

function Cart({ setShowCart, cart, setCart }) {
  const [tongtien, setTongtien] = useState(0);

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          amount: newQuantity,
        };
      }
      return product;
    });
    setCart(updatedCart);
  };

  const removeProduct = (sanpham) => {
    const updatedCart = cart.filter((sp) => sp.id !== sanpham.id);
    setCart(updatedCart);
  };

  const tinhtongtien = () => {
    let tt = 0;
    cart.forEach((sp) => {
      tt += sp.price * sp.amount;
    });
    setTongtien(tt);
  };

  const formatPrice = (price) => {
    return price.toLocaleString();
  };

  // Calculate the total price when the component is rendered or when the cart changes
  useEffect(() => {
    tinhtongtien();
  }, [cart]);
  return (
    <>
      <Header></Header>
      <div className={cartStyles.cart__container}>
        <div className={`heading ${cartStyles.head}`}>Giỏ hàng của bạn</div>

        <table className={cartStyles.cart__class}>
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
            {cart.map((product) => (
              <tr key={product.id} className={`body--1 ${cartStyles.class_row}`}>
                <td className={`${cartStyles.col1}`}>
                  <div className={cartStyles.product_img}>
                    <img className={cartStyles.img} src={product.product_image} alt={product.name} />
                  </div>
                  <span className={cartStyles.product_name}>{product.name}</span>
                </td>
                <td className={cartStyles.col2}>
                  <span>{formatPrice(product.price)} đ</span>
                </td>
                <td className={cartStyles.col2}>
                  <BoxQuantityComponent
                    height="1.5rem"
                    quantity={product.amount}
                    onQuantityChange={(newQuantity) => handleQuantityChange(product.id, newQuantity)}
                  />
                </td>
                <td className={cartStyles.col2}>
                  {formatPrice(product.price * product.amount)} đ
                </td>
                <td className={cartStyles.col3}>
                  <FaXmark onClick={() => removeProduct(product)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={cartStyles.cart__policy}>
          <div className={cartStyles.policy__title}>Chính sách mua hàng</div>
          <p className={cartStyles.policy__content}>
            Vui lòng kiểm tra kỹ sản phẩm và số lượng trước khi nhận hàng thanh toán
            <br />
            Liên hệ hotline 097xxxxxxx để được tư vấn chi tiết
          </p>
        </div>

        <div className={cartStyles.cart__checkout}>
          <div className={cartStyles.checkout__overlap}>
            <div className={cartStyles.checkout__content}>
              <div className={cartStyles.checkout__content1}>Tiếp tục mua hàng</div>
              <FaArrowCircleLeft className={cartStyles.checkout__arrow} alt="Arrow left circle" />
            </div>
            <div className={cartStyles.checkout__info}>
              <hr className={cartStyles.checkout__line}></hr>
              <div className="">Thông tin đơn hàng</div>
            </div>
            <div className={cartStyles.checkout__info2}>
              <div>{tongtien}</div>
              <div className="text-wrapper-6">Tổng tiền:</div>
              <div className="text-wrapper-7">Nhập voucher:</div>
              <div className="nhp-voucher" />
              <p className={cartStyles.checkout__info3}>Phí vận chuyển sẽ được tính ở trang thanh toán</p>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer></Footer> */}

    </>
  );
}

export default Cart;
