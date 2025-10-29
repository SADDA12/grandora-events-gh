import React, { useState } from "react";
import Footer from "../components/Footer";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [img1, img2, img3];

  return (
    <div className="relative min-h-screen bg-white">
      
        <div className="px-6 pt-24">
          <h1 className="text-2xl font-playfair text-left">OUR PORTFOLIO</h1>
        </div>

      {/* ---------- GALLERY SECTION ---------- */}
      <section className="px-6 py-14 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden shadow-lg group cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>
      

      {/* ---------- LIGHTBOX MODAL ---------- */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl mx-auto">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-auto shadow-2xl"
            />
            <button
              className="absolute top-2 right-2 bg-white/80 text-black px-3 py-1 rounded-full hover:bg-white"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* ---------- CALL TO ACTION ---------- */}
      <section className="text-center py-16 bg-gold/10">
        <h2 className="text-2xl font-playfair text-gray-800 mb-4">
          Ready to bring your dream event to life?
        </h2>
        <a
          href="/contact"
          className="inline-block bg-black text-white px-6 py-3 hover:bg-white hover:text-black hover:border transition"
        >
          Book a Consultation
        </a>
      </section>

      <Footer />
    </div>
  );
}

