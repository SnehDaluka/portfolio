"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@data/portfolioData";
import {
  FiMapPin,
  FiCalendar,
  FiMail,
  FiPhone,
  FiBook,
  FiAward,
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
          className="text-center mb-16"
        >
          <span className="section-label">About Me</span>
          <h2 className="section-heading gradient-text">
            Get to Know Me
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden"
              style={{
                border: "2px solid var(--glass-border-hover)",
                boxShadow: "0 0 40px rgba(139, 92, 246, 0.15)",
              }}
            >
              <Image
                src="/profile/profile-pic.jpg"
                alt="Sneh Kumar Daluka"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1"
          >
            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              {personalInfo.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                  className="flex items-start gap-3 p-3 rounded-xl"
                  style={{
                    background: "var(--glass-bg)",
                    border: "1px solid var(--glass-border)",
                  }}
                >
                  <div
                    className="p-2 rounded-lg flex-shrink-0"
                    style={{ background: "rgba(139, 92, 246, 0.1)" }}
                  >
                    <item.icon size={16} style={{ color: "var(--accent-violet)" }} />
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-xs font-medium uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.label}
                    </p>
                    <p className="text-sm font-medium truncate" style={{ color: "var(--text-primary)" }}>
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
