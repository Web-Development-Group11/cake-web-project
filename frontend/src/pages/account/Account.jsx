import React, { useEffect, useState } from 'react'
import Button from '../../components/button/Button';
import Navbar from '../../components/header/NavBar'
// import Card from '../../components/card/Card'
import Tab from '../../components/tab/Tab'
import Footer from '../../components/footer/Footer'
import AddSelect from '../../components/addSelect/AddSelect';
import acct from './Account.module.css'
import ScrollToTop from '../../components/scroll/scroll'
import { Link } from 'react-router-dom'
import { axiosClient } from '../../api/axios';
import Loader from '../../components/loader/Loader';

const Account = () => {
const [user, setUser] = useState();

useEffect( () =>  {
  const getUser = async () =>{
  try{
    const response = await axiosClient.get('/user')
    setUser(response.data.data)
    console.log(response.data.data)
  } catch (err) {
    console.log(err)
  }
}
getUser();
},[]);

  return (
    <div>
      <Navbar></Navbar>
      <div className={acct.content}>
        <div className={acct.navigation}>
          <Link className={acct.navigation__item} to={'/'}>Trang chủ</Link>
          <p className={acct.navigation__item}>|</p>
          <Link className={acct.navigation__item} to={'/account'}>Trang tài khoản</Link>
        </div>
        {user?(
        <div className={acct.tab}>
          <Tab user ={user} ></Tab>
        </div>
        ):(<Loader></Loader>)}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Account