import React from 'react';
import './Footer.css';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import TextField from '../textField/TextField';

// Import thư viện các icon
import { MdMail } from "react-icons/md";
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
            <div className="footer__newsletter">
                <div className="newsletter__form">
                    <div className="newsletter__title">
                        <p className="title--1">Đăng ký nhận tin</p>
                        <p>Cập nhật những sản phẩm mới và hấp dẫn từ Bông Cake.</p>
                    </div>
                    <div className="newsletter__email">
                        <TextField
                            className="text-field__input" placeholder="Email của bạn..." />
                        <Button type="btn2 primary">Đăng ký</Button>
                    </div>
                </div>
            </div>

            <div className="footer__links">
                {/* Phần Liên hệ */}
                <div className="footer__links-div contact">
                    <div className="contact__name title--1">Liên hệ</div>
                    <div className="contact__email">
                        <MdMail className="contact__gmail--symb icon" />
                        <span className="body--2">bongcake.work@gmail.com</span>
                    </div>

                    <div className="contact__phone">
                        <FaPhoneAlt className="contact__phone--symb icon" />
                        <span className="body--2">012 345 6789</span>
                    </div>

                    <div className="contact__location">
                        <FaMapMarkerAlt className="contact__location--symb icon" />
                        <a className="body--2" href="https://maps.app.goo.gl/XdvdY9YqESv2HoWY6">669 QL1A, khu phố 3, Thủ Đức, HCM</a>
                    </div>
                </div>
                

                {/* Phần slogan và logo (ở giữa) */}
                <div className="footer__links-div slogan">
                    <div className="slogan__logo">
                        <img
                            className="logo"
                            alt="Bong cake logo"
                            src=".././images/logoBongcake.png"
                        />
                        <div className="slogan__content title--2">Thiên đường bánh ngọt dành riêng cho bạn</div>
                        <div className="socialmedia">
                            <a href="#"><FaFacebookF className="slogan__media slogan__media--fb" /></a>
                            <a href="#"><FaInstagramSquare className="slogan__media slogan__media--ig" /></a>
                            <a href="#"><FaYoutube className="slogan__media slogan__media--yt" /></a>
                        </div>
                    </div>
                </div>

                {/* Phần Liên kết nhanh */}
                <div className="footer__links-div">
                    <div className="quick-links">
                        <div className="quick_links__name title--1">Liên kết nhanh</div>
                        <Link className="body--2" to="/home">Trang chủ</Link>
                        <Link className="body--2" to="/customCupcake">Custom Cupcake</Link>
                        <a className="body--2" href="/product">Sản phẩm</a>
                        <Link className="body--2" to="/introduction">Giới thiệu</Link>
                        <Link className="body--2" to="/blog">Blog</Link>
                        <Link className="body--2" to="/support">Hỗ trợ</Link>
                    </div>
                </div>
            </div>

            {/* Phần Copyright */}
            <div className="copyright">
                <p className="copyright__text body--2">
                    Copyright © {new Date().getFullYear()} by Bông Cake. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer