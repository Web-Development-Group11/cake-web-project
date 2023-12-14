import React from 'react'
import Button from '../../components/button/Button'
import Navbar from '../../components/header/NavBar'
import Footer from '../../components/footer/Footer'
import Card from '../../components/card/Card'

const Home = () => {
  return (
    <div>
        <h1>
        Welcome to React
        </h1>
        <Button type ="btn1 primary " >Liên hệ </Button>
        <Card></Card>
      {/* <Footer/> */}
    </div>
  )
}

export default Home