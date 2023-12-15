import React from 'react'
import Navbar from '../../components/header/NavBar'
import './Introduction.css'
import store01 from '../../assets/image/store01.jpg';
import store02 from '../../assets/image/store02.png';
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer';

export default function Introduction() {
  return (
    <>
      <Navbar />
      <div className="center">
        <div className="page">
          <div className="navigation">
            <Link className='navigation__item' to={'/'}>Trang chủ</Link>
            <p>|</p>
            <Link className='navigation__item' to={'/support'}>Giới thiệu</Link>
          </div>
          <div className="center">
            <div className="it-content">
              <div className="content__image">
                <img src={store01} alt="store01" className="content__paragraph-img01" />
              </div>
              <div className="content__text">
                <h2 className='content__header heading'>Câu chuyện về Bông cake</h2>
                <p className='content__paragraph body--1'>
                  <strong className='brandName heading'>Bông Cake</strong> ra đời không chỉ để bán đơn giản là bánh ngọt, mà là để tạo ra những tác phẩm nghệ thuật đẹp mắt và ngon miệng. Cửa hàng được thành lập bởi một nhóm những bạn trẻ đam mê nghệ thuật nướng bánh và yêu thích sáng tạo trong mỗi chi tiết. Bông Cake chú trọng vào việc kết hợp hương vị tuyệt vời với thiết kế tinh tế để tạo ra những bánh ngọt không chỉ là món ăn bình thường mà còn là tác phẩm nghệ thuật.
                </p>
                <p className='content__paragraph body--1'>
                  Tên "<strong className='brandName heading'>Bông Cake</strong>" không chỉ đơn giản là một cái tên, mà là một biểu tượng cho tinh thần tinh tế và đẹp mắt mà chúng tôi đặt vào từng chiếc bánh. Đằng sau mỗi chiếc bánh, là những giọt mồ hôi, những giờ đêm thức trắng để tìm ra công thức hoàn hảo. Chúng tôi không ngừng học hỏi, không ngừng hoàn thiện, và luôn dấn thân để tạo ra những sản phẩm tốt nhất. Từ việc lựa chọn nguyên liệu tốt nhất, đến việc trang trí bánh với sự tinh tế và sáng tạo, tất cả đều được thực hiện với tâm huyết.
                </p>
              </div>
            </div>
            <div className="it-content">
              <div className="content__image">
                <img src={store02} alt="store02" className="content__paragraph-img02" />
              </div>
              <div className="content__text">
                <h2 className='content__header heading'>Câu chuyện về Bông cake</h2>
                <h3 className='content__subhead body--1'>
                    Tầm nhìn
                  </h3>
                <p className='content__paragraph body--1'>
                  Trở thành một thương hiệu nổi tiếng và uy tín trong lĩnh vực bánh ngọt trên toàn quốc. Chúng tôi muốn lan tỏa niềm đam mê và tình yêu với bánh ngọt, tạo ra những trải nghiệm độc đáo cho khách hàng thông qua sản phẩm của chúng tôi. Chúng tôi luôn cố gắng để đem đến cho mọi người những bánh ngọt ngon và đẹp nhất, làm hài lòng cả vị giác và thị giác.
                </p>
                <h3 className='content__subhead body--1'>
                  Sứ mệnh
                  </h3>
                <p className='content__paragraph body--1'>
                  Sứ mệnh của <strong className='brandName heading'>Bông Cake</strong> là đem đến niềm vui và hạnh phúc cho mọi người thông qua những chiếc bánh ngọt tinh tế và ngon miệng. Chúng tôi cam kết sử dụng những nguyên liệu tốt nhất, kỹ thuật nướng bánh hàng đầu, và lòng nhiệt huyết để tạo ra những sản phẩm chất lượng cao. Chúng tôi muốn mỗi chiếc bánh của chúng tôi là món quà ý nghĩa cho các dịp quan trọng trong cuộc sống của khách hàng.
                </p>
                <h3 className='content__subhead body--1'>
                  Giá trị cốt lõi
                  </h3>
                <p className='content__paragraph body--1'>
                  Sáng tạo: Luôn tạo ra những sản phẩm mới mẻ và độc đáo, luôn tìm cách để làm cho mỗi chiếc bánh trở nên đặc biệt.
                </p>
                <p className='content__paragraph body--1'>
                  Chất lượng: Chất lượng là yếu tố quan trọng nhất đối với <strong className='brandName heading'>Bông Cake</strong>. Chúng tôi sử dụng nguyên liệu tươi ngon và tuân thủ các tiêu chuẩn nghiêm ngặt trong quá trình sản xuất.
                </p>
                <p className='content__paragraph body--1'>
                  Tận tâm: Luôn lắng nghe và tôn trọng ý kiến của khách hàng, để có thể phục vụ họ tốt nhất.
                </p>
                <p className='content__paragraph body--1'>
                  Nghệ thuật: Xem việc tạo ra những chiếc bánh ngọt như một nghệ thuật, và chúng tôi tạo ra những tác phẩm nghệ thuật bằng tâm huyết và sự đam mê.
                </p>
                <p className='content__paragraph body--1'>
                  <strong className='brandName heading'>Bông Cake</strong> xin chân thành cảm ơn sự ủng hộ của quý khách hàng, và chúng tôi hy vọng sẽ tiếp tục đồng hành cùng bạn trong những khoảnh khắc ngọt ngào và đặc biệt trong cuộc sống.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
