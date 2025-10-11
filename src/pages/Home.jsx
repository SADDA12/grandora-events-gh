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

        {/* ---------- How We Work Section ---------- */}
        <section
          className="relative bg-fixed bg-center bg-cover py-20 px-6 my-20"
          style={{
            backgroundImage: `url(${decor})`,
          }}
        >
          {/* Dark overlay to make content more readable */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content container */}
          <div className="relative max-w-6xl mx-auto text-center text-white">
            <h2 className="text-2xl font-playfair mb-12 text-white text-left">HOW WE WORK</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/90 text-gray-800 p-6 shadow-lg backdrop-blur-sm">
                <h3 className="mb-3">1. CONSULTATION</h3>
                <p>
                  We start by understanding your vision, budget, and goals to bring your dream event to life.
                </p>
              </div>

              <div className="bg-white/90 text-gray-800 p-6 shadow-lg backdrop-blur-sm">
                <h3 className="mb-3">2. PLANNING</h3>
                <p>
                  Our team handles every detail, from logistics to vendor coordination; for a stress-free experience.
                </p>
              </div>

              <div className="bg-white/90 text-gray-800 p-6 shadow-lg backdrop-blur-sm">
                <h3 className="mb-3">3. EXECUTION</h3>
                <p>
                  On the day, we ensure everything runs smoothly so you can focus on enjoying your special moment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Book a Consultation Section ---------- */}
        <section className="bg-white py-10 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-playfair mb-4">LET'S BRING YOUR VISION TO LIFE</h2>
            <p className="text-gray-600 mb-8">
              Whether it’s a wedding, corporate event, or private celebration, Grandora Events is ready to make it unforgettable.
            </p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-black shadow text-white px-8 py-3 text-lg font-medium hover:bg-white hover:text-black hover:border transition duration-300"
            >
              Book a Consultation
            </button>
          </div>
        </section>
        
        <Footer />
    </div>
  );
}
