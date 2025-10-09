import { Phone, Mail, Instagram } from "lucide-react";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-4xl font-playfair text-gold mb-4">Welcome to Grandora Events</h2>
      <p className="text-gray-600 max-w-lg">
        Crafting unforgettable weddings, corporate events, and celebrations with elegance and detail.
      </p>

       <div className="flex gap-4">
        <Phone className="text-gold w-5 h-5" />
        <Mail className="text-gray-600 w-5 h-5" />
        <Instagram className="text-pink-500 w-5 h-5" />
      </div>

        <Footer />
    </div>
  );
}
