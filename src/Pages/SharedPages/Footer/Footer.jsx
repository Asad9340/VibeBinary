import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1A1B1E] text-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / Logo */}
        <div className="flex gap-3 items-center">
          <img
            className="w-full h-24 object-contain"
            src="https://i.postimg.cc/br4tngqP/vibe-binary-logo-removebg-preview.png"
            alt=""
          />
          <p className="text-gray-300">
            We help businesses build modern, responsive, and professional
            websites to grow their brand.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="flex items-center flex-wrap gap-5">
            <Link
              to="/"
              className="hover:underline hover:text-white transition"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="hover:underline hover:text-white transition"
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="hover:underline hover:text-white transition"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="hover:underline hover:text-white transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:underline hover:text-white transition"
            >
              Contact
            </Link>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p>Email: vibebinarybd@gmail.com</p>
          <p>Phone: +8801710101984</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} VibeBinary. All rights reserved.
      </div>
    </footer>
  );
}
