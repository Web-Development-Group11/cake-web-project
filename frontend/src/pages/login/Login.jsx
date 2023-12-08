import { useState } from "react";
import "./Login.css";
import logo from "../../assets/image/logo.png"
import bg from "../../assets/image/bglogin.png"
import { FaRegEyeSlash } from "react-icons/fa";

function Login() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [setEmailColor] = useState("");
  const [setPhoneColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");

  function validate(e) {
    e.preventDefault();
    let logininfor = username;
    let isEmail = logininfor.includes("@");
    let isPhone = logininfor.startsWith("0") && logininfor.length === 10;

    if (isEmail) {
      // Check email conditions
      if (logininfor.includes("@gmail.com")) {
        setErrorEmail("");
        setEmailColor("green");
      } else {
        setErrorEmail("Email should have @gmail.com");
        setEmailColor("red");
      }
    } else if (isPhone) {
      // Check phone conditions
      if (logininfor.startsWith("0") && logininfor.length === 10) {
        setErrorPhone("");
        setPhoneColor("green");
      } else {
        setErrorPhone("Phone number must be 10 digits starting with 0");
        setPhoneColor("red");
      }
    } else {
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password should be 8 letters long ");
      setPasswordColor("red");
    }
  }

  return (
    <div className="login__container">
      <div className="login__form">
        {/* logo */}
        <div className="website-logo">
          <a href="#">

            <img alt="Bong cake logo" src={logo} />

          </a>
        </div>
        {/* hinh */}
        <div className="img-holder">
          <div className="bg"></div>
          <div className="info-holder">
            <img
              alt="Cupcakes with glaze"
              src={bg}
            />
          </div>
        </div>
        {/* form */}
        <div className="login__form--frame">
          <div className="login__form--frameinput">
            {/* title */}
            <div className="login__form--title">
              <span className="title1" > <span className={`heading`} >Đăng nhập vào tài khoản của bạn</span></span>
              <span className="title2"><span className={`body--1`}>Tận hưởng những hương vị ngọt ngào!</span></span>
            </div>
            {/* form */}
            <form className="login__form--input">
              {/* input username */}
              <div className="login__form--user">
                <div className="login__form--username-title"><div className={`title--3`}>Tên đăng nhập</div></div>
                <div className="login__form--username-input">
                  <div className={`body--2`}>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Email/ Số điện thoại"
                      style={{ borderColor: userColor }}
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                    />

                  </div>
                  <div className="error-container">
                    <p className="error">{errorEmail}</p>
                    <p className="error">{errorPhone}</p>
                  </div>

                </div>


              </div>
              {/* input password */}

              <div className="login__form--password">
                <div className="login__form--password-title">
                  <div className="login__form--password-title1">
                    <div className="title--3">Mật khẩu</div>
                  </div>
                  <div className="login__form--password-title2">
                    <a href="#">Quên mật khẩu</a>
                  </div>
                </div>
                <div className="login__form--password-input" >
                  <div className="input-wrapper">
                    <input
                      className={`body--2`}
                      type="password"
                      placeholder="Mật khẩu"
                      style={{ borderColor: passwordColor }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <FaRegEyeSlash className="eye-off" />
                </div>
                <div className="error-container">
                  <p className="error">{errorPassword}</p>
                </div>
              </div>
              {/* line */}
              <div className="login__form--line" >
                <hr />
              </div>
              {/* button */}
              <div className="login__form--submit-btn">
                <div className="div-wrapper">
                  <div className={`body--2`}>
                    <button className="btn1" onClick={validate} >Đăng nhập</button>
                  </div>
                </div>
              </div>
            </form>
            {/* đăng ký */}
            <div className="login__form--register">
              <div className={`title--3`}>
                <span className="span">Mật khẩu</span>
                <a className="login__form--password-title2" href="#">Đăng ký</a>
              </div>
            </div>

          </div>
        </div>
      </div >
    </div >
  );
};
export default Login;