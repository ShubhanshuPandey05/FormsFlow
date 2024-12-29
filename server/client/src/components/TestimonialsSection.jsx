// src/components/TestimonialsSection.js
import React from 'react';

const testimonials = [
  { name: "John Doe", feedback: "MailerSend has transformed our email marketing!" },
  { name: "Jane Smith", feedback: "The analytics are incredibly helpful." },
  { name: "Alice Johnson", feedback: "Easy to use and highly effective." },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray -800">What Our Users Say</h2>
        <div className="mt-10 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-lg italic text-gray-600">"{testimonial.feedback}"</p>
              <p className="mt-4 font-semibold text-gray-800">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;