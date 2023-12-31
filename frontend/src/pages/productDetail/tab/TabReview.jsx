import React, { useEffect, useState } from 'react'
import TextField from '../../../components/textField/TextField'
import Button from '../../../components/button/Button';
import tabreview from './TabReview.module.css';
import Pagination from '@mui/material/Pagination';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import { axiosClient } from '../../../api/axios';
import { useParams } from 'react-router';

const TabReview = (props) => {
    // const review = props.comments;
    const [review, setReview] = useState([])

    // Hàm useState phần review
    const [activeTab, setActiveTab] = useState('readReview');

    // Hàm useState phần lọc đánh giá
    const [selectedFilter, setSelectedFilter] = useState('all');
    const { id } = useParams();

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
            const listTmp = review.filter((item) => item.rating === 5);
            setReviewList(listTmp);
        }
        else if (filterValue === 4) {
            // Lọc đánh giá 4 sao
            const listTmp = review.filter((item) => item.rating >= 4 && item.rating < 5);
            setReviewList(listTmp);
        }
        else if (filterValue === 3) {
            // Lọc đánh giá 3 sao
            const listTmp = review.filter((item) => item.rating >= 3 && item.rating < 4);
            setReviewList(listTmp);
        }
        else if (filterValue === 2) {
            // Lọc đánh giá 2 sao
            const listTmp = review.filter((item) => item.rating >= 2 && item.rating < 3);
            setReviewList(listTmp);
        }
        else if (filterValue === 1) {
            // Lọc đánh giá 1 sao
            const listTmp = review.filter((item) => item.rating >= 1 && item.rating < 2);
            setReviewList(listTmp);
        }

    };

    // Hàm useState phần phân trang
    const [reviewList, setReviewList] = useState(null);

    // Gọi API lấy danh sách review
    const getComments = async () => {
        try {
            const response = await axiosClient.get(`/products/comment/${id}`);
            setReview(response.data.data);
            setReviewList(response.data.data);
            console.log(response.data.data)
        } catch (err) {
            console.log(err)
        }
    };
    useEffect(() => {
        getComments();
    }, [id]);

    // Lay so sao tu cmt
    const [author, setauthor] = useState(null);
    const [phoneNumber, setphoneNumber] = useState(null);
    const [email, setemail] = useState(null);
    const [comment, setcomment] = useState(null);
    const [rating, setrating] = useState(1);

    // Lay gia tri
    // Đúng là: event.target.value. Mà bên TextField có để sẵn là e.target.value rồi nên chỉ cần truyền event vào là được
    const handleauthorChange = (event) => {
        setauthor(event);
    };

    const handlephoneNumberChange = (event) => {
        setphoneNumber(event);
    }

    const handleemailChange = (event) => {
        setemail(event);
    }

    const handlecommentChange = (event) => {
        setcomment(event);
    }

    const handleratingChange = (event) => {
        setrating(parseFloat(event.target.value) <= 1 ? 1 : parseFloat(event.target.value));
        console.log(typeof parseFloat(event.target.value))
    }

    // Xu ly khi bam nut dang bai
    const handlePostReview = async () => {
        if (!author && !phoneNumber && !email && !comment) {
            alert("Bạn vui lòng nhập đầy đủ thông tin!");
            
        }
        else {
            // Gọi API lấy danh sách review (chưa có API nên tạm thời dùng hàm setReviewList()
            try {
                await axiosClient.post(`/products/comment/${id}`, { author, phoneNumber, email, comment, rating });
                alert("Bạn đã đăng bài thành công!");
            } catch (err) {
                console.log(err)
            }
            getComments();
            setActiveTab('readReview');
            setauthor(null);
            setphoneNumber(null);
            setemail(null);
            setcomment(null);
            setrating(1);
            setReviewList(review);
            window.location.reload();
        }
    }

    // Chuyen trang danh gia
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentReview, setCurrentReview] = useState(reviewList);

    const totalItems = reviewList?.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
        console.log(event)
    };

    useEffect(() => {
        console.log(currentPage)
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setCurrentReview(reviewList?.slice(startIndex, endIndex))
    }, [currentPage, reviewList])

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
                                    <p className={`${tabreview.readReview__ratingFilter_totalStar} title--3`}>{props.rating} trên 5</p>
                                    <Rating
                                        style={{ color: '#E21033' }}
                                        name="half-rating-read" value={props.rating} precision={0.5} readOnly
                                        onChange={(event, newValue) => handleratingChange(newValue)} />
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
                                    currentReview?.map((item, index) => (
                                        <div className={tabreview.readReview__list__item}>
                                            <div className={tabreview.readReview__list__item_infoUser}>
                                                <div className={tabreview.readReview__list__item_avt}>
                                                    {!item.avatar && <Avatar></Avatar>}
                                                </div>
                                                <div className={tabreview.readReview__list__item_info}>
                                                    <p className={`${tabreview.author} body--2`}>{item.author}</p>
                                                    <Rating
                                                        style={{ color: '#E21033', fontSize: '0.75rem' }}
                                                        name="half-rating-read" value={item.rating} precision={0.5} readOnly />
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

                            <div className={tabreview.pagination}>
                                <Pagination
                                    className="custom-pagination"
                                    totalPages={totalPages}
                                    onChange={handlePageChange}
                                    count={totalPages}
                                    page={currentPage}
                                    variant="outlined"
                                    shape="rounded"
                                />
                            </div>

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
                                        <TextField onChange={handleauthorChange} value={author} placeholder="Họ và tên" />
                                    </div>
                                    <div className={tabreview.writeReview__phone}>
                                        <TextField onChange={handlephoneNumberChange} value={phoneNumber} placeholder="Số điện thoại" />
                                    </div>
                                </div>

                                <div className={tabreview.writeReview__email}>
                                    <TextField onChange={handleemailChange} value={email} placeholder="Email" />
                                </div>

                                <div className={tabreview.writeReview__review}>
                                    <TextField onChange={handlecommentChange} value={comment} placeholder="Đánh giá của bạn" />
                                </div>

                                <div className={tabreview.writeReview__satisfaction}>
                                    <p className={`${tabreview.writeReview__satisfaction_title} title--3`}>
                                        Đánh giá mức độ hài lòng của bạn:
                                    </p>
                                    <Rating onChange={handleratingChange} style={{ color: '#E21033' }} name="half-rating-read" value={rating} precision={0.5} min={1} />
                                </div>

                                <div className={tabreview.writeReview__postButton}>
                                    <Button type='btn1 primary' onClick={() => handlePostReview()}>Đăng bài</Button>
                                </div>

                            </div>

                        </div>



                    )}
                </div>
            </div>
        </div >
    );
}

export default TabReview