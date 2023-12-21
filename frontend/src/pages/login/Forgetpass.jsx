import { useState } from "react";
import formStyles from "./Form.module.css";
import logo from "../../assets/image/logo.png";
import bg from "../../assets/image/bgforgetpass.png";
import Button from "../../components/button/Button";
import TextField from "../../components/textField/TextField";
import TextFieldWithIcon from "../../components/textFieldWithIcon/TextFieldWithIcon";
import { Link } from "react-router-dom";

function Forgetpass() {
  const [username, setUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [phoneColor, setPhoneColor] = useState("");

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
        <div className={formStyles.form}>
          <div className={formStyles.form__frame}>
            {/* title */}
            <div className={formStyles.form__title}>
              <span className={formStyles.form__title1}>
                <span className={formStyles.heading}>Quên mật khẩu </span>
              </span>
            </div>
            {/* form */}
            <form className={formStyles.form__frameinput} onSubmit={validate}>
              {/* input username */}
              <div className={formStyles.form__input}>
                <div className={formStyles.form__inputtitle}>
                  <div className={formStyles.form__inputtitle1}>
                    <div className={formStyles["title--3"]}>Nhập email hoặc số điện thoại của bạn</div>
                  </div>
                </div>
                <div className={formStyles.inputwrapper}>
                  <TextField
                    placeholder={"Email/ Số điện thoại"}
                    style={{ borderColor: userColor }}
                    Value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <div lassName={formStyles.errorcontainer}>
                    <p className={formStyles.error}>{errorUserName}</p>
                    <p className={formStyles.error}>{errorEmail}</p>
                    <p className={formStyles.error}>{errorPhone}</p>
                  </div>
                </div>
              </div>

              {/* line */}
              <hr className={formStyles.form__line} />
              {/* button */}
              < div className={formStyles.form__btn} >
                <Button type="btn2 primary button" onClick={validate}>
                  Gửi mã xác nhận
                </Button>
              </div >
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgetpass;