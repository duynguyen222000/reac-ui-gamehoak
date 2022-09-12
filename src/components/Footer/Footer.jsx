import React, { useState, useEffect } from "react";
import footer from "../../assets/img/footer.png";
import {
  AiOutlineSend,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillSkype,
} from "react-icons/ai";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import {
  MdLocationOn,
  MdPhone,
  MdMail,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
export const Footer = () => {
  const [address, setAddress] = useState(true);
  const [infor, setInfor] = useState(true);
  const [extra, setExtra] = useState(true);
  useEffect(() => {
    if (window.screen.width < 1000) {
      setAddress(false);
      setExtra(false);
      setInfor(false);
    }
  }, []);
  useEffect(() => {
    const handleToggle = () => {
      if (window.screen.width < 1024) {
      } else {
        setAddress(true);
        setExtra(true);
        setInfor(true);
      }
    };
    window.addEventListener("resize", handleToggle);

    return () => {
      window.removeEventListener("resize", handleToggle);
    };
  }, []);

  return (
    <footer style={{ background: `url(${footer}) top/cover no-repeat` }}>
      <div className="container">
        <div className="footer-top">
          <div className="footer-top_address w-25">
            <h3
              onClick={() => {
                setAddress(!address);
              }}
              className="footer-top_address-heading heading"
            >
              Address Info {!address && <MdOutlineKeyboardArrowDown />}
            </h3>
            {address ? (
              <>
                <p className="footer-top_address-location title">
                  <span>
                    <MdLocationOn />
                  </span>
                  Đức Tân - Mộ Đức Quảng Ngãi
                </p>
                <p className="footer-top_address-phone title">
                  <span>
                    <MdPhone />
                  </span>
                  038-223-0633
                </p>
                <a href="" className="footer-top_address-mail title">
                  <span>
                    <MdMail />
                  </span>
                  nguyenducduy02022000@gmail.com
                </a>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="footer-top_information w-25">
            <div className="footer-top_information-heading heading">
              <h3
                onClick={() => {
                  setInfor(!infor);
                }}
                className="heading"
              >
                Information
                {!infor && <MdOutlineKeyboardArrowDown />}
              </h3>
            </div>
            {infor && (
              <ul className="footer-top_information-list">
                <li className="title">
                  <a href="">Bookmark</a>
                </li>
                <li className="title">
                  <a href="">Features</a>
                </li>
                <li className="title">
                  <a href="">Sitemap</a>
                </li>
                <li className="title">
                  <a href="">Lists</a>
                </li>
                <li className="title">
                  <a href="">Contact Us</a>
                </li>
              </ul>
            )}
          </div>
          <div className="footer-top_information w-25">
            <div className="footer-top_information-heading heading">
              <h3
                onClick={() => {
                  setExtra(!extra);
                }}
                className="heading"
              >
                Extras
                {!extra && <MdOutlineKeyboardArrowDown />}
              </h3>
            </div>
            {extra && (
              <ul className="footer-top_information-list">
                <li className="title">
                  <a href="">Delivery</a>
                </li>
                <li className="title">
                  <a href="">Cart</a>
                </li>
                <li className="title">
                  <a href="">Terms</a>
                </li>
                <li className="title">
                  <a href="">My account</a>
                </li>
                <li className="title">
                  <a href="">About us</a>
                </li>
              </ul>
            )}
          </div>
          <div className="footer-top_contact w-25">
            <h3 className="footer-top_contact-heading heading">
              Our Newsletter
            </h3>
            <p className="footer-top_contact-desc title">
              There are many variations of passages of form humour or randomised
            </p>
            <div className="footer-top_contact-input">
              <input type="text" />
              <div className="icon-send">
                <AiOutlineSend />
              </div>
            </div>
            <div className="footer-top_contact-icon">
              <div className="icon-item">
                <FaFacebookF />
              </div>
              <div className="icon-item">
                <FaGooglePlusG />
              </div>
              <div className="icon-item">
                <AiFillInstagram />
              </div>
              <div className="icon-item">
                <AiOutlineTwitter />
              </div>
              <div className="icon-item">
                <AiFillSkype />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
