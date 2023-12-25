import '../../Variable.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
import './NavBar.css';
import Dropdown from '../dropdown/Dropdown';
import { FaSearch } from 'react-icons/fa';
import { FaGift } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useModal } from '../../hook/useModal';
import { axiosClient } from '../../api/axios'
import { useCurrentUser } from '../../hook/useCurrentUser'

const navItems = [
  {
    id: 1,
    title: 'Trang chủ',
    path: '/',
    cName: 'nav-item',
  },
  {
    id: 2,
    title: 'Custom Cupcake',
    path: '/cuscupcake',
    cName: 'nav-item',
  },
  {
    id: 3,
    title: 'Sản phẩm',
    path: '/product',
    cName: 'nav-item',
    isDropdown: true,
    dropDownItems: [
      {
        id: 1,
        title: 'Cupcake',
        path: '/cart',
        cName: 'submenu-item',
      },
      {
        id: 2,
        title: 'Tiramisu',
        path: '/cart',
        cName: 'submenu-item',
      },
      {
        id: 3,
        title: 'Cookie',
        path: '/cart',
        cName: 'submenu-item',
      },
      {
        id: 4,
        title: 'Combo',
        path: '/cart',
        cName: 'submenu-item',
      },
    ],
  },
  {
    id: 4,
    title: 'Giới thiệu',
    path: '/introduction',
    cName: 'nav-item',
  },
  {
    id: 5,
    title: 'Blog',
    path: '/blog',
    cName: 'nav-item',
  },
  {
    id: 6,
    title: 'Hỗ trợ',
    path: '/support',
    cName: 'nav-item',
    isDropdown: true,
    dropDownItems: [
      {
        id: 1,
        title: 'Liên hệ',
        path: '/support',
        cName: 'submenu-item',
      },
      {
        id: 2,
        title: 'Chính sách giao hàng',
        path: '/policy',
        cName: 'submenu-item',
      },
      {
        id: 3,
        title: 'Câu hỏi thường gặp',
        path: '/faq',
        cName: 'submenu-item',
      },
    ],
  },
];

function Navbar() {
  const [searchOn, setSearchOn] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const { data: currentUser } = useCurrentUser();

  const onOpen = useModal((state) => state.onOpen);
  const setData = useModal((state) => state.setData)

  const handleOpenRandomBox = async () => {
    if (!currentUser) {
      alert('Bạn cần đăng nhập để mở random box');
      return;
    }
    onOpen('randomBox');

    try {
      const response = await axiosClient('/products/random');

      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const onCloseMenu = () => {
    setMenuActive(false);
  }

  const onOpenMenu = (ev) => {
    ev.stopPropagation();
    setMenuActive(true);
  }

  const handleLogout = async () => {
    try {
      await axiosClient.post('/logout');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__content">
        {menuActive && (
          <div className="navbar-menu__placeholder"></div>
        )}
        <div className="navBar__home">
          <Link to="/">
            <img src={logo} alt="logo" className="navBar__logo"></img>
          </Link>
        </div>
        
        <div onClick={onCloseMenu} className={`navBar__menu ${menuActive ? 'active' : ''}`}>
          <IoMenu onClick={onOpenMenu} className='navBar__menu-icon' />
          <ul className="navBar__item" onClick={(ev) => ev.stopPropagation()}>
            <li className='navBar__mobile-header'>
              <img src={logo} alt="logo" className="navBar__mobile-logo"></img>
              <IoMdClose onClick={onCloseMenu} className='navBar__close-icon' />
            </li>
            {navItems.map((item) => (
              <li key={item.id} className={`${item.cName} title--2`}>
                {item.isDropdown ? (
                  <>
                    <Link className="nav-item__link has-drop-down" to={item.path}>
                      {item.title}
                    </Link>
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
        </div>
        <ul className="navBar__icons">
          <li className="navBar__search">
            <FaSearch
              onClick={() => setSearchOn((state) => !state)}
              className="navBar__icon"
            />
            {searchOn && (
              <>
                <div onClick={() => setSearchOn(false)} className="layer"></div>
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
              </>
            )}
          </li>
          <li>
            <div onClick={handleOpenRandomBox}>
              <FaGift className="navBar__icon" />
            </div>
          </li>
          <li>
            <div className='nav-item has-drop-down authenticate'>
              <Link to='/account'>
                <FaUser className="navBar__icon" />
              </Link>
              <ul className='product-submenu'>
                {currentUser && (
                  <>
                    <li className="product-submenu__item">
                      <Link to='/account' className={`submenu-item body--2`}>
                        Tài khoản
                      </Link>
                    </li>
                    <li className="product-submenu__item">
                      <div onClick={handleLogout} className={`submenu-item body--2`}>
                        Đăng xuất
                      </div>
                    </li>
                  </>
                )}
                {!currentUser && (
                  <>
                    <li className="product-submenu__item">
                      <Link to='/register' className={`submenu-item body--2`}>
                        Đăng ký
                      </Link>
                    </li>
                    <li className="product-submenu__item">
                      <Link to='/login' className={`submenu-item body--2`}>
                        Đăng nhập
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingCart className="navBar__icon" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;