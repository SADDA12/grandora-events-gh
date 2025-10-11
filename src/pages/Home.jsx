import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import planning from "../assets/planning.jpg";
import coordination from "../assets/coordination.jpg";
import decor from "../assets/decor.webp";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">      
        <Hero />

        {/* ---------- About Section ---------- */}
        <section className="py-10 bg-gray-50 w-full">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              We specialize in planning, coordination and decor, bring style, class and professionalism to weddings, corporate functions,
              and social celebrations.
            </p>
            <a
              href="/about"
              className="text-gray-600 underline hover:italic"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* ---------- What We Offer Section ---------- */}
        <section className="py-10 bg-gray-50 w-full">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-playfair mb-10 text-left">WHAT WE OFFER</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="relative overflow-hidden shadow-lg group">
                <img
                  src={planning}
                  alt="Event Planning"
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end justify-center pb-4">
                  <h3 className="text-white text-lg">PLANNING</h3>
                </div>
              </div>

              {/* Service 2 */}
              <div className="relative overflow-hidden shadow-lg group">
                <img
                  src={coordination}
                  alt="Event Coordination"
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end justify-center pb-4">
                  <h3 className="text-white text-lg">COORDINATION</h3>
                </div>
              </div>

              {/* Service 3 */}
              <div className="relative overflow-hidden shadow-lg group">
                <img
                  src={decor}
                  alt="Event Decor"
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end justify-center pb-4">
                  <h3 className="text-white text-lg">DECOR</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <Footer />
    </div>
  );
}
