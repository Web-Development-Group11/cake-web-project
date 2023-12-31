import React, { useEffect } from 'react';
import styles from './PageNotFound.module.css'; 
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';

const PageNotFound = (props) => {
    useEffect(() => {
        props.setShowNavbar(false);
    }, []);

    return (
        <div className={styles.content}>
            <div className={styles.background}></div>
            <div className={styles.top}>
                <h1>404</h1>
                <h3>page not found</h3>
            </div>
            <div className={styles.container}>
                <div className={styles['ghost-copy']}>
                    <div className={styles.one}></div>
                    <div className={styles.two}></div>
                    <div className={styles.three}></div>
                    <div className={styles.four}></div>
                </div>
                <div className={styles.ghost}>
                    <div className={styles.face}>
                        <div className={styles.eye}></div>
                        <div className={styles['eye-right']}></div>
                        <div className={styles.mouth}></div>
                    </div>
                </div>
                <div className={styles.shadow}></div>
            </div>
            <div className={styles.bottom}>
                <p>Boo, looks like a ghost stole this page!</p>
                <Link className={styles.buttons} to ='/'>
                    <Button type='btn2 primary' className={styles.btn}>Go to Home</Button>
                </Link>
            </div>
        </div>
    )
}

export default PageNotFound;
