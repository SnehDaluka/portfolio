"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
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
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => handleNavClick("#home")}
            className="font-display font-bold text-lg md:text-xl transition-all duration-300 hover:opacity-80"
          >
            <span className="gradient-text">{personalInfo.firstName}</span>
            <span style={{ color: "var(--text-secondary)" }}>.</span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`nav-link ${
                  activeSection === link.href.replace("#", "") ? "active" : ""
                }`}
              >
                {link.label}
              </button>
            ))}
            <Link
              href={personalInfo.resumeUrl}
              target="_blank"
              className="btn-primary ml-4 flex items-center gap-2 text-xs py-2 px-4"
            >
              <FiFileText size={14} />
              Resume
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg transition-colors duration-300"
            style={{ color: "var(--text-primary)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="lg:hidden mobile-menu-enter"
          style={{
            background: "rgba(3, 0, 20, 0.95)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid var(--glass-border)",
          }}
        >
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "bg-violet-500/10 text-violet-400"
                    : ""
                }`}
                style={{
                  color:
                    activeSection === link.href.replace("#", "")
                      ? "var(--accent-violet)"
                      : "var(--text-secondary)",
                }}
              >
                {link.label}
              </button>
            ))}
            <Link
              href={personalInfo.resumeUrl}
              target="_blank"
              className="btn-primary w-full flex items-center justify-center gap-2 mt-4"
              onClick={() => setMobileOpen(false)}
            >
              <FiFileText size={16} />
              Download Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
