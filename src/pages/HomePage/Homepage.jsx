import React from "react";
import { DiscountBanner } from "../../components/DiscountBanner/DiscountBanner";
// import { Header } from "./components/Header/Header";
import { Payment } from "../../components/Payment/Payment";
import { SliderCarousel } from "../../components/Slider/Slider";
import bannergame01 from "../../assets/img/bannergame01.jpg";
import bannergame02 from "../../assets/img/bannergame02.jpg";
import bannergame03 from "../../assets/img/bannergame03.jpg";
import bannergame04 from "../../assets/img/bannergame04.jpg";
import { Category } from "../../components/Category/Category";
import { OutProduct } from "../../components/Products/OutProduct";
import { DearDay } from "../../components/Products/DearDay";
import { Member } from "../../components/Member/Member";
import { LogoSlide } from "../../components/LogoSlide/LogoSlide";
export const Homepage = () => {
  return (
    <>
      <SliderCarousel />
      <Payment />
      <DiscountBanner img1={bannergame01} img2={bannergame02} />
      <Category />
      <OutProduct />
      <DiscountBanner img1={bannergame03} img2={bannergame04} />
      <DearDay />
      <Member />
      <LogoSlide />
    </>
  );
};
