import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "UseMyCard",
    live: "https://usemycard.vercel.app/",
    stack: ["React", "Tailwind CSS"],
    desc: "A family-friendly fintech solution for sharing card names.",
    github: "https://github.com/sumitjha7/usemycard",
  },
  {
    name: "MoviesHunt",
    live: "https://movieshunt.vercel.app/",
    stack: ["Vanilla JS", "HTML", "CSS"],
    desc: "A clean movie listing website using vanilla JS.",
    github: "https://github.com/sumitjha7/movieshunt",
  },
  {
    name: "DevTooly",
    live: "https://devtooly.vercel.app/",
    stack: ["HTML", "CSS", "JavaScript"],
    desc: "A developer tools directory made with HTML/CSS/JS.",
    github: "https://github.com/sumitjha7/devtooly",
  },
  {
    name: "Personal Task Manager",
    live: "#",
    stack: ["React", "Tailwind CSS"],
    desc: "A productivity-focused task app with React.",
    github: "https://github.com/sumitjha7/task-manager",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white/60 backdrop-blur-lg rounded-xl shadow-2xl border-l-8 border-blue-200 p-6 flex flex-col gap-4 transition-transform hover:-translate-y-1 hover:shadow-2xl duration-200 animate-fade-in-up"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-800">{project.name}</h3>
                <div className="flex gap-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-lg transition-colors duration-200 hover:scale-110"
                    title="Live Link"
                  >
                    <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-slate-900 text-lg transition-colors duration-200 hover:scale-110"
                    title="GitHub"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium border border-blue-100">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-slate-600 text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 