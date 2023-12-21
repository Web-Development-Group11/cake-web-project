import { useState } from "react";
import formStyles from "./Form.module.css";
import logo from "../../assets/image/logo.png";
import bg from "../../assets/image/bgentercode.png";
import Button from "../../components/button/Button";
import TextField from "../../components/textField/TextField";
import { Link } from "react-router-dom";
import {validateCode} from "./validationForm";


function Entercode() {
    const [code, setCode] = useState("");
    const [codeError, setCodeError] = useState(false);
    const [codeErrorMsg, setCodeErrorMsg] = useState("");
    function changeInputValue(name, value) {
        if (name === "code") {
            setCode(value);
            setCodeError(false);
            setCodeErrorMsg("");
        } 
    }
    function validationForm() {
        let returnData = {
            codeError: false,
            codeErrorMsg: "",
        };

        const codeError = validateCode(code);

        if (codeError) {
            returnData = {
                ...returnData,
                codeError: true,
                codeErrorMsg: codeError
            };
        }

        return returnData;
    }
    function submitForm(e) {
        e.preventDefault();
        const validation = validationForm();
        if (validation.codeError) {
            setCodeError(validation.codeError);
            setCodeErrorMsg(validation.codeErrorMsg);
        } else {
            window.location.href = "/changepassword";
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
                                <span className={formStyles.heading}>Nhập mã xác nhận</span>
                            </span>
                            <span className={formStyles.form__title2}>
                                <span className={formStyles["body--1"]}>
                                    Hãy nhập mã xác nhận bao gồm 6 chữ số được gửi tới bạn
                                </span>
                            </span>
                        </div>
                        {/* form */}
                        <form className={formStyles.form__frameinput}onSubmit={submitForm}>
                            {/* input username */}
                            <div className={formStyles.form__input}>
                                <div className={formStyles.form__inputtitle}>
                                    <div className={formStyles.form__inputtitle1}>
                                        <div className={formStyles["title--3"]}>Nhập mã xác nhận</div>
                                    </div>
                                </div>
                                <div className={formStyles.inputwrapper}>
                                    <TextField
                                        placeholder={"Mã xác nhận"}
                                        name="code"
                                        value={code}
                                        onChange={(value) => changeInputValue("code", value)}
                                    />
                                </div>
                                <div className={formStyles.errorcontainer}>
                                    {codeError && <div className={formStyles.errorMsg}>{codeErrorMsg}</div>}
                                </div>
                            </div>
                            {/* line */}
                            <hr className={formStyles.form__line} />
                            {/* button */}
                            < div className={formStyles.form__btn} >
                                <Button type="btn2 primary button">
                                    Xác nhận
                                </Button>
                            </div >
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