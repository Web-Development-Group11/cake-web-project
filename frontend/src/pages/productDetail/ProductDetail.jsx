import React, { useState, useEffect } from 'react';
import './ProductDetail.css';
import { Link, useParams } from 'react-router-dom';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';
import BoxQuantityComponent from '../../components/boxquantity/BoxQuantity';
import TabReview from './tab/TabReview';
import { axiosClient } from '../../api/axios';
import Rating from '@mui/material/Rating';
import Loader from '../../components/loader/Loader';


// Import các icon
// import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

export default function ProductDetail(props) {
  // Hinh anh hiển thị
  const [selectedImage, setSelectedImage] = useState();
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);
  const {id} = useParams();
  const [product, setProduct] = useState();
  const handleImageClick = (newImage, index) => {
    setSelectedImage(newImage);
    setSelectedThumbnail(index);
  };

  // Hàm thay đổi số lượng
  const [quantity, setQuantity] = useState(1);
  const onQuantityChange = (e) => {
    setQuantity(parseInt(e));
  }

  // Loader state
  const [isLoading, setIsLoading] = useState(true);

  //  Lấy sản phẩm từ API
  const getProduct = async ()=> {
    try {
      const response = await axiosClient.get(`/products/${id}`);

      setTimeout(() => {
        setIsLoading(false);
      })

      setProduct(response.data.data);
      setSelectedImage(response.data.data?.image_urls.image_url_0);
      setSelectedThumbnail(0);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProduct();
  },[id]);

  // Sample Card
  const sampleProduct = {
    specific_type: "some_type",
    title: "Sample Product",
    price: "$19.99",
    pRate: 4.5,
    image_urls: {
      image_url_0: "https://cupcakecentral.com.au/cdn/shop/products/CLASSIC-STYLED-CC-RV-3.jpg?v=1681783027",
    },
  };

  return isLoading ?  (
    <Loader></Loader>
  ) : (
    <>
      <div className='productDetail__screen'>
        <div className='productDetail__page'>
          <div className='navigation'>
            <Link className="navigation__item" to={'/'}>Trang chủ</Link>
            <p className="navigation__item">|</p>
            <Link className="navigation__item" to={'/product'}>Sản phẩm</Link>

              <>
                <p className="navigation__item">|</p>
                <Link className="navigation__item" to={`/productDetail/${id}`} >{product?.title}</Link>
              </>
          </div>

          <div className='productDetail'>
            <div className='productDetail__info'>
              <div className="productDetail__info_img">
                <div className="productDetail__info_img-big">
                  <img src={selectedImage} alt="" />
                </div>
                <div className="productDetail__info_img-small">
                  <img
                    className={`selectable-image ${selectedThumbnail === 0 ? 'selected' : ''}`}
                    src={product.image_urls.image_url_0}
                    alt=""
                    onClick={() => handleImageClick(product.image_urls.image_url_0, 0)}
                  />
                  <img
                    className={`selectable-image ${selectedThumbnail === 1 ? 'selected' : ''}`}
                    src={product.image_urls.image_url_1}
                    alt=""
                    onClick={() => handleImageClick(product.image_urls.image_url_1, 1)}
                  />
                  <img
                    className={`selectable-image ${selectedThumbnail === 2 ? 'selected' : ''}`}
                    src={product.image_urls.image_url_2}
                    alt=""
                    onClick={() => handleImageClick(product.image_urls.image_url_2, 2)}
                  />
                  <img
                    className={`selectable-image ${selectedThumbnail === 3 ? 'selected' : ''}`}
                    src={product.image_urls.image_url_3}
                    onClick={() => handleImageClick(product.image_urls.image_url_3, 3)}
                  />
                </div>
              </div>

              {/* Thông tin sản phẩm */}
              
              <div className="productDetail__info_text" >

                <p className="productDetail__info_text-name title--1">{product.title}</p>
                <div className="productDetail__rating-star">

                </div>
                <Rating
                  style={{ color: '#E21033' }}
                  name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />

                <p className="productDetail__info_text-price title--1">{product.price}</p>

                <div className="productDetail__info_text-description body--2">
                  {product.product_description}
                </div>
                <div className="productDetail__info_text-quantity body--2">
                  <span className='title--3'>Số lượng</span>
                   <BoxQuantityComponent height="2.5rem" quantity={quantity} onQuantityChange={onQuantityChange} />
                </div>
                <div className="productDetail__info_text-button">
                  <div className="addToCart_button">
                    <Button type="btn1 secondary--1" onClick={() => props.addProduct(product, quantity)} >Thêm vào giỏ hàng</Button>
                  </div>
                  <div className="buyNow_button">
                    <Link to="/payment"><Button type="btn1 primary" onClick={() => props.addProductNow(product, quantity)}>Mua ngay</Button></Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sản phẩm nổi bật */}
            <div className="productDetail__outstanding">
              <p className="productDetail__outstanding_title heading">Sản phẩm nổi bật</p>
              <div className="productDetail__outstanding_card">
              <Card product={sampleProduct} addProduct={props.addProduct} />
              <Card product={sampleProduct} addProduct={props.addProduct} />
              <Card product={sampleProduct} addProduct={props.addProduct} />
              <Card product={sampleProduct} addProduct={props.addProduct} />
              </div>
            </div>

            <div className="productDetail__review">
              {product ? (<TabReview comments={product.comments} />) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

