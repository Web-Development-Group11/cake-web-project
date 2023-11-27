import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Home from './pages/home1/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Product from './pages/product/Product';
import ProductDetail from './pages/productDetail/ProductDetail';
import Support from './pages/support/Support';
import Payment from './pages/payment/Payment';
import Account from './pages/account/Account';
import Cart from './pages/cart/Cart';
import Introduction from './pages/introduction/Introduction';
import Blog from './pages/blog/Blog';
import Navbar from './components/header/NavBar';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/login" element={< Login />} />
                <Route path="/register" element={< Register />} />
                <Route path="/product" element={< Product />} />
                <Route path="productDetail" element={< ProductDetail />} />
                <Route path="/support" element={< Support/>} />
                <Route path="/payment" element={< Payment />} />
                <Route path="/account" element={< Account />} />
                <Route path="/cart" element={< Cart />} />
                <Route path="/introduction" element={< Introduction />} />
                <Route path="/blog" element={< Blog />} />
            </Routes>
        <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;

