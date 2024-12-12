import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-secondary py-5">
      <div className='px-20'>
        <div className="container pt-md-2 pt-lg-3 pt-xl-4">
          <div className="row pb-4 pb-md-5 pt-sm-2 mb-lg-2">
            <div className="col-md-4 col-lg-3 pb-2 pb-md-0 mb-4 mb-md-0">
              <Link className="navbar-brand text-nav py-0 mb-3 mb-md-4" to="/">
                <span className="text-primary flex-shrink-0 me-2">
                  {/* <svg
                    version="1.1"
                    width="35"
                    height="32"
                    viewBox="0 0 36 33"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z"
                    ></path>
                  </svg> */}
                  <img src="assets/app-icons/Logo.png" alt="Logo" className='w-10' />
                </span>
                <span className='font-bold text-[#02195c]'>FormsFlow</span>
              </Link>
              <p className="fs-sm pb-2 pb-md-3 mb-3">
                Tellus non diam morbi quam vel venenatis proin sed. Dolor elementum nunc dictum.
              </p>
              <div className="d-flex gap-3">
                <a
                  className="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle"
                  href="#"
                  aria-label="Facebook"
                >
                  <i className="ai-facebook"></i>
                </a>
                <a
                  className="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle"
                  href="#"
                  aria-label="Instagram"
                >
                  <i className="ai-instagram"></i>
                </a>
                <a
                  className="btn btn-icon btn-sm btn-secondary btn-linkedin rounded-circle"
                  href="#"
                  aria-label="LinkedIn"
                >
                  <i className="ai-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="col-md-8 col-lg-7 col-xl-6 offset-lg-2 offset-xl-3">
              <div className="row row-cols-1 row-cols-sm-3">
                <div className="col mb-3 mb-md-0">
                  <ul className="nav flex-column">
                    <li><Link className="nav-link fw-normal py-1 px-0" to="#">Features</Link></li>
                    <li><Link className="nav-link fw-normal py-1 px-0" to="#">How it works</Link></li>
                    {/* <li><Link className="nav-link fw-normal py-1 px-0" to="#">Reviews</Link></li>
                    <li><Link className="nav-link fw-normal py-1 px-0" to="#">FAQ</Link></li> */}
                  </ul>
                </div>
                <div className="col mb-4 mb-md-0">
                  <ul className="nav flex-column">
                    <li><Link className="nav-link fw-normal py-1 px-0" to="#">Terms of service</Link></li>
                    <li><Link className="nav-link fw-normal py-1 px-0" to="#">Privacy policy</Link></li>
                  </ul>
                </div>
                {/* <div className="col">
                  <a className="btn btn-secondary px-3 py-2 mb-3 me-3 me-md-0" href="#">
                    <img
                      className="mx-1 d-dark-mode-none"
                      src="assets/img/market/appstore-dark.svg"
                      width="120"
                      alt="App Store"
                    />
                    <img
                      className="mx-1 d-none d-dark-mode-block"
                      src="assets/img/market/appstore-light.svg"
                      width="120"
                      alt="App Store"
                    />
                  </a>
                  <a className="btn btn-secondary px-3 py-2 mb-3 me-3 me-md-0" href="#">
                    <img
                      className="mx-1 d-dark-mode-none"
                      src="assets/img/market/googleplay-dark.svg"
                      width="119"
                      alt="Google Play"
                    />
                    <img
                      className="mx-1 d-none d-dark-mode-block"
                      src="assets/img/market/googleplay-light.svg"
                      width="119"
                      alt="Google Play"
                    />
                  </a>
                </div> */}
                <div className="col">
                  <div className="contact-details">
                    <h6 className="fw-bold mb-2">Contact Us</h6>
                    <p className="mb-1">Email: formsflow.services@gmail.com</p>
                    <p className="mb-1">Phone: +1 (123) 456-7890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="nav fs-sm mb-0">
            <span className="text-body-secondary">&copy; All rights reserved. Made by</span>
            <a
              className="nav-link d-inline fw-normal p-0 ms-1"
              href="https://createx.studio/"
              target="_blank"
              rel="noopener"
            >
              FormsFlow
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
