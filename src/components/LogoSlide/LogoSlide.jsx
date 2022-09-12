import React from "react";
import brand01 from "../../assets/img/brand01.png";
import brand02 from "../../assets/img/brand02.png";
import brand03 from "../../assets/img/brand03.png";
import brand04 from "../../assets/img/brand04.png";
import brand05 from "../../assets/img/brand05.png";

import Slider from "react-slick";
export const LogoSlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="logoslide">
      <div className="container ">
        <div className="border-slide">
          <Slider {...settings}>
            <div className="slide-brand">
              <div className="brand">
                <img src={brand01} alt="" />
              </div>
            </div>
            <div className="slide-brand">
              <div className="brand">
                <img src={brand02} alt="" />
              </div>
            </div>
            <div className="slide-brand">
              <div className="brand">
                <img src={brand03} alt="" />
              </div>
            </div>
            <div className="slide-brand">
              <div className="brand">
                <img src={brand04} alt="" />
              </div>
            </div>
            <div className="slide-brand">
              <div className="brand">
                <img src={brand05} alt="" />
              </div>
            </div>
            <div className="slide-brand">
              <div className="brand">
                <img src={brand01} alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
