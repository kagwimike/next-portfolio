import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Epic Kenya",
    description:
      "A full-stack travel and destination platform with authentication, image uploads, likes, comments, real-time notifications, and admin dashboard.",
    tech: ["React", "Node.js", "Express", "MySQL", "Socket.IO"],
    github: "https://github.com/kagwimike/epic-kenya", // change if needed
    live: "https://epic-kenya.vercel.app", // change if needed
  },
  {
    title: "Property Management System",
    description:
      "A system for managing properties, tenants, payments, and reports with role-based access control and secure authentication.",
    tech: ["Django", "React", "PostgreSQL", "REST API"],
    github: "https://github.com/kagwimike/property-management", // change if needed
    live: "https://property-management.vercel.app", // change if needed
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-black text-white border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured <span className="text-blue-500">Projects</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500 transition group"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
