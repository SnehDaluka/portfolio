"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@data/portfolioData";
import { FiExternalLink, FiGithub, FiStar } from "react-icons/fi";

const ProjectLinks = ({
  github,
  live,
  size = 16,
}: {
  github?: string;
  live?: string;
  size?: number;
}) => (
  <div className="flex gap-2">
    {github && (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 hover:text-violet-400"
        style={{ color: "var(--text-muted)" }}
        aria-label="GitHub"
      >
        <FiGithub size={size} />
      </a>
    )}
    {live && (
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 hover:text-violet-400"
        style={{ color: "var(--text-muted)" }}
        aria-label="Live Demo"
      >
        <FiExternalLink size={size} />
      </a>
    )}
  </div>
);

const Projects = () => {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Projects</span>
          <h2 className="section-heading gradient-text">Featured Work</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A selection of projects that showcase my skills in full-stack
            development, system design, and problem-solving.
          </p>
        </motion.div>

        {/* Featured project — wide horizontal card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="group mb-8 rounded-2xl overflow-hidden flex flex-col lg:flex-row"
          style={{
            background: "var(--glass-bg)",
            border: "1px solid var(--glass-border)",
            transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
          }}
          whileHover={{
            y: -4,
            borderColor: "var(--glass-border-hover)",
            boxShadow: "0 0 40px rgba(139, 92, 246, 0.15)",
          }}
        >
          {/* Image */}
          <div className="relative lg:w-2/5 h-56 lg:h-auto overflow-hidden flex-shrink-0">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#030014]/60 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/70 to-transparent lg:hidden" />

            {/* Hover overlay links */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
              {featured.github && (
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                  aria-label={`GitHub repository for ${featured.title}`}
                >
                  <FiGithub size={18} className="text-white" />
                </a>
              )}
              {featured.live && (
                <a
                  href={featured.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                  aria-label={`Live demo for ${featured.title}`}
                >
                  <FiExternalLink size={18} className="text-white" />
                </a>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-7 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(139, 92, 246, 0.1)",
                  color: "var(--accent-violet)",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                }}
              >
                <FiStar size={10} />
                Featured
              </span>
            </div>
            <div className="flex items-start justify-between mb-3">
              <h3
                className="text-2xl md:text-3xl font-bold font-display"
                style={{ color: "var(--text-primary)" }}
              >
                {featured.title}
              </h3>
              <ProjectLinks github={featured.github} live={featured.live} size={18} />
            </div>
            <p
              className="text-sm md:text-base leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              {featured.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {featured.techStack.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Remaining projects — 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rest.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="project-card group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="project-image object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <FiGithub size={18} className="text-white" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <FiExternalLink size={18} className="text-white" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className="text-xl font-bold font-display"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </h3>
                  <ProjectLinks github={project.github} live={project.live} />
                </div>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
