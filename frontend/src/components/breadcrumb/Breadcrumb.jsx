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

  return (
    <nav className={breadcrumbStyles.breadcrumb}>
      <ul className={breadcrumbStyles.breadcrumbList}>
        <li className={breadcrumbStyles.breadcrumbItem}>
          <Link to="/" className={breadcrumbStyles.breadcrumbLink}>
            Home
          </Link>
        </li>
        {pathnames.map((pathname, index) => {
          const url = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLastItem = index === pathnames.length - 1;
          const formattedPathname = formatBreadcrumb(pathname);

          return (
            <React.Fragment key={index}>
              <li className={breadcrumbStyles.breadcrumbSeparator}>|</li>
              <li className={breadcrumbStyles.breadcrumbItem}>
                {isLastItem ? (
                  <span className={breadcrumbStyles.breadcrumbText}>{formattedPathname}</span>
                ) : (
                  <Link to={url} className={breadcrumbStyles.breadcrumbLink}>
                    {formattedPathname}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
        {blogName && (
          <>
            <li className={breadcrumbStyles.breadcrumbSeparator}>|</li>
            <li className={breadcrumbStyles.breadcrumbItem}>{blogName}</li>
          </>
        )}
        {productName && (
          <>
            <li className={breadcrumbStyles.breadcrumbSeparator}>|</li>
            <li className={breadcrumbStyles.breadcrumbItem}>{productName}</li>
          </>
        )}
      </ul>
    </nav>
  );
};

const formatBreadcrumb = (pathname) => {
  const words = pathname.split('_').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return words.join(' ');
};

export default Breadcrumb;