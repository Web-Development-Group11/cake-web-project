import { useState, useEffect } from "react";
import formStyles from "./Form.module.css";
import logo from "../../assets/image/logo.png";
import bg from "../../assets/image/bgregister.png";
import Button from "../../components/button/Button";
import TextField from "../../components/textField/TextField";
import TextFieldWithIcon from "../../components/textFieldWithIcon/TextFieldWithIcon";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePhone, validatePassword, validateConfirmPassword } from "./validationForm";
import { axiosClient } from "../../api/axios";

function Register() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [phoneErrorMsg, setPhoneErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [confirmPasswordErrorMsg, setConfirmPasswordErrorMsg] = useState("");

  const navigate = useNavigate();

  function changeInputValue(name, value) {
    if (name === "email") {
      setEmail(value);
      setEmailError(false);
      setEmailErrorMsg("");

    } else if (name === "phoneNumber") {
      setPhone(value);
      setPhoneError(false);
      setPhoneErrorMsg("");

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
      emailError: false,
      phoneError: false,
      passwordError: false,
      confirmPasswordError: false,
      
      phoneErrorMsg: "",
      emailErrorMsg: "",
      passwordErrorMsg: "",
      confirmPasswordErrorMsg: ""
    };

    const emailError = validateEmail(email);
    const phoneError = validatePhone(phoneNumber);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(password, confirmPassword);

    if (emailError) {
      returnData = {
        ...returnData,
        emailError: true,
        emailErrorMsg: emailError
      };
    }

    if (phoneError) {
      returnData = {
        ...returnData,
        phoneError: true,
        phoneErrorMsg: phoneError
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

  async function submitForm(e) {
    e.preventDefault();

    const validation = validationForm();

    if (
      validation.emailError ||
      validation.phoneError ||
      validation.passwordError ||
      validation.confirmPasswordError
    ) {
      setEmailError(validation.emailError);
      setPhoneError(validation.phoneError);
      setEmailErrorMsg(validation.emailErrorMsg);
      setPhoneErrorMsg(validation.phoneErrorMsg);
      setPasswordError(validation.passwordError);
      setPasswordErrorMsg(validation.passwordErrorMsg);
      setConfirmPasswordError(validation.confirmPasswordError);
      setConfirmPasswordErrorMsg(validation.confirmPasswordErrorMsg);
    } else {
      try {
        const response = await axiosClient.post('/register', { email, phoneNumber, password })
        console.log(response.status)
        if (response.status == 200) {
          navigate('/login');
        } else {
          alert('Wrong username or password')
        }
      } catch (e) {
        console.log(e);
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
              <div className={`${formStyles.form__input} ${formStyles.form__inputuser}`}>
                {/* input email */}
                <div className={formStyles.form__input1}>
                  <div className={formStyles.form__inputtitle}>
                    <div className={formStyles.form__inputtitle1}>
                      <div className={formStyles["title--3"]}>Email</div>
                    </div>
                  </div>

                  <div className={formStyles.inputwrapper}>
                    <TextField
                      placeholder={"Email"}
                      name="email"
                      value={email}
                      onChange={(value) => changeInputValue("email", value)}
                    />
                  </div>
                  <div className={formStyles.errorcontainer}>
                    {emailError && <div className={formStyles.errorMsg}>{emailErrorMsg}</div>}
                  </div>
                </div>
                {/* input sdt */}
                <div className={formStyles.form__input2}>
                  <div className={formStyles.form__inputtitle}>
                    <div className={formStyles.form__inputtitle1}>
                      <div className={formStyles["title--3"]}>Số điện thoại</div>
                    </div>
                  </div>

                  <div className={formStyles.inputwrapper}>
                    <TextField
                      placeholder={"Số điện thoại"}
                      name="phone"
                      value={phoneNumber}
                      onChange={(value) => changeInputValue("phoneNumber", value)}
                    />
                  </div>
                  <div className={formStyles.errorcontainer}>
                    {phoneError && <div className={formStyles.errorMsg}>{phoneErrorMsg}</div>}
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