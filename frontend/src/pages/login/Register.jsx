import { useState } from "react";
import formStyles from "./Form.module.css";
import logo from "../../assets/image/logo.png";
import bg from "../../assets/image/bgregister.png";
import Button from "../../components/button/Button";
import TextField from "../../components/textField/TextField";
import TextFieldWithIcon from "../../components/textFieldWithIcon/TextFieldWithIcon";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");

  function changeInputValue(name, value) {
    if (name === "email") {
      setEmail(value);
      setEmailError(false);
      setEmailErrorMsg("");
    } else if (name === "password") {
      setPassword(value);
      setPasswordError(false);
      setPasswordErrorMsg("");
    }
  }

  function validationForm() {
    let returnData = {
      emailError: false,
      passwordError: false,
      emailErrorMsg: "",
      passwordErrorMsg: ""
    };

    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      returnData = {
        ...returnData,
        emailError: true,
        emailErrorMsg: "Không đúng định dạng email"
      };
    }

    if (password.length < 8) {
      returnData = {
        ...returnData,
        passwordError: true,
        passwordErrorMsg: "Mật khẩu phải lớn hơn 8 ký tự"
      };
    }

    return returnData;
  }

  function submitForm(e) {
    e.preventDefault();

    const validation = validationForm();

    if (validation.emailError || validation.passwordError) {
      setEmailError(validation.emailError);
      setEmailErrorMsg(validation.emailErrorMsg);
      setPasswordError(validation.passwordError);
      setPasswordErrorMsg(validation.passwordErrorMsg);
    } else {
      window.location.href = "/";
      // logic check BE ở đây 
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
                <span className={formStyles.heading}>Tạo tài khoản mới!</span>
              </span>
              <span className={formStyles.form__title2}>
                <span className={formStyles["body--1"]}>Tận hưởng những hương vị ngọt ngào!</span>
              </span>
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
                </div>
                <div className={formStyles.inputwrapper}>
                  <TextFieldWithIcon
                    placeholder={"Nhập mật khẩu"}
                    style={{ borderColor: passwordColor }}
                    defaultValue={password}
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
                  <TextFieldWithIcon
                    placeholder={"Nhập lại mật khẩu"}
                    style={{ borderColor: passwordColor }}
                    defaultValue={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className={formStyles.errorcontainer}>
                    <p className={formStyles.error}>{errorRePassword}</p>

                  </div>
                </div>
              </div>
              {/* line */}
              <hr className={formStyles.form__line} />
              {/* button */}
              < div className={formStyles.form__btn} >
                <Button type="btn2 primary button" onClick={validate}>
                  Đăng ký
                </Button>
              </div >
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