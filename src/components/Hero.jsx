import React, { useState, useEffect } from "react";
import heroimg1 from "../assets/heroimg1.jpg";
import heroimg2 from "../assets/heroimg2.jpg";
import heroimg3 from "../assets/heroimg3.jpg";


const slides = [
  {
    image: heroimg1,
    title: "Welcome to Grandora Events",
    subtitle: "We design timeless experiences for every occasion.",
    buttonText: "Book a Consultation",
  },
  {
    image: heroimg2,
    title: "Turning Dreams into Reality",
    subtitle: "From concept to execution — we handle it all beautifully.",
    buttonText: "Let’s Get Started",
  },
  {
    image: heroimg3,
    title: "Elegant. Memorable. Effortless.",
    subtitle: "Every detail matters — trust Grandora to get it right.",
    buttonText: "Plan Your Event",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* White overlay box */}
          <div className="absolute inset-0 flex items-end bg-black/30">
            <div className="bg-white backdrop-blur-sm text-center p-8 max-w-lg shadow-lg lg:ml-10 lg:mb-10">
              <h1 className="text-3xl font-playfair mb-3">
                {slide.title}
              </h1>
              <p className="text-gray-600 mb-6">{slide.subtitle}</p>
              <button className="bg-black text-white px-6 py-3 font-medium shadow hover:bg-white hover:border hover:text-black transition">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Optional navigation dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-black" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
