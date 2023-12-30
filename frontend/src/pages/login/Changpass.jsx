import { useState, useEffect } from "react";
import formStyles from "./Form.module.css";
import logo from "../../assets/image/logo.png";
import bg from "../../assets/image/bgchangepass.png";
import Button from "../../components/button/Button";
import TextFieldWithIcon from "../../components/textFieldWithIcon/TextFieldWithIcon";
import { Link } from "react-router-dom";
import { validatePassword, validateConfirmPassword } from "../../components/validation/validationForm";

function Changepass(props) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [confirmPasswordErrorMsg, setConfirmPasswordErrorMsg] = useState("");

  function changeInputValue(name, value) {
    if (name === "password") {
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
      passwordError: false,
      confirmPasswordError: false,
      passwordErrorMsg: "",
      confirmPasswordErrorMsg: ""
    };
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(password, confirmPassword);

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

    if (validation.passwordError ||
      validation.confirmPasswordError
    ) {
      setPasswordError(validation.passwordError);
      setPasswordErrorMsg(validation.passwordErrorMsg);
      setConfirmPasswordError(validation.confirmPasswordError);
      setConfirmPasswordErrorMsg(validation.confirmPasswordErrorMsg);
    } else {
      window.location.href = "/login";
      // logic check BE here
    }
  }

  useEffect(() => {
    props.setShowNavbar(false);
 } , []);

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
                <span className={formStyles.heading} >Đổi mật khẩu mới</span>
              </span>
            </div>
            {/* form */}
            <form className={formStyles.form__frameinput} onSubmit={submitForm}>
              {/* input mật khẩu */}
              <div className={formStyles.form__input}>
                <div className={formStyles.form__inputtitle}>
                  <div className={formStyles.form__inputtitle1}>
                    <div className={formStyles["title--3"]}>Nhập mật khẩu mới</div>
                  </div>
                </div>
                <div className={formStyles.inputwrapper}>
                  <TextFieldWithIcon
                    placeholder={"Nhập mật khẩu mới"}
                    value={password}
                    onChange={(value) => changeInputValue("password", value)}
                  />

                </div>
                <div className={formStyles.errorcontainer}>
                  {passwordError && <div className={formStyles.errorMsg}>{passwordErrorMsg}</div>}
                </div>
              </div>
              {/* input password */}
              <div className={formStyles.form__input}>
                <div className={formStyles.form__inputtitle}>
                  <div className={formStyles.form__inputtitle1}>
                    <div className={formStyles["title--3"]}>Nhập lại mật khẩu mới</div>
                  </div>
                </div>
                <div className={formStyles.inputwrapper}>
                  <TextFieldWithIcon
                    placeholder={"Nhập lại mật khẩu mới"}
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
                  Thay đổi
                </Button>
              </div >
            </form>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Changepass;