import React from "react";

const OnlineLearningPlatform = () => {
  return (
    <section className="bg-secondary position-relative pt-lg-3 pt-xl-4 pt-xxl-5">
      {/* Background layers */}
      <div
        className="bg-primary position-absolute start-0 bottom-0 w-100 d-none d-xl-block"
        style={{ height: "920px" }}
      ></div>
      <div
        className="bg-primary position-absolute start-0 bottom-0 w-100 d-none d-lg-block d-xl-none"
        style={{ height: "830px" }}
      ></div>
      <div
        className="bg-primary position-absolute start-0 bottom-0 w-100 d-lg-none d-xl-none"
        style={{ height: "62%" }}
      ></div>
      <div
        className="bg-dark bg-opacity-10 rounded-circle position-absolute start-50 d-none d-lg-block"
        style={{
          bottom: "220px",
          width: "480px",
          height: "480px",
          marginLeft: "-240px",
        }}
        data-aos="zoom-in"
        data-aos-duration="700"
        data-aos-delay="200"
        data-aos-offset="300"
      ></div>

      {/* Content */}
      <div className="container position-relative z-5 mt-2 pt-5 pb-2 pb-sm-4 pb-lg-5">
        <h1
          className="display-3 text-center mx-auto pt-5 my-2 my-sm-4"
          style={{ maxWidth: "680px" }}
        >
          The Best Platform For Online Learning
        </h1>

        {/* Decorative SVG */}
        <svg
          className="d-block mx-auto text-primary"
          width="511"
          height="40"
          viewBox="0 0 511 40"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="..."></path>
        </svg>

        <div className="row justify-content-center pt-3 pt-sm-4 pt-md-5 mt-sm-1">
          {/* Middle Sticky App Screen */}
          <div className="col-8 col-lg-4 order-lg-2" style={{ marginTop: "-105px" }}>
            <div
              className="position-lg-sticky top-0 mb-5 pb-sm-2 pb-xl-4"
              style={{ paddingTop: "110px" }}
            >
              <img
                className="d-block mx-auto"
                src="assets/img/landing/mobile-app-showcase/hero/screen02.png"
                width="322"
                alt="App screen"
              />
            </div>
          </div>

          {/* Left Column */}
          <div className="col-sm-6 col-lg-4 order-lg-1 overflow-hidden mt-lg-4 pt-xl-3">
            <img
              className="d-none d-lg-block rounded-4 ms-auto"
              src="assets/img/landing/mobile-app-showcase/hero/screen01.png"
              width="297"
              alt="App screen"
              style={{ boxShadow: "0 .9375rem 3rem -.5rem rgba(18,34,50, .05)" }}
            />
            <div className="d-none d-xxl-block" style={{ height: "310px" }}></div>

            {/* Left Features List */}
            <div
              className="text-center text-sm-start mb-5 mx-auto mx-sm-0 pb-lg-2 pb-xl-4"
              style={{ maxWidth: "340px" }}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-out-back"
              data-disable-parallax-down="lg"
            >
              <div className="d-table bg-dark bg-opacity-10 rounded-1 p-2 mx-auto mx-sm-0 mb-3 mb-lg-4">
                <svg
                  className="d-block m-1 text-warning"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="..."></path>
                </svg>
              </div>
              <h2 className="h4 text-white mb-2 mb-lg-3">Access on all devices</h2>
              <p className="text-white opacity-80 mb-0">
                Fusce lectus neque viverra risus lobortis adipiscing integer pulvinar elementum.
                Lorem viverra tincidunt tortor pellentesque.
              </p>
            </div>
          </div>

          {/* Additional Content */}
          {/* Add similar structure for the right column and other sections */}
        </div>
      </div>
    </section>
  );
};

export default OnlineLearningPlatform;