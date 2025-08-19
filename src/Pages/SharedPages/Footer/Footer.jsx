import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#154D71] text-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand / Logo */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">VibeBinary</h1>
          <p className="text-gray-300">
            We help businesses build modern, responsive, and professional
            websites to grow their brand.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p>Email: vibebinarybd@gmail.com</p>
          <p>Phone: +8801710101984</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-gray-300 mb-4">
            Subscribe to get updates about our services.
          </p>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition">
              Subscribe
            </button>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} VibeBinary. All rights reserved.
      </div>
    </footer>
  );
}
