import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header id="header" className="pl-2 pr-2">
        
        <div className="container-fluid d-flex kasbai-header-style">
          <div className="logo mr-auto">
            <h1 className="text-light">
              <div className="d-flex align-items-center">
                <Link to="/" className="kasbai-logo-text-style d-flex flex-row justify-content-center align-items-center">
                 Kasbai <div className="kasbai-motto">A collective frontliners from rural India to provide relief and resources <br/>to the COVID affected 'communities at risk' </div>
                </Link>
              </div>
            </h1>
          </div>
          <nav className="nav-menu d-none d-lg-block">
            <ul>
            <li>
              <Link to="/">
                About 
              </Link>
            </li>

            <li>
              <Link to="/">
                Goals
              </Link>
            </li>

            <li>
              <Link to="/">
                Volunteer
              </Link>
            </li>
            <li>
              <Link to="/" className="btn btn-primary">
                Donate Now
              </Link>
            </li>
          </ul>
          </nav>
        </div>
      </header>
      </div>
    );
  }
}

export default Header;
