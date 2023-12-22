import React from 'react';
import textfieldicon from './TextFieldWithIcon.module.css';
import "../../Variable.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const TextFieldWithIcon = ({name, value, placeholder, onChange, disabled}) => {
    const [showContent, setShowContent] = React.useState(false);

    const handleChange = (e) => {
        const newValue = e.target.value;
          onChange(newValue);
    };

    const icon = showContent ? <FaEye /> : <FaEyeSlash />;

    const handleClick = () => {
        setShowContent(!showContent);
    };

    return (
        <div className={textfieldicon.textfieldicon_container}>
            <div className={textfieldicon.textfieldicon_input}>
                <input
                    className={`${textfieldicon.textfieldicon__input} body--2`}
                    type={showContent ? "text" : "password"}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleChange}
                    disabled={disabled}
                />
                <span className={textfieldicon.textfieldicon__click} onClick={handleClick}>{icon}</span>
            </div>
        </div>
    );
};
export default TextFieldWithIcon;

