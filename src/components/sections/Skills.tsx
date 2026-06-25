"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@data/portfolioData";
import {
  SiReact, SiNextdotjs, SiRedux, SiTailwindcss, SiBootstrap, SiSass,
  SiNodedotjs, SiExpress, SiSpringboot, SiNestjs,
  SiDocker, SiJenkins, SiGit, SiGithub, SiPostman,
  SiMongodb, SiMysql,
  SiJavascript, SiTypescript, SiPython, SiCplusplus,
} from "react-icons/si";
import { FiDatabase, FiZap, FiLayout, FiCode } from "react-icons/fi";
import { FaJava, FaAws } from "react-icons/fa";

type IconEntry = { icon: React.ElementType; color: string };

const skillMeta: Record<string, IconEntry> = {
  "C++":             { icon: SiCplusplus,        color: "#00599C" },
  "Java":            { icon: FaJava,              color: "#ED8B00" },
  "Python":          { icon: SiPython,            color: "#3776AB" },
  "JavaScript":      { icon: SiJavascript,        color: "#F7DF1E" },
  "TypeScript":      { icon: SiTypescript,        color: "#3178C6" },
  "SQL":             { icon: FiDatabase,          color: "#336791" },
  "React":           { icon: SiReact,             color: "#61DAFB" },
  "Next.js":         { icon: SiNextdotjs,         color: "#E2E8F0" },
  "Redux Toolkit":   { icon: SiRedux,             color: "#764ABC" },
  "Material UI":     { icon: FiLayout,            color: "#007FFF" },
  "Tailwind CSS":    { icon: SiTailwindcss,       color: "#06B6D4" },
  "Bootstrap":       { icon: SiBootstrap,         color: "#7952B3" },
  "SCSS":            { icon: SiSass,              color: "#CC6699" },
  "Node.js":         { icon: SiNodedotjs,         color: "#339933" },
  "Express.js":      { icon: SiExpress,           color: "#E2E8F0" },
  "Spring Boot":     { icon: SiSpringboot,        color: "#6DB33F" },
  "NestJS":          { icon: SiNestjs,            color: "#E0234E" },
  "AWS (CDK, ECS)":  { icon: FaAws,                color: "#FF9900" },
  "Jenkins":         { icon: SiJenkins,           color: "#D33833" },
  "Docker":          { icon: SiDocker,            color: "#2496ED" },
  "Databricks":      { icon: FiZap,               color: "#FF3621" },
  "PySpark":         { icon: FiZap,               color: "#E25A1C" },
  "MongoDB":         { icon: SiMongodb,           color: "#47A248" },
  "MySQL":           { icon: SiMysql,             color: "#4479A1" },
  "Git":             { icon: SiGit,               color: "#F05032" },
  "GitHub":          { icon: SiGithub,            color: "#E2E8F0" },
  "Postman":         { icon: SiPostman,           color: "#FF6C37" },
  "VS Code":         { icon: FiCode,               color: "#007ACC" },
};

const categoryAccents: Record<string, string> = {
  Languages:        "#8b5cf6",
  Frontend:         "#06b6d4",
  Backend:          "#6db33f",
  "Cloud & DevOps": "#ff9900",
  Databases:        "#47a248",
  Tools:            "#f05032",
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  show:   { opacity: 1, y: 0,  scale: 1 },
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Skills</span>
          <h2 className="section-heading gradient-text">Technologies I Work With</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A comprehensive toolkit spanning frontend, backend, cloud, and DevOps technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => {
            const accent = categoryAccents[category.name] || "#8b5cf6";

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="glass-card p-6"
              >
                {/* Category Header */}
                <h3
                  className="text-sm font-bold font-display mb-5 flex items-center gap-2 uppercase tracking-wider"
                  style={{ color: accent }}
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: accent, boxShadow: `0 0 6px ${accent}` }}
                  />
                  {category.name}
                </h3>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2.5"
                >
                  {category.skills.map((skill) => {
                    const meta = skillMeta[skill];
                    const Icon = meta?.icon;
                    const iconColor = meta?.color ?? "#94a3b8";

                    return (
                      <motion.span
                        key={skill}
                        variants={itemVariants}
                        className="skill-badge flex items-center gap-1.5"
                      >
                        {Icon && (
                          <Icon
                            size={13}
                            style={{ color: iconColor, flexShrink: 0 }}
                          />
                        )}
                        {skill}
                      </motion.span>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
