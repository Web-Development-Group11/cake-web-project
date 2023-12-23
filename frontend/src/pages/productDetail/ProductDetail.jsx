import React, { useState } from 'react';
import Navbar from '../../components/header/NavBar'
import './ProductDetail.css';
import '../../Variable.css';
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';
// import TextField from '../../components/textField/TextField';
import BoxQuantityComponent from '../../components/boxquantity/BoxQuantity';
import Footer from '../../components/footer/Footer';
import TabReview from './tab/TabReview';

import Rating from '@mui/material/Rating';



// Import các icon
// import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

export default function ProductDetail() {
  // Hinh anh hiển thị
  const [selectedImage, setSelectedImage] = useState('https://cupcakecentral.com.au/cdn/shop/products/CLASSIC-INDIVIDUAL-CUT-CC-RV.jpg?v=1681779929');
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  const handleImageClick = (newImage, index) => {
    setSelectedImage(newImage);
    setSelectedThumbnail(index);
  };

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

  return (
    <>
      <Navbar />

      <div className='productDetail__screen'>
        <div className='productDetail__page'>
          <div className='navigation'>

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
                    src="https://cupcakecentral.com.au/cdn/shop/products/CLASSIC-INDIVIDUAL-CUT-CC-RV.jpg?v=1681779929"
                    alt=""
                    onClick={() => handleImageClick('https://cupcakecentral.com.au/cdn/shop/products/CLASSIC-INDIVIDUAL-CUT-CC-RV.jpg?v=1681779929', 0)}
                  />
                  <img
                    className={`selectable-image ${selectedThumbnail === 1 ? 'selected' : ''}`}
                    src="https://cupcakecentral.com.au/cdn/shop/products/CLASSIC-STYLED-CC-RV-2.jpg?v=1681783033"
                    alt=""
                    onClick={() => handleImageClick('https://cupcakecentral.com.au/cdn/shop/products/CLASSIC-STYLED-CC-RV-2.jpg?v=1681783033', 1)}
                  />
                  <img
                    className={`selectable-image ${selectedThumbnail === 2 ? 'selected' : ''}`}
                    src="https://cupcakecentral.com.au/cdn/shop/products/CLASSIC-STYLED-CC-RV.jpg?v=1681783033"
                    alt=""
                    onClick={() => handleImageClick('https://cupcakecentral.com.au/cdn/shop/products/CLASSIC-STYLED-CC-RV.jpg?v=1681783033', 2)}
                  />
                  <img
                    className={`selectable-image ${selectedThumbnail === 3 ? 'selected' : ''}`}
                    src="https://cupcakecentral.com.au/cdn/shop/products/CLASSIC-STYLED-CC-RV-3.jpg?v=1681783027"
                    alt=""
                    onClick={() => handleImageClick('https://cupcakecentral.com.au/cdn/shop/products/CLASSIC-STYLED-CC-RV-3.jpg?v=1681783027', 3)}
                  />
                </div>
              </div>

              {/* Thông tin sản phẩm */}
              <div className="productDetail__info_text">

                <p className="productDetail__info_text-name title--1">Tên sản phẩm</p>
                <div className="productDetail__rating-star">

                </div>
                <Rating
                  style={{ color: '#E21033' }}
                  name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />

                <p className="productDetail__info_text-price title--1">45.000</p>

                <div className="productDetail__info_text-description body--2">
                  Mô tả sản phẩm ngắn gọn Mô tả sản phẩm ngắn gọn Mô tả sản phẩm ngắn gọn Mô tả sản phẩm ngắn gọn Mô tả sản phẩm ngắn gọn Mô tả sản phẩm ngắn gọn Mô tả sản phẩm ngắn gọn Mô tả sản phẩm ngắn gọn
                </div>
                <div className="productDetail__info_text-quantity body--2">
                  <span className='title--3'>Số lượng</span>
                  <BoxQuantityComponent height="2.5rem" onQuantityChange={() => {}}/>
                </div>

                <div className="productDetail__info_text-button">
                  <div className="addToCart_button">
                    <Button type="btn1 secondary--1">Thêm vào giỏ hàng</Button>
                  </div>
                  <div className="buyNow_button">
                    <Link to="/payment"><Button type="btn1 primary">Mua ngay</Button></Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sản phẩm nổi bật */}
            <div className="productDetail__outstanding">
              <p className="productDetail__outstanding_title heading">Sản phẩm nổi bật</p>
              <div className="productDetail__outstanding_card">
              <Card product={sampleProduct} />
              <Card product={sampleProduct} />
              <Card product={sampleProduct} />
              <Card product={sampleProduct} />

              </div>
            </div>

            <div className="productDetail__review">
              <TabReview />
            </div>

          </div>

        </div>

      </div>


      <Footer />
    </>
  )
}

