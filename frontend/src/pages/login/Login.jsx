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
      // Check username conditions
      if (logininfor.length > 8) {
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
      setErrorPassword("Password should be 8 letters long ");
      setPasswordColor("red");
    }
  }

  return (
    <div className="login__container">
      <form className="login__form ">
        <div className="login__form--frame">
          {/* logo */}
          <img className="login__logo" alt="Bong cake logo" src={logo}/>
          <div className="login__form--frameinput">
            {/* title */}
            <div className="login__form--title">
                <p className="p"> <span className= {`heading`}>Đăng nhập vào tài khoản của bạn</span></p>
                <p className="login__form--title-slogan"><span className= {`body--1`}>Tận hưởng những hương vị ngọt ngào!</span></p>
            </div>
            {/* input username */}
            <div className="login__form--input">
              <div className="login__form--username-input">
                <div className={`body--2`}>
                  <input
                    type="text"
                    placeholder="Tên đăng nhập/ Email/ Số điện thoại"
                    style={{ borderColor: userColor }}
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                  />
                  <p className="error">{errorUserName}</p>
                  <p className="error">{errorEmail}</p>
                  <p className="error">{errorPhone}</p>
                </div>
              </div>
              <div className="login__form--username-title"><div className={`title--3`}>Tên đăng nhập</div></div>
            </div>
            {/* input password */}
            <div className="login__form--password">
              <div>
                <div className="login__form--password-input" >
                  <div className={`body--2`}>
                  <input
                    type="password"
                    placeholder="Mật khẩu"
                    style={{ borderColor: passwordColor }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="error">{errorPassword}</p>
                  </div>
                </div>
                <FaRegEyeSlash className="eye-off"/>
              </div>
              <div className= {`title--3`}>
                <div>Mật khẩu</div>
                <div className="login__form--password-forget">Quên mật khẩu</div>
              </div>
            </div>
            {/* line */}
            <hr className="login__form--line" />
            {/* button */}
            <div className="login__form--submit-btn">
              <div >
                <div className="div-wrapper">
                  <div className={`body--2`}>
                  <button className="btn1" onClick={validate} >Đăng nhập</button>
                  </div>
                </div>
              </div>
             
            </div>

            <p className="login__form--register">
                <p className= {`title--3`}>
                <span className="span">Bạn không có tài khoản? </span>
                <a className="login__form--register-text" href="#">Đăng ký</a>
                </p>
              </p>
          </div>

        </div>
      </form>
      <div className="login__bg">
          <img
            className="login__bg"
            alt="Cupcakes with glaze"
            src={bg}
          />

        </div>
    </div>
  );
};
export default Login;