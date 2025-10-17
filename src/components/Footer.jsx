import logo2 from "../assets/logo2.png";

// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 mt-12 w-full py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div className="text-left">
          <img src={logo2} alt="Grandora Events Logo" className=" object-contain w-40"/>
          <p className="text-white">
            Turning moments into grand memories.
          </p>
        </div>

        {/* Contact Section */}
        <div className="text-left space-y-2"> 
          <h3 className="text-gold">Ring</h3>
          <p className="text-white"> +233 54 599 1504</p>
            <h3 className="text-gold">Write</h3>
          <p className="text-white">grandoraeventsgh@gmail.com</p> 
        </div>

              {/* Copyright Line */}
      <div className="text-left text-white">
        <h3 className="text-gold">Location</h3>
        <h3 className="text-white py-2">Accra, Ghana</h3>
        © {new Date().getFullYear()} Grandora Events Gh. All rights reserved.
      </div>
      </div>

    </footer>
  );
}
