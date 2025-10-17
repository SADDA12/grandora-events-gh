import { React, useState } from "react";
import emailjs from "emailjs-com";
import Footer from "../components/Footer";
import contactbg1 from "../assets/contactbg1.jpg";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send(
      "service_dxqt7rd", // EmailJS service ID
      "template_f4l6j5k", // EmailJS template ID
      formData,
      "kqHi6GmrrivO1tQtW" // EmailJS public key
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("success");
        setShowPopup(true);
        setFormData({ name: "", email: "", message: "" });
      },
      (err) => {
        console.log("FAILED...", err);
        setStatus("error");
        setShowPopup(true);
      }
    );
  };


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
            <form onSubmit={handleSubmit} className="space-y-5"> 
              <div> 
                <label className="block text-sm font-medium text-gray-700 mb-1"> Full Name </label> 
                <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 px-4 py-2 focus:ring-1 focus:ring-black outline-none" required /> 
              </div> 
                
              <div> 
                <label className="block text-sm font-medium text-gray-700 mb-1"> Email </label> 
                <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 px-4 py-2 focus:ring-1 focus:ring-black outline-none" required /> 
              </div> 
              
              <div> 
                <label className="block text-sm font-medium text-gray-700 mb-1"> Message </label> 
                <textarea name="message" placeholder="Write your message..." value={formData.message} onChange={handleChange} className="w-full border border-gray-300 px-4 py-2 h-32 resize-none focus:ring-1 focus:ring-black outline-none" required ></textarea> 
              </div> 
              
              <button type="submit" className="w-full bg-black text-white py-2 font-medium hover:bg-white hover:text-black hover:border transition-colors duration-300" > Send Message </button> 
            </form>

          </div>
        </div>

        {/* Popup Message */} 
        {showPopup && ( 
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 animate-fadeIn"> 
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center relative"> 
              <button onClick={() => setShowPopup(false)} className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl" >
                 &times; 
              </button> 
                {status === "success" ? ( <> 
                  <p className="text-green-600 font-semibold mb-2"> Message sent successfully! </p> 
                  <p className="text-gray-700 text-sm"> We’ll get back to you within 24–48 hours. </p> 
                </> ) : ( <> 
                  <p className="text-red-600 font-semibold mb-2"> Message failed to send. </p> 
                  <p className="text-gray-700 text-sm"> Please try again later. </p> 
                </> )} 
            </div> 
          </div> )}
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
