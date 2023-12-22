import React from 'react'
import Button from '../../components/button/Button';
import Navbar from '../../components/header/NavBar'
// import Card from '../../components/card/Card'
import Tab from '../../components/tab/Tab'
import Footer from '../../components/footer/Footer'
import AddSelect from '../../components/AddSelect/addSelect';
import acct from './Account.module.css'
import { Link } from 'react-router-dom'


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
        <AddSelect showProvince={true} showDistrict={true} showWard={true} />

      </div>
      <Footer></Footer>
    </div>
  )
}

export default Account