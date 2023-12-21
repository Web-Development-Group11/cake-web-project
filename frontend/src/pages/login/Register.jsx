import { useState } from "react";
import formStyles from "./Form.module.css";
import logo from "../../assets/image/logo.png";
import bg from "../../assets/image/bgregister.png";
import Button from "../../components/button/Button";
import TextField from "../../components/textField/TextField";
import TextFieldWithIcon from "../../components/textFieldWithIcon/TextFieldWithIcon";
import { Link } from "react-router-dom";
import { validateUsername, validatePassword, validateConfirmPassword } from "./validationForm";
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [usernameErrorMsg, setUsernameErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [confirmPasswordErrorMsg, setConfirmPasswordErrorMsg] = useState("");

  function changeInputValue(name, value) {
    if (name === "username") {
      setUsername(value);
      setUsernameError(false);
      setUsernameErrorMsg("");
    } else if (name === "password") {
      setPassword(value);
      setPasswordError(false);
      setPasswordErrorMsg("");
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
      setConfirmPasswordError(false);
      setConfirmPasswordErrorMsg("");
    }
  }

  function validationForm() {
    let returnData = {
      usernameError: false,
      passwordError: false,
      confirmPasswordError: false,
      usernameErrorMsg: "",
      passwordErrorMsg: "",
      confirmPasswordErrorMsg: ""
    };

    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(password, confirmPassword);

    if (usernameError) {
      returnData = {
        ...returnData,
        usernameError: true,
        usernameErrorMsg: usernameError
      };
    }

    if (passwordError) {
      returnData = {
        ...returnData,
        passwordError: true,
        passwordErrorMsg: passwordError
      };
    }

    if (confirmPasswordError) {
      returnData = {
        ...returnData,
        confirmPasswordError: true,
        confirmPasswordErrorMsg: confirmPasswordError
      };
    }

    return returnData;
  }

  function submitForm(e) {
    e.preventDefault();

    const validation = validationForm();

    if (
      validation.usernameError ||
      validation.passwordError ||
      validation.confirmPasswordError
    ) {
      setUsernameError(validation.usernameError);
      setUsernameErrorMsg(validation.usernameErrorMsg);
      setPasswordError(validation.passwordError);
      setPasswordErrorMsg(validation.passwordErrorMsg);
      setConfirmPasswordError(validation.confirmPasswordError);
      setConfirmPasswordErrorMsg(validation.confirmPasswordErrorMsg);
    } else {
      window.location.href = "/login";
      // logic check BE here
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

        <div className={formStyles.form}>
          {/* logo */}
          <Link to="/" className={formStyles.website__logo}>
            <img className={formStyles.logoimg} alt="Bong cake logo" src={logo} />
          </Link>
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
            <form className={formStyles.form__frameinput} onSubmit={submitForm}>
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
                    name="username"
                    value={username}
                    onChange={(value) => changeInputValue("username", value)}
                  />
                </div>
                <div className={formStyles.errorcontainer}>
                  {usernameError && <div className={formStyles.errorMsg}>{usernameErrorMsg}</div>}
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
                    placeholder={"Mật khẩu"}
                    value={password}
                    onChange={(value) => changeInputValue("password", value)}
                  />

                </div>
                <div className={formStyles.errorcontainer}>
                  {passwordError && <div className={formStyles.errorMsg}>{passwordErrorMsg}</div>}
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
                    value={confirmPassword}
                    onChange={(value) => changeInputValue("confirmPassword", value)}
                  />
                </div>
                <div className={formStyles.errorcontainer}>
                  {confirmPasswordError && <div className={formStyles.errorMsg}>{confirmPasswordErrorMsg}</div>}
                </div>
              </div>
              {/* line */}
              <hr className={formStyles.form__line} />
              {/* button */}
              < div className={formStyles.form__btn} >
                <Button type="btn2 primary button">
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
      </div >
    </div >
  )
}

export default Register; 