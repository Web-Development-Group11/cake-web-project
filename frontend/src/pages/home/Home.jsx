import React, { useEffect, useState } from 'react';
import Button from '../../components/button/Button';
import Navbar from '../../components/header/NavBar'
import Banner from '../../components/banner/Banner'
import Category from '../../components/category/Category'
import Card from '../../components/card/Card'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import home from './Home.module.css'
import { useModal } from '../../hook/useModal';
import { axiosClient } from '../../api/axios';
import Loader from '../../components/loader/Loader';
import { useCurrentUser } from '../../hook/useCurrentUser';

const Home = (props) => {
  // Loader state
  const [isLoading, setIsLoading] = useState(true);

  const onOpen = useModal((state) => state.onOpen);
  const setData = useModal((state) => state.setData);
  const [product, setProduct] = useState();

  const { data: currentUser } = useCurrentUser();
  

  useEffect(() => {
    const amount = 8;
    const getProduct = async () => {
      try { 
        const response = await axiosClient.post('/highlight',{amount});
        console.log(response);
        setTimeout(() => {
          setIsLoading(false);
        })
        setProduct(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  },[]);

  const handleOpenRandomBox = async () => {
    if (!currentUser) {
      alert('Bạn cần đăng nhập để mở random box');
      return;
    }

    onOpen('randomBox');

    try {
      const response = await axiosClient.get('/products/random');

      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  
useEffect(() => {
  props.setShowNavbar(true);
}
, []);

  return isLoading ? (
    <Loader></Loader>
  ) : (
    <div>
  
      <div className={home.banner}>
        <Banner></Banner>
      </div>
    
      <div className={home.content}>

        <div className={home.category__container}>
          <Link className={home.category__item} to = './cupcake'>
            <Category img="/src/assets/category/cupcake.png" title="Cupcake"  description="Món ăn nhẹ ngọt ngào và đáng yêu"></Category>
          </Link>

          <Link className={home.category__item} to = './brownie'>
            <Category img="/src/assets/category/brownie.png" title="Brownie"  description="Món bánh ngọt sang trọng và béo ngậy"></Category>
          </Link>

          <Link className={home.category__item} to = './cookie'>
            <Category img="/src/assets/category/cookie.png" title="Cookie"  description="Những chiếc bánh giòn tan và đậm đà"></Category>
          </Link>

          <Link className={home.category__item} to = './combo'>
            <Category img="/src/assets/category/combo.png" title="Combo"  description="Sự kết hợp đa dạng và hoàn hảo"></Category>
          </Link>

        </div>

        <div className={home.product}>
          <div className={`${home.product__title} heading`}>Sản phẩm nổi bật</div>
          <div className={home.product__container}>
          {product?.map((product, index) => (
            <div className={home.product__item} key={index}>
              <Card product={product} ></Card>
            </div>
          ))}
          </div>
          <Link className={home.product__btn} to = '/product'>
            <Button type="btn1 primary">Xem thêm</Button>
          </Link>
        </div>

        <div className={home.cuscup__container}>
          <div className={home.cuscup__image}>
            <img src="/src/assets/image/customcupcake.png" alt="Custom Cupcake" />
          </div> 
          <div className={home.cuscup__content}>
            <div className={`${home.cuscup__title} heading`}>Custom Cupcake</div>
            <div className={`${home.cuscup_mainText} body--2`}>Bạn có muốn một chiếc bánh cupcake độc đáo và riêng biệt cho mình? Bạn muốn tạo ra những chiếc bánh cupcake đáng yêu và ấn tượng cho những người thân yêu của mình? Hãy đến với Bông cake, nơi bạn có thể custom cupcake theo ý thích của bạn!</div>
            <Link to = './cuscupcake'>
              <Button type="btn1 primary">Xem ngay</Button>
            </Link>
          </div>
        </div>

        <div className={home.randombox__container}>
          <div className={home.randombox__image}> 
            <img src="/src/assets/image/randombox.png" alt="Random Box" />
          </div>
          <div className={home.randombox__content}>
            <div className={`${home.randombox__title} heading`}>Random Box</div>
            <div className={`${home.randombox_mainText} body--2`}>Bạn có đang phân vân không biết lựa chọn phẩm nào? Random box sẽ đề xuất cho bạn những sản phẩm ngẫu nhiên, mang đến những trải nghiệm mới lạ và thú vị. Thử ngay để tận hưởng sự bất ngờ!</div>
            <div onClick={handleOpenRandomBox}>
              <Button type="btn1 primary">Xem ngay</Button>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Home