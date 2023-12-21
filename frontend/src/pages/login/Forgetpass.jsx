import { useState } from "react";
import formStyles from "./Form.module.css";
import logo from "../../assets/image/logo.png";
import bg from "../../assets/image/bgforgetpass.png";
import Button from "../../components/button/Button";
import TextField from "../../components/textField/TextField";
import TextFieldWithIcon from "../../components/textFieldWithIcon/TextFieldWithIcon";
import { Link } from "react-router-dom";
import { validateUsername } from "./validationForm";

function Forgetpass() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [usernameErrorMsg, setUsernameErrorMsg] = useState("");

  function changeInputValue(name, value) {
    if (name === "username") {
      setUsername(value);
      setUsernameError(false);
      setUsernameErrorMsg("");
    }
  }

  function validationForm() {
    let returnData = {
      usernameError: false,
      usernameErrorMsg: "",
    };

    const usernameError = validateUsername(username);

    if (usernameError) {
      returnData = {
        ...returnData,
        usernameError: true,
        usernameErrorMsg: usernameError
      };
    }



    return returnData;
  }

  function submitForm(e) {
    e.preventDefault();

    const validation = validationForm();

    if (validation.usernameError || validation.passwordError) {
      setUsernameError(validation.usernameError);
      setUsernameErrorMsg(validation.usernameErrorMsg);
    } else {
      window.location.href = "/entercode";
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
        <div className={formStyles.form}>
          {/* logo */}
          <Link to="/" className={formStyles.website__logo}>
            <img className={formStyles.logoimg} alt="Bong cake logo" src={logo} />
          </Link>
          <div className={formStyles.form__frame}>
            {/* title */}
            <div className={formStyles.form__title}>
              <span className={formStyles.form__title1}>
                <span className={formStyles.heading}>Quên mật khẩu </span>
              </span>
            </div>
            {/* form */}
            <form className={formStyles.form__frameinput} onSubmit={submitForm}>
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
                    name="username"
                    value={username}
                    onChange={(value) => changeInputValue("username", value)}
                  />
                </div>
                <div className={formStyles.errorcontainer}>
                  {usernameError && <div className={formStyles.errorMsg}>{usernameErrorMsg}</div>}
                </div>
              </div>

              {/* line */}
              <hr className={formStyles.form__line} />
              {/* button */}
              < div className={formStyles.form__btn} >
                <Button type="btn2 primary button">
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