// components/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleTranslateCleanFixed from "./GoogleTranslateCleanFixed";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white shadow-md py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src="/logo.jpg"
            alt="Afghan Home Foundation Logo"
            className="h-10 w-auto"
          />
          <span className="text-2xl font-bold text-red-600">
            Afghan<span className="text-blue-600"> Home Foundation</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-gray-800 hover:text-red-600 font-medium">
            Home
          </Link>
          <Link
            to="/our-work"
            className="text-gray-800 hover:text-red-600 font-medium"
          >
            Our Work
          </Link>
          <Link
            to="/about-us"
            className="text-gray-800 hover:text-red-600 font-medium"
          >
            About Us
          </Link>
          <Link
            to="/news"
            className="text-gray-800 hover:text-red-600 font-medium"
          >
            News
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-red-600 font-medium"
          >
            Contact
          </Link>

          {/* Google Translate Dropdown */}
          <GoogleTranslateCleanFixed />

          {/* Get Involved Button */}
          <Link
            to="/get-involved"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ml-10"
          >
            Get Involved
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-0 w-full bg-white border-t border-gray-200 px-4 py-2 space-y-2 transition-transform duration-300 ease-in-out overflow-y-auto max-h-[calc(100vh-64px)] ${
          isMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="block text-gray-800 hover:text-red-600 mt-2"
        >
          Home
        </Link>
        <Link
          to="/our-work"
          onClick={() => setIsMenuOpen(false)}
          className="block text-gray-800 hover:text-red-600"
        >
          Our Work
        </Link>
        <Link
          to="/about-us"
          onClick={() => setIsMenuOpen(false)}
          className="block text-gray-800 hover:text-red-600"
        >
          About Us
        </Link>
        <Link
          to="/news"
          onClick={() => setIsMenuOpen(false)}
          className="block text-gray-800 hover:text-red-600"
        >
          News
        </Link>
        <Link
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="block text-gray-800 hover:text-red-600"
        >
          Contact
        </Link>

        {/* Mobile Google Translate Dropdown */}
        <GoogleTranslateCleanFixed />

        <Link
          to="/get-involved"
          onClick={() => setIsMenuOpen(false)}
          className="block bg-red-600 text-white font-bold py-2 px-4 rounded-full text-center hover:bg-red-700 mt-6"
        >
          Get Involved
        </Link>
      </div>
    </header>
  );
}

export default Header;
