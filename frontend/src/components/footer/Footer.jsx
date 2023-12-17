import React from 'react';
import footer from './Footer.module.css';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import TextField from '../textField/TextField';

// Import thư viện các icon
import { MdMail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebookF, FaInstagramSquare, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={footer.footer}>

            {/* Form đăng ký nhận tin */}
            <div className={footer.footer__newsletter}>
                <div className={footer.newsletter__form}>
                    <div className={footer.newsletter__title}>
                        <p className={`${footer.content} title--1`}>Đăng ký nhận tin</p>
                        <p>Cập nhật những sản phẩm mới và hấp dẫn từ Bông Cake.</p>
                    </div>
                    <div className={footer.newsletter__email}>
                        <div className={footer.text_field__input}>
                            <TextField
                                placeholder="Email của bạn..."
                            />
                        </div>

                        <div className={footer.registerButton}>
                            <Button type="btn2 primary">Đăng ký</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={footer.footer__links}>
                {/* Phần Liên hệ */}
                <div className={`${footer.footer__links_div} ${footer.contact}`}>
                    <div className={`${footer.contact__name} title--1`}>Liên hệ</div>
                    <div className={footer.contact__email}>
                        <MdMail className={`${footer.contact__gmail_symb}  ${footer.icon}`} />
                        <span className={`${footer.content} body--2`}>bongcake.work@gmail.com</span>
                    </div>

                    <div className={footer.contact__phone}>
                        <FaPhoneAlt className={`${footer.contact__phone_symb}  ${footer.icon}`} />
                        <span className={`${footer.content} body--2`}>012 345 6789</span>
                    </div>

                    <div className={footer.contact__location}>
                        <FaMapMarkerAlt className={`${footer.contact__location_symb} ${footer.icon}`} />
                        <a
                            className={`${footer.content} body--2`}
                            href="https://maps.app.goo.gl/XdvdY9YqESv2HoWY6"
                        >
                            669 QL1A, khu phố 3, Thủ Đức, HCM
                        </a>
                    </div>
                </div>

                {/* Phần slogan và logo (ở giữa) */}
                <div className={`${footer.footer__links_div} ${footer.slogan}`}>
                    <div className={footer.slogan__logo}>
                        <img
                            className={footer.logo}
                            alt="Bong cake logo"
                            src=".././images/logoBongcake.png"
                        />
                        <div className={`${footer.slogan__content} title--2`}>
                            Thiên đường bánh ngọt dành riêng cho bạn
                        </div>
                        <div className={footer.socialmedia}>
                            <a href="#"><FaFacebookF className={footer.slogan__media} /></a>
                            <a href="#"><FaInstagramSquare className={footer.slogan__media} /></a>
                            <a href="#"><FaYoutube className={footer.slogan__media} /></a>
                        </div>
                    </div>
                </div>

                {/* Phần Liên kết nhanh */}
                <div className={footer.footer__links_div}>
                    <div className={footer.quick_links}>
                        <div className={`${footer.quick_links__name} title--1`}>
                            Liên kết nhanh
                        </div>
                        <Link className={`${footer.content} body--2`} to="/home">Trang chủ</Link>
                        <Link className={`${footer.content} body--2`} to="/customCupcake">Custom Cupcake</Link>
                        <a className={`${footer.content} body--2`} href="/product">Sản phẩm</a>
                        <Link className={`${footer.content} body--2`} to="/introduction">Giới thiệu</Link>
                        <Link className={`${footer.content} body--2`} to="/blog">Blog</Link>
                        <Link className={`${footer.content} body--2`} to="/support">Hỗ trợ</Link>
                    </div>

                </div>
            </div>

            {/* Phần Copyright */}
            <div className={footer.copyright}>
                <p className={`${footer.copyright__text} body--2`}>
                    Copyright © {new Date().getFullYear()} by Bông Cake. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;

