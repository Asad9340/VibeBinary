import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="pt-28 pb-20 bg-[#154D71] font-fontPrimary">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Intro Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white mb-6">
            Get in <span className="text-[#FFD700]">Touch</span>
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? Fill out the form
            below or reach us via contact details. We’ll get back to you as soon
            as possible.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#34699A] rounded-xl shadow-xl p-10 flex flex-col gap-3"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-white font-medium">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-5 py-2.5 rounded-xl border border-teal-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition shadow-sm"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-white font-medium">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-5 py-2.5 rounded-xl border border-teal-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition shadow-sm"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="subject" className="mb-2 text-white font-medium">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter the subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="px-5 py-2.5 rounded-xl border border-teal-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition shadow-sm"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 text-white font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
              className="px-5 py-2.5 rounded-xl border border-teal-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition shadow-sm resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-white text-[#154D71] px-5 py-2 rounded-md font-semibold shadow-md hover:bg-gray-100 hover:shadow-lg transition mt-4"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
