"use client"; // Required for modal interactivity

import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Epic Kenya",
    description:
      "A full-stack travel and destination platform with authentication, image uploads, likes, comments, real-time notifications, and admin dashboard.",
    tech: ["React", "Node.js", "Express", "MySQL", "Socket.IO"],
    github: "https://github.com/kagwimike/epic-kenya",
    live: "https://epic-kenya.vercel.app",
    image: "/projects/epic-kenya.png",
  },
  {
    title: "Property Management System",
    description:
      "A system for managing properties, tenants, payments, and reports with role-based access control and secure authentication.",
    tech: ["Django", "React", "PostgreSQL", "REST API"],
    github: "https://github.com/kagwimike/property-management",
    live: "https://property-management.vercel.app",
    image: "/projects/property-management.png",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const openModal = (project: any) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section
      id="projects"
      className="py-24 bg-black text-white border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500 transition group cursor-pointer"
              onClick={() => openModal(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Animated Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/80 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
              />

              {/* Modal Content */}
              <motion.div
                className="fixed inset-0 flex items-center justify-center z-50 p-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gray-900 rounded-xl max-w-3xl w-full p-6 relative">
                  <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="rounded-lg mb-4 w-full object-cover"
                  />
                  <p className="text-gray-300 mb-4">{selectedProject.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tech.map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    <button
                      onClick={closeModal}
                      className="ml-auto px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
