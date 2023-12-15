import React from 'react';
import textfield from './TextField.module.css';

const TextField = ({ value, placeholder, className }) => {
  return (
    <div className={`${textfield.textfield__input} ${className}`}>
      <input
        className={textfield.input}
        type="text"
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;