// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Facebook, Music2 } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "ABOUT" },
    { to: "/services", label: "SERVICES" },
    { to: "/portfolio", label: "PORTFOLIO" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      {/* ---------- Desktop sidebar (left) ---------- */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:h-screen lg:fixed lg:top-0 lg:left-0 lg:bg-white lg:py-8 lg:px-6 lg:border-r lg:border-gray-100">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-playfair text-gold tracking-wide">
            Grandora
          </h1>
          <h1 className="text-2xl font-playfair text-gold tracking-wide">
            Events
          </h1>
        </div>

        {/* Centered nav links */}
        <nav className="flex flex-col gap-3 flex-1 justify-center items-center">
          {navLinks.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`py-2 rounded text-sm transition ${
                  active
                    ? "text-gold"
                    : "hover:underline"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto">
          <div className="flex items-center justify-center gap-4">
            <button className="border border-gray-200 p-2 hover:bg-black hover:text-white transition duration-300">
                <Instagram className="w-5 h-5" />
            </button>
            <button className="border border-gray-200 p-2 hover:bg-black hover:text-white transition duration-300">
                <Facebook className="w-5 h-5" />
            </button>
             <button className="border border-gray-200 p-2 hover:bg-black hover:text-white transition duration-300">
                <Music2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      {/* ---------- Mobile topbar (shows on small screens) ---------- */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="p-2 rounded-md"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>

          <div className="text-lg font-playfair text-gold text-center">
            <h1 className="text-2xl font-playfair text-gold tracking-wide">
            Grandora
          </h1>
          <h1 className="text-2xl font-playfair text-gold tracking-wide">
            Events
          </h1>
          </div>

          <div className="w-8" />
        </div>
      </header>

      {/* ---------- Mobile drawer (slide-in, floats above content) ---------- */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ease-in-out ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Dark overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ease-in-out ${
            open ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />

        {/* Sidebar panel itself */}
        <div
          className={`absolute top-0 left-0 bottom-0 w-64 bg-white shadow-lg p-6 transform transition-transform duration-500 ease-in-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="text-2xl font-playfair text-gold text-center">
              <h1 className="tracking-wide">
                Grandora
              </h1>
              <h1 className="tracking-wide">
                Events
              </h1>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-md"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Centered nav links (no icons) */}
          <nav className="flex flex-col items-center gap-3 mt-10">
            {navLinks.map((link) => {
              const active = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2 rounded text-lg transition ${
                    active
                      ? "text-gold"
                      : "hover:underline"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 flex justify-center">
            <div className="flex gap-4">
              <button className="border border-gray-200 p-2 hover:bg-black hover:text-white transition duration-300">
                <Instagram className="w-5 h-5" />
            </button>
            <button className="border border-gray-200 p-2 hover:bg-black hover:text-white transition duration-300">
                <Facebook className="w-5 h-5" />
            </button>
             <button className="border border-gray-200 p-2 hover:bg-black hover:text-white transition duration-300">
                <Music2 className="w-5 h-5" />
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
