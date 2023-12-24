import React from 'react'
import Navbar from '../../components/header/NavBar'
import styles from './faq.module.css';
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import { FaSearch } from 'react-icons/fa';
export default function Faq() {
    return (
        <>
            <div className={styles.center}>
                <div className={styles.page}>
                    <div className={styles.navigation}>
                        <Link className={styles.navigation__item} to={'/'}>Trang chủ</Link>
                        <p className={styles.navigation__item}>|</p>
                        <Link className={styles.navigation__item} to={'/support'}>Hỗ trợ khách hàng</Link>
                    </div>
                    <div className={styles.center}>
                        <div className={styles.content}>
                            <h2 className={`${styles.content__header} heading`}>Câu hỏi thường gặp (FAQ)</h2>
                            <div className={styles.faq__searchBar}>
                                <input
                                    className={styles.faq__searchInput}
                                    type="text"
                                    placeholder="Tìm kiếm"
                                />
                                <div className={styles.faq__searchButton}>
                                    <FaSearch className={styles.faq__searchIcon} />
                                </div>
                            </div>
                            <h3 className={`${styles.content__subhead} title--3`}>
                                1. Đặt hàng và thanh toán
                            </h3>
                            <p className={`${styles.content__paragraph} body--1`}>
                                <span className={`${styles.question}`}>Q: Làm thế nào để đặt hàng trên trang web của bạn?</span> <br />
                                A: Đơn đặt hàng có thể được thực hiện thông qua trang web của chúng tôi. Bạn chỉ cần thêm sản phẩm vào giỏ hàng và làm theo bước thanh toán.
                            </p>
                            <p className={`${styles.content__paragraph} body--1`}>
                                <span className={`${styles.question}`}>Q: Tôi có thể thay đổi hoặc hủy đơn hàng không?</span> <br />
                                A: Để thay đổi hoặc hủy đơn hàng, vui lòng liên hệ với chúng tôi trong thời gian ngắn sau khi đặt hàng.
                            </p>
                            <p className={`${styles.content__paragraph} body--1`}>
                                <span className={`${styles.question}`}>Q: Phương thức thanh toán nào bạn chấp nhận?</span> <br />
                                A: Chúng tôi chấp nhận thanh toán qua các phương thức như thẻ tín dụng, thẻ ghi nợ, và chuyển khoản ngân hàng.
                            </p>
                            <h3 className={`${styles.content__subhead} title--3`}>
                                2. Giao Hàng và Vận Chuyển
                            </h3>
                            <p className={`${styles.content__paragraph} body--1`}>
                                <span className={`${styles.question}`}>Q: Bạn giao hàng đến đâu?</span> <br />
                                A: Chúng tôi cung cấp dịch vụ giao hàng toàn quốc. Bạn có thể kiểm tra tính khả dụng dịch vụ giao hàng tại trang thanh toán.
                            </p>
                            <p className={`${styles.content__paragraph} body--1`}>
                                <span className={`${styles.question}`}>Q: Bạn sử dụng những dịch vụ vận chuyển nào?</span> <br />
                                A: Chúng tôi hợp tác với các đối tác vận chuyển uy tín như J&T Express và Ahamove để đảm bảo việc giao hàng nhanh chóng và an toàn.
                            </p>
                            <p className={`${styles.content__paragraph} body--1`}>
                                <span className={`${styles.question}`}>Q: Bao lâu tôi sẽ nhận được đơn hàng của mình?</span> <br />
                                A: Thời gian giao hàng phụ thuộc vào địa điểm của bạn. Thông thường, bạn sẽ nhận được đơn hàng trong vòng 1-3 ngày làm việc.
                            </p>
                            <p className={`${styles.content__paragraph} body--1`}>
                                <span className={`${styles.question}`}>Q: Phí vận chuyển như thế nào được tính toán?</span> <br />
                                A: Phí vận chuyển được tính toán dựa trên địa chỉ giao hàng của bạn và trọng lượng của đơn hàng. Bạn có thể xem phí cụ thể trong quá trình thanh toán.
                            </p>
                            <h3 className={`${styles.content__subhead} title--3`}>
                                3. Chất Lượng và Thành Phần
                            </h3>
                            <p className={`${styles.content__paragraph} body--1`}>
                                <span className={`${styles.question}`}>Q: Bạn sử dụng nguyên liệu gì để làm bánh?</span> <br />
                                A: Chúng tôi sử dụng nguyên liệu chất lượng cao và tự nhiên để tạo ra các sản phẩm chất lượng nhất cho khách hàng.
                            </p>
                            <p className={`${styles.content__paragraph} body--1`}>
                                <span className={`${styles.question}`}>Q: Làm thế nào để biết về nguồn gốc và chất lượng của sản phẩm?</span> <br />
                                A: Chúng tôi cung cấp thông tin chi tiết về nguồn gốc và chất lượng của sản phẩm trên trang web của chúng tôi. Bạn cũng có thể liên hệ trực tiếp để được hỗ trợ.
                            </p>
                            <p className={`${styles.content__paragraph} body--1`}>
                                <span className={`${styles.question}`}>Q: Có các lựa chọn bánh không có đường hoặc không gluten không?</span> <br />
                                A: Chúng tôi cung cấp các lựa chọn bánh không đường và không gluten. Xin vui lòng kiểm tra danh sách sản phẩm hoặc liên hệ với chúng tôi để biết thêm chi tiết.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
