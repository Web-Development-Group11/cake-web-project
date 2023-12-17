import { useState } from "react";
import formStyles from "./Form.module.css";
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
    <div className={formStyles.form__container}>
      {/* hinh */}
      <div className={formStyles.form__image}>
        <div className={formStyles.image__bg}></div>
        <div className={formStyles.image__holder}>
          <img className={formStyles.image}  alt="Background" src={bg} />
        </div>
      </div>
      {/* form */}
      <div className={formStyles.form__frame}>
        {/* logo */}
        <div className={formStyles.website__logo}>
          <a href="/">
            <img className={formStyles.logoimg} alt="Bong cake logo" src={logo} />
          </a>
        </div>
        <div className={formStyles.form}>
          <div className={formStyles.form__frame}>
            {/* title */}
            <div className={formStyles.form__title}>
              <span className={formStyles.form__title1}>
                <span className={formStyles.heading}>Tạo tài khoản mới!</span>
              </span>
              <span className={formStyles.form__title2}>
                <span className={formStyles["body--1"]}>Tận hưởng những hương vị ngọt ngào!</span>
              </span>
            </div>
            {/* form */}
            <form className={formStyles.form__frameinput}>
              {/* input username */}
              <div className={formStyles.form__input}>
                <div className={formStyles.form__inputtitle}>
                  <div className={formStyles.form__inputtitle1}>
                    <div className={formStyles.inputwrapper}>Tên đăng nhập</div>
                  </div>
                </div>
                <div className={formStyles["input-wrapper"]}>
                  <TextField
                    className={formStyles["body--2"]}
                    type="text"
                    placeholder={"Email/ Số điện thoại"}
                    style={{ borderColor: userColor }}
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
                </div>
                <div className={formStyles.inputwrapper}>
                  <TextField
                    className={formStyles["body--2"]}
                    type="password"
                    placeholder="Nhập mật khẩu"
                    style={{ borderColor: passwordColor }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className={formStyles.errorcontainer}>
                    <p className={formStyles.error}>{errorPassword}</p>
                  </div>
                </div>
              </div>
              {/* input confirm password */}
              <div className={formStyles.form__input}>
                <div className={formStyles.form__inputtitle}>
                  <div className={formStyles.form__inputtitle1}>
                    <div className={formStyles["title--3"]}>Nhập lại mật khẩu</div>
                  </div>
                </div>
                <div className={formStyles.inputwrapper}>
                  <TextField
                    className={formStyles["body--2"]}
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    style={{ borderColor: repasswordColor }}
                    onChange={(e) => setRePassword(e.target.value)}
                  />
                  <div className={formStyles.errorcontainer}>
                    <p className={formStyles.error}>{errorRePassword}</p>

                  </div>
                </div>
              </div>
              {/* line */}
              <hr className={formStyles.form__line} />
              {/* button */}
              <div className={formStyles.form__btn}>
                <Button type="btn2 primary" className="btn" onClick={validate}>
                  Đăng ký
                </Button>
              </div>
            </form>
            {/* link */}
            <div className={formStyles.form__link}>
              <div className={formStyles["title--3"]}>
                <span className={formStyles.form__linktitle1}>Đã có tài khoản? </span>
                <a className={formStyles.form__linktitle2} href="/login">
                  Đăng nhập
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register; 