import React from 'react'
import Button from '../../components/button/Button'
import Navbar from '../../components/header/NavBar'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
        <p>hello world</p>
        <Button type ="btn1 primary " >Liên hệ </Button>
      <Footer/>
    </div>
  )
}

export default Home