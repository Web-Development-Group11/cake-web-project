import React, { useState, useEffect } from 'react';
import './Product.css'
import { Link, useLocation, useParams } from 'react-router-dom'
import Card from '../../components/card/Card'
import ProductSort from './productSort/ProductSort';
import Pagination from '../../components/pagination/index';
import { axiosClient } from '../../api/axios';
import Loader from '../../components/loader/Loader';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

export default function Product(props) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const currentPage = params.get('page') || 1;

  // Filter and sort state
  const [currentSort, setCurrentSort] = useState('titleAsc');
  const [currentProductCategories, setCurrentProductCategories] = useState('all');

  // Loader state
  const [isLoading, setIsLoading] = useState(true);

  const [product, setProduct] = useState();
  const [total, setTotal] = useState();

  const productCategories = [
    {
      id: 1,
      title: 'Tất cả sản phẩm',
      path: 'all',
      cName: 'category-item',
    },
    {
      id: 2,
      title: 'Cupcake',
      path: 'cupcake',
      cName: 'category-item'
    },
    {
      id: 3,
      title: 'Brownie',
      path: 'brownie',
      cName: 'category-item'
    },
    {
      id: 4,
      title: 'Cookie',
      path: 'cookie',
      cName: 'category-item'
    },
    {
      id: 5,
      title: 'Combo',
      path: 'combo',
      cName: 'category-item'
    },
  ]


  const sortFilter = [
    { id: 1, title: 'Từ A-Z', value: 'titleAsc', cName: 'yourClassName' },
    { id: 2, title: 'Từ Z-A', value: 'titleDesc', cName: 'yourClassName' },
    { id: 3, title: 'Giá thấp tới cao', value: 'priceAsc', cName: 'yourClassName' },
    { id: 4, title: 'Giá cao xuống thấp', value: 'priceDesc', cName: 'yourClassName' },
  ];

  useEffect(() => {
    const getProduct = async () => {
      let response
      try {
        if (currentProductCategories === 'all') {
          response = await axiosClient.get(`/products?page=${currentPage}&sort=${currentSort}&size=9`);
        } else {
          response = await axiosClient.get(`/products?page=${currentPage}&filter=${currentProductCategories}&sort=${currentSort}&size=9`);
        }
        console.log(response)
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
  }, [currentPage, currentSort, currentProductCategories]);


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
                {productCategories.map((category) => (
                  <li
                    onClick={() => {
                      setCurrentProductCategories(category.path)
                    }}
                    key={category.id}
                    className={`${category.cName} body--2`}>
                    <Link className="category-item__link" >
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='product__list'>
              <div className="header">
                <p className="heading">Tất cả sản phẩm</p>

                <div className='product__sort'>
                  <ProductSort items={sortFilter} onChange={(e) => setCurrentSort(e)} />
                </div>

              </div>

              <div className="product__list-item">
                {product?.map((product) => (
                  <Card key={product.title} className="product__card" product={product} addProduct={props.addProduct} />
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
