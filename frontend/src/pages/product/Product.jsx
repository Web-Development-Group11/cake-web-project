import React, { useState, useEffect } from 'react';
import './Product.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../components/header/NavBar'
import Card from '../../components/card/Card'
import jsonData from "../../assets/db/productsData.json";
import Footer from '../../components/footer/Footer'
import ProductSort from './productSort/ProductSort';
import Pagination from '../../components/pagination/index';
import { axiosClient } from '../../api/axios';
import Loader from '../../components/loader/Loader';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

export default function Product(props) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const currentPage = params.get('page') || 1;
  const keyword = params.get('keyword') || null;
  const filter = params.get('filter') || null;
  const sort = params.get('sort') || null;

  // Loader state
  const [isLoading, setIsLoading] = useState(true);

  const [product, setProduct] = useState();
  const [total, setTotal] = useState();
  const productCategories = [
    {
      id: 2,
      title: 'Cupcake',
      path: '/product/cupcake',
      filter: 'cupcake',
      cName: 'category-item'
    },
    {
      id: 3,
      title: 'Brownie',
      path: '/product/brownie',
      cName: 'category-item',
      filter: 'brownie',
    },
    {
      id: 4,
      title: 'Cookie',
      path: '/product/cookie',
      cName: 'category-item',
      filter: 'cookie',
    },
    {
      id: 5,
      title: 'Combo',
      path: '/product/combo',
      cName: 'category-item',
      filter: 'combo',
    },
  ]


  // const handleSortChange = (newSortValue) => {
  //   setFilters((preFilters) => ({
  //     ...preFilters,
  //     _sort: newSortValue,
  //   }));
  // };
  const sortFilter = [
    { id: 1, title: 'Từ A-Z', value: 'titleAsc', cName: 'yourClassName' },
    { id: 2, title: 'Từ Z-A', value: 'titleDesc', cName: 'yourClassName' },
    { id: 3, title: 'Giá thấp tới cao', value: 'priceAsc', cName: 'yourClassName' },
    { id: 4, title: 'Giá cao xuống thấp', value: 'priceDesc', cName: 'yourClassName' },
  ];

  useEffect(() => {
    // Query params for products request
    const getProduct = async () => {
      const searchParams = new URLSearchParams();
      searchParams.append('page', currentPage);
      searchParams.append('size', 9);
      if (keyword) {
        searchParams.append('keyword', keyword);
      }
      if (filter) {
        searchParams.append('filter', filter);
      }
      if (sort) {
        searchParams.append('sort', sort);
      }

      try {
        const response = await axiosClient.get(`/products?${searchParams.toString()}`);

        setTimeout(() => {
          setIsLoading(false);
        })

        setProduct(response.data.data);
        setTotal(response.data.totalPages)

      } catch (err) {
        console.log(err);
      }
    }
    getProduct();
  }, [currentPage, keyword, filter, sort]);

  const navigate = useNavigate();

  return isLoading ? (
    <Loader></Loader>
  ) : (
    <>
      <div className='productScreen'>
        <div className='productPage'>
          <div className='navigation'>
            <Breadcrumb />
          </div>
          <div className='product'>
            <div className="product__filter">
              <p className="product__filter-heading title--2">
                Danh mục sản phẩm
              </p>

              {/* Lọc sản phẩm theo danh mục */}
              <ul className="product-categories">
                <li className={`category-item body--2`}>
                  <div onClick={() => {
                    params.delete('filter')
                    navigate({ search: params.toString() })
                  }} className="category-item__link">
                    Tất cả sản phẩm
                  </div>
                </li>
                {productCategories.map((category) => (
                  <li
                    key={category.id}
                    className={`${category.cName} body--2`}>
                    <div onClick={() => {
                      params.set('filter', category.filter);
                      navigate({ search: params.toString() });
                    }} className={`category-item__link ${filter === category.filter ? 'text-primary' : ''}`}>
                      {category.title}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className='product__list'>
              <div className="header">
                <p className="heading">Tất cả sản phẩm</p>

                <div className='product__sort'>
                  <ProductSort items={sortFilter} />
                </div>
              </div>
              {keyword && (
                <div className="product__search-results">
                  <p className='product__keyword'>
                    Kết quả tìm kiếm cho "{keyword}"
                  </p>
                  <p onClick={() => {
                    params.delete('keyword');
                    navigate({ search: params.toString() })
                  }} className='product__search-delete'>
                    Xóa kết quả tìm kiếm
                  </p>
                </div>
              )}

              <div className="product__list-item">
                {product?.map((product, idx) => (
                  <Card key={idx} className="product__card" product={product} addProduct={props.addProduct} />
                ))}
              </div>
              <div className='product__pagination'>
                <Pagination totalPages={total} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
