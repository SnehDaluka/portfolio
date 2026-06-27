"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@data/portfolioData";
import {
  FiMapPin,
  FiCalendar,
  FiMail,
  FiPhone,
  FiBook,
  FiAward,
  FiGlobe,
  FiBriefcase,
} from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi";

const infoItems = [
  {
    icon: HiOutlineAcademicCap,
    label: "Education",
    value: personalInfo.education.institution,
  },
  {
    icon: FiAward,
    label: "CGPA",
    value: personalInfo.education.cgpa,
  },
  {
    icon: FiBook,
    label: "Degree",
    value: personalInfo.education.degree,
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: personalInfo.location,
  },
  {
    icon: FiCalendar,
    label: "Birthday",
    value: personalInfo.birthday,
  },
  {
    icon: FiMail,
    label: "Email",
    value: personalInfo.email,
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: personalInfo.phone,
  },
  {
    icon: FiBriefcase,
    label: "Experience",
    value: "2 Internships",
  },
  {
    icon: FiGlobe,
    label: "Languages",
    value: "English, Hindi",
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">About Me</span>
          <h2 className="section-heading gradient-text">Get to Know Me</h2>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {personalInfo.bio}
          </p>
        </motion.div>

        {/* Info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {infoItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="glass-card flex items-start gap-3 p-4"
            >
              <div
                className="p-2.5 rounded-xl flex-shrink-0"
                style={{ background: "rgba(139, 92, 246, 0.1)" }}
              >
                <item.icon size={18} style={{ color: "var(--accent-violet)" }} />
              </div>
              <div className="min-w-0">
                <p
                  className="text-xs font-medium uppercase tracking-wider mb-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-sm font-medium truncate"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
