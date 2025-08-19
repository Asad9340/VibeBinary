export default function Packages() {
  const packages = [
    {
      title: 'Basic',
      price: '$500',
      features: [
        'Custom Website Design',
        'Responsive Layout (Mobile & Desktop)',
        '2-3 Pages',
        'Up to 1 Revision',
        'Frontend: React, Tailwind CSS, Bootstrap',
      ],
      bgColor: 'bg-white',
      textColor: 'text-[#154D71]',
      buttonColor: 'bg-[#154D71] text-white hover:bg-[#0f2d3f]',
    },
    {
      title: 'Standard',
      price: '$1200',
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
      bgColor: 'bg-[#1B6B8F]',
      textColor: 'text-white',
      buttonColor: 'bg-yellow-400 text-[#154D71] hover:bg-yellow-500',
    },
    {
      title: 'Premium',
      price: '$2500',
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
      bgColor: 'bg-white',
      textColor: 'text-[#154D71]',
      buttonColor: 'bg-[#154D71] text-white hover:bg-[#0f2d3f]',
    },
  ];

  return (
    <section id="packages" className="py-20 bg-[#154D71] font-fontPrimary">
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
                <h3 className={`text-2xl font-bold mb-2 ${pkg.textColor}`}>
                  {pkg.title}
                </h3>
                <p className={`text-3xl font-extrabold mb-6 ${pkg.textColor}`}>
                  {pkg.price}
                </p>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center ${pkg.textColor}`}
                    >
                      <span className="mr-2 text-green-500">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`${pkg.buttonColor} font-semibold py-3 rounded-xl w-full shadow-md transition`}
              >
                Choose Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
