import React from 'react';
import 'aos/dist/aos.css'; // Include AOS styles
import AOS from 'aos'; // Import AOS

const HowItWorks = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="overflow-hidden py-5 my-md-2 my-xl-4 my-xxl-5">
      <div className="container py-2 py-sm-4 py-lg-5">
        <h2 className="h1 text-center pb-3 mb-3 mb-lg-4 mt-xxl-2">How does it work?</h2>

        {/* Step 01 */}
        <div className="row align-items-center position-relative pb-5 pb-lg-0 mb-1 mb-sm-2 mb-md-4 mb-lg-0">
          <div
            className="col-md-6 col-xl-5 offset-lg-1 order-md-2 pb-2 pb-md-0 mb-4 mb-md-0"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              className="d-dark-mode-none"
              src="assets/img/landing/saas-2/steps/01-light.png"
              width="525"
              alt="Step 01"
            />
            <img
              className="d-none d-dark-mode-block"
              src="assets/img/landing/saas-2/steps/01-dark.png"
              width="525"
              alt="Step 01"
            />
          </div>
          <div
            className="col-md-6 col-lg-5 col-xl-4 offset-xl-1 order-md-1"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <div className="pe-md-4 pe-lg-0">
              <span className="badge fs-sm bg-[#3b82f6] bg-opacity-10 text-[#3b82f6] mb-3 mb-lg-4">Step 01</span>
              <h3 className="h2 mb-3 mb-lg-4">Connect your site to the platform using a code</h3>
              <p className="pb-1 pb-lg-0 mb-4 mb-lg-5">
                Nec id eget malesuada urna at sed est adipiscing auctor at massa id duis fames ut condimentum velit est,
                donec mauris tortor massa et viverra.
              </p>
              <a className="btn btn-outline-primary hover:bg-blue-800 rounded-pill border-[#3b82f6] text-[#3b82f6]" href="#">
                Get connected
              </a>
            </div>
          </div>
        </div>

        {/* Step Arrow */}
        <div
          className="d-none d-lg-flex justify-content-center"
          data-aos="fade-in"
          data-aos-duration="500"
          data-aos-offset="250"
        >
          <svg
            className="d-block text-[#3b82f6]"
            width="339"
            height="365"
            viewBox="0 0 339 365"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: '-150px', marginTop: '-140px', marginBottom: '-108px' }}
          >
            <path
              d="M324 291.371C120.111 291.37 240.756 58.7225 1.00032 73.2606"
              stroke="url(#arrow1)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 6"
            ></path>
            <path
              d="M337.375 290.62C338.074 290.998 338.074 292.001 337.375 292.379L328.476 297.196C327.81 297.557 327 297.074 327 296.317L327 286.683C327 285.925 327.81 285.443 328.476 285.803L337.375 290.62Z"
              fill="currentColor"
            ></path>
            <defs>
              <linearGradient id="arrow1" x1="324" y1="291.5" x2="-2.99974" y2="72.4997" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="currentColor"></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Step 02 */}
        <div className="row align-items-center position-relative pb-5 pb-lg-0 mb-1 mb-sm-2 mb-md-4 mb-lg-0">
          <div
            className="col-md-6 col-xl-5 offset-xl-1 pb-2 pb-md-0 mb-4 mb-md-0"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              className="d-dark-mode-none"
              src="assets/img/landing/saas-2/steps/02-light.png"
              width="473"
              alt="Step 02"
            />
            <img
              className="d-none d-dark-mode-block"
              src="assets/img/landing/saas-2/steps/02-dark.png"
              width="473"
              alt="Step 02"
            />
          </div>
          <div
            className="col-md-6 col-lg-5 col-xl-4 offset-lg-1"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <div className="ps-md-4 ps-lg-0">
              <span className="badge fs-sm bg-opacity-10 bg-[#3b82f6] text-[#3b82f6] mb-3 mb-lg-4">Step 02</span>
              <h3 className="h2 mb-3 mb-lg-4">Set up important dashboard metrics</h3>
              <ul className="list-unstyled mb-0">
                <li className="d-flex pt-1 mt-2">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Forecasting and recommendations
                </li>
                <li className="d-flex pt-1 mt-2">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Identification of patterns, analysis
                </li>
                <li className="d-flex pt-1 mt-2">
                  <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Segmentation by various methods
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Arrow between Step 02 and Step 03 */}
        <div
          className="d-none d-lg-flex justify-content-center"
          data-aos="fade-in"
          data-aos-duration="500"
          data-aos-offset="250"
        >
          <svg
            className="d-block text-[#3b82f6]"
            width="263"
            height="275"
            viewBox="0 0 263 275"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginTop: '-60px', marginLeft: '-120px', marginBottom: '-80px' }}
          >
            <path
              d="M8.13678 249.647C7.47108 250.081 6.59001 249.602 6.59106 248.808L6.60444 238.689C6.60544 237.931 7.4158 237.45 8.08162 237.811L16.5478 242.408C17.2136 242.77 17.2512 243.712 16.6163 244.125L8.13678 249.647Z"
              fill="currentColor"
            ></path>
            <path
              d="M261.961 37.8891C216.908 65.6243 128.226 135.486 133.916 193.05C141.029 265.005 265.134 173.468 173.666 148.634C89.2542 125.715 30.9125 210.547 13.9796 236.702"
              stroke="url(#arrow2)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 6"
            ></path>
            <defs>
              <linearGradient id="arrow2" x1="13.9797" y1="234.5" x2="276.704" y2="60.1939" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="currentColor"></stop>
                <stop offset="1" stopColor="currentColor" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>


        {/* Step 03 */}
        <div className="row align-items-center position-relative">
          <div
            className="col-md-6 col-xl-5 offset-lg-1 order-md-2 d-md-flex justify-content-end pb-2 pb-md-0 mb-4 mb-md-0"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              className="d-dark-mode-none"
              src="assets/img/landing/saas-2/steps/03-light.png"
              width="473"
              alt="Step 03"
            />
            <img
              className="d-none d-dark-mode-block"
              src="assets/img/landing/saas-2/steps/03-dark.png"
              width="473"
              alt="Step 03"
            />
          </div>
          <div
            className="col-md-6 col-lg-5 col-xl-4 offset-xl-1 order-md-1"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <div className="pe-md-4 pe-lg-0">
              <span className="badge fs-sm bg-opacity-10 bg-[#3b82f6] text-[#3b82f6] mb-3 mb-lg-4">Step 03</span>
              <h3 className="h2 mb-3 mb-lg-4">Download the data in a convenient format</h3>
              <p className="pb-1 pb-lg-0 mb-4 mb-lg-5">
                Bibendum velit mi, ac sed ac malesuada ultrices non lectus mi pellentesque vel at tempus cras sed a
                eleifend augue amet mauris, leo ac amet erat.
              </p>
              <a className="btn btn-outline-primary hover:bg-blue-800 border-[#3b82f6] text-[#3b82f6] rounded-pill" href="#">
                Get connected
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
