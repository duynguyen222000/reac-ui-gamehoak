import React from "react";
export const DiscountBanner = (props) => {
  const { img1, img2 } = props;

  return (
    <div className="discount-banner">
      <div className="container">
        <div className="list-banner">
          <div className="banner list-banner_fisrt">
            <div className="banner_img">
              <img src={img1} alt="" />
            </div>
            <div className="banner_content">
              <div className="banner_content-title">
                <p>Most Popular</p>
              </div>
              <div className="banner_content-heading">
                <p>The Battlefield 4 Naval Strike</p>
              </div>
            </div>
          </div>
          <div className="banner list-banner_fisrt">
            <div className="banner_img">
              <img src={img2} alt="" />
            </div>
            <div className="banner_content">
              <div className="banner_content-title">
                <p>Most Popular</p>
              </div>
              <div className="banner_content-heading">
                <p>The Battlefield 4 Naval Strike</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
