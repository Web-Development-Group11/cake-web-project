import '../../Variable.css';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import toast from 'react-hot-toast';
import axios from 'axios';

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
        path: '/product?filter=cupcake',
        cName: 'submenu-item',
      },
      {
        id: 2,
        title: 'Brownie',
        path: '/product?filter=brownie',
        cName: 'submenu-item',
      },
      {
        id: 3,
        title: 'Cookie',
        path: '/product?filter=cookie',
        cName: 'submenu-item',
      },
      {
        id: 4,
        title: 'Combo',
        path: '/product?filter=box',
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

function Navbar(props) {
  const [searchOn, setSearchOn] = useState(false);
  const [searchContent, setSearchContent] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  // Declare token handling interrupting search requests
  const CancelToken = axios.CancelToken;
  let cancelSearchRequest;

  useEffect(() => {
    const fetchSearchResult = async () => {
      try {
        // Cancel the previous request if it exists
        if (cancelSearchRequest) {
          cancelSearchRequest();
        }

        // Create a cancellation token for the current request
        const source = CancelToken.source();
        cancelSearchRequest = source.cancel;

        const response = await axiosClient.get(`/products?keyword=${searchContent}`, {
          cancelToken: source.token
        });
        setSearchResult(response.data?.data);
      } catch (error) {
        // Ignored cancelled requests
        if (axios.isCancel(error)) {}
        else {
          console.log(error)
        }
      }
    }

    if (searchContent.length > 0) {
      fetchSearchResult();
    } else {
      // Cancel any ongoing search requests if the searchContent is empty
      if (cancelSearchRequest) {
        cancelSearchRequest();
      }

      setSearchResult(null);
    }

    return () => {
      if (cancelSearchRequest) {
        cancelSearchRequest();
      }
    }
  }, [searchContent])

  const [menuActive, setMenuActive] = useState(false);

  const navigate = useNavigate();

  const handleChooseProduct = (id) => {
    setSearchContent('');
    setSearchOn(false);
    navigate(`/product/${id}`);
  }

  const { data: currentUser } = useCurrentUser();

  const onOpen = useModal((state) => state.onOpen);
  const setData = useModal((state) => state.setData)

  const handleOpenRandomBox = async () => {
    if (!currentUser) {
      toast.error('Bạn cần đăng nhập để mở Random Box!')
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
      navigate('/')
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  const handleNavigateResult = () => {
    if (searchContent.length > 0) {
      setSearchOn(false);
      setSearchContent('');
      navigate(`/product?keyword=${searchContent}`);
    }
  }

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
                <div onClick={() => {
                  setSearchOn(false);
                  setSearchContent('');
                }} className="layer"></div>
                <div className="navBar__search-bar">
                  <input
                    autoFocus
                    className="navBar__search-input"
                    value={searchContent}
                    onChange={(e) => setSearchContent(e.target.value)}
                    onKeyDown={(e) => {
                      e.key === 'Enter' && handleNavigateResult();
                    }}
                    type="text"
                    placeholder="Tìm kiếm"
                  />
                  <div onClick={handleNavigateResult} className="navBar__search-button">
                    <FaSearch className="navBar__search-icon" />
                  </div>
                </div>
                {searchResult && searchResult.length > 0 && (
                  <div className='navBar__search-results'>
                    {searchResult.slice(0, 3).map((item) => (
                      <div key={item.id} onClick={() => handleChooseProduct(item.id)} className="navBar__search-item">
                        <img src={item.image_urls.image_url_0} alt="" />
                        <div className="navBar__search-item-container">
                          <h3>{item.title}</h3>
                          <p>{item.product_description}</p>
                        </div>
                      </div>
                    ))}
                    <p onClick={handleNavigateResult} className='navBar__search-desc'>View all results</p>
                  </div>
                )}
                {searchResult && searchResult.length === 0 && (
                  <div className='navBar__search-results'>
                    <p onClick={() => {
                      setSearchOn(false);
                      setSearchContent('');
                    }} className='navBar__search-item center'>
                      Không tìm thấy kết quả phù hợp
                    </p>
                  </div>
                )}
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
              {currentUser && (
                <Link to='/account'>
                <FaUser className="navBar__icon" />
              </Link>
              )}
              {!currentUser && (
                <div onClick={() => toast.error("Bạn cần đăng nhập!")}>
                  <FaUser className="navBar__icon" />
                </div>
              )}
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
              <span className="cartamount">
                <sup className="sub body--2">{props.total}</sup>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
