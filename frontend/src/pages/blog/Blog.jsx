import React, { useEffect, useState } from 'react'
import styles from './Blog.module.css'
import Navbar from '../../components/header/NavBar'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import BlogSuggest from '../../assets/image/suggest_post.png'
import BlogPost from '../../assets/image/post.png'
import { axiosClient } from '../../api/axios'
import Loader from '../../components/loader/Loader'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

const Blog = () => {
  // Loader state
  const [isLoading, setIsLoading] = useState(true);

  const [posts, setPosts] = useState();
  const [suggestedPosts, setSuggestedPosts] = useState()

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axiosClient.get('/blog');

        setTimeout(() => {
          setIsLoading(false);
        })

        setPosts(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }

    const getSuggestedPosts = async () => {
      try {
        const response = await axiosClient.get('/blog/suggested-blog');

        setSuggestedPosts(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }

    getPosts();
    getSuggestedPosts();
  }, [])

  console.log(suggestedPosts)

  const processDate = (date) => {
    const dateObject = new Date(date);

    // Format the date as a string in the desired format
    const outputString = (dateObject.getDate() < 10 ? '0' : '') + dateObject.getDate() + '/' +
      ((dateObject.getMonth() + 1) < 10 ? '0' : '') + (dateObject.getMonth() + 1) + '/' +
      dateObject.getFullYear();

    return outputString;
  }

  return isLoading ? (
    <Loader></Loader>
  ) : (
    <>
      <div className={styles.center}>
        <div className={styles.page}>
          <div className={styles.navigation}>
            <Breadcrumb />

          </div>
          <div className={styles.blog}>
            <div className={styles.blog__suggest}>
              <div className={styles.blog__border}>
                <h2 className={`${styles['blog__suggest-header']} title--2`}>Bài viết nổi bật</h2>
                <ul className={styles['blog__suggest-list']}>
                  {suggestedPosts?.map((post, idx) => (
                    <li key={idx} className={styles['blog__suggest-post']}>
                      <Link Link to={`/blog/${post.slug}`} className={styles['blog__suggest-link']}>
                        <img className={styles['blog__suggest-img']} src={`/image/${post.coverImage}`} alt="" />
                        <h3 className={styles['blog__suggest-title']}>{post.title}</h3>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.blog__post}>
              <ul className={styles['blog__post-list']}>
                {posts?.map((post, idx) => (
                  <li key={idx} className={styles['blog__post-item']}>
                    <Link to={`/blog/${post.slug}`}>
                      <img className={styles['blog__post-img']} src={`/image/${post.coverImage}`} alt="" />
                    </Link>
                    <div className={styles['blog__post-content']}>
                      <Link to='/blog/top-20-tiem-banh-ngot' className={styles['blog__post-link']}>
                        <h3 className={styles['blog__post-title']}>{post.title}</h3>
                      </Link>
                      <p className={styles['blog__post-date']}>Ngày đăng: {processDate(post.publishdate)}</p>
                      <p className={styles['blog__post-desc']}>{post.content[0].detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog