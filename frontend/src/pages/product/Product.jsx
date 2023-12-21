import React, { useState } from 'react';
import './Product.css'
import { Link } from 'react-router-dom'
import Navbar from '../../components/header/NavBar'
import Card from '../../components/card/Card'
import jsonData from "../../assets/db/productsData.json";
import Footer from '../../components/footer/Footer'
import ProductSort from './productSort/ProductSort';
import Pagination from '../../components/pagination/index';


const productCategories = [
  {
    id: 1,
    title: 'Tất cả sản phẩm',
    path: '/product',
    cName: 'category-item',
  },
  {
    id: 2,
    title: 'Cupcake',
    path: '/product/cupcake',
    cName: 'category-item'
  },
  {
    id: 3,
    title: 'Tiramisu',
    path: '/product/tiramisu',
    cName: 'category-item'
  },
  {
    id: 4,
    title: 'Cookie',
    path: '/product/cookie',
    cName: 'category-item'
  },
  {
    id: 5,
    title: 'Combo',
    path: '/product/combo',
    cName: 'category-item'
  },
]

const Product = () => {
  const handleSortChange = (newSortValue) => {
    setFilters((preFilters) => ({
      ...preFilters,
      _sort: newSortValue,
    }));
  };

  const sortFilter = [
    { id: 1, title: 'Từ A-Z', value: 'title:ASC', cName: 'yourClassName' },
    { id: 2, title: 'Từ Z-A', value: 'title:DESC', cName: 'yourClassName' },
    { id: 3, title: 'Giá thấp tới cao', value: 'price:ASC', cName: 'yourClassName' },
    { id: 4, title: 'Giá cao xuống thấp', value: 'price:DESC', cName: 'yourClassName' },
  ];


  return (
    <>
      <Navbar />
      <div className='productScreen'>
        <div className='productPage'>
          <div className="navigation">
            <Link className="navigation__item" to={'/'}>Trang chủ</Link>
            <p className="navigation__item">|</p>
            <Link className="navigation__item" to={'/product'}>Sản phẩm</Link>
          </div>
          <div className='product'>
            <div className="product__filter">
              <p className="product__filter-heading title--2">
                Danh mục sản phẩm
              </p>

              {/* Lọc sản phẩm theo danh mục */}
              <ul className="product-categories">
                {productCategories.map((category) => (
                  <li
                    key={category.id}
                    className={`${category.cName} body--2`}>
                    <Link className="category-item__link" to={category.path}>
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>


            </div>

            <div className='product__list'>
              <div className="header">
                <p className="heading">Sản phẩm</p>

                <div className='product__sort'>
                  <ProductSort items={sortFilter} />
                </div>

              </div>

              <div className="product__list-item">
                {jsonData.map((category) => (
                  category.products.map((product) => (
                    <Card key={product.title} className="product__card" product={product} />
                  ))
                ))}
              </div>
              <div className='product__pagination'>
                <Pagination totalPages={6} />
              </div>
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  )
}

export default Product