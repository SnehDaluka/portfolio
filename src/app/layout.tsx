import Footer from "@components/Footer";
import Nav from "@components/Nav";
import "@styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sneh Kumar Daluka | Portfolio",
  description: "Portfolio created using NextJS and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <header>
          <Nav />
        </header>
        <main className="main">{children}</main>
        <footer className="mt-auto absolute top-[100%] w-[100%]">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
