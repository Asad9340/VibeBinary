import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function Packages() {
  const packages = [
    {
      title: 'Basic',
      price: '$100',
      features: [
        'Custom Website Design',
        'Responsive Layout (Mobile & Desktop)',
        '2-3 Pages',
        'Up to 1 Revision',
        'Frontend: React, Tailwind CSS, Bootstrap',
      ],
      bgColor: 'bg-[#2E2F33]',
      textColor: 'text-white',
      message: 'Hello, I am interested in the Basic Package.',
    },
    {
      title: 'Standard',
      price: '$200',
      features: [
        'Everything in Basic',
        'Up to 10 Pages',
        'Multiple Revisions',
        'Contact Form & Interactive Sections',
        'SEO Optimization',
        'Frontend: React, Next.js, Tailwind CSS, Bootstrap',
        'Backend: Node.js & Express',
        'Database: MongoDB or SQL',
      ],
      bgColor: 'bg-[#17313E]',
      textColor: 'text-white',
      message: 'Hello, I am interested in the Standard Package.',
    },
    {
      title: 'Premium',
      price: '$250',
      features: [
        'Everything in Standard',
        'Unlimited Pages',
        'Custom Animations & Interactions',
        'Performance Optimization',
        'Full Mobile Responsive & App Version',
        'E-commerce / Advanced Functionality',
        'Ongoing Support & Maintenance',
        'Backend: Node.js & Express',
        'Database: MongoDB & SQL',
      ],
      bgColor: 'bg-[#2E2F33]',
      textColor: 'text-white',
      message: 'Hello, I am interested in the Premium Package.',
    },
  ];

  const phoneNumber = '+8801754659997';

  return (
    <section id="packages" className="py-20 bg-[#25262A] font-fontPrimary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Our <span className="text-[#FFD700]">Packages</span>
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto leading-relaxed text-lg">
            Choose a package that fits your project requirements. We provide
            transparent pricing, modern tech stack solutions, and full support
            for your website or app development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`${pkg.bgColor} rounded-3xl shadow-xl p-8 flex flex-col justify-between transition transform hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {pkg.title}
                </h3>
                <p className="text-3xl font-extrabold mb-6 text-[#FFD700]">
                  {pkg.price}
                </p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-100">
                      <span className="mr-2 text-green-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(pkg.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white flex items-center text-base justify-center gap-2 font-medium py-2 rounded-md w-1/2 shadow-md hover:bg-[#22C55E] transition"
                >
                  <FaWhatsapp className="text-base" /> WhatsApp
                </a>

                {/* Call Button */}
                <a
                  href={`tel:${phoneNumber}`}
                  className="bg-[#3A8DFF] text-white flex items-center text-base justify-center gap-2 font-medium py-2 rounded-md w-1/2 shadow-md hover:bg-[#2563EB] transition"
                >
                  <FaPhoneAlt className="text-base" /> Call
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}