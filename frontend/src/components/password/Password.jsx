import React from 'react';
import './Password.css';
import "../../Variable.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Password = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const icon = showPassword ? <FaEye /> : <FaEyeSlash />;

    const handleClick = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='password-container'>
            <input className='password__input body--2'
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            />
            <span className='password__click' onClick={handleClick}>{icon}</span>
        </div>
    );
  };

export default Password;

