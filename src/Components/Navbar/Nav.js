import React, { Fragment, useState } from "react";
import "./nav.css";
import { IoMdPhonePortrait } from "react-icons/io";
import arrowdown from "../../../src/images/arrowdown.png";
import unitedkingdom from "../../../src/images/unitedkingdom.png";
import logo_dark from "../../../src/images/logo_dark.png";
import { IoShuffle } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

import { useSelector } from "react-redux";

import { NavLink, Link } from "react-router-dom";
const Nav = () => {
  const [menu, setmenu] = useState(false);
  const [changeMenu, setchange] = useState(false);
  const [close, setclose] = useState(false);
  const [homedrop, sethdrop] = useState(false);
  const [scrollbtn, setScroll] = useState(false);
  // const [homeenter,sethoenter]=useState(false)
  // const [homeleave,sethleave]=useState(false)
  const [pagesdrop, setpdrop] = useState(false);

  window.addEventListener("resize", (e) => {
    let windowsize = e.currentTarget.innerWidth;
    windowsize <= 800 ? setmenu(true) : setmenu(false);
  });

  window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    let windowScroll = window.scrollY;
    windowScroll >= 50 ? setScroll(true) : setScroll(false);
  });
  const changemenu = () => {
    setchange(!changeMenu);
    setclose(!close);
  };
  const homeDrop = () => {
    sethdrop(!homedrop);
  };
 
  const pagesDrop = () => {
    setpdrop(!pagesdrop);
  };
  const [cartdrop, setcartdrop] = useState(false);
  const cartProducts = useSelector((state) => state.cart.cart);
  const numberofproducts = useSelector((state) => state.cart.cart).length;
  const cartclick = () => {
    setcartdrop(!cartdrop);
  };
  return (
    <Fragment>
      <header>
        {scrollbtn ? (
          <BsFillArrowUpSquareFill
            size={36}
            style={{
              position: "fixed",
              right: "20",
              bottom: "0",
              cursor: "pointer",
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        ) : undefined}
        <nav
          className="navone"
          style={scrollbtn ? { display: "none" } : undefined}
        >
          <ul>
            <div className="lang">
              <span>
                <img src={unitedkingdom} alt="" />
                English
              </span>
              <span>
                USD
                <img src={arrowdown} alt="" />
              </span>
              <span>
                123-456-7890
                <IoMdPhonePortrait size={20} />
              </span>
            </div>
            <div className="profile">
              <NavLink to={"/compare"}>
                {" "}
                <IoShuffle
                  size={25}
                  style={{ color: "#292b2c", textAlign: "center" }}
                />
                compare
              </NavLink>
              <NavLink to={"/wishlist"}>
                {" "}
                <FaRegHeart
                  size={25}
                  style={{ color: "#292b2c", textAlign: "center" }}
                />
                wishlist
              </NavLink>
              <NavLink to={"/login"}>
                {" "}
                <FaUser
                  size={25}
                  style={{ color: "#292b2c", textAlign: "center" }}
                />
                login
              </NavLink>
            </div>
          </ul>
        </nav>
        <hr />

        <nav className="navtwo">
          <div className="navoptions">
            <div className="logo">
              <img src={logo_dark} alt="" />
            </div>

            <ul
              style={menu ? { display: "none" } : undefined}
              className={changeMenu ? "menuoptions" : undefined}
            >
              <NavLink to={"/home"} onClick={() => homeDrop()}>
                home
                <img src={arrowdown} alt="" />
                {homedrop ? (
                  <div className="dropdown-home">
                    <ul className="homeDropdown">
                      <li>
                        <Link to={"#"}>fashion 1</Link>
                      </li>
                      <li>
                        <Link to={"#"}>fashion 2</Link>
                      </li>
                      <li>
                        <Link to={"#"}>fashion 3</Link>
                      </li>
                      <li>
                        <Link to={"#"}>fashion 4</Link>
                      </li>
                    </ul>
                  </div>
                ) : undefined}
              </NavLink>
              <NavLink to={"/pages"} onClick={() => pagesDrop()}>
                pages <img src={arrowdown} alt="" />
                {pagesdrop ? (
                  <div className="dropdown-pages">
                    <ul className="pagesDropdown">
                      <li>
                        <Link to={"#"}>home</Link>
                      </li>
                      <li>
                        <Link to={"#"}>about</Link>
                      </li>
                      <li>
                        <Link to={"/register"}>register</Link>
                      </li>
                      <li>
                        <Link to={"/login"}>login</Link>
                      </li>
                    </ul>
                  </div>
                ) : undefined}
              </NavLink>
              <NavLink to={"/product"}>
                products <img src={arrowdown} alt="" />
              </NavLink>
              <NavLink to={"/register"}>
                register <img src={arrowdown} alt="" />
              </NavLink>
              <NavLink to={"/login"}>
                Login <img src={arrowdown} alt="" />
              </NavLink>
              <NavLink to={"/contact us"}>
                {" "}
                contact us <img src={arrowdown} alt="" />
              </NavLink>
            </ul>
          </div>
          <div className="icons">
            <CiSearch size={30} />
            <NavLink to={"/cart"}>
              {" "}
              <IoCartOutline
                size={30}
                style={{ color: "#292b2c" }}
                onClick={() => cartclick()}
              />
              {numberofproducts}{" "}
            </NavLink>
            {cartdrop ? (
              <div className="dropdown-cart">
                <ul className="dropdowncart">
                  {cartProducts.map((el) => (
                    <div key={el.id} className="cartdrop">
                      <h2>price :{el.price}</h2>
                      <img src={el.image} alt="" />
                    </div>
                  ))}
                </ul>
              </div>
            ) : undefined}

            {menu ? (
              close ? (
                <IoClose
                  size={28}
                  style={{ cursor: "pointer" }}
                  onClick={() => changemenu()}
                />
              ) : (
                <IoMdMenu
                  size={28}
                  style={{ cursor: "pointer" }}
                  onClick={() => changemenu()}
                />
              )
            ) : undefined}
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Nav;
