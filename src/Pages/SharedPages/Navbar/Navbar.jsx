import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaLaptopCode } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Update active section on scroll (only on home page)
  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        const sections = ['services', 'projects', 'packages'];
        let current = '';
        sections.forEach(section => {
          const element = document.getElementById(section);
          if (element && window.scrollY >= element.offsetTop - 100) {
            current = section;
          }
        });
        setActiveSection(current);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname]);

  const scrollOrNavigate = to => {
    if (location.pathname === '/') {
      const element = document.getElementById(to);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 70,
          behavior: 'smooth',
        });
        setActiveSection(to);
      }
    } else {
      window.location.href = `/#${to}`;
    }
    setIsOpen(false);
  };

  const linkClasses = path =>
    location.pathname === path
      ? 'text-yellow-400 font-semibold transition'
      : 'hover:text-gray-200 transition';

  const sectionClasses = section =>
    activeSection === section
      ? 'text-yellow-400 font-semibold transition cursor-pointer'
      : 'hover:text-gray-200 transition cursor-pointer';

  return (
    <nav className="bg-[#1A1B1E] font-fontPrimary text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          {/* <FaLaptopCode className="text-2xl text-white" />
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">
            VibeBinary
          </h1> */}
          <img
            className="w-28 object-contain"
            src="https://i.postimg.cc/br4tngqP/vibe-binary-logo-removebg-preview.png"
            alt=""
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <Link to="/">Home</Link>

          <li
            className={sectionClasses('services')}
            onClick={() => scrollOrNavigate('services')}
          >
            Services
          </li>

          <li
            className={sectionClasses('projects')}
            onClick={() => scrollOrNavigate('projects')}
          >
            Projects
          </li>
          <li
            onClick={() => scrollOrNavigate('packages')}
            className={sectionClasses('packages')}
          >
            Packages
          </li>

          <Link to="/developers" className={linkClasses('/developers')}>
            Developers
          </Link>
          <Link to="/about" className={linkClasses('/about')}>
            About
          </Link>
          <Link to="/contact" className={linkClasses('/contact')}>
            Contact
          </Link>
        </ul>

        {/* Call to Action */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollOrNavigate('packages')}
            className="bg-[#154D71] text-white px-5 py-2 rounded-md font-semibold shadow-md hover:bg-[#154D61] hover:shadow-lg transition"
          >
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
        <div className="md:hidden bg-[#17313E]">
          <ul className="flex flex-col items-center gap-6 py-6 font-medium">
            <li
              onClick={() => {
                setIsOpen(false);
                window.location.href = '/';
              }}
            >
              Home
            </li>

            <li
              onClick={() => scrollOrNavigate('services')}
              className={sectionClasses('services')}
            >
              Services
            </li>

            <li
              onClick={() => scrollOrNavigate('projects')}
              className={sectionClasses('projects')}
            >
              Projects
            </li>
            <li
              onClick={() => scrollOrNavigate('packages')}
              className={sectionClasses('packages')}
            >
              Packages
            </li>

            <Link
              to="/developers"
              onClick={() => setIsOpen(false)}
              className={linkClasses('/developers')}
            >
              Developers
            </Link>

            <Link to="/about" className={linkClasses('/about')}>
              About
            </Link>
            <Link to="/contact" className={linkClasses('/contact')}>
              Contact
            </Link>

            <button
              onClick={() => scrollOrNavigate('packages')}
              className="bg-white text-[#154D71] px-5 py-2 rounded-md font-semibold shadow-md hover:bg-gray-100 hover:shadow-lg transition"
            >
              Get Started
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
