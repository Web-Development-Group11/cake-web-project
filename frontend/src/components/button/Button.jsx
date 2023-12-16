// import React from 'react'
// import button from './Button.module.css'

// const Button = (props) => {
//   const {type, children} = props;
//   return (
//     <button className={type}>{children}</button>
//   )
// }

// export default Button

import React from 'react';
import button from './Button.module.css'; 

const Button = (props) => {
  const { type, children } = props;
  let btnClass = ''; // Tạo một biến để lưu trữ class động

  // Kiểm tra type để ánh xạ với các class tương ứng từ CSS module
  if (type === 'btn1') {
    btnClass = button.btn1; // Sử dụng class từ CSS module button
  } else if (type === 'btn2') {
    btnClass = button.btn2; // Sử dụng class từ CSS module button
  } else if (type === 'primary') {
    btnClass = button.primary; // Sử dụng class từ CSS module button
  } else if (type === 'secondary--1') {
    btnClass = button['secondary--1']; // Sử dụng class từ CSS module button (vì tên class chứa dấu --)
  } else if (type === 'secondary--2') {
    btnClass = button['secondary--2']; // Sử dụng class từ CSS module button (vì tên class chứa dấu --)
  }

  return (
    <button className={`${button.base} ${btnClass}`}>{children}</button> 
  );
};

export default Button;
