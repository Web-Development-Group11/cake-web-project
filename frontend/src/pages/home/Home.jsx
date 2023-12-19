import React from 'react';
import Button from '../../components/button/Button';
import Navbar from '../../components/header/NavBar'
import Banner from '../../components/banner/Banner'
import Category from '../../components/category/Category'
import Card from '../../components/card/Card'
import './Home.css'


const Home = () => {


  return (
    <div>
    <Navbar></Navbar>
    
   
      <div className="home__content">
        <Banner></Banner>
        <div className="heading">Đây là heading</div>
        <div className="title--1">Đây là title 1</div>
        <div className="title--2">Đây là title 2</div>
        <div className="title--3">Đây là title 3</div>
        <div className="title--4">Đây là title 4</div>
        <div className="body--1">Đây là body 1</div>
        <div className="body--2">Đây là body 2</div>
        <Button type ="btn1 primary ">Liên hệ </Button><br />
        <Button type ="btn1 secondary--1 ">Liên hệ </Button><br /> 
        <Button type ="btn2 primary " >Liên hệ </Button><br />
        <Button type ="btn2 secondary--2 " >Liên hệ </Button><br />

        <Category className="category" link="/cupcake" img="/src/assets/category/cupcake.png" title="Cupcake"  description="Món ăn nhẹ ngọt ngào và đáng yêu"></Category>

        <Category className="category" link="/tiramisu" img="/src/assets/category/tiramisu.png" title="Tiramisu"  description="Món bánh ngọt sang trọng và béo ngậy"></Category>

        <Category className="category" link="/cookie" img="/src/assets/category/cookie.png" title="Cookie"  description="Những chiếc bánh giòn tan và đậm đà"></Category>
        
        <Category className="category" link="/combo" img="/src/assets/category/combo.png" title="Combo"  description="Sự kết hợp đa dạng và hoàn hảo"></Category>

        <Card></Card>
      </div>
    </div>
  )
}

export default Home