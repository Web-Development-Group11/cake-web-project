import { useState } from "react";
import formStyles from "./Form.module.css";
import logo from "../../assets/image/logo.png";
import bg from "../../assets/image/bglogin.png";
import Button from "../../components/button/Button";
import TextField from "../../components/textField/TextField";
import TextFieldWithIcon from "../../components/textFieldWithIcon/TextFieldWithIcon";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [phoneColor, setPhoneColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");

  const validate = (event) => {

    event.preventDefault();
    console.log('Button clicked!')
    let loginInfo = username.trim(); // Trim any leading/trailing whitespaces
    let isEmail = loginInfo.includes("@");
    let isPhone = loginInfo.startsWith("0") && loginInfo.length === 10;
    console.log("cfsdf" + loginInfo)



    if (isEmail) {
      // Check email conditions
      if (loginInfo.endsWith("@gmail.com")) {
        setErrorEmail("");
        setEmailColor("green");
        console.log("cfsdf" + loginInfo)
      } else {
        setErrorEmail("Email should end with @gmail.com");
        setEmailColor("red");
      }

    } else if (isPhone) {
      // Check phone conditions
      if (/^\d+$/.test(loginInfo)) {
        setErrorPhone("");
        setPhoneColor("green");
      } else {
        setErrorPhone("Phone number must contain only digits");
        setPhoneColor("red");
      }
    } else {
      // Check username conditions
      if (loginInfo.length >= 8) {
        setErrorUserName("");
        setUserColor("green");
      } else {
        setErrorUserName("Username must be at least 8 characters long.");
        setUserColor("red");
      }
    }

    if (password.length >= 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password should be at least 8 characters long.");
      setPasswordColor("red");
    }
  }

  return (
    <div className={formStyles.form__container}>
      {/* hinh */}
      <div className={formStyles.form__image}>
        <div className={formStyles.image__bg}></div>
        <div className={formStyles.image__holder}>
          <img className={formStyles.image} alt="Background" src={bg} />
        </div>
      </div>
      {/* form */}
      <div className={formStyles.form__frameoverlap}>
        {/* logo */}
        <Link to="/" className={formStyles.website__logo}>
          <img className={formStyles.logoimg} alt="Bong cake logo" src={logo} />
        </Link>
        {/* form */}
        <div className={formStyles.form}>
          <div className={formStyles.form__frame}>
            {/* title */}
            <div className={formStyles.form__title}>
              <span className={formStyles.form__title1}>
                <span className={formStyles.heading}>Đăng nhập vào tài khoản của bạn</span>
              </span>
              <span className={formStyles.form__title2} >

                <span className={formStyles["body--1"]}>Tận hưởng những hương vị ngọt ngào!</span></span>

            </div>
            {/* form */}
            <form className={formStyles.form__frameinput} onSubmit={validate}>
              {/* input username */}
              <div className={formStyles.form__input}>
                <div className={formStyles.form__inputtitle}>
                  <div className={formStyles.form__inputtitle1}>
                    <div className={formStyles["title--3"]}>Tên đăng nhập</div>
                  </div>
                </div>
                <div className={formStyles.inputwrapper}>
                  <TextField
                    placeholder={"Email/ Số điện thoại"}
                    style={{ borderColor: userColor }}
                    Value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <div className={formStyles.errorcontainer}>
                    <p className={formStyles.error}>{errorUserName}</p>
                    <p className={formStyles.error}>{errorEmail}</p>
                    <p className={formStyles.error}>{errorPhone}</p>
                  </div>
                </div>
              </div>
              {/* input password */}
              <div className={formStyles.form__input}>
                <div className={formStyles.form__inputtitle}>
                  <div className={formStyles.form__inputtitle1}>
                    <div className={formStyles["title--3"]}>Mật khẩu</div>
                  </div>
                  <a href="/forgetpassword" className={formStyles["title--3"]}>Quên mật khẩu</a>
                </div >
                <div className={formStyles.inputwrapper}>
                  <TextFieldWithIcon
                    placeholder="Mật khẩu"
                    style={{ borderColor: passwordColor }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className={formStyles.errorcontainer}>
                    <p className={formStyles.error}>{errorPassword}</p>
                  </div>
                </div>
              </div >
              {/* line */}
              <hr className={formStyles.form__line} />
              {/* button */}
              < div className={formStyles.form__btn} >
                <Button type="btn2 primary button" onClick={validate}>
                  Đăng nhập
                </Button>
              </div >
            </form >
            {/* link */}
            < div  >
              <div className={formStyles.form__link}>
                <span className={formStyles["title--3"]}>
                  <span className={formStyles.form__linktitle1}>Bạn không có tài khoản? </span>
                  <a className={formStyles.form__linktitle2} href="/register" >
                    Đăng ký
                  </a ></span>
              </div >
            </div >
          </div >
        </div >
      </div >
    </div >
  );
}

export default Login;