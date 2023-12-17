import React from 'react'
import styles from './BlogDetail.module.css'
import { Link } from 'react-router-dom'
import Navbar from '../../components/header/NavBar'
import Footer from '../../components/footer/Footer'
import BlogSuggest from '../../assets/image/suggest_post.png'
import BlogPost from '../../assets/image/post.png'
import '../../custom.css'
import Card from '../../components/card/Card'
import ContactForm from '../../components/contactForm/ContactForm'
import Button from '../../components/button/Button'

const BlogDetail = () => {
	return (
    <>
      <Navbar />
      <div className={styles.center}>
        <div className={styles.page}>
          <div className={styles.navigation}>
            <Link className={styles.navigation__item} to={'/'}>Trang chủ</Link>
            <p className={styles.navigation__item}>|</p>
            <Link className={styles.navigation__item} to={'/blog'}>Blog</Link>
          </div>
          <div className={styles.blog}>
            <div>
              <div className={styles.blog__suggest}>
                <h2 className={`${styles['blog__suggest-header']} title--2`}>Bài viết nổi bật</h2>
                <ul className={styles['blog__suggest-list']}>
                  <li className={styles['blog__suggest-post']}>
                    <Link to='/blog/1' className={styles['blog__suggest-link']}>
                      <img className={styles['blog__suggest-img']} src={BlogSuggest} alt="" />
                      <h3 className={styles['blog__suggest-title']}>Hướng dẫn chọn bánh cupcake ngon cho bữa...</h3>
                    </Link>
                  </li>
                  <li className={styles['blog__suggest-post']}>
                    <Link to='/blog/1' className={styles['blog__suggest-link']}>
                      <img className={styles['blog__suggest-img']} src={BlogSuggest} alt="" />
                      <h3 className={styles['blog__suggest-title']}>Hướng dẫn chọn bánh cupcake ngon cho bữa...</h3>
                    </Link>
                  </li>
                  <li className={styles['blog__suggest-post']}>
                    <Link to='/blog/1' className={styles['blog__suggest-link']}>
                      <img className={styles['blog__suggest-img']} src={BlogSuggest} alt="" />
                      <h3 className={styles['blog__suggest-title']}>Hướng dẫn chọn bánh cupcake ngon cho bữa...</h3>
                    </Link>
                  </li>
                  <li className={styles['blog__suggest-post']}>
                    <Link to='/blog/1' className={styles['blog__suggest-link']}>
                      <img className={styles['blog__suggest-img']} src={BlogSuggest} alt="" />
                      <h3 className={styles['blog__suggest-title']}>Hướng dẫn chọn bánh cupcake ngon cho bữa...</h3>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.blog__post}>
              <h1 className={styles['blog__post-title']}>Bánh cupcake - sự lựa chọn tuyệt vời cho những bữa tiệc đông người</h1>
              <p className={styles['blog__post-date']}>Ngày đăng: 02/11/2023</p>
              <p className={styles['blog__post-p']}>Bài viết này, Bông sẽ gợi ý cho bạn các tiệm bánh ngọt ngon nhất Sài Gòn mà Bông đã tham khảo và chọn lọc. Hi vọng rằng bài viết này sẽ mang đến cho bạn những trải nghiệm tốt và tìm cho mình một địa điểm bánh ngọt phù hợp với khẩu vị với mình. Mời bạn cùng tham khảo với Bông nhé!</p>
              <div className="center">
                <img src={BlogPost} alt="blog-post" className={styles['blog__post-img']} />
                <p className={styles['blog__post-img-desc']}>Hình ảnh minh họa</p>
              </div>
              <h3 className={styles['blog__post-h3']}>Tous Les Jours</h3>
              <p className={styles['blog__post-p']}>Địa chỉ: 180 Hai Bà Trưng, Đa Kao, Quận 1, Thành phố Hồ Chí Minh</p>
              <p className={styles['blog__post-p']}>Là tín đồ yêu thích bánh ngọt thì không thể không biết đến TOUS les JOURS đúng không nào? Với nhiều chi nhánh trải dài khắp các quận huyện, TOUS les JOURS được biết đến nhiều bởi không gian sang trọng cùng với sự bày trí các loại bánh gọn gàng, quán có hai tầng để bạn có thể thưởng thức bánh tại quán. Với chi nhánh trên đường Hai Bà Trưng thu hút rất nhiều bạn trẻ, vị trí thuận lợi cũng là một lợi thế cho tiệm để hấp dẫn người dùng hơn.</p>
              <div className="center">
                <img src={BlogPost} alt="blog-post" className={styles['blog__post-img']} />
                <p className={styles['blog__post-img-desc']}>Hình ảnh minh họa</p>
              </div>
              <p className={styles['blog__post-p']}>Bước chân vào quán bạn cảm nhận được hương thơm bao trùm cả không gian với vị ngọt ngào khó thể diễn tả. Nhiều loại bánh thơm ngon và hấp dẫn mang đến cho bạn nhiều sự lựa chọn. Bên cạnh đó, quán còn phục vụ thêm các loại thức uống mang màu sắc và hương vị rất đặc trưng. Các loại bánh ngọt được yêu thích như là bánh sừng trâu, bánh mì đường, bánh su kem, tiramisu…</p>
              <ul className={styles['blog__post-ul']}>
                <li className={styles['blog__post-li']}>Điện thoại: 028 6675 3856</li>
                <li className={styles['blog__post-li']}>Thời gian mở cửa: 06h00 – 21h00</li>
                <li className={styles['blog__post-li']}>Giá thành: 15.000 – 35.000đ</li>
              </ul>
              <p className={styles['blog__post-p']}>Hi vọng với những gợi ý về Tiệm Bánh Ngọt Ngon Nhất Sài Gòn mà Bông giới thiệu, các bạn sẽ tìm cho mình các tiệm bánh ngon nhất phù hợp với khẩu vị các bạn. Chúc các bạn có những trải nghiệm thật tốt. Hẹn gặp bạn ở những bài viết sau nhé!</p>
              <div className={styles['blog__post-cards']}>
                <Card />
                <Card />
              </div>
              <div className={styles['blog__post-contacts']}>
                <h1 className={styles['blog__post-contacts-heading']}>Viết bình luận của bạn</h1>
                <ContactForm />
                <div className={styles['blog__post-contacts-button']}>
                  <Button type='btn1 primary'>
                    Gửi cho chúng tôi
                  </Button>
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

export default BlogDetail