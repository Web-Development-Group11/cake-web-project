import React from 'react'
import Button from '../../components/button/Button'
import Navbar from '../../components/header/NavBar'


const Home = () => {
  return (
    <div>
    <Navbar />
        <h1>
        Welcome to React
        </h1>
        <Button type ="btn1 primary " >hello </Button>
    </div>
  )
}

export default Home