import React, { useEffect } from 'react';
import styles from './PageNotFound.module.css';

const PageNotFound = (props) => {
    useEffect(() => {
        props.setShowNavbar(false);
    }, []);

    return (
        <div className={styles.content}>
            <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/88fd8a9bc9c556dbb3d4d299/12.png" alt=''/>
            <h1 className={styles.errorText}>PAGE NOT FOUND.</h1>
            <p className={styles.text}>Please check that the Web site address is spelled correctly.Or,</p>
            <div className={styles.btn1}>
                <a className={styles.error} href="/">Về trang chủ</a>
            </div>
        </div>
    )
}
export default PageNotFound