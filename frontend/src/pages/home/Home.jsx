import React from 'react'
// import Button from '../../components/button/Button'
import Navbar from '../../components/header/NavBar'
// import Footer from '../../components/footer/Footer'

import Register from '../../pages/register/Register'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <Button type="btn1 primary " >Liên hệ </Button> */}
      {/* <Footer /> */}
      {/* <Login></Login> */}
      <Register></Register>
    </div>
  )
}

export default Home