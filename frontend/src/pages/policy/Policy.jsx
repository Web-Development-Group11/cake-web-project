import React from 'react'
import Navbar from '../../components/header/NavBar'
import styles from './Policy.module.css';
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

export default function Policy() {
  return (
    <>
      <Navbar />
      <div className={styles.center}>
        <div className={styles.page}>
          <div className={styles.navigation}>
            <Link className={styles.navigation__item} to={'/'}>Trang chủ</Link>
            <p className={styles.navigation__item}>|</p>
            <Link className={styles.navigation__item} to={'/support'}>Hỗ trợ khách hàng</Link>
          </div>
          <div className={styles.center}>
            <div className={styles.content}>
              <h2 className={`${styles.content__header} heading`}>Chính sách giao hàng</h2>
              <h3 className={`${styles.content__subhead} title--3`}>
                1. Chính sách giao hàng Bông Cake
              </h3>
              <p className={`${styles.content__paragraph} body--1`}>
                Giao hàng nhanh và đúng hẹn cho 95% đơn hàng là mục tiêu mà đội ngũ vận hành của Bông Cake đang hướng tới. Các đơn hàng khi phát sinh trên Website sẽ được xử lý ngay trong ngày sau khi có sự xác nhận của khách hàng.
              </p>
              <p className={`${styles.content__paragraph} body--1`}>
                Hiện tại Bông Cake đang là đối tác với các đơn vị giao hàng nổi tiếng có uy tín như J&T Express và Ahamove.
              </p>
              <h3 className={`${styles.content__subhead} title--3`}>
                2. Bông Cake có 1 cửa hàng vận hành
              </h3>
              <p className={`${styles.content__paragraph} body--1`}>
                <strong>Địa chỉ: </strong>Số 669 Quốc lộ 1, Khu phố 3, Phường Linh Xuân, Thủ Đức, TP. Hồ Chí Minh
              </p>
              <p className={`${styles.content__paragraph} body--1`}>
                Các đơn hàng phát sinh trong nội thành TPHCM sẽ được gửi từ cửa hàng các đơn vị vận chuyển Ninja Van, J&T Express.
              </p>
              <p className={`${styles.content__paragraph} body--1`}>
                Các đơn hàng phát sinh ở những khu vực còn lại sẽ được gửi bằng đơn vị vận chuyển Ninja Van, J&T Express.
              </p>
              <h3 className={`${styles.content__subhead} title--3`}>
                3. Cước phí vận chuyển tiêu chuẩn
              </h3>
              <p className={`${styles.content__paragraph} body--1`}>
                <strong>A. Đối với khách hàng lẻ</strong>
              </p>
              <p className={`${styles.content__paragraph} body--1`}>
                Phí giao hàng tùy thuộc vào địa điểm của bạn.
              </p>
              <p className={`${styles.content__paragraph} body--1`}>
                <strong>B. Đối với khách hàng mua sỉ</strong>
              </p>
              <p className={`${styles.content__paragraph} body--1`}>
                Bạn vui lòng nhấn vào nút Messenger để chat và cung cấp địa chỉ giao hàng với hỗ trợ viên. Bông Cake sẽ báo lại chi phí vận chuyển, thời gian ước tính nhận hàng cho quý đối tác.
              </p>
              <p className={`${styles.content__paragraph} body--1`}>
                <strong>Lưu ý: </strong>trong trường hợp khách hàng có yêu cầu nào khác về thời gian giao hàng, những ghi chú thêm… bạn vui lòng liên hệ với kênh Fanpage Bông Cake và cung cấp SĐT đặt hàng để được hỗ trợ.
              </p>
              <h3 className={`${styles.content__subhead} title--3`}>
                4. Thời gian vận chuyển trung bình
              </h3>
              <p className={`${styles.content__paragraph} body--1`}>
                <strong>Đơn nội thành Hồ Chí Minh: </strong>Khách hàng sẽ nhận được trong ngày hoặc 1-3 ngày tùy theo địa điểm nhận hàng.
              </p>
              <p className={`${styles.content__paragraph} body--1`}>
                <strong>Các khu vực khác: </strong>1-4 ngày (miền Nam: 1-2 ngày, miền Trung: 2-4 ngày, miền Bắc: 3-5 ngày), nếu sau 4 ngày kể từ khi đặt hàng mà Anh, Chị chưa nhận được cuộc gọi giao hàng của bưu tá thì vui lòng xin liên hệ kênh Fanpage Bông Cake và cung cấp SĐT đặt hàng để được hỗ trợ.
              </p>
              <p className={`${styles.content__paragraph} body--1`}>
                <strong>Lưu ý: </strong>Trong trường hợp khách hàng cần nhận hàng gấp thì có thể liên hệ kênh Fanpage Bông Cake để được hỗ trợ hoặc chọn dịch vụ giao hàng nhanh (2h) trong nội thành Hồ Chí Mình và giao hỏa tốc với các khu vực khác. Bông Cake không cam kết có thể hỗ trợ các trường hợp khẩn cấp 100%, tuy nhiên Bông Cake chắc chắn sẽ làm mọi cách có thể để giúp khách hàng giải quyết công việc của mình.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
