import { FaExternalLinkAlt, FaGithub, FaServer } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      name: "Doctor's Bd",
      desc: 'Online doctor booking platform where doctors can give prescriptions, manage follow-ups, and video call patients. Users can create multiple patient profiles, receive notifications and email alerts, and get AI-powered medical suggestions.',
      tech: [
        'React.js',
        'Tailwind CSS',
        'Axios',
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
      name: 'Admin Dashboard',
      desc: 'Interactive admin panel for managing users, content, and analytics.',
      tech: ['Angular', 'Node.js', 'MongoDB'],
      image: 'https://via.placeholder.com/400x250.png?text=Admin+Dashboard',
      live: '#',
      github: '#',
      server: '#',
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
    <section className="py-20 bg-[#154D71] font-fontPrimary" id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-6">
          Our <span className="text-[#FFD700]">Projects</span>
        </h2>
        <p className="text-lg text-gray-200 mb-12">
          Explore some of our recent projects demonstrating our expertise in web
          and mobile development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg group bg-white hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-200 text-sm mb-4">{project.desc}</p>

                {/* Technologies */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-white bg-blue-500 px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition"
                    >
                      Live <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-white bg-gray-800 px-3 py-1 rounded-md text-sm hover:bg-gray-900 transition"
                    >
                      GitHub <FaGithub />
                    </a>
                  )}
                  {project.server && (
                    <a
                      href={project.server}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-white bg-green-600 px-3 py-1 rounded-md text-sm hover:bg-green-700 transition"
                    >
                      Server <FaServer />
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
