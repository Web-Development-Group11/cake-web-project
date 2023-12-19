import React from 'react';
import textfield from './TextField.module.css';

const TextField = ({ value, placeholder, className }) => {
  return (
    <div className={textfield.textfield_container}>
      <div className={textfield.textfield__input}>
        <input
          className={textfield.input}
          type="text"
          value={value}
          placeholder={placeholder}
        />
      </div>
    </div>

  );
};

export default TextField;