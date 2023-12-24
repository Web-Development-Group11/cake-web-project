import React, { useEffect, useState } from 'react'
import TextField from '../../../components/textField/TextField'
import Button from '../../../components/button/Button';
import tabreview from './TabReview.module.css';
import Pagination from '../../../components/pagination/index';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { axiosClient } from '../../../api/axios';
import { useParams } from 'react-router';



const TabReview = () => {
    const [ review, setReview] = useState()

    // Hàm useState phần review
    const [activeTab, setActiveTab] = useState('readReview');

    // Hàm useState phần set giá trị sao ở phần "4.5 trên 5" trong tab đánh giá
    const [currentRating, setCurrentRating] = useState(4.5);

    // Hàm set giá trị cho số sao khi người dùng đánh giá
    const handleRatingChange = (newValue) => {
        setCurrentRating(newValue);
    };

    // Hàm useState phần lọc đánh giá
    const [selectedFilter, setSelectedFilter] = useState('all');
    const {id} = useParams();

    // Hàm set giá trị cho phần lọc đánh giá
    const handleFilterClick = (filterValue) => {
        setSelectedFilter(filterValue);

        // Nếu người dùng chọn "Tất cả" thì hiển thị tất cả các đánh giá
        if (filterValue === 'all') {
            // Lọc tất cả
            setReviewList(review);
        }

        else if (filterValue === 5) {
            // Lọc đánh giá 5 sao
            const listTmp = review.filter((item) => item.Star === 5);
            setReviewList(listTmp);
        }
        else if (filterValue === 4) {
            // Lọc đánh giá 4 sao
            const listTmp = review.filter((item) => item.Star >= 4 && item.Star < 5);
            setReviewList(listTmp);
        }
        else if (filterValue === 3) {
            // Lọc đánh giá 3 sao
            const listTmp = review.filter((item) => item.Star >= 3 && item.Star < 4);
            setReviewList(listTmp);
        }
        else if (filterValue === 2) {
            // Lọc đánh giá 2 sao
            const listTmp = review.filter((item) => item.Star >= 2 && item.Star < 3);
            setReviewList(listTmp);
        }
        else if (filterValue === 1) {
            // Lọc đánh giá 1 sao
            const listTmp = review.filter((item) => item.Star >= 1 && item.Star < 2);
            setReviewList(listTmp);
        }

    };

    // Hàm useState phần phân trang
    const [reviewList, setReviewList] = useState(null);

    useEffect(() => {
        // Gọi API lấy danh sách review
        const getComments = async () => {
        try {
            const response = await axiosClient.get(`/products/comment/${id}`);
            setReview(response.data.data);
            console.log(response.data.data)
        } catch (err) {
            console.log(err)
        }
    };
        getComments();
        setReviewList(review);
        // handlePageChange();
    }, []
    );

    // Chuyen trang danh gia
    // const handlePageChange = (event, page) => {
    //     const currentList = reviewList?.slice(1, 5);
    //     setReviewList(currentList);
    // };

    // Lay so sao tu cmt
    const [userName, setUserName] = useState(null);
    const [userPhone, setUserPhone] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [userComment, setUserComment] = useState(null);
    const [userStar, setUserStar] = useState(1);

    // Lay gia tri
    // Đúng là: event.target.value. Mà bên TextField có để sẵn là e.target.value rồi nên chỉ cần truyền event vào là được
    const handleUserNameChange = (event) => {
        setUserName(event);
    };

    const handleUserPhoneChange = (event) => {
        setUserPhone(event);
    }

    const handleUserEmailChange = (event) => {
        setUserEmail(event);
    }

    const handleUserCommentChange = (event) => {
        setUserComment(event);
    }

    const handleUserStarChange = (event) => {
        setUserStar(event.target.value <= 1 ? 1 : event.target.value);
    }



    // Xu ly khi bam nut dang bai
    const handlePostReview = () => {
        if (!userName && !userPhone && !userEmail && !userComment) {
            alert("Bạn vui lòng nhập đầy đủ thông tin!");
            return;
        }
        else {
            // Gọi API lấy danh sách review (chưa có API nên tạm thời dùng hàm setReviewList()
            const newReview = {

                avatar: null,
                Uername: userName,
                Star: userStar,
                Time: "31/12/2023",
                comment: userComment
            }

            review.push(newReview);
            console.log(newReview);
            setReviewList(review);
            alert("Bạn đã đăng bài thành công!");
            setUserName(null);
            setUserPhone(null);
            setUserEmail(null);
            setUserComment(null);
            setUserStar(1);
        }


    }


    return (
        <div className={tabreview.tabReview__container}>
            <div className={tabreview.container__wrapper}>

                <div className={tabreview.tabReview__header}>
                    <div
                        className={`${tabreview.tab} ${activeTab === 'readReview' ? tabreview.active : ''} title--3`}
                        onClick={() => setActiveTab('readReview')}
                    >
                        Đánh giá sản phẩm
                    </div>
                    <div
                        className={`${tabreview.tab} ${activeTab === 'writeReview' ? tabreview.active : ''} title--3`}
                        onClick={() => setActiveTab('writeReview')}
                    >
                        Viết đánh giá
                    </div>

                </div>


                {/* TabContent of readReview Tab */}
                <div className={tabreview.tabReview__content}>
                    {activeTab === 'readReview' && (
                        <div className={tabreview.readReview}>
                            <div className={tabreview.readReview__ratingFilter}>
                                <div className={tabreview.readReview__ratingFilter_total}>
                                    <p className={`${tabreview.readReview__ratingFilter_totalStar} title--3`}>{currentRating} trên 5</p>
                                    <Rating
                                        style={{ color: '#E21033' }}
                                        name="half-rating-read" value={currentRating} precision={0.5} readOnly
                                        onChange={(event, newValue) => handleRatingChange(newValue)} />
                                </div>
                                <div className={tabreview.readReview__ratingFilter_filter}>
                                    <p className={`${tabreview.readReview__ratingFilter_filter__label} title--4`}>
                                        Lọc theo
                                    </p>

                                    {['all', 5, 4, 3, 2, 1].map((filterValue) => (
                                        <div
                                            key={filterValue}
                                            className={`${tabreview.readReview__ratingFilter_filter__content} body--1 ${selectedFilter === filterValue ? tabreview.selectedFilter : ''
                                                }`}
                                            onClick={() => handleFilterClick(filterValue)}
                                        >
                                            {filterValue === 'all' ? 'Tất cả' : `${filterValue} sao`}
                                        </div>
                                    ))}
                                </div>

                            </div>

                            <div className={tabreview.readReview__list}>

                                {
                                    // ?. khi gía trị trước nó là null thi chạy bth, ko null thì dừng
                                    reviewList?.map((item, index) => (
                                        <div className={tabreview.readReview__list__item}>
                                            <div className={tabreview.readReview__list__item_infoUser}>
                                                <div className={tabreview.readReview__list__item_avt}>
                                                    {!item.avatar && <Avatar></Avatar>}
                                                </div>
                                                <div className={tabreview.readReview__list__item_info}>
                                                    <p className={`${tabreview.userName} body--2`}>{item.Uername}</p>
                                                    <Rating
                                                        style={{ color: '#E21033', fontSize: '0.75rem' }}
                                                        name="half-rating-read" value={item.Star} precision={0.5} readOnly />
                                                    <p className={tabreview.date}>
                                                        {item.Time}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={`${tabreview.readReview__list__item_cmt} body--2`}>
                                                {item.comment}
                                            </div>
                                        </div>

                                    ))
                                }

                            </div>
                            {/* <Pagination totalPages={Math.ceil(reviewList?.length / 5)} onChange={handlePageChange} /> */}
                        </div>



                    )}



                    {/* TabContent of writeReview Tab */}
                    {activeTab === 'writeReview' && (
                        <div className={tabreview.writeReview}>

                            <div className={`${tabreview.writeReview__heading} title--1`}>
                                Viết đánh giá của bạn tại đây nhé!
                            </div>

                            <div className={tabreview.tabreview}>
                                <div className={tabreview.writeReview__nameAndPhone}>
                                    <div className={tabreview.writeReview__name}>
                                        <TextField onChange={handleUserNameChange} value={userName} placeholder="Họ và tên" />
                                    </div>
                                    <div className={tabreview.writeReview__phone}>
                                        <TextField onChange={handleUserPhoneChange} value={userPhone} placeholder="Số điện thoại" />
                                    </div>
                                </div>

                                <div className={tabreview.writeReview__email}>
                                    <TextField onChange={handleUserEmailChange} value={userEmail} placeholder="Email" />
                                </div>

                                <div className={tabreview.writeReview__review}>
                                    <TextField onChange={handleUserCommentChange} value={userComment} placeholder="Đánh giá của bạn" />
                                </div>

                                <div className={tabreview.writeReview__satisfaction}>
                                    <p className={`${tabreview.writeReview__satisfaction_title} title--3`}>
                                        Đánh giá mức độ hài lòng của bạn:
                                    </p>
                                    <Rating onChange={handleUserStarChange} style={{ color: '#E21033' }} name="half-rating-read" value={userStar} precision={0.5} min={1} />
                                </div>

                                <button className={tabreview.writeReview__postButton} onClick={() => handlePostReview()}>Đăng bài</button>
                                {/* <Button className={tabreview.writeReview__postButton} onClick={() => handlePostReview()} type="btn1 primary">Đăng bài</Button> */}

                            </div>

                        </div>



                    )}
                </div>
            </div>
        </div >
    );
}

export default TabReview