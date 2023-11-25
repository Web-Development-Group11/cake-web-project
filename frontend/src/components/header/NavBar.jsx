import '../../Variable.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
import './NavBar.css';
import Dropdown from './Dropdown';
import { FaSearch } from 'react-icons/fa';
import { FaGift } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

const navItems = [
  {
    id: 1,
    title: 'Trang chủ',
    path: './',
    cName: 'nav-item',
  },
  {
    id: 2,
    title: 'Custom Cupcake',
    path: './cuscupcake',
    cName: 'nav-item',
  },
  {
    id: 3,
    title: 'Sản phẩm',
    path: './product',
    cName: 'nav-item',
    isDropdown: true,
    dropDownItems: [
      {
        id: 1,
        title: 'Cupcake',
        path: './cart',
        cName: 'submenu-item',
      },
      {
        id: 2,
        title: 'Tiramisu',
        path: './cart',
        cName: 'submenu-item',
      },
      {
        id: 3,
        title: 'Cookie',
        path: './cart',
        cName: 'submenu-item',
      },
      {
        id: 4,
        title: 'Combo',
        path: './cart',
        cName: 'submenu-item',
      },
    ],
  },
  {
    id: 4,
    title: 'Giới thiệu',
    path: './introduction',
    cName: 'nav-item',
  },
  {
    id: 5,
    title: 'Blog',
    path: './blog',
    cName: 'nav-item',
  },
  {
    id: 6,
    title: 'Hỗ trợ',
    path: './support',
    cName: 'nav-item',
    isDropdown: true,
    dropDownItems: [
      {
        id: 1,
        title: 'Liên hệ',
        path: './support',
        cName: 'submenu-item',
      },
      {
        id: 2,
        title: 'Chính sách giao hàng',
        path: './support',
        cName: 'submenu-item',
      },
      {
        id: 3,
        title: 'Câu hỏi thường gặp',
        path: './support',
        cName: 'submenu-item',
      },
    ],
  },
];

function Navbar() {
  const [searchOn, setSearchOn] = useState(false);
  console.log(searchOn);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__content">
          <Link to="/">
            <img src={logo} alt="logo" className="navBar__logo"></img>
          </Link>
          <ul className="navBar__item">
            {navItems.map((item) => (
              <li key={item.id} className={`${item.cName} title--2`}>
                {item.isDropdown ? (
                  <>
                    <p className="nav-item__link" to={item.path}>
                      {item.title}
                    </p>
                    <Dropdown items={item.dropDownItems} />
                  </>
                ) : (
                  <Link className="nav-item__link" to={item.path}>
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <ul className="navBar__icons">
            <li className="navBar__search">
              <FaSearch
                onClick={() => setSearchOn((state) => !state)}
                className="navBar__icon"
              />
              {searchOn && (
                <div className="navBar__search-bar">
                  <input
                    className="navBar__search-input"
                    type="text"
                    placeholder="Tìm kiếm"
                  />
                  <div className="navBar__search-button">
                    <FaSearch className="navBar__search-icon" />
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link to="/gift">
                <FaGift className="navBar__icon" />
              </Link>
            </li>
            <li>
              <Link to="/login">
                <FaUser className="navBar__icon" />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <FaShoppingCart className="navBar__icon" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
