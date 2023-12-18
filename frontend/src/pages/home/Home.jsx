import React from 'react'
import Button from '../../components/button/Button'
import Navbar from '../../components/header/NavBar'
import Category from '../../components/category/Category'
import cupcake from '../../assets/category/cupcake.png'
import tiramisu from '../../assets/category/tiramisu.png'
import Card from '../../components/card/Card'
import cookie from '../../assets/category/cookie.png'
import combo from '../../assets/category/combo.png'
import Footer from '../../components/footer/Footer'
import Pagination from '../../components/pagination'
import Modal from '../../components/modal/Modal'
import { useModal } from '../../hook/useModal'
import { useMountTransition } from '../../hook/useMountTransition'
import DeleteBlogModal from '../../components/modal/DeleteBlogModal'
import { useLocation } from 'react-router-dom'
import BoxQuantityComponent from '../../components/boxquantity/BoxQuantity'
const Home = () => {
  // const onOpen = useModal((state) => state.onOpen);

  // const location = useLocation();
  // const params = new URLSearchParams(location.search);

  // const currentPage = params.get('page') || 1;
  // console.log(currentPage)

  return (
    <div>
      {/* <BoxQuantityComponent height="1.5rem" /> */}
    {/* <Navbar></Navbar>
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
        <Button type ="btn2 secondary--2 " >Liên hệ </Button><br />

        <Category className="category" link="/cupcake" img={cupcake} title="Cupcake"  description="Món ăn nhẹ ngọt ngào và đáng yêu"></Category>

        <Category className="category" link="/tiramisu" img={tiramisu} title="Tiramisu"  description="Món bánh ngọt sang trọng và béo ngậy"></Category>

        <Category className="category" link="/cookie" img={cookie} title="Cookie"  description="Những chiếc bánh giòn tan và đậm đà"></Category>
        
        <Category className="category" link="/combo" img={combo} title="Combo"  description="Sự kết hợp đa dạng và hoàn hảo"></Category>

        <Card></Card>
      </div>
      <Pagination totalPages={4} />
      <button onClick={onOpen}>Click me!</button>
      <DeleteBlogModal />
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      
      <Footer></Footer> */}
    </div >
  )
}

export default Home