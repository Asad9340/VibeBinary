import { useState } from 'react';
import { FaBars, FaTimes, FaLaptopCode } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollOrNavigate = to => {
    if (location.pathname === '/') {
      // Scroll to section if already on home page
      const element = document.getElementById(to);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 70, // adjust for navbar height
          behavior: 'smooth',
        });
      }
    } else {
      // Navigate to home page first
      window.location.href = `/#${to}`;
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#154D71] font-fontPrimary text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaLaptopCode className="text-2xl text-white" />
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">
            VibeBinary
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <Link
            to="/"
            className="hover:text-gray-200 transition cursor-pointer"
          >
            Home
          </Link>

          <li
            className="hover:text-gray-200 transition cursor-pointer"
            onClick={() => scrollOrNavigate('services')}
          >
            Services
          </li>

          <li
            className="hover:text-gray-200 transition cursor-pointer"
            onClick={() => scrollOrNavigate('projects')}
          >
            Projects
          </li>

          <Link
            to="/developers"
            className="hover:text-gray-200 transition cursor-pointer"
          >
            Developers
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-200 transition cursor-pointer"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-200 transition cursor-pointer"
          >
            Contact
          </Link>
        </ul>

        {/* Call to Action */}
        <div className="hidden md:block">
          <button className="bg-white text-[#154D71] px-5 py-2 rounded-md font-semibold shadow-md hover:bg-gray-100 hover:shadow-lg transition">
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-2xl cursor-pointer" />
          ) : (
            <FaBars className="text-2xl cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#154D71]">
          <ul className="flex flex-col items-center gap-6 py-6 font-medium">
            <li
              onClick={() => {
                setIsOpen(false);
                window.location.href = '/';
              }}
              className="hover:text-gray-200 transition cursor-pointer"
            >
              Home
            </li>

            <li
              onClick={() => scrollOrNavigate('services')}
              className="hover:text-gray-200 transition cursor-pointer"
            >
              Services
            </li>

            <li
              onClick={() => scrollOrNavigate('projects')}
              className="hover:text-gray-200 transition cursor-pointer"
            >
              Projects
            </li>

            <Link
              to="/developers"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-200 transition cursor-pointer"
            >
              Developers
            </Link>

            <Link
              to="/about"
              className="hover:text-gray-200 transition cursor-pointer"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-200 transition cursor-pointer"
            >
              Contact
            </Link>

            <button className="bg-white text-[#154D71] px-5 py-2 rounded-md font-semibold shadow-md hover:bg-gray-100 hover:shadow-lg transition">
              Get Started
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
