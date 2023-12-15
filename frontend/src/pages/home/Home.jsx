import React from 'react'
import Button from '../../components/button/Button'
import Navbar from '../../components/header/NavBar'
import Footer from '../../components/footer/Footer'
import Pagination from '../../components/pagination'
import Modal from '../../components/modal/Modal'
import { useModal } from '../../hook/useModal'
import { useMountTransition } from '../../hook/useMountTransition'
import DeleteBlogModal from '../../components/modal/DeleteBlogModal'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const onOpen = useModal((state) => state.onOpen);

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const currentPage = params.get('page') || 1;
  console.log(currentPage)

  return (
    <>
      <Navbar/>
      <div style={{paddingTop: 60}}>
        Hello
      </div>
      <Pagination totalPages={4} />
      <button onClick={onOpen}>Click me!</button>
      <DeleteBlogModal />
      <Footer />
    </>
  )
}

export default Home