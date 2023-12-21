import React, { useState } from 'react'
import Navbar from '../../components/header/NavBar'
import styles from './Support.module.css';
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'
import Footer from '../../components/footer/Footer'
import ContactForm from '../../components/contactForm/ContactForm'

const Support = () => {
  const [textArea, setTextArea] = useState('');
  return (
    <>
      <Navbar />
      <div className={styles.center}>
        <div className= {styles.page}>
          <div className={styles.navigation}>
            <Link className={styles.navigation__item} to={'/'}>Trang chủ</Link>
            <p className={styles.navigation__item}>|</p>
            <Link className={styles.navigation__item} to={'/support'}>Hỗ trợ khách hàng</Link>
          </div>
          <div className={styles.center}>
            <div className={styles.content}>
              <h2 className={`${styles.content__header} heading`}>Địa chỉ và liên hệ với Bông Cake</h2>
              <h3 className={`${styles.content__subhead} title--3`}>
                1. Địa chỉ cửa hàng
              </h3>
              <p className={`${styles.content__paragraph} body--1`}>
                Số 669 Quốc lộ 1, Khu phố 3, Phường Linh Xuân, Thủ Đức, TP. Hồ Chí Minh
              </p>
              <div className={`${styles.content__map} ${styles.center}`}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.241478143737!2d106.7753786758543!3d10.869229257473433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175277c352111c3%3A0xed116dcd593369f6!2zxJDhuqFpIEjhu41jIEtpbmggVOG6vyAtTHXhuq10IMSQ4bqhaSBI4buNYyBLaW5oIFThur8gLUx14bqtdCAtIFF14buRYyBM4buZIDEgLSBQaMaw4budbmcgTGluaCBYdcOibg!5e0!3m2!1svi!2s!4v1702562664391!5m2!1svi!2s" width="600" height="600" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <h3 className={`${styles.content__subhead} title--3`}>
                2. Liên hệ
              </h3>
              <div className={styles.content__contact}>
                <h3 className={`${styles.content__contactHeading} title--1`}>
                  Gửi thắc mắc cho chúng tôi
                </h3>
                <p className={`${styles.content__contactDescription} body--1`}>
                  Bạn hãy điền nội dung tin nhắn vào form bên dưới và gửi cho chúng tôi. Chúng tôi sẽ trả lời bạn sau khi nhận được.
                </p>
                <ContactForm />
                <div className={styles.mt_13}>
                  <p className={`${styles.content__paragraph} body--1`}>
                    Ngoài ra, bạn có thể liên hệ với Bông Cake bằng các cách sau đây:
                  </p>
                  <ul className={`${styles.content__contactList} body--1`}>
                    <li className={styles.content__contactListItem}>
                      Liên hệ hỗ trợ qua Fanpage Bông Cake
                    </li>
                    <li className={styles.content__contactlistItem}>
                      Gọi trực tiếp: 000 000 0000
                    </li>
                    <li className={styles.content__contactListItem}>
                      Liên hệ qua Email: <a href="mailto:email@gmail.com">email@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Support