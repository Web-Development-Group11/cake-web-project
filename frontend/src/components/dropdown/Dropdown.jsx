import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dropdown({ items }) {
  return (
    <ul className="product-submenu">
      {items.map((item) => {
        return (
          <li key={item.id} className="product-submenu__item">
            <Link to={item.path} className={`${item.cName} body--2`}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
