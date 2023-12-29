import React, {useState} from 'react'
import styles from './CustomCupcake.module.css'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import cuscupimg from '../../assets/cuscupcake/cuscup.png'
import BoxQuantityComponent from '../../components/boxquantity/BoxQuantity';
import Button from '../../components/button/Button';
import TabCus from './tab/tabCus';
import { Link } from 'react-router-dom';

const CustomCupcake = (props) => {

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState();
  const onQuantityChange = (e) => {
    setQuantity(parseInt(e));
  }
  return (
    <div>
        <div className={styles.content}>
            <div className={styles.navigation}>
             <Breadcrumb />
            </div>

            <div className={styles.cuscup}>
                <div className={styles.yourcup}>
                    <div className={styles.yourcup__title} >
                        <div className="heading" >Cupcake của riêng bạn</div>
                        <hr size='1' style={{color:'var(--brown)', width:'100%'}}/>
                    </div>
                    <div className={styles.yourcup__img}>
                        <img src={cuscupimg} />
                    </div>
                    <div className={styles.quantity}>
                        <div className="title--3">Số lượng:</div>
                        <BoxQuantityComponent height="2.5rem" quantity={quantity} onQuantityChange={onQuantityChange} />
                    </div>
                    <div className={styles.order__btn}>
                        <Button className={styles.addToCart_button} type="btn1 secondary--1" onClick={() => props.addProduct(product, quantity)} >Thêm vào giỏ hàng</Button>
                        
                        <Link to="/payment"><Button className={styles.buyNow_button} type="btn1 primary" onClick={() => props.addProductNow(product, quantity)}>Mua ngay</Button></Link>
                    </div>

                </div>

                <div className={styles.yourcup}>
                    <div className={styles.cup__title} >
                        <div className="body--1" style={{height:'40px'}}>Tổng cộng: <span className='title--3'>100,000đ</span></div>
                        <hr size='1' style={{color:'var(--brown)', width:'100%'}}/>
                    </div>
                    <TabCus></TabCus>

                </div>
            </div>

        </div>
    </div>
  )
}

export default CustomCupcake