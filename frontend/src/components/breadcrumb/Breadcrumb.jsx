// Hướng dẫn sử dụng: ở trang cần sử dụng breadcumb
// import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
// <Breadcrumb  />

import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import breadcrumbStyles from './Breadcrumb.module.css';

const Breadcrumb = () => {
  const location = useLocation();
  const { blogId, productId } = useParams();
  const [blogName, setBlogName] = useState('');
  const [productName, setProductName] = useState('');

  useEffect(() => {
    const fetchBlogName = async () => {
      try {
        const response = await fetch(`/api/blogs/${blogId}`);
        const data = await response.json();
        setBlogName(data.blogName);
      } catch (error) {
        console.error('Error fetching blog name:', error);
      }
    };

    const fetchProductName = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`);
        const data = await response.json();
        setProductName(data.productName);
      } catch (error) {
        console.error('Error fetching product name:', error);
      }
    };

    if (blogId) {
      fetchBlogName();
    }

    if (productId) {
      fetchProductName();
    }
  }, [blogId, productId]);

  const pathnames = location.pathname.split('/').filter((x) => x);
  const getBreadcrumbName = (pathname) => {
    const words = pathname.split('_');
    const formattedWords = words.map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    });
    return formattedWords.join(' ');
  };

  return (
    <nav >
      <ul className={`body--1 ${breadcrumbStyles.breadcrumbList}`}>
        <li >
          <Link to="/" >
            Home
          </Link>
        </li>
        {pathnames.map((pathname, index) => {
          const url = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLastItem = index === pathnames.length - 1;
          const breadcrumbName = getBreadcrumbName(pathname);

          return (
            <React.Fragment key={index}>
              <li className={breadcrumbStyles.breadcrumbSeparator}>|</li>
              <li >
                {isLastItem ? (
                  <span >{breadcrumbName}</span>
                ) : (
                  <Link to={url} >
                    {breadcrumbName}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
        {blogName && (
          <>
            <li className={breadcrumbStyles.breadcrumbSeparator}>|</li>
            <li>{blogName}</li>
          </>
        )}
        {productName && (
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