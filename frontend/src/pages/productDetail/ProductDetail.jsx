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
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { useCurrentUser } from "../../hook/useCurrentUser";


// Import các icon
// import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

export default function ProductDetail(props) {

  const { data: currentUser } = useCurrentUser();

  // Hinh anh hiển thị
  const [selectedImage, setSelectedImage] = useState();
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);
  const { id } = useParams();
  const [product, setProduct] = useState();
  const handleImageClick = (newImage, index) => {
    setSelectedImage(newImage);
    setSelectedThumbnail(index);
  };

  // Hàm lấy sản phẩm nổi bật
  const [highlightProduct, setHighlightProduct] = useState();

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
      const response = await axiosClient.get(`/product/${id}`);
      
      setTimeout(() => {
        setIsLoading(false);
      })

      // Call api lấy sao ở chỗ này rùi xoá data đi
      

      setProduct(response.data.data);
      setSelectedImage(response.data.data?.image_urls.image_url_0);
      setSelectedThumbnail(0);
    } catch (error) {
      console.log(error);
    }
  }
  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace(/\./g, ',');
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  useEffect(() => {
    const amount = 4;
    const getHighlightProduct = async () => {
      try {
        const response = await axiosClient.post('/highlight', { amount });
        setHighlightProduct(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getHighlightProduct();
  }, []);

  return isLoading ? (
    <Loader></Loader>
  ) : (
    <>
      <div className='productDetail__screen'>
        <div className='productDetail__page'>
          <div className='navigation'>
              <Breadcrumb />
          </div>
          <div className='productDetail'>
            <div className='productDetail__info'>
              <div className="productDetail__info_img">
                <div className="productDetail__info_img-big">
                  <img src={selectedImage} alt="" />
                </div>
                <div className="productDetail__info_img-small">
                {Object.entries(product.image_urls).map(([key, value], index) => (
                      value ?
                          (<img
                              key={key} // Thêm key để React xác định các phần tử riêng biệt
                              className={`selectable-image ${selectedThumbnail === index ? 'selected' : ''}`}
                              src={value}
                              alt=""
                              onClick={() => handleImageClick(value, index)}
                          />) : null
                  ))}
                </div>
              </div>

              {/* Thông tin sản phẩm */}

              <div className="productDetail__info_text" >

                <p className="productDetail__info_text-name title--1">{product.title}</p>
                <div className="productDetail__rating-star">

                </div>
                <Rating
                  style={{ color: '#E21033' }}
                  name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />

                <p className="productDetail__info_text-price title--1">{formatPrice(product.price)}</p>

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
                    {!currentUser && (
                      <Link to="/paymentpageguest"><Button type="btn1 primary" onClick={() => props.addProductNow(product, quantity)}>Mua ngay</Button></Link>
                    )}

                    {currentUser && (
                      <Link to="/paymentpageauth"><Button type="btn1 primary" onClick={() => props.addProductNow(product, quantity)}>Mua ngay</Button></Link>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sản phẩm nổi bật */}
            <div className="productDetail__highlight">
              <p className="productDetail__highlight_title heading">Sản phẩm nổi bật</p>
              <div className="productDetail__highlight_card">
                {highlightProduct?.map((highlightProduct, index) => (
                  <div key={index}>
                    <Card product={highlightProduct} addProduct={props.addProduct}></Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="productDetail__review">
              {product ? (<TabReview rating = {product.rating}  />) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

