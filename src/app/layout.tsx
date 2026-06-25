import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import ScrollProgress from "@components/ScrollProgress";
import "@styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sneh Kumar Daluka | Full-Stack Developer",
  description:
    "Portfolio of Sneh Kumar Daluka — Full-Stack Developer with experience in cloud infrastructure (AWS), AI-driven solutions, and competitive programming. B.Tech CSE from IIIT Bhopal.",
  keywords: [
    "Sneh Kumar Daluka",
    "Full-Stack Developer",
    "Software Engineer",
    "Portfolio",
    "React",
    "Next.js",
    "AWS",
    "IIIT Bhopal",
  ],
  authors: [{ name: "Sneh Kumar Daluka" }],
  openGraph: {
    title: "Sneh Kumar Daluka | Full-Stack Developer",
    description:
      "Full-Stack Developer with cloud & AI experience. B.Tech CSE from IIIT Bhopal (CGPA 9.16).",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Background Glow Effects */}
        <div className="bg-glow-1" aria-hidden="true" />
        <div className="bg-glow-2" aria-hidden="true" />
        <div className="bg-glow-3" aria-hidden="true" />

        {/* Dot Grid Overlay */}
        <div className="fixed inset-0 bg-grid pointer-events-none z-0" aria-hidden="true" />

        {/* Film Grain Overlay */}
        <div className="bg-grain" aria-hidden="true" />

        {/* Scroll Progress Bar */}
        <ScrollProgress />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
