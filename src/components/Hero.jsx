import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-[#154D71] font-fontPrimary text-white pt-24 md:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Build Stunning Websites <br /> With{' '}
            <span className="text-[#FFD700]">VibeBinary</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-lg">
            We help businesses create modern, responsive, and scalable websites
            that leave a lasting impression. From design to deployment, we’ve
            got you covered.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-white text-[#154D71] px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 hover:shadow-lg transition flex items-center gap-2">
              Get Started <FaArrowRight />
            </button>
            <Link to='/about' className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#154D71] transition">
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image/Illustration */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://i.postimg.cc/KYvJcfFV/1000061219.webp"
            alt="Web Development Illustration"
            className="rounded-xl shadow-lg w-full h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
