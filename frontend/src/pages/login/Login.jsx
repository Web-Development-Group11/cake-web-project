import { useState } from "react";
import "./Login.css";
import logo from "../../assets/image/logo.png"
import bg from "../../assets/image/bglogin.png"
// import Button from '../../components/button/Button';
import { FaRegEyeSlash } from "react-icons/fa";


function Login() {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [phoneColor, setPhoneColor] = useState("");
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
    <div className="desktop-login">
      <form>
      <div className="div">
        <div className="reg-frame">
          <div className="group">
            <div className="username">
              <div className="overlap-group">
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


              <div className="text-wrapper-2"><div className={`title--3`}>Tên đăng nhập</div></div>
            </div>
            <div className="password">
              <div className="overlap-group">
                <div className="text-wrapper" >
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
              <div className="text-wrapper-2"><div className= {`title--3`}>Mật khẩu</div></div>
              <div className="text-wrapper-3"><div className= {`title--3`}>Quên mật khẩu</div></div>
            </div>

            
            <div className="group-2">
                <p className="p"> <span className= {`heading`}>Đăng nhập vào tài khoản của bạn</span></p>
                <p className="text-wrapper-4"><span className= {`body--1`}>Tận hưởng những hương vị ngọt ngào!</span></p>
            </div>
            <div className="submit-btn">
              <div className="overlap-group-wrapper">
                <div className="div-wrapper">
                  <div className="text-wrapper-5">
                  <button className="btn1" onClick={validate} >Đăng nhập</button>
                  </div>
                </div>
              </div>
              <p className="dangky">
                <p className= {`title--3`}>
                <span className="span">Bạn không có tài khoản? </span>
                <span className="text-wrapper-6">Đăng ký</span>
                </p>
              </p>
            </div>
            <hr className="line" />
          </div>
          <img className="bng-cake" alt="Bng cake" src={logo}/>
        </div>


        <div className="overlap">
          <img
            className="cupcakes-with-glaze"
            alt="Cupcakes with glaze"
            src={bg}
          />

        </div>
      </div>
      </form>
    </div>
  );
};
export default Login;