// Breadcrumb.jsx
import React from 'react';
import styles from './Breadcrumb.module.css';

const Breadcrumb = ({ items }) => {
  return (
    <nav className={styles.breadcrumb}>
      <ul className={styles.breadcrumbList}>
        {items.map((item, index) => (
          <li key={index} className={index === items.length - 1 ? styles.activeItem : styles.breadcrumbItem}>
            {index === items.length - 1 ? (
              item.text
            ) : (
              <a href={item.url} className={styles.breadcrumbLink}>
                {item.text}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
