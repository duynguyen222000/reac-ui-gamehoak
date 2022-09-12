import React from "react";
import Slider from "react-slick";
import product1 from "../../assets/img/product1.jpg";
import product2 from "../../assets/img/product2.jpg";
import banner01 from "../../assets/img/banner01.jpg";
import { IoBagHandleSharp, IoHeart, IoEyeSharp } from "react-icons/io5";
import { ImEnlarge } from "react-icons/im";
export const Product = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="slide-product">
        <Slider {...settings}>
          <div className="product-item">
            <div className="product-item_img">
              <img src={product2} alt="" />
            </div>
            <div className="product-item_infor">
              <div className="product-item_infor-rate">****</div>
              <p className="product-item_infor-name">
                Shopping Mahjong connect
              </p>
              <p className="product-item_infor-price">$100.00</p>
            </div>
            <div className="product-item_cart">
              <div className="product-item_cart-icon">
                <IoBagHandleSharp />
              </div>
              <div className="product-item_cart-icon">
                <IoHeart />
              </div>
              <div className="product-item_cart-icon">
                <ImEnlarge />
              </div>
              <div className="product-item_cart-icon">
                <IoEyeSharp />
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="product-item_img">
              <img src={product1} alt="" />
            </div>
            <div className="product-item_infor">
              <div className="product-item_infor-rate">****</div>
              <p className="product-item_infor-name">
                Shopping Mahjong connect
              </p>
              <p className="product-item_infor-price">$100.00</p>
            </div>
            <div className="product-item_cart">
              <div className="product-item_cart-icon">
                <IoBagHandleSharp />
              </div>
              <div className="product-item_cart-icon">
                <IoHeart />
              </div>
              <div className="product-item_cart-icon">
                <ImEnlarge />
              </div>
              <div className="product-item_cart-icon">
                <IoEyeSharp />
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="product-item_img">
              <img src={product2} alt="" />
            </div>
            <div className="product-item_infor">
              <div className="product-item_infor-rate">****</div>
              <p className="product-item_infor-name">
                Shopping Mahjong connect
              </p>
              <p className="product-item_infor-price">$100.00</p>
            </div>
            <div className="product-item_cart">
              <div className="product-item_cart-icon">
                <IoBagHandleSharp />
              </div>
              <div className="product-item_cart-icon">
                <IoHeart />
              </div>
              <div className="product-item_cart-icon">
                <ImEnlarge />
              </div>
              <div className="product-item_cart-icon">
                <IoEyeSharp />
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="product-item_img">
              <img src={product1} alt="" />
            </div>
            <div className="product-item_infor">
              <div className="product-item_infor-rate">****</div>
              <p className="product-item_infor-name">
                Shopping Mahjong connect
              </p>
              <p className="product-item_infor-price">$100.00</p>
            </div>
            <div className="product-item_cart">
              <div className="product-item_cart-icon">
                <IoBagHandleSharp />
              </div>
              <div className="product-item_cart-icon">
                <IoHeart />
              </div>
              <div className="product-item_cart-icon">
                <ImEnlarge />
              </div>
              <div className="product-item_cart-icon">
                <IoEyeSharp />
              </div>
            </div>
          </div>
          <div className="product-item">
            <div className="product-item_img">
              <img src={product2} alt="" />
            </div>
            <div className="product-item_infor">
              <div className="product-item_infor-rate">****</div>
              <p className="product-item_infor-name">
                Shopping Mahjong connect
              </p>
              <p className="product-item_infor-price">$100.00</p>
            </div>
            <div className="product-item_cart">
              <div className="product-item_cart-icon">
                <IoBagHandleSharp />
              </div>
              <div className="product-item_cart-icon">
                <IoHeart />
              </div>
              <div className="product-item_cart-icon">
                <ImEnlarge />
              </div>
              <div className="product-item_cart-icon">
                <IoEyeSharp />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
