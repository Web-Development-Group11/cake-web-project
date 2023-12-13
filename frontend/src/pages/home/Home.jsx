import React from 'react'
import  './Home.css'
import Button from '../../components/button/Button'
import Navbar from '../../components/header/NavBar'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="body">
        <div className="heading">Đây là heading</div>
        <div className="title--1">Đây là title 1</div>
        <div className="title--2">Đây là title 2</div>
        <div className="title--3">Đây là title 3</div>
        <div className="title--4">Đây là title 1</div>
        <div className="body--1">Đây là body 1</div>
        <div className="body--2">Đây là body 2</div>
        <Button type ="btn1 primary " >Liên hệ </Button><br />
        <Button type ="btn1 secondary--1 " >Liên hệ </Button><br /> 
        <Button type ="btn2 primary " >Liên hệ </Button><br />
        <Button type ="btn2 secondary--2 " >Liên hệ </Button>
      </div>
    </div>
  )
}

export default Home