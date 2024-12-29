import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    if (parallaxRef.current) {
      // Initialize Parallax.js
      const parallaxInstance = new Parallax(parallaxRef.current);

      // Clean up on component unmount
      return () => {
        parallaxInstance.destroy();
      };
    }
  }, []);

  return (
    <section className="bg-secondary py-5 h-screen">
      <div className="container text-center mt-lg-4 mt-xl-5">
        <div className="position-relative mx-auto my-3" style={{ maxWidth: "850px" }}>
          <h1 className="display-3 position-relative z-2 mb-0">
            Form management assistant you gonna love
          </h1>
          <div
            className="text-warning position-absolute top-0 start-50 translate-middle-x w-100 mt-md-3"
          >
            <svg
              width="750"
              height="66"
              viewBox="0 0 608 66"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path opacity=".35" transform="translate(50, 0)" d="M45.66 63.0651C48.1682 62.8708 50.692 62.5736 53.2046 62.482C55.5493 62.3949 57.8918 62.3033 60.232 62.2161C73.0671 61.7358 85.8977 61.1192 98.7394 60.9293C112.169 60.7304 125.603 60.402 139.035 60.3663C152.743 60.3328 166.446 60.2747 180.152 60.3417C206.867 60.4757 231.522 59.2366 258.233 59.3013C290.201 57.8797 306.797 56.9045 334.904 55.6546C348.07 55.5876 361.243 55.2681 374.408 55.0111C387.336 54.7632 399.538 53.6311 412.46 53.1396C415.299 53.0323 418.137 52.8201 420.972 52.6548C423.774 52.4894 426.583 52.3576 429.383 52.1432C436.572 51.5913 444.461 51.7091 451.639 51.0545C464.138 49.9061 476.595 48.378 489.11 47.4218C502.221 46.4209 515.361 45.8534 528.486 45.0379C534.408 44.6715 540.366 44.2135 546.249 43.4048C552.974 42.4865 559.639 41.3762 566.288 39.991C572.715 38.6505 579.137 37.2743 585.567 35.9584C588.655 35.3261 591.757 34.7497 594.873 34.2984C598.4 33.7868 601.894 33.2618 605.377 32.5044C607.052 32.138 607.381 29.8927 607.381 28.4494C607.388 27.6273 607.258 26.8297 606.995 26.0567C606.749 25.4065 606.232 24.3676 605.377 24.3967C599.094 24.6089 592.816 24.8234 586.535 25.1205C580.2 25.4177 573.853 25.6009 567.51 25.6903C555.192 25.8578 542.852 25.4311 530.548 24.9172C532.645 24.6335 534.742 24.3498 536.839 24.0638C544.371 23.0361 551.882 21.7448 559.453 21.0522C563.482 20.6813 567.524 20.373 571.541 19.8971C573.579 19.6581 575.599 19.381 577.614 18.9744C579.777 18.5365 581.91 17.9378 584.036 17.339C584.719 17.2653 585.234 16.9212 585.587 16.3158C586.213 15.4489 586.5 14.2872 586.608 13.1746C588.761 12.511 589.194 9.31622 589.194 7.39709C589.207 6.20853 589.022 5.05348 588.635 3.93417C588.261 2.94892 587.55 1.55034 586.297 1.53694C579.758 1.46321 573.23 1.01862 566.691 0.938188C565.93 0.931485 565.163 0.927017 564.397 0.927017C558.77 0.927017 553.155 1.17501 547.535 1.47885C535.016 2.1558 522.495 2.96679 509.989 3.87832C504.175 4.29834 498.369 4.79655 492.551 5.15178C485.435 5.58297 478.335 5.91139 471.212 6.19066C459.296 6.65536 447.361 6.83632 435.438 7.05527C421.763 7.3122 408.106 7.67189 394.447 8.31756C381.795 8.91631 369.155 9.7139 356.512 10.4757C343.816 11.2354 331.122 11.9905 318.427 12.7613C305.415 13.5499 292.394 14.1353 279.373 14.7206C272.783 15.02 266.185 15.1071 259.593 15.297C253.354 15.4758 247.107 15.5227 240.864 15.6143C228.574 15.7952 216.287 15.9069 203.998 16.0343C179.21 16.2867 154.428 16.6934 129.642 17.1067C116.025 17.3346 102.412 17.587 88.7943 17.8439C81.8486 17.9758 74.9007 18.2506 67.9594 18.4539C62.0236 18.6259 56.0901 19.0303 50.1565 19.3364C43.8406 19.6625 37.5247 20.0222 31.2089 20.3886C27.4542 20.6076 23.6952 20.8332 19.9362 21.0522C18.3053 21.1505 16.67 21.2443 15.0346 21.3426C13.5474 21.4297 12.0579 21.5415 10.5729 21.6554C9.51432 21.7358 8.47346 21.89 7.42818 22.0687C6.26798 22.2631 5.11442 22.7859 4.00063 23.1657C3.33545 23.7019 2.87138 24.381 2.61503 25.2099C2.24156 26.3002 2.05814 27.4217 2.0714 28.5768C2.05814 29.7341 2.24156 30.8556 2.61503 31.9459C2.81834 32.3569 3.02165 32.768 3.22496 33.1769C3.60506 33.8292 4.15974 34.1979 4.88901 34.2783C6.1818 34.6492 7.4547 35.0156 8.78063 35.2367C9.50548 35.1563 10.0602 34.7922 10.4381 34.142C10.5817 33.9432 10.7077 33.7309 10.8182 33.5075C11.5121 33.4896 12.2082 33.4919 12.9043 33.4919C13.5695 33.4919 14.2369 33.4874 14.9043 33.4718C16.407 33.4383 17.9053 33.4003 19.4058 33.3645C23.2709 33.2729 27.136 33.1791 31.0011 33.0875C35.1889 32.987 39.3766 32.911 43.5622 32.8373C43.129 32.8753 42.6981 32.9132 42.265 32.9467C32.3735 33.7242 22.4886 34.5062 12.606 35.3931C11.0038 35.5741 9.79056 36.3784 8.95301 37.806C7.71768 39.5129 7.04366 41.7135 6.70996 43.9231C4.97299 43.9075 3.2338 43.8873 1.49682 43.8739C0.28359 43.865 0.0449219 46.0031 0.0449219 46.8252C0.0449219 47.6608 0.28359 49.7564 1.50345 49.7698C3.1675 49.7855 4.83376 49.8145 6.49781 49.8369C6.64146 51.6934 7.01272 53.5098 7.62265 55.2882C8.06905 56.1908 8.51545 57.0934 8.96184 57.9937C9.79719 59.4213 15.9944 65.1786 17.5966 65.3596C26.9466 64.5218 36.3011 63.789 45.66 63.0651Z"></path>
            </svg>
          </div>
        </div>
        <p
          className="fs-lg pb-3 mb-2 mb-sm-3 mb-lg-4 mx-auto"
          style={{ maxWidth: "640px" }}
        >
          We offer you a whole new form management system.
          Create, manage and track all your Forms in one flexible Platform!
        </p>
        <div className="mt-10 justify-center ">

          <pre className="whitespace-pre-wrap bg-gray-900 text-left text-sm md:text-base md:px-5 w-fit m-auto">
            {`<form action="`}<span className='text-yellow-300'>https://forms-flow-api.vercel.app/api/sendmail/mail/your-mail-address</span>{`" method="`}<span className='text-yellow-300'>post</span>{`">`}
          </pre>
          <p className="text-red-700 md:w-[35rem] m-auto">By using this method you won't be able to manage your data in the site it will directly send to your mail address</p>
          {/* <p className="text-green-700 md:w-[35rem] mt-4 m-auto">We recommend you to Get Started by signing up to our site to secure your data with us and for many more features.</p> */}

        </div>
        <Link className="btn btn-lg btn-primary bg-blue-700 hover:bg-blue-800 px-5 mt-5" to="/get-started">
          Get Started
        </Link>
      </div>
      {/* <div className="container-fluid overflow-hidden px-4 pt-3 pt-sm-4 pb-sm-2 pb-md-3 py-lg-4 py-xl-5 mt-4 ">

        <div className="col-sm-6 col-lg-4 order-lg-1 overflow-hidden mt-lg-4 pt-xl-3 ">
          <div className="d-none d-xxl-block" style={{ height: "310px" }}></div>
          <div
            className="parallax mx-auto"
            style={{ maxWidth: "1440px" }}
            ref={parallaxRef}
          >
            <div className="parallax-layer z-2 w-[40rem] m-auto " data-depth="0.25">
              <img
                className="d-dark-mode-none"
                src="assets/img/form cropped.png"
                alt="Layer"
              />
            </div>



            <div
              className="text-center text-sm-start mb-5 mx-auto mx-sm-0 pb-lg-2 pb-xl-4 "
              style={{ maxWidth: "340px" }}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-out-back"
              data-disable-parallax-down="lg"
            >
              <div className="d-table bg-dark bg-opacity-10 rounded-1 p-2 mx-auto mx-sm-0 mb-3 mb-lg-4">
                <svg
                  className="d-block m-1 text-black"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm0-18c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.553 0-1-.447-1-1s.447-1 1-1 1 .447 1 1-.447 1-1 1zm0 4c-2.212 0-4 1.788-4 4v3h8v-3c0-2.212-1.788-4-4-4z"></path>
                </svg>
              </div>

              <h2 className="h4 text-black mb-2 mb-lg-3">Access on all devices</h2>

              <p className="text-black opacity-80 mb-0">
                Fusce lectus neque viverra risus lobortis adipiscing integer pulvinar elementum. Lorem viverra tincidunt tortor pellentesque. Sed viverra ex euismod augue tincidunt, ac efficitur urna pharetra.
              </p>
            </div>

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
                  className="d-block m-1 text-black"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 3h6c.553 0 1 .447 1 1v16c0 .553-.447 1-1 1H9c-.553 0-1-.447-1-1V4c0-.553.447-1 1-1zm1 2v12h4V5h-4z"></path>
                </svg>
              </div>

              <h2 className="h4 text-black mb-2 mb-lg-3">Sync across platforms</h2>

              <p className="text-black opacity-80 mb-0">
                Curabitur cursus dui eu tortor placerat, et malesuada urna gravida. Nunc at nulla in ante ullamcorper tempus. Phasellus eu sapien malesuada, consectetur lorem vitae, varius odio.
              </p>
            </div>

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
                  className="d-block m-1 text-black"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM7 13h10v-2H7v2z"></path>
                </svg>
              </div>

              <h2 className="h4 text-black mb-2 mb-lg-3">Easy collaboration</h2>

              <p className="text-black opacity-80 mb-0">
                Aliquam tincidunt purus vel nunc mollis, sed fermentum enim facilisis. Integer nec libero et tortor lobortis auctor. Pellentesque interdum augue non libero tincidunt convallis.
              </p>
            </div>

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
                  className="d-block m-1 text-black"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 10h10V8H7v2zm0 4h10v-2H7v2z"></path>
                </svg>
              </div>

              <h2 className="h4 text-black mb-2 mb-lg-3">Manage tasks efficiently</h2>

              <p className="text-black opacity-80 mb-0">
                Aenean in ipsum nec nunc ultricies fermentum. Nulla facilisi. Sed mollis ante eu sem suscipit, non iaculis lorem feugiat. Donec aliquam, orci vitae fermentum luctus, erat urna vehicula felis.
              </p>
            </div>

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
                  className="d-block m-1 text-black"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 3v18l15-9z"></path>
                </svg>
              </div>

              <h2 className="h4 text-black mb-2 mb-lg-3">Real-time updates</h2>

              <p className="text-black opacity-80 mb-0">
                Etiam auctor metus sapien, sed dictum metus maximus eu. Nulla a mi vel risus tincidunt dapibus. Nulla facilisi. Donec auctor massa vitae est efficitur, sit amet venenatis ligula dapibus.
              </p>
            </div>

          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
