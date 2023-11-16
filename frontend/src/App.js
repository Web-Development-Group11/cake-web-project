import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import Product_detail from './pages/Product_detail';
import Support from './pages/Support';
import Payment from './pages/Payment';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Introduction from './pages/Introduction';
import Blog from './pages/Blog';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/login" element={< Login />} />
        <Route path="/register" element={< Register />} />
        <Route path="/product" element={< Product />} />
        <Route path="product_detail" element={< Product_detail />} />
        <Route path="/support" element={< Support/>} />
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

export default App;
