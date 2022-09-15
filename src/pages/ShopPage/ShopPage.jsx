import React from "react";
import { Link } from "react-router-dom";
import { ProductItem } from "../../components/Products/ProductItem";

export const ShopPage = () => {
  return (
    <div className="shoppage">
      <div className="container">
        <div className="shop-heading">
          <div className="shop-heading-left">
            <Link to="/home">Home</Link>
            <span> / </span>
            <span>Shop</span>
          </div>
          <p className="shop-heading-right">Shop</p>
        </div>
        <div className="shop">
          <div className="shop-sidebar">Shop By Category</div>
          <div className="shop-product">
            <div className="shop-product_list">
              <div className="shop-product_list-item">
                <ProductItem />
              </div>
              <div className="shop-product_list-item">
                <ProductItem />
              </div>
              <div className="shop-product_list-item">
                <ProductItem />
              </div>
              <div className="shop-product_list-item">
                <ProductItem />
              </div>
              <div className="shop-product_list-item">
                <ProductItem />
              </div>
              <div className="shop-product_list-item">
                <ProductItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
