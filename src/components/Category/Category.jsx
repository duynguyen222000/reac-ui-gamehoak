import React from "react";
import Slider from "react-slick";
import cate01 from "../../assets/img/cate01.jpg";
import cate02 from "../../assets/img/cate02.jpg";
import cate03 from "../../assets/img/cate03.jpg";
export const Category = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="category">
      <div className="category-text">Category</div>
      <div className="container">
        <Slider {...settings}>
          <div className="slide-item">
            <div className="slide-item-img">
              <img src={cate01} alt="" />
            </div>
            <div className="slide-item_content">
              <p className="slide-item_content-name">Batman</p>
              <a href="">Shop Now</a>
            </div>
          </div>
          <div className="slide-item">
            <div className="slide-item-img">
              <img src={cate02} alt="" />
            </div>
            <div className="slide-item_content">
              <p className="slide-item_content-name">Bayonetta</p>
              <a href="">Shop Now</a>
            </div>
          </div>
          <div className="slide-item">
            <div className="slide-item-img">
              <img src={cate03} alt="" />
            </div>
            <div className="slide-item_content">
              <p className="slide-item_content-name">Dark Souls</p>
              <a href="">Shop Now</a>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
