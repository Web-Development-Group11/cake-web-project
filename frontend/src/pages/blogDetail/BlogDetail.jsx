import React, { useEffect, useState } from 'react'
import styles from './BlogDetail.module.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../components/header/NavBar'
import Footer from '../../components/footer/Footer'
import BlogSuggest from '../../assets/image/suggest_post.png'
import BlogPost from '../../assets/image/post.png'
import '../../custom.css'
import Card from '../../components/card/Card'
import ContactForm from '../../components/contactForm/ContactForm'
import Button from '../../components/button/Button'
import { axiosClient } from '../../api/axios'
import Loader from '../../components/loader/Loader'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

const BlogDetail = () => {
  // Loader state
  const [isLoading, setIsLoading] = useState(true);

  const { blogSlug } = useParams();

  const [data, setData] = useState();
  const [suggestedPosts, setSuggestedPosts] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosClient.get(`/blog/${blogSlug}`);

        setTimeout(() => {
          setIsLoading(false);
        })

        setData(response.data.data);
      } catch (error) {
        console.log(error);
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

    getData();
    getSuggestedPosts();
  }, [])

  const processDate = (date) => {
    const dateObject = new Date(date);

    // Format the date as a string in the desired format
    const outputString = (dateObject.getDate() < 10 ? '0' : '') + dateObject.getDate() + '/' +
      ((dateObject.getMonth() + 1) < 10 ? '0' : '') + (dateObject.getMonth() + 1) + '/' +
      dateObject.getFullYear();

    return outputString;
  }

  const onSubmit = async (name, email, content) => {
    console.log(name, email, content)
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
            <div>
              <div className={styles.blog__suggest}>
                <h2 className={`${styles['blog__suggest-header']} title--2`}>Bài viết nổi bật</h2>
                <ul className={styles['blog__suggest-list']}>
                  {suggestedPosts?.map((post, idx) => (
                    <li key={idx} className={styles['blog__suggest-post']}>
                      <Link to={`/blog/${post.slug}`} className={styles['blog__suggest-link']}>
                        <img className={styles['blog__suggest-img']} src={`/image/${post.coverImage}`} alt="" />
                        <h3 className={styles['blog__suggest-title']}>{post.title}</h3>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.blog__post}>
              <h1 className={styles['blog__post-title']}>{data?.title}</h1>
              <p className={styles['blog__post-date']}>Ngày đăng: {processDate(data?.publishdate)}</p>
              {data?.content?.map((item, idx) => {
                if (item.type === 'paragraph') {
                  return <p key={idx} className={styles['blog__post-p']}>{item.detail}</p>
                } else if (item.type === 'heading') {
                  return <h3 key={idx} className={styles['blog__post-h3']}>{item.detail}</h3>
                } else if (item.type === 'image') {
                  return (
                    <div key={idx} className="center">
                      <img src={`/image/${item.imageUrl}`} alt="blog-post" className={styles['blog__post-img']} />
                      <p className={styles['blog__post-img-desc']}>{item.description}</p>
                    </div>
                  )
                } else if (item.type === 'list') {
                  return (
                    <ul key={idx} className={styles['blog__post-ul']}>
                      {item.detail.map((content, idx) => (
                        <li key={idx} className={styles['blog__post-li']}>{content}</li>
                      ))}
                    </ul>
                  )
                } else {
                  return null;
                }
              })}
              <div className={styles['blog__post-contacts']}>
                <h1 className={styles['blog__post-contacts-heading']}>Viết bình luận của bạn</h1>
                <ContactForm onSubmit={onSubmit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetail