"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, navLinks } from "@data/portfolioData";
import { FiMenu, FiX, FiFileText } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.getElementById(link.href.replace("#", ""))
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto mt-3 md:mt-4 mx-3 w-full max-w-5xl rounded-2xl transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10, 6, 30, 0.7)" : "rgba(10, 6, 30, 0.35)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid var(--glass-border)",
          boxShadow: scrolled
            ? "0 10px 40px rgba(0, 0, 0, 0.35)"
            : "0 4px 24px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="flex items-center justify-between h-14 md:h-16 px-4 md:px-5">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="group flex items-center gap-2 font-display font-bold text-lg transition-all duration-300"
          >
            <span
              className="flex items-center justify-center w-9 h-9 rounded-xl text-sm font-bold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              style={{
                background: "var(--gradient-primary)",
                color: "#fff",
                boxShadow: "0 4px 14px rgba(139, 92, 246, 0.35)",
              }}
            >
              SD
            </span>
            <span className="hidden sm:inline gradient-text">
              {personalInfo.firstName}
            </span>
          </button>

          {/* Desktop Nav — sliding active pill */}
          <div
            className="hidden lg:flex items-center gap-0.5 p-1 rounded-xl"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-colors duration-300"
                  style={{ color: isActive ? "#fff" : "var(--text-secondary)" }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-lg -z-10"
                      style={{ background: "var(--gradient-primary)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right — Resume + mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              href={personalInfo.resumeUrl}
              target="_blank"
              className="hidden sm:flex btn-primary items-center gap-2 text-xs py-2 px-4"
            >
              <FiFileText size={14} />
              Resume
            </Link>

            <button
              className="lg:hidden p-2 rounded-lg transition-colors duration-300"
              style={{ color: "var(--text-primary)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t"
              style={{ borderColor: "var(--glass-border)" }}
            >
              <div className="px-3 py-3 space-y-1">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => handleNavClick(link.href)}
                      className="block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
                      style={{
                        color: isActive ? "var(--accent-violet)" : "var(--text-secondary)",
                        background: isActive ? "rgba(139, 92, 246, 0.1)" : "transparent",
                      }}
                    >
                      {link.label}
                    </motion.button>
                  );
                })}
                <Link
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  className="btn-primary w-full flex items-center justify-center gap-2 mt-3"
                  onClick={() => setMobileOpen(false)}
                >
                  <FiFileText size={16} />
                  Download Resume
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
