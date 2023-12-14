import React from "react";
import "./Cart.css";
import Button from "../../components/button/Button";
import Navbar from '../../components/header/NavBar'
import Footer from '../../components/footer/Footer'
const Cart = () => {
  return (
    <div >
      <Navbar />
      <div >
        <div className="desktop-mu">
          <div className="overlap">
            <div className="gi-hng">
              <div className="CS">
                <div className="text-wrapper-2">Chính sách mua hàng</div>
                <p className="vui-l-ng-ki-m-tra-k">
                  Vui lòng kiểm tra kỹ sản phẩm và số lượng trước khi nhận hàng thanh toán
                  <br />
                  Liên hệ hotline 097xxxxxxx để được tư vấn chi tiết
                </p>
              </div>
              <div className="order">
                <div className="overlap-group">
                  <div className="tip-tc-mua">
                    <div className="text-wrapper-3">Tiếp tục mua hàng</div>
                    <img className="overlap-2" alt="Arrow left circle" src="/img/arrow-left-circle.svg" />
                  </div>
                  <div className="overlap-3">
                    <img className="line" alt="Line" src="/img/line-1.svg" />
                    <div className="text-wrapper-4">Thông tin đơn hàng</div>
                  </div>
                  <div className="tng-tin">
                    <p className="p">Phí vận chuyển sẽ được tính ở trang thanh toán</p>
                    <div className="text-wrapper-5">XX0,000₫</div>
                    <div className="text-wrapper-6">Tổng tiền:</div>
                    <div className="text-wrapper-7">Nhập voucher:</div>
                    <div className="nhp-voucher" />
                  </div>
                </div>
              </div>
              <div className="ds-sp">
                <div className="sp">
                  <div className="overlap-4">
                    <div className="text-wrapper-8">X</div>
                    <div className="text-wrapper-9">45,000₫</div>
                    <div className="text-wrapper-10">15,000₫</div>
                    <div className="hnh">
                      <div className="tn-sp">
                        <div className="phn-loi">
                          <div className="ph-n-lo-i-ph-n-lo-i">
                            Phân loại:
                            <br />
                            phân loại 1
                          </div>
                        </div>
                        <div className="text-wrapper-11">Tên sản phẩm</div>
                      </div>
                      <div className="nh" />
                    </div>
                    <div className="sl">
                      <div className="overlap-2">
                        <div className="text-wrapper-12">-</div>
                        <div className="div-2" />
                      </div>
                      <div className="group">
                        <div className="overlap-group-2">
                          <div className="text-wrapper-12">+</div>
                          <div className="div-2" />
                        </div>
                      </div>
                      <div className="overlap-wrapper">
                        <div className="overlap-5">
                          <div className="text-wrapper-13">3</div>
                          <div className="rectangle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overlap-group-wrapper">
                  <div className="overlap-4">
                    <div className="text-wrapper-8">X</div>
                    <div className="text-wrapper-9">45,000₫</div>
                    <div className="text-wrapper-10">15,000₫</div>
                    <div className="hnh">
                      <div className="tn-sp">
                        <div className="phn-loi">
                          <div className="ph-n-lo-i-ph-n-lo-i">
                            Phân loại:
                            <br />
                            phân loại 1
                          </div>
                        </div>
                        <div className="text-wrapper-11">Tên sản phẩm</div>
                      </div>
                      <div className="nh-2" />
                    </div>
                    <div className="sl">
                      <div className="overlap-2">
                        <div className="text-wrapper-12">-</div>
                        <div className="div-2" />
                      </div>
                      <div className="group">
                        <div className="overlap-group-2">
                          <div className="text-wrapper-12">+</div>
                          <div className="div-2" />
                        </div>
                      </div>
                      <div className="overlap-wrapper">
                        <div className="overlap-5">
                          <div className="text-wrapper-13">3</div>
                          <div className="rectangle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-wrapper">
                  <div className="overlap-4">
                    <div className="text-wrapper-8">X</div>
                    <div className="text-wrapper-9">45,000₫</div>
                    <div className="text-wrapper-10">15,000₫</div>
                    <div className="hnh">
                      <div className="tn-sp">
                        <div className="phn-loi">
                          <div className="ph-n-lo-i-ph-n-lo-i">
                            Phân loại:
                            <br />
                            phân loại 1
                          </div>
                        </div>
                        <div className="text-wrapper-11">Tên sản phẩm</div>
                      </div>
                      <div className="nh-3" />
                    </div>
                    <div className="sl">
                      <div className="overlap-2">
                        <div className="text-wrapper-12">-</div>
                        <div className="div-2" />
                      </div>
                      <div className="group">
                        <div className="overlap-group-2">
                          <div className="text-wrapper-12">+</div>
                          <div className="div-2" />
                        </div>
                      </div>
                      <div className="overlap-wrapper">
                        <div className="overlap-5">
                          <div className="text-wrapper-13">3</div>
                          <div className="rectangle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sp-2">
                  <div className="overlap-4">
                    <div className="text-wrapper-8">X</div>
                    <div className="text-wrapper-9">45,000₫</div>
                    <div className="text-wrapper-10">15,000₫</div>
                    <div className="hnh">
                      <div className="tn-sp">
                        <div className="phn-loi">
                          <div className="ph-n-lo-i-ph-n-lo-i">
                            Phân loại:
                            <br />
                            phân loại 1
                          </div>
                        </div>
                        <div className="text-wrapper-11">Tên sản phẩm</div>
                      </div>
                      <div className="nh-4" />
                    </div>
                    <div className="sl">
                      <div className="overlap-2">
                        <div className="text-wrapper-12">-</div>
                        <div className="div-2" />
                      </div>
                      <div className="group">
                        <div className="overlap-group-2">
                          <div className="text-wrapper-12">+</div>
                          <div className="div-2" />
                        </div>
                      </div>
                      <div className="overlap-wrapper">
                        <div className="overlap-5">
                          <div className="text-wrapper-13">3</div>
                          <div className="rectangle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tiu">
                <div className="navbar">
                  <div className="text-wrapper-14">Sản phẩm</div>
                  <div className="text-wrapper-15">Đơn giá</div>
                  <div className="text-wrapper-16">Số tiền</div>
                  <div className="text-wrapper-17">Số lượng</div>
                </div>
              </div>
            </div>
            <Button className="btn1" divClassName="button-instance" size="large" text="Thanh toán" type="primary" />
          </div>
          <div className="text-wrapper-18">Giỏ hàng của bạn</div>
          <p className="text-wrapper-19">Trang chủ | Giỏ hàng</p>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};
export default Cart