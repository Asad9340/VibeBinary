import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Developers() {
  const team = [
    {
      name: 'Hosnain Rafi',
      role: 'Backend Developer',
      bio: 'Expert in Node.js, Express, and database management. Handles server-side logic, API development, and system architecture.',
      image: 'https://i.postimg.cc/jj9WLHBv/rafi.jpg',
      github: 'https://github.com/hosnainRafi',
      linkedin: 'https://www.linkedin.com/in/hosnain-rafi1/',
      portfolio: 'https://portfolio-website-zeta-orcin-11.vercel.app/',
    },
    {
      name: 'Md Asadul Islam',
      role: 'Frontend Developer',
      bio: 'Specializes in React, Tailwind CSS, and responsive UI development. Focuses on creating modern and user-friendly interfaces.',
      image: 'https://i.postimg.cc/jqDXgvsq/profile.jpg',
      github: 'https://github.com/asad9340',
      linkedin: 'https://www.linkedin.com/in/asad9340/',
      portfolio: 'https://portfolio-2-0-two-jade.vercel.app/',
    },
    {
      name: 'Tanvir Ahmed Sifat',
      role: 'Frontend Developer',
      bio: 'Skilled in Angular, React, and UI/UX design. Ensures seamless user experiences across web and mobile platforms.',
      image: 'https://i.postimg.cc/R03h53qt/sifat.jpg',
      github: 'https://github.com/sifat26',
      linkedin: 'https://www.linkedin.com/in/sifat26/',
      portfolio: 'Upcoming',
    },
  ];

  return (
    <section className="pt-28 pb-20 bg-[#25262A] font-fontPrimary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-white mb-6">
          Our <span className="text-[#FFD700]">Developers</span>
        </h1>
        <p className="text-gray-200 mb-12">
          Meet the talented developers who bring creativity and expertise to
          every project.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="relative bg-[#2E2F33] backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-transparent hover:border-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:scale-105"
            >
              {/* Developer Image */}
              <div className="flex justify-center mb-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[250px] h-[250px] rounded-full object-cover border-white border-[6px] shadow object-top"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-2xl font-bold text-white">{member.name}</h3>
              <p className="text-[#D1E9FF] font-medium mb-4">{member.role}</p>

              {/* Bio */}
              <p className="text-gray-100 text-sm mb-6">{member.bio}</p>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-2">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-gray-700 transition flex items-center gap-2"
                >
                  GitHub <FaGithub />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-blue-500 transition flex items-center gap-2"
                >
                  LinkedIn <FaLinkedin />
                </a>
                <a
                  href={member.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-green-500 transition"
                >
                  Portfolio
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
