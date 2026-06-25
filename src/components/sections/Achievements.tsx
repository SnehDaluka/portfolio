"use client";

import { motion } from "framer-motion";
import { achievements } from "@data/portfolioData";
import { FiAward, FiCalendar } from "react-icons/fi";
import { GiSwordBrandish, GiTrophy } from "react-icons/gi";
import { BiCode } from "react-icons/bi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { HiOutlineAcademicCap } from "react-icons/hi";

const iconMap: Record<string, React.ElementType> = {
  LeetCode: GiSwordBrandish,
  Codeforces: BiCode,
  CodeChef: HiOutlineTrophy,
  "CodeRush 2024": FiAward,
  Udemy: HiOutlineAcademicCap,
};

const colorMap: Record<string, string> = {
  LeetCode: "#fbbf24",
  Codeforces: "#6366f1",
  CodeChef: "#06b6d4",
  "CodeRush 2024": "#f472b6",
  Udemy: "#a78bfa",
};

const Achievements = () => {
  const cpAchievements = achievements.filter((a) => a.category === "competitive");
  const certifications = achievements.filter((a) => a.category === "certification");

  return (
    <section id="achievements" className="section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Achievements</span>
          <h2 className="section-heading gradient-text">
            Competitive Programming &amp; Certifications
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Proven algorithmic problem-solving skills and industry-recognized
            certifications across multiple platforms.
          </p>
        </motion.div>

        {/* Competitive Programming */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-8">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--text-muted)" }}
            >
              Competitive Programming
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--glass-border)" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {cpAchievements.map((achievement, index) => {
              const Icon = iconMap[achievement.platform] || GiTrophy;
              const color = colorMap[achievement.platform] || "#8b5cf6";

              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="achievement-card group"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${color}15`,
                      border: `1px solid ${color}30`,
                    }}
                  >
                    <Icon size={24} style={{ color }} />
                  </div>

                  <h3
                    className="text-xl font-bold font-display mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {achievement.title}
                  </h3>

                  {achievement.rating && (
                    <p
                      className="text-2xl font-bold font-display mb-1"
                      style={{ color }}
                    >
                      {achievement.rating}
                    </p>
                  )}

                  <p
                    className="text-sm font-semibold mb-2"
                    style={{ color }}
                  >
                    {achievement.platform}
                  </p>

                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--text-muted)" }}
            >
              Certifications
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--glass-border)" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {certifications.map((cert, index) => {
              const Icon = iconMap[cert.platform] || HiOutlineAcademicCap;
              const color = colorMap[cert.platform] || "#8b5cf6";

              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="achievement-card group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${color}15`,
                      border: `1px solid ${color}30`,
                    }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>

                  <h3
                    className="text-sm font-bold font-display mb-1 leading-snug"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {cert.title}
                  </h3>

                  <p className="text-xs font-semibold mb-2" style={{ color }}>
                    {cert.platform}
                  </p>

                  <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
                    {cert.description}
                  </p>

                  {cert.date && (
                    <div className="flex items-center justify-center gap-1">
                      <FiCalendar size={10} style={{ color: "var(--text-muted)" }} />
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                        {cert.date}
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
