import React from 'react';
import IconName from "react-icons/fa";
import MdOutlineEmail from "react-icons/md";
import './Footer.css';
import Button from '../button/Button';
import TextField from '../textField/TextField';

const Footer = ({
    group = "https://c.animaapp.com/TcJmswtL/img/group-13@2x.png",
    phone = "https://c.animaapp.com/TcJmswtL/img/phone-1.svg",
    inputType = "email",
}) => {
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
                            className="newsletter__email--input"/>
                        <Button className="newsletter__email-submit btn">Đăng ký</Button>
                    </div>
                </div>
            </div>

            {/* Phần Liên hệ */}
            <div className="contact">
                <div className="contact__name title">Liên hệ</div>
                <div className="contact__email">
                    <div className="contact__info">bongcake.work@gmail.com</div>
                    <MdOutlineEmail className="contact__email-symb icon"/>
                </div>
                
                <div className="contact__phone">
                    <div className="contact__info">012 345 6789</div>
                    <img className="img" alt="Phone" src={phone} />
                </div>
                
                <div className="contact__location">
                    <div className="contact__info">669 QL1A, khu phố 3, Thủ Đức, HCM</div>
                    <img className="img" alt="Map pin" src="https://c.animaapp.com/TcJmswtL/img/map-pin-1.svg" />
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
                </div>
                <img className="group" alt="Group" src={group} />
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