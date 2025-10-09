// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 mt-12 w-full py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div className="text-left">
          <h2 className="text-2xl font-playfair text-gold">Grandora</h2>
          <h2 className="text-2xl font-playfair text-gold mb-2">Events</h2>
          <p className=" text-gray-400">
            Turning moments into grand memories.
          </p>
        </div>

        {/* Contact Section */}
        <div className="text-left space-y-2"> 
          <h3 className="text-gold">Ring</h3>
          <p> +233 54 599 1504</p>
            <h3 className="text-gold">Write</h3>
          <p>grandoraeventsgh@gmail.com</p> 
        </div>

              {/* Copyright Line */}
      <div className="text-left text-white">
        <h3 className="text-gold">Location</h3>
        <h3 className="text-gray-400 py-2">Accra, Ghana</h3>
        © {new Date().getFullYear()} Grandora Events. All rights reserved.
      </div>
      </div>

    </footer>
  );
}
