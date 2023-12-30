import React, { useState, useEffect } from 'react'
import styles from './HighlightedProduct.module.css'
import { axiosClient } from '../../api/axios';
import Loader from '../../components/loader/Loader';
import Card from '../../components/card/Card'

const HighlightedProduct = (props) => {

    // Loader state
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState();

    useEffect(() => {
        const amount = 8;
        const getProduct = async () => {
            try {
                const response = await axiosClient.post('/highlight', { amount });
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
    }, []);

    return isLoading ? (
        <Loader></Loader>
    ) : (
        <div className={styles.product}>
            <div className={`${styles.product__title} heading`}>Sản phẩm nổi bật</div>
            <div className={styles.product__container}>
                {product?.map((product, index) => (
                    <div className={styles.product__item} key={index}>
                        <Card product={product} addProduct={props.addProduct} ></Card>
                    </div>
                ))}
            </div>
            <Link className={styles.product__btn} to='/product'>
                <Button type="btn1 primary">Xem thêm</Button>
            </Link>
        </div>
    )
}

export default HighlightedProduct