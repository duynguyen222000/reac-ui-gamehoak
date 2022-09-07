import React from "react";
import Slider from "react-slick";
import banner1 from "../../assets/img/banner01.jpg";
import banner2 from "../../assets/img/banner02.jpg";

export const SliderCarousel = () => {
  var settings = {
    accessibility: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: true,
    fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-carousel">
      <Slider {...settings}>
        <div className="slider-main">
          <img src={banner2} alt="" />
          <div className="slide-block">
            <div className="title">Upcomming Stock</div>
            <div className="heading">New Jump Force Goku</div>
            <a className="btn " href="">
              Shop now
            </a>
          </div>
        </div>
        <div className="slider-main">
          <img src={banner1} alt="" />
          <div className="slide-block">
            <div className="title">Upcomming Stock</div>
            <div className="heading">Resident Evil 3 Remake</div>
            <a className="btn " href="">
              Shop now
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
};
