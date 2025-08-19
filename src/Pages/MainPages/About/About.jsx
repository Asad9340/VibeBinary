import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What does your agency specialize in?',
      answer:
        'We specialize in creating modern, scalable, and user-friendly websites. From personal portfolios to enterprise solutions, we provide complete web development services including UI/UX design, frontend, and backend development.',
    },
    {
      question: 'Do you work with startups or established companies?',
      answer:
        'Both! Whether you’re a new business looking for your first digital presence or an established brand seeking a redesign, we tailor our services to meet your needs.',
    },
    {
      question: 'How do you ensure project success?',
      answer:
        'We follow a collaborative process — understanding client requirements, creating wireframes, designing UI, developing the app, and delivering with testing and continuous feedback to ensure high-quality results.',
    },
    {
      question: 'Can you build custom solutions?',
      answer:
        'Yes. We design and develop custom solutions that are fully aligned with your business goals and optimized for performance, security, and scalability.',
    },
  ];

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-28 pb-20 bg-[#154D71] font-fontPrimary">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Intro Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-extrabold text-white mb-6">
            About <span className="text-[#FFD700]">Our Agency</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking{' '}
            <span className="font-semibold text-yellow-400">
              digital agency
            </span>{' '}
            committed to transforming ideas into powerful online experiences.
            With expertise in design, frontend, and backend development, we
            craft websites that are fast, secure, and visually stunning.
          </p>
        </div>

        {/* Who We Are Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="/src/assets/logo.webp"
              alt="Our Team"
              className="rounded-3xl shadow-2xl h-72 w-96 object-cover border-4 border-yellow-400"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-100 leading-relaxed mb-4">
              We’re a team of designers, developers, and problem-solvers who
              believe in collaboration and creativity. Each project we work on
              blends technical expertise with design thinking, ensuring digital
              solutions that are both beautiful and high-performing.
            </p>
            <p className="text-gray-100 leading-relaxed">
              Our agency thrives on teamwork, transparency, and innovation. We
              don’t just deliver websites — we build long-term partnerships with
              our clients, helping them grow and succeed in the digital world.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-yellow-400 rounded-2xl shadow-lg p-5 cursor-pointer hover:shadow-2xl transition"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h4>
                  <ChevronDown
                    className={`w-5 h-5 text-white transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="mt-3 text-white leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-[#154171]/5 border-2 border-yellow-400 text-white rounded-3xl py-12 shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Let’s Build Together</h3>
          <p className="text-lg max-w-2xl mx-auto mb-6 text-white">
            Ready to take your business online or upgrade your existing
            presence? Our team is here to craft a digital solution tailored to
            your needs.
          </p>
          <a className="bg-white text-[#154D71] px-5 py-2 rounded-md font-semibold shadow-md hover:bg-gray-100 hover:shadow-lg transition">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
