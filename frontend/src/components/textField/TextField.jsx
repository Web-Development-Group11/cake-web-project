import React from 'react';
import textfield from './TextField.module.css';

const TextField = ({ name, value, placeholder, className, onChange }) => {
  
  const handleChange = (e) => {
    const newValue = e.target.value;
      onChange(newValue);
};

  return (
    <div className={textfield.textfield_container}>
      <div className={textfield.textfield__input}>
        <input
          className={textfield.input}
          type="text"
          name={name}
          value={value} 
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default TextField;
