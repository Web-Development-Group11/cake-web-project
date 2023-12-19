import React from 'react'

const Account = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className={acct.content}>
        <div className={acct.navigation}>
          <Link className={acct.navigation__item} to={'/'}>Trang chủ</Link>
          <p className={acct.navigation__item}>|</p>
          <Link className={acct.navigation__item} to={'/account'}>Trang tài khoản</Link>
        </div>
        
        <div className={acct.tab}>
          <Tab></Tab>
        </div>
        
      </div>
    </div>
  )
}

export default Account