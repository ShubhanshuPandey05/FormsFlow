import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <div className="bg-white h-[92vh] px-8 text-center flex flex-col md:flex-row  md:justify-between justify-center items-center relative">
        <img src="./assets/img/about/Hero.jpg" alt="" className="w-[820px]" />
        <div>
          <h1 className="text-4xl font-extrabold mb-4 mt-4 ">About FormsFlow</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Simplifying form submissions and data management for modern businesses.
            Manage your workflows effortlessly with our powerful tools.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="min-h-[84vh] py-5 px-8 flex justify-center items-center">
        <div className="container mx-auto py-12-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:w-[90vw]">
          <div className="">
            <h2 className="text-3xl font-bold text-black mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 mb-6">
              FormsFlow allows you to seamlessly connect your website's forms to our platform.
              From managing submissions to exporting data in multiple formats, we make it all hassle-free.
            </p>
            <ul className=" pl-6 text-gray-600 space-y-2">
              <li className="pt-1 mt-2 justify-center">
                <i className="ai-check-alt text-primary fs-4 mt-n1 me-2">
                </i>
                Create and manage multiple forms with ease.
              </li>
              <li className="pt-1 mt-2 justify-center">
                <i className="ai-check-alt text-primary fs-4 mt-n1 me-2">
                </i>
                Link multiple emails to a single account for better flexibility.
              </li>
              <li className="pt-1 mt-2 justify-center">
                <i className="ai-check-alt text-primary fs-4 mt-n1 me-2">
                </i>
                Export form data in Excel, PDF, or plain text formats.
              </li>
              <li className="pt-1 mt-2 justify-center">
                <i className="ai-check-alt text-primary fs-4 mt-n1 me-2">
                </i>
                Enjoy a developer-friendly experience with easy integration code.
              </li>
            </ul>
          </div>
          <img
            src="./assets/img/about/whytochooseus.png"
            alt="Form Integration Illustration"
            className=""
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-52 bg-blue-500 px-8 text-center text-white mt-10">
        <h2 className="text-4xl font-[1000] text-white mb-4">Get Started with FormsFlow</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Take control of your form submissions today. Join our growing community and experience seamless form management.
        </p>
        <a
          href="/get-started"
          className="inline-block px-6 py-3 bg-white text-black font-bold rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
};

export default About;
