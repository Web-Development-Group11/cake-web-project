import React from 'react'
import banner from './Banner.module.css'
import bgBanner from '/src/assets/image/bgBanner.png';
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom';

const Banner = () => {
  const bannerBackground = {
    backgroundImage: `url(${bgBanner})`,
  };

  return (
    <div className={banner.container} style={bannerBackground}>
      <img src='/src/assets/image/imgBanner.png' alt="cake image" className={banner.cake__img}/>
      <div className={banner.content}>
          <div className={`${banner.title} ${banner.item} heading`}>Bông cake - Thiên đường bánh ngọt dành cho riêng bạn</div>
          <div className={`${banner.mainText} ${banner.item} body--2`}>Bông Cake cam kết mang đến cho bạn những chiếc bánh ngọt ngon miệng và đẹp mắt, với giá cả hợp lý và dịch vụ giao hàng nhanh chóng. Hãy đến với website bán bánh ngọt Bông Cake để trải nghiệm sự khác biệt!</div>
          <Link to = "/product">
            <Button type="btn1 primary">Mua ngay</Button>
          </Link>
      </div>
    </div>
  )
}

export default Banner
