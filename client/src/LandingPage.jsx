// src/LandingPage.js
import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-5xl font-bold" 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            Simplify Your Mailing Service
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg" 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Fast, reliable, and easy to use mailing service.
          </motion.p>
          <motion.a 
            href="#features" 
            className="mt-6 inline-block bg-white text-blue-600 py-2 px-4 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition duration-300"
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Get Started
          </motion.a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Features</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Easy Integration", description: "Integrate our service with your existing applications effortlessly." },
              { title: "Real-time Analytics", description: "Get insights into your mailing performance with real-time analytics." },
              { title: "Secure & Reliable", description: "Your data is safe with us, backed by industry-leading security measures." }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">What Our Users Say</h2>
          <div className="mt-10">
            <p className="italic">"This service has transformed the way we handle our mailing!"</p>
            <p className="mt-4 font-semibold ">- Happy Customer</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <footer className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <motion.a 
          href="#features" 
          className="mt-6 inline-block bg-white text-blue-600 py-2 px-4 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition duration-300"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Sign Up Now
        </motion.a>
      </footer>
    </div>
  );
};

export default LandingPage;