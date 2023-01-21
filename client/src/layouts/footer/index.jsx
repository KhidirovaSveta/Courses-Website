import React from "react";
import footerLogo from "../../img/logo.png.webp";
import { NavLink } from "react-router-dom";
import "./index.scss";
const Footer = () => {
  return (
    <div id="Footer">
      <div className="container">
        <div className="footer">
          <div className="footer-info">
            <div className="courseslogo">
              <img src={footerLogo} alt="" />
              <p className="footer-txt">
                The automated process starts as soon as your clothes go into the
                machine.
              </p>

              {/* social media links */}
              <div className="social-media">
                <div className="twit tvt">
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="twit rest tvt">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className="twit rest">
                  <i className="fa-brands fa-pinterest-p"></i>
                </div>
              </div>
            </div>

            <div className="links">
              {/* Our solutions */}
              <div className="ourSolutions">
                <ul>
                  <li className="solutions">Our solutions</li>
                  <li>
                    <NavLink>Design & creatives</NavLink>
                  </li>
                  <li>
                    <NavLink>Telecommunication</NavLink>
                  </li>
                  <li>
                    <NavLink>Restaurant</NavLink>
                  </li>
                  <li>
                    <NavLink>Programing</NavLink>
                  </li>
                  <li>
                    <NavLink>Architecture</NavLink>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div className="ourSolutions">
                <ul>
                  <li className="solutions">Support</li>
                  <li>
                    <NavLink>Design & creatives</NavLink>
                  </li>
                  <li>
                    <NavLink>Telecommunication</NavLink>
                  </li>
                  <li>
                    <NavLink>Restaurant</NavLink>
                  </li>
                  <li>
                    <NavLink>Programing</NavLink>
                  </li>
                  <li>
                    <NavLink>Architecture</NavLink>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="ourSolutions">
                <ul>
                  <li className="solutions">Company</li>
                  <li>
                    <NavLink>Design & creatives</NavLink>
                  </li>
                  <li>
                    <NavLink>Telecommunication</NavLink>
                  </li>
                  <li>
                    <NavLink>Restaurant</NavLink>
                  </li>
                  <li>
                    <NavLink>Programing</NavLink>
                  </li>
                  <li>
                    <NavLink>Architecture</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="reserved">
            2023 All rights reserved | This template is made with by Colorlib
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
