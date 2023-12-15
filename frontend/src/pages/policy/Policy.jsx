import React from 'react'
import Navbar from '../../components/header/NavBar'
import './policy.css'
import { Link } from 'react-router-dom'

export default function Policy() {
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
                1. Chính sách giao hàng Bông Cake
              </h3>
              <p className='content__paragraph'>
                Số 669 Quốc lộ 1, Khu phố 3, Phường Linh Xuân, Thủ Đức, TP. Hồ Chí Minh
              </p>
              <p className='content__paragraph'>
                Số 669 Quốc lộ 1, Khu phố 3, Phường Linh Xuân, Thủ Đức, TP. Hồ Chí Minh
              </p>
              <p className='content__paragraph'>
                Số 669 Quốc lộ 1, Khu phố 3, Phường Linh Xuân, Thủ Đức, TP. Hồ Chí Minh
              </p>
              <h3 className='content__sub-heading'>
                2. Liên hệ
              </h3>
              <p className='content__paragraph'>
                Số 669 Quốc lộ 1, Khu phố 3, Phường Linh Xuân, Thủ Đức, TP. Hồ Chí Minh
              </p>
              <p className='content__paragraph'>
                Số 669 Quốc lộ 1, Khu phố 3, Phường Linh Xuân, Thủ Đức, TP. Hồ Chí Minh
              </p>
              <p className='content__paragraph'>
                <strong>Số 669 Quốc lộ 1</strong>, Khu phố 3, Phường Linh Xuân, Thủ Đức, TP. Hồ Chí Minh
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
