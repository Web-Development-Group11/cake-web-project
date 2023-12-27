import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import breadcrumbStyles from './Breadcrumb.module.css';
import { axiosClient } from '../../api/axios';

const vietnameseBreadcrumbNames = {
  home: 'Trang chủ',
  blog: 'Blog',
  product: 'Sản phẩm',
  productDetail: 'Sản phẩm',
  paymentpageguest: 'Thanh toán',
  paymentpageauth: 'Thanh toán',
  support: 'Hỗ trợ khách hàng',
  policy: 'Hỗ trợ kháchi9 hàng',
  faq: 'Hỗ trợ khách hàng',
  account: 'Trang tài khoản',
  cart: 'Giỏ hàng',
  introduction: 'Giới thiệu'
};

const Breadcrumb = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const pathElements = pathname.split('/');
  const productId = pathElements[2];
  const [productName, setProductName] = useState('');
  const [dataLoaded, setDataLoaded] = useState(false); 

  useEffect(() => {
    const fetchProductById = async (productId) => {
      try {
        const response = await axiosClient.get(`/products/${productId}`);
        const productData = response.data.data;
        const productName = productData.title;
        setProductName(productName);
        setDataLoaded(true); 
      } catch (error) {
        setDataLoaded(true); 
      }
    };

    if (productId != null) {
      fetchProductById(productId);
    }
  }, [productId]);

  const pathnames = location.pathname.split('/').filter((x) => x);
  const getBreadcrumbName = (pathname) => {
    return vietnameseBreadcrumbNames[pathname] || pathname;
  };

  const showBreadcrumb = dataLoaded && productName; 

  return (
    <nav>
      <ul className={`body--1 ${breadcrumbStyles.breadcrumbList}`}>
        <li>
          <Link to="/">Trang chủ</Link>
        </li>

        {pathnames.slice(0, 1).map((pathname, index) => {
            const url = `/${pathnames.slice(0, index + 1).join('/')}`;
            const breadcrumbName = getBreadcrumbName(pathname);
            return (
              <React.Fragment key={index}>
                <li className={breadcrumbStyles.breadcrumbSeparator}>|</li>
                <li>
                  <Link to={url}>{breadcrumbName}</Link>
                </li>
              </React.Fragment>
            );
          })}
        {showBreadcrumb && (
          <>
            <li className={breadcrumbStyles.breadcrumbSeparator}>|</li>
            <li>{productName}</li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Breadcrumb;