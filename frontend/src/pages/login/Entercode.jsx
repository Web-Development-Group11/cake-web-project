import { useState } from "react";
import formStyles from "./Form.module.css";
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
        history.push('/register');
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
                                <span className={formStyles.heading}>Nhập mã xác nhận</span>
                            </span>
                            <span className={formStyles.form__title2}>
                                <span className={formStyles["body--1"]}>
                                    Hãy nhập mã xác nhận bao gồm 6 chữ số được gửi tới bạn
                                </span>
                            </span>
                        </div>
                        {/* form */}
                        <form className={formStyles.form__frameinput}>
                            {/* input username */}
                            <div className={formStyles.form__input}>
                                <div className={formStyles.form__inputtitle}>
                                    <div className={formStyles.form__inputtitle1}>
                                        <div className={formStyles["title--3"]}>Nhập mã xác nhận</div>
                                    </div>
                                </div>
                                <div className={formStyles.inputwrapper}>
                                    <TextField
                                        className={formStyles["body--2"]}
                                        type="text"
                                        placeholder="Mã code"
                                        style={{ borderColor: userColor }}
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <div className={formStyles.errorcontainer}>
                                        <p className={formStyles.error}>{errorUserName}</p>
                                        <p className={formStyles.error}>{errorEmail}</p>
                                        <p className={formStyles.error}>{errorPhone}</p>
                                    </div>
                                </div>
                            </div>
                            {/* line */}
                            <hr className={formStyles.form__line} />
                            {/* button */}
                            <div className={formStyles.form__btn}>
                                <Button type="btn2 primary" className="btn" onClick={validate}
                                >
                                    Xác nhận
                                </Button>
                            </div>
                        </form>
                        {/* link */}
                        <div className={formStyles.form__link}>
                            <span className={formStyles["title--3"]}>
                                <span className={formStyles.form__linktitle1}>
                                    Bạn chưa nhận được mã xác nhận?
                                </span>
                                <a className={formStyles.form__linktitle2} href="/">
                                    Gửi lại
                                </a >
                            </span>
                        </div >
                    </div >
                </div >
            </div >
        </div >
    );
}

export default Entercode;