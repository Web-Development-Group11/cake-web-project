import { useEffect, useState } from "react";
import cartStyles from "./Cart.module.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import BoxQuantityComponent from '../../components/boxquantity/BoxQuantity';
import Header from '../../components/header/NavBar';
import Footer from '../../components/footer/Footer';

function Cart({ setShowCart, cart, setCart }) {
  const [tongtien, setTongtien] = useState(0);

  const thaydoisoluong = (sanpham, sl) => {
    //tim san pham trong cart va thay doi mot luong sl
    const idx = cart.indexOf(sanpham);
    const arr = [...cart];
    arr[idx].amount += sl;
    if (arr[idx].amount === 0) arr[idx].amount = 1;
    setCart([...arr]);
  };

  const removeProduct = (sanpham) => {
    const arr = cart.filter((sp) => sp.id !== sanpham.id);
    setCart([...arr]);
  };

  const tinhtongtien = () => {
    let tt = 0;
    cart.forEach((sp) => {
      tt += sp.price * sp.amount;
    });
    setTongtien(tt);
  };

  //ham tinh tong tien tinh khi component dc render xong
  useEffect(() => {
    tinhtongtien();
  }, [cart]); // Added cart as a dependency

  const onCloseCartHandler = () => {
    setShowCart(false);
  };

  return (
    <>
    <Header></Header>
      <div className={cartStyles.cart__container}>
        <div className={`heading ${cartStyles.head}`}>Giỏ hàng của bạn</div>

        <div className={cartStyles.cart__class}>

          {cart.map((product) => (
            <div key={product.id} className={cartStyles.row}>
              <div className={cartStyles.img}>
                <img src={product.product_image} alt={product.name} />
              </div>
              <div className={cartStyles.title}>{product.name}</div>
              <div className={cartStyles.controls}>
                <BoxQuantityComponent height="1.5rem" />
              </div>
              <div className={cartStyles.thanhtien}>
                {product.price * product.amount} VND
              </div>
              <FaXmark onClick={() => removeProduct(product)} />

            </div>
          ))}
        </div>
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
