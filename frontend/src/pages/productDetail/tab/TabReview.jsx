import React, { useState } from 'react'
import TextField from '../../../components/textField/TextField'
import Button from '../../../components/button/Button';
import tabreview from './TabReview.module.css';
import Pagination from '../../../components/pagination/index';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';



const TabReview = () => {
    const [activeTab, setActiveTab] = useState('readReview');

    const [currentRating, setCurrentRating] = useState(4.5);

    const handleRatingChange = (newValue) => {
        setCurrentRating(newValue);
    };

    const [selectedFilter, setSelectedFilter] = useState('all');
    const handleFilterClick = (filterValue) => {
        setSelectedFilter(filterValue);
        // Thực hiện các tác vụ khác nếu cần thiết khi lọc được chọn
    };

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
                                        name="half-rating-read" defaultValue={currentRating} precision={0.5} readOnly
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
                                <div className={tabreview.readReview__list__item}>
                                    <div className={tabreview.readReview__list__item_infoUser}>
                                        <div className={tabreview.readReview__list__item_avt}>
                                            <Avatar>P</Avatar>
                                        </div>
                                        <div className={tabreview.readReview__list__item_info}>
                                            <p className={`${tabreview.userName} body--2`}>Nam Phương</p>
                                            <Rating
                                                style={{ color: '#E21033', fontSize: '0.75rem' }}
                                                name="half-rating-read" defaultValue={currentRating} precision={0.5} readOnly />
                                            <p className={tabreview.date}>Chỗ này để xử lí ngày tháng năm</p>
                                        </div>
                                    </div>

                                    <div className={`${tabreview.readReview__list__item_cmt} body--2`}>
                                        Chỗ này là bình luận
                                    </div>
                                </div>

                                <div className={tabreview.readReview__list__item}>
                                    <div className={tabreview.readReview__list__item_infoUser}>
                                        <div className={tabreview.readReview__list__item_avt}>
                                            <Avatar sx={{ bgcolor: deepOrange[500] }}>T</Avatar>
                                        </div>
                                        <div className={tabreview.readReview__list__item_info}>
                                            <p className={`${tabreview.userName} body--2`}>Tui</p>
                                            <Rating
                                                style={{ color: '#E21033', fontSize: '0.75rem' }}
                                                name="half-rating-read" defaultValue={currentRating} precision={0.5} readOnly />
                                            <p className={tabreview.date}>Chỗ này để xử lí ngày tháng năm</p>
                                        </div>
                                    </div>

                                    <div className={`${tabreview.readReview__list__item_cmt} body--2`}>
                                        Chỗ này là bình luận
                                    </div>
                                </div>

                            </div>
                            <Pagination totalPages={2} />
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
                                    <TextField placeholder="Họ và tên" />
                                </div>
                                <div className={tabreview.writeReview__phone}>
                                    <TextField placeholder="Số điện thoại" />
                                </div>
                            </div>

                            <div className={tabreview.writeReview__email}>
                                <TextField placeholder="Email" />
                            </div>

                            <div className={tabreview.writeReview__review}>
                                <TextField placeholder="Đánh giá của bạn" />
                            </div>

                            <div className={tabreview.writeReview__satisfaction}>
                                <p className={`${tabreview.writeReview__satisfaction_title} title--3`}>
                                    Đánh giá mức độ hài lòng của bạn:
                                </p>
                                <Rating style={{ color: '#E21033' }} name="half-rating-read" defaultValue={0} precision={0.5} />
                            </div>

                            <div className={tabreview.writeReview__postButton}>
                                <Button type="btn1 primary">Đăng bài</Button>
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