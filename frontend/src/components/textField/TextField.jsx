// import React from 'react';
// import './TextField.css';

// const TextField = (props) => {
//     const {type, children} = props;
//     return (
//       <div className={`text-field ${className}`}>
//         <input className={`overlap-group ${divClassName}`} placeholder="Email của bạn..." type={inputType} />
//       </div>
//     );
//   };

//   const Button = (props) => {
//     const {type, children} = props;
//     return (
//       <button className={type}>{children}</button>
//     )
//   }

// export default TextField

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