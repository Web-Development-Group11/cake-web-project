import React, { useState } from 'react'
import TextFieldWithIcon from '../textFieldWithIcon/TextFieldWithIcon'
import TextField from '../textField/TextField'
import Button from '../button/Button';
import styles from './Tab.module.css';
import { Link } from 'react-router-dom'
import { FaRegClock, FaRegMap } from "react-icons/fa";
import { FiFileText, FiBox, FiTruck, FiInbox, FiStar } from "react-icons/fi";

const Tab = () => {
    const [activeTab, setActiveTab] = useState('customerInfo');

    const user = {
      name: 'Đào Huyền Anh',
      id: '01234455657',
      avatar: '/src/assets/image/avatar.png', 
    };

    const [userData, setUserData] = useState({
      email: 'huyenanhdao@gmail.com',
      phoneNumber: '0398607486',
      displayName: 'huyenanhdao910',
      password: '********',
      city: 'Hồ Chí Minh',
      district: 'Thủ Đức',
      ward: ' Linh Xuân',
      address: 'KTX Khu B ĐHQG',
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
        image: '/src/assets/image/order-img.png',
        name: 'Red Velvet Cupcake',
        price: '45.000đ',
        quantity: 1,
        date: '01-01-2023',
        orderNumber: '123456789ABCXYZ123',
        status: 'Đang vận chuyển'
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

        {/* TabContent of Customer Information Tab */}
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

                    {/* Right field include: city, district, ward and location */}
                    <div className={styles.contact__right}>

                      {/* City field */}
                      <div className={styles.subcontact}>
                        <label htmlFor="city" className='title--4'>Tỉnh/Thành phố</label>
                        <div className={styles.input__change}>
                          <div className={styles.input__item}>
                            <TextField value={userData.city} ></TextField>
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
                            <TextField value={userData.address} ></TextField>
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
                        <div>{`Phường ${userData.ward}, Quận ${userData.district}, Thành Phố ${userData.city} `}</div>
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

          {/* TabContent of Order History Tab */}
          {activeTab === 'orderHistory' && (
            <div className={styles.orderHistory}>
              {orders.map((order, index) => (

                // Style for each order
                <div key={index} className={styles.order}>

                  {/* Style for OrderID and Status */}
                  <div className={`${styles.orderID} title--3`}>
                    <div> ID đơn hàng: {order.orderNumber} </div>
                    <div>|</div>
                    <div> {order.status} </div>
                  </div>

                  {/* Style for product info */}
                  <div className={styles.product}>
                    <img src={order.image} alt={order.name} />
                    <div className={styles.product__info}>
                      <div className='title--1' style={{color: 'var(--primary-color)'}}>{order.name}</div>
                      <div className='title--3'>{order.price}</div>
                      <div className='title--3'>Số lượng: {order.quantity}</div>
                    </div>
                  </div>

                  {/* Style for order info */}
                  <div className={styles.order__info}>

                    {/* Style for delivery info */}
                    <div className={styles.delivery_info}>
                    
                      <div className={`${styles.subinfo} body--2`}><FaRegClock size="20px"/>Đơn hàng đã được giao tới bạn vào ngày {order.date}</div>
                      <div className={`${styles.subinfo} body--2`}><FaRegMap size="20px"/>Địa chỉ nhận hàng: {userData.address}, {userData.ward}, {userData.district}, {userData.city} 
                      </div>  
                    </div>

                    {/* Style for order price */}
                    <div className={styles.order_price}>
                      <div className="title--3">Thành tiền: {order.price}</div>
                      <Link to = '/support'>
                        <Button type='btn1 primary'>Đánh giá</Button>
                      </Link>
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'myOrders' && (
            // TabContent of Order Status
            <div className={styles.orderStatus}>
            {orders.map((order, index) => (

              // Style for each order
              <div key={index} className={styles.order}>

                {/* Style for OrderID and Status */}
                <div className={`${styles.orderID} title--3`}>
                  <div> ID đơn hàng: {order.orderNumber} </div>
                  <div>|</div>
                  <div> {order.status} </div>
                </div>

                {/* Style for product info */}
                <div className={styles.product}>
                  <img src={order.image} alt={order.name} />
                  <div className={styles.product__info}>
                    <div className='title--1' style={{color: 'var(--primary-color)'}}>{order.name}</div>
                    <div className='title--3'>{order.price}</div>
                    <div className='title--3'>Số lượng: {order.quantity}</div>
                  </div>
                </div>

                {/* Style for order process */}
                <div className={styles.process__container}>

                  {/* Style for confirm process */}
                  <div className={styles.process__item}>
                    <div className={styles.icon__process}>
                      <FiFileText size="40px" />
                    </div>
                    <div className={styles.process__content}>
                      <div className="title--3" style={{textAlign:'center'}}>Xác nhận đơn hàng</div>
                      <div className="body--2">09:00 01-01-2023</div>
                    </div>
                  </div>
                  
                  {/* Style for prepare process */}
                  <div className={styles.process__item}>
                    <div className={styles.icon__process}>
                      <FiBox size="40px" />
                    </div>
                    <div className={styles.process__content}>
                      <div className="title--3" style={{textAlign:'center'}}>Đơn hàng đang được chuẩn bị</div>
                      <div className="body--2">09:00 01-01-2023</div>
                    </div>
                  </div>

                  {/* Style for delivery process */}
                  <div className={styles.process__item}>
                    <div className={`${styles.icon__process} ${styles.proccessing}`}>
                      <FiTruck size="40px"/>
                    </div>
                    <div className={styles.process__content}>
                      <div className="title--3" style={{textAlign:'center'}}>Đã giao cho đơn vị vận chuyển</div>
                      <div className="body--2">09:00 01-01-2023</div>
                    </div>
                  </div>

                  {/* Style for on road process */}
                  <div className={styles.process__item}>
                    <div className={styles.icon__process}>
                      <FiInbox size="40px" />
                    </div>
                    <div className={styles.process__content}>
                      <div className="title--3" style={{textAlign:'center'}}>Đơn hàng đang trên đường tới</div>
                      <div className="body--2">09:00 01-01-2023</div>
                    </div>
                  </div>

                  {/* Style for review process */}
                  <div className={styles.process__item}>
                    <div className={styles.icon__process}>
                      <FiStar size="40px" />
                    </div>
                    <div className={styles.process__content}>
                      <div className="title--3" style={{textAlign:'center'}}>Nhận xét</div>
                    </div>
                  </div>

                  
                </div>

                {/* Style for order info */}
                <div className={styles.order__info}>

                  {/* Style for delivery info */}
                  <div className={styles.delivery_info}>
                  
                    <div className={`${styles.subinfo} body--2`}><FaRegClock size="20px"/>Đơn hàng đã được giao tới bạn vào ngày {order.date}</div>
                    <div className={`${styles.subinfo} body--2`}><FaRegMap size="20px"/>Địa chỉ nhận hàng: {userData.address}, {userData.ward}, {userData.district}, {userData.city} 
                    </div>  
                  </div>

                  {/* Style for order price */}
                  <div className={styles.order_price}>
                    <div className="title--3">Thành tiền: {order.price}</div>
                    <div className={styles.btn__recieve}>
                      <Button type='btn2 primary'>Đã nhận được hàng</Button>
                    </div>
                    <Link to = '/support'>
                      <Button type='btn2 secondary--2'>Yêu cầu trả hàng/hoàn tiền</Button>
                    </Link>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </div>
    );
}

export default Tab