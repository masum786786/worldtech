"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="w-full shadow-md font-sans">
      {/* --- Top Bar --- */}
      <div className="bg-teal-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm space-y-2 sm:space-y-0">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-teal-300 transition-colors">
              <FaXTwitter size={16} />
            </a>
            <a
              href="https://www.facebook.com/masum.raj.585"
              className="hover:text-teal-300 transition-colors"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/masum-raza/"
              className="hover:text-teal-300 transition-colors"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="https://www.instagram.com/i_am_masumraj/"
              className="hover:text-teal-300 transition-colors"
            >
              <FaInstagram size={16} />
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center sm:justify-end space-x-4 items-center text-sm">
            <a
              href="tel:+917257925345"
              className="flex items-center space-x-1 hover:text-teal-300 transition-colors"
            >
              <FaPhoneAlt size={12} />
              <span>+91 72579 25345</span>
            </a>
            <a
              href="mailto:masumraz84@gmail.com"
              className="flex items-center space-x-1 hover:text-teal-300 transition-colors"
            >
              <FaEnvelope size={12} />
              <span>masumraz84@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* --- Main Navbar --- */}
      <div className="bg-white shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-teal-600">World</span>
              <span className="text-sm font-normal text-gray-500 ml-1">
                Tech
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
            {[
              {
                name: "Services",
                links: [
                  { href: "/services/web", label: "Web Development" },
                  { href: "/services/mobile", label: "Mobile Apps" },
                  { href: "/services/marketing", label: "Digital Marketing" },
                  { href: "/services/wordpress", label: "WordPress Development" },
                ],
              },
              {
                name: "Technologies",
                links: [
                  { href: "/technologies/#", label: "React.js" },
                  { href: "/technologies/next", label: "Next.js" },
                  { href: "/technologies/html-css-js", label: "HTML / CSS / JS" },
                  { href: "/technologies/react-native", label: "React Native" },
                ],
              },
              {
                name: "About",
                links: [
                  { href: "/about/company", label: "Company" },
                  { href: "/about/team", label: "Team" },
                  { href: "/about/contact", label: "Contact" },
                ],
              },
            ].map((dropdown) => (
              <div
                key={dropdown.name}
                className="group relative"
                onMouseEnter={() => setActiveDropdown(dropdown.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center pb-1 border-b-2 transition-all duration-200 ${
                    activeDropdown === dropdown.name
                      ? "border-teal-600 text-teal-600"
                      : "border-transparent hover:border-teal-600 hover:text-teal-600"
                  }`}
                >
                  {dropdown.name}
                  <svg
                    className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                      activeDropdown === dropdown.name ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Content */}
                <div
                  className={`absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md py-2 w-52 z-20 transition-all duration-200 ease-in-out ${
                    activeDropdown === dropdown.name
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {dropdown.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 hover:bg-teal-50 hover:text-teal-700"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Static Links */}
            <Link
              href="/"
              className="hover:text-teal-600 border-b-2 border-transparent hover:border-teal-600 pb-1 transition-all duration-200"
            >
              Our Consortium
            </Link>
            <Link
              href="/"
              className="hover:text-teal-600 border-b-2 border-transparent hover:border-teal-600 pb-1 transition-all duration-200"
            >
              Careers
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 hover:text-teal-600 focus:outline-none"
            >
              {menuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* --- Mobile Menu --- */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="flex flex-col space-y-2 px-6 py-4 text-sm">
              {[
                { name: "Services", href: "/services" },
                { name: "Technologies", href: "/technologies" },
                { name: "About", href: "/about" },
                { name: "Our Consortium", href: "/consortium" },
                { name: "Careers", href: "/careers" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 hover:text-teal-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
