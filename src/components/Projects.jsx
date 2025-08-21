import { FaExternalLinkAlt, FaGithub, FaServer } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      name: "Doctor's BD",
      desc: 'Online doctor booking platform where doctors can give prescriptions, manage follow-ups, and video call patients. Users can create multiple patient profiles, receive notifications and email alerts, and get AI-powered medical suggestions.',
      tech: [
        'React.js',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'MongoDB',
        'AI Integration',
      ],
      image: 'https://i.postimg.cc/Lsj2Rjkr/image.png',
      live: 'https://doctors-bd-frontend.vercel.app/',
      github: 'https://github.com/HosnainRafi/Doctors_BD_Frontend',
      server: 'https://github.com/HosnainRafi/Doctors_BD_Backend',
    },
    {
      name: 'Stay Vista Home Rentals',
      desc: 'A home rental platform for Bangladesh customers to book and rent different types of houses, similar to Airbnb. Users can explore listings, book properties, and manage reservations seamlessly.',
      tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
      image: 'https://i.postimg.cc/vmPFGXg2/image.png',
      live: 'https://stay-vista-a5a22.web.app/',
      github: 'https://github.com/Asad9340/Stay-Vista-Client',
      server: 'https://github.com/Asad9340/Stay-Vista-Server',
    },
    {
      name: 'Blog Nest',
      desc: 'BlogNest is a sleek, responsive web application built for bloggers who value simplicity, elegance, and expressive writing. Designed to streamline the writing and reading experience, it offers a clean and intuitive interface that allows creators to focus on what truly matters—sharing their stories.',
      tech: [
        'React',
        'Tailwind',
        'express.js',
        'Firebase',
        'Node.js',
        'MongoDB',
      ],
      image: 'https://i.postimg.cc/T3m1hzP5/blognest.png',
      live: 'https://blognest-d41ff.web.app/',
      github: 'https://github.com/sifat26/BlogNest_Client',
      server: 'https://github.com/sifat26/BlogNest_Project_Server_Side',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#25262A] font-fontPrimary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-5xl font-black text-white mb-7 tracking-tight drop-shadow">
          Our <span className="text-[#FFD700]">Projects</span>
        </h2>
        <p className="text-lg text-white/80 mb-14 max-w-2xl mx-auto leading-relaxed">
          Explore our best work—projects that power real businesses, crafted
          with modern tools and creative ideas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#23242A]/80 backdrop-blur-xl border-2 border-white/20 rounded-2xl shadow-[0_4px_14px_0_rgba(50,50,80,0.15)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_28px_0_rgba(50,50,120,0.25)] hover:border-[#FFD700]"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover rounded-t-2xl"
                  style={{ filter: 'brightness(96%)' }}
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#23242A] to-transparent"></div>
              </div>

              <div className="p-7 pt-5">
                <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-[#FFD700] transition duration-200">
                  {project.name}
                </h3>
                <p className="text-gray-200 text-sm mb-4 max-h-20 overflow-hidden">
                  {project.desc.length > 120
                    ? project.desc.slice(0, 120)
                    : project.desc}...
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#23242A] text-[#F3F4F6] text-xs px-3 py-1 rounded-full border border-[#35363A] shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 justify-center mt-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm md:text-base font-semibold md:font-bold text-white px-2 md:px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all"
                    >
                      Live
                      <FaExternalLinkAlt
                        size={14}
                        className="text-sm md:text-base"
                      />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm md:text-base font-semibold md:font-bold text-white px-2 md:px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all"
                    >
                      GitHub
                      <FaGithub size={14} className="text-sm md:text-base" />
                    </a>
                  )}
                  {project.server && (
                    <a
                      href={project.server}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm md:text-base font-semibold md:font-bold text-white px-2 md:px-3 py-1.5 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all"
                    >
                      Server
                      <FaServer size={14} className="text-sm md:text-base" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
