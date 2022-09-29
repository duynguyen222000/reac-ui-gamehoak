import React, { useState, useEffect } from "react";
import {
  FaViber,
  FaPhoneAlt,
  FaArrowDown,
  FaSearch,
  FaCartPlus,
  FaUserAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
export const Header = () => {
  const [show, setShow] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    const getHeight = () => {
      if (window.scrollY > 180) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
    window.addEventListener("scroll", getHeight);
    return () => {
      window.removeEventListener("scroll", getHeight);
    };
  }, []);

  return (
    <>
      <header>
        <div className="header_contact-top">
          <div className="container">
            <div className="header_contact">
              <div className="header_contact-left">
                <div className="wishlist">
                  <p>Wishlist(0)</p>
                </div>
                <div className="needhelp">
                  <p
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    Need Help? <FaArrowDown />
                  </p>
                  <ul className={show ? "list_phone show" : "list_phone "}>
                    <li className="list_phone-number">
                      <FaPhoneAlt />
                      000-00-0000
                    </li>
                    <li className="list_phone-number">
                      <FaPhoneAlt />
                      000-00-0012
                    </li>
                    <li className="list_phone-number">
                      <FaViber />
                      000-00-0013
                    </li>
                    <li className="list_phone-number">
                      <FaViber />
                      000-00-0014
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header_contact-right">
                <p>Call 24/7 . 800-8754-987</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`header_main-bottom ${fixed ? "fixed" : ""}`}>
          <div className="container">
            {/* header main */}
            <div className="header_main">
              <div
                onClick={() => {
                  setShowNav(true);
                }}
                className="header_main-bars"
              >
                <FaBars />
              </div>
              <div className="header_main-logo">
                <NavLink to="/">
                  <img src={logo} alt="" />
                </NavLink>
              </div>
              <ul className={`header_main-nav ${showNav ? "show" : "hide"}`}>
                <li
                  onClick={() => {
                    setShowNav(false);
                  }}
                  className="nav-cancel"
                >
                  <ImCancelCircle />
                </li>
                <li>
                  <NavLink
                    onClick={() => {
                      setShowNav(false);
                    }}
                    active="true"
                    to="home"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => {
                      setShowNav(false);
                    }}
                    active="true"
                    to="shop"
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => {
                      setShowNav(false);
                    }}
                    active="true"
                    to="blog"
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => {
                      setShowNav(false);
                    }}
                    active="true"
                    to="media"
                  >
                    Media
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => {
                      setShowNav(false);
                    }}
                    active="true"
                    to="shortcode"
                  >
                    ShortCode
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => {
                      setShowNav(false);
                    }}
                    active="true"
                    to="feature"
                  >
                    Features
                  </NavLink>
                </li>
              </ul>
              <div className="header_main-user">
                <div className="header_main-user__search spacing">
                  {showSearch ? (
                    <FaTimes
                      onClick={() => {
                        setShowSearch(!showSearch);
                      }}
                    />
                  ) : (
                    <FaSearch
                      onClick={() => {
                        setShowSearch(!showSearch);
                      }}
                    />
                  )}

                  {showSearch ? (
                    <div className="search-input">
                      <input placeholder="search..." type="text" />
                      <FaSearch />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="header_main-user__account spacing">
                  <FaUserAlt
                    onClick={() => {
                      setShowLogin(!showLogin);
                    }}
                  />
                  {!showLogin || (
                    <div className="account">
                      <div className="login">
                        <Link to="login">Login</Link>
                      </div>
                      <div className="register">
                        <Link to="register">Register</Link>
                      </div>
                    </div>
                  )}
                </div>
                <div className="header_main-user__cart spacing">
                  <FaCartPlus />{" "}
                  <span className="cart-color">
                    (0) <span className="price">0.0$</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
