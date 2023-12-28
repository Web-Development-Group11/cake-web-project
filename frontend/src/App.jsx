import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import Forgetpass from './pages/login/Forgetpass';
import Entercode from './pages/login/Entercode';
import Changepass from './pages/login/Changpass';
import Product from './pages/product/Product';
import ProductDetail from './pages/productDetail/ProductDetail';
import Support from './pages/support/Support';
import Policy from './pages/policy/Policy';
import Faq from './pages/faq/faq';
import Account from './pages/account/Account';
import Cart from './pages/cart/Cart';
import Introduction from './pages/introduction/Introduction';
import Blog from './pages/blog/Blog';
import Navbar from './components/header/NavBar';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scroll/scroll';
import BlogDetail from './pages/blogDetail/BlogDetail';
import PaymentPageGuest from './pages/payment/PaymentPageGuest';
import PaymentPageAuthenticated from './pages/payment/PaymentPageAuthenticated';
import Loader from './components/loader/Loader';
import { useState, useEffect } from "react";
import { axiosClient } from './api/axios';
import ModalProvider from './provider/ModalProvider';
import { fetcher } from './api/fetcher';
import ToasterProvider from './provider/ToasterProvider';

function App() {

  const [showNavbar, setShowNavbar] = useState(true);

  const [cart, setCart] = useState([])

  // Hàm thêm sản phẩm vào giỏ hàng
  const [total, setTotal] = useState()

  const addProduct = (products, quantity) => {
    const listProductsTmp = cart
    const productSelect = {
      ...products,
      amount: quantity || 1,
    }

    let checkId = false;
    let tmp = 0;

    // Nếu sản phẩm đã có trong giỏ hàng thì tăng số lượng lên
    listProductsTmp.map((item) => {
      if (item.id === productSelect.id && !checkId) {
        item.amount = item.amount + productSelect.amount;
        checkId = true;
      }
    })

    listProductsTmp.map((item) => {
      tmp += item.amount
    })

    // Nếu sản phẩm chưa có trong giỏ hàng thì thêm vào
    if (!checkId) {
      tmp += productSelect.amount
      listProductsTmp.push(productSelect)
    }
    setTotal(tmp)
    console.log(tmp)
    setCart(listProductsTmp)
    saveGuestCart()
  }

  useEffect(() => {
    getGuestCart()
  },[])

  useEffect(() => {
    let tmp = 0;
    cart.map(item => {
      tmp += parseInt(item.amount)
    })
    setTotal(tmp);
    console.log(tmp)
    },[cart])

// save user cart
const saveGuestCart = async()=> {
  try {
    await  axiosClient.post('/cart',{cart})
  } catch (err) {
    console.log(err)
  }
}

//get user cart
const getGuestCart = async ()=> {
  try {
    const response =  await axiosClient.get('/cart')
    if(response.data.data) {
    setCart(response.data.data)
    console.log(response.data.data)
    } 
  } catch (err) {
    console.log(err)
  }
}

  return (
    <div className="App">
      <BrowserRouter>
        <ModalProvider />
        <ToasterProvider />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={< Home setShowNavbar={setShowNavbar} />} />
          <Route path="/login" element={< Login setShowNavbar={setShowNavbar} />} />
          <Route path="/register" element={< Register setShowNavbar={setShowNavbar} />} />
          <Route path="/forgetpassword" element={< Forgetpass setShowNavbar={setShowNavbar} />} />
          <Route path="/entercode" element={< Entercode setShowNavbar={setShowNavbar} />} />
          <Route path="/changepassword" element={< Changepass setShowNavbar={setShowNavbar} />} />
          <Route path="/product" element={< Product cart={cart} setCart={setCart} addProduct={addProduct} />} />
          <Route path="/productDetail/:id" element={< ProductDetail cart={cart} setCart={setCart} addProduct={addProduct} />} />
          <Route path="/support" element={< Support />} />
          <Route path="/policy" element={< Policy />} />
          <Route path="/faq" element={< Faq />} />
          {/* <Route path="/payment" element={< Payment />} /> */}
          <Route path="/account" element={< Account />} />
          <Route path="/cart" element={< Cart cart={cart} setCart={setCart} />} />
          <Route path="/introduction" element={< Introduction />} />
          <Route path="/blog" element={< Blog />} />
          <Route path="/blog/:blogSlug" element={< BlogDetail />} />

          {/* <Route path="/test" element={< Shop />} /> */}

        </Routes>
        {showNavbar ? <Navbar total={total} /> : null}
        {showNavbar ? <Footer /> : null}
      </BrowserRouter>
    </div>
  );
}

export default App;
