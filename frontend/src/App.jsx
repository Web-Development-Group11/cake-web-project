import { BrowserRouter,  Routes, Route } from 'react-router-dom';
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
import Payment from './pages/payment/Payment';
import Account from './pages/account/Account';
import Cart from './pages/cart/Cart';
import Introduction from './pages/introduction/Introduction';
import Blog from './pages/blog/Blog';
import Navbar from './components/header/NavBar';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scroll/scroll';
import BlogDetail from './pages/blogDetail/BlogDetail';

import Shop from './pages/cart/Shop';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <ScrollToTop />
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/login" element={< Login />} />
                <Route path="/register" element={< Register />} />
                <Route path="/forgetpassword" element={< Forgetpass />} />
                <Route path="/entercode" element={< Entercode />} />
                <Route path="/changepassword" element={< Changepass />} />
                <Route path="/product" element={< Product />} />
                <Route path="productDetail" element={< ProductDetail />} />
                <Route path="/support" element={< Support/>} />
                <Route path="/policy" element={< Policy/>} />
                <Route path="/faq" element={< Faq/>} />
                <Route path="/payment" element={< Payment />} />
                <Route path="/account" element={< Account />} />
                <Route path="/cart" element={< Cart/>} />
                <Route path="/introduction" element={< Introduction />} />
                <Route path="/blog" element={< Blog />} />
                <Route path="/blog/:blogSlug" element={< BlogDetail />} />

                <Route path="/test" element={< Shop />} />

            </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
