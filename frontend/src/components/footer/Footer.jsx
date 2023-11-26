import React from 'react';
import './Footer.css';
import Button from '../button/Button';
import TextField from '../textField/TextField';

// Import thư viện các icon
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footer">
            {/* Đặt màu background cho footer */}
            <div className="background" />

            {/* Form đăng ký nhận tin */}
            <div className="newsletter">
                <div className="newsletter__form">
                    <div className="newsletter__name title">Đăng ký nhận tin</div>
                    <div className="newsletter__description">Cập nhật những sản phẩm mới và hấp dẫn từ Bông Cake</div>
                    <div className="newsletter__email">
                        <TextField
                            className="text-field__input" placeholder="Email của bạn..." />
                        <Button type="btn2 primary">Đăng ký</Button>
                    </div>
                </div>
            </div>

            {/* Phần Liên hệ */}
            <div className="contact">
                <div className="contact__name title">Liên hệ</div>
                <div className="contact__email">
                    <div className="contact__info">bongcake.work@gmail.com</div>
                    <MdEmail className="contact__email--symb" />
                </div>

                <div className="contact__phone">
                    <div className="contact__info">012 345 6789</div>
                    <FaPhoneAlt className="contact__phone--symb icon" />
                </div>

                <div className="contact__location">
                    <div className="contact__info">669 QL1A, khu phố 3, Thủ Đức, HCM</div>
                    <FaMapMarkerAlt className="contact__location--symb icon" />
                </div>
            </div>

            {/* Phần slogan và logo (ở giữa) */}
            <div className="slogan">
                <div className="slogan__logo">
                    <img
                        className="logo"
                        alt="Bong cake logo"
                        src="https://c.animaapp.com/TcJmswtL/img/b-ng-cake-logo-1@2x.png"
                    />
                    <div className="slogan__content">Thiên đường bánh ngọt dành riêng cho bạn</div>
                    <FaFacebookF className="slogan__media slogan__media--fb" />
                    <FaInstagramSquare className="slogan__media slogan__media--ig" />
                    <FaYoutube className="slogan__media slogan__media--yt" />
                </div>
            </div>

            {/* Phần Liên kết nhanh */}
            <div className="quick-links">
                <div className="quick_links__name title">Liên kết nhanh</div>
                <div className="quick_links__link quick_links__link--homepage">Trang chủ</div>
                <div className="quick_links__link quick_links__link--customCupcake">Custom Cupcake</div>
                <div className="quick_links__link quick_links__link--products">Sản phẩm</div>
                <div className="quick_links__link quick_links__link--intro">Giới thiệu</div>
                <div className="quick_links__link quick_links__link--blog">Blog</div>
                <div className="quick_links__link quick_links__link--support">Hỗ trợ</div>
            </div>

            {/* Phần Copyright */}
            <div className="copyright">
                <div className="copyright__container">
                    <div className="copyright__text">Copyright © 2023 by Bông Cake. All Rights Reserved.</div>
                </div>
            </div>
        </div>
    );
};

export default Footer