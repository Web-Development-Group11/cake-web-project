// import React from 'react'
import { useState } from "react";
import "./Register.css";
import logo from "../../assets/image/logo.png";
import bg from "../../assets/image/bgregister.png";
import Button from "../../components/button/Button";
import TextField from "../../components/textField/TextField";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRePassword, setErrorRePassword] = useState("");
  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [phoneColor, setPhoneColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [repasswordColor, setRePasswordColor] = useState("");

  function validate(e) {
    e.preventDefault();
    let loginInfo = username;
    let isEmail = loginInfo.includes("@");
    let isPhone = loginInfo.startsWith("0") && loginInfo.length === 10;

    if (isEmail) {
      // Check email conditions
      if (loginInfo.includes("@gmail.com")) {
        setErrorEmail("");
        setEmailColor("green");
      } else {
        setErrorEmail("Email should have @gmail.com");
        setEmailColor("red");
      }
    } else if (isPhone) {
      // Check phone conditions
      if (loginInfo.startsWith("0") && loginInfo.length === 10) {
        setErrorPhone("");
        setPhoneColor("green");
      } else {
        setErrorPhone("Phone number must be 10 digits starting with 0");
        setPhoneColor("red");
      }
    } else {
      // Check username conditions
      if (loginInfo.length > 8) {
        setErrorUserName("");
        setUserColor("green");
      } else {
        setErrorUserName("Username must be 8 letters long.");
        setUserColor("red");
      }
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password should be 8 letters long");
      setPasswordColor("red");
    }
    if (password === repassword) {
      setErrorRePassword("");
      setRePasswordColor("green");
    } else {
      setErrorRePassword("Password should be 8 letters long");
      setRePasswordColor("red");
    }

  }


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
                <span className={`heading`}>Tạo tài khoản mới!</span>
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
                    // value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <div className="error-container">
                    <p className="error">{errorUserName}</p>
                    <p className="error">{errorEmail}</p>
                    <p className="error">{errorPhone}</p>
                  </div>

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
                  // value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="error-container">
                  <p className="error">{errorPassword}</p>
                </div>
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
                  placeholder="Nhập lại mật khẩu"
                  style={{ borderColor: repasswordColor }}
                  // value={repassword}
                  onChange={(e) => setRePassword(e.target.value)}
                />
                <div className="error-container">
                  <p className="error">{errorRePassword}</p>
                </div>
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