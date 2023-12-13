import React from 'react'

const Register = () => {
  return (
    <div className="login__container">
    {/* hinh */}
    <div className="img-holder">
      <div className="bg"></div>
      <div className="info-holder">
        <img alt="Cupcakes with glaze" src={bg} />
      </div>
    </div>
    {/* form */}
    <div className="login__frame">
      {/* logo */}
      <div className="website-logo">
        <a href="/">
          <img alt="Bong cake logo" src={logo} />
        </a>
      </div>
      <div className="login__form">
        <div className="login__form--frameinput">
          {/* title */}
          <div className="login__form--title">
            <span className="title1">
              <span className={`heading`}>Đăng nhập vào tài khoản của bạn</span>
            </span>
            <span className="title2">
              <span className={`body--1`}>Tận hưởng những hương vị ngọt ngào!</span>
            </span>
          </div>
          {/* form */}
          <form className="login__form--input">
            {/* input username */}
            <div className="login__form--user">
              <div className="login__form--username-title">
                <div className={`title--3`}>Tên đăng nhập</div>
              </div>
              <div className="input-wrapper">
                <TextField
                  className={`body--2`}
                  type="text"
                  placeholder={"Email/ Số điện thoại"}
                  style={{ borderColor: userColor }}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}

                />
                <div className="error-container">
                  <p className="error">{errorUserName}</p>
                  <p className="error">{errorEmail}</p>
                  <p className="error">{errorPhone}</p>
                </div>
              </div>
            </div>
            {/* input password */}
            <div className="login__form--password">
              <div className="login__form--password-title">
                <div className="login__form--password-title1">
                  <div className="title--3">Mật khẩu</div>
                </div>
                <div className="title--3">
                  <a href="/">Quên mật khẩu</a>
                </div>
              </div>
              <div className="input-wrapper">
                <TextField
                  className={`body--2`}
                  type="password"
                  placeholder="Mật khẩu"
                  style={{ borderColor: passwordColor }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="error-container">
                <p className="error">{errorPassword}</p>
              </div>
            </div>
            {/* line */}
            <div className="login__form--line">
              <hr />
            </div>
            {/* button */}
            <div className="login__form--submit-btn">
              <Button type="btn2 primary" className="btn" onClick={validate}>
                Đăng nhập
              </Button>
            </div>
          </form>
          {/* đăng ký */}
          <div className="login__form--register">
            <div className={`title--3`}>
              <span className="login__form--register-title1">Bạn không có tài khoản? </span>
              <a className="login__form--register-title2" href="/">
                Đăng ký
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register