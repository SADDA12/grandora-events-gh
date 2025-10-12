import React, { useState } from "react";
import Footer from "../components/Footer";
import planning from "../assets/planning.jpg";
import coordination from "../assets/coordination.jpg";
import decor from "../assets/decor.webp";
import weddings from "../assets/weddings.jpg";
import corporateevents from "../assets/corporateevents.jpg";
import socialevents from "../assets/socialevents.jpg";
import flowerbg from "../assets/flowerbg.jpg";

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openEventIndex, setOpenEventIndex] = useState(null);

  const toggleAccordion = (index, type) => {
    if (type === "service") {
      setOpenIndex(openIndex === index ? null : index);
    } else {
      setOpenEventIndex(openEventIndex === index ? null : index);
    }
  };

  const services = [
    {
      title: "PLANNING",
      image: planning,
      description:
        "We handle every detail from concept to completion, ensuring smooth timelines, flawless coordination, and memorable experiences.",
    },
    {
      title: "COORDINATION",
      image: coordination,
      description:
        "Our coordination team ensures your day unfolds exactly as planned, managing logistics and vendors seamlessly.",
    },
    {
      title: "DECOR",
      image: decor,
      description:
        "From themed styling to elegant backdrops, our decor brings your vision to life with stunning aesthetics and creativity.",
    },
  ];

  const eventTypes = [
    {
      title: "WEDDINGS",
      image: weddings,
      description:
        "We plan and design unforgettable weddings, engagements, and anniversaries, from intimate ceremonies to grand celebrations. Our team handles everything from planning and coordination to decor, ensuring every moment reflects your unique love story. We also create custom floral pieces like bouquets, boutonnieres, centerpieces, bridal fans and elegant backdrops to complete your event.",
    },
    {
      title: "SOCIAL EVENTS",
      image: socialevents,
      description:
        "From birthdays, proposals, and private dinners to bridal and baby showers, we bring your ideas to life with vibrant, themed styling, from modern minimalist to lush, luxurious concepts. We also create balloon garlands, arches, and draped spaces that add warmth and a festive touch to every celebration.",
    },
    {
      title: "CORPORATE EVENTS",
      image: corporateevents,
      description:
        "We deliver professional and stylish corporate experiences, from business launches and galas to brand activations and conferences. Our goal is to design events that align with your brand image while ensuring flawless organization, elegant styling, and on-point logistics. ",
    },
  ];

  return (
  <div>
    <div
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${flowerbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay — now behind the content */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/90 to-white z-0"></div>

      {/* Content Wrapper — ensures content is above the gradient */}
      <div className="relative z-10">
        {/* WHAT WE OFFER SECTION */}
        <section className="mb-20 px-6 pt-24">
          <h2 className="text-2xl font-playfair text-left mb-10">
            WHAT WE OFFER
          </h2>

          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white shadow-lg overflow-hidden">
                <div
                  className="h-56 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <div className="p-4">
                  <h3>{service.title}</h3>
                  <p className="text-gray-700 text-sm mt-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Accordion View */}
          <div className="md:hidden">
            {services.map((service, index) => (
              <div key={index} className="mb-4 border overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-4 bg-gray-100"
                  onClick={() => toggleAccordion(index, "service")}
                >
                  <span className="font-semibold text-gray-800">
                    {service.title}
                  </span>
                  <span>{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-white">
                    <div
                      className="h-40 bg-cover bg-center mb-3 rounded-md"
                      style={{ backgroundImage: `url(${service.image})` }}
                    ></div>
                    <p className="text-gray-700 text-sm">
                      {service.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* EVENT TYPES SECTION */}
        <section className="mb-20 px-6 py-16">
          <h2 className="text-2xl font-playfair text-left mb-10">
            TYPES OF EVENTS
          </h2>

          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <div key={index} className="bg-white shadow-lg overflow-hidden">
                <div
                  className="h-56 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${event.image})` }}
                ></div>
                <div className="p-4">
                  <h3>{event.title}</h3>
                  <p className="text-gray-700 text-sm mt-2">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Accordion View */}
          <div className="md:hidden">
            {eventTypes.map((event, index) => (
              <div key={index} className="mb-4 border overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-4 bg-gray-100"
                  onClick={() => toggleAccordion(index, "event")}
                >
                  <span className="font-semibold text-gray-800">
                    {event.title}
                  </span>
                  <span>{openEventIndex === index ? "−" : "+"}</span>
                </button>
                {openEventIndex === index && (
                  <div className="p-4 bg-white">
                    <div
                      className="h-40 bg-cover bg-center mb-3 rounded-md"
                      style={{ backgroundImage: `url(${event.image})` }}
                    ></div>
                    <p className="text-gray-700 text-sm">
                      {event.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </div>
);
};

export default Services;
