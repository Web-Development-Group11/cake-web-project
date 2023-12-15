import React from 'react';
import './TextField.css';

const TextField = ({value, placeholder}) => {
  return (
    <div>
      <input className='text-field__input'
        type="text"
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;