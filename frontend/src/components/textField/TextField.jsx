import React from 'react';
import './TextField.css';

const TextField = ({value, onChange, placeholder}) => {
  return (
    <div>
      <input className='text-field__input'
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;