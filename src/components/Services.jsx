import {
  FaReact,
  FaNodeJs,
  FaAngular,
  FaDatabase,
  FaBootstrap,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFlutter,
  SiDotnet,
  SiNextdotjs,
} from 'react-icons/si';

export default function Services() {
  const services = [
    {
      icon: <FaReact className="text-3xl text-cyan-500" />,
      title: 'React Development',
      desc: 'Build fast, scalable, and modern web apps with React.',
    },
    {
      icon: <SiTailwindcss className="text-3xl text-sky-400" />,
      title: 'Tailwind CSS',
      desc: 'Pixel-perfect, responsive UI with Tailwind CSS.',
    },
    {
      icon: <FaNodeJs className="text-3xl text-green-500" />,
      title: 'Node.js',
      desc: 'Backend development with Node.js for scalable apps.',
    },
    {
      icon: <SiExpress className="text-3xl text-gray-500" />,
      title: 'Express.js',
      desc: 'Robust APIs and backend services using Express.',
    },
    {
      icon: <SiDotnet className="text-3xl text-purple-500" />,
      title: 'ASP.NET',
      desc: 'Enterprise solutions and web apps with ASP.NET.',
    },
    {
      icon: <SiMongodb className="text-3xl text-green-600" />,
      title: 'MongoDB',
      desc: 'NoSQL database for modern web applications.',
    },
    {
      icon: <FaDatabase className="text-3xl text-yellow-500" />,
      title: 'SQL Databases',
      desc: 'Efficient and secure relational database solutions.',
    },
    {
      icon: <FaAngular className="text-3xl text-red-500" />,
      title: 'Angular',
      desc: 'Dynamic web apps with Angular framework.',
    },
    {
      icon: <SiFlutter className="text-3xl text-blue-500" />,
      title: 'Flutter',
      desc: 'Cross-platform mobile apps with Flutter.',
    },
    {
      icon: <FaBootstrap className="text-4xl text-purple-600" />,
      title: 'Bootstrap',
      desc: 'Quickly design responsive and mobile-first websites.',
    },
    {
      icon: <SiNextdotjs className="text-4xl text-black" />,
      title: 'Next.js',
      desc: 'Server-side rendered React applications with Next.js.',
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-[#154D71] py-20 font-fontPrimary"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Our Services
        </h2>
        <p className="mt-3 text-gray-200 max-w-2xl mx-auto">
          From web to mobile, frontend to backend — we deliver complete digital
          solutions using modern frameworks and tools.
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center border-[3px] hover:border-[#FFD700] hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon inside circle */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#e0f2fb] shadow-inner">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-semibold text-[#0E3B57]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
