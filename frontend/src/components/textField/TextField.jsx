import React from 'react';
import './TextField.css';

const TextField = ({ className, overlapGroupClassName, divClassName, inputType = "email" }) => {
    return (
      <div className={`text-field ${className}`}>
        <input className={`overlap-group ${divClassName}`} placeholder="Email của bạn..." type={inputType} />
      </div>
    );
  };

export default TextField