import React from "react";
import { ImTruck } from "react-icons/im";
import { GiReceiveMoney } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";
export const Payment = () => {
  return (
    <div className="payment">
      <div className="container">
        <div className="payment-methods">
          <div className="payment-methods_item">
            <div className="payment-methods_item-icon">
              <div className="icon-1">
                <ImTruck />
              </div>
              <div className="icon-2">
                <ImTruck />
              </div>
            </div>
            <div className="payment-methods_item-desc">
              <p className="title">Free Delevery</p>
              <p className="desc">Free Shipping On All Order</p>
            </div>
          </div>
          <div className="payment-methods_item">
            <div className="payment-methods_item-icon">
              <div className="icon-1">
                <GiReceiveMoney />
              </div>
              <div className="icon-2">
                <GiReceiveMoney />
              </div>
            </div>
            <div className="payment-methods_item-desc">
              <p className="title">Money Return</p>
              <p className="desc">Back Guarantee in 7 days</p>
            </div>
          </div>
          <div className="payment-methods_item">
            <div className="payment-methods_item-icon">
              <div className="icon-1">
                <MdAttachMoney />
              </div>
              <div className="icon-2">
                <MdAttachMoney />
              </div>
            </div>
            <div className="payment-methods_item-desc">
              <p className="title">Member Discount</p>
              <p className="desc">On every order over $130.00</p>
            </div>
          </div>
          <div className="payment-methods_item">
            <div className="payment-methods_item-icon">
              <div className="icon-1">
                <TbDiscount2 />
              </div>
              <div className="icon-2">
                <TbDiscount2 />
              </div>
            </div>
            <div className="payment-methods_item-desc">
              <p className="title">Return Policy</p>
              <p className="desc">Support 24 hours a day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
