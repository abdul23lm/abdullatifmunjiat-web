import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <div className="leftpart">
        <div className="leftpart_inner">
          <div className="logo">
            <Link className="navbar-brand" to="/">
              <img src="/assets/img/logo/logo.svg" alt="Abdul Latif Munjiat Logo" />
            </Link>
          </div>
          <div className="copyright">
            <p>
              &copy; 2021  <br /> Abdul Latif Munjiat
            </p>
          </div>
        </div>
      </div>

      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tm_section">
            <div className="container">
              <div className="tm_error">
                <div className="tm_error_inner">
                  <h1>404!</h1>
                  <h3>Page not found</h3>
                  <p>The page you were looking for could not be found.</p>
                  <Link to="/" className="ib-button">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-wrapper">
        <div className="copyright">
          <p>
            &copy; 2021 Abdul Latif Munjiat
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
