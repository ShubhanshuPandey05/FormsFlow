import React from 'react';
// import './HomeScreenTest.css'; // Assuming you have a CSS file for styles

export default function HomeScreenTest() {
  return (
    <>
      <section className="bg-primary bg-opacity-10 d-flex h-[100vh] overflow-hidden">
        <div className="container d-flex justify-content-center pb-sm-3 py-4">
          <div className="row align-items-center pt-5 mt-xxl-0">

            {/* Video + Parallax */}
            <div className="col-lg-6 mb-4 mb-lg-0 pb-3 pb-lg-0">
              <div className="parallax mx-auto mx-lg-0" style={{ maxWidth: '582px' }}>
                <div className="parallax-layer z-3" data-depth="0.1">
                  <div
                    className="position-relative bg-dark mx-auto"
                    style={{
                      maxWidth: '61%',
                      padding: '.3125rem',
                      marginBottom: '9.9%',
                      borderRadius: 'calc(var(--ar-border-radius) * 2.125)',
                    }}
                  >
                    <div
                      className="position-absolute start-50 translate-middle-x"
                      style={{ top: '4.4%', width: '85%' }}
                    >
                      <div className="row row-cols-4 gx-2 mb-3">
                        {Array(3)
                          .fill()
                          .map((_, index) => (
                            <div className="col" key={index}>
                              <div className="border-white border opacity-80"></div>
                            </div>
                          ))}
                        <div className="col position-relative">
                          <div className="position-absolute top-0 start-0 w-100 border-white border opacity-30"></div>
                          <div className="position-absolute top-0 start-0 w-50 border-white border opacity-80"></div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          className="rounded-circle"
                          src="assets/img/landing/marketing-agency/hero/avatar.jpg"
                          width="35"
                          alt="Avatar"
                        />
                        <div className="fs-xs ps-2" data-bs-theme="light">
                          <span className="text-nav fw-bold me-1">Lonoi@1</span>
                          <span className="text-body-secondary">12 min</span>
                        </div>
                      </div>
                    </div>
                    <video
                      className="d-block w-100"
                      autoPlay
                      loop
                      muted
                      style={{ borderRadius: 'calc(var(--ar-border-radius) * 1.875)' }}
                    >
                      <source
                        src="assets/img/landing/marketing-agency/hero/video.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
                {[...Array(4)].map((_, i) => (
                  <div
                    className={`parallax-layer ${i === 1 || i === 3 ? 'z-2' : ''}`}
                    data-depth={i === 0 ? 0.3 : i === 1 ? -0.1 : i === 2 ? -0.15 : -0.25}
                    key={i}
                  >
                    <img
                      src={`assets/img/landing/marketing-agency/hero/shape0${i + 1}.svg`}
                      alt="Background shape"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Text Content */}
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-2 pb-3 mb-4">
                <span className="fw-normal">Full servises</span> marketing agency
              </h1>
              <div className="row row-cols-3">
                {[
                  {
                    icon: 'ai-bulb-alt',
                    text: 'Individual approach to the brand',
                  },
                  {
                    icon: 'ai-rocket',
                    text: 'We guarantee the result after a month',
                  },
                  {
                    icon: 'ai-circle-check-filled',
                    text: 'Completing tasks exactly on time',
                  },
                ].map((item, index) => (
                  <div className="col" key={index}>
                    <i className={`${item.icon} d-block fs-${index + 1} text-dark mb-2 pb-1`}></i>
                    <p className="mb-0">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="d-sm-flex justify-content-center justify-content-lg-start pt-5 mt-lg-2">
                <a
                  className="btn btn-lg btn-primary w-100 w-sm-auto mb-2 mb-sm-0 me-sm-1"
                  href="#"
                >
                  Get in touch
                </a>
                <a className="btn btn-lg btn-link" href="#">
                  Our case studies
                  <i className="ai-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
