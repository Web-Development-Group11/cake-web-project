// import { useState } from "react";
// import formStyles from "./Form.module.css";
// import logo from "../../assets/image/logo.png";
// import bg from "../../assets/image/bglogin.png";
// import Button from "../../components/button/Button";
// import TextField from "../../components/textField/TextField";
// import TextFieldWithIcon from "../../components/textFieldWithIcon/TextFieldWithIcon";
// import { Link } from "react-router-dom";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorEmail, setErrorEmail] = useState("");
//   const [errorUserName, setErrorUserName] = useState("");
//   const [errorPhone, setErrorPhone] = useState("");
//   const [errorPassword, setErrorPassword] = useState("");
//   const [userColor, setUserColor] = useState("");
//   const [emailColor, setEmailColor] = useState("");
//   const [phoneColor, setPhoneColor] = useState("");
//   const [passwordColor, setPasswordColor] = useState("");

//   const validate = (event) => {
//     event.preventDefault();
  
//     let isEmail = username.includes("@");
//     let isPhone = username.startsWith("0") && username.length === 10;
//     let hasError = false; // Track if any errors are present
  
//     // Validate email
//     if (isEmail) {
//       if (username.endsWith("@gmail.com")) {
//         setErrorEmail("");
//         setEmailColor("green");
//       } else {
//         setErrorEmail("Email should end with @gmail.com");
//         setEmailColor("red");
//         hasError = true; // Set error flag
//       }
//     } else {
//       setErrorEmail("");
//       setEmailColor(""); // Reset the color if not an email
//     }
  
//     // Validate phone number
//     if (isPhone) {
//       if (/^\d+$/.test(username)) {
//         setErrorPhone("");
//         setPhoneColor("green");
//       } else {
//         setErrorPhone("Phone number must contain only digits");
//         setPhoneColor("red");
//         hasError = true; // Set error flag
//       }
//     } else {
//       setErrorPhone("");
//       setPhoneColor(""); // Reset the color if not a phone number
//     }
  
//     // Validate username
//     if (!isEmail && !isPhone) {
//       if (username.trim() === "") {
//         setErrorUserName("Bạn chưa nhập tên đăng nhập");
//         setUserColor("red");
//         hasError = true; // Set error flag
//       } else {
//         setErrorUserName("");
//         setUserColor("");
//       }
//     }
  
//     // Validate password
//     if (password.length >= 8) {
//       setErrorPassword("");
//       setPasswordColor("green");
//     } else {
//       setErrorPassword("Mật khẩu phải có ít nhất 8 ký tự");
//       setPasswordColor("red");
//       hasError = true; // Set error flag
//     }
  
//     // If any errors are present, you can handle them or display a message to the user
//     if (hasError) {
//       return; // Don't proceed with form submission
//     }
  
//     // Submit the form or perform any other actions
//     console.log("Form submitted successfully!");
//   };

//   return (
//     <div className={formStyles.form__container}>
//       {/* hinh */}
//       <div className={formStyles.form__image}>
//         <div className={formStyles.image__bg}></div>
//         <div className={formStyles.image__holder}>
//           <img className={formStyles.image} alt="Background" src={bg} />
//         </div>
//       </div>
//       {/* form */}
//       <div className={formStyles.form__frameoverlap}>
//         {/* logo */}
//         <Link to="/" className={formStyles.website__logo}>
//           <img className={formStyles.logoimg} alt="Bong cake logo" src={logo} />
//         </Link>
//         {/* form */}
//         <div className={formStyles.form}>
//           <div className={formStyles.form__frame}>
//             {/* title */}
//             <div className={formStyles.form__title}>
//               <span className={formStyles.form__title1}>
//                 <span className={formStyles.heading}>Đăng nhập vào tài khoản của bạn</span>
//               </span>
//               <span className={formStyles.form__title2} >

//                 <span className={formStyles["body--1"]}>Tận hưởng những hương vị ngọt ngào!</span></span>

//             </div>
//             {/* form */}
//             <form className={formStyles.form__frameinput} onSubmit={validate}>
//               {/* input username */}
//               <div className={formStyles.form__input}>
//                 <div className={formStyles.form__inputtitle}>
//                   <div className={formStyles.form__inputtitle1}>
//                     <div className={formStyles["title--3"]}>Tên đăng nhập</div>
//                   </div>
//                 </div>
//                 <div className={formStyles.inputwrapper}>
//                   <TextField
//                     placeholder={"Email/ Số điện thoại"}
//                     style={{ borderColor: userColor }}
//                     Value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                   />
//                   <div className={formStyles.errorcontainer}>
//                     <p className={formStyles.error}>{errorUserName}</p>
//                     <p className={formStyles.error}>{errorEmail}</p>
//                     <p className={formStyles.error}>{errorPhone}</p>
//                   </div>
//                 </div>
//               </div>
//               {/* input password */}
//               <div className={formStyles.form__input}>
//                 <div className={formStyles.form__inputtitle}>
//                   <div className={formStyles.form__inputtitle1}>
//                     <div className={formStyles["title--3"]}>Mật khẩu</div>
//                   </div>
//                   <a href="/forgetpassword" className={formStyles["title--3"]}>Quên mật khẩu</a>
//                 </div >
//                 <div className={formStyles.inputwrapper}>
//                   <TextFieldWithIcon
//                     placeholder={"Mật khẩu"}
//                     style={{ borderColor: passwordColor }}
//                     defaultValue={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />

//                   <div className={formStyles.errorcontainer}>
//                     <p className={formStyles.error}>{errorPassword}</p>
//                   </div>
//                 </div>
//               </div >
//               {/* line */}
//               <hr className={formStyles.form__line} />
//               {/* button */}
//               < div className={formStyles.form__btn} >
//                 <Button type="btn2 primary button" onClick={validate}>
//                   Đăng nhập
//                 </Button>
//               </div >
//             </form >
//             {/* link */}
//             < div  >
//               <div className={formStyles.form__link}>
//                 <span className={formStyles["title--3"]}>
//                   <span className={formStyles.form__linktitle1}>Bạn không có tài khoản? </span>
//                   <a className={formStyles.form__linktitle2} href="/register" >
//                     Đăng ký
//                   </a ></span>
//               </div >
//             </div >
//           </div >
//         </div >
//       </div >
//     </div >
//   );
// }

// export default Login;