import { personalInfo } from "@data/portfolioData";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiHeart } from "react-icons/fi";

const Footer = () => {
  const { socials } = personalInfo;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: socials.github, label: "GitHub" },
    { icon: FiLinkedin, href: socials.linkedin, label: "LinkedIn" },
    { icon: FiTwitter, href: socials.twitter, label: "Twitter" },
    { icon: FiInstagram, href: socials.instagram, label: "Instagram" },
  ];

  return (
    <footer className="footer">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-sm flex items-center gap-1"
            style={{ color: "var(--text-muted)" }}
          >
            © {currentYear} {personalInfo.name}. Built with
            <FiHeart size={14} className="text-violet-500 mx-1" />
            using Next.js
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:text-violet-400 hover:-translate-y-0.5"
                style={{ color: "var(--text-muted)" }}
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
