import React from "react";
import "./Footer.css";
import facebook from "../../images/facebook.svg";
import linkedin from "../../images/linkedin.svg";
import pinterest from "../../images/pinterest.svg";
import email from "../../images/email.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="media__links">
          <div className="col-sm-1">
            <div className="facebook">
              <a href="#">
                <img
                  className="img-responsive"
                  style={{ width: "40px" }}
                  src={facebook}
                />
              </a>
            </div>
          </div>

          <div className="col-sm-1">
            <div className="linkedin">
              <a href="#">
                <img
                  className="img-responsive"
                  style={{ width: "40px" }}
                  src={linkedin}
                />
              </a>
            </div>
          </div>

          <div className="col-sm-1">
            <div className="pinterest">
              <a href="#">
                <img
                  className="img-responsive"
                  style={{ width: "40px" }}
                  src={pinterest}
                />
              </a>
            </div>
          </div>

          <div className="col-sm-1">
            <div className="email-icon">
              <a href="#">
                <img
                  className="img-responsive"
                  style={{ width: "40px" }}
                  src={email}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="personal-contact phone">
              <h6 className="text-center">Phone: XXXXXX</h6>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="personal-contact email-personal-contact">
              <h6 className="text-center">Email: XXXXX@gmail.com</h6>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 text-center">
            <div className="company-information">
              <h6>XXXX</h6>
              <p>Copyright &copy; 2021</p>
              <p>NY</p>
            </div>
          </div>

          <div className="col-sm-2 col-md-2 text-center">
            <div className="home-footer">
              <h4>
                <Link to="/">Home</Link>
              </h4>
            </div>
          </div>

          <div className="col-sm-2 col-md-2 text-center">
            <div className="portfolio-footer">
              <h4>
                <Link to="/portfolio">Portfolio</Link>
              </h4>
              <ul>
                <li>
                  <a href="#">Project1</a>
                </li>
                <li>
                  <a href="#">Project2</a>
                </li>
                <li>
                  <a href="#">Project3</a>
                </li>
                <li>
                  <a href="#">See All</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-2 col-md-2 text-center">
            <div className="resume-footer">
              <h4>
                <a href="#">Resume</a>
              </h4>
              <ul>
                <li>
                  <a href="#">Download</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-2 col-md-2 text-center">
            <div className="contact-footer">
              <h4>
                <Link to="/contact">Contact</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
