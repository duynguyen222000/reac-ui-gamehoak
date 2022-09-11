import React from "react";
export const DiscountBanner = (props) => {
  const { bannergame01, bannergame02 } = props.img;

  return (
    <div className="discount-banner">
      <div className="container">
        <div className="list-banner">
          <div className="banner list-banner_fisrt">
            <div className="banner_img">
              <img src={bannergame02} alt="" />
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
              <img src={bannergame01} alt="" />
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
