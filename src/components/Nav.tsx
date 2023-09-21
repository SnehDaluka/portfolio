"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const pathname = usePathname();

  const addClass = function (text: string) {
    const list = document.querySelectorAll(".nav_text");

    for (let i of list) {
      i.classList.remove("active");

      if (i.innerHTML === text) {
        i.classList.add("active");
      }
    }
  };

  const handleClick = (e: any) => {
    setClicked(!clicked);

    addClass(e.target.innerText);
  };

  useEffect(() => {
    if (pathname === "/") addClass("Home");
    if (pathname === "/about") addClass("About");
    if (pathname === "/skills") addClass("Skills");
    if (pathname === "/projects") addClass("Projects");
    if (pathname === "/contact") addClass("Contact");
  }, []);
  return (
    <nav className="lg:flex items-center justify-between w-full lg:mb-4 lg:p-3 lg:px-5 animate-show_top">
      <div className="flex items-center justify-center max-lg:py-3">
        <div
          className="text-3xl border_style px-3 sm:hidden"
          onClick={handleClick}
        >
          {clicked ? (
            <i className="fa-solid fa-bars-staggered"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
        <Link href="/" className="blue_gradient name_text max-sm:my-5 ">
          Sneh Kumar Daluka
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="max-sm:hidden mx-auto lg:mx-0 sm:max-lg:bg-slate-800">
        <div className="flex justify-evenly gap-2 lg:gap-7">
          <Link
            href="/"
            className="nav_text grey_gradient"
            onClick={handleClick}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="nav_text grey_gradient"
            onClick={handleClick}
          >
            About
          </Link>
          <Link
            href="/skills"
            className="nav_text grey_gradient"
            onClick={handleClick}
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className="nav_text grey_gradient"
            onClick={handleClick}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="nav_text grey_gradient"
            onClick={handleClick}
          >
            Contact
          </Link>

          <Link
            href="https://drive.google.com/file/d/1wMt4WSYMORE4pIluTKzA0PUvpg9ICrVZ/view?usp=drive_link"
            className="nav_text grey_gradient"
            onClick={handleClick}
            target="_blank"
          >
            Resume <i className="fa-solid fa-up-right-from-square text-xl"></i>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {clicked && (
        <div className="sm:hidden max-sm:px-10">
          <div className=" flex flex-col ">
            <Link
              href="/"
              className="nav_text grey_gradient"
              onClick={handleClick}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="nav_text grey_gradient"
              onClick={handleClick}
            >
              About
            </Link>
            <Link
              href="/skills"
              className="nav_text grey_gradient"
              onClick={handleClick}
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className="nav_text grey_gradient"
              onClick={handleClick}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="nav_text grey_gradient"
              onClick={handleClick}
            >
              Contact
            </Link>
            <Link
              href="https://drive.google.com/file/d/1wMt4WSYMORE4pIluTKzA0PUvpg9ICrVZ/view?usp=drive_link"
              className="nav_text grey_gradient"
              target="_blank"
              onClick={handleClick}
            >
              Resume{" "}
              <i className="fa-solid fa-up-right-from-square text-xl"></i>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
