import React, { Fragment } from "react";
import "./footer.css";
import { SlLocationPin } from "react-icons/sl";
import { FiMail } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";
import fb from "../../images/fb.jpg";
import gmail from "../../images/gmail.jpg";
import linkedn from "../../images/linkedn.png";
import youtube from "../../images/youtube.png";
import { Link } from "react-router-dom";
import visa from "../../images/visa.png";
import mastercard from "../../images/mastercard.jpg";
import paypal from "../../images/paypall.png";
import discover from "../../images/discover.png";
import { ImMail2 } from "react-icons/im";
const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className="footer-container">
          <div className="footer-contact">
            <h6>Contact info</h6>
            <div className="contact-data">
              <ul>
                <li className="ficon">
                  <SlLocationPin />
                  <p> 123 Street, Old Trafford, NewYork, USA</p>
                </li>
                <li className="ficon">
                  <FiMail />
                  <Link to={""}> info@sitename.com</Link>
                </li>
                <li className="ficon">
                  <FaMobileAlt />
                  <p>+ 457 789 789 65</p>
                </li>
              </ul>
              <div className="contact-icons">
                <Link to={"#"}>
                  <img src={fb} alt="" />
                </Link>
                <Link to={"#"}>
                  <img src={youtube} alt="" />
                </Link>
                <Link to={"#"}>
                  <img src={gmail} alt="" />
                </Link>
                <Link to={"#"}>
                  <img src={linkedn} alt="" />
                </Link>
              </div>
            </div>

            <div className="contact-icons">
              <ul>
                <Link to={""}></Link>
                <Link to={""}></Link>
                <Link to={""}></Link>
              </ul>
            </div>
          </div>
          <div className="useful-contact">
            <h6>useful links</h6>
            <div className="useful-links">
              <ul>
                <li>about us</li>
                <li>FAQ</li>
                <li>location</li>
                <li>afflities</li>
                <li>contact</li>
              </ul>
            </div>
          </div>

          <div className="myaccount">
            <h6>my account</h6>

            <div className="accountUl">
              <ul>
                <li>my account</li>
                <li>discount</li>
                <li>returns</li>
                <li>orders history</li>
                <li>orders tracking</li>
              </ul>
            </div>
          </div>

          <div className="newsletter">
            <h6>Subscribe our newsletter</h6>
            <p>
              If you want to get an email from us every time we have a new
              special offer, then sign up here!
            </p>
            <div className="inputmail">
              
            </div>
            <input type="email" placeholder="Enter Your Email" />
            <ImMail2 size={25} style={{position:'absolute' ,top:'227',right:'45px',color:'ff324d',cursor:'pointer'}}/>
          </div>
        </div>

        <div className="footer-line"></div>
        <div className="footer-end">
          <div className="copyRights">
            <p>© 2020 All Rights Reserved by Bestwebcreator</p>
          </div>
          <div className="creditcards">
            <img src={visa} alt="" />
            <img src={mastercard} alt="" />
            <img src={paypal} alt="" />
            <img src={discover} alt="" />
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
//  <div className="footer-line"></div>
// <div className="footer-end">
//  <div className="copyRights">
//    <h3>© 2020 All Rights Reserved by Bestwebcreator</h3>
//  </div>
//  <div className="creditcards">
//      <img src={visa} alt="" />
//      <img src={mastercard} alt="" />
//      <img src={paypal} alt="" />
//      <img src={discover} alt="" />
//    </div>
//        </div>
