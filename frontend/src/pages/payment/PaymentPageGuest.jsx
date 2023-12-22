import React, { useState, useEffect } from 'react'
import Navbar from '../../components/header/NavBar'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import TextField from '../../components/textField/TextField';
import Button from '../../components/button/Button';
import paymentStyles from './Payment.module.css'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { FaCheck } from "react-icons/fa";
import AddSelect from '../../components/AddSelect/addSelect';
import Tab from '../../components/tab/Tab'

import axios from 'axios';

const PaymentPageGuest = ({
    showProvince,
    showDistrict,
    showWard,
    selectedProvince,
    selectedDistrict,
    selectedWard,
    onProvinceChange,
    onDistrictChange,
    onWardChange
}) => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);


    const [selectedProvinceName, setSelectedProvince] = useState(selectedProvince || '');
    const [selectedDistrictName, setSelectedDistrict] = useState(selectedDistrict || '');
    const [selectedWardName, setSelectedWard] = useState(selectedWard || '');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json');
                setProvinces(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        setSelectedProvince(selectedProvince);
    }, [selectedProvince]);

    useEffect(() => {
        setSelectedDistrict(selectedDistrict);
    }, [selectedDistrict]);

    useEffect(() => {
        setSelectedWard(selectedWard);
    }, [selectedWard]);

    const handleProvinceChange = (selectedProvinceName) => {
        setSelectedProvince(selectedProvinceName);

        onProvinceChange(selectedProvinceName);

        const province = provinces.find(province => province.Name === selectedProvinceName);
        if (province) {
            setDistricts(province.Districts || []);
        } else {
            setDistricts([]);
        }
        setWards([]);
        setSelectedDistrict('');
        setSelectedWard('');
    };

    const handleDistrictChange = (selectedDistrictName) => {
        setSelectedDistrict(selectedDistrictName);

        onDistrictChange(selectedDistrictName);

        const district = districts.find(district => district.Name === selectedDistrictName);
        if (district && district.Wards) {
            setWards(district.Wards);
        } else {
            setWards([]);
        }
        setSelectedWard('');
    };

    const handleWardChange = (selectedWardName) => {
        setSelectedWard(selectedWardName);
        onWardChange(selectedWardName);
    };

    return (
        <>
            <Navbar />
            <div className={paymentStyles.center}>
                <div className={paymentStyles.payment}>
                    <Breadcrumb />
                    <div className={paymentStyles.payment__container}>
                        {/* Chi tiết đơn hàng  */}
                        <div className={paymentStyles.payment__orderOverlap}>
                            <div className={paymentStyles.payment__orderDetail}>
                                <div className={`title--1 ${paymentStyles.orderDetail__head}`}>Chi tiết đơn hàng</div>
                                <hr className={paymentStyles.orderDetail__line}></hr>
                                <div className={paymentStyles.orderDetail__product}>card sp </div>

                                <div className={`body--1 ${paymentStyles.orderDetail__info}`}>
                                    <div className={`title--2 ${paymentStyles.orderDetail__info1}`} >

                                        <div className={paymentStyles.info1__title}>Nhập mã khuyến mãi:</div>
                                        <div className={paymentStyles.checkout__info1}>
                                            <div >
                                                <TextField
                                                    placeholder="Nhập mã khuyến mãi"
                                                />
                                            </div>
                                            <div >
                                                <Button type="btn2 primary">Áp dụng</Button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <hr className={paymentStyles.orderDetail__line}></hr>

                                <div className={`body--1 ${paymentStyles.orderDetail__info}`}>
                                    <div className={paymentStyles.checkout__info1}>
                                        <div >Tạm tính</div>
                                        <div>90,000 </div>
                                    </div>
                                    <div className={paymentStyles.checkout__info1}>
                                        <div>Giảm giá: </div>
                                        <div>0
                                        </div>
                                    </div>
                                    <div className={paymentStyles.checkout__info1}>
                                        <div >Phí vận chuyển: </div>
                                        <div >0
                                        </div>
                                    </div>
                                </div>

                                <hr className={paymentStyles.orderDetail__line}></hr>

                                <div className={`body--1 ${paymentStyles.orderDetail__info}`}>
                                    <div className={paymentStyles.checkout__info1}>
                                        <div >
                                            <div className={`body--1 `}>Tổng tiền</div>
                                            <div className={`title--3 ${paymentStyles.cusInfo__head}`}>90,000</div>
                                        </div>
                                        <div >
                                            <Button type="btn1 primary">Thanh toán</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={paymentStyles.payment__cusInfo}>
                            {/* thông tin nhận hàng */}
                            <div className={paymentStyles.cusInfo__overlap}>
                                <div className={`title--1 ${paymentStyles.cusInfo__head}`}>Thông tin nhận hàng</div>


                                <div className={paymentStyles.cusInfo__row}>
                                    <div className={paymentStyles.cusInfo__col1}>
                                        <TextField
                                            placeholder="Họ và tên"
                                        />
                                    </div>
                                    <div className={paymentStyles.cusInfo__col2}>
                                        <TextField
                                            placeholder="Số điện thoại"
                                        />
                                    </div>
                                </div>

                                <div className={paymentStyles.cusInfo__row}>
                                    <div className={paymentStyles.cusInfo__col1}>
                                        <TextField
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>

                                <div className={paymentStyles.cusInfo__row}>
                                    {showProvince && (
                                        <div >
                                            <select
                                                placeholder="Tỉnh/Thành phố"
                                                className={paymentStyles.select}
                                                Name="province"
                                                onChange={(e) => handleProvinceChange(e.target.value)}
                                                value={selectedProvince}
                                            >
                                                <option value="">{selectedProvince}</option>
                                                {provinces.map(province => (
                                                    <option key={province.Name} value={province.Name}>{province.Name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    )}

                                    {showDistrict && (
                                        <div >
                                            <select
                                                placeholder="Quận/Huyện"
                                                className={paymentStyles.select}
                                                Name="district"
                                                onChange={(e) => handleDistrictChange(e.target.value)}
                                                value={selectedDistrict}
                                            >
                                                <option value="">{selectedDistrict}</option>
                                                {districts.map(district => (
                                                    <option key={district.Name} value={district.Name}>{district.Name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    )}

                                    {showWard && (
                                        <div >

                                            <select
                                                placeholder="Xã/Phường"
                                                className={paymentStyles.select}
                                                Name="ward"
                                                onChange={(e) => handleWardChange(e.target.value)}
                                                value={selectedWard}
                                            >
                                                <option value="">{selectedWard}</option>
                                                {wards.map(ward => (
                                                    <option key={ward.Name} value={ward.Name}>{ward.Name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    )}
                                    <div className={paymentStyles.cusInfo__col1Note}>
                                        <TextField
                                            placeholder="Ghi chú"
                                        />
                                    </div>
                                </div>


                                <div className={paymentStyles.cusInfo__row}>
                                    <div className={paymentStyles.cusInfo__col1}>
                                        <TextField
                                            placeholder="Địa chỉ cụ thể"
                                        />
                                    </div>
                                </div>

                                <div className={paymentStyles.cusInfo__row}>
                                    <div className={paymentStyles.cusInfo__col1Note}>
                                        <TextField
                                            placeholder="Ghi chú"
                                        />
                                    </div>
                                </div>


                            </div>

                            {/* Phương thức vận chuyển */}
                            <div className={`body--1 ${paymentStyles.cusInfo__overlap}`}>
                                <div className={`title--1 ${paymentStyles.cusInfo__head}`}>Phương thức vận chuyển</div>
                                <div className={paymentStyles.cusInfo__checkbox}>
                                    <label className={paymentStyles.checkbox__item} >
                                        <input
                                            className={paymentStyles.checkbox}
                                            type="checkbox"
                                            id="checkbox1"

                                        />
                                        Giao hàng hoả tốc (trong 2h)
                                        <FaCheck className={paymentStyles.checkbox__icon} />
                                    </label>
                                    <label className={paymentStyles.checkbox__item} >


                                        <input
                                            className={paymentStyles.checkbox}
                                            type="checkbox"
                                            id="checkbox2"


                                        />
                                        Giao hàng tiêu chuẩn (2-3 ngày)
                                        <FaCheck className={paymentStyles.checkbox__icon} />
                                    </label>
                                </div>
                            </div>
                            {/* Phương thức thanh toán */}
                            <div className={`body--1 ${paymentStyles.cusInfo__overlap}`}>
                                <div className={`title--1 ${paymentStyles.cusInfo__head}`}>Phương thức thanh toán</div>
                                <div className={paymentStyles.cusInfo__checkbox}>

                                    <label className={paymentStyles.checkbox__item} >
                                        <input
                                            className={paymentStyles.checkbox}
                                            type="checkbox"
                                            id="checkbox1"
                                        />
                                        Thanh toán khi nhận hàng (COD)
                                        <FaCheck className={paymentStyles.checkbox__icon} />
                                    </label>
                                    <label className={paymentStyles.checkbox__item} >


                                        <input
                                            className={paymentStyles.checkbox}
                                            type="checkbox"
                                            id="checkbox2"
                                        />
                                        Thanh toán bằng Ví MoMo
                                        <FaCheck className={paymentStyles.checkbox__icon} />
                                    </label>

                                    <label className={paymentStyles.checkbox__item} >
                                        <input
                                            className={paymentStyles.checkbox}
                                            type="checkbox"
                                            id="checkbox2"
                                        />
                                        Thanh toán bằng thẻ ATM/VISA/MASTER
                                        <FaCheck className={paymentStyles.checkbox__icon} />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default PaymentPageGuest 
