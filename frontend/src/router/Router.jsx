import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import Product from "../pages/product/Product";
import ProductDetail from "../pages/productDetail/ProductDetail";
import Support from "../pages/support/Support";
import Policy from "../pages/policy/Policy";
import Payment from "../pages/payment/Payment";
import Account from "../pages/account/Account";
import Cart from "../pages/cart/Cart";
import Introduction from "../pages/introduction/Introduction";
import Blog from "../pages/blog/Blog";
import Navbar from "../components/header/NavBar";
import Footer from "../components/footer/Footer";

const Router = () => {
    return (
        <div className="App">
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={< Home />} />
                        <Route path="/login" element={< Login />} />
                        <Route path="/register" element={< Register />} />
                        <Route path="/product" element={< Product />} />
                        <Route path="product_detail" element={< ProductDetail />} />
                        <Route path="/support" element={< Support/>} />
                        <Route path="/policy" element={< Policy/>} />
                        <Route path="/payment" element={< Payment />} />
                        <Route path="/account" element={< Account />} />
                        <Route path="/cart" element={< Cart />} />
                        <Route path="/introduction" element={< Introduction />} />
                        <Route path="/blog" element={< Blog />} />
                    </Routes>
            </BrowserRouter>
        </div>
      );
}

export default Router;