import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import Product from "../pages/product/Product";
import ProductDetail from "../pages/productDetail/ProductDetail";
import Support from "../pages/support/Support";
import Policy from "../pages/policy/Policy";
import Faq from "../pages/faq/faq";
import Account from "../pages/account/Account";
import Cart from "../pages/cart/Cart";
import Introduction from "../pages/introduction/Introduction";
import Blog from "../pages/blog/Blog";
import Navbar from "../components/header/NavBar";
import Footer from "../components/footer/Footer";
import BlogDetail from "../pages/blogDetail/BlogDetail";
import PaymentPageGuest from '../pages/payment/PaymentPageGuest';
import PaymentPageAuthenticated from '../pages/payment/PaymentPageAuthenticated';
const Router = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={< Home />} />
                    <Route path="/login" element={< Login />} />
                    <Route path="/register" element={< Register />} />
                    <Route path="/product" element={< Product />} />
                    <Route path="/product/:id" element={< ProductDetail />} />
                    <Route path="/support" element={< Support />} />
                    <Route path="/policy" element={< Policy />} />
                    <Route path="/faq" element={< Faq />} />
                    <Route path="/paymentpageguest" element={< PaymentPageGuest />} />
                    <Route path="/paymentpageauth" element={< PaymentPageAuthenticated />} />
                    <Route path="/account" element={< Account />} />
                    <Route path="/cart" element={< Cart />} />
                    <Route path="/introduction" element={< Introduction />} />
                    <Route path="/blog" element={< Blog />} />
                    <Route path="/blog/:blogId" element={< BlogDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Router;