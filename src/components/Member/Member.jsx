import React from "react";
import parallax from "../../assets/img/parallax.jpg";
import avt from "../../assets/img/avt.jpg";
import avt2 from "../../assets/img/avt2.jpg";
import avt3 from "../../assets/img/avt3.jpg";
import Slider from "react-slick";

export const Member = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div
      className="member"
      style={{ background: `url(${parallax}) center/cover no-repeat` }}
    >
      <div className="container">
        <div>
          <Slider {...settings}>
            <div className="slider-member">
              <div className="member-item">
                <div className="member-item_avatar">
                  <img src={avt} alt="" />
                </div>
                <div className="member-item_infor">
                  Nguyễn Đức Duy <span>(Fresher Manager)</span>
                </div>
                <p className="member-item_desc">
                  "Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting"
                </p>
              </div>
            </div>
            <div className="slider-member">
              <div className="member-item">
                <div className="member-item_avatar">
                  <img src={avt2} alt="" />
                </div>
                <div className="member-item_infor">
                  Reema Ghurde <span>(Senior Manager)</span>
                </div>
                <p className="member-item_desc">
                  "Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
            <div className="slider-member">
              <div className="member-item">
                <div className="member-item_avatar">
                  <img src={avt3} alt="" />
                </div>
                <div className="member-item_infor">
                  Reema Ghurde <span>(Junior Manager)</span>
                </div>
                <p className="member-item_desc">
                  "Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting"
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
