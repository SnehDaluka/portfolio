"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { personalInfo } from "@data/portfolioData";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowDown, FiFileText, FiMapPin } from "react-icons/fi";
import { useEffect, useState } from "react";

const stats = [
  { value: "9.16", label: "CGPA" },
  { value: "1935", label: "LeetCode Rating" },
  { value: "2", label: "Internships" },
];

const Hero = () => {
  const { name, roles, socials, resumeUrl } = personalInfo;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 md:pt-24 md:pb-16"
    >
      <div className="section-container w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left — Text Content */}
          <div className="flex-1 text-center lg:text-left">

            {/* Currently-at badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-wide"
              style={{
                background: "rgba(6, 182, 212, 0.08)",
                border: "1px solid rgba(6, 182, 212, 0.25)",
                color: "var(--accent-cyan)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "var(--accent-cyan)" }}
              />
              <FiMapPin size={11} />
              Currently working at Decision Point Pvt. Ltd.
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl mb-4"
              style={{ color: "var(--accent-violet)" }}
            >
              Hi there, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 gradient-text"
            >
              {name}
            </motion.h1>

            {/* Animated role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="h-10 md:h-12 mb-8 flex items-center justify-center lg:justify-start overflow-hidden"
            >
              <span className="text-xl md:text-2xl font-display font-medium" style={{ color: "var(--text-secondary)" }}>
                {"< "}
              </span>
              <div className="relative h-full flex items-center overflow-hidden mx-2">
                {roles.map((role, index) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: roleIndex === index ? 1 : 0,
                      y: roleIndex === index ? 0 : -30,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute text-xl md:text-2xl font-display font-medium whitespace-nowrap"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {role}
                  </motion.span>
                ))}
              </div>
              <span className="text-xl md:text-2xl font-display font-medium" style={{ color: "var(--text-secondary)" }}>
                {" />"}
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-base md:text-lg max-w-xl mb-8 mx-auto lg:mx-0"
              style={{ color: "var(--text-secondary)" }}
            >
              I&apos;m a <span className="font-semibold" style={{ color: "var(--text-primary)" }}>Software Developer</span> who builds scalable web applications and AI-driven solutions.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
            >
              <Link href={resumeUrl} target="_blank" className="btn-primary flex items-center gap-2">
                <FiFileText size={18} />
                View Resume
              </Link>
              <Link href="#contact" className="btn-outline flex items-center gap-2">
                Get in Touch
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex gap-3 justify-center lg:justify-start mb-12"
            >
              <Link href={socials.github} target="_blank" className="social-link" aria-label="GitHub">
                <FiGithub size={18} />
              </Link>
              <Link href={socials.linkedin} target="_blank" className="social-link" aria-label="LinkedIn">
                <FiLinkedin size={18} />
              </Link>
              <Link href={socials.twitter} target="_blank" className="social-link" aria-label="Twitter">
                <FiTwitter size={18} />
              </Link>
              <Link href={socials.instagram} target="_blank" className="social-link" aria-label="Instagram">
                <FiInstagram size={18} />
              </Link>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="grid grid-cols-3 gap-4 max-w-md lg:max-w-lg mx-auto lg:mx-0"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.3 + i * 0.08 }}
                  className="text-center lg:text-left px-4 py-3 rounded-xl"
                  style={{
                    background: "var(--glass-bg)",
                    border: "1px solid var(--glass-border)",
                  }}
                >
                  <p
                    className="text-lg font-bold font-display leading-none mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs leading-tight" style={{ color: "var(--text-muted)" }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="relative w-72 h-72 md:w-[360px] md:h-[360px] flex items-center justify-center">
              {/* Ambient glow behind */}
              <div
                className="absolute w-[85%] h-[85%] rounded-full blur-3xl"
                style={{ background: "var(--gradient-glow)", opacity: 0.5 }}
              />

              {/* Rotating gradient ring */}
              <div
                className="absolute inset-0 rounded-full animate-spin-slow"
                style={{
                  background:
                    "conic-gradient(from 0deg, #8b5cf6, #06b6d4, #6366f1, #8b5cf6)",
                  padding: "3px",
                  WebkitMask:
                    "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
                  mask:
                    "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
                }}
              />

              {/* Decorative dashed ring (counter-rotating) */}
              <div
                className="absolute inset-[-14px] rounded-full animate-spin-reverse"
                style={{
                  border: "1px dashed rgba(139, 92, 246, 0.25)",
                }}
              />

              {/* Orbiting accent dot */}
              <div className="absolute inset-[-14px] rounded-full animate-spin-slow">
                <span
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
                  style={{
                    background: "var(--accent-cyan)",
                    boxShadow: "0 0 12px var(--accent-cyan)",
                  }}
                />
              </div>

              {/* Profile picture */}
              <div
                className="relative w-[88%] h-[88%] rounded-full overflow-hidden"
                style={{
                  border: "4px solid var(--bg-primary)",
                  boxShadow: "0 0 60px rgba(139, 92, 246, 0.25)",
                }}
              >
                <Image
                  src="/profile/my-pic.png"
                  alt="Sneh Kumar Daluka"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 18%" }}
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link href="#about" className="flex flex-col items-center gap-2 group">
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown size={20} style={{ color: "var(--text-muted)" }} className="group-hover:text-violet-400 transition-colors" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
