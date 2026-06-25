"use client";

import { motion } from "framer-motion";
import { experiences } from "@data/portfolioData";
import { FiBriefcase, FiMapPin } from "react-icons/fi";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Experience</span>
          <h2 className="section-heading gradient-text">
            Where I&apos;ve Worked
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Professional experience in enterprise software development,
            cloud infrastructure, and AI-driven solutions.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="timeline-line" />

          {experiences.map((exp, index) => {
            const isActive = exp.period.toLowerCase().includes("present");

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                <div
                  className="timeline-dot"
                  style={{
                    top: "8px",
                    ...(isActive && {
                      borderColor: "var(--accent-cyan)",
                      boxShadow: "0 0 14px rgba(6, 182, 212, 0.5)",
                    }),
                  }}
                />

                <div className="glass-card p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3
                        className="text-xl font-bold font-display"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <FiBriefcase size={14} style={{ color: "var(--accent-violet)" }} />
                        <span
                          className="text-sm font-semibold"
                          style={{ color: "var(--accent-violet)" }}
                        >
                          {exp.company}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-start sm:items-end gap-1.5">
                      <div className="flex items-center gap-2">
                        {isActive && (
                          <span
                            className="flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                            style={{
                              background: "rgba(6, 182, 212, 0.1)",
                              color: "var(--accent-cyan)",
                              border: "1px solid rgba(6, 182, 212, 0.25)",
                            }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full animate-pulse"
                              style={{ background: "var(--accent-cyan)" }}
                            />
                            Active
                          </span>
                        )}
                        <span
                          className="text-sm font-medium px-3 py-1 rounded-full"
                          style={{
                            background: "rgba(139, 92, 246, 0.1)",
                            color: "var(--accent-violet)",
                            border: "1px solid rgba(139, 92, 246, 0.2)",
                          }}
                        >
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiMapPin size={12} style={{ color: "var(--text-muted)" }} />
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-5">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ background: isActive ? "var(--accent-cyan)" : "var(--accent-violet)" }}
                        />
                        <span
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
