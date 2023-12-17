import { useEffect, useState } from "react";
import classes from "./Cart.module.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import BoxQuantityComponent from '../../components/boxquantity/BoxQuantity'

function Cart({ setShowCart, cart, setCart }) {
  const [tongtien, setTongtien] = useState(0);

  const thaydoisoluong = (sanpham, sl) => {
    //tim san pham trong cart va thay doi mot luong sl
    const idx = cart.indexOf(sanpham);
    const arr = [...cart];
    arr[idx].amount += sl;
    if (arr[idx].amount == 0) arr[idx].amount = 1;
    setCart([...arr]);
  };

  const removeProduct = (sanpham) => {
    const arr = cart.filter((sp) => sp.id !== sanpham.id);
    setCart([...arr]);
  };
  const tinhtongtien = () => {
    let tt = 0;
    cart.map((sp) => {
      tt += sp.price * sp.amount;
    });
    setTongtien(tt);
  };

  //ham tinh tong tien tinh khi component dc render xong
  useEffect(() => {
    tinhtongtien();
  });

  const onCloseCartHandler = () => {
    setShowCart(false);
  };
  return (
    <>
      <div className={classes.cart__container}>
        <div>
          <div className={classes.cart__class}>
            <h1>Giỏ hàng của bạn</h1>
            {cart.map((product) => (
              <div className={classes.row}>
                <div className={classes.img}>
                  <img src={product.product_image} />
                </div>
                <div className={classes.title}>{product.name}</div>
                <div className={classes.controls}>
                  <BoxQuantityComponent></BoxQuantityComponent>
                <div className={classes.thanhtien}>
                  {product.price * product.amount} VND
                </div>
                <button onClick={() => removeProduct(product)}>Remove</button>
              </div>
            ))}
          </div>
          <div className={classes.cart__policy}>
            <div className={classes.policy__title}>Chính sách mua hàng</div>
            <p className={classes.policy__content}>
              Vui lòng kiểm tra kỹ sản phẩm và số lượng trước khi nhận hàng thanh toán
              <br />
              Liên hệ hotline 097xxxxxxx để được tư vấn chi tiết
            </p>
          </div>


          <div className={classes.cart__checkout}>
                <div className={classes.checkout__overlap}>
                  <div className={classes.checkout__content}>
                    <div className={classes.checkout__content1}>Tiếp tục mua hàng</div>
                    <FaArrowCircleLeft className={classes.checkout__arrow} alt="Arrow left circle" />
                  </div>
                  <div className={classes.checkout__info}>
                    <hr className={classes.checkout__line}></hr>
                    <div className="">Thông tin đơn hàng</div>
                  </div>
                  <div className={classes.checkout__info2}>
                    
                    <div > {tongtien}</div>
                    <div className="text-wrapper-6">Tổng tiền:</div>
                    <div className="text-wrapper-7">Nhập voucher:</div>
                    <div className="nhp-voucher" />
                    <p className={classes.checkout__info3} >Phí vận chuyển sẽ được tính ở trang thanh toán</p>
                  </div>
                </div>
              </div>

        </div>
      </div>
    </>
  );
}

export default Cart;