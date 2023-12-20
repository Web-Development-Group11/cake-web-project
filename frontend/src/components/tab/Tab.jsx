import React, { useState } from 'react'
import TextFieldWithIcon from '../textFieldWithIcon/TextFieldWithIcon'
import TextField from '../textField/TextField'
import Button from '../button/Button';
import styles from './Tab.module.css';
import { Link } from 'react-router-dom'

const Tab = () => {
    const [activeTab, setActiveTab] = useState('customerInfo');

    const user = {
      name: 'Đào Huyền Anh',
      id: '01234455657',
      avatar: '/src/assets/image/avatar.png', 
    };

    const [userData, setUserData] = useState({
      email: '',
      phoneNumber: '*********999',
      displayName: '',
      password: '',
      province: 'Thủ Đức',
      district: '',
      ward: ' Linh Xuân',
      address: 'Cổng chính KTX Khu B Đại học Quốc gia',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
    };
  
    const handleUpdateAddress = () => {
      // Xử lý cập nhật thông tin địa chỉ khi nhấn nút "Cập nhật"
      // Ví dụ: gọi API hoặc thực hiện các tác vụ cần thiết
      console.log('Thông tin cập nhật:', userData);
    };

    // This is just placeholder data. Replace this with your actual data.
    const orders = [
      {
        image: 'path/to/image.jpg',
        name: 'No sugar cake',
        price: '45.000đ',
        date: 'July 30 at 10:00 AM',
        orderNumber: 'T23456789ABCXYZ123'
      },
      // Add more orders here...
    ];
  
    return (
      <div className={styles.tab__container}>
        <div className={styles.container__wrapper}>
          <div className={styles.user__container}>
            <img src={user.avatar} alt="User Avatar" className={styles.avatar} />
            <div className={styles.user__info}>
              <p className='title--1' style={{ color: 'var(--primary-color)' }}>{user.name}</p>
              <p className='title--3'>ID: {user.id}</p>
            </div>
            <div className={styles.signout}>
              <Button type='btn1 primary'>Đăng xuất</Button>
            </div>
          </div>
          <div className={styles.tab__header}>
            <div 
              className={`${styles.tab} ${activeTab=== 'customerInfo' ? styles.active : ''} title--3`} 
              onClick={() => setActiveTab('customerInfo')}
            >
              Thông tin khách hàng
            </div>
            <div 
              className={`${styles.his__box} ${styles.tab} ${activeTab === 'orderHistory' ? styles.active : ''} title--3`} 
              onClick={() => setActiveTab('orderHistory')}
            >
              Lịch sử đặt hàng
            </div>
            <div 
              className={`${styles.tab} ${activeTab === 'myOrders' ? styles.active : ''} title--3`} 
              onClick={() => setActiveTab('myOrders')}
            >
              Đơn hàng của tôi
            </div>
          </div>
        </div>

        {/* TabContent of Customer Info Tab */}
        <div className={styles.tab__content}>
          {activeTab === 'customerInfo' && (
            <div className={styles.customerInfo}>
              <form action="">
                <div className={`${styles.title} heading`}>Thông tin khách hàng</div>
                <fieldset className={styles.acct__info}>

                  {/* Account and Security field */}
                  <legend className={`${styles.subtitle} title--3`}>Tài khoản và bảo mật</legend>
                  <div className={styles.contact}>

                    {/* Left field include: email, phoneNumber, displayName and password */}
                    <div className={styles.contact__left}>

                      {/* Email field */}
                      <div className={styles.subcontact}>
                        <label htmlFor="email" className='title--4'>Email</label>
                        <div className={styles.input__change}>
                          <div className={styles.input__item}>
                            <TextFieldWithIcon value={userData.email} ></TextFieldWithIcon>
                          </div>
                          <Link to = '/forgetpassword' className={`${styles.change__text} body--2`}>Thay đổi</Link>
                        </div>
                      </div>

                      {/* PhoneNumber field */}
                      <div className={styles.subcontact}>
                        <label htmlFor="phoneNumber" className='title--4'>Điện thoại</label>
                        <div className={styles.input__change}>
                          <div className={styles.input__item}>
                            <TextFieldWithIcon value={userData.phoneNumber} ></TextFieldWithIcon>
                          </div>
                          <Link to = '/forgetpassword' className={`${styles.change__text} body--2`}>Thay đổi</Link>
                        </div>
                      </div>

                      {/* DisplayName field */}
                      <div className={styles.subcontact}>
                        <label htmlFor="displayName" className='title--4'>Tên hiển thị</label>
                        <div className={styles.input__change}>
                          <div className={styles.input__item} onChange={handleInputChange}>
                            <TextField value={userData.displayName} ></TextField>
                          </div>
                        </div>
                      </div>

                      {/* Password field */}
                      <div className={styles.subcontact}>
                        <label htmlFor="password" className='title--4'>Mật khẩu</label>
                        <div className={styles.input__change}>
                          <div className={styles.input__item}>
                            <TextFieldWithIcon value={userData.password} ></TextFieldWithIcon>
                          </div>
                          <Link to = '/changePassword' className={`${styles.change__text} body--2`}>Thay đổi</Link>
                        </div>
                      </div>


                    </div>

                    {/* Right field include: province, district, ward and location */}
                    <div className={styles.contact__right}>

                      {/* Province field */}
                      <div className={styles.subcontact}>
                        <label htmlFor="province" className='title--4'>Tỉnh/Thành phố</label>
                        <div className={styles.input__change}>
                          <div className={styles.input__item}>
                            <TextField value={userData.province} ></TextField>
                          </div>
                        </div>
                      </div>

                      {/* District field */}
                      <div className={styles.subcontact}>
                        <label htmlFor="district" className='title--4'>Quận/Huyện</label>
                        <div className={styles.input__change}>
                          <div className={styles.input__item}>
                            <TextField value={userData.district} ></TextField>
                          </div>
                        </div>
                      </div>
                      
                      {/* Ward field */}
                      <div className={styles.subcontact}>
                        <label htmlFor="ward" className='title--4'>Xã/Phường</label>
                        <div className={styles.input__change}>
                          <div className={styles.input__item}>
                            <TextField value={userData.ward} ></TextField>
                          </div>
                        </div>
                      </div>

                      {/* Location field */}
                      <div className={styles.subcontact}>
                        <label htmlFor="location" className='title--4'>Địa chỉ</label>
                        <div className={styles.input__change}>
                          <div className={styles.input__item}>
                            <TextField value={userData.location} ></TextField>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>                  
                </fieldset>

                {/* Location detail field */}
                <fieldset className={styles.location}>
                  <legend className={`${styles.subtitle} title--3`}>Địa chỉ</legend>
                  <div className={styles.loc__container}>
                    <div className={styles.loc__detail}>
                      <div className="body--2">
                        <div> {user.name} | {userData.phoneNumber}</div>
                        <div> {userData.address} </div>
                        <div>{`Phường ${userData.ward}, Quận ${userData.district}, Thành Phố ${userData.province} `}</div>
                      </div>
                      <hr size="1" className={styles.line}/>
                    </div>
                  </div>
                </fieldset>
                <div className={styles.update__btn} onClick={handleUpdateAddress}>
                  <Button type='btn1 secondary--1'>Cập nhật</Button>
                </div>
              </form>
            </div>
            
          )}
          {activeTab === 'orderHistory' && (
            <div className={styles.orderHistory}>
              {orders.map((order, index) => (
                <div key={index} className={styles.order}>
                  <img src={order.image} alt={order.name} />
                  <p>{order.name}</p>
                  <p>{order.price}</p>
                  <p>Order time: {order.date}</p>
                  <p>Order Number: {order.orderNumber}</p>
                  <button>Reorder</button>
                  <button>View Details</button>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'myOrders' && <p>My Orders Content</p>}
        </div>
      </div>
    );
}

export default Tab