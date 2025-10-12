import React from "react";
import Footer from "../components/Footer";
import contactbg1 from "../assets/contactbg1.jpg";





const Contact = () => {
  return (
    <div>
      {/* Background Section */}
      <div
        className="relative min-h-screen flex flex-col justify-center items-center px-6 py-24"
        style={{
          backgroundImage: `url(${contactbg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/90 to-white"></div>

        {/* Contact Content */}
        <div className="relative z-10 w-full max-w-4xl bg-white bg-opacity-70 shadow-lg p-8 md:p-12">
          <h2 className="text-2xl font-playfair text-left mb-8">
            GET IN TOUCH
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg mb-4">Contact Information</h3>
              <p className="text-gray-700 mb-2">
                We'd love to hear from you! Whether you're planning an event or
                just have a question, feel free to reach out.
              </p>

              <div className="mt-6 space-y-3 text-gray-700">
                <p>
                  <strong>Email:</strong> grandoraeventsgh@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> +233 54 599 1504
                </p>
                <p>
                  <strong>Address:</strong> Accra, Ghana
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 px-4 py-2 focus:ring-1 focus:ring-black outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 px-4 py-2 focus:ring-1 focus:ring-black outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 px-4 py-2 h-32 resize-none focus:ring-1 focus:ring-black outline-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-2 font-medium hover:bg-white hover:text-black hover:border transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
