import React from 'react'
import styles from './Blog.module.css'
import Navbar from '../../components/header/NavBar'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import BlogSuggest from '../../assets/image/suggest_post.png'
import BlogPost from '../../assets/image/post.png'

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className={styles.center}>
        <div className={styles.page}>
          <div className={styles.navigation}>
            <Link className={styles.navigation__item} to={'/'}>Trang chủ</Link>
            <p className={styles.navigation__item}>|</p>
            <Link className={styles.navigation__item} to={'/support'}>Blog</Link>
          </div>
          <div className={styles.blog}>
            <div className={styles.blog__suggest}>
              <div className={styles.blog__border}>
                <h2 className={`${styles['blog__suggest-header']} title--2`}>Bài viết nổi bật</h2>
                <ul className={styles['blog__suggest-list']}>
                  <li className={styles['blog__suggest-post']}>
                    <Link Link to='/blog/1' className={styles['blog__suggest-link']}>
                      <img className={styles['blog__suggest-img']} src={BlogSuggest} alt="" />
                      <h3 className={styles['blog__suggest-title']}>Hướng dẫn chọn bánh cupcake ngon cho bữa...</h3>
                    </Link>
                  </li>
                  <li className={styles['blog__suggest-post']}>
                    <Link Link to='/blog/1' className={styles['blog__suggest-link']}>
                      <img className={styles['blog__suggest-img']} src={BlogSuggest} alt="" />
                      <h3 className={styles['blog__suggest-title']}>Hướng dẫn chọn bánh cupcake ngon cho bữa...</h3>
                    </Link>
                  </li>
                  <li className={styles['blog__suggest-post']}>
                    <Link Link to='/blog/1' className={styles['blog__suggest-link']}>
                      <img className={styles['blog__suggest-img']} src={BlogSuggest} alt="" />
                      <h3 className={styles['blog__suggest-title']}>Hướng dẫn chọn bánh cupcake ngon cho bữa...</h3>
                    </Link>
                  </li>
                  <li className={styles['blog__suggest-post']}>
                    <Link Link to='/blog/1' className={styles['blog__suggest-link']}>
                      <img className={styles['blog__suggest-img']} src={BlogSuggest} alt="" />
                      <h3 className={styles['blog__suggest-title']}>Hướng dẫn chọn bánh cupcake ngon cho bữa...</h3>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.blog__post}>
              <ul className={styles['blog__post-list']}>
                <li className={styles['blog__post-item']}>
                  <Link to='/blog/1'>
                    <img className={styles['blog__post-img']} src={BlogPost} alt="" />
                  </Link>
                  <div className={styles['blog__post-content']}>
                    <Link to='/blog/1' className={styles['blog__post-link']}>
                      <h3 className={styles['blog__post-title']}>Bánh cupcake - sự lựa chọn tuyệt vời cho những bữa tiệc đông người</h3>
                    </Link>
                    <p className={styles['blog__post-date']}>Ngày đăng: 02/11/2023</p>
                    <p className={styles['blog__post-desc']}>Bài viết này, Bông sẽ gợi ý cho bạn các tiệm bánh ngọt ngon nhất Sài Gòn mà Bông đã tham khảo và chọn lọc. Hi vọng rằng bài viết này sẽ mang đến cho bạn những trải nghiệm tốt và tìm cho mình một địa điểm bánh ngọt phù hợp với khẩu vị...</p>
                  </div>
                </li>
                <li className={styles['blog__post-item']}>
                  <Link to='/blog/1'>
                    <img className={styles['blog__post-img']} src={BlogPost} alt="" />
                  </Link>
                  <div className={styles['blog__post-content']}>
                    <Link to='/blog/1' className={styles['blog__post-link']}>
                      <h3 className={styles['blog__post-title']}>Bánh cupcake - sự lựa chọn tuyệt vời cho những bữa tiệc đông người</h3>
                    </Link>
                    <p className={styles['blog__post-date']}>Ngày đăng: 02/11/2023</p>
                    <p className={styles['blog__post-desc']}>Bài viết này, Bông sẽ gợi ý cho bạn các tiệm bánh ngọt ngon nhất Sài Gòn mà Bông đã tham khảo và chọn lọc. Hi vọng rằng bài viết này sẽ mang đến cho bạn những trải nghiệm tốt và tìm cho mình một địa điểm bánh ngọt phù hợp với khẩu vị...</p>
                  </div>
                </li>
                <li className={styles['blog__post-item']}>
                  <Link to='/blog/1'>
                    <img className={styles['blog__post-img']} src={BlogPost} alt="" />
                  </Link>
                  <div className={styles['blog__post-content']}>
                    <Link to='/blog/1' className={styles['blog__post-link']}>
                      <h3 className={styles['blog__post-title']}>Bánh cupcake - sự lựa chọn tuyệt vời cho những bữa tiệc đông người</h3>
                    </Link>
                    <p className={styles['blog__post-date']}>Ngày đăng: 02/11/2023</p>
                    <p className={styles['blog__post-desc']}>Bài viết này, Bông sẽ gợi ý cho bạn các tiệm bánh ngọt ngon nhất Sài Gòn mà Bông đã tham khảo và chọn lọc. Hi vọng rằng bài viết này sẽ mang đến cho bạn những trải nghiệm tốt và tìm cho mình một địa điểm bánh ngọt phù hợp với khẩu vị...</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog