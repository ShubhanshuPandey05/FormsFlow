import React from 'react';

const FeaturesSection = () => {

  // const features = [
  //   { title: "Easy Integration", description: "Integrate with your existing tools effortlessly." },
  //   { title: "Real-time Analytics", description: "Track your email performance in real-time." },
  //   { title: "Custom Templates", description: "Create beautiful emails with our templates." },
  // ];


  return (
    <section className="py-5 bg-light overflow-hidden">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className='text-4xl font-bold m-4'>What do you get with our tool?</h2>
          <p className="text-muted text-xl md:w-[30rem] m-auto">
            Organize your tasks, prioritize effectively, and manage your projects effortlessly.
          </p>
        </div>


        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-3 gy-sm-4 gy-xl-5 gx-4 gx-md-5 pb-xxl-4 mb-sm-2 mb-lg-0 mb-xl-2">
          <div className="col">
            <div className="text-center px-xxl-4">


              <h3 className="h4 mb-2">Comments on tasks</h3>
              <p>Id mollis consectetur congue egestas egestas suspendisse blandit in the justo eget maximus accumsan lorem ligula malesuada.</p>
            </div>
          </div>
          <div className="col">
            <div className="text-center px-xxl-4">
              <svg className="d-inline-block mb-3 mb-md-4" width="76" height="75" viewBox="0 0 76 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="text-blue-500" d="M32.2274 17.3606C32.3865 17.6845 32.4916 18.0315 32.5387 18.3881L33.4088 31.3253L33.8407 37.8279C33.8452 38.4966 33.9501 39.161 34.1521 39.7997C34.6737 41.0388 35.9286 41.8263 37.2939 41.7714L58.0979 40.4106C58.9988 40.3958 59.8688 40.7327 60.5164 41.3473C61.0561 41.8594 61.4045 42.5294 61.5143 43.25L61.5511 43.6876C60.6902 55.6086 51.9349 65.5516 40.0386 68.1183C28.1424 70.685 15.9433 65.263 10.0647 54.7961C8.36996 51.7552 7.31141 48.4128 6.95119 44.9651C6.80071 43.9445 6.73445 42.9136 6.75306 41.8825C6.73448 29.1018 15.8358 18.0525 28.576 15.3888C30.1094 15.1501 31.6126 15.9618 32.2274 17.3606Z" fill="currentColor"></path>
                <path className="text-[#f3e9c0]" d="M40.7178 6.25268C54.9674 6.6152 66.9438 16.862 69.249 30.6635L69.227 30.7654L69.1641 30.9135L69.1729 31.32C69.1402 31.8586 68.9323 32.3768 68.5739 32.7954C68.2006 33.2314 67.6906 33.5283 67.129 33.6436L66.7865 33.6906L42.7841 35.2458C41.9857 35.3245 41.1907 35.0671 40.597 34.5375C40.1022 34.0962 39.7859 33.5004 39.6965 32.8585L38.0855 8.89094C38.0574 8.8099 38.0574 8.72204 38.0855 8.641C38.1075 7.98035 38.3983 7.35587 38.8929 6.90709C39.3876 6.45831 40.0448 6.22262 40.7178 6.25268Z" fill="currentColor"></path>
              </svg>
              <h3 className="h4 mb-2">Forms analytics</h3>
              <p>Non imperdiet facilisis nulla tellus morbi scelerisque eget adipiscing out vulputate convallis justo sed tellus vehicula.</p>
            </div>
          </div>
          <div className="col">
            <div className="text-center d-flex flex-column align-items-center px-xxl-4">
              <svg
                className="d-block mb-3 mb-md-4"
                width="76"
                height="76"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="35" fill="#3b82f6" />
                <path
                  d="M40 24v20m0-20l8 8m-8-8l-8 8M32 42h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H32a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z"
                  stroke="#f3e9c0"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3 className="h4 mb-2">Export Data</h3>
              <p className="text-muted text-center">
                A elementum, imperdiet enim, pretium etiam facilisi in aenean quam inrean mauris ultrices interdum congue ut, dictum et tortor.
              </p>
            </div>
          </div>

          <div className="col">
            <div className="text-center px-xxl-4">
              <svg className="d-inline-block mb-3 mb-md-4" width="76" height="75" viewBox="0 0 76 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="text-blue-500" d="M62.2797 36.3917C59.9969 33.7259 58.9596 31.4158 58.9596 27.4911V26.1567C58.9596 21.0423 57.7825 17.7471 55.2233 14.4519C51.2789 9.33435 44.6387 6.25 38.1382 6.25H37.8618C31.498 6.25 25.0658 9.19272 21.0531 14.1025C18.3542 17.4638 17.0404 20.9007 17.0404 26.1567V27.4911C17.0404 31.4158 16.0714 33.7259 13.7203 36.3917C11.9903 38.3556 11.4375 40.8797 11.4375 43.6116C11.4375 46.3466 12.3351 48.9368 14.1365 51.0423C16.4876 53.5665 19.8077 55.1779 23.1992 55.458C28.1095 56.0182 33.0198 56.2291 38.0016 56.2291C42.9802 56.2291 47.8905 55.8766 52.8039 55.458C56.1923 55.1779 59.5124 53.5665 61.8635 51.0423C63.6618 48.9368 64.5625 46.3466 64.5625 43.6116C64.5625 40.8797 64.0097 38.3556 62.2797 36.3917Z" fill="currentColor"></path>
                <path className="text-[#f3e9c0]" d="M44.277 60.0886C42.7148 59.755 33.1954 59.755 31.6332 60.0886C30.2977 60.397 28.8535 61.1146 28.8535 62.6883C28.9312 64.1895 29.8101 65.5145 31.0276 66.3549L31.0245 66.358C32.5991 67.5855 34.4471 68.366 36.382 68.6461C37.4131 68.7877 38.4629 68.7814 39.5313 68.6461C41.4631 68.366 43.3111 67.5855 44.8857 66.358L44.8826 66.3549C46.1001 65.5145 46.9791 64.1895 47.0567 62.6883C47.0567 61.1146 45.6125 60.397 44.277 60.0886Z" fill="currentColor"></path>
              </svg>
              <h3 className="h4 mb-2">Notifications</h3>
              <p>Diam, suspendisse velit cras ac. Lobortis diam volutpat, eget pellentesque viverra  inter vivamus id porta fermentum turpis.</p>
            </div>
          </div>
          <div className="col">
            <div className="text-center px-xxl-4">
              <svg className="d-inline-block mb-3 mb-md-4" width="76" height="75" viewBox="0 0 76 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="text-[#f3e9c0]" d="M59.2775 28.1906C57.8666 28.1906 55.9976 28.1594 53.6708 28.1594C47.9959 28.1594 43.3298 23.4625 43.3298 17.7344V7.68437C43.3298 6.89375 42.6986 6.25 41.9158 6.25H25.3863C17.6724 6.25 11.4375 12.5812 11.4375 20.3406V54.0125C11.4375 62.1531 17.9694 68.75 26.0299 68.75H50.6446C58.3307 68.75 64.5625 62.4594 64.5625 54.6937V29.5969C64.5625 28.8031 63.9344 28.1625 63.1484 28.1656C61.8272 28.175 60.2429 28.1906 59.2775 28.1906Z" fill="currentColor"></path>
                <path className="text-blue-500" d="M50.7639 8.02291C49.8295 7.05103 48.1982 7.71978 48.1982 9.06666V17.3073C48.1982 20.7635 51.0451 23.6073 54.5014 23.6073C56.6795 23.6323 59.7045 23.6385 62.2732 23.6323C63.5889 23.6292 64.2576 22.0573 63.3451 21.1073C60.0482 17.6792 54.1451 11.5354 50.7639 8.02291Z" fill="currentColor"></path>
                <path className="text-blue-500" fillRule="evenodd" clipRule="evenodd" d="M28.5447 35.5859H39.1229C40.4072 35.5859 41.451 34.5452 41.451 33.2609C41.451 31.9765 40.4072 30.9327 39.1229 30.9327H28.5447C27.2604 30.9327 26.2197 31.9765 26.2197 33.2609C26.2197 34.5452 27.2604 35.5859 28.5447 35.5859ZM28.5448 51.1926H45.5573C46.8417 51.1926 47.8854 50.152 47.8854 48.8676C47.8854 47.5833 46.8417 46.5395 45.5573 46.5395H28.5448C27.2605 46.5395 26.2198 47.5833 26.2198 48.8676C26.2198 50.152 27.2605 51.1926 28.5448 51.1926Z" fill="currentColor"></path>
              </svg>
              <h3 className="h4 mb-2">Multiple mails &amp; Forms</h3>
              <p>Mi feugiat hac id in. Sit elit placerat lacus nibh lorem ridiculus lectus  porttitor tincidunt sapien luctus tristique quam aenean accumsan.</p>
            </div>
          </div>
          <div className="col">
            <div className="text-center px-xxl-4">
              <svg className="d-inline-block mb-3 mb-md-4" width="76" height="75" viewBox="0 0 76 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="text-blue-500" d="M38.2703 68.75C37.8833 68.75 37.4964 68.6611 37.1471 68.4803L25.8937 62.655C22.7005 61.0003 20.2025 59.1433 18.252 56.9799C13.9828 52.2485 11.6075 46.175 11.5698 39.8747L11.4376 19.1383C11.4219 16.7451 12.9666 14.597 15.2758 13.788L35.9391 6.58371C37.166 6.14551 38.5346 6.13938 39.7835 6.56226L60.5255 13.5214C62.8472 14.2967 64.4171 16.4294 64.4297 18.8196L64.5618 39.5713C64.6027 45.8624 62.3093 51.9605 58.1061 56.7439C56.1776 58.938 53.7017 60.8226 50.5399 62.5079L39.3871 68.465C39.0411 68.6519 38.6573 68.7469 38.2703 68.75Z" fill="currentColor"></path>
                <path className="text-[#f3e9c0]" d="M35.8712 44.753C35.2672 44.756 34.6632 44.5385 34.1975 44.0911L28.2075 38.3301C27.2825 37.4353 27.2731 35.9828 28.1886 35.0819C29.1041 34.1779 30.5985 34.1687 31.5265 35.0605L35.8366 39.2035L46.3602 28.8276C47.2788 27.9236 48.7732 27.9144 49.6981 28.8061C50.6262 29.7009 50.6357 31.1565 49.7202 32.0543L37.5355 44.0696C37.0762 44.5231 36.4753 44.7499 35.8712 44.753Z" fill="currentColor"></path>
              </svg>
              <h3 className="h4 mb-2">Data security</h3>
              <p>Aliquam malesuada neque eget elit nulla vestibulum nunc cras. Neque, morbi non arcu sapien luctus ullamcorper lectus efficitur.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
