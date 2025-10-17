import Footer from "../components/Footer";
import flowerbg from "../assets/flowerbg.jpg";
import flower from "../assets/flower.jpg";

export default function About() {
  return (
    <div className="text-center">
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${flowerbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/90 to-white"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-6xl px-6 py-16 lg:py-24">
          <h2 className="text-2xl font-playfair mb-10 text-left">ABOUT US</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Image (hidden on small screens) */}
            <div className="hidden md:block">
              <img
                src={flower}
                alt="About Grandora Events"
                className="shadow-lg object-cover w-full h-[400px]"
              />
            </div>

            {/* Right Content */}
            <div className="text-left ">
              <p className="mb-4">
                At{" "}
                <span className="text-gold font-semibold">Grandora Events</span>
                , we believe every celebration deserves a touch of elegance, detail, and creativity. From weddings and social gatherings to corporate functions, we turn ideas into beautifully executed realities.
              </p>
              <p>
                Our team combines passion with precision to deliver exceptional experiences for our clients. Whether it’s planning, décor, or full coordination, we handle every element with care so you can focus on enjoying the moment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
