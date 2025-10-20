// src/pages/Contact.jsx
import React from "react";

function Contact() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-red-600">
        Contact Us
      </h1>

      <p className="text-gray-700 text-justify leading-relaxed mb-10">
        We’d love to hear from you! Whether you have questions, want to
        collaborate, or are seeking support, Afghan Home Foundation is always
        ready to connect. Please fill out the form below or reach out directly
        through our contact details. Together, we can build a stronger and more
        united Afghan community.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Address:</span> Warsaw, Poland
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Email:</span>{" "}
            info@afghanhomefoundation.org
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Phone:</span> +48 123 456 789
          </p>

          <p className="text-gray-700 leading-relaxed mt-6">
            You can also follow us on our social platforms to stay updated on
            upcoming events, news, and community activities.
          </p>

          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-600 hover:text-red-600 transition text-xl"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-red-600 transition text-xl"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-red-600 transition text-xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-600 mb-6">
            Send a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="+48 123 456 789"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 italic">
          Thank you for reaching out to Afghan Home Foundation — together, we
          can continue building hope and community.
        </p>
      </div>
    </div>
  );
}

export default Contact;
