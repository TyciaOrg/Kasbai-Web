import React from "react";
import { Link } from "react-router-dom";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navigateToPage(page) {
    if (page === "facebook") {
      window.open("https://www.facebook.com/kasbai/");
    }
    if (page === "linkedIn") {
      window.open("https://www.linkedin.com/company/kasbai");
    }
    if (page === "twitter") {
      window.open("https://twitter.com/kasbai");
    }
    if (page === "youTube") {
      window.open("https://www.youtube.com/user/kasbai");
    }
  }
  render() {
    return (
      <div>
        <footer id="footer">
          <div className="footer-top">
            <div className="container-fluid">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <h3
                      style={{ color: "#000" }}
                      className="kasbai-font-nirmala text-center mb-5"
                    >
                      INDIA{" "}
                      <span
                        style={{
                          background: "#000",
                          color: "#fff",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                          paddingTop: "5px",
                          paddingBottom: "5px",
                        }}
                      >
                        <i>
                          <b> AGAINST</b>
                        </i>
                      </span>{" "}
                      CORONA
                    </h3>
                  </div>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-4 text-center">
                        <img alt="" src={require("./../images/360Plus.png")}  className="img-fluid"/>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img alt="" src={require("./../images/Goonj.png")}  className="img-fluid"/>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img alt="" src={require("./../images/TF.png")}  className="img-fluid"/>
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-12 d-flex flex-row justify-content-center align-items-center">
                        <div className="separator-black d-flex"></div>
                    </div>
                  <div className="col-lg-12 col-md-12 footer-links">
                    <h5 className="text-center kasbai-font-nirmala" style={{color: "#000"}}>
                      <b>Useful Links</b>
                    </h5>
                    <div className="d-flex flex-row justify-content-center align-items-center">
                    <ul>
                      <li>
                        <i className="bx bx-chevron-right"></i>{" "}
                        <Link to="/donor">Donate Now</Link>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right"></i>{" "}
                        <Link to="/donor">Get Involved</Link>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right"></i>{" "}
                        <Link to="/donor">Goals</Link>
                      </li>
                      <li>
                        <i className="bx bx-chevron-right"></i>{" "}
                        <Link to="/donor">Home </Link>
                      </li>
                  
                    </ul>
                    </div>

                    <div className="social-links text-center mt-3">
                      <a
                        href="/"
                        className="twitter"
                        onClick={(e) => {
                          e.preventDefault();
                          this.navigateToPage("twitter");
                        }}
                      >
                        <i className="zmdi zmdi-twitter"></i>
                      </a>
                      <a
                        href="/"
                        className="facebook"
                        onClick={(e) => {
                          e.preventDefault();
                          this.navigateToPage("facebook");
                        }}
                      >
                        <i className="zmdi zmdi-facebook-box"></i>
                      </a>
                      <a
                        href="/"
                        className="facebook"
                        onClick={(e) => {
                          e.preventDefault();
                          this.navigateToPage("facebook");
                        }}
                      >
                        <i className="zmdi zmdi-youtube-play"></i>
                      </a>
                    </div>
                    
                  </div>

               

                </div>
              </div>
              <div className="container">
                <div className="copyright">
                  &copy;{" "}
                  <strong>
                    <span>Kasbai 2021</span>
                  </strong>
                  . All Rights Reserved
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
