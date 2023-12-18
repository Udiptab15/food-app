import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'font-awesome/css/font-awesome.min.css'; 
import './owl.css';

class HomeCarousel extends React.Component {
  render() {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      prevArrow: <button className="slick-prev"><i className="fa fa-chevron-left"></i></button>,
      nextArrow: <button className="slick-next"><i className="fa fa-chevron-right"></i></button>,
    };

    return (
      <div>
        <div className="container-fluid" style={{ padding: "120px", width: "1100px", height: "500px" }}>
          <Slider {...sliderSettings}>
            <div>
              <img className="img" src={"./image1.png"} style={{ marginBottom: "10px" }} alt="Home-Made" />
              <h5 style={{ color: "white" }}>Home-Made</h5>
              <h5 className='d-flex justify-content-center'><p style={{ color: "yellow" }}>$</p><p style={{ color: "white" }}>10</p></h5>
            </div>
            <div>
              <img className="img" src={"./image2.png"} style={{ marginBottom: "10px" }} alt="Noodles" />
              <h5 style={{ color: "white" }}>Noodles</h5>
              <h5 className='d-flex justify-content-center'><p style={{ color: "yellow" }}>$</p><p style={{ color: "white" }}>20</p></h5>
            </div>
            <div>
              <img className="img" src={"./image3.png"} style={{ marginBottom: "10px" }} alt="Egg" />
              <h5 style={{ color: "white" }}>Egg</h5>
              <h5 className='d-flex justify-content-center'><p style={{ color: "yellow" }}>$</p><p style={{ color: "white" }}>30</p></h5>
            </div>
            <div>
              <img className="img" src={"./image4.png"} style={{ marginBottom: "10px" }} alt="Sushi Dry" />
              <h5 style={{ color: "white" }}>Sushi Dry</h5>
              <h5 className='d-flex justify-content-center'><p style={{ color: "yellow" }}>$</p><p style={{ color: "white" }}>40</p></h5>
            </div>
            <div>
              <img className="img" src={"./image5.png"} style={{ marginBottom: "10px" }} alt="The Coffee Break" />
              <h5 style={{ color: "white" }}>The Coffee Break</h5>
              <h5 className='d-flex justify-content-center'><p style={{ color: "yellow" }}>$</p><p style={{ color: "white" }}>50</p></h5>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default HomeCarousel;
