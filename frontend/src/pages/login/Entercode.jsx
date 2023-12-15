import { useState } from "react";
import "./Login.css";
import logo from "../../assets/image/logo.png";
import bg from "../../assets/image/bgentercode.png";
import Button from "../../components/button/Button";
import TextField from "../../components/textField/TextField";

function Entercode() {
    const [username, setUsername] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorUserName, setErrorUserName] = useState("");
    const [errorPhone, setErrorPhone] = useState("");
    const [userColor, setUserColor] = useState("");
    const [emailColor, setEmailColor] = useState("");
    const [phoneColor, setPhoneColor] = useState("");

    function validate(e) {
        
        e.preventDefault();
        history.push('/register')
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
        <div className="container">
            {/* hinh */}
            <div className="image">
                <div className="image__bg"></div>
                <div className="image__holder">
                    <img alt="Background" src={bg} />
                </div>
            </div>
            {/* form */}
            <div className="frame">
                {/* logo */}
                <div className="website__logo">
                    <a href="/">
                        <img alt="Bong cake logo" src={logo} />
                    </a>
                </div>
                <div className="form">
                    <div className="form__frame">
                        {/* title */}
                        <div className="form__title">
                            <span className="form__title--title1">
                                <span className={`heading`}>Nhập mã xác nhận </span>
                            </span>
                            <span className="form__title--title2">
                                <span className={`body--1`}>Hãy nhập mã xác nhận bao gồm 6 chữ số được gửi tới bạn</span>
                            </span>
                        </div>
                        {/* form */}
                        <form className="form__frame--input">
                            {/* input username */}
                            <div className="form__input">
                                <div className="form__input--title">
                                    <div className="form__input--title1">
                                        <div className={`title--3`}>Nhập mã xác nhận</div>
                                    </div>
                                </div>
                                <div className="input-wrapper">
                                    <TextField
                                        className={`body--2`}
                                        type="text"
                                        placeholder={"Mã code"}
                                        style={{ borderColor: userColor }}
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}

                                    />
                                    <div className="error-container">
                                        <p className="error">{errorUserName}</p>
                                        <p className="error">{errorEmail}</p>
                                        <p className="error">{errorPhone}</p>
                                    </div>
                                </div>
                            </div>

                            {/* line */}
                            <div className="form__line">
                                <hr />
                            </div>
                            {/* button */}
                            <div className="form__btn">
                                <Button type="btn2 primary" className="btn" onClick={validate} >
                                    Xác nhận
                                </Button>
                            </div>
                        </form>
                        {/* link */}
                        <div className="form__link">
                            <div className={`title--3`}>
                                <span className="form__link--title1">Bạn chưa nhận được mã xác nhận? </span>
                                <a className="form__link--title2" href="/">
                                    Gửi lại
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Entercode;