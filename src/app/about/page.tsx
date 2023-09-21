import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="w-[100%] min-h-[81vh] md:flex items-center justify-center p-5">
      <div className="md:w-[50%] min-h-[100%] flex items-center justify-center animate-show">
        <div className="rounded-[100%] m-4 mx-4 hover:scale-110 transition-all duration-1000">
          <Image
            src="/profile/profile-pic.jpg"
            className=" about_img"
            width={400}
            height={400}
            priority={true}
            alt="profile_pic"
          />
        </div>
      </div>
      <div className="md:w-[50%] animate-show_right">
        <h1 className="heading">
          <span className="blue_gradient font-bold">Sneh Kumar Daluka</span>
        </h1>
        <p className="about_me_p">
          Hi! My name is{" "}
          <span className="text-purple-500 font-medium">Sneh Kumar Daluka</span>
          , I am a{" "}
          <span className="text-purple-500 font-medium">Web Developer</span>,
          and I'm very passionate and dedicated to my work. I have acquired the
          skills and knowledge necessary to make your project a success.
        </p>

        <div className="lg:flex flex-wrap font-inter text-lg tracking-wide">
          <div className="lg:w-[50%] flex py-2">
            <span className="px-1 text-purple-600">
              <i className="fa-solid fa-gift"></i>
            </span>
            <span className="px-1 font-bold text-slate-400">Birthday: </span>
            <span className="px-1">26.09.2002</span>
          </div>
          <div className="lg:w-[50%] flex py-2">
            <span className="px-1 text-purple-600">
              <i className="fa-solid fa-calendar-days"></i>
            </span>
            <span className="px-1 font-bold text-slate-400">Age: </span>
            <span className="px-1">{new Date().getFullYear() - 2002}</span>
          </div>
          <div className="lg:w-[50%] flex py-2">
            <span className="px-1 text-purple-600">
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <span className="px-1 font-bold text-slate-400">Location:</span>
            <span className="px-1">Bhopal, Madhya Pradesh, India</span>
          </div>
          <div className="lg:w-[50%] flex py-2">
            <span className="px-1 text-purple-600">
              <i className="fa-solid fa-gamepad"></i>
            </span>
            <span className="px-1 font-bold text-slate-400">Interests:</span>
            <span className="px-1">Reading, Video Games</span>
          </div>
          <div className="lg:w-[50%] flex py-2">
            <span className="px-1 text-purple-600">
              <i className="fa-solid fa-user-graduate"></i>
            </span>
            <span className="px-1 font-bold text-slate-400">Study:</span>
            <span className="px-1">
              Indian Institute of Information Technology, Bhopal
            </span>
          </div>
          <div className="lg:w-[50%] flex py-2">
            <span className="px-1 text-purple-600">
              <i className="fa-solid fa-graduation-cap"></i>
            </span>
            <span className="px-1 font-bold text-slate-400">Degree:</span>
            <span className="px-1">B. Tech.</span>
          </div>
          <div className="lg:w-[50%] flex py-2">
            <span className="px-1 text-purple-600">
              <i className="fa-solid fa-envelope"></i>
            </span>
            <span className="px-1 font-bold text-slate-400">Mail:</span>
            <span className="px-1">snehdaluka@gmai.com</span>
          </div>
          <div className="lg:w-[50%] flex py-2">
            <span className="px-1 text-purple-600">
              <i className="fa-solid fa-phone"></i>
            </span>
            <span className="px-1 font-bold text-slate-400">Phone:</span>
            <span className="px-1">+91 7544972548</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
