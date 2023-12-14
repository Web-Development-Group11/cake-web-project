import React from 'react'
import "./Register.css";
import logo from "../../assets/image/logo.png";
import bg from "../../assets/image/bgregister.png";
import Button from "../../components/button/Button";
import TextField from "../../components//textField/TextField";

const Register = () => {
  return (
    <div className="register__container">
      {/* hinh */}
      <div className="img-holder">
        <div className="bg"></div>
        <div className="info-holder">
          <img alt="Background" src={bg} />
        </div>
      </div>
      {/* form */}
      <div className="register__frame">
        {/* logo */}
        <div className="website-logo">
          <a href="/">
            <img alt="Bong cake logo" src={logo} />
          </a>
        </div>
        <div className="register__form">
          <div className="register__form--frameinput">
            {/* title */}
            <div className="register__form--title">
              <span className="title1">
                <span className={`heading`}>Tạo tài khoản mới</span>
              </span>
              <span className="title2">
                <span className={`body--1`}>Tận hưởng những hương vị ngọt ngào!</span>
              </span>
            </div>
            {/* form */}
            <form className="register__form--input">
              {/* input username */}
              <div className="register__form--user">
                <div className="register__form--username-title">
                  <div className={`title--3`}>Tên đăng nhập</div>
                </div>
                <div className="input-wrapper">
                  <TextField
                    className={`body--2`}
                    type="text"
                    placeholder={"Email/ Số điện thoại"}
                    style={{ borderColor: userColor }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}

                  />
                </div>
              </div>


              {/* input password */}
              <div className="register__form--password">
                <div className="register__form--username-title">
                  <div className="title--3">Mật khẩu</div>
                </div>
              </div>
              <div className="input-wrapper">
                <TextField
                  className={`body--2`}
                  type="password"
                  placeholder="Mật khẩu"
                  style={{ borderColor: passwordColor }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* re-input password */}
              <div className="register__form--re-password">
                <div className="register__form--username-title">
                  <div className="title--3">Nhập lại mật khẩu</div>
                </div>
              </div>
              <div className="input-wrapper">
                <TextField
                  className={`body--2`}
                  type="password"
                  placeholder="Mật khẩu"
                  style={{ borderColor: passwordColor }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* line */}
              <div className="register__form--line">
                <hr />
              </div>
              {/* button */}
              <div className="register__form--submit-btn">
                <Button type="btn2 primary" className="btn" onClick={validate}>
                  Đăng ký
                </Button>
              </div>
            </form>
            {/* đăng nhập */}
            <div className="register__form--login">
              <div className={`title--3`}>
                <span className="register__form--register-title1">Đã có tài khoản? </span>
                <a className="register__form--register-title2" href="/">
                  Đăng ký
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register