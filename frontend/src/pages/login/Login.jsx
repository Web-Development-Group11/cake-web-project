import { useState } from "react";
import formStyles from "./Form.module.css";
import {loginApi} from "./userService"
import bg from "../../assets/image/bglogin.png";
import Button from "../../components/button/Button";
import TextField from "../../components/textField/TextField";

import validator from "validator"; // Import the validator library
import { toast } from 'react-toastify'
async function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneNumberValid, setPhoneNumberValid] = useState(true);

    const handleLogin = async () => {
        alert("Me")
        if (!email || !password) {
            toast.error("Enail/dfdshf")
            return
        }
    };
    let res = await loginApi(email, password)
    console.log(">>>>check login", res)

    // const handlePhoneNumberChange = (event) => {
    //   const value = event.target.value;
    //   setPhoneNumber(value);
    //   setPhoneNumberValid(validator.isMobilePhone(value, "vi-VN"));
    // };

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
                {/* form */}
                <div className={formStyles.form}>
                    <div className={formStyles.form__frame}>
                        {/* form */}
                        <div className={formStyles.form__frameinput}>
                            {/* input username */}
                            <div className={formStyles.form__input}>
                                <div className={formStyles.form__inputtitle}>
                                    <div className={formStyles.form__inputtitle1}>
                                        <div className={formStyles["title--3"]}>
                                            Tên đăng nhập
                                        </div>
                                    </div>
                                </div>
                                <div className={formStyles.inputwrapper}>
                                    <TextField
                                        placeholder={"Email/ Số điện thoại"}
                                        value={phoneNumber} // Use 'value' instead of 'defaultValue'
                                        onChange={handlePhoneNumberChange}
                                    />
                                    {!phoneNumberValid && (
                                        <p>Please enter a valid phone number.</p>
                                    )}
                                </div>
                            </div>
                            {/* button */}
                            <div className={formStyles.form__btn}>
                                <Button
                                    type="btn2 primary button"
                                    onClick={handleLogin} // Add parentheses here to invoke the function
                                >
                                    Đăng nhập
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;