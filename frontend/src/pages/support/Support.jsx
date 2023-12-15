import React, { useState } from 'react'
import Navbar from '../../components/header/NavBar'
import './support.css'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'

const Support = () => {
  const [textArea, setTextArea] = useState('');
  return (
    <>
      <Navbar />
      <div className="center">
        <div className="page">
          <div className="navigation">
            <Link className='navigation__item' to={'/'}>Trang chủ</Link>
            <p>|</p>
            <Link className='navigation__item' to={'/support'}>Hỗ trợ khách hàng</Link>
          </div>
          <div className="center">
            <div className="content">
              <h2 className='content__header heading'>Địa chỉ và liên hệ với Bông Cake</h2>
              <h3 className='content__sub-heading'>
                1. Địa chỉ cửa hàng
              </h3>
              <p className='content__paragraph'>
                Số 669 Quốc lộ 1, Khu phố 3, Phường Linh Xuân, Thủ Đức, TP. Hồ Chí Minh
              </p>
              <div className="content__map center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.241478143737!2d106.7753786758543!3d10.869229257473433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175277c352111c3%3A0xed116dcd593369f6!2zxJDhuqFpIEjhu41jIEtpbmggVOG6vyAtTHXhuq10IMSQ4bqhaSBI4buNYyBLaW5oIFThur8gLUx14bqtdCAtIFF14buRYyBM4buZIDEgLSBQaMaw4budbmcgTGluaCBYdcOibg!5e0!3m2!1svi!2s!4v1702562664391!5m2!1svi!2s" width="600" height="600" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <h3 className='content__sub-heading'>
                2. Liên hệ
              </h3>
              <div className="content__contact">
                <h3 className='content__contact-heading title--1'>
                  Gửi thắc mắc cho chúng tôi
                </h3>
                <p className='content__contact-description title--4'>
                  Bạn hãy điền nội dung tin nhắn vào form bên dưới và gửi cho chúng tôi. Chúng tôi sẽ trả lời bạn sau khi nhận được.
                </p>
                <div className="content__contact-inputs">
                  <input placeholder='Họ Và Tên' type="text" className='content__contact-input' />
                  <input placeholder='Email' type="email" className='content__contact-input' />
                </div>
                <div className="center">
                  <textarea rows={5} placeholder='Nội dung' className='content__contact-textarea' value={textArea} onChange={(e) => setTextArea(e.target.value)} />
                </div>
                <div className="center content__contact-button">
                  <Button type='btn1 primary'>
                    Gửi cho chúng tôi
                  </Button>
                </div>
                <div className="mt-13">
                  <p className='content__contact-paragraph'>
                    Ngoài ra, bạn có thể liên hệ với Bông Cake bằng các cách sau đây:
                  </p>
                  <ul className='content__contact-list'>
                    <li className='content__contact-list-item'>
                      Liên hệ hỗ trợ qua Fanpage Bông Cake
                    </li>
                    <li className='content__contact-list-item'>
                      Gọi trực tiếp: 000 000 0000
                    </li>
                    <li className='content__contact-list-item'>
                      Liên hệ qua Email: <a href="mailto:email@gmail.com">email@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Support