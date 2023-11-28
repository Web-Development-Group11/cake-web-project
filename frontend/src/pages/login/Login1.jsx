import React from "react";
import "./Login.css";
import logo from '../../assets/image/logo.png';
import bglogin from '../../assets/image/logo.png';

const desktopLogin = () => {
  return (
    <div className="desktop-login">
      <div className="div">
        <div className="reg-frame">
          <div className="group">
            <div className="username">
              <div className="overlap-group">
                <p className="text-wrapper">Tên đăng nhập/ Email / Phone</p>
              </div>
              <div className="text-wrapper-2">Tên đăng nhập</div>
            </div>
            <div className="password">
              <div className="overlap-group">
                <div className="text-wrapper">Mật khẩu</div>
                <img className="eye-off" alt="Eye off" src="/img/eye-off.svg" />
              </div>
              <div className="text-wrapper-2">Mật khẩu</div>
              <div className="text-wrapper-3">Quên mật khẩu</div>
            </div>
            <div className="group-2">
              <div className="title">
                <p className="p">Đăng nhập vào tài khoản của bạn</p>
              </div>
              <p className="text-wrapper-4">Tận hưởng những hương vị ngọt ngào!</p>
            </div>
            <div className="submit-btn">
              <div className="overlap-group-wrapper">
                <div className="div-wrapper">
                  <div className="text-wrapper-5">Đăng nhập</div>
                </div>
              </div>
              <p className="b-n-kh-ng-c-t-i-kho">
                <span className="span">Bạn không có tài khoản? </span>
                <span className="text-wrapper-6">Đăng ký</span>
              </p>
            </div>
            <img className="line" alt="Line" src="/img/line-1.svg" />
          </div>
          <img className="bng-cake" alt="Bng cake" src={logo} />
        </div>
        <div className="overlap">
          <div className="logo-wrapper">
            <div className="logo">
              <div className="overlap-group-2">
                <div className="text-wrapper-7">Logo</div>
              </div>
            </div>
          </div>
          <img
            className="cupcakes-with-glaze"
            alt="Cupcakes with glaze"
            src={bglogin}
          />
        </div>
      </div>
    </div>
  );
};

export default desktopLogin