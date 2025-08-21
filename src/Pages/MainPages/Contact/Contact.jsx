/* eslint-disable no-unused-vars */
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaSpinner, FaPaperPlane } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fill all fields correctly.');
      return;
    }

    setLoading(true);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.send(serviceId, templateId, formData, publicKey).then(
      response => {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setLoading(false);
      },
      err => {
        toast.error('Failed to send message. Try again later.');
        setLoading(false);
      }
    );
  };

  return (
    <section className="pt-20 pb-20 bg-[#25262A] font-fontPrimary">
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
          className="bg-[#2E2F33] rounded-xl shadow-xl p-10 flex flex-col gap-3"
        >
          {/* Name */}
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
              className="px-5 py-2.5 rounded-md border border-teal-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition shadow-sm"
            />
            {errors.name && (
              <span className="text-red-600 text-sm mt-1">{errors.name}</span>
            )}
          </div>

          {/* Email */}
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
              className="px-5 py-2.5 rounded-md border border-teal-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition shadow-sm"
            />
            {errors.email && (
              <span className="text-red-600 text-sm mt-1">{errors.email}</span>
            )}
          </div>

          {/* Subject */}
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
              className="px-5 py-2.5 rounded-md border border-teal-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition shadow-sm"
            />
            {errors.subject && (
              <span className="text-red-600 text-sm mt-1">
                {errors.subject}
              </span>
            )}
          </div>

          {/* Message */}
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
              className="px-5 py-2.5 rounded-md border border-teal-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition shadow-sm resize-none"
            />
            {errors.message && (
              <span className="text-red-600 text-sm mt-1">
                {errors.message}
              </span>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#154D71] text-white px-5 py-2 rounded-md font-semibold shadow-md hover:bg-[#154D61] hover:shadow-lg transition mt-4 flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" /> Sending...
              </>
            ) : (
              <>
                <FaPaperPlane /> Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
