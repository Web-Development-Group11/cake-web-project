import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dropdown({ items }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <ul className="product-submenu" onClick={() => setDropdown(!dropdown)}>
      {items.map((item) => {
        return (
          <li key={item.id} className="product-submenu__item">
            <Link to={item.path} className={`${item.cName} body--2`} onClick={() => setDropdown(false)}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
